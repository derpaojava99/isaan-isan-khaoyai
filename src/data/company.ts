/**
 * Single source of truth — company NAP (Name / Address / Phone) + social.
 * Every page, footer, contact block, and JSON-LD schema pulls from here.
 * Change a phone number once → it updates everywhere (playbook §2).
 */

/**
 * Canonical origin. Everything absolute — canonical tags, OG image, sitemap,
 * JSON-LD — is built from this, so it must point at a host that actually
 * serves the site: crawlers (LINE especially) fetch og:image over the network
 * and silently show no preview if it 404s.
 *
 * Override per environment with NEXT_PUBLIC_SITE_URL, e.g.
 *   NEXT_PUBLIC_SITE_URL=https://www.isaanisan-khaoyai.com
 * once the real domain is live.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://isaan-isan-khaoyai.vercel.app"
).replace(/\/$/, "");

export const company = {
  name: "Isaan Isan Concept at Khaoyai",
  legalName: "Isaan Isan Concept Resort",
  shortName: "ISAAN ISAN",
  subtitle: {
    en: "CONCEPT RESORT • KHAO YAI",
    th: "คอนเซปต์ รีสอร์ต • เขาใหญ่",
  },
  // Address (NAP) — keep identical, char-for-char, everywhere it appears.
  address: {
    street: "54 Moo 4, Mu Si",
    district: "Pak Chong District",
    city: "Nakhon Ratchasima",
    postalCode: "30130",
    country: "TH",
    countryName: "Thailand",
    full: {
      en: "54 Moo 4, Mu Si, Pak Chong District, Nakhon Ratchasima 30130, Thailand",
      th: "54 หมู่ 4 ตำบลหมูสี อำเภอปากช่อง จังหวัดนครราชสีมา 30130",
    },
  },
  // Approx. coordinates for Mu Si, Pak Chong (Khao Yai) — themed map marker.
  geo: {
    lat: 14.5069,
    lng: 101.3722,
  },
  // Display Thai-style, dial international (playbook §8).
  phones: [
    { display: "+66 (0) 44 000 999", tel: "+6644000999" },
    { display: "+66 (0) 81 234 5678", tel: "+66812345678" },
  ],
  email: "rsvn@isaanisan-khaoyai.com",
  // LINE OA matters more than email in Thailand (playbook §8).
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    line: "https://line.me/",
    tripadvisor: "https://www.tripadvisor.com/",
  },
  priceRange: "฿฿฿",
  starRating: 4.9,
  /** Direct-booking engine the availability form hands off to. */
  booking: {
    baseUrl: "https://book-directonline.com/properties",
    propertySlug: "isaanisanboutiqueresortdirect",
    currency: "THB",
  },
} as const;

/** URLs used by JSON-LD sameAs. */
export const sameAs = [
  company.social.facebook,
  company.social.instagram,
  company.social.line,
  company.social.tripadvisor,
];
