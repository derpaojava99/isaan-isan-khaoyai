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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${visible ? " is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
