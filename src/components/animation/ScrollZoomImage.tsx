"use client";

import Image from "next/image";
import { useInView } from "@/lib/use-in-view";

interface ScrollZoomImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  /** ms */
  delay?: number;
  duration?: number;
  priority?: boolean;
  /** Reveal direction of the clip-path wipe. */
  from?: "bottom" | "left" | "right";
}

/**
 * Image that wipes in via clip-path while easing out of a slight zoom.
 * No blur is used — animating focus causes eye strain.
 * The wrapper must be positioned and sized by the caller (uses `fill`).
 */
export default function ScrollZoomImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  delay = 0,
  duration = 1100,
  priority = false,
  from = "bottom",
}: ScrollZoomImageProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  // The observed node must NOT be the clipped one: an element under
  // `clip-path: inset(100%)` reports intersectionRatio 0, so watching it
  // directly deadlocks (clipped -> never intersects -> never unclipped).
  return (
    <div ref={ref} className={`zoom-image-wrap ${className}`}>
      <div
        className={`zoom-image zoom-image--${from}${inView ? " is-in" : ""}`}
        style={{
          ["--zoom-dur" as string]: `${duration}ms`,
          ["--zoom-delay" as string]: `${delay}ms`,
        }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}
