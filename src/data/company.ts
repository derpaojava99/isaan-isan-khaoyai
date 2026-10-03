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
 * Defaults to the live domain. It serves on the apex — www.isaan-isan.com
 * redirects there — so the apex is canonical. Pointing this at the
 * vercel.app deployment told search engines to index that copy instead of
 * the hotel's own domain. Override per environment with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://isaan-isan.com"
).replace(/\/$/, "");

export const company = {
  name: "Isaan Isan Resort Khaoyai",
  legalName: "Isaan Isan Resort Khaoyai",
  shortName: "ISAAN ISAN",
  subtitle: {
    en: "RESORT • KHAO YAI",
    th: "รีสอร์ท • เขาใหญ่",
  },
  // Address (NAP) — keep identical, char-for-char, everywhere it appears.
  address: {
    street: "54, 55 Moo 17, Moo Si",
    district: "Pak Chong",
    city: "Nakhon Ratchasima",
    postalCode: "30450",
    country: "TH",
    countryName: "Thailand",
    full: {
      en: "54, 55 Moo 17, Moo Si, Pak Chong, Nakhon Ratchasima 30450",
      th: "54, 55 หมู่ 17 ตำบลหมูสี อำเภอปากช่อง จังหวัดนครราชสีมา 30450",
    },
  },
  // Actual Google Maps pin for "Recall Isaan Isan Resort Khaoyai"
  // (resolved from https://maps.app.goo.gl/p5GheCEq27qz9MY89).
  geo: {
    lat: 14.5133391,
    lng: 101.3753775,
  },
  // Display Thai-style, dial international (playbook §8). The mobile leads:
  // it is the line guests actually reach, and phones[0] is what the floating
  // call button, the menu page and the JSON-LD `telephone` all use.
  phones: [
    { label: "M", display: "+66 (0) 95 554 4246", tel: "+66955544246" },
    { label: "T", display: "+66 (44) 011 888", tel: "+6644011888" },
  ],
  email: "info@isaan-isan.com",
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
