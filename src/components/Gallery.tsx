"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollExpandLine from "./animation/ScrollExpandLine";
import StaggeredTags from "./animation/StaggeredTags";
import { ExpandIcon } from "./icons/Icons";

export default function Gallery() {
  const { lang, t } = useLanguage();
  const { openModal } = useModal();
  const [filter, setFilter] = useState("all");

  const openLightbox = (item: GalleryItem) => {
    openModal(
      <div className="lightbox-inner">
        <img src={item.image} alt={item.alt[lang]} className="lightbox-img" />
        <p className="lightbox-caption">
          {item.alt[lang]} — {t.booking.resortName}
        </p>
      </div>,
      "lightbox"
    );
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <Reveal variant="fade">
            <span className="tagline">{t.gallery.tagline}</span>
          </Reveal>
          <SplitHeading text={t.gallery.title} className="section-title" />
          <ScrollExpandLine delay={180} />
          <Reveal variant="fade" delay={120}>
            <p className="section-desc">{t.gallery.desc}</p>
          </Reveal>
        </div>

        <StaggeredTags className="gallery-filters" stagger={80}>
          {t.gallery.filters.map((btn) => (
            <button
              key={btn.key}
              type="button"
              className={`filter-btn${filter === btn.key ? " active" : ""}`}
              onClick={() => setFilter(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </StaggeredTags>

        <div className="gallery-grid" id="galleryGrid">
          {galleryItems.map((item, i) => {
            const show = filter === "all" || item.category === filter;
            return (
              <div
                key={i}
                className={`gallery-item${item.span2 ? " span-2" : ""}`}
                data-category={item.category}
                style={show ? undefined : { display: "none" }}
                onClick={() => openLightbox(item)}
              >
                <Image
                  src={item.image}
                  alt={item.alt[lang]}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="gallery-hover">
                  <span className="gallery-zoom">
                    <ExpandIcon size={22} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
