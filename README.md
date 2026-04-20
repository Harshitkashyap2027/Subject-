# lvlBase — Run Your Entire Organization on One Platform

> An AI-powered, all-in-one platform built for schools, hospitals, corporations, and government agencies. Unify operations, communications, and analytics under a single intelligent system.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup & Firebase Configuration](#setup--firebase-configuration)
- [Running the App](#running-the-app)
- [Pages](#pages)
- [Firebase Auth Features](#firebase-auth-features)

---

## Overview

**lvlBase** is a fully static, multi-page website built with **pure HTML, CSS, and JavaScript** — zero frameworks, zero build tools. Firebase is used as the backend for user authentication (email/password, Google, GitHub, and password reset). The site includes a full landing page, 24 content pages, a protected dashboard, and complete auth flows.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Custom CSS (no framework) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Auth & Backend | [Firebase Authentication](https://firebase.google.com/products/auth) (compat SDK v9) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts CDN |
| Icons | Inline SVG |

---

## Project Structure

```
public/                        ← All website files live here
├── css/
│   └── style.css              ← Complete design system (variables, utilities, components, animations)
├── js/
│   ├── firebase-config.js     ← Firebase app initialization (replace with your config)
│   ├── auth.js                ← Firebase Auth: sign in, register, Google/GitHub OAuth, reset, sign out
│   └── main.js                ← Shared layout (navbar + footer injection), mobile menu, scroll animations,
│                                 FAQ accordion, tab switching, filter buttons, active nav link
├── index.html                 ← Landing page (all sections)
├── login.html                 ← Sign in (email + Google + GitHub)
├── register.html              ← Create account
├── forgot-password.html       ← Password reset via email
├── dashboard.html             ← Protected post-login dashboard
├── pricing.html               ← Pricing plans + feature comparison table
├── features.html              ← Feature grid
├── about.html                 ← About lvlBase, team, values
├── blog.html                  ← Blog post cards
├── docs.html                  ← Documentation with sidebar
├── faq.html                   ← Accordion FAQ with category filters
├── solutions.html             ← Education, Healthcare, Corporate, Government
├── contact.html               ← Contact form
├── demo.html                  ← Demo page
├── integrations.html          ← Integration cards
├── careers.html               ← Open positions
├── use-cases.html             ← Use case cards
├── support.html               ← Support center
├── legal.html                 ← Terms, Privacy, Cookies, Data Protection (tabs)
├── partners.html              ← Partner program tiers
├── developers.html            ← API docs, SDK, code snippets
├── ai-lab.html                ← AI Lab showcase
├── marketplace.html           ← App marketplace with filters
└── product.html               ← Product overview

app/                           ← Original Next.js source (preserved, not used by the static site)
components/
lib/
```

---

## Features

- 🚀 **Hero section** with animated floating dashboard preview and social proof
- 🏭 **Industry cards** — Education, Healthcare, Corporate, Government — each with features, roles & stats
- ✨ **AI-powered insights** showcase section
- 💰 **Pricing section** with Free, Pro, and Enterprise tiers
- 💬 **Testimonials** (5 real-feel quotes), **FAQ accordion**, and **Final CTA** sections
- 🔐 **Full auth flow**: Login (email + Google + GitHub), Register, Forgot Password, Sign Out
- 🏠 **Protected dashboard** with stats, AI insights, performance chart, activity feed & guild leaderboard
- 📄 **24 pages** covering every route from the original Next.js app
- 🎨 Dark-first design — glassmorphism, gradient text, neon badges, mesh backgrounds, glow effects
- 📱 Fully responsive (mobile-first with hamburger menu)
- ⚡ Scroll-reveal animations using Intersection Observer
- 🔗 All nav links and footer links wired up with active-state highlighting

---

## Prerequisites

All you need is a **web browser** and a **Firebase project**. No Node.js, no build step, no package manager.

---

## Setup & Firebase Configuration

### 1. Clone the repository

```bash
git clone https://github.com/Harshitkashyap2027/Subject-.git
cd Subject-
```

### 2. Create a Firebase project

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Click **"Add project"** and follow the setup wizard
3. In the project dashboard, click **"Add app"** → choose **Web** (`</>`)
4. Register the app (no need to set up Firebase Hosting)
5. Copy the `firebaseConfig` object shown

### 3. Enable Authentication providers

In the Firebase Console → **Authentication** → **Sign-in method**, enable:

- ✅ Email/Password
- ✅ Google *(optional, needed for Google login button)*
- ✅ GitHub *(optional — requires a GitHub OAuth App; see [Firebase docs](https://firebase.google.com/docs/auth/web/github-auth))*

### 4. Paste your Firebase config

Open `public/js/firebase-config.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

> ⚠️ Never commit real API keys to a public repository. Consider using Firebase's [domain restriction](https://console.cloud.google.com/apis/credentials) to limit where your web API key can be used.

---

## Running the App

Because this is a static HTML site, you can open it directly in your browser **without any server**:

```
open public/index.html
```

Or serve it with any static server:

```bash
# Python (built-in)
cd public && python3 -m http.server 3000

# Node.js (npx)
npx serve public

# VS Code
# Install the "Live Server" extension → right-click index.html → Open with Live Server
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The Google and GitHub OAuth popups require the page to be served over HTTP/HTTPS (not `file://`). Use one of the server options above for auth to work correctly.

---

## Pages

| File | Description |
|---|---|
| `index.html` | Landing page — Hero, TrustBar, Industry Cards, Features, How It Works, AI Power, Unique Features, Showcase, Pricing, Testimonials, FAQ, CTA |
| `login.html` | Sign in (email/password + Google + GitHub OAuth) |
| `register.html` | Create account (name, email, password, org name, org type) |
| `forgot-password.html` | Send password reset email |
| `dashboard.html` | **Protected** — stats, AI insights, activity feed, guild leaderboard |
| `pricing.html` | Pricing cards + full feature comparison table |
| `features.html` | 6 feature cards with detail lists |
| `about.html` | Mission, team, stats, company values |
| `blog.html` | 6 blog post cards across industry categories |
| `docs.html` | Sidebar-based documentation with code snippets |
| `faq.html` | 8-item accordion with category filter buttons |
| `solutions.html` | 4 industry solution sections with stats + CTAs |
| `contact.html` | Contact form + contact info |
| `demo.html` | Demo video placeholder + feature highlights |
| `integrations.html` | 12 integration cards (Slack, Google, Salesforce, etc.) |
| `careers.html` | 6 open positions with Apply Now buttons |
| `use-cases.html` | 6 use-case cards with before/after metrics |
| `support.html` | Support center with help category cards |
| `legal.html` | Tabbed: Terms, Privacy Policy, Cookie Policy, Data Protection |
| `partners.html` | Partnership tiers + application form |
| `developers.html` | API overview, SDK downloads, REST code snippet |
| `ai-lab.html` | AI Lab showcase with interactive demo mockup |
| `marketplace.html` | App marketplace with category filter |
| `product.html` | Product module overview + dashboard mockup |

---

## Firebase Auth Features

| Feature | Implementation |
|---|---|
| Email / Password sign in | `firebase.auth().signInWithEmailAndPassword()` |
| Email / Password register | `firebase.auth().createUserWithEmailAndPassword()` + `updateProfile()` |
| Google OAuth | `signInWithPopup(GoogleAuthProvider)` |
| GitHub OAuth | `signInWithPopup(GithubAuthProvider)` |
| Password reset | `firebase.auth().sendPasswordResetEmail()` |
| Sign out | `firebase.auth().signOut()` |
| Auth guard (dashboard) | `onAuthStateChanged` → redirect to login if no user |
| Error messages | Human-readable messages for all common Firebase error codes |
| Form validation | Inline JS validation (email format, min password length, required fields) |