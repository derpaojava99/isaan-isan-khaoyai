"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type RevealVariant = "up" | "fade" | "zoom" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number; // ms
  className?: string;
  as?: ElementType;
  once?: boolean;
}

/**
 * Scroll-triggered reveal. Elegant + themed, honours prefers-reduced-motion.
 * Uses IntersectionObserver — no animation library on the first paint (playbook §5).
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as,
  once = true,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      // Fire as soon as a sliver enters, while the element is still low in the
      // viewport — the longer entrance then plays out as the user keeps
      // scrolling instead of starting once the card is already fully in frame.
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  // Release the compositor hint once the entrance has finished — leaving
  // will-change on every revealed element permanently wastes GPU memory.
  useEffect(() => {
    if (!visible || !once) return;
    const el = ref.current;
    if (!el) return;
    const onEnd = (e: TransitionEvent) => {
      if (e.target === el && e.propertyName === "opacity") setSettled(true);
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [visible, once]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${visible ? " is-visible" : ""}${
        settled ? " is-settled" : ""
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
