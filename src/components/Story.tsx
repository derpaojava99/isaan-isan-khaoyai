"use client";

import { useLanguage } from "@/lib/language-context";
import Reveal from "./Reveal";
import SplitHeading from "./animation/SplitHeading";
import ScrollExpandLine from "./animation/ScrollExpandLine";

/**
 * The design story behind the resort — the kratip, the pha khao ma and the
 * rooster. Sits directly after About because hero slide 3 links here, and runs
 * on the darker surface so the narrative reads as its own chapter rather than
 * more About copy.
 */
export default function Story() {
  const { t } = useLanguage();
  const s = t.story;

  return (
    <section className="story-section" id="story">
      <div className="container">
        <div className="section-header text-center">
          <Reveal variant="fade">
            <span className="tagline">{s.tagline}</span>
          </Reveal>
          <SplitHeading text={s.title} className="section-title light" />
          <ScrollExpandLine delay={180} />
          <Reveal variant="fade" delay={120}>
            <p className="section-desc story-intro">{s.intro}</p>
          </Reveal>
        </div>

        <div className="story-blocks">
          {s.blocks.map((b, i) => (
            <Reveal key={b.title} variant="up" delay={i * 140} className="story-block">
              {/* The numeral carries the sequence so the three motifs read as
                  one narrative rather than three unrelated cards. */}
              <span className="story-block-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="story-block-body">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" className="story-elements-head">
          <h3>{s.elementsTitle}</h3>
        </Reveal>

        <div className="story-elements">
          {s.elements.map((el, i) => (
            <Reveal key={el.title} variant="up" delay={(i % 3) * 120} className="story-element">
              <h4>{el.title}</h4>
              <p>{el.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" className="story-closing">
          <p>{s.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
