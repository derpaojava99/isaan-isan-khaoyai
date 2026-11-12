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
  category: "villas";
  /** Renders full-width below the grid instead of as a normal card. */
  featured?: boolean;
  tag: Localized;
  name: Localized;
  specs: VillaSpec[];
  desc: Localized; // short (card)
  tagline: Localized; // modal sub-headline
  longDesc: Localized; // modal paragraph
  /** Modal list heading; falls back to the shared "Room Amenities" label. */
  amenitiesTitle?: Localized;
  features: LocalizedList; // modal amenities
}

/**
 * Room facts and copy follow the sales team's room-page brief of 12.11.2569
 * (Factsheet, November 2569). Amenities list only what the Factsheet confirms.
 * No rates here: the booking engine is the only place that quotes them.
 */
export const villas: Villa[] = [
  {
    id: "superior-king",
    image: "/picture/superior-king-khao-yai.webp",
    category: "villas",
    tag: { en: "Popular choice", th: "ยอดนิยม" },
    name: {
      en: "Superior King",
      th: "ซูพีเรีย คิง",
    },
    specs: [
      { icon: "area", en: "32 m²", th: "32 ตร.ม." },
      { icon: "bed", en: "King Bed", th: "เตียงคิงไซส์" },
      { icon: "spa", en: "Garden View", th: "วิวสวน" },
    ],
    desc: {
      en: "32 m² of contemporary Isan style — a woven headboard wall, mudmee silk cushions and a king-size bed, with a private balcony over the resort gardens.",
      th: "ห้องขนาด 32 ตร.ม. สไตล์อีสานร่วมสมัย ผนังหัวเตียงงานจักสาน หมอนอิงผ้าไหมมัดหมี่ และเตียงคิงไซส์ พร้อมระเบียงส่วนตัวรับวิวสวน",
    },
    tagline: {
      en: "Contemporary Isan Comfort with Garden Views",
      th: "กลิ่นอายอีสานร่วมสมัย พร้อมวิวสวน",
    },
    longDesc: {
      en: "Twenty-five Superior King rooms, each 32 m² with a private balcony opening onto the resort gardens. A woven headboard wall, mudmee silk cushions in the resort's reds and indigos and a hand-painted rooster mural above the king-size bed bring contemporary Isan style to a calm, comfortable room, finished with a walk-in shower.",
      th: "ห้องซูพีเรีย คิง 25 ห้อง ขนาด 32 ตร.ม. พร้อมระเบียงส่วนตัวเปิดรับวิวสวนของรีสอร์ต ตกแต่งสไตล์อีสานร่วมสมัยด้วยผนังหัวเตียงงานจักสาน หมอนอิงผ้าไหมมัดหมี่โทนแดงและคราม และภาพวาดลายไก่ฝีมือศิลปินเหนือเตียงคิงไซส์ พร้อมห้องอาบน้ำฝักบัวแบบวอล์กอิน ให้คุณพักผ่อนได้อย่างสบายตลอดทริปเขาใหญ่",
    },
    features: {
      en: [
        "32 m² · Sleeps 2",
        "King-size bed",
        "Private balcony · Garden view",
        "Walk-in shower · Hair dryer",
        "Air conditioning · Flat-screen TV",
        "Coffee & tea facilities · Electric kettle",
        "Complimentary Wi-Fi · Minibar (chargeable)",
        "2 bottles of complimentary drinking water",
      ],
      th: [
        "32 ตร.ม. · พักได้ 2 ท่าน",
        "เตียงคิงไซส์",
        "ระเบียงส่วนตัว · วิวสวน",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "ชุดชงชาและกาแฟ · กาต้มน้ำไฟฟ้า",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
        "น้ำดื่มฟรี 2 ขวด",
      ],
    },
  },

  {
    id: "superior-twin",
    image: "/picture/superior-twin-khao-yai.webp",
    category: "villas",
    tag: { en: "Twin Beds", th: "เตียงคู่" },
    name: {
      en: "Superior Twin",
      th: "ซูพีเรีย ทวิน",
    },
    specs: [
      { icon: "area", en: "32 m²", th: "32 ตร.ม." },
      { icon: "bed", en: "Twin Beds", th: "เตียงคู่" },
      { icon: "spa", en: "Garden View", th: "วิวสวน" },
    ],
    desc: {
      en: "The twin-bed Superior at 32 m², with a private balcony over the resort gardens and a walk-in shower.",
      th: "ห้องซูพีเรียแบบเตียงคู่ ขนาด 32 ตร.ม. พร้อมระเบียงส่วนตัวรับวิวสวน และห้องอาบน้ำฝักบัวแบบวอล์กอิน",
    },
    tagline: {
      en: "Twin Beds, Balcony & Garden Views",
      th: "เตียงคู่ ระเบียงส่วนตัว พร้อมวิวสวน",
    },
    longDesc: {
      en: "Twenty-five Superior Twin rooms, each 32 m² with a private balcony overlooking the resort gardens. Twin beds sit beneath a woven headboard wall and a hand-painted rooster mural, with mudmee silk cushions in the resort's reds and indigos and a walk-in shower — an easy choice for friends or family travelling together.",
      th: "ห้องซูพีเรีย ทวิน 25 ห้อง ขนาด 32 ตร.ม. พร้อมระเบียงส่วนตัวรับวิวสวนของรีสอร์ต เตียงเดี่ยว 2 เตียงใต้ผนังหัวเตียงงานจักสานและภาพวาดลายไก่ฝีมือศิลปิน ตกแต่งด้วยหมอนอิงผ้าไหมมัดหมี่โทนแดงและคราม พร้อมห้องอาบน้ำฝักบัวแบบวอล์กอิน เหมาะสำหรับเพื่อนหรือครอบครัวที่เดินทางมาด้วยกัน",
    },
    features: {
      en: [
        "32 m² · Sleeps 2",
        "Twin beds",
        "Private balcony · Garden view",
        "Walk-in shower · Hair dryer",
        "Air conditioning · Flat-screen TV",
        "Coffee & tea facilities · Electric kettle",
        "Complimentary Wi-Fi · Minibar (chargeable)",
        "2 bottles of complimentary drinking water",
      ],
      th: [
        "32 ตร.ม. · พักได้ 2 ท่าน",
        "เตียงคู่ (เตียงเดี่ยว 2 เตียง)",
        "ระเบียงส่วนตัว · วิวสวน",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "ชุดชงชาและกาแฟ · กาต้มน้ำไฟฟ้า",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
        "น้ำดื่มฟรี 2 ขวด",
      ],
    },
  },

  {
    id: "deluxe-king",
    image: "/picture/deluxe-king-balcony-khao-yai.webp",
    category: "villas",
    tag: { en: "Private Balcony", th: "ระเบียงส่วนตัว" },
    name: {
      en: "Deluxe King",
      th: "ดีลักซ์ คิง",
    },
    specs: [
      { icon: "area", en: "35 m²", th: "35 ตร.ม." },
      { icon: "bed", en: "King Bed", th: "เตียงคิงไซส์" },
      { icon: "spa", en: "Garden View", th: "วิวสวน" },
    ],
    desc: {
      en: "35 m² with a carved timber headboard wall, a deeper dressing area and a private balcony over the resort gardens.",
      th: "ขนาด 35 ตร.ม. ผนังหัวเตียงไม้แกะสลัก มุมแต่งตัวกว้างขวางขึ้น และระเบียงส่วนตัวมองเห็นสวนของรีสอร์ต",
    },
    tagline: {
      en: "A Private Balcony over the Gardens",
      th: "ระเบียงส่วนตัว พร้อมวิวสวน",
    },
    longDesc: {
      en: "Seven Deluxe King rooms of 35 m² — a little more space than the Superior, and a character all their own: a carved timber headboard wall, a deeper dressing area and a private balcony looking over the resort gardens. An unhurried room to come back to after a day in the national park.",
      th: "ห้องดีลักซ์ คิง 7 ห้อง ขนาด 35 ตร.ม. กว้างกว่าห้องซูพีเรียและมีเสน่ห์เฉพาะตัว ด้วยผนังหัวเตียงไม้แกะสลัก มุมแต่งตัวที่กว้างขวางขึ้น และระเบียงส่วนตัวที่มองออกไปเห็นสวนของรีสอร์ต ห้องพักที่ชวนให้กลับมาพักผ่อนอย่างไม่เร่งรีบหลังเที่ยวอุทยานแห่งชาติเขาใหญ่มาทั้งวัน",
    },
    features: {
      en: [
        "35 m² · Sleeps 2",
        "King-size bed",
        "Private balcony · Garden view",
        "Walk-in shower · Hair dryer",
        "Air conditioning · Flat-screen TV",
        "Coffee & tea facilities · Electric kettle",
        "Complimentary Wi-Fi · Minibar (chargeable)",
        "2 bottles of complimentary drinking water",
      ],
      th: [
        "35 ตร.ม. · พักได้ 2 ท่าน",
        "เตียงคิงไซส์",
        "ระเบียงส่วนตัว · วิวสวน",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "ชุดชงชาและกาแฟ · กาต้มน้ำไฟฟ้า",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
        "น้ำดื่มฟรี 2 ขวด",
      ],
    },
  },

  {
    id: "deluxe-twin",
    image: "/picture/deluxe-twin-khao-yai.webp",
    category: "villas",
    tag: { en: "Garden View", th: "วิวสวน" },
    name: {
      en: "Deluxe Twin",
      th: "ดีลักซ์ ทวิน",
    },
    specs: [
      { icon: "area", en: "35 m²", th: "35 ตร.ม." },
      { icon: "bed", en: "Twin Beds", th: "เตียงคู่" },
      { icon: "spa", en: "Garden View", th: "วิวสวน" },
    ],
    desc: {
      en: "The twin-bed Deluxe at 35 m², with a carved timber headboard wall and a private balcony above the resort gardens.",
      th: "ห้องดีลักซ์แบบเตียงคู่ ขนาด 35 ตร.ม. ผนังหัวเตียงไม้แกะสลัก พร้อมระเบียงส่วนตัวมองเห็นสวนของรีสอร์ต",
    },
    tagline: {
      en: "Twin Beds & a Balcony over the Gardens",
      th: "เตียงคู่ พร้อมระเบียงส่วนตัวริมสวน",
    },
    longDesc: {
      en: "Seven Deluxe Twin rooms of 35 m², with a carved timber headboard wall, a deeper dressing area and a private balcony looking over the resort gardens. Twin beds and a little extra space make it a comfortable choice for friends or family sharing a room.",
      th: "ห้องดีลักซ์ ทวิน 7 ห้อง ขนาด 35 ตร.ม. ตกแต่งด้วยผนังหัวเตียงไม้แกะสลัก มุมแต่งตัวที่กว้างขวางขึ้น และระเบียงส่วนตัวที่มองออกไปเห็นสวนของรีสอร์ต เตียงเดี่ยว 2 เตียงกับพื้นที่ที่กว้างขึ้นอีกนิด เหมาะสำหรับเพื่อนหรือครอบครัวที่พักห้องเดียวกัน",
    },
    features: {
      en: [
        "35 m² · Sleeps 2",
        "Twin beds",
        "Private balcony · Garden view",
        "Walk-in shower · Hair dryer",
        "Air conditioning · Flat-screen TV",
        "Coffee & tea facilities · Electric kettle",
        "Complimentary Wi-Fi · Minibar (chargeable)",
        "2 bottles of complimentary drinking water",
      ],
      th: [
        "35 ตร.ม. · พักได้ 2 ท่าน",
        "เตียงคู่ (เตียงเดี่ยว 2 เตียง)",
        "ระเบียงส่วนตัว · วิวสวน",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "ชุดชงชาและกาแฟ · กาต้มน้ำไฟฟ้า",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
        "น้ำดื่มฟรี 2 ขวด",
      ],
    },
  },

  {
    id: "grand-deluxe-king",
    image: "/picture/grand-deluxe-king-khao-yai.webp",
    category: "villas",
    tag: { en: "Bamboo Design", th: "ธีมแบมบู" },
    name: {
      en: "Grand Deluxe King",
      th: "แกรนด์ ดีลักซ์ คิง",
    },
    specs: [
      { icon: "area", en: "40 m²", th: "40 ตร.ม." },
      { icon: "tub", en: "Soaking Tub", th: "อ่างแช่ไม้" },
      { icon: "mountain", en: "Stream View", th: "วิวลำธาร" },
    ],
    desc: {
      en: "40 m² on the second floor in our Bamboo design, overlooking mountain streams, with a private wooden soaking tub on the balcony.",
      th: "ขนาด 40 ตร.ม. ชั้น 2 ตกแต่งธีมแบมบู มองเห็นลำธารกลางขุนเขา พร้อมอ่างแช่ไม้ส่วนตัวบนระเบียง",
    },
    tagline: {
      en: "Mountain Stream Views with a Private Soaking Tub",
      th: "วิวลำธารกลางขุนเขา พร้อมอ่างแช่ไม้ส่วนตัว",
    },
    longDesc: {
      en: "The top category in our main buildings. Four Grand Deluxe King rooms of 40 m² on the second floor, finished in our Bamboo design, with views over the natural mountain streams. Each has its own wooden soaking tub out on the balcony — a cedar barrel, filled for the end of a day in the park — alongside an indoor walk-in shower.",
      th: "ห้องพักระดับสูงสุดในอาคารหลัก ห้องแกรนด์ ดีลักซ์ คิง 4 ห้อง ขนาด 40 ตร.ม. ตั้งอยู่ชั้น 2 ตกแต่งในธีมแบมบู (Bamboo) มองเห็นวิวลำธารธรรมชาติกลางขุนเขา ทุกห้องมีอ่างแช่ไม้ซีดาร์ส่วนตัวบนระเบียง พร้อมให้คุณแช่ผ่อนคลายหลังเที่ยวอุทยานฯ มาทั้งวัน และห้องอาบน้ำฝักบัวแบบวอล์กอินภายในห้อง",
    },
    features: {
      en: [
        "40 m² · Sleeps 2",
        "King-size bed · Bamboo design",
        "Mountain stream view",
        "Private wooden soaking tub on the balcony",
        "Walk-in shower · Hair dryer",
        "Capsule coffee machine",
        "Air conditioning · Flat-screen TV",
        "Complimentary Wi-Fi · Minibar (chargeable)",
      ],
      th: [
        "40 ตร.ม. · พักได้ 2 ท่าน",
        "เตียงคิงไซส์ · ธีมแบมบู",
        "วิวลำธารกลางขุนเขา",
        "อ่างแช่ไม้ส่วนตัวบนระเบียง",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องชงกาแฟแคปซูล",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
      ],
    },
  },

  {
    id: "grand-deluxe-twin",
    image: "/picture/grand-deluxe-twin-khao-yai.webp",
    category: "villas",
    tag: { en: "Private Soaking Tub", th: "อ่างแช่ไม้ส่วนตัว" },
    name: {
      en: "Grand Deluxe Twin",
      th: "แกรนด์ ดีลักซ์ ทวิน",
    },
    specs: [
      { icon: "area", en: "40 m²", th: "40 ตร.ม." },
      { icon: "bed", en: "Twin Beds", th: "เตียงคู่" },
      { icon: "mountain", en: "Stream View", th: "วิวลำธาร" },
    ],
    desc: {
      en: "The twin-bed Grand Deluxe at 40 m², overlooking mountain streams, with a private wooden soaking tub on the balcony.",
      th: "แกรนด์ ดีลักซ์ แบบเตียงคู่ ขนาด 40 ตร.ม. มองเห็นลำธารกลางขุนเขา พร้อมอ่างแช่ไม้ส่วนตัวบนระเบียง",
    },
    tagline: {
      en: "Twin Beds, Stream Views & a Private Soaking Tub",
      th: "เตียงคู่ วิวลำธาร พร้อมอ่างแช่ไม้ส่วนตัว",
    },
    longDesc: {
      en: "Five Grand Deluxe Twin rooms of 40 m², with views over the natural mountain streams. Every room has its own wooden soaking tub out on the balcony — a cedar barrel, filled for the end of a day in the park — alongside an indoor walk-in shower.",
      th: "ห้องแกรนด์ ดีลักซ์ ทวิน 5 ห้อง ขนาด 40 ตร.ม. มองเห็นวิวลำธารธรรมชาติกลางขุนเขา ทุกห้องมีอ่างแช่ไม้ซีดาร์ส่วนตัวบนระเบียง พร้อมให้คุณแช่ผ่อนคลายหลังเที่ยวอุทยานฯ มาทั้งวัน และห้องอาบน้ำฝักบัวแบบวอล์กอินภายในห้อง",
    },
    features: {
      en: [
        "40 m² · Sleeps 2",
        "Twin beds",
        "Mountain stream view",
        "Private wooden soaking tub on the balcony",
        "Walk-in shower · Hair dryer",
        "Capsule coffee machine",
        "Air conditioning · Flat-screen TV",
        "Complimentary Wi-Fi · Minibar (chargeable)",
      ],
      th: [
        "40 ตร.ม. · พักได้ 2 ท่าน",
        "เตียงคู่",
        "วิวลำธารกลางขุนเขา",
        "อ่างแช่ไม้ส่วนตัวบนระเบียง",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องชงกาแฟแคปซูล",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
      ],
    },
  },

  {
    id: "pool-house",
    image: "/picture/pool-house-private-pool.webp",
    category: "villas",
    featured: true,
    tag: { en: "Signature Stay", th: "ห้องพักซิกเนเจอร์" },
    name: {
      en: "Pool House Villa",
      th: "พูลเฮาส์ วิลล่า",
    },
    specs: [
      { icon: "area", en: "40 m²", th: "40 ตร.ม." },
      { icon: "pool", en: "Private Pool", th: "สระว่ายน้ำส่วนตัว" },
      { icon: "bed", en: "1–2 Bedrooms", th: "1–2 ห้องนอน" },
    ],
    desc: {
      en: "Our signature stay — nine standalone private pool villas in the gardens, in one- or two-bedroom layouts.",
      th: "ที่พักซิกเนเจอร์ของเรา — วิลล่าเดี่ยวพร้อมสระว่ายน้ำส่วนตัว 9 หลังกลางสวน เลือกได้ทั้งแบบ 1 และ 2 ห้องนอน",
    },
    tagline: {
      en: "A Private Pool Villa in the Gardens",
      th: "วิลล่าพร้อมสระว่ายน้ำส่วนตัวกลางสวน",
    },
    longDesc: {
      en: "Nine standalone private pool villas set in the gardens. Inside, deep green panelling and a woven bamboo ceiling make these the quietest and most private accommodation at the resort. Choose a one-bedroom villa with a king bed, or a two-bedroom villa with a king bed and twin beds — ideal for families or two couples travelling together.",
      th: "วิลล่าเดี่ยวพร้อมสระว่ายน้ำส่วนตัว 9 หลัง ตั้งอยู่กลางสวน ภายในตกแต่งด้วยผนังโทนเขียวเข้มและเพดานไม้ไผ่สาน เป็นที่พักที่เงียบสงบและเป็นส่วนตัวที่สุดของรีสอร์ต เลือกได้ทั้งวิลล่า 1 ห้องนอนพร้อมเตียงคิงไซส์ หรือวิลล่า 2 ห้องนอน (เตียงคิงไซส์และเตียงคู่) เหมาะสำหรับครอบครัวหรือสองคู่รักที่เดินทางมาด้วยกัน",
    },
    amenitiesTitle: {
      en: "Villa Amenities & Features:",
      th: "สิ่งอำนวยความสะดวกในวิลล่า:",
    },
    features: {
      en: [
        "40 m² · 1 or 2 bedrooms",
        "King-size bed, or king + twin beds",
        "Private pool · Garden view",
        "Walk-in shower · Hair dryer",
        "Capsule coffee machine",
        "Tea facilities · Electric kettle",
        "Air conditioning · Flat-screen TV",
        "Complimentary Wi-Fi · Minibar (chargeable)",
      ],
      th: [
        "40 ตร.ม. · 1 หรือ 2 ห้องนอน",
        "เตียงคิงไซส์ หรือ คิงไซส์ + เตียงคู่",
        "สระว่ายน้ำส่วนตัว · วิวสวน",
        "ห้องอาบน้ำฝักบัวแบบวอล์กอิน · ไดร์เป่าผม",
        "เครื่องชงกาแฟแคปซูล",
        "ชุดชงชา · กาต้มน้ำไฟฟ้า",
        "เครื่องปรับอากาศ · ทีวีจอแบน",
        "Wi-Fi ฟรี · มินิบาร์ (มีค่าใช้จ่าย)",
      ],
    },
  },
];
