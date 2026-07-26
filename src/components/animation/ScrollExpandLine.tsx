"use client";

import { useInView } from "@/lib/use-in-view";

interface ScrollExpandLineProps {
  /** Final width, any CSS length (default 72px). */
  width?: string;
  /** Line thickness in px. */
  height?: number;
  color?: string;
  /** ms */
  delay?: number;
  duration?: number;
  className?: string;
  align?: "left" | "center" | "right";
}

/**
 * Decorative rule that grows from zero width when scrolled into view.
 * Pure CSS transition + IntersectionObserver — no animation library.
 */
export default function ScrollExpandLine({
  width = "72px",
  height = 2,
  color = "var(--gold)",
  delay = 0,
  duration = 800,
  className = "",
  align = "center",
}: ScrollExpandLineProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });

  return (
    <span
      ref={ref}
      className={`expand-line expand-line--${align} ${className}`}
      aria-hidden="true"
      style={{
        // Reserve the row height so growing the line can't shift layout.
        height,
        ["--line-w" as string]: width,
        ["--line-h" as string]: `${height}px`,
        ["--line-c" as string]: color,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        width: inView ? width : "0px",
        background: color,
      }}
    />
  );
}
