"use client";

import { useLanguage } from "@/lib/language-context";
import { company } from "@/data/company";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollZoomImage from "./animation/ScrollZoomImage";

const FEATURE_ICONS = ["🌿", "🍲", "💆", "⭐"];

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-images">
          <div className="about-img-main">
            <ScrollZoomImage
              src="/picture/khao-yai-boutique-hotel-big.webp"
              alt={a.title}
              sizes="(max-width: 768px) 100vw, 45vw"
              from="bottom"
            />
          </div>
          <Reveal variant="zoom" delay={420} className="about-badge">
            <h4>{company.starRating} ★</h4>
            <p>{a.badgeLabel}</p>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120} className="about-content">
          <span className="tagline">{a.tagline}</span>
          <SplitHeading text={a.title} className="section-title" />
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
