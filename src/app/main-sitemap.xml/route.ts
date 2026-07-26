import { SITE_URL } from "@/data/company";

/**
 * Sitemap served via a NON-reserved route-handler filename so Googlebot can
 * actually fetch it — Next/Vercel injects Vary/content-disposition headers on
 * the reserved `sitemap.xml` path that break Google's sitemap reader
 * (playbook §4A). robots.ts points here.
 */
export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
    { loc: `${SITE_URL}/menu`, changefreq: "monthly", priority: "0.8" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
