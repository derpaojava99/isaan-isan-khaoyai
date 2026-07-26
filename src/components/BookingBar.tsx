"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { company } from "@/data/company";
import DateRangePicker, { type DateRange } from "./DateRangePicker";
import {
  CalendarIcon,
  KeyIcon,
  MoonIcon,
  TagIcon,
  UsersIcon,
} from "./icons/Icons";

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
  const { openModal, closeModal } = useModal();

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
  const [promo, setPromo] = useState("");

  const checkIn = range.from;
  const checkOut = range.to;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setCalOpen(!checkIn ? "from" : "to");
      return;
    }
    const nights = Math.max(1, Math.round((+checkOut - +checkIn) / 86400000));
    const guestsText = t.booking.guestOptions[guests];
    const promoText = promo || (lang === "th" ? "ไม่มี" : "None");
    const b = t.booking;

    openModal(
      <div className="booking-result">
        <span className="booking-result-mark">
          <KeyIcon size={30} />
        </span>
        <h3 className="modal-title" style={{ color: "var(--secondary-color)" }}>
          {b.available}
        </h3>
        <p className="modal-tagline" style={{ fontSize: "1.2rem" }}>
          {b.resortName}
        </p>
        <div className="booking-summary">
          <p>
            <CalendarIcon />
            <strong>{b.checkIn}:</strong> {fmt(checkIn)} ({DAYS[lang][checkIn.getDay()]})
          </p>
          <p>
            <CalendarIcon />
            <strong>{b.checkOut}:</strong> {fmt(checkOut)} ({DAYS[lang][checkOut.getDay()]})
          </p>
          <p>
            <MoonIcon />
            <strong>{b.duration}:</strong> {nights} {b.nights}
          </p>
          <p>
            <UsersIcon />
            <strong>{b.guests}:</strong> {guestsText}
          </p>
          <p>
            <TagIcon />
            <strong>{b.promo}:</strong>{" "}
            <span style={{ color: "var(--main-color)", fontWeight: "bold" }}>{promoText}</span>
          </p>
        </div>
        <p style={{ color: "var(--text-muted)", marginBottom: 30 }}>{b.reservedRate}</p>
        <div className="booking-result-actions">
          <a
            href={company.social.line}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "16px 40px" }}
          >
            {b.confirm}
          </a>
          <button type="button" className="btn btn-outline" onClick={closeModal}>
            {b.modify}
          </button>
        </div>
      </div>,
      "booking"
    );
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

          <div className="booking-field">
            <span className="booking-label">{t.booking.promo}</span>
            <input
              type="text"
              className="booking-input-text"
              placeholder={t.booking.promoPlaceholder}
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />
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
