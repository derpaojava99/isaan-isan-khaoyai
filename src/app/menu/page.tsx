import type { Metadata } from "next";
import Link from "next/link";
import { menu, restaurant } from "@/data/menu";
import { company, SITE_URL } from "@/data/company";
import MenuNav from "@/components/menu/MenuNav";
import MenuSection from "@/components/menu/MenuSection";
import "./menu.css";

export const metadata: Metadata = {
  title: "อีสานบ้านเฮา เขาใหญ่ | Isaan Baan Hao — Menu",
  description:
    "เมนูอาหารอีสานพรีเมียม อีสานบ้านเฮา เขาใหญ่ — ลาบ น้ำตก ส้มตำ ต้มแซ่บ เมนูย่างถ่าน ค็อกเทลอีสาน และไวน์เขาใหญ่ วัตถุดิบท้องถิ่นจากปากช่อง",
  alternates: { canonical: "/menu" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/menu`,
    title: "อีสานบ้านเฮา เขาใหญ่ | Isaan Baan Hao — Menu",
    description:
      "Northeastern Thai cuisine crafted from heritage recipes and ingredients grown in the valleys of Khao Yai.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg" }],
  },
};

export default function MenuPage() {
  return (
    <div className="menu-page">
      {/* ── Cover ───────────────────────────────────────────── */}
      <header className="menu-cover">
        <div className="menu-cover__frame">
          <p className="menu-cover__eyebrow">{restaurant.eyebrow}</p>
          <div className="menu-cover__orn" aria-hidden="true">
            ✦ <span className="menu-cover__star">❋</span> ✦
          </div>
          <h1 className="menu-cover__th">{restaurant.th}</h1>
          <p className="menu-cover__en">{restaurant.en}</p>
          <div className="menu-cover__rule" aria-hidden="true">
            <span /> <em>✦</em> <span />
          </div>
          <p className="menu-cover__intro">{restaurant.intro}</p>
          <p className="menu-cover__tagline">— {restaurant.tagline} —</p>
          <Link href="/" className="menu-cover__back">
            ← กลับสู่หน้าแรก · Back to the resort
          </Link>
        </div>
      </header>

      {/* ── Welcome ─────────────────────────────────────────── */}
      <section className="menu-welcome" aria-labelledby="menu-welcome-title">
        <div className="menu-paper">
          <div className="menu-welcome__mark" aria-hidden="true">
            ❦
          </div>
          <h2 className="menu-welcome__th" id="menu-welcome-title">
            {restaurant.welcome.th}
          </h2>
          <p className="menu-welcome__en">{restaurant.welcome.en}</p>
          <p className="menu-welcome__body">{restaurant.welcome.bodyTh}</p>
          <p className="menu-welcome__quote">{restaurant.welcome.quoteEn}</p>
        </div>
      </section>

      <MenuNav />

      {/* ── Chapters ────────────────────────────────────────── */}
      <main className="menu-body">
        <div className="menu-paper menu-paper--sheet">
          {menu.map((chapter) => (
            <MenuSection chapter={chapter} key={chapter.id} />
          ))}
        </div>
      </main>

      {/* ── Thank you / footer ──────────────────────────────── */}
      <footer className="menu-thanks">
        <div className="menu-cover__frame">
          <p className="menu-cover__eyebrow">{restaurant.thanks.eyebrow}</p>
          <div className="menu-welcome__mark" aria-hidden="true">
            ❦
          </div>
          <h2 className="menu-cover__th menu-cover__th--sm">{restaurant.thanks.th}</h2>
          <p className="menu-cover__en">{restaurant.thanks.en}</p>
          <div className="menu-cover__rule" aria-hidden="true">
            <span /> <em>✦</em> <span />
          </div>
          <p className="menu-cover__intro">{restaurant.thanks.bodyEn}</p>
          <p className="menu-thanks__farewell">{restaurant.thanks.farewell}</p>

          <address className="menu-thanks__contact">
            {company.address.full.th}
            <br />
            <a href={`tel:${company.phones[0].tel}`}>{company.phones[0].display}</a>
            {" · "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
          <Link href="/" className="menu-cover__back">
            ← กลับสู่หน้าแรก · Back to the resort
          </Link>
          <p className="menu-cover__tagline">— ISAAN · BAAN HAO · KHAO YAI —</p>
        </div>
      </footer>
    </div>
  );
}
