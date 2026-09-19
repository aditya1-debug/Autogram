<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F75C7E,100:8E75B2&height=220&section=header&text=AutoGram&fontSize=70&fontColor=ffffff&animation=fadeIn&desc=AI-Powered%20Instagram%20Automation&descAlignY=62&descSize=20" width="100%"/>

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=800&color=F75C7E&center=true&vCenter=true&width=700&lines=Post+smarter%2C+not+harder;AI-generated+captions+on+autopilot;Scheduled%2C+published%2C+done+while+you+sleep+%F0%9F%98%B4"/>

<br/>

![Last Commit](https://img.shields.io/github/last-commit/aditya1-debug/Autogram?style=for-the-badge&color=F75C7E&labelColor=1a1a1a)
![Repo Size](https://img.shields.io/github/repo-size/aditya1-debug/Autogram?style=for-the-badge&color=8E75B2&labelColor=1a1a1a)
![Top Language](https://img.shields.io/github/languages/top/aditya1-debug/Autogram?style=for-the-badge&color=FFD93D&labelColor=1a1a1a)
![Stars](https://img.shields.io/github/stars/aditya1-debug/Autogram?style=for-the-badge&color=FFB6C1&labelColor=1a1a1a)
<br/>
<img src="https://visitor-badge.laobi.icu/badge?page_id=aditya1-debug.Autogram&color=F75C7E" alt="visitors"/>

<br/><br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini%20API-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Instagram](https://img.shields.io/badge/Instagram%20Graph%20API-E4405F?style=for-the-badge&logo=instagram&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-0A0A0A?style=for-the-badge&logo=inngest&logoColor=white)

<p>
  <a href="#-features">Features</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-author">Author</a>
</p>

</div>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 🎯 Why AutoGram?

Ever had a killer content idea at 11 PM and zero energy to write the caption, pick the hashtags, or remember to actually hit "post" the next morning? **AutoGram fixes that.**

It's a full-stack dashboard that plugs straight into the **Instagram Graph API**, hands your content ideas to **Google's Gemini** for AI-generated (and self-reviewed) captions, and uses **Inngest** to schedule everything so it goes live exactly when it should — even while you're asleep, in class, or just done thinking about social media for the day. 😴📱

> 💡 Think of it as a tiny social-media manager that never asks for a raise.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## ⚡ Features

<div align="center">

![](https://img.shields.io/badge/🧠_AI--Generated_Captions-F75C7E?style=for-the-badge&labelColor=1a1a1a)
![](https://img.shields.io/badge/✅_Self--Reviewing_AI-C86B9B?style=for-the-badge&labelColor=1a1a1a)
![](https://img.shields.io/badge/📅_Auto--Scheduling-A06FA5?style=for-the-badge&labelColor=1a1a1a)
![](https://img.shields.io/badge/📊_Clean_Dashboard-8E75B2?style=for-the-badge&labelColor=1a1a1a)
![](https://img.shields.io/badge/🔐_Secure_Backend-6C5B9E?style=for-the-badge&labelColor=1a1a1a)
![](https://img.shields.io/badge/🔗_Real_IG_Integration-4A4990?style=for-the-badge&labelColor=1a1a1a)

</div>

- 🧠 **AI-Powered Content Generation** — Gemini API drafts post captions and *reviews its own output* for quality and consistency before anything goes live
- 📅 **Set-and-Forget Scheduling** — Inngest handles background jobs so posts publish reliably, right on time, with zero manual babysitting
- 📊 **Clean React Dashboard** — a simple, focused control center to manage content without touching Instagram's app at all
- 🔐 **Secure Backend by Design** — Node.js/Express backend keeps API tokens and business logic off the client, talking to Instagram's Graph API safely
- 🔗 **Real Instagram Integration** — not a mockup — this connects to the actual Instagram Graph API for genuine automated publishing

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 🧠 How It Works

```
   ┌─────────────┐      ┌──────────────────┐      ┌──────────────────────┐
   │   React     │ ───▶ │  Node / Express    │ ───▶ │  Instagram Graph API   │
   │  Dashboard  │      │     Backend        │      │    (Publishing)        │
   └─────────────┘      └────────┬──────────┘      └──────────────────────┘
                                  │
                       ┌──────────┴──────────┐
                       ▼                     ▼
              ┌────────────────┐   ┌──────────────────┐
              │   Gemini API    │   │      Inngest       │
              │ (Content Gen +  │   │  (Job Scheduling)   │
              │  Self-Review)   │   │                      │
              └────────────────┘   └──────────────────┘
```

1. 💭 You queue up a content idea from the dashboard
2. 🧠 **Gemini** generates the caption — and reviews itself for tone, quality, and consistency
3. ⏰ **Inngest** schedules the job for the right time
4. 🚀 When that moment hits, the backend calls the **Instagram Graph API** and the post goes live 🎉

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 📸 Screenshots & Demo

<div align="center">

![](https://img.shields.io/badge/🚧_Coming_Soon-FFD93D?style=for-the-badge&labelColor=1a1a1a)

*Drop a dashboard screenshot or a quick screen-recording GIF right here so people can see AutoGram in action before they clone it.*

</div>

```md
<!-- Example once you have one -->
![AutoGram dashboard](./assets/dashboard-preview.png)
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,firebase,git,github&theme=dark" />

</div>

| Layer | Tech |
|---|---|
| 🎨 Frontend | React.js |
| ⚙️ Backend | Node.js, Express.js |
| 🧠 AI / Content | Google Gemini API |
| 📲 Social Integration | Instagram Graph API |
| ⏱️ Job Scheduling | Inngest |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v18+ recommended)
- A Meta Developer app with Instagram Graph API access
- A Gemini API key
- An Inngest account (free tier works fine)

### 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/aditya1-debug/Autogram.git
cd Autogram

# 2. Install dependencies
npm install

# 3. Set up your environment variables (see below)
cp .env.example .env

# 4. Run it 🚀
npm run dev
```

### 🔑 Environment Variables

Create a `.env` file in the root and fill in your own keys:

```env
GEMINI_API_KEY=your_gemini_api_key
INSTAGRAM_ACCESS_TOKEN=your_instagram_graph_api_token
INSTAGRAM_ACCOUNT_ID=your_ig_business_account_id
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
PORT=5000
```

*(Adjust the variable names to match whatever your `.env.example` actually uses — swap this in freely.)*

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 🗺️ Roadmap

- [ ] 👥 Multi-account support
- [ ] 📈 Analytics dashboard (reach, engagement, best time-to-post insights)
- [ ] 🖼️ Image/carousel generation alongside captions
- [ ] 🌐 Support for additional platforms (Threads, LinkedIn?)

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 🤝 Contributing

Got an idea to make this cooler? PRs and issues are always welcome — fork it, branch it, break it, fix it, send it in. 💪

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:F75C7E,100:8E75B2&height=4" width="100%"/>

## 👨‍💻 Author

<div align="center">

**Aditya Pandey**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aditya1-debug)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/adityapandey111)
[![Gmail](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:adityaaadi3767@gmail.com)

### ⭐ If AutoGram saved you from writing one more caption at midnight, consider dropping a star!

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:8E75B2,100:F75C7E&height=150&section=footer"/>
