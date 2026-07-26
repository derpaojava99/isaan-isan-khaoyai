import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, Sarabun } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { ModalProvider } from "@/lib/modal-context";
import JsonLd from "@/components/JsonLd";
import { company, SITE_URL } from "@/data/company";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Isaan Isan Concept at Khaoyai | Luxury Boutique Pool Villa Resort",
    template: "%s | Isaan Isan Concept at Khaoyai",
  },
  description:
    "Isaan Isan Concept at Khaoyai — contemporary Isan boutique luxury, private pool villas, and serene mountain views in Mu Si, Pak Chong, Khao Yai.",
  keywords: [
    "Isaan Isan",
    "Concept Resort Khao Yai",
    "Khao Yai pool villa",
    "boutique resort Khao Yai",
    "Pak Chong resort",
    "รีสอร์ทเขาใหญ่",
    "พูลวิลล่าเขาใหญ่",
    "ที่พักปากช่อง",
    "รีสอร์ทหรูเขาใหญ่",
  ],
  authors: [{ name: company.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: company.name,
    title: "Isaan Isan Concept at Khaoyai | Luxury Boutique Pool Villa Resort",
    description:
      "Contemporary Isan boutique luxury, private pool villas, and serene Khao Yai mountain views in Pak Chong.",
    locale: "en_US",
    alternateLocale: "th_TH",
    images: [
      {
        // JPEG, not WebP: LINE's crawler does not reliably decode WebP and
        // falls back to showing no preview at all.
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Isaan Isan Concept at Khaoyai Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaan Isan Concept at Khaoyai | Luxury Boutique Pool Villa Resort",
    description:
      "Contemporary Isan boutique luxury, private pool villas, and serene Khao Yai mountain views.",
    images: ["/og-image.jpg"],
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
      className={`${cormorant.variable} ${outfit.variable} ${sarabun.variable}`}
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
