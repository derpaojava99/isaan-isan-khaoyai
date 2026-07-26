"use client";

import { useLanguage } from "@/lib/language-context";
import { company } from "@/data/company";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollExpandLine from "./animation/ScrollExpandLine";
import { Icon } from "./icons/Icons";

const { lat, lng } = company.geo;
const EMBED_SRC = `https://www.google.com/maps?q=${lat},${lng}&z=13&hl=en&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

export default function MapSection() {
  const { lang, t } = useLanguage();
  const m = t.map;

  return (
    <section className="map-section" id="location">
      <div className="container">
        <div className="map-wrap">
          <Reveal variant="left" className="map-info">
            <span className="tagline">{m.tagline}</span>
            <SplitHeading text={m.title} />
            <ScrollExpandLine align="left" delay={200} width="64px" />
            <p className="map-info-desc">{m.desc}</p>

            <div className="map-detail-list">
              <div className="map-detail">
                <span className="map-detail-ic"><Icon name="pin" size={19} /></span>
                <div>
                  <div className="map-detail-label">{m.addressLabel}</div>
                  <div className="map-detail-value">{company.address.full[lang]}</div>
                </div>
              </div>
              <div className="map-detail">
                <span className="map-detail-ic"><Icon name="clock" size={19} /></span>
                <div>
                  <div className="map-detail-label">{m.hoursLabel}</div>
                  <div className="map-detail-value">{m.hoursValue}</div>
                </div>
              </div>
              <div className="map-detail">
                <span className="map-detail-ic"><Icon name="key" size={19} /></span>
                <div>
                  <div className="map-detail-label">{m.checkInLabel}</div>
                  <div className="map-detail-value">{m.checkInValue}</div>
                </div>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold map-directions"
            >
              {m.getDirections} →
            </a>
          </Reveal>

          <Reveal variant="right" delay={120} className="map-frame">
            <iframe
              title={`Map to ${company.name}`}
              src={EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
