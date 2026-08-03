import type { IconName } from "@/components/icons/Icons";

export type Localized = { en: string; th: string };
export type LocalizedList = { en: string[]; th: string[] };

/** Icon is data, not a glyph baked into the label — lets the UI draw an SVG. */
export interface VillaSpec extends Localized {
  icon: IconName;
}

export interface Villa {
  id: string;
  image: string;
  /** Numerals only — the ฿ is rendered as a separate styled element. */
  price: string;
  category: "villas";
  /** Renders full-width below the grid instead of as a normal card. */
  featured?: boolean;
  tag: Localized;
  name: Localized;
  specs: VillaSpec[];
  desc: Localized; // short (card)
  tagline: Localized; // modal sub-headline
  longDesc: Localized; // modal paragraph
  features: LocalizedList; // modal amenities
}

/**
 * Room types and rates transcribed from the property's live booking engine.
 * Rates published there are quoted per 2 nights / 2 guests; the figures here
 * are the per-night equivalent (total ÷ 2) to match the card's "/ night" label,
 * and use the lowest available plan so "starting from" stays truthful.
 */
export const villas: Villa[] = [
  {
    id: "superior-double",
    image: "/picture/pool-room-khao-yai.webp",
    price: "1,520",
    category: "villas",
    tag: { en: "Popular choice", th: "ยอดนิยม" },
    name: {
      en: "Superior Double",
      th: "ซูพีเรีย ดับเบิล",
    },
    specs: [
      { icon: "area", en: "32 Sq.m.", th: "32 ตร.ม." },
      { icon: "bed", en: "King Bed", th: "เตียงคิงไซส์" },
      { icon: "mountain", en: "Mountain View", th: "วิวภูเขา" },
    ],
    desc: {
      en: "Cozy 32 sqm. room with a king bed, private balcony and sweeping garden and mountain views in a relaxed tropical Asian design.",
      th: "ห้องพักขนาด 32 ตร.ม. อบอุ่นสบาย พร้อมเตียงคิงไซส์ ระเบียงส่วนตัว และวิวสวนกับทิวเขา ในดีไซน์เอเชียนทรอปิคอลที่ผ่อนคลาย",
    },
    tagline: {
      en: "Ample Comfort with Garden & Mountain Views",
      th: "กว้างขวางสบาย พร้อมวิวสวนและทิวเขา",
    },
    longDesc: {
      en: "25 Superior rooms with king beds at 32 sqm. provide cozy, ample space and all the creature comforts one could desire. The typically tropical Asian design lets you completely relax, with a private balcony and spacious garden & mountain view.",
      th: "ห้องซูพีเรีย 25 ห้อง เตียงคิงไซส์ ขนาด 32 ตร.ม. ให้พื้นที่กว้างขวางอบอุ่น พร้อมสิ่งอำนวยความสะดวกครบครัน ดีไซน์เอเชียนทรอปิคอลช่วยให้คุณผ่อนคลายเต็มที่ พร้อมระเบียงส่วนตัวและวิวสวนกับทิวเขาอันกว้างไกล",
    },
    features: {
      en: [
        "32 Sq.m. · Sleeps 2",
        "King-sized bed",
        "Private balcony · Mountain view",
        "In-room safe & minibar",
        "Separate shower · Hairdryer",
        "Air conditioning · Non-smoking",
        "Wi-Fi · Cable / satellite TV",
        "Daily room service · Work desk",
      ],
      th: [
        "32 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคิงไซส์",
        "ระเบียงส่วนตัว · วิวภูเขา",
        "ตู้นิรภัยในห้องพัก และมินิบาร์",
        "ห้องอาบน้ำฝักบัวแยกส่วน · ไดร์เป่าผม",
        "เครื่องปรับอากาศ · ปลอดบุหรี่",
        "อินเทอร์เน็ตไร้สาย · ช่องเคเบิล/ทีวีดาวเทียม",
        "รูมเซอร์วิสรายวัน · โต๊ะทำงาน",
      ],
    },
  },

  {
    id: "superior-twin",
    image: "/picture/51201640283_5a8cb853b7_b.jpg",
    price: "1,520",
    category: "villas",
    tag: { en: "Twin Beds", th: "เตียงคู่" },
    name: {
      en: "Superior Twin",
      th: "ซูพีเรีย ทวิน",
    },
    specs: [
      { icon: "area", en: "32 Sq.m.", th: "32 ตร.ม." },
      { icon: "bed", en: "Twin Beds", th: "เตียงคู่" },
      { icon: "mountain", en: "Mountain View", th: "วิวภูเขา" },
    ],
    desc: {
      en: "The twin-bed layout of our 32 sqm. Superior room, with a private balcony, tea & coffee maker and mountain views.",
      th: "ห้องซูพีเรียแบบเตียงคู่ ขนาด 32 ตร.ม. พร้อมระเบียงส่วนตัว เครื่องชงชา/กาแฟ และวิวทิวเขา",
    },
    tagline: {
      en: "Twin Beds, Balcony & Mountain Views",
      th: "เตียงคู่ ระเบียงส่วนตัว พร้อมวิวทิวเขา",
    },
    longDesc: {
      en: "25 Superior rooms with twin beds at 32 sqm. provide cozy, ample space and all the creature comforts one could desire. The typically tropical Asian design lets you completely relax, with a private balcony and spacious garden & mountain view.",
      th: "ห้องซูพีเรีย 25 ห้อง เตียงคู่ ขนาด 32 ตร.ม. ให้พื้นที่กว้างขวางอบอุ่น พร้อมสิ่งอำนวยความสะดวกครบครัน ดีไซน์เอเชียนทรอปิคอลช่วยให้คุณผ่อนคลายเต็มที่ พร้อมระเบียงส่วนตัวและวิวสวนกับทิวเขาอันกว้างไกล",
    },
    features: {
      en: [
        "32 Sq.m. · Sleeps 2",
        "Twin beds · Extra bed available",
        "Private balcony · Mountain view",
        "Tea & coffee maker",
        "In-room safe & minibar",
        "Separate shower · Hairdryer",
        "Wi-Fi · Cable / satellite TV",
        "Daily room service · Work desk",
      ],
      th: [
        "32 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคู่ · มีเตียงเสริม",
        "ระเบียงส่วนตัว · วิวภูเขา",
        "เครื่องชงชา/กาแฟ",
        "ตู้นิรภัยในห้องพัก และมินิบาร์",
        "ห้องอาบน้ำฝักบัวแยกส่วน · ไดร์เป่าผม",
        "อินเทอร์เน็ตไร้สาย · ช่องเคเบิล/ทีวีดาวเทียม",
        "รูมเซอร์วิสรายวัน · โต๊ะทำงาน",
      ],
    },
  },

  {
    id: "deluxe-king",
    image: "/picture/deluxe-king-khao-yai.webp",
    price: "1,980",
    category: "villas",
    tag: { en: "Mountain View", th: "วิวภูเขา" },
    name: {
      en: "Deluxe King",
      th: "ดีลักซ์ คิง",
    },
    specs: [
      { icon: "area", en: "35 Sq.m.", th: "35 ตร.ม." },
      { icon: "bed", en: "King Beds", th: "เตียงคิงไซส์" },
      { icon: "mountain", en: "Mountain View", th: "วิวภูเขา" },
    ],
    desc: {
      en: "A more generous 35 sqm. with a private balcony, bathrobes, mini fridge and tea & coffee maker overlooking the mountains.",
      th: "พื้นที่กว้างขึ้นเป็น 35 ตร.ม. พร้อมระเบียงส่วนตัว เสื้อคลุมอาบน้ำ ตู้เย็นเล็ก และเครื่องชงชา/กาแฟ มองเห็นทิวเขา",
    },
    tagline: {
      en: "A Cozy 35 Sqm. Living Space with Private Balcony",
      th: "พื้นที่พักผ่อน 35 ตร.ม. พร้อมระเบียงส่วนตัว",
    },
    longDesc: {
      en: "7 Deluxe King bedrooms with a cozy living space of 35 sqm. Each comes with a private balcony, mountain view, mini fridge, bathrobes and a tea & coffee maker for an unhurried stay.",
      th: "ห้องดีลักซ์ คิง 7 ห้อง พื้นที่พักผ่อนขนาด 35 ตร.ม. ทุกห้องมาพร้อมระเบียงส่วนตัว วิวทิวเขา ตู้เย็นเล็ก เสื้อคลุมอาบน้ำ และเครื่องชงชา/กาแฟ เพื่อการพักผ่อนอย่างไม่เร่งรีบ",
    },
    features: {
      en: [
        "35 Sq.m. · Sleeps 2",
        "King beds · Baby cot available",
        "Private balcony · Mountain view",
        "Bathrobes & mini fridge",
        "Tea & coffee maker · Minibar",
        "In-room safe · Separate shower",
        "Wi-Fi · Cable / satellite TV",
        "Daily room service · Work desk",
      ],
      th: [
        "35 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคิงไซส์ · มีเตียงเด็กอ่อน",
        "ระเบียงส่วนตัว · วิวภูเขา",
        "เสื้อคลุมอาบน้ำ และตู้เย็นเล็ก",
        "เครื่องชงชา/กาแฟ · มินิบาร์",
        "ตู้นิรภัยในห้องพัก · ห้องอาบน้ำฝักบัวแยกส่วน",
        "อินเทอร์เน็ตไร้สาย · ช่องเคเบิล/ทีวีดาวเทียม",
        "รูมเซอร์วิสรายวัน · โต๊ะทำงาน",
      ],
    },
  },

  {
    id: "deluxe-twin",
    image: "/picture/47f5a4274d2418658ad989f3c0bac61f.webp",
    price: "1,980",
    category: "villas",
    tag: { en: "Garden View", th: "วิวสวน" },
    name: {
      en: "Deluxe Twin",
      th: "ดีลักซ์ ทวิน",
    },
    specs: [
      { icon: "area", en: "35 Sq.m.", th: "35 ตร.ม." },
      { icon: "bed", en: "Twin Beds", th: "เตียงคู่" },
      { icon: "spa", en: "Garden View", th: "วิวสวน" },
    ],
    desc: {
      en: "The twin-bed Deluxe at 35 sqm., opening onto a private balcony above the resort gardens.",
      th: "ห้องดีลักซ์แบบเตียงคู่ ขนาด 35 ตร.ม. เปิดออกสู่ระเบียงส่วนตัวเหนือสวนของรีสอร์ต",
    },
    tagline: {
      en: "Twin Beds Opening onto the Gardens",
      th: "เตียงคู่ เปิดออกสู่สวนเขียวขจี",
    },
    longDesc: {
      en: "7 Deluxe Twin bedrooms with a cozy living space of 35 sqm. Each comes with a private balcony looking over the resort's gardens, a separate shower and a dedicated work desk.",
      th: "ห้องดีลักซ์ ทวิน 7 ห้อง พื้นที่พักผ่อนขนาด 35 ตร.ม. ทุกห้องมาพร้อมระเบียงส่วนตัวที่มองลงสู่สวนของรีสอร์ต ห้องอาบน้ำฝักบัวแยกส่วน และโต๊ะทำงาน",
    },
    features: {
      en: [
        "35 Sq.m. · Sleeps 2",
        "Twin beds",
        "Private balcony · Garden view",
        "In-room safe",
        "Separate shower · Hairdryer",
        "Air conditioning · Non-smoking",
        "Wi-Fi · Cable / satellite TV",
        "Room service · Work desk",
      ],
      th: [
        "35 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคู่",
        "ระเบียงส่วนตัว · วิวสวน",
        "ตู้นิรภัยในห้องพัก",
        "ห้องอาบน้ำฝักบัวแยกส่วน · ไดร์เป่าผม",
        "เครื่องปรับอากาศ · ปลอดบุหรี่",
        "อินเทอร์เน็ตไร้สาย · ช่องเคเบิล/ทีวีดาวเทียม",
        "รูมเซอร์วิส · โต๊ะทำงาน",
      ],
    },
  },

  {
    id: "grand-deluxe-double",
    image: "/picture/12d7cee452f3dc22ded6747028ce8176.webp",
    price: "2,610",
    category: "villas",
    tag: { en: "With Bathtub", th: "มีอ่างอาบน้ำ" },
    name: {
      en: "Grand Deluxe Double",
      th: "แกรนด์ ดีลักซ์ ดับเบิล",
    },
    specs: [
      { icon: "area", en: "40 Sq.m.", th: "40 ตร.ม." },
      { icon: "tub", en: "Bathtub", th: "อ่างอาบน้ำ" },
      { icon: "mountain", en: "Mountain View", th: "วิวภูเขา" },
    ],
    desc: {
      en: "40 sqm. overlooking natural mountain streams, with an open-style bathroom, bathtub and a balcony relaxation area.",
      th: "ขนาด 40 ตร.ม. มองเห็นลำธารกลางขุนเขา พร้อมห้องน้ำแบบเปิดโล่ง อ่างอาบน้ำ และมุมพักผ่อนบนระเบียง",
    },
    tagline: {
      en: "Stunning Views over Natural Mountain Streams",
      th: "วิวตระการตาเหนือลำธารกลางขุนเขา",
    },
    longDesc: {
      en: "5 Grand Deluxe Double bedrooms at 40 sqm. with a stunning view over the landscape and its natural mountain streams. Covered with comfort duvets, open-style bathrooms and a private balcony with a relaxation area for those special moments — plus access to the snack buffet from 2–4 pm.",
      th: "ห้องแกรนด์ ดีลักซ์ ดับเบิล 5 ห้อง ขนาด 40 ตร.ม. พร้อมวิวตระการตาของภูมิทัศน์และลำธารธรรมชาติกลางขุนเขา ปูด้วยผ้านวมนุ่มสบาย ห้องน้ำแบบเปิดโล่ง และระเบียงส่วนตัวพร้อมมุมพักผ่อนสำหรับช่วงเวลาพิเศษ พร้อมสิทธิ์ใช้บริการสแน็คบุฟเฟต์ เวลา 14.00–16.00 น.",
    },
    features: {
      en: [
        "40 Sq.m. · Sleeps 2",
        "King bed · Comfort duvets",
        "Open-style bathroom with bathtub",
        "Private balcony · Relaxation area",
        "Snack buffet 2–4 pm",
        "Bathrobes · In-room safe",
        "Tea & coffee maker · Minibar",
        "Wi-Fi · Daily room service",
      ],
      th: [
        "40 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคิงไซส์ · ผ้านวมนุ่มสบาย",
        "ห้องน้ำแบบเปิดโล่งพร้อมอ่างอาบน้ำ",
        "ระเบียงส่วนตัว · มุมพักผ่อน",
        "สแน็คบุฟเฟต์ 14.00–16.00 น.",
        "เสื้อคลุมอาบน้ำ · ตู้นิรภัยในห้องพัก",
        "เครื่องชงชา/กาแฟ · มินิบาร์",
        "อินเทอร์เน็ตไร้สาย · รูมเซอร์วิสรายวัน",
      ],
    },
  },

  {
    id: "grand-deluxe-twin",
    image: "/picture/5ce352162720403755d52c3887b2f76b.webp",
    price: "2,610",
    category: "villas",
    tag: { en: "With Benefits", th: "พร้อมสิทธิพิเศษ" },
    name: {
      en: "Grand Deluxe Twin with Benefits",
      th: "แกรนด์ ดีลักซ์ ทวิน พร้อมสิทธิพิเศษ",
    },
    specs: [
      { icon: "area", en: "40 Sq.m.", th: "40 ตร.ม." },
      { icon: "bed", en: "Twin Beds", th: "เตียงคู่" },
      { icon: "mountain", en: "Mountain View", th: "วิวภูเขา" },
    ],
    desc: {
      en: "The twin-bed Grand Deluxe at 40 sqm., with an open-style bathroom, balcony relaxation area and afternoon snack buffet.",
      th: "แกรนด์ ดีลักซ์ แบบเตียงคู่ ขนาด 40 ตร.ม. พร้อมห้องน้ำแบบเปิดโล่ง มุมพักผ่อนบนระเบียง และสแน็คบุฟเฟต์ยามบ่าย",
    },
    tagline: {
      en: "Twin Beds with Mountain Stream Views & Benefits",
      th: "เตียงคู่ วิวลำธารขุนเขา พร้อมสิทธิพิเศษ",
    },
    longDesc: {
      en: "4 Grand Deluxe Twin bedrooms at 40 sqm. with a stunning view over the landscape and its natural mountain streams. Covered with comfort duvets, open-style bathrooms and a private balcony with a relaxation area for those special moments — plus access to the snack buffet from 2–4 pm.",
      th: "ห้องแกรนด์ ดีลักซ์ ทวิน 4 ห้อง ขนาด 40 ตร.ม. พร้อมวิวตระการตาของภูมิทัศน์และลำธารธรรมชาติกลางขุนเขา ปูด้วยผ้านวมนุ่มสบาย ห้องน้ำแบบเปิดโล่ง และระเบียงส่วนตัวพร้อมมุมพักผ่อนสำหรับช่วงเวลาพิเศษ พร้อมสิทธิ์ใช้บริการสแน็คบุฟเฟต์ เวลา 14.00–16.00 น.",
    },
    features: {
      en: [
        "40 Sq.m. · Sleeps 2",
        "Twin beds · Baby cot available",
        "Open-style bathroom",
        "Private balcony · Relaxation area",
        "Snack buffet 2–4 pm",
        "Bathrobes · In-room safe",
        "Minibar · Separate shower",
        "Wi-Fi · Daily room service",
      ],
      th: [
        "40 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคู่ · มีเตียงเด็กอ่อน",
        "ห้องน้ำแบบเปิดโล่ง",
        "ระเบียงส่วนตัว · มุมพักผ่อน",
        "สแน็คบุฟเฟต์ 14.00–16.00 น.",
        "เสื้อคลุมอาบน้ำ · ตู้นิรภัยในห้องพัก",
        "มินิบาร์ · ห้องอาบน้ำฝักบัวแยกส่วน",
        "อินเทอร์เน็ตไร้สาย · รูมเซอร์วิสรายวัน",
      ],
    },
  },

  {
    id: "pool-house",
    image: "/picture/04c5ca72ebcaccefe8be207df205c3a8.webp",
    price: "3,870",
    category: "villas",
    featured: true,
    tag: { en: "Signature Stay", th: "ห้องพักซิกเนเจอร์" },
    name: {
      en: "Pool House",
      th: "พูลเฮาส์",
    },
    specs: [
      { icon: "area", en: "35 Sq.m.", th: "35 ตร.ม." },
      { icon: "pool", en: "Pool Access", th: "ติดสระว่ายน้ำ" },
      { icon: "spa", en: "Garden View", th: "วิวสวน" },
    ],
    desc: {
      en: "Our signature stay — an open-style bathroom, comfort duvets and a private balcony relaxation area beside the water, with the afternoon snack buffet included.",
      th: "ห้องพักซิกเนเจอร์ของเรา — ห้องน้ำแบบเปิดโล่ง ผ้านวมนุ่มสบาย และมุมพักผ่อนบนระเบียงส่วนตัวริมน้ำ พร้อมสแน็คบุฟเฟต์ยามบ่าย",
    },
    tagline: {
      en: "The Signature Poolside Retreat",
      th: "ที่พักซิกเนเจอร์ริมสระว่ายน้ำ",
    },
    longDesc: {
      en: "Pool House offers a stunning view over the landscape with its natural mountain streams. Suites have either King or Twin beds, covered with comfort duvets, open-style bathrooms and a private balcony with a relaxation area for those special moments — plus access to the snack buffet from 2–4 pm.",
      th: "พูลเฮาส์ มอบวิวตระการตาของภูมิทัศน์และลำธารธรรมชาติกลางขุนเขา เลือกได้ทั้งเตียงคิงไซส์หรือเตียงคู่ ปูด้วยผ้านวมนุ่มสบาย ห้องน้ำแบบเปิดโล่ง และระเบียงส่วนตัวพร้อมมุมพักผ่อนสำหรับช่วงเวลาพิเศษ พร้อมสิทธิ์ใช้บริการสแน็คบุฟเฟต์ เวลา 14.00–16.00 น.",
    },
    features: {
      en: [
        "35 Sq.m. · Sleeps 2",
        "King or twin beds · Comfort duvets",
        "Open-style bathroom",
        "Private balcony · Relaxation area",
        "Snack buffet 2–4 pm",
        "Garden view · Non-smoking",
        "Cable TV · Bathroom amenities",
        "Daily room service · 24-hour security",
      ],
      th: [
        "35 ตร.ม. · นอนได้ 2 ท่าน",
        "เตียงคิงไซส์หรือเตียงคู่ · ผ้านวมนุ่มสบาย",
        "ห้องน้ำแบบเปิดโล่ง",
        "ระเบียงส่วนตัว · มุมพักผ่อน",
        "สแน็คบุฟเฟต์ 14.00–16.00 น.",
        "วิวสวน · ปลอดบุหรี่",
        "เคเบิลทีวี · สิ่งอำนวยความสะดวกในห้องน้ำ",
        "รูมเซอร์วิสรายวัน · รักษาความปลอดภัย 24 ชม.",
      ],
    },
  },
];
