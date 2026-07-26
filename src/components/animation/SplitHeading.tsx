"use client";

import { Fragment, useEffect, useState, type ElementType } from "react";
import { useLanguage } from "@/lib/language-context";
import { splitText } from "@/lib/split-text";
import { useInView } from "@/lib/use-in-view";

interface SplitHeadingProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Seconds between each unit. */
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  /** ScrollTrigger start, e.g. "top 85%". */
  triggerStart?: string;
  /** Vertical travel per unit. */
  y?: number;
}

/**
 * Headline that reveals unit-by-unit on scroll, animated with GSAP.
 *
 * GSAP is dynamically imported inside the effect so it never lands in the
 * initial bundle. Text renders normally on the server and stays readable if
 * JS never runs (progressive enhancement); units are only hidden once we know
 * we can animate them, and a watchdog reveals them if GSAP fails to load.
 */
export default function SplitHeading({
  text,
  as,
  className = "",
  stagger = 0.028,
  duration = 0.85,
  delay = 0,
  ease = "back.out(1.4)",
  triggerStart = "top 86%",
  y = 26,
}: SplitHeadingProps) {
  const Tag = (as ?? "h2") as ElementType;
  const { lang } = useLanguage();
  // Load GSAP only once this heading is near the viewport. On a single-page
  // site every section mounts at once, so importing on mount would make every
  // visitor download GSAP up front — including those who never scroll.
  const { ref, inView: isNear } = useInView<HTMLElement>({
    threshold: 0,
    rootMargin: "300px 0px 300px 0px",
  });
  // Split for the active script: Latin per letter, Thai per word.
  const words = splitText(text, lang === "th" ? "words" : "chars");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNear) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    // If GSAP is slow or blocked, make sure the heading is never left hidden.
    const watchdog = setTimeout(() => setAnimated(false), 2500);

    (async () => {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const units = el.querySelectorAll<HTMLElement>("[data-split-unit]");
        if (!units.length) return;

        setAnimated(true); // hides units via CSS before the tween's first frame
        clearTimeout(watchdog);

        ctx = gsap.context(() => {
          gsap.fromTo(
            units,
            { opacity: 0, yPercent: y, rotateX: -55 },
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              duration,
              delay,
              ease,
              stagger,
              force3D: true,
              scrollTrigger: { trigger: el, start: triggerStart, once: true },
            }
          );
        }, el);
      } catch {
        if (!cancelled) setAnimated(false); // leave text plainly visible
      }
    })();

    return () => {
      cancelled = true;
      clearTimeout(watchdog);
      ctx?.revert();
    };
    // Re-split and re-run when the copy changes (language switch).
  }, [isNear, ref, text, lang, stagger, duration, delay, ease, triggerStart, y]);

  return (
    <Tag
      ref={ref}
      className={`split-heading${animated ? " is-animating" : ""} ${className}`}
    >
      {/* Full text for assistive tech and copy-paste; the split spans are decorative. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wi) => (
          // The space must sit BETWEEN the word spans: trailing whitespace
          // inside a display:inline-block is trimmed, which glues words together.
          <Fragment key={wi}>
            <span className="split-word">
              {word.units.map((unit, ui) => (
                <span className="split-unit" data-split-unit="" key={ui}>
                  {unit}
                </span>
              ))}
            </span>
            {word.trailing ? " " : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
