"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollExpandLine from "./animation/ScrollExpandLine";
import { Icon, type IconName } from "./icons/Icons";

/**
 * Keyed by the item's icon, not by array position. The previous positional
 * array silently handed an empty `src` to <Image> the moment the item list
 * grew past three, so reordering or adding a card can no longer break it.
 */
const FACILITY_IMAGES: Partial<Record<IconName, string>> = {
  dining: "/picture/isaan-food-khao-yai.webp",
  cinema: "/picture/b43b5b240b289a880775928f1cb476ec.webp",
  market: "/picture/39ac354a7b6fae5b3d653ac18c702493.webp",
  pool: "/picture/bd147f63208d59f5d1d12bfff7c2c5aa.webp",
  spa: "/picture/khao-yai-massage.webp",
  bicycle: "/picture/7d949d98ff458c254bdc75eb417af592.webp",
};
const FACILITY_IMAGE_FALLBACK = "/picture/khao-yai-resort-concept.webp";

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
            <Reveal
              key={i}
              variant="up"
              delay={i * 180}
              className="facility-card"
              // The whole card is clickable when it has a destination, not
              // just the "Explore Menu →" text.
              as={item.href ? Link : "div"}
              href={item.href}
            >
              <Image
                src={FACILITY_IMAGES[item.icon] ?? FACILITY_IMAGE_FALLBACK}
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
