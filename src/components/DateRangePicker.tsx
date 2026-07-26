"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
  /** Which field opened the panel — decides which date gets picked first. */
  focus: "from" | "to";
  onClose: () => void;
}

/** Midnight-normalised copy, so comparisons ignore time-of-day. */
const day = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
const addMonths = (d: Date, n: number) =>
  new Date(d.getFullYear(), d.getMonth() + n, 1);

function buildMonth(view: Date) {
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const start = first.getDay(); // 0 = Sunday
  const total = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = Array(start).fill(null);
  for (let i = 1; i <= total; i += 1) {
    cells.push(new Date(view.getFullYear(), view.getMonth(), i));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function DateRangePicker({
  value,
  onChange,
  focus,
  onClose,
}: DateRangePickerProps) {
  const { t } = useLanguage();
  const b = t.booking;
  const today = day(new Date());
  const panelRef = useRef<HTMLDivElement>(null);

  const [view, setView] = useState<Date>(() =>
    value.from ? new Date(value.from.getFullYear(), value.from.getMonth(), 1) : new Date(today.getFullYear(), today.getMonth(), 1)
  );
  // While picking the end date, hovering previews the range.
  const [hover, setHover] = useState<Date | null>(null);
  // "from" = next click sets check-in; "to" = next click sets check-out.
  const [stage, setStage] = useState<"from" | "to">(focus);

  useEffect(() => setStage(focus), [focus]);

  // Close on outside click / Escape.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        // Ignore clicks on the trigger itself; the trigger toggles separately.
        if (!(e.target as HTMLElement).closest?.("[data-cal-trigger]")) onClose();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const months = useMemo(() => [view, addMonths(view, 1)], [view]);

  const pick = (d: Date) => {
    if (d < today) return;
    if (stage === "from" || !value.from) {
      onChange({ from: d, to: null });
      setStage("to");
      return;
    }
    // Clicking a day at/before check-in restarts the range there.
    if (d <= value.from) {
      onChange({ from: d, to: null });
      setStage("to");
      return;
    }
    onChange({ from: value.from, to: d });
    setStage("from");
    onClose();
  };

  // End of the range being previewed while hovering.
  const previewTo = value.to ?? (stage === "to" ? hover : null);

  const inRange = (d: Date) => {
    if (!value.from || !previewTo) return false;
    return d > value.from && d < previewTo;
  };

  const nights =
    value.from && value.to
      ? Math.round((+day(value.to) - +day(value.from)) / 86400000)
      : 0;

  const canGoBack =
    view.getFullYear() > today.getFullYear() ||
    (view.getFullYear() === today.getFullYear() && view.getMonth() > today.getMonth());

  return (
    <div className="cal-panel" ref={panelRef} role="dialog" aria-label={b.checkIn}>
      <div className="cal-head">
        <span className="cal-hint">
          {stage === "from" || !value.from ? b.selectCheckIn : b.selectCheckOut}
        </span>
        {nights > 0 && (
          <span className="cal-nights">
            {nights} {b.nightsSelected}
          </span>
        )}
      </div>

      <div className="cal-nav">
        <button
          type="button"
          className="cal-nav-btn"
          onClick={() => setView(addMonths(view, -1))}
          disabled={!canGoBack}
          aria-label={b.prevMonth}
        >
          ‹
        </button>
        <button
          type="button"
          className="cal-nav-btn"
          onClick={() => setView(addMonths(view, 1))}
          aria-label={b.nextMonth}
        >
          ›
        </button>
      </div>

      <div className="cal-months">
        {months.map((m, mi) => (
          <div className="cal-month" key={mi}>
            <div className="cal-month-label">
              {b.months[m.getMonth()]} {m.getFullYear()}
            </div>
            <div className="cal-weekdays">
              {b.weekdays.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
            <div className="cal-grid" onMouseLeave={() => setHover(null)}>
              {buildMonth(m).map((d, i) => {
                if (!d) return <span className="cal-cell is-empty" key={i} />;
                const past = d < today;
                const isFrom = value.from && sameDay(d, value.from);
                const isTo = value.to && sameDay(d, value.to);
                const between = inRange(d);
                const cls = [
                  "cal-cell",
                  past ? "is-past" : "",
                  isFrom ? "is-from" : "",
                  isTo ? "is-to" : "",
                  between ? "is-between" : "",
                  sameDay(d, today) ? "is-today" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    type="button"
                    key={i}
                    className={cls}
                    disabled={past}
                    onClick={() => pick(d)}
                    onMouseEnter={() => !past && setHover(d)}
                    aria-label={`${d.getDate()} ${b.months[d.getMonth()]} ${d.getFullYear()}`}
                    aria-current={sameDay(d, today) ? "date" : undefined}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="cal-foot">
        <button
          type="button"
          className="cal-clear"
          onClick={() => {
            onChange({ from: null, to: null });
            setStage("from");
          }}
        >
          {b.clearDates}
        </button>
        <button type="button" className="btn btn-primary cal-done" onClick={onClose}>
          {b.done}
        </button>
      </div>
    </div>
  );
}
