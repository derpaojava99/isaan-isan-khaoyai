"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { menu } from "@/data/menu";

/** Sticky chapter rail with scroll-spy, plus a persistent way back home. */
export default function MenuNav() {
  const [active, setActive] = useState(menu[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    menu.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="menu-nav" aria-label="Menu chapters">
      <div className="menu-nav__inner">
        {/* Pinned outside the scroller so it stays reachable down a long menu. */}
        <Link href="/" className="menu-nav__home" aria-label="กลับหน้าแรก · Back to home">
          <span aria-hidden="true">←</span>
          <span className="menu-nav__home-label">หน้าแรก</span>
        </Link>

        <ul className="menu-nav__list">
          {menu.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={`menu-nav__link${active === c.id ? " is-active" : ""}`}
                aria-label={`${c.th} — ${c.en}`}
                aria-current={active === c.id ? "true" : undefined}
              >
                <span className="menu-nav__num">{c.numeral}</span>
                <span className="menu-nav__th">{c.th}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
