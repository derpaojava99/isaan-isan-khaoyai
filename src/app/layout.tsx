import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Outfit,
  Playfair_Display,
  Prompt,
  Sarabun,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { ModalProvider } from "@/lib/modal-context";
import JsonLd from "@/components/JsonLd";
import { company, OG_IMAGE, SITE_URL } from "@/data/company";

// English fonts follow the mockup; Thai renders in Sarabun. All self-hosted.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});
const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});
// Thai headings on the restaurant menu and spa pages.
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Search and share snippets. Keep these in step with the rooms copy in
// translations.ts and public/llms.txt — when the positioning changes, grep the
// repo for the old claim (an old "9 private pool villas" line outlived the move
// to 82 rooms here once). Title ≤ 60 chars, descriptions ≤ 155.
const TITLE = "Isaan Isan Resort Khaoyai | 300m from Khao Yai National Park";
const DESCRIPTION =
  "Stay 300 m from Khao Yai National Park in one of 82 rooms across 4 types, including 9 Pool House villas. Dine on Isan food and unwind at Isaan Sumbai Spa.";
const SHARE_DESCRIPTION =
  "Experience Isan in the heart of Khao Yai, 300 m from the national park. Choose from 82 rooms, from Superior rooms to Pool House villas with private pools.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Isaan Isan Resort Khaoyai",
  },
  description: DESCRIPTION,
  // Rooms/resort terms lead; pool-villa terms stay as secondary (9 of the 82
  // rooms are Pool House villas).
  keywords: [
    "Isaan Isan",
    "Isaan Isan Resort Khaoyai",
    "Khao Yai resort",
    "Khao Yai hotel",
    "resort near Khao Yai National Park",
    "boutique resort Khao Yai",
    "Pak Chong resort",
    "Pak Chong hotel",
    "Khao Yai pool villa",
    "รีสอร์ทเขาใหญ่",
    "ที่พักเขาใหญ่",
    "โรงแรมเขาใหญ่",
    "ที่พักใกล้อุทยานแห่งชาติเขาใหญ่",
    "ที่พักปากช่อง",
    "รีสอร์ทปากช่อง",
    "รีสอร์ทหรูเขาใหญ่",
    "พูลวิลล่าเขาใหญ่",
  ],
  authors: [{ name: company.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: company.name,
    title: TITLE,
    description: SHARE_DESCRIPTION,
    locale: "en_US",
    alternateLocale: "th_TH",
    images: [
      {
        // JPEG, not WebP: LINE's crawler does not reliably decode WebP and
        // falls back to showing no preview at all.
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Isaan Isan Resort Khaoyai, 300 m from Khao Yai National Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#241d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${sarabun.variable} ${prompt.variable} ${playfair.variable}`}
    >
      <body>
        <LanguageProvider>
          <ModalProvider>{children}</ModalProvider>
        </LanguageProvider>
        <JsonLd />
      </body>
    </html>
  );
}
