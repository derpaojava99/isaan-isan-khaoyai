"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { villas, type Villa } from "@/data/villas";
import type { Lang } from "@/data/translations";
import type { Dict } from "@/data/translations";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollExpandLine from "./animation/ScrollExpandLine";
import StaggeredTags from "./animation/StaggeredTags";
import { CheckIcon, Icon } from "./icons/Icons";

function VillaModal({ villa, lang, t, onBook }: { villa: Villa; lang: Lang; t: Dict; onBook: () => void }) {
  return (
    <>
      <div className="modal-img">
        <Image src={villa.image} alt={villa.name[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="modal-info">
        <h3 className="modal-title">{villa.name[lang]}</h3>
        <p className="modal-tagline">{villa.tagline[lang]}</p>
        <p className="modal-desc">{villa.longDesc[lang]}</p>
        <h4 className="modal-amenities-title">{t.villas.amenities}</h4>
        <div className="modal-features">
          {villa.features[lang].map((f, i) => (
            <div className="modal-feature-item" key={i}>
              <CheckIcon />
              <span>{f}</span>
            </div>
          ))}
        </div>
        <div className="modal-price-row">
          <span className="modal-price">
            {villa.price} <small style={{ fontSize: "0.9rem", fontWeight: 400 }}>{t.villas.perNight}</small>
          </span>
          <a href="#booking" className="btn btn-primary" onClick={onBook}>
            {t.villas.bookThis}
          </a>
        </div>
      </div>
    </>
  );
}

export default function Villas() {
  const { lang, t } = useLanguage();
  const { openModal, closeModal } = useModal();

  const openVilla = (villa: Villa) =>
    openModal(<VillaModal villa={villa} lang={lang} t={t} onBook={closeModal} />, "room");

  return (
    <section className="villas-section" id="villas">
      <div className="container">
        <div className="section-header text-center">
          <Reveal variant="fade">
            <span className="tagline">{t.villas.tagline}</span>
          </Reveal>
          <SplitHeading text={t.villas.title} className="section-title" />
          <ScrollExpandLine delay={180} />
          <Reveal variant="fade" delay={120}>
            <p className="section-desc">{t.villas.desc}</p>
          </Reveal>
        </div>

        <div className="villas-grid">
          {villas.map((villa, i) => (
            <Reveal key={villa.id} variant="up" delay={(i % 3) * 170} className="villa-card-reveal">
              <article className="villa-card">
                <div className="villa-img-wrap">
                  <span className="villa-tag">{villa.tag[lang]}</span>
                  <Image
                    src={villa.image}
                    alt={villa.name[lang]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="villa-info">
                  <h3>{villa.name[lang]}</h3>
                  <StaggeredTags className="villa-specs" delay={220}>
                    {villa.specs.map((s, j) => (
                      <span key={j} className="villa-spec">
                        <Icon name={s.icon} />
                        {s[lang]}
                      </span>
                    ))}
                  </StaggeredTags>
                  <p className="villa-desc">{villa.desc[lang]}</p>
                  <div className="villa-footer">
                    <div className="villa-price">
                      <span className="price-label">{t.villas.startingFrom}</span>
                      <span className="price-amount">
                        {villa.price} <small className="price-unit">{t.villas.perNight}</small>
                      </span>
                    </div>
                    <button type="button" className="btn btn-outline" onClick={() => openVilla(villa)}>
                      {t.villas.viewDetails}
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
