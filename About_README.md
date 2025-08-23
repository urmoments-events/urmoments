# UrMoments — Marketing Website (Next.js + Tailwind + Static Export)

This repository contains the UrMoments marketing site, implemented with Next.js (App Router) and Tailwind CSS, exported to static HTML for hosting on GitHub Pages.

## Tech Stack
- Next.js (App Router, SSG only, output: export)
- Tailwind CSS
- TypeScript
- Plain client-side JS for lightbox/carousel where needed

## Key Ideas
- Content is centralized in `config.json` at the repo root. Pages and components render from that data at build-time.
- Static export (`next export`) generates `/out` for GitHub Pages.
- No SSR, API routes, or server actions. Only SSG + client components for interactivity (lightbox, mobile menu, carousel, add‑ons chips, contact form).

## Project Structure (important files)
- `app/` — Next.js App Router pages and layouts
  - `app/(site)/layout.tsx` — site layout (header, mobile nav, footer)
  - `app/(site)/page.tsx` — Home page (hero, highlights, gallery, testimonials, FAQ, contact)
  - `app/(site)/services/page.tsx` — Services page (services grid, add‑ons chips, contact)
  - `app/robots.ts`, `app/sitemap.ts` — SEO files (static export compatible)
- `components/`
  - `HeroBanner.tsx` — full‑bleed banner from `config.heroBanner`
  - `Highlights.tsx` — static highlights tiles
  - `ServicesGrid.tsx` — services cards with features/tags/popular
  - `AddOnsChips.tsx` — client chips that append selected add‑ons to the contact textarea
  - `GalleryClient.tsx` — responsive gallery with lightbox (client component)
  - `Testimonials.tsx` — mobile dots + desktop arrows carousel (no auto-scroll)
  - `FAQ.tsx` — accordion from `config.faq`
  - `ContactForm.tsx` — client form with Formspree support via env
- `lib/`
  - `config.ts` — reads `config.json` (checks repo root and parent)
  - `util.ts` — `toPublicSrc()` helper to prefix assets with basePath for Pages
- `public/` — static files (environment `env.js` generated at deploy)
- `config.json` — single source of content and settings (see schema below)
- `.github/workflows/deploy.yml` — GitHub Pages build/export/deploy workflow
- `next.config.ts` — enables `output: 'export'`, sets `basePath`/`assetPrefix` in prod, `images.unoptimized`

## config.json (schema)
```jsonc
{
  "brandName": "UrMoments",
  "tagline": "Your moments, our promise.",
  "email": "hello@urmoments.co.uk",
  "phone": "+447000000000",
  "address": "London, UK",
  "socialLinks": { "instagram": "https://instagram.com/...", "facebook": "", "whatsapp": "" },
  "heroImages": ["assets/home/image1.jpg", "assets/home/image2.jpg"],
  "heroBanner": {
    "image": "assets/home/image1.jpg",
    "headline": "Beautiful, stress-free party decorations",
    "subhead": "Birthdays, baby showers, and more across London",
    "points": ["Theme styling", "Set-up & clean-up", "On-time guarantee"]
  },
  "services": [
    {
      "title": "Birthday Decorations",
      "description": "Theme-based styling with balloons, backdrop, and signage.",
      "image": "assets/services/image1.jpg",
      "price": "Contact Us",
      "popular": true,
      "features": ["Balloon garland & backdrop", "Personalised signage", "Set-up & clean-up included"],
      "tags": ["Backdrop", "Garland", "Signage"]
    }
  ],
  "addOns": [{ "label": "Photographer", "icon": "📸" }],
  "testimonials": [{ "name": "Priya S.", "area": "Harrow", "text": "They nailed the pastel theme…" }],
  "faq": [{ "q": "How far in advance should I book?", "a": "2-4 weeks…" }],
  "contactForm": {
    "action": "", // leave empty; injected via env at deploy
    "consentText": "I agree to be contacted about my enquiry.",
    "placeholders": {
      "fullName": "Your full name",
      "email": "you@example.com",
      "postcode": "e.g., HA1 1AA",
      "description": "e.g., 1st birthday in Harrow, soft pastel theme…"
    }
  },
  "seo": {
    "title": "UrMoments - Birthday Decorations in London | Your moments, our promise.",
    "description": "UrMoments creates stylish, stress-free birthday decorations in London…",
    "keywords": "birthday decorations London, balloons, backdrops, event styling",
    "image": "/assets/og-cover.svg",
    "url": "" // can be left empty; injected via env at deploy
  }
}
```

## Environment and Secrets
Static hosting means we cannot hide secrets client-side. We inject public env at deploy for convenience:
- `NEXT_PUBLIC_FORMSPREE_ACTION_URL` — Formspree endpoint for contact form
- `NEXT_PUBLIC_SITE_URL` — canonical site URL for OG/sitemap/robots

These are written into `public/env.js` by the Pages workflow. In GitHub repo:
- Settings → Secrets and variables → Actions
  - Add Repository secret: `FORMSPREE_ACTION_URL`
  - Add Repository variable: `SITE_URL`

## Development
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & Export (local)
```bash
npm run build
npm run export
# static site in /out
```

## Deploy (GitHub Pages)
Workflow: `.github/workflows/deploy.yml`
- Trigger: push to `main` or manual dispatch
- Steps:
  - Install deps (Node 18)
  - Generate `public/env.js` from repo secrets/vars
  - Build (`next build`) and export (`next export`)
  - Upload `out/` and deploy to Pages

Notes for Project Pages (username.github.io/repo):
- `next.config.ts` sets `output: 'export'`, `images.unoptimized: true`, and applies `basePath/assetPrefix` in production.
- Asset URLs are normalized via `toPublicSrc()` to work under nested routes.

## Accessibility & Performance
- Keyboard and ESC support for mobile nav and lightbox
- Focus-visible rings on interactive elements
- No auto-scroll on carousel; mobile dots + desktop arrows
- Next `<Image unoptimized>` with proper `sizes`; consider adding blur placeholders later

## Where to Update Content
- Hero banner: `config.json.heroBanner`
- Highlights (static): `components/Highlights.tsx`
- Services grid: `config.json.services`
- Add-ons chips: `config.json.addOns`
- Gallery: `config.json.heroImages` (paths under `public/assets/...`)
- Testimonials: `config.json.testimonials`
- FAQ: `config.json.faq`
- Contact form: `config.json.contactForm` + Formspree env
- SEO: `config.json.seo` + `NEXT_PUBLIC_SITE_URL`

## Known Constraints
- No SSR/APIs; only static export (for GitHub Pages).
- Secrets are public if embedded client-side; use Formspree style endpoints.
- Set `SITE_URL` to remove metadataBase warning.

## Contributing / Working with AI
- Read this README and `config.json` to understand data flow.
- Keep SSG only; do not add server-only features.
- Use `toPublicSrc()` for any new image paths.
- Ensure new components accept data from `config.json` and avoid client `fs` imports; pass props from server components if needed.
- Validate `config.json` updates with a minimal manual check before pushing.

## License
Proprietary. © UrMoments.
