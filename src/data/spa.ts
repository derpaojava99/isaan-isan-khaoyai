/**
 * Spa — "อีสานซำบาย / Isaan Sumbai", the resort's spa.
 * Transcribed from the owner's spa page (index 2.html). Every item carries Thai
 * and English side by side, the same convention as the restaurant menu.
 * Prices include VAT 7% and service charge 10%.
 */

export interface SpaPrice {
  /** Minutes. */
  min: number;
  price: string;
}

export interface SpaTreatment {
  en: string;
  th: string;
  prices: SpaPrice[];
}

export interface SpaCategory {
  id: string;
  en: string;
  th: string;
  items: SpaTreatment[];
}

export interface SpaTechnique {
  th: string;
  en: string;
  bodyTh: string;
  bodyEn: string;
}

export interface SpaPackage {
  en: string;
  th: string;
  durationEn: string;
  durationTh: string;
  single: string;
  couple: string;
  image: string;
  /** Guests pick one set. */
  sets: { name: string; steps: string }[];
}

export const spa = {
  en: "ISAAN SUMBAI",
  th: "อีสานซำบาย",
  /** "Sumbai" is Isan for "feeling good" — the brand line the owner uses. */
  descriptorTh: "สปา เขาใหญ่",
  descriptorEn: "Sumbai Skin & Body",
  taglineEn: "Take a break…",
  subtaglineEn: "You deserved this",
  heroImage: "/picture/spa/spa-hero.webp",
  story: {
    th: "ณ อ้อมกอดขุนเขาเขาใหญ่ “อีสานซำบาย” คือสปาที่หยิบเอาภูมิปัญญาการดูแลกายและใจแบบไทยอีสาน มาผสานกับสมุนไพรพื้นถิ่นและน้ำมันหอมระเหยคัดสรร เพื่อคืนความผ่อนคลายอย่างแท้จริงให้กับคุณ",
    en: "Nestled in the hills of Khao Yai, Isaan Sumbai blends time-honoured Thai–Isaan healing with local herbs and hand-selected aromatic oils — bringing you back to calm.",
  },
  vatNoteTh: "ราคานี้รวมภาษีมูลค่าเพิ่ม 7% และค่าบริการ 10% แล้ว",
  vatNoteEn: "All prices are inclusive of VAT 7% & Service Charge 10%",
  hoursTh: "เปิดบริการทุกวัน",
  hoursEn: "Open daily",
};

export const treatments: SpaCategory[] = [
  {
    id: "massage",
    en: "Massage",
    th: "นวดผ่อนคลาย",
    items: [
      { en: "Relaxing Thai Massage", th: "นวดไทยเพื่อผ่อนคลาย", prices: [{ min: 60, price: "800" }] },
      { en: "Foot Massage", th: "นวดเท้า", prices: [{ min: 60, price: "800" }] },
      { en: "Neck & Shoulder Massage", th: "นวดคอ บ่า ไหล่", prices: [{ min: 60, price: "900" }] },
      { en: "Body Balm Massage", th: "นวดบาล์มสมุนไพร", prices: [{ min: 60, price: "1,200" }] },
      { en: "Body Oil Massage", th: "นวดน้ำมันอโรมา", prices: [{ min: 60, price: "1,300" }] },
      { en: "Body Sport Massage", th: "นวดสปอร์ต", prices: [{ min: 60, price: "1,400" }] },
    ],
  },
  {
    id: "herbal",
    en: "Herbal & Hot Stone",
    th: "ลูกประคบ & หินร้อน",
    items: [
      {
        en: "Thai Herbal Compress",
        th: "ประคบสมุนไพรไทย",
        prices: [{ min: 90, price: "1,750" }, { min: 120, price: "2,300" }],
      },
      {
        en: "Aromatic Herbal Compress",
        th: "ประคบสมุนไพรอโรมา",
        prices: [{ min: 90, price: "2,500" }, { min: 120, price: "3,200" }],
      },
      {
        en: "Hot Stone Massage",
        th: "นวดหินร้อน",
        prices: [{ min: 90, price: "2,500" }, { min: 120, price: "3,200" }],
      },
    ],
  },
  {
    id: "scrub",
    en: "Body Scrub",
    th: "ขัดผิวกาย",
    items: [{ en: "Body Scrub", th: "ขัดผิวกาย", prices: [{ min: 60, price: "1,300" }] }],
  },
];

