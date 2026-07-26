"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { company } from "@/data/company";
import Reveal from "./Reveal";

const FEATURE_ICONS = ["🌿", "🍲", "💆", "⭐"];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <Reveal variant="left" className="about-images">
          <div className="about-img-main">
            <Image
              src="/picture/khao-yai-boutique-hotel-big.webp"
              alt={a.title}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="about-badge">
            <h4>{company.starRating} ★</h4>
            <p>{a.badgeLabel}</p>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="about-content">
          <span className="tagline">{a.tagline}</span>
          <h2 className="section-title">{a.title}</h2>
          <p className="about-lead">{a.lead}</p>
          <p className="about-text">{a.text}</p>

          <div className="about-features">
            {a.features.map((feat, i) => (
              <div className="feature-item" key={i}>
                <div className="feature-icon" aria-hidden="true">
                  {FEATURE_ICONS[i]}
                </div>
                <span className="feature-text">{feat}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
