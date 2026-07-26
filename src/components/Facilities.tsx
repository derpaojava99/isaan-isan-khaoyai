"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollExpandLine from "./animation/ScrollExpandLine";
import { Icon } from "./icons/Icons";

const FACILITY_IMAGES = [
  "/picture/isaan-food-khao-yai.webp",
  "/picture/khao-yai-massage.webp",
  "/picture/bd147f63208d59f5d1d12bfff7c2c5aa.webp",
];

export default function Facilities() {
  const { t } = useLanguage();
  const f = t.facilities;

  return (
    <section className="facilities-section" id="facilities">
      <div className="container">
        <div className="section-header text-center">
          <Reveal variant="fade">
            <span className="tagline">{f.tagline}</span>
          </Reveal>
          <SplitHeading text={f.title} className="section-title light" />
          <ScrollExpandLine delay={180} />
          <Reveal variant="fade" delay={120}>
            <p className="section-desc" style={{ color: "rgba(255,255,255,0.7)" }}>
              {f.desc}
            </p>
          </Reveal>
        </div>

        <div className="facilities-grid">
          {f.items.map((item, i) => (
            <Reveal key={i} variant="up" delay={i * 180} className="facility-card">
              <Image
                src={FACILITY_IMAGES[i]}
                alt={item.title}
                fill
                className="facility-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="facility-overlay">
                <div className="facility-content">
                  {item.badge && <span className="facility-badge">{item.badge}</span>}
                  <div className="facility-icon">
                    <Icon name={item.icon} size={30} />
                  </div>
                  <h3 className="facility-title">{item.title}</h3>
                  <p className="facility-desc">{item.desc}</p>
                  <span className="facility-link">{item.link}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
