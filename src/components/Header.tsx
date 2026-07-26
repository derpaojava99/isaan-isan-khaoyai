"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { company } from "@/data/company";

const SECTIONS = ["home", "about", "villas", "facilities", "gallery", "contact"] as const;

export default function Header() {
  const { lang, t, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Sticky header background on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "villas", label: t.nav.villas },
    { id: "facilities", label: t.nav.facilities },
    { id: "gallery", label: t.nav.gallery },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header className={`main-header${scrolled ? " scrolled" : ""}`} id="mainHeader">
      <div className="container nav-container">
        <div className="brand-logo">
          <a href="#home" aria-label={company.name} onClick={() => setMenuOpen(false)}>
            <span className="brand-title">{company.shortName}</span>
            <span className="brand-subtitle">{company.subtitle[lang]}</span>
          </a>
        </div>

        <nav className={`main-menu${menuOpen ? " active" : ""}`} id="mainMenu" aria-label="Primary">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="lang-switch" role="group" aria-label="Language switcher">
              <button
                type="button"
                className={`lang-btn${lang === "en" ? " active" : ""}`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn${lang === "th" ? " active" : ""}`}
                onClick={() => setLang("th")}
                aria-pressed={lang === "th"}
              >
                TH
              </button>
            </div>
            <a href="#booking" className="btn btn-gold" onClick={() => setMenuOpen(false)}>
              {t.nav.book}
            </a>
          </div>
        </nav>

        <button
          type="button"
          className={`mobile-toggle${menuOpen ? " active" : ""}`}
          id="mobileToggle"
          aria-label={t.nav.menuLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
