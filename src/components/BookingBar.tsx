"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { buildBookingUrl } from "@/lib/booking-url";
import DateRangePicker, { type DateRange } from "./DateRangePicker";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const DAYS = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  th: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
};

function fmt(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BookingBar() {
  const { lang, t } = useLanguage();

  // Default to a stay starting tomorrow so the picker always opens on valid dates.
  const [range, setRange] = useState<DateRange>(() => {
    const from = new Date();
    from.setDate(from.getDate() + 1);
    from.setHours(0, 0, 0, 0);
    const to = new Date(from);
    to.setDate(to.getDate() + 2);
    return { from, to };
  });
  const [calOpen, setCalOpen] = useState<null | "from" | "to">(null);
  const fromBtnRef = useRef<HTMLButtonElement>(null);
  const toBtnRef = useRef<HTMLButtonElement>(null);
  // Index into t.booking.guestOptions; defaults to "2 Guests".
  const [guests, setGuests] = useState(1);

  const checkIn = range.from;
  const checkOut = range.to;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Nothing to hand over yet — reopen the picker on the missing field.
    if (!checkIn || !checkOut) {
      setCalOpen(!checkIn ? "from" : "to");
      return;
    }

    // Straight to the booking engine: it does the real availability check and
    // shows live rates, so an interstitial here would only add a click.
    // guestOptions is ordered 1, 2, … so the index maps to a head count.
    const url = buildBookingUrl({
      checkIn,
      checkOut,
      adults: guests + 1,
      lang,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-bar">
        <form className="booking-form" onSubmit={submit}>
          <div className="booking-field">
            <span className="booking-label">{t.booking.checkIn}</span>
            <button
              type="button"
              data-cal-trigger
              ref={fromBtnRef}
              className={`booking-input-wrap${calOpen === "from" ? " is-open" : ""}`}
              onClick={() => setCalOpen(calOpen === "from" ? null : "from")}
              aria-haspopup="dialog"
              aria-expanded={calOpen === "from"}
            >
              <span className="booking-value">{checkIn ? fmt(checkIn) : "—"}</span>
              <span className="booking-subvalue">
                {checkIn ? `(${DAYS[lang][checkIn.getDay()]})` : ""}
              </span>
            </button>
          </div>

          <div className="booking-field">
            <span className="booking-label">{t.booking.checkOut}</span>
            <button
              type="button"
              data-cal-trigger
              ref={toBtnRef}
              className={`booking-input-wrap${calOpen === "to" ? " is-open" : ""}`}
              onClick={() => setCalOpen(calOpen === "to" ? null : "to")}
              aria-haspopup="dialog"
              aria-expanded={calOpen === "to"}
            >
              <span className="booking-value">{checkOut ? fmt(checkOut) : "—"}</span>
              <span className="booking-subvalue">
                {checkOut ? `(${DAYS[lang][checkOut.getDay()]})` : ""}
              </span>
            </button>
          </div>

          <div className="booking-field">
            <span className="booking-label">{t.booking.guests}</span>
            {/* A one-entry dropdown looks interactive but offers no choice —
                show the value plainly, and only fall back to a select if more
                occupancy options are added later. */}
            {t.booking.guestOptions.length > 1 ? (
              <select
                className="booking-select"
                aria-label={t.booking.guests}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                {t.booking.guestOptions.map((opt, i) => (
                  <option key={i} value={i}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <span className="booking-value">{t.booking.guestOptions[0]}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            {t.booking.submit}
          </button>
        </form>

        {calOpen && (
          <DateRangePicker
            value={range}
            focus={calOpen}
            onChange={setRange}
            onClose={() => setCalOpen(null)}
            anchorEl={calOpen === "from" ? fromBtnRef.current : toBtnRef.current}
          />
        )}
      </div>
    </section>
  );
}
