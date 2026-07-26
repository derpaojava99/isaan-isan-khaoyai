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

/* ---------------------------------------------------------------------------
   Amenity / feature icons. All share one stroked line-art style so villa
   specs, facility cards and the map panel read as a single family.
   --------------------------------------------------------------------------- */

const stroke = (size: number) => ({
  ...base(size),
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

/** Floor area. */
export function AreaIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M3.5 8.5v-5h5M20.5 15.5v5h-5" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="m8.5 15.5 7-7" />
    </svg>
  );
}

/** Pool / water. */
export function WavesIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M2.5 17.5c1.9 0 1.9 1.6 3.8 1.6s1.9-1.6 3.8-1.6 1.9 1.6 3.8 1.6 1.9-1.6 3.8-1.6 1.9 1.6 3.8 1.6" />
      <path d="M2.5 12.6c1.9 0 1.9 1.6 3.8 1.6s1.9-1.6 3.8-1.6 1.9 1.6 3.8 1.6 1.9-1.6 3.8-1.6 1.9 1.6 3.8 1.6" />
      <path d="M2.5 7.7c1.9 0 1.9 1.6 3.8 1.6S8.2 7.7 10.1 7.7s1.9 1.6 3.8 1.6 1.9-1.6 3.8-1.6 1.9 1.6 3.8 1.6" />
    </svg>
  );
}

export function MountainIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="m2.5 19.5 6.2-10.6 4.1 6.6 2.3-3.6 6.4 7.6z" />
      <circle cx="17.4" cy="6.4" r="2.1" />
    </svg>
  );
}

/** Balcony / sunrise view. */
export function SunriseIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M2.8 18.5h18.4" />
      <path d="M6.6 14.6a5.4 5.4 0 0 1 10.8 0" />
      <path d="M12 3.2v3.1M4.9 6.6l1.6 1.6M19.1 6.6l-1.6 1.6" />
    </svg>
  );
}

export function BathtubIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M3 12.4h18v2.3a4.2 4.2 0 0 1-4.2 4.2H7.2A4.2 4.2 0 0 1 3 14.7z" />
      <path d="M6 12.4V6.1a2 2 0 0 1 3.6-1.2" />
      <path d="M6.7 19v1.6M17.3 19v1.6" />
    </svg>
  );
}

export function BedIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M2.8 18.5v-11M2.8 13.4h18.4v5.1M21.2 13.4a3.6 3.6 0 0 0-3.6-3.6h-6.1v3.6" />
      <circle cx="6.9" cy="10.6" r="1.9" />
    </svg>
  );
}

export function TentIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M12 3.6 2.6 19.4h18.8z" />
      <path d="M12 3.6v15.8M12 19.4l4-6.6M12 19.4l-4-6.6" />
    </svg>
  );
}

export function ShowerIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M4 20.4V7.6a3.4 3.4 0 0 1 6.8 0" />
      <path d="M9.6 9.2h9.6l-4.8 4.2z" />
      <path d="M11.6 17.4v1.4M15.2 16.6v1.4M18.6 17.4v1.4" />
    </svg>
  );
}

/** Two-storey layout. */
export function StairsIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M3 20.4h4.4v-4.2h4.2V12h4.2V7.8h5.2" />
      <path d="M3 20.4V16h4.4M11.6 16.2V12h4.2" />
    </svg>
  );
}

/** Butler / wine service. */
export function WineIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M7.4 3.4h9.2l-.8 6a3.9 3.9 0 0 1-7.6 0z" />
      <path d="M12 15.3v5.1M8.6 20.4h6.8" />
    </svg>
  );
}

export function UtensilsIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M6.2 3v6.6a2.4 2.4 0 0 0 4.8 0V3M8.6 12v9" />
      <path d="M17 3c-1.7 1.1-2.6 3-2.6 5.2 0 1.7.9 2.9 2.6 3.2V21" />
    </svg>
  );
}

export function LeafIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M4.2 19.8c-1.8-5.6 1-13.2 10.4-14.6 2-.3 3.6-.6 4.9-1 .3 8.4-3.4 16.6-11.8 16.6a6.9 6.9 0 0 1-3.5-1z" />
      <path d="M4.6 20.4c2.6-5.6 6-9 10.4-11.4" />
    </svg>
  );
}

