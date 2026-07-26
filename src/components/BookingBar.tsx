"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { company } from "@/data/company";

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

  const [checkIn, setCheckIn] = useState(new Date(2026, 6, 28));
  const [checkOut, setCheckOut] = useState(new Date(2026, 6, 30));
  const [guests, setGuests] = useState(0);
  const [promo, setPromo] = useState("");
  const checkInRef = useRef<HTMLDivElement>(null);
  const checkOutRef = useRef<HTMLDivElement>(null);

  const pulse = (el: HTMLElement | null) => {
    if (!el) return;
    el.style.transform = "scale(1.05)";
    el.style.color = "var(--main-color)";
    setTimeout(() => {
      el.style.transform = "";
      el.style.color = "";
    }, 200);
  };

  const advanceCheckIn = () => {
    setCheckIn((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 1);
      if (next >= checkOut) {
        const co = new Date(next);
        co.setDate(next.getDate() + 2);
        setCheckOut(co);
      }
      return next;
    });
    pulse(checkInRef.current);
  };

  const advanceCheckOut = () => {
    setCheckOut((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + 1);
      return next;
    });
    pulse(checkOutRef.current);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nights = Math.max(1, Math.round((+checkOut - +checkIn) / 86400000));
    const guestsText = t.booking.guestOptions[guests];
    const promoText = promo || (lang === "th" ? "ไม่มี" : "None");
    const b = t.booking;

    openModal(
      <div className="booking-result">
        <div className="booking-result-emoji">✨ 🏨 ✨</div>
        <h3 className="modal-title" style={{ color: "var(--secondary-color)" }}>
          {b.available}
        </h3>
        <p className="modal-tagline" style={{ fontSize: "1.2rem" }}>
          {b.resortName}
        </p>
        <div className="booking-summary">
          <p>
            <strong>📅 {b.checkIn}:</strong> {fmt(checkIn)} ({DAYS[lang][checkIn.getDay()]})
          </p>
          <p>
            <strong>📅 {b.checkOut}:</strong> {fmt(checkOut)} ({DAYS[lang][checkOut.getDay()]})
          </p>
          <p>
            <strong>🌙 {b.duration}:</strong> {nights} {b.nights}
          </p>
          <p>
            <strong>👥 {b.guests}:</strong> {guestsText}
          </p>
          <p>
            <strong>🏷️ {b.promo}:</strong>{" "}
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
            <div className="booking-input-wrap" ref={checkInRef} onClick={advanceCheckIn} role="button" tabIndex={0}>
              <span className="booking-value">{fmt(checkIn)}</span>
              <span className="booking-subvalue">({DAYS[lang][checkIn.getDay()]})</span>
            </div>
          </div>

          <div className="booking-field">
            <span className="booking-label">{t.booking.checkOut}</span>
            <div className="booking-input-wrap" ref={checkOutRef} onClick={advanceCheckOut} role="button" tabIndex={0}>
              <span className="booking-value">{fmt(checkOut)}</span>
              <span className="booking-subvalue">({DAYS[lang][checkOut.getDay()]})</span>
            </div>
          </div>

          <div className="booking-field">
            <span className="booking-label">{t.booking.guests}</span>
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
      </div>
    </section>
  );
}
