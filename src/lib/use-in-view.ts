"use client";

import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  /** Play once and stop observing (default). */
  once?: boolean;
}

/**
 * Minimal one-shot in-view hook backed by IntersectionObserver.
 * Shared by the CSS-driven animations so none of them ship a library.
 * Elements are revealed immediately when the user prefers reduced motion.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -5% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
