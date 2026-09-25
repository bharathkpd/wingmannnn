# WINGMANN — Date with Intent

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bharathkpd/wingmannnn)

A premium, production-quality editorial relationship platform website built for **Wingmann** centered around the philosophy **"Date with Intent"**.

Inspired by the high craft of premium Framer design studios and modern digital publications, this experience reimagines matchmaking into a continuous, interactive storytelling journey without generic SaaS grids, AI clichés, or dopamine retention loops.

---

## Brand Philosophy

> *"Meeting someone is easy. But finding someone who wants the same thing isn't."*

Wingmann introduces thoughtful human matchmaking for those ready to date with intent. All members undergo personal verification with an emotionally intelligent Wingmate before receiving curated one-to-one introductions, brief 10-minute audio conversation calls, and real-world dinner dates.

---

## Tech Stack & Architecture

- **Framework**: Next.js 16 (Turbopack, App Router)
- **UI Runtime**: React 19
- **Styling**: Tailwind CSS v4 with bespoke `@theme` editorial tokens
- **Typography**: 
  - `Fraunces` (Google Fonts, display serif with optical sizes & italic accents)
  - `Plus Jakarta Sans` (Google Fonts, modern grotesque sans-serif)
- **Animations & Physics**: Framer Motion (spring curves & gestures)
- **Smooth Inertia Scrolling**: Lenis
- **Atmospheric Craft**: Subtle SVG film-grain texture (`0.025` opacity)
- **Icons**: Custom inline SVGs & select Lucide-React icons

---

## Features & Narrative Architecture

1. **Floating Navigation & Fullscreen Mobile Drawer**: Frosted glass transition with backdrop blur, quick CTA triggers, and clean responsive layout.
2. **Hero Section (Mobile First-Impression Overhaul)**: Immediate above-the-fold photo showcase with tap-to-cycle / auto-advancing cards, fluid typography, and 3D desktop parallax stack.
3. **The Problem Narrative**: Editorial fatigue cycle (*Swiping → Matching → Texting → Waiting → Ghosting → Repeating*), climax quote, and a 4-stage choice fatigue scrubber.
4. **Interactive Swiping Simulator**: Physics-based drag card deck demonstrating sensory overload followed by serene calm (*"Less noise. More intention. That's Wingmann."*).
5. **The Wingmate Concept**: High-impact human guide visual with floating editorial conversation prompts (*"What are you actually looking for?"*).
6. **Curated Introductions**: Monogrammed introduction reveal card with verified candidate preview and Wingmate alignment rationale.
7. **5-Step How It Works**: Lookbook spread on desktop (`01`–`05`) and vertical touch timeline on mobile.
8. **Intentional vs. Endless**: Split-screen editorial manifesto contrasting algorithmic fatigue with intentional human matchmaking.
9. **Real Conversation Simulator**: Audio phone call mockup with live waveform visualizer, call timer, and vocal energy emphasis.
10. **Real Date Experience**: Bespoke stationery invitation card (*Friday, 7:30 PM • Artisan Café*) with interactive RSVP attendance toggle.
11. **Download App Modal**: Framer-style modal with official Apple App Store and Google Play cards, QR code mobile scanning, and invite-only cohort access details.
12. **Waitlist Application Modal**: 5-step conversational membership application form with live progress tracking, input validation, and warm confirmation state.
13. **Privacy & Cookie Consent**: LocalStorage-persisted privacy banner with granular preferences and dedicated legal policy dialogs.

---

## Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/bharathkpd/wingmannnn.git
cd wingmannnn
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

### 4. Automated Verification Suite
```bash
node scripts/verify-website.mjs
```
Runs 37 automated checks verifying brand copy tokens, layout requirements, and asset delivery.

---

## 1-Click Live Deployment

Click the button below to deploy this repository directly to **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bharathkpd/wingmannnn)

---

## License

Private & Confidential © 2026 Wingmann. All rights reserved. Built with intent.
