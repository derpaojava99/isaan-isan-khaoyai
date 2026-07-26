/**
 * Builds the social share card at public/og-image.jpg.
 *
 * Run with: node scripts/generate-og.mjs
 *
 * Why a committed JPEG rather than a runtime-generated image:
 * LINE's crawler does not reliably decode WebP, and it fetches the card with
 * a short timeout — a plain static JPEG at exactly 1200x630 is the format
 * every scraper (LINE, Facebook, X, Slack) handles without argument.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(root, "../public/picture/51205307327_1cc96cb36e_h.jpg");
const OUT = path.join(root, "../public/og-image.jpg");

const W = 1200;
const H = 630;

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%"   stop-color="#000000" stop-opacity="0.15"/>
      <stop offset="45%"  stop-color="#1b1610" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#171208" stop-opacity="0.92"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#shade)"/>

  <!-- thin gold frame -->
  <rect x="26" y="26" width="${W - 52}" height="${H - 52}"
        fill="none" stroke="#c9942e" stroke-opacity="0.55" stroke-width="2"/>

  <text x="72" y="404" fill="#c9942e"
        font-family="Helvetica, Arial, sans-serif" font-size="25"
        letter-spacing="7" font-weight="600">${esc("CONCEPT RESORT  •  KHAO YAI")}</text>

  <text x="70" y="484" fill="#ffffff"
        font-family="Georgia, 'Times New Roman', serif" font-size="70"
        font-weight="700">${esc("Isaan Isan Concept")}</text>

  <text x="70" y="544" fill="#ffffff"
        font-family="Georgia, 'Times New Roman', serif" font-size="70"
        font-weight="700">${esc("at Khaoyai")}</text>

  <rect x="72" y="566" width="96" height="3" fill="#c9942e"/>
</svg>
`);

await sharp(SRC)
  .resize(W, H, { fit: "cover", position: "attention" })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 86, progressive: true, mozjpeg: true })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`og-image.jpg → ${meta.format} ${meta.width}x${meta.height}`);
