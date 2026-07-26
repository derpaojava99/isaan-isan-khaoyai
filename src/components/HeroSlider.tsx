"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export default function HeroSlider() {
  const { t } = useLanguage();
  const slides = t.hero.slides;
  const total = slides.length;
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((i: number) => setCurrent(((i % total) + total) % total), [total]);

  // Auto-play every 6s.
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide${i === current ? " active" : ""}`}>
            <div className="hero-slide-img">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                // All 3 slides sit above the fold in an autoplaying carousel —
                // "lazy" would defer slides 2/3 until the moment they're needed,
                // leaving a blank flash mid-transition. Load all eagerly; only
                // slide 0 gets `priority` (LCP preload hint).
                priority={i === 0}
                loading="eager"
                sizes="100vw"
                quality={80}
              />
            </div>
            <div className="hero-overlay" />
            <div className="hero-content">
              <span className="hero-subtitle">{slide.subtitle}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
              <a href={slide.ctaHref} className={`btn btn-${slide.ctaStyle}`}>
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-controls">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`slider-dot${i === current ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
