import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Points at the non-reserved route handler, not the reserved /sitemap.xml.
    sitemap: `${SITE_URL}/main-sitemap.xml`,
    host: SITE_URL,
  };
}
