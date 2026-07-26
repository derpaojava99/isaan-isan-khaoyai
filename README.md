# Isaan Isan Concept at Khaoyai — Website

Bilingual (EN/TH) marketing site for the resort, built from the original mockup.
**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4.**

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered static)
npm start        # serve the production build
```

## How it's built

- **Design fidelity** — the mockup's look is preserved 1:1. The design system lives in `src/app/globals.css` (Isan earth-tone palette, ported from the original `css/style.css`).
- **Fonts** (`next/font`, self-hosted) — English uses the mockup fonts **Cormorant Garamond** (headings) + **Outfit** (body); Thai renders in **Sarabun**. Switching to TH swaps the font variables via `html[data-lang="th"]`.
- **Bilingual toggle** — single page, client-side. `src/lib/language-context.tsx` holds the language, persists it to `localStorage`, and syncs `<html lang>` / `data-lang`. All copy is in `src/data/translations.ts`; villas in `src/data/villas.ts`; gallery in `src/data/gallery.ts`.
- **Single source of truth (NAP)** — company name/address/phone/social live in `src/data/company.ts`; footer, contact block, map, and JSON-LD all read from it.
- **Scroll animations** — `src/components/Reveal.tsx` (IntersectionObserver, respects `prefers-reduced-motion`), plus smooth scroll with header offset and a hero Ken-Burns effect.
- **Google Map** — themed embed in `src/components/MapSection.tsx` (no API key needed), warmed with a subtle sepia filter to match the palette. "Get Directions" opens Google Maps.
- **Mobile nav** — kept exactly as the mockup: fullscreen glass overlay, animated hamburger→✕.

## SEO (per the playbook)

- Per-page metadata, canonical, Open Graph + Twitter, keywords (EN + TH variants) in `src/app/layout.tsx`.
- **JSON-LD** `Resort` + `WebSite` in `src/components/JsonLd.tsx`.
- **Sitemap** served from a **non-reserved** route handler `src/app/main-sitemap.xml/route.ts` (avoids the Next/Vercel `sitemap.xml` "Couldn't fetch" trap). `robots.ts` points to it.
- `manifest.ts`, themed SVG favicon + apple-icon, `public/llms.txt`.
- Security headers + `poweredByHeader: false` in `next.config.ts`.

## ✅ Before you go live (replace placeholders)

These are demo/placeholder values — swap them for the real ones:

1. **`src/data/company.ts`** — real phone numbers, email, **GPS coordinates** (`geo`), and **social/LINE URLs** (currently generic `facebook.com` / `line.me`).
2. **`SITE_URL`** in `src/data/company.ts` — set to your real domain (used by canonical, sitemap, OG, JSON-LD).
3. **OG image** — currently reuses a hero photo. A dedicated **1200×630** image is ideal.
4. **Booking button** — the "Confirm & Book" CTA points to the LINE URL; wire it to your real booking engine.
5. **Reviews / rating** — the 4.9★ badge is decorative only. Do **not** add `aggregateRating` to the schema until you have real, on-page reviews (avoids a Google manual action).
6. Set up **Google Business Profile**, Search Console (submit `…/main-sitemap.xml`), and GA4.
