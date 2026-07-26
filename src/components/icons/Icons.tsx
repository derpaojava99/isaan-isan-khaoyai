/**
 * Inline SVG icon set.
 *
 * Emoji were being rendered by the OS (bright green LINE bubble, black
 * handset), which clashed badly with the Isan earth-tone palette and could not
 * be recoloured. These inherit `currentColor`, so they follow the theme.
 */

type IconProps = {
  className?: string;
  size?: number;
};

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
  focusable: "false" as const,
});

/**
 * Chat bubble — used for LINE.
 * Deliberately a plain bubble with three dots: letterforms inside the balloon
 * turn to mush at 18–22px, and the LINE wordmark isn't ours to redraw.
 */
export function ChatIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.6a7.9 7.9 0 0 1-8.2 7.9 9 9 0 0 1-2.6-.35L4.5 20.5l1.3-3.9A7.6 7.6 0 0 1 4 11.6C4 7.3 7.7 3.9 12.3 3.9s8.2 3.4 8.2 7.7Z" />
      <circle cx="8.9" cy="11.7" r="1" fill="currentColor" stroke="none" />
      <circle cx="12.3" cy="11.7" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.7" cy="11.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 16.9v2.6a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3.5 5.3a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.6c.11.86.32 1.7.63 2.5a1.8 1.8 0 0 1-.4 1.9L8.8 10.4a14.4 14.4 0 0 0 5.4 5.4l1.1-1.14a1.8 1.8 0 0 1 1.9-.4c.8.3 1.64.52 2.5.63a1.8 1.8 0 0 1 1.6 1.85Z" />
    </svg>
  );
}

export function FacebookIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <path d="M14.5 8.5V6.9c0-.7.2-1.1 1.2-1.1h1.5V3.1A20 20 0 0 0 15 3c-2.3 0-3.9 1.4-3.9 4v1.5H8.6V11h2.5v8h3v-8h2.3l.4-2.5h-2.3Z" />
    </svg>
  );
}

export function InstagramIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.8" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Review star — stands in for TripAdvisor (its owl mark is not ours to use). */
export function ReviewStarIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3.8l2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.73L6.8 19.85l1-5.8-4.2-4.1 5.8-.85L12 3.8Z" />
    </svg>
  );
}

export function MailIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 6.5 7.3 5.2a1.6 1.6 0 0 0 1.8 0l7.3-5.2" />
    </svg>
  );
}

export function PinIcon({ className, size = 18 }: IconProps) {
  return (
    <svg
      {...base(size)}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10.3c0 5.4-8 11.2-8 11.2s-8-5.8-8-11.2a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.2" r="2.8" />
    </svg>
  );
}
