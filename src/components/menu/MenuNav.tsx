"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { menu } from "@/data/menu";

/** Sticky chapter rail with scroll-spy, plus a persistent way back home. */
export default function MenuNav() {
  const [active, setActive] = useState(menu[0].id);
  const listRef = useRef<HTMLUListElement>(null);

  // The rail is wider than a phone screen, so the highlighted chapter can sit
  // off to the right where nobody sees it. Bring it back into view whenever
  // scrolling moves us into a new chapter. Adjusting scrollLeft directly rather
  // than scrollIntoView, which would also yank the page vertically.
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!list || !link) return;

    const target = link.offsetLeft - (list.clientWidth - link.clientWidth) / 2;
    const left = Math.max(0, Math.min(target, list.scrollWidth - list.clientWidth));
    if (Math.abs(list.scrollLeft - left) < 2) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    list.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
  }, [active]);

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

        <ul className="menu-nav__list" ref={listRef}>
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
