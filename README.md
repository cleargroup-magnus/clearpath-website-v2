# ClearScaler Website

Marketing website for ClearScaler — a growth partner for B2B companies.

**Live:** https://clearpath-website-v2.vercel.app

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Routing:** TanStack Router v1 (file-based)
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4
- **Package manager:** Bun (also works with npm)
- **Deployment:** Vercel

---

## Getting Started

```bash
# Install dependencies
bun install
# or: npm install

# Start dev server
bun run dev
# or: npm run dev

# Build for production
bun run build
# or: npm run build
```

Dev server runs at `http://localhost:5173`

---

## Project Structure

```
src/
├── components/
│   └── clear/
│       ├── Nav.tsx               # Navigation bar
│       ├── Footer.tsx            # Footer
│       ├── Logo.tsx              # SVG infinity mark logo
│       ├── Hero.tsx              # Homepage hero section
│       ├── Services.tsx          # Services grid (homepage)
│       ├── Why.tsx               # "Why ClearScaler" section
│       ├── Process.tsx           # Process steps section
│       ├── CTA.tsx               # Call-to-action section
│       └── ServiceAnimations.tsx # All service page animations
├── routes/
│   ├── index.tsx                 # Homepage
│   ├── about.tsx                 # About page
│   ├── contact.tsx               # Contact page (Calendly embed)
│   └── services/
│       ├── web-development.tsx
│       ├── systems-integration.tsx
│       ├── ai-integration.tsx
│       ├── process-automation.tsx
│       ├── meta-google-ads.tsx
│       └── gtm-engineering.tsx
└── styles/
    └── globals.css               # Tailwind + CSS custom properties
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services, why, process, CTA |
| `/about` | About Kian & Magnus, story, principles |
| `/contact` | Calendly embed + contact info |
| `/services/web-development` | Web Development service page |
| `/services/systems-integration` | Systems Integration service page |
| `/services/ai-integration` | AI Integration service page |
| `/services/process-automation` | Process Automation service page |
| `/services/meta-google-ads` | Meta & Google Ads service page |
| `/services/gtm-engineering` | GTM Engineering service page |

---

## Animations

All service page animations live in `src/components/clear/ServiceAnimations.tsx`.

Each animation is a self-contained React component:

| Export | Used on |
|---|---|
| `WebDevAnim` | `/services/web-development` |
| `IntegrationAnim` | `/services/systems-integration` |
| `AIAnim` | `/services/ai-integration` |
| `AutomationAnim` | `/services/process-automation` |
| `AdsAnim` | `/services/meta-google-ads` |
| `GTMAnim` | `/services/gtm-engineering` |

Animations use a shared `usePhase(active, d0, d1, d2)` hook that cycles through 3 phases (0 = before, 1 = processing, 2 = result) with configurable durations in milliseconds.

---

## Brand

- **Primary blue:** `oklch(0.62 0.22 260)` — used as `var(--blue)` / `bg-blue`
- **Green accent:** `oklch(0.62 0.20 150)`
- **Dark background:** `var(--why-bg)` — navy used on service hero sections
- **Font:** Inter (sans), display font for headings
- **Logo:** SVG lemniscate (infinity mark) with blue gradient + "ClearScaler" wordmark

---

## Deployment

The site auto-deploys to Vercel on every push to `main`.

To deploy manually or to a new Vercel project:
1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Add New → Import Git Repository
3. Select the repo — Vercel auto-detects Vite, no config needed
4. Deploy

The `vercel.json` in the root handles SPA routing (rewrites all paths to `index.html`).

---

## Contact

- **Email:** magnus@clearscaler.com
- **Booking:** https://calendly.com/magnus-clearcruit/30min
