# lvlBase — Run Your Entire Organization on One Platform

> An AI-powered, all-in-one platform built for schools, hospitals, corporations, and government agencies. Unify operations, communications, and analytics under a single intelligent system.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Building for Production](#building-for-production)
- [Linting](#linting)
- [Environment Variables](#environment-variables)
- [Pages & Routes](#pages--routes)

---

## Overview

**lvlBase** is a Next.js 15 marketing and application site for an AI-powered organization management platform. It includes a fully animated landing page, authentication flows (login, register, forgot password), and a rich set of informational pages covering features, pricing, integrations, and more.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animations | [Framer Motion 11](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Forms | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Fonts | Inter & Poppins (via `next/font/google`) |

---

## Project Structure

```
lvlbase/
├── app/
│   ├── (auth)/               # Auth routes (login, register, forgot-password)
│   ├── (marketing)/          # Public marketing pages
│   │   ├── page.tsx          # Home / landing page
│   │   ├── pricing/
│   │   ├── features/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── docs/
│   │   └── ...               # 20+ additional pages
│   ├── globals.css
│   └── layout.tsx            # Root layout with fonts & metadata
├── components/
│   ├── cards/                # PricingCard, FeatureCard, TestimonialCard, IndustryCard
│   ├── layout/               # Navbar, Footer, MobileMenu
│   ├── sections/             # Landing page sections (Hero, Pricing, FAQ, etc.)
│   └── shared/               # Reusable UI: GlassCard, GradientButton, NeonBadge, etc.
├── lib/
│   ├── data/                 # Static data files (pricing, features, faq, etc.)
│   └── utils.ts
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Features

- 🚀 **Hero section** with animated dashboard preview and social proof
- 🏭 **Industry cards** for Schools, Hospitals, Corporations & Government
- ✨ **AI-powered insights** showcase
- 💰 **Pricing section** with Free, Pro, and Enterprise tiers
- 💬 **Testimonials**, **FAQ**, and **Final CTA** sections
- 🔐 **Auth pages**: Login, Register, Forgot Password
- 📄 20+ marketing pages: About, Blog, Careers, Docs, Integrations, Marketplace, and more
- 🎨 Dark-first design with glassmorphism, gradient text, and mesh backgrounds
- 📱 Fully responsive layout

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** v18.17 or later ([download](https://nodejs.org/))
- **npm** v9+ (bundled with Node.js) — or use `yarn` / `pnpm`

Verify your versions:

```bash
node -v   # should be >= 18.17
npm -v    # should be >= 9
```

---

## Setup & Installation

**1. Clone the repository**

```bash
git clone https://github.com/Harshitkashyap2027/Subject-.git
cd Subject-
```

**2. Install dependencies**

```bash
npm install
```

---

## Running the App

Start the development server with hot reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Building for Production

Compile and optimize for production:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Linting

Run ESLint across the project:

```bash
npm run lint
```

---

## Environment Variables

This project currently has no required environment variables for local development.

If you add backend services (database, auth provider, email, etc.), create a `.env.local` file in the project root:

```env
# Example — add your own variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> `.env.local` is git-ignored by default and should never be committed.

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/login` | Sign in |
| `/register` | Create account |
| `/forgot-password` | Password reset |
| `/pricing` | Pricing plans |
| `/features` | Feature overview |
| `/about` | About lvlBase |
| `/blog` | Blog articles |
| `/docs` | Documentation |
| `/integrations` | Integrations marketplace |
| `/careers` | Open positions |
| `/contact` | Contact form |
| `/demo` | Live demo |
| `/faq` | Frequently asked questions |
| `/solutions` | Industry solutions |
| `/use-cases` | Use case examples |
| `/support` | Support center |
| `/legal` | Legal & privacy |
| `/partners` | Partner program |
| `/developers` | Developer resources |
| `/ai-lab` | AI Lab showcase |
| `/marketplace` | App marketplace |
| `/product` | Product details |