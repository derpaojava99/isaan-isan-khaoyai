import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  spa,
  treatments,
  techniques,
  ingredients,
  packages,
  packageNoteTh,
  packageNoteEn,
  promo,
} from "@/data/spa";
import { company, SITE_URL } from "@/data/company";
import "./spa.css";

export const metadata: Metadata = {
  title: "อีสานซำบาย สปา | Isaan Sumbai Spa",
  description:
    "อีสานซำบาย สปา เขาใหญ่ — นวดไทย นวดน้ำมันอโรมา ลูกประคบสมุนไพร นวดหินร้อน ขัดผิว และแพ็กเกจสุดคุ้ม ภายใน Isaan Isan Resort Khaoyai",
  alternates: { canonical: "/spa" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/spa`,
    title: "อีสานซำบาย สปา | Isaan Sumbai Spa",
    description:
      "Thai–Isaan healing with local herbs and aromatic oils, at Isaan Isan Resort Khaoyai.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg" }],
  },
};

// The owner's spa sheet books on the resort's landline, not the mobile that
// leads company.phones elsewhere — follow the sheet.
const bookingLine =
  company.phones.find((p) => p.label === "T") ?? company.phones[0];

export default function SpaPage() {
  return (
    <div className="spa-page">
      <header className="spa-nav">
        <div className="spa-nav__in">
          <a href="#top" className="spa-nav__brand">
            {spa.en}
            <small>
              {spa.th} · {spa.descriptorTh}
            </small>
          </a>
          <nav className="spa-nav__links" aria-label="Spa">
            <a href="#treatments">เมนู · Menu</a>
            <a href="#packages">แพ็กเกจ · Packages</a>
            <a href="#promo">โปรโมชัน · Offer</a>
            <Link href="/">← รีสอร์ท · Resort</Link>
          </nav>
          <a href={`tel:${bookingLine.tel}`} className="spa-btn spa-btn--sm">
            โทรจอง · Call
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="spa-hero" id="top">
        <Image
          src={spa.heroImage}
          alt="อีสานซำบาย สปา — Isaan Sumbai Spa"
          fill
          priority
          sizes="100vw"
          className="spa-hero__img"
        />
        <div className="spa-hero__veil" aria-hidden="true" />
        {/* A pha khao ma stripe across the top, in the resort's own colours. */}
        <div className="spa-plaid" aria-hidden="true" />
        <div className="spa-wrap spa-hero__in">
          <p className="spa-hero__eyebrow">Isaan Isan Resort Khaoyai</p>
          <h1 className="spa-hero__brand">{spa.en}</h1>
          <p className="spa-hero__brand-th">
            {spa.th} · {spa.descriptorTh}
          </p>
          <p className="spa-hero__tagline">{spa.taglineEn}</p>
          <p className="spa-hero__sub">{spa.subtaglineEn}</p>
          <div className="spa-hero__cta">
            <a href="#treatments" className="spa-btn">
              ดูเมนู &amp; ราคา · Menu &amp; prices
            </a>
            <a href={`tel:${bookingLine.tel}`} className="spa-btn spa-btn--ghost">
              โทรจอง {bookingLine.display}
            </a>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section className="spa-story">
        <div className="spa-wrap">
          <SectionHead eyebrow="Our Story" th="เรื่องราวของเรา" />
          <p className="spa-story__th">{spa.story.th}</p>
          <p className="spa-story__en">{spa.story.en}</p>
        </div>
      </section>

      {/* ── Treatments ───────────────────────────────────────── */}
      <section className="spa-menu" id="treatments">
        <div className="spa-wrap">
          <SectionHead eyebrow="Price List" th="รายการราคา" en={spa.descriptorEn} />
          <div className="spa-menu__grid">
            {treatments.map((cat) => (
              <div className="spa-cat" key={cat.id}>
                <h3 className="spa-cat__head">
                  <span className="spa-cat__en">{cat.en}</span>
                  <span className="spa-cat__th">{cat.th}</span>
                  <span className="spa-cat__rule" aria-hidden="true" />
                </h3>
                <ul className="spa-cat__list">
                  {cat.items.map((item) => (
                    <li className="spa-item" key={item.en}>
                      <div className="spa-item__name">
                        <b>{item.en}</b>
                        <span>{item.th}</span>
                      </div>
                      <div className="spa-item__prices">
                        {item.prices.map((p) => (
                          <span className="spa-item__price" key={p.min}>
                            <span className="spa-item__min">{p.min} min</span>
                            <span className="spa-item__baht">
                              ฿{p.price}
                            </span>
                          </span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="spa-note">
            {spa.vatNoteTh} · {spa.vatNoteEn}
          </p>
        </div>
      </section>

      {/* ── Craft ────────────────────────────────────────────── */}
      <section className="spa-craft">
        <div className="spa-wrap">
          <SectionHead eyebrow="Our Craft" th="เทคนิคการนวด & ผลิตภัณฑ์" en="Thai–Isaan wisdom" light />
          <div className="spa-craft__grid">
            {techniques.map((t) => (
              <div className="spa-tech" key={t.en}>
                <h3>{t.th}</h3>
                <p className="spa-tech__en">{t.en}</p>
                <p>{t.bodyTh}</p>
                <p className="spa-tech__body-en">{t.bodyEn}</p>
              </div>
            ))}
          </div>

          <div className="spa-ingredients">
            <div className="spa-ingredients__img">
              <Image
                src={ingredients.image}
                alt={`${ingredients.th} — ${ingredients.en}`}
                fill
                sizes="(max-width: 760px) 100vw, 280px"
              />
            </div>
            <div className="spa-ingredients__tx">
              <h3>
                {ingredients.th} · {ingredients.en}
              </h3>
              <p>{ingredients.bodyTh}</p>
              <p className="spa-ingredients__en">{ingredients.bodyEn}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────── */}
      <section className="spa-packages" id="packages">
        <div className="spa-wrap">
          <SectionHead
            eyebrow="Combination Packages"
            th="แพ็กเกจสุดคุ้ม"
            en="Choose the set that suits you"
          />
          <div className="spa-packages__grid">
            {packages.map((p) => (
              <article className="spa-pkg" key={p.en}>
                <div className="spa-pkg__img">
                  <Image
                    src={p.image}
                    alt={`${p.en} — ${p.th}`}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div className="spa-pkg__body">
                  <h3 className="spa-pkg__name">
                    {p.en}
                    <span>{p.th}</span>
                  </h3>
                  <p className="spa-pkg__dur">
                    {p.durationEn} · {p.durationTh}
                  </p>
                  <p className="spa-pkg__price">
                    <span>
                      <b>฿{p.single}</b>
                      <small>/ ท่าน · person</small>
                    </span>
                    <span>
                      <b>฿{p.couple}</b>
                      <small>/ คู่ · couple</small>
                    </span>
                  </p>
                  <p className="spa-pkg__choose">เลือก 1 เซ็ต · Choose one</p>
                  <ul className="spa-pkg__sets">
                    {p.sets.map((set) => (
                      <li key={set.name}>
                        <b>SET {set.name}</b>
                        <span>{set.steps}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="spa-note">
            *{packageNoteTh} · {packageNoteEn} · {spa.vatNoteEn}
          </p>
        </div>
      </section>

      {/* ── Promotion ────────────────────────────────────────── */}
      <section className="spa-promo" id="promo">
        <div className="spa-wrap">
          <SectionHead eyebrow="Signature Promotion" th="โปรโมชันพิเศษ" />
          <div className="spa-promo__box">
            <div className="spa-promo__img">
              <Image
                src={promo.image}
                alt={`${promo.en} — ${promo.th}`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <div className="spa-promo__tx">
              <span className="spa-promo__badge">
                {promo.minutes} นาที · {promo.minutes} MIN
              </span>
              <h3 className="spa-promo__en">{promo.en}</h3>
              <p className="spa-promo__th">{promo.th}</p>
              <p className="spa-promo__price">
                ฿{promo.price} <small>/ ท่าน · person</small>
              </p>
              <p>{promo.bodyTh}</p>
              <p className="spa-promo__body-en">{promo.bodyEn}</p>
              <a href={`tel:${bookingLine.tel}`} className="spa-btn">
                จองเลย · Book now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="spa-foot" id="contact">
        <div className="spa-wrap">
          <p className="spa-foot__brand">{spa.en}</p>
          <p className="spa-foot__th">
            {spa.th} · {spa.descriptorTh} · {spa.descriptorEn}
          </p>
          <a href={`tel:${bookingLine.tel}`} className="spa-foot__tel">
            โทรจอง {bookingLine.display}
          </a>
          <p className="spa-foot__th">
            {spa.hoursTh} · {spa.hoursEn}
          </p>
          <p className="spa-foot__th">{company.name}</p>
          <p className="spa-foot__vat">
            {spa.vatNoteTh} · {spa.vatNoteEn}
          </p>
          <Link href="/" className="spa-foot__back">
            ← กลับสู่หน้าแรก · Back to the resort
          </Link>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({
  eyebrow,
  th,
  en,
  light = false,
}: {
  eyebrow: string;
  th: string;
  en?: string;
  light?: boolean;
}) {
  return (
    <div className={`spa-head${light ? " spa-head--light" : ""}`}>
      <p className="spa-head__eyebrow">{eyebrow}</p>
      <h2 className="spa-head__th">{th}</h2>
      {en && <p className="spa-head__en">{en}</p>}
      <span className="spa-head__rule" aria-hidden="true" />
    </div>
  );
}