export const techniques: SpaTechnique[] = [
  {
    th: "นวดไทยโบราณ",
    en: "Traditional Thai",
    bodyTh: "กดจุดและยืดเหยียดตามแนวเส้นพลังงาน คลายกล้ามเนื้อที่ตึงและปรับสมดุลร่างกาย",
    bodyEn: "Acupressure & assisted stretching to release tension.",
  },
  {
    th: "น้ำมันอโรมา",
    en: "Aromatherapy Oil",
    bodyTh: "การนวดน้ำมันนุ่มนวลกับกลิ่นหอมบำบัด ผ่อนคลายความเครียดและบำรุงผิว",
    bodyEn: "Gentle oil strokes with therapeutic aromas.",
  },
  {
    th: "ลูกประคบสมุนไพร",
    en: "Herbal Compress",
    bodyTh: "ลูกประคบร้อนด้วยไพล ขมิ้น ตะไคร้ มะกรูด ลดการอักเสบ กระตุ้นการไหลเวียน",
    bodyEn: "Steamed plai, turmeric, lemongrass & kaffir lime.",
  },
  {
    th: "นวดหินร้อน",
    en: "Hot Stone",
    bodyTh: "ความอบอุ่นจากหินภูเขาไฟช่วยให้กล้ามเนื้อผ่อนคลายลึก คลายความเมื่อยล้า",
    bodyEn: "Warm volcanic stones melt deep tension away.",
  },
];

export const ingredients = {
  image: "/picture/spa/spa-ingredients.webp",
  th: "ผลิตภัณฑ์ท้องถิ่น",
  en: "Local Isaan Ingredients",
  bodyTh:
    "เราภูมิใจเลือกใช้สมุนไพรและวัตถุดิบจากชุมชนอีสาน อาทิ ข้าวหอมมะลิ เกลือสินเธาว์ มะขาม และน้ำมันหอมระเหยจากดอกไม้พื้นถิ่น ปลอดสารเคมีรุนแรง อ่อนโยนต่อผิวทุกประเภท",
  bodyEn:
    "Herbs and ingredients from local Isaan communities — jasmine rice, rock salt, tamarind and native floral essential oils — gentle and free from harsh chemicals.",
};

export const packages: SpaPackage[] = [
  {
    en: "Isaan Escape",
    th: "อีสานเอสเคป",
    durationEn: "1 hr 30 min",
    durationTh: "1 ชม. 30 นาที",
    single: "2,000",
    couple: "3,700",
    image: "/picture/spa/spa-pkg-escape.webp",
    sets: [
      { name: "A", steps: "Body Scrub 30 min · Thai Massage 60 min" },
      { name: "B", steps: "Foot Massage 30 min · Aromatic Relaxing Massage 60 min" },
    ],
  },
  {
    en: "Isaan Serenity",
    th: "อีสานเซเรนิตี้",
    durationEn: "2 hrs",
    durationTh: "2 ชั่วโมง",
    single: "2,700",
    couple: "4,900",
    image: "/picture/spa/spa-pkg-serenity.webp",
    sets: [
      { name: "A", steps: "Body Scrub 30 min · Aromatic Relaxing Massage 90 min" },
      { name: "B", steps: "Body Scrub 30 min · Body Mask 30 min · Aromatic Relaxing Massage 60 min" },
      { name: "C", steps: "Body Scrub 30 min · Foot Massage 30 min · Aromatic Relaxing Massage 60 min" },
    ],
  },
  {
    en: "Isaan Royal Retreat",
    th: "อีสานรอยัลรีทรีต",
    durationEn: "2 hrs 30 min",
    durationTh: "2 ชม. 30 นาที",
    single: "3,400",
    couple: "5,900",
    image: "/picture/spa/spa-pkg-royal.webp",
    sets: [
      { name: "A", steps: "Body Scrub 30 min · Body Mask 30 min · Relax Thai Massage 90 min" },
      { name: "B", steps: "Body Scrub 30 min · Body Mask 30 min · Aromatic Relaxing Massage 90 min" },
      { name: "C", steps: "Body Scrub 30 min · Foot Massage 60 min · Aromatic Relaxing Massage 60 min" },
    ],
  },
];

export const packageNoteTh = "ราคาสำหรับคู่ไม่ร่วมกับโปรโมชันอื่น";
export const packageNoteEn = "Couple prices cannot be combined with other promotions";

export const promo = {
  image: "/picture/spa/spa-promo.webp",
  minutes: 90,
  en: "Ginger Oil Massage with Hot Ball",
  th: "นวดน้ำมันขิง & ลูกประคบสมุนไพรร้อน",
  price: "1,500",
  bodyTh:
    "น้ำมันขิงอุ่นผสานลูกประคบสมุนไพรร้อน ช่วยคลายกล้ามเนื้อ กระตุ้นการไหลเวียนเลือด และผ่อนคลายความเครียดอย่างล้ำลึก",
  bodyEn: "Warm ginger oil meets heated herbal balls — deep, soothing relaxation.",
};
