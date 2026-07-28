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
import ScrollZoomImage from "./animation/ScrollZoomImage";
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
            {villa.price}
            <span className="baht">฿</span>
            <small style={{ fontSize: "0.9rem", fontWeight: 400 }}> {t.villas.perNight}</small>
          </span>
          <a href="#booking" className="btn btn-primary" onClick={onBook}>
            {t.villas.bookThis}
          </a>
        </div>
      </div>
    </>
  );
}

/** The card body, shared by the grid and the full-width featured layout. */
function VillaCard({
  villa,
  lang,
  t,
  onDetails,
  sizes,
}: {
  villa: Villa;
  lang: Lang;
  t: Dict;
  onDetails: () => void;
  sizes: string;
}) {
  return (
    // The whole card opens the modal, not just the button. The button stays a
    // real <button> so it remains the keyboard/screen-reader entry point —
    // making the card itself focusable too would just add a duplicate tab stop.
    <article
      className={`villa-card${villa.featured ? " villa-card--featured" : ""}`}
      onClick={onDetails}
    >
      <div className="villa-img-wrap">
        <span className="villa-tag">{villa.tag[lang]}</span>
        {villa.featured ? (
          // Signature room gets the clip-path wipe + Ken Burns zoom, the same
          // reveal the About image uses, so its entrance matches its billing.
          <ScrollZoomImage
            src={villa.image}
            alt={villa.name[lang]}
            sizes={sizes}
            from="bottom"
            duration={1400}
          />
        ) : (
          <Image src={villa.image} alt={villa.name[lang]} fill sizes={sizes} />
        )}
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
              {villa.price}
              <span className="baht">฿</span>
              <small className="price-unit"> {t.villas.perNight}</small>
            </span>
          </div>
          <button
            type="button"
            className="btn btn-outline"
            // Card already handles the click; stop it here so one tap doesn't
            // fire onDetails twice.
            onClick={(e) => {
              e.stopPropagation();
              onDetails();
            }}
          >
            {t.villas.viewDetails}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Villas() {
  const { lang, t } = useLanguage();
  const { openModal, closeModal } = useModal();

  const openVilla = (villa: Villa) =>
    openModal(<VillaModal villa={villa} lang={lang} t={t} onBook={closeModal} />, "room");

  // With seven rooms a 3-up grid strands the last one alone, so the flagged
  // room runs full width beneath the grid as a deliberate highlight.
  const gridVillas = villas.filter((v) => !v.featured);
  const featured = villas.filter((v) => v.featured);

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
          {gridVillas.map((villa, i) => (
            <Reveal key={villa.id} variant="up" delay={(i % 3) * 170} className="villa-card-reveal">
              <VillaCard
                villa={villa}
                lang={lang}
                t={t}
                onDetails={() => openVilla(villa)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>

        {featured.map((villa) => (
          // Fade rather than slide: the image's clip-path wipe is the entrance
          // here, and a moving container would compete with it.
          <Reveal key={villa.id} variant="fade" className="villa-featured-reveal">
            <VillaCard
              villa={villa}
              lang={lang}
              t={t}
              onDetails={() => openVilla(villa)}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
