// ============================================================
// Instagram Graph API + Facebook OAuth Server
// ============================================================

import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 5000;

// ============================================================
// ENV VARIABLES
// ============================================================

const APP_ID = process.env.META_APP_ID;
const APP_SECRET = process.env.META_APP_SECRET;
const REDIRECT_URI = process.env.META_REDIRECT_URI;
console.log("REDIRECT URI:", REDIRECT_URI);

const GRAPH_API_BASE = 'https://graph.facebook.com/v19.0';

// ============================================================
// STEP 1: Generate Login URL
// ============================================================

app.get('/auth/login', (req, res) => {
  const params = new URLSearchParams({
    client_id: APP_ID,
    redirect_uri: REDIRECT_URI,
    scope:
  'instagram_basic,pages_show_list,pages_read_engagement,instagram_manage_insights,instagram_content_publish',
    response_type: 'code',
  });

  const loginUrl = `https://www.facebook.com/v19.0/dialog/oauth?${params.toString()}`;

  res.redirect(loginUrl);
});

// ============================================================
// STEP 2: Callback Route (Receives ?code=)
// ============================================================

app.get('/auth/callback', async (req, res) => {
  try {
    const code = req.query.code;

    if (!code) {
      return res.status(400).send('No authorization code received.');
    }

    // --------------------------------------------------------
    // Exchange Code for Short-Lived Access Token
    // --------------------------------------------------------

    const tokenParams = new URLSearchParams({
      client_id: APP_ID,
      client_secret: APP_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
    });

    const tokenResponse = await fetch(
      `${GRAPH_API_BASE}/oauth/access_token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: tokenParams.toString(),
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      return res.status(400).json(tokenData);
    }

    const shortLivedToken = tokenData.access_token;

    // --------------------------------------------------------
    // Exchange for Long-Lived Token (60 days)
    // --------------------------------------------------------

    const longLivedResponse = await fetch(
      `${GRAPH_API_BASE}/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${shortLivedToken}`
    );

    const longLivedData = await longLivedResponse.json();

    const longLivedToken = longLivedData.access_token;

    // --------------------------------------------------------
    // Get Facebook Pages
    // --------------------------------------------------------

    const pagesResponse = await fetch(
      `${GRAPH_API_BASE}/me/accounts?access_token=${longLivedToken}`
    );

    const pagesData = await pagesResponse.json();

    if (!pagesData.data || pagesData.data.length === 0) {
      return res.json({
        message: 'No Facebook Pages found.',
        pagesData,
      });
    }

    const pageId = pagesData.data[0].id;

    // --------------------------------------------------------
    // Get Instagram Business Account ID
    // --------------------------------------------------------

    const igResponse = await fetch(
      `${GRAPH_API_BASE}/${pageId}?fields=instagram_business_account&access_token=${longLivedToken}`
    );

    const igData = await igResponse.json();

    const igUserId = igData.instagram_business_account?.id;

    if (!igUserId) {
      return res.json({
        message:
          'No Instagram Business account connected to this Facebook Page.',
        igData,
      });
    }

    // --------------------------------------------------------
    // SUCCESS RESPONSE
    // --------------------------------------------------------

    res.json({
      message: 'Login successful',
      shortLivedToken,
      longLivedToken,
      pageId,
      instagramBusinessAccountId: igUserId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Authentication failed.');
  }
});

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