/** Wellness / spa. */
export function LotusIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M12 4.4c2 2 3 4 3 6.2 0 2-1 3.7-3 5.2-2-1.5-3-3.2-3-5.2 0-2.2 1-4.2 3-6.2z" />
      <path d="M8.9 9.4C6.5 9 4.4 9.5 2.8 11c1.4 4.3 4.4 6.6 9.2 6.6s7.8-2.3 9.2-6.6c-1.6-1.5-3.7-2-6.1-1.6" />
    </svg>
  );
}

export function ConciergeIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M2.8 19.2h18.4" />
      <path d="M4.6 15.8a7.4 7.4 0 0 1 14.8 0z" />
      <path d="M12 8.4v-2" />
      <circle cx="12" cy="4.9" r="1.5" />
    </svg>
  );
}

export function ClockIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </svg>
  );
}

export function KeyIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <circle cx="7.6" cy="16.4" r="3.6" />
      <path d="m10.2 13.8 8.2-8.2M16.2 7.8l2 2M13.9 10.1l2 2" />
    </svg>
  );
}

export function ExpandIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <circle cx="10.8" cy="10.8" r="6.6" />
      <path d="m20 20-4.5-4.5M10.8 8.2v5.2M8.2 10.8h5.2" />
    </svg>
  );
}

export function CalendarIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <rect x="3.4" y="5" width="17.2" height="15.6" rx="2.4" />
      <path d="M3.4 9.8h17.2M8.4 3.2v3.4M15.6 3.2v3.4" />
    </svg>
  );
}

export function MoonIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M20.6 13.6A8.8 8.8 0 1 1 10.4 3.4a6.9 6.9 0 0 0 10.2 10.2z" />
    </svg>
  );
}

export function UsersIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M15.6 20.2v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.2a3.6 3.6 0 0 0-3.6 3.6v1.8" />
      <circle cx="9.1" cy="7.4" r="3.6" />
      <path d="M21.4 20.2v-1.8a3.6 3.6 0 0 0-2.7-3.48M16.2 4a3.6 3.6 0 0 1 0 6.97" />
    </svg>
  );
}

export function TagIcon({ className, size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className}>
      <path d="M20.2 12.9 12.9 20.2a1.8 1.8 0 0 1-2.6 0l-6.5-6.5V3.8h9.9l6.5 6.5a1.8 1.8 0 0 1 0 2.6z" />
      <circle cx="8.1" cy="8.1" r="1.4" />
    </svg>
  );
}

export function CheckIcon({ className, size = 15 }: IconProps) {
  return (
    <svg {...stroke(size)} className={className} strokeWidth={2.4}>
      <path d="m4.6 12.4 4.8 4.8 10-10.4" />
    </svg>
  );
}

/** Solid star — the rating badge. */
export function StarIcon({ className, size = 22 }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <path d="M12 3.4l2.7 5.5 6 .87-4.35 4.24 1.03 6-5.38-2.83-5.38 2.83 1.03-6L3.3 9.77l6-.87L12 3.4Z" />
    </svg>
  );
}

/* Registry so data files can name an icon instead of embedding a glyph. */
export const iconMap = {
  area: AreaIcon,
  pool: WavesIcon,
  mountain: MountainIcon,
  balcony: SunriseIcon,
  tub: BathtubIcon,
  bed: BedIcon,
  tent: TentIcon,
  shower: ShowerIcon,
  levels: StairsIcon,
  canal: WavesIcon,
  butler: WineIcon,
  dining: UtensilsIcon,
  spa: LeafIcon,
  wellness: LotusIcon,
  concierge: ConciergeIcon,
  clock: ClockIcon,
  key: KeyIcon,
  pin: PinIcon,
} as const;

export type IconName = keyof typeof iconMap;

/** Renders an icon by name from the registry. */
export function Icon({
  name,
  size,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Cmp = iconMap[name];
  return <Cmp size={size} className={className} />;
}
