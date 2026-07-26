"use client";

import { Children, type ReactNode } from "react";
import { useInView } from "@/lib/use-in-view";

interface StaggeredTagsProps {
  children: ReactNode;
  /** ms between each child. */
  stagger?: number;
  duration?: number;
  delay?: number;
  className?: string;
  /** Element to render as the container (default div). */
  as?: "div" | "span";
}

/**
 * Pops each child in one after another with a gentle spring overshoot.
 * Pure CSS transitions + IntersectionObserver.
 *
 * Children are wrapped rather than cloned so any element type works and no
 * className collisions occur with the caller's own styling.
 */
export default function StaggeredTags({
  children,
  stagger = 70,
  duration = 420,
  delay = 0,
  className = "",
  as = "div",
}: StaggeredTagsProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const items = Children.toArray(children);
  const Tag = as;

  return (
    <Tag ref={ref as never} className={`stagger-tags ${className}`}>
      {items.map((child, i) => (
        <span
          key={i}
          className={`stagger-tag${inView ? " is-in" : ""}`}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay + i * stagger}ms`,
          }}
        >
          {child}
        </span>
      ))}
    </Tag>
  );
}
