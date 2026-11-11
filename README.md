# Isaan Isan Resort Khaoyai — Website

Bilingual (EN/TH) site for the resort, live at **https://isaan-isan.com**.
**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4.** Vercel deploys `main` automatically.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered static)
npm start        # serve the production build
```

## Pages

- `/` — the one-page site (rooms, facilities, story, gallery, map, booking bar).
- `/menu` — Isaan Baan Hao restaurant menu (`src/data/menu.ts`).
- `/spa` — Isaan Sumbai Spa treatments and packages (`src/data/spa.ts`).

## How it's built

- **Design system** — `src/app/globals.css` (Isan earth-tone palette); page styles in `src/app/menu/menu.css` and `src/app/spa/spa.css`.
- **Fonts** (`next/font`, self-hosted) — English: Cormorant Garamond + Outfit; Thai: Sarabun. The menu and spa pages add Prompt and Playfair Display.
- **Bilingual toggle** — client-side. `src/lib/language-context.tsx` holds the language, persists it to `localStorage`, and syncs `<html lang>` / `data-lang`. Copy lives in `src/data/translations.ts`, rooms in `src/data/villas.ts`, gallery in `src/data/gallery.ts`.
- **Single source of truth (NAP)** — name, address, phones, email, social and booking-engine settings live in `src/data/company.ts`; footer, contact block, map and JSON-LD all read from it.
- **Booking** — the availability bar (`src/components/BookingBar.tsx`) hands dates and guests to the direct-booking engine via `src/lib/booking-url.ts` (engine URL and property slug in `company.booking`). "Book This Room" scrolls to that bar.
- **Scroll animations** — `src/components/Reveal.tsx` (IntersectionObserver, respects `prefers-reduced-motion`).
- **Google Map** — themed embed in `src/components/MapSection.tsx` (no API key needed).

## SEO

- Site-wide title, description, Open Graph/Twitter text and keywords (EN + TH) in `src/app/layout.tsx`. Title ≤ 60 characters, descriptions ≤ 155. `/menu` and `/spa` set their own.
- **JSON-LD** `Resort` + `WebSite` in `src/components/JsonLd.tsx`.
- **Canonical origin** — `SITE_URL` in `src/data/company.ts` defaults to `https://isaan-isan.com` (www redirects to the apex). Set `NEXT_PUBLIC_SITE_URL` only to build for another host. Canonical, sitemap, OG image and JSON-LD all follow it.
- **Sitemap** from the non-reserved route `src/app/main-sitemap.xml/route.ts` (avoids the Next/Vercel `sitemap.xml` "Couldn't fetch" trap); `robots.ts` points to it.
- **Share card** — `public/og-image-v2.jpg`, 1200×630 JPEG, built by `node scripts/generate-og.mjs`. Give a regenerated card a new filename and update `OG_IMAGE` in `company.ts`: LINE, Facebook and the image cache key on the URL.
- `public/llms.txt` — plain-text facts for AI crawlers; keep it in step with the site.
- `manifest.ts`, themed SVG favicon + apple-icon; security headers + `poweredByHeader: false` in `next.config.ts`.

## Content rules

- **Positioning:** 300 m from Khao Yai National Park; 82 rooms across 4 types (Superior 50, Deluxe 14, Grand Deluxe 9, Pool House 9). When it changes, grep the whole repo for the old claim — `layout.tsx`, `JsonLd.tsx`, `manifest.ts`, `llms.txt`, gallery alts and the share card all repeat it.
- **No room rates** on the site or in `llms.txt`; rates change often, so guests check them in the booking engine.
- **No `aggregateRating` or `starRating`** in the schema. The 4.9★ badge is a review score shown for decoration, not an official star class; add a rating only with real, on-page reviews.
- **Don't invent facts** (amenities, room sizes, views). Ask the resort first.

## Still open

- **Social URLs** in `company.ts` are generic placeholders (`facebook.com/`, `instagram.com/`, `line.me/`, `tripadvisor.com/`). They feed the footer, the floating LINE button and JSON-LD `sameAs` — replace them with the resort's real pages.
