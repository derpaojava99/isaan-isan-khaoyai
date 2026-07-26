/**
 * Data-driven accommodations. UI just maps over this (playbook §2).
 * Each field carries both languages so the toggle swaps everything.
 */

export type Localized = { en: string; th: string };
export type LocalizedList = { en: string[]; th: string[] };

export interface Villa {
  id: string;
  image: string;
  price: string; // display, same in both languages (฿)
  category: "villas";
  tag: Localized;
  name: Localized;
  specs: LocalizedList;
  desc: Localized; // short (card)
  tagline: Localized; // modal sub-headline
  longDesc: Localized; // modal paragraph
  features: LocalizedList; // modal amenities
}

export const villas: Villa[] = [
  {
    id: "superior",
    image: "/picture/pool-room-khao-yai.webp",
    price: "฿6,500",
    category: "villas",
    tag: { en: "Popular choice", th: "ยอดนิยม" },
    name: {
      en: "Isan Superior Pool Villa",
      th: "อีสาน ซูพีเรีย พูลวิลล่า",
    },
    specs: {
      en: ["📐 147 Sq.m.", "🏊 Private Pool", "🏔️ Mountain View"],
      th: ["📐 147 ตร.ม.", "🏊 สระส่วนตัว", "🏔️ วิวภูเขา"],
    },
    desc: {
      en: "Spacious villa featuring handcrafted bamboo weave architecture, plush king-sized bed, and a secluded private outdoor plunge pool.",
      th: "วิลล่ากว้างขวางกับงานสถาปัตยกรรมสานไม้ไผ่ทำมือ เตียงคิงไซส์นุ่มสบาย และสระน้ำส่วนตัวกลางแจ้งอันเป็นส่วนตัว",
    },
    tagline: {
      en: "Handcrafted Isan Luxury & Private Outdoor Plunge Pool",
      th: "ความหรูหราแบบอีสานทำมือ พร้อมสระว่ายน้ำส่วนตัวกลางแจ้ง",
    },
    longDesc: {
      en: "Designed with locally woven bamboo artistry and contemporary Isan silk touches, the Superior Pool Villa is a sanctuary of intimacy and peace. Enjoy breakfast on your private wooden terrace overlooking the Khao Yai mountain ranges.",
      th: "ออกแบบด้วยศิลปะการสานไม้ไผ่พื้นถิ่นผสานผ้าไหมอีสานร่วมสมัย ซูพีเรีย พูลวิลล่า คือสถานที่พักผ่อนอันเป็นส่วนตัวและสงบ เพลิดเพลินกับอาหารเช้าบนระเบียงไม้ส่วนตัวที่มองเห็นทิวเขาเขาใหญ่",
    },
    features: {
      en: [
        "147 Sq.m. Private Villa Area",
        "Private Outdoor Plunge Pool",
        "King-sized Plush Bed with Silk Bedding",
        "Mountain & Garden View Terrace",
        "Outdoor Rain Shower & Deep Tub",
        "24/7 Dedicated Butler Service",
        "Nespresso Coffee Machine & Teas",
        "High-Speed Wi-Fi & Marshall Speaker",
      ],
      th: [
        "พื้นที่วิลล่าส่วนตัว 147 ตร.ม.",
        "สระว่ายน้ำส่วนตัวกลางแจ้ง",
        "เตียงคิงไซส์พร้อมผ้าปูผ้าไหม",
        "ระเบียงวิวภูเขาและสวน",
        "ฝักบัวเรนชาวเวอร์กลางแจ้งและอ่างแช่",
        "บริการบัตเลอร์ส่วนตัว 24 ชม.",
        "เครื่องชงกาแฟ Nespresso และชา",
        "Wi-Fi ความเร็วสูงและลำโพง Marshall",
      ],
    },
  },
  {
    id: "deluxe",
    image: "/picture/51201640283_5a8cb853b7_b.jpg",
    price: "฿4,800",
    category: "villas",
    tag: { en: "Best View", th: "วิวสวยที่สุด" },
    name: {
      en: "Deluxe Mountain Suite",
      th: "ดีลักซ์ เมาน์เทน สวีท",
    },
    specs: {
      en: ["📐 95 Sq.m.", "🌅 Private Balcony", "🛁 Soaking Tub"],
      th: ["📐 95 ตร.ม.", "🌅 ระเบียงส่วนตัว", "🛁 อ่างแช่ตัว"],
    },
    desc: {
      en: "Elevated suite offering breathtaking panoramic views of the Khao Yai hillsides, oversized bathtub, and silk-adorned Isan interiors.",
      th: "สวีทชั้นสูงกับวิวพาโนรามาของเนินเขาเขาใหญ่ที่ตระการตา อ่างอาบน้ำขนาดใหญ่ และการตกแต่งภายในแบบอีสานประดับผ้าไหม",
    },
    tagline: {
      en: "Panoramic Mountain Views & Oversized Soaking Bathtub",
      th: "วิวภูเขาพาโนรามา พร้อมอ่างแช่ตัวขนาดใหญ่",
    },
    longDesc: {
      en: "Elevated above the lush resort gardens, offering stunning sunset views across the Khao Yai mountain ranges. Features high vaulted ceilings, bespoke Isan pottery decor, and a spa-inspired bathroom.",
      th: "ตั้งอยู่เหนือสวนอันเขียวชอุ่มของรีสอร์ต มอบวิวพระอาทิตย์ตกอันงดงามเหนือทิวเขาเขาใหญ่ พร้อมเพดานโค้งสูง เครื่องปั้นดินเผาอีสานตกแต่งเฉพาะตัว และห้องน้ำสไตล์สปา",
    },
    features: {
      en: [
        "95 Sq.m. Elevated Suite Space",
        "Panoramic Mountain View Balcony",
        "Oversized Deep Soaking Bathtub",
        "Choice of King or Twin Beds",
        "Smart TV with Netflix & Apple TV",
        "Complimentary Artisanal Mini Bar",
        "Handwoven Local Silk Bathrobes",
        "Evening Turndown Service",
      ],
      th: [
        "พื้นที่สวีทชั้นสูง 95 ตร.ม.",
        "ระเบียงวิวภูเขาพาโนรามา",
        "อ่างแช่ตัวขนาดใหญ่",
        "เลือกเตียงคิงหรือเตียงแฝด",
        "สมาร์ททีวีพร้อม Netflix และ Apple TV",
        "มินิบาร์งานคราฟต์ฟรี",
        "เสื้อคลุมอาบน้ำผ้าไหมทอมือ",
        "บริการเทิร์นดาวน์ยามค่ำ",
      ],
    },
  },
  {
    id: "family",
    image: "/picture/a1c1bff1db1336d255fda3f853484d8f.webp",
    price: "฿12,500",
    category: "villas",
    tag: { en: "Family Choice", th: "เหมาะสำหรับครอบครัว" },
    name: {
      en: "Family Residence Pool Villa",
      th: "แฟมิลี่ เรสซิเดนซ์ พูลวิลล่า",
    },
    specs: {
      en: ["📐 256 Sq.m.", "🛏️ 2 Bedrooms", "🏊 Grand Pool"],
      th: ["📐 256 ตร.ม.", "🛏️ 2 ห้องนอน", "🏊 สระขนาดใหญ่"],
    },
    desc: {
      en: "Sumptuously appointed residence perfect for families or couples traveling together, offering expansive indoor-outdoor living space.",
      th: "ที่พักตกแต่งอย่างหรูหรา เหมาะสำหรับครอบครัวหรือคู่รักที่เดินทางด้วยกัน พร้อมพื้นที่พักผ่อนทั้งในและนอกอาคารที่กว้างขวาง",
    },
    tagline: {
      en: "Expansive Family Sanctuary with 2 En-Suite Bedrooms",
      th: "ที่พักครอบครัวกว้างขวางพร้อม 2 ห้องนอนในตัว",
    },
    longDesc: {
      en: "The ultimate family getaway featuring an enclosed private courtyard, grand swimming pool, and spacious indoor living lounge. Ideal for families or two couples traveling together in complete privacy.",
      th: "จุดหมายพักผ่อนของครอบครัวขั้นสุด พร้อมลานส่วนตัวปิดมิดชิด สระว่ายน้ำขนาดใหญ่ และเลาจน์พักผ่อนภายในที่กว้างขวาง เหมาะสำหรับครอบครัวหรือสองคู่รักที่ต้องการความเป็นส่วนตัว",
    },
    features: {
      en: [
        "256 Sq.m. Total Living Residence",
        "2 Master Bedrooms with En-suite Baths",
        "Grand Private Swimming Pool",
        "Separate Dining Room & Pantry",
        "Spacious Lounge with Sofa Bed",
        "24/7 VIP Butler & Buggy Service",
        "Poolside Barbecue Setup Available",
        "Kids Amenities & Welcome Gift",
      ],
      th: [
        "พื้นที่พักอาศัยรวม 256 ตร.ม.",
        "2 ห้องนอนใหญ่พร้อมห้องน้ำในตัว",
        "สระว่ายน้ำส่วนตัวขนาดใหญ่",
        "ห้องรับประทานอาหารและแพนทรีแยกส่วน",
        "เลาจน์กว้างพร้อมโซฟาเบด",
        "บริการบัตเลอร์ VIP และรถบักกี้ 24 ชม.",
        "ชุดบาร์บีคิวริมสระ (ตามคำขอ)",
        "สิ่งอำนวยความสะดวกสำหรับเด็กและของต้อนรับ",
      ],
    },
  },
  {
    id: "tent",
    image: "/picture/47f5a4274d2418658ad989f3c0bac61f.webp",
    price: "฿3,900",
    category: "villas",
    tag: { en: "Unique Experience", th: "ประสบการณ์ไม่เหมือนใคร" },
    name: {
      en: "Isan Concept Tent Villa",
      th: "อีสาน คอนเซปต์ เต็นท์วิลล่า",
    },
    specs: {
      en: ["📐 80 Sq.m.", "⛺ Glamping Luxury", "🚿 Rain Shower"],
      th: ["📐 80 ตร.ม.", "⛺ แกลมปิงหรู", "🚿 เรนชาวเวอร์"],
    },
    desc: {
      en: "Experience luxury glamping with air-conditioned comfort, rustic Isan decorative charm, and a relaxing outdoor garden rain shower.",
      th: "สัมผัสแกลมปิงสุดหรูพร้อมความสบายจากเครื่องปรับอากาศ เสน่ห์การตกแต่งแบบอีสานพื้นถิ่น และฝักบัวเรนชาวเวอร์กลางสวน",
    },
    tagline: {
      en: "Luxury Glamping Amidst Tropical Gardens",
      th: "แกลมปิงสุดหรูท่ามกลางสวนเขตร้อน",
    },
    longDesc: {
      en: "Experience camping in the Khao Yai wilderness without compromising on luxury. Our climate-controlled tent villas are adorned with rustic Isan crafts, featuring private decks and relaxing outdoor garden showers.",
      th: "สัมผัสการตั้งแคมป์ในป่าเขาใหญ่โดยไม่ลดทอนความหรูหรา เต็นท์วิลล่าปรับอากาศของเราตกแต่งด้วยงานคราฟต์อีสานพื้นถิ่น พร้อมระเบียงส่วนตัวและฝักบัวกลางสวนที่ผ่อนคลาย",
    },
    features: {
      en: [
        "80 Sq.m. Luxury Glamping Space",
        "Full Whisper-Quiet Air Conditioning",
        "Private Outdoor Garden Rain Shower",
        "Wooden Deck with Daybeds",
        "Evening Campfire & Marshmallows Access",
        "King-sized Bed with Premium Mattress",
        "Organic Herbal Bath Amenities",
        "Complimentary Farm-to-Table Breakfast",
      ],
      th: [
        "พื้นที่แกลมปิงหรู 80 ตร.ม.",
        "เครื่องปรับอากาศเงียบสนิท",
        "ฝักบัวเรนชาวเวอร์กลางสวนส่วนตัว",
        "ระเบียงไม้พร้อมเดย์เบด",
        "แคมป์ไฟและมาร์ชเมลโลว์ยามค่ำ",
        "เตียงคิงไซส์พร้อมที่นอนพรีเมียม",
        "ผลิตภัณฑ์อาบน้ำสมุนไพรออร์แกนิก",
        "อาหารเช้าฟาร์มทูเทเบิลฟรี",
      ],
    },
  },
  {
    id: "duplex",
    image: "/picture/12d7cee452f3dc22ded6747028ce8176.webp",
    price: "฿7,800",
    category: "villas",
    tag: { en: "Serene Waterside", th: "ริมน้ำอันเงียบสงบ" },
    name: {
      en: "Duplex Canal Villa",
      th: "ดูเพล็กซ์ คาแนล วิลล่า",
    },
    specs: {
      en: ["📐 160 Sq.m.", "🪜 2 Levels", "🌊 Canal View"],
      th: ["📐 160 ตร.ม.", "🪜 2 ชั้น", "🌊 วิวลำคลอง"],
    },
    desc: {
      en: "Two-story luxury villa overlooking a tranquil resort water canal, featuring a private wooden deck and traditional Isan art installations.",
      th: "วิลล่าหรูสองชั้นที่มองเห็นลำคลองอันเงียบสงบของรีสอร์ต พร้อมระเบียงไม้ส่วนตัวและงานศิลปะอีสานดั้งเดิม",
    },
    tagline: {
      en: "Two-Story Serenity Overlooking the Resort Canal",
      th: "ความสงบสองชั้นเหนือลำคลองของรีสอร์ต",
    },
    longDesc: {
      en: "Split across two architectural levels, offering a lower living lounge and wooden deck right by the tranquil water canal, with a peaceful master bedroom located on the upper floor.",
      th: "แบ่งเป็นสองระดับทางสถาปัตยกรรม ชั้นล่างเป็นเลาจน์พักผ่อนและระเบียงไม้ริมลำคลองอันเงียบสงบ ส่วนห้องนอนใหญ่อันเป็นส่วนตัวอยู่ชั้นบน",
    },
    features: {
      en: [
        "160 Sq.m. 2-Story Architectural Layout",
        "Private Waterside Deck & Lounge",
        "Upper-Level King Master Bedroom",
        "Downstairs Entertainment Lounge",
        "Deep Soaking Tub with Water View",
        "Bespoke Isan Art Installations",
        "Premium Sound System",
        "Sunset Cocktail Service Included",
      ],
      th: [
        "ผังสถาปัตยกรรม 2 ชั้น 160 ตร.ม.",
        "ระเบียงและเลาจน์ริมน้ำส่วนตัว",
        "ห้องนอนใหญ่เตียงคิงชั้นบน",
        "เลาจน์ความบันเทิงชั้นล่าง",
        "อ่างแช่ตัวพร้อมวิวลำน้ำ",
        "งานติดตั้งศิลปะอีสานเฉพาะตัว",
        "ระบบเสียงพรีเมียม",
        "บริการค็อกเทลยามพระอาทิตย์ตก",
      ],
    },
  },
  {
    id: "royal",
    image: "/picture/5ce352162720403755d52c3887b2f76b.webp",
    price: "฿22,000",
    category: "villas",
    tag: { en: "Ultimate Luxury", th: "หรูหราขั้นสูงสุด" },
    name: {
      en: "Royal Isan Heritage Suite",
      th: "รอยัล อีสาน เฮอริเทจ สวีท",
    },
    specs: {
      en: ["📐 310 Sq.m.", "🛏️ 3 Bedrooms", "🍷 Private Butler"],
      th: ["📐 310 ตร.ม.", "🛏️ 3 ห้องนอน", "🍷 บัตเลอร์ส่วนตัว"],
    },
    desc: {
      en: "The pinnacle of luxury at Khao Yai, featuring private butler service, an expansive infinity swimming pool, and a private dining pavilion.",
      th: "สุดยอดแห่งความหรูหราที่เขาใหญ่ พร้อมบริการบัตเลอร์ส่วนตัว สระว่ายน้ำอินฟินิตี้ขนาดใหญ่ และศาลารับประทานอาหารส่วนตัว",
    },
    tagline: {
      en: "The Pinnacle of Khao Yai Boutique Luxury",
      th: "จุดสูงสุดของความหรูหราบูทีคแห่งเขาใหญ่",
    },
    longDesc: {
      en: "Our flagship suite offering an unmatched level of privacy, artisanal luxury, and tailored VIP services. Features three grand bedrooms, a private infinity swimming pool, and a private dining pavilion.",
      th: "สวีทเรือธงของเรามอบความเป็นส่วนตัว ความหรูหราเชิงศิลป์ และบริการ VIP ที่ออกแบบเฉพาะบุคคลอย่างไร้ที่เปรียบ พร้อมสามห้องนอนหรู สระว่ายน้ำอินฟินิตี้ส่วนตัว และศาลารับประทานอาหารส่วนตัว",
    },
    features: {
      en: [
        "310 Sq.m. Flagship Private Estate",
        "3 En-suite Master Bedrooms",
        "Private Infinity Swimming Pool",
        "Dedicated Chef Dining Pavilion",
        "Private Wine Cellar & Cigar Lounge Access",
        "VIP Luxury Airport / Station Transfer",
        "24/7 Dedicated Royal Butler Team",
        "Customized Isan Fine Dining Experience",
      ],
      th: [
        "ที่พักส่วนตัวเรือธง 310 ตร.ม.",
        "3 ห้องนอนใหญ่พร้อมห้องน้ำในตัว",
        "สระว่ายน้ำอินฟินิตี้ส่วนตัว",
        "ศาลารับประทานอาหารพร้อมเชฟส่วนตัว",
        "ห้องเก็บไวน์ส่วนตัวและเข้าใช้ซิการ์เลาจน์",
        "บริการรับส่งสนามบิน/สถานี ระดับ VIP",
        "ทีมบัตเลอร์รอยัลส่วนตัว 24 ชม.",
        "ประสบการณ์อาหารอีสานไฟน์ไดนิ่งเฉพาะคุณ",
      ],
    },
  },
];
