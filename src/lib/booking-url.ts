import { company } from "@/data/company";
import type { Lang } from "@/data/translations";

/**
 * Formats a Date as YYYY-MM-DD using its LOCAL calendar parts.
 *
 * Do not reach for `toISOString().split("T")[0]` here. The picker builds dates
 * at local midnight, and in UTC+7 that converts to 17:00 the previous day — so
 * 30 Jul would be sent as 29 Jul and the guest would silently book the wrong
 * night.
 */
export function toLocalISODate(d: Date): string {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export interface BookingQuery {
  checkIn: Date;
  checkOut: Date;
  /** Adults in the single room we hand over (items[0]). */
  adults: number;
  lang: Lang;
}

/**
 * Builds the hand-off URL for the direct-booking engine.
 *
 * `items[0][...]` is the engine's room-line syntax; we always send one room.
 * Children/infants are sent as 0 because the form doesn't collect them.
 * Brackets are intentionally left unencoded — that is the form the engine's
 * own links use, and it parses them as an array.
 */
export function buildBookingUrl({
  checkIn,
  checkOut,
  adults,
  lang,
}: BookingQuery): string {
  const { baseUrl, propertySlug, currency } = company.booking;
  const params = [
    `locale=${lang}`,
    `items[0][adults]=${adults}`,
    `items[0][children]=0`,
    `items[0][infants]=0`,
    `currency=${currency}`,
    `checkInDate=${toLocalISODate(checkIn)}`,
    `checkOutDate=${toLocalISODate(checkOut)}`,
    `trackPage=yes`,
  ].join("&");

  return `${baseUrl}/${propertySlug}?${params}`;
}
