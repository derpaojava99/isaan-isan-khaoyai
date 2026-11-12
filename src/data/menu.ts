/**
 * Restaurant menu — transcribed from the printed menu
 * "อีสานบ้านเฮา เขาใหญ่ / Isaan Baan Hao". Names, prices and order follow the
 * owner's update sheet of 12.11.2569, which overrides the print where they differ.
 *
 * Layout notes:
 *  - "full"    : Thai name / English name / price / description (food)
 *  - "compact" : Thai + English on one line with price (drinks, sides)
 * Groups let a chapter carry sub-headings (Sides & Rice, Soft Drinks, wineries).
 */

export interface MenuItem {
  th: string;
  en: string;
  price: string;
  /** Secondary price under the main one, e.g. a spirit's whole-bottle price. */
  priceNote?: string;
  /** Drinks: ingredients / style line from the owner's sheet. */
  ingredients?: string;
  desc?: string;
  /** Marked แนะนำจากบ้านเฮา · Chef's Pick on the owner's menu sheet. */
  pick?: boolean;
}

export interface MenuGroup {
  /** Optional sub-heading inside a chapter. */
  th?: string;
  en?: string;
  /** Intro paragraph (used for the wineries). */
  note?: string;
  layout?: "full" | "compact";
  items: MenuItem[];
}

export interface MenuChapter {
  id: string;
  numeral: string;
  th: string;
  en: string;
  groups: MenuGroup[];
  quoteTh?: string;
  quoteEn?: string;
}

export const restaurant = {
  th: "อีสานบ้านเฮา เขาใหญ่",
  en: "ISAAN BAAN HAO",
  eyebrow: "KHAO YAI · PAK CHONG",
  tagline: "HERITAGE · PROVENANCE · SOUL",
  intro:
    "A celebration of Northeastern Thai cuisine crafted from heritage recipes & ingredients grown in the lush valleys of Khao Yai",
  welcome: {
    th: "ยินดีต้อนรับสู่บ้านเฮา",
    en: "A WARM WELCOME",
    bodyTh:
      "จากผืนดินอุดมแห่งปากช่อง สู่จานอาหารที่ถ่ายทอดรสมือ ของชาวอีสานแท้ ทุกเมนูปรุงด้วยวัตถุดิบที่ปลูกเองในไร่ เนื้อโคขุนคุณภาพ หมูคูโรบูตะ และสมุนไพรไทยหอมกรุ่น เพื่อให้คุณได้ลิ้มรสความเป็นอีสาน อย่างที่บ้านเฮาภูมิใจ",
    quoteEn:
      "“From our gardens in Pak Chong to your table — every dish tells the story of Khao Yai's soil, its herbs, and the warm hands that made it.”",
  },
  thanks: {
    eyebrow: "KHOB KHUN KRUB / KHA",
    th: "ขอบคุณที่มาเยือนบ้านเฮา",
    en: "THANK YOU",
    bodyEn:
      "We hope each bite carried you closer to the heart of Khao Yai — its mountains, its herbs, and its people.",
    farewell: "ม่วนคักหลายเด้อ · See You Again",
  },
} as const;

export const menu: MenuChapter[] = [
  {
    id: "appetizers",
    numeral: "I",
    th: "เครื่องเรียกน้ำย่อย",
    en: "Appetizers",
    quoteTh:
      "“เครื่องในของแผ่นดินอีสาน — สมุนไพรจากสวน, เนื้อสัตว์เลี้ยงในถิ่นเขาใหญ่, ปรุงด้วยวิธีโบราณส่งต่อจากรุ่นสู่รุ่น”",
    quoteEn: "— From garden to grill, from heritage to your table —",
    groups: [
      {
        items: [
          {
            th: "ปีกไก่ทอดเขาใหญ่",
            en: "Khao Yai Crispy Deep-Fried Chicken Wings",
            price: "200",
            desc: "Juicy chicken wings marinated with fresh northeastern local herbs and spices, deep-fried until crispy and golden. Served with traditional Isan chilli dipping sauce.",
            pick: true,
          },
          {
            th: "หม่ำปากช่องบ้านเฮา",
            en: "Grilled Pak Chong Beef Sausage (Mam)",
            price: "260",
            desc: "Pakchong northeastern local sausage made with minced korat-beef and liver seasoned with local herbs and spices. Charcoal-grilled until smoky and aromatic, served with fresh chilli and roasted rice powder.",
            pick: true,
          },
          {
            th: "ไส้กรอกอีสานทอด",
            en: "Deep-Fried Isan Pork Sausage",
            price: "220",
            desc: "Isan Khao Yai north-eastern premium local pork and rice sausage, deep-fried until golden, with pickled ginger, chilli and garlic.",
          },
          {
            th: "หมูแดดเดียว",
            en: "Deep-Fried Sun-Dried Pork",
            price: "220",
            desc: "Marinated premium kurobuta pork with northeastern local herbs & spices, naturally sun-dried and deep-fried until crispy outside, tender inside.",
          },
          {
            th: "เนื้อแดดเดียว",
            en: "Deep-Fried Sun-Dried Beef",
            price: "260",
            desc: "Marinated premium Korat beef with northeastern local herbs & spices, naturally sun-dried and deep-fried until crispy outside, tender inside.",
          },
          {
            th: "ลาบหมูทอด",
            en: "Deep-Fried Larb-Spiced Pork",
            price: "260",
            desc: "Thinly-sliced premium kurobuta pork marinated with traditional larb spices and local herbs, deep-fried until crispy and golden with fragrant herbs in classic northeastern Isan style.",
          },
          {
            th: "ปลาส้มทอด",
            en: "Deep-Fried Fermented Fish (Pla Som)",
            price: "260",
            desc: "Traditional northeastern Isan local fermented fish stuffed with rice and local herbs, deep-fried until golden and crispy, with a well-balanced savoury flavour. Served with pickled ginger, chilli and garlic.",
          },
          {
            th: "แหนมหมูส้มย่าง",
            en: "Grilled Fermented Pork (Moo Som)",
            price: "260",
            desc: "Traditional northeastern fermented kurobuta pork marinated with garlic, rice and local spices — naturally fermented for a rich tangy flavour, grilled until golden and lightly smoky. Served with pickled ginger and fresh chilli.",
          },
        ],
      },
    ],
  },

  {
    id: "chilli-dip",
    numeral: "II",
    th: "น้ำพริก & แจ่ว",
    en: "Chilli Dips",
    groups: [
      {
        items: [
          {
            th: "แจ่วขี้กาบ้านเฮา",
            en: "House Roasted Chilli Dip with Deep-Fried Mackerel & Local Vegetables",
            price: "240",
            desc: "House-made authentic northeastern Thai Isan chilli dip, prepared by pounding roasted chillies, garlic and local herbs with fermented fish sauce in a mortar — bold and rustic. Served with crispy fried mackerel, fresh and steamed vegetables.",
            pick: true,
          },
          {
            th: "แจ่วบองแซ่บนัว",
            en: "Jaew Bong – Isan Fermented Fish Chilli Paste",
            price: "240",
            desc: "House-made authentic northeastern Thai chilli relish, slowly cooked fermented fish with roasted chillies, garlic, shallots and local herbs — rich and aromatic. Served with crispy fried mackerel, fresh and steamed vegetables.",
          },
          {
            th: "น้ำพริกตาแดง",
            en: "Roasted Red Chilli Dip (Nam Prik Ta Daeng)",
            price: "260",
            desc: "House-made authentic northeastern Thai chilli dip prepared by pounding roasted dried chillies, garlic and shallots with local spices in a mortar — bold and rustic Isan flavour. Served with crispy fried mackerel and vegetables.",
          },
          {
            th: "น้ำพริกปลาย่างคั่วหอม",
            en: "Smoky Grilled Fish Chilli Dip",
            price: "280",
            desc: "House-made authentic northeastern Thai chilli dip prepared by pounding grilled fish with roasted chillies, garlic and shallots in a mortar — rich and smoky. Served with crispy fried mackerel, fresh and steamed vegetables.",
          },
        ],
      },
    ],
  },

  {
    id: "spicy-salad",
    numeral: "III",
    th: "ลาบ & น้ำตก",
    en: "Isan Spicy Salads",
    quoteTh:
      "“รสนัวจากครกหินบ้านเฮา — ผักหอมจากสวน, ข้าวคั่วหอมกรุ่น, มะนาวสดไร้ที่ติ”",
    quoteEn: "— A bold dance of lime, chilli and toasted rice —",
    groups: [
      {
        items: [
          {
            th: "น้ำตกเนื้อโคขุน",
            en: "Grilled Premium Beef Spicy Salad (Nam Tok)",
            price: "320",
            desc: "Grilled premium local Korat beef sliced and tossed with roasted rice powder, lime juice, chilli and fresh house-grown herbs — bold and spicy, in our signature Isaan Thai style.",
          },
          {
            th: "น้ำตกคอหมูย่าง",
            en: "Grilled Pork Neck Spicy Salad (Nam Tok)",
            price: "280",
            desc: "Grilled premium kurobuta pork sliced and tossed with roasted rice powder, lime juice, chilli and fresh house-grown herbs — bold and spicy, in our signature Isaan Thai style.",
            pick: true,
          },
          {
            th: "ตับหวาน",
            en: "Spicy Pork Liver Salad (Tap Wan)",
            price: "250",
            desc: "Premium-quality pork liver carefully selected and marinated with traditional Thai spices, then stir-fried with roasted rice powder and local herbs — rich, aromatic, full of northeastern Thai flavour.",
          },
          {
            th: "ซุปอีสานหน่อตง (ซุปหน่อไม้)",
            en: "Isan Bamboo Shoot Salad (Sup Nor Mai)",
            price: "200",
            desc: "Fresh bamboo shoots harvested from our garden, sliced and tossed with roasted rice powder, herbs and traditional Isan seasonings — refreshing and fragrant.",
          },
          {
            th: "หมกหน่อไม้ไฟฟืน",
            en: "Wood-Fire Steamed Bamboo Shoots with Pork Belly",
            price: "250",
            desc: "Fresh bamboo shoots slowly steamed in a clay pot with tender premium kurobuta pork belly, traditional Isan herbs and spices — rich, aromatic and finished with garden-fresh herbs.",
          },
          {
            th: "ลาบหมู / ลาบไก่",
            en: "Spicy Minced Pork / Chicken Salad (Larb)",
            price: "280",
            desc: "Premium minced pork or chicken fried with traditional Isan larb spices, roasted rice powder, chilli and fresh herbs — rich, aromatic, spicy Isan flavour.",
          },
          {
            th: "ลาบเนื้อ",
            en: "Spicy Minced Beef Salad (Larb)",
            price: "320",
            desc: "Premium minced Korat beef fried with traditional Isan larb spices, roasted rice powder, chilli and fresh herbs — rich, aromatic and spicy Isan flavour.",
          },
          {
            th: "ลาบเป็ด",
            en: "Spicy Minced Duck Salad (Larb)",
            price: "280",
            desc: "Premium minced Khao Yai duck tossed with roasted rice powder, chilli, fresh lime and fresh herbs — bold and aromatic northeastern Thai flavour, traditional Isan style.",
          },
        ],
      },
    ],
  },

  {
    id: "papaya-salad",
    numeral: "IV",
    th: "ตำไทย & ตำลาว",
    en: "Papaya Salads",
    groups: [
      {
        items: [
          {
            th: "ศิวิไลซ์ (ตำไทย)",
            en: "Thai Papaya Salad (Som Tam Thai)",
            price: "200",
            desc: "Our signature Thai papaya salad made with garden-grown papaya from our farm in Khao Yai — tossed with palm sugar, lime juice and roasted peanuts for a rich, well-balanced sweet-sour-savoury flavour.",
          },
          {
            th: "ไชยาศิวิไลซ์ (ตำไทยไข่เค็ม)",
            en: "Thai Papaya Salad with Salted Egg",
            price: "240",
            desc: "A classic Thai papaya salad made with garden-grown papaya from our farm in Khao Yai. Tossed with palm sugar, lime juice and roasted peanuts, finished with carefully selected salted egg from Pak Chong for a rich and creamy texture.",
          },
          {
            th: "ตำหลวงพระบาง",
            en: "Luang Prabang Papaya Salad",
            price: "240",
            desc: "Hand-sliced green papaya cut into wide flat strips for a crisp texture that absorbs the dressing. Tossed with traditional seasonings and our rich, well-balanced shrimp paste from Pak Chong, with crispy fried prawns.",
            pick: true,
          },
          {
            th: "ตำบักหุ่งใส่ปูปลาร้า",
            en: "Isan Papaya Salad with Salted Crab & Fermented Fish (Pla Ra)",
            price: "200",
            desc: "Garden-grown papaya tossed with house-cooked fermented fish sauce and naturally raised field crab from Pak Chong — pounded with chilli and lime for a bold, savoury Isan flavour.",
          },
          {
            th: "ตำป่าอีสานเขาใหญ่",
            en: "Khao Yai Papaya Salad with Mixed Vegetables (Tam Pa)",
            price: "240",
            desc: "Our northeastern Isan papaya salad with a rich, well-balanced flavour packed with local ingredients. Tossed with our special fermented fish sauce and traditional seasonings — inspired by the rustic, rural ingredients of Khao Yai.",
          },
          {
            th: "ตำเตี๋ยวอีสานเขาใหญ่",
            en: "Spicy Rice Noodle Salad with Pork & Shrimp",
            price: "280",
            desc: "Korat rice noodles salad with premium meat, shrimp, minced pork and Vietnamese-style pork sausage, mixed with traditional Isan seasonings — our rich, well-balanced signature recipe.",
          },
          {
            th: "ตำซั่วขนมจีน",
            en: "Papaya Salad with Rice Noodles (Tam Sua)",
            price: "200",
            desc: "Traditional northeastern Isan papaya salad mixed with rice noodles and house-made fermented fish sauce — rich and well-balanced, in our signature recipe.",
          },
          {
            th: "ตำบักหุ่ง (ตำลาว)",
            en: "Lao-Style Papaya Salad with Pla Ra",
            price: "200",
            desc: "Traditional northeastern papaya salad prepared by hand-pounding shredded green papaya with house-cooked fermented fish sauce, chilli, fresh lime and local ingredients — bold and savoury Isan flavour.",
          },
          {
            th: "ตำข้าวโพดหมูยอไข่เค็ม",
            en: "Spicy Sweet Corn Salad with Pork Sausage & Salted Egg",
            price: "240",
            desc: "Sweet corn from Pak Chong tossed with carefully selected premium pork sausage and the finest salted egg from Pak Chong — pounded with chilli, lime juice and traditional seasonings.",
          },
          {
            th: "ซั่วเส้นปูนา & หมูยอ (ตำมาม่า)",
            en: "Spicy Instant Noodle Salad with Field Crab & Pork Sausage",
            price: "280",
            desc: "Papaya salad tossed with instant noodles, naturally raised field crab from Pak Chong, and traditional banana-leaf-wrapped Isan pork sausage — pounded with fermented fish sauce, chilli and lime for a bold, savoury flavour.",
          },
          {
            th: "ตำไหลบัวกุ้งสด",
            en: "Lotus Stem Salad with Fresh Shrimp",
            price: "280",
            desc: "Crisp lotus stem salad with fresh shrimp, pounded with fermented fish sauce, chilli, fresh lime and traditional seasonings — bold, fresh, well-balanced northeastern Isan flavour.",
          },
        ],
      },
    ],
  },

  {
    id: "soup-curry",
    numeral: "V",
    th: "ต้ม & แกง",
    en: "Soups & Curries",
    quoteTh:
      "“หม้อต้มข้างเตา — รสร้อนแรงจากพริกเผา, มะนาวสด, สมุนไพรไร่บ้านเฮา”",
    quoteEn: "— Slow-simmered, bold & soulful —",
    groups: [
      {
        items: [
          {
            th: "ต้มยำน้ำใสปลายี่สก",
            en: "Clear Spicy Tom Yum with Yi Sok Fish",
            price: "350",
            desc: "Fresh Yee-sok fish from Lam Takhong Pak Chong, simmered with lemongrass, galangal, kaffir lime leaves from our garden and fresh lime juice — bold, spicy and refreshing Isan flavour.",
          },
          {
            th: "ต้มไก่ใบมะขาม",
            en: "Chicken Soup with Young Tamarind Leaves",
            price: "280",
            desc: "Chicken slowly simmered until tender and juicy in a rich broth with aromatic tamarind leaves — a well-balanced savoury and gently sour flavour, in traditional Isan homestyle.",
            pick: true,
          },
          {
            th: "ต้มแซ่บซี่โครงหมู",
            en: "Spicy Isan Pork Rib Soup (Tom Saap)",
            price: "280",
            desc: "Pork ribs slowly simmered until tender, cooked with fresh lime juice and aromatic herbs from our garden, finished with roasted rice powder and charcoal-roasted chilli — bold, spicy, fragrant Isan flavour.",
          },
          {
            th: "ต้มแซ่บเอ็นวัว + เนื้อน่องลาย",
            en: "Spicy Isan Beef Tendon & Shank Soup",
            price: "350",
            desc: "Beef shank and tendon slowly simmered until tender, cooked with fresh lime juice and aromatic herbs from our garden, finished with roasted rice powder and charcoal-roasted chilli — bold, spicy and richly beefy Isan flavour.",
          },
        ],
      },
      {
        th: "แกงเขาใหญ่",
        en: "Khao Yai Curries",
        items: [
          {
            th: "แกงป่าปลาคัง",
            en: "Jungle Curry with River Catfish",
            price: "250",
            desc: "River catfish from Lam Takhong cooked in a bold and aromatic jungle curry with house-made curry paste, fresh herbs and hot basil — spicy and herbaceous Thai flavour.",
          },
          {
            th: "แกงเปรอะเห็ด",
            en: "Isan Mushroom Curry with Yanang Leaf",
            price: "250",
            desc: "A bold Isan curry made with premium Khao Yai mushrooms — straw, shimeji and eryngii — simmered in freshly extracted yanang leaf broth for a rich, authentic Isan flavour.",
          },
          {
            th: "แกงอ่อมไก่",
            en: "Isan Herbal Chicken Curry (Gaeng Om)",
            price: "220",
            desc: "Premium chicken simmered until tender in freshly extracted yanang leaf broth, cooked with house-made fermented fish, eggplant, long beans and fresh herbs from our garden — a light, aromatic, authentic Isan flavour.",
          },
        ],
      },
    ],
  },

  {
    id: "grill",
    numeral: "VI",
    th: "เมนูย่างถ่าน",
    en: "From the Grill",
    groups: [
      {
        items: [
          {
            th: "ไก่อบโอ่ง",
            en: "Clay-Jar Roasted Whole Chicken",
            price: "350",
            desc: "Carefully selected whole chicken marinated with our signature blend of herbs and spices, roasted in a clay jar until juicy and tender with crispy skin. Served with our signature Isan chilli dipping sauce.",
            pick: true,
          },
          {
            th: "คอหมูย่างอบโอ่ง",
            en: "Clay-Jar Roasted Pork Neck",
            price: "280",
            desc: "Premium kurobuta pork neck marinated with our signature blend of herbs and spices, charcoal-roasted until tender and juicy. Served fresh with our signature Isan chilli dipping sauce.",
          },
          {
            th: "จี่ลิ้นวัวอีสาน",
            en: "Charcoal-Grilled Beef Tongue",
            price: "350",
            desc: "Premium beef tongue marinated with our signature Isan spices, charcoal-grilled until tender and juicy with a rich smoky aroma.",
          },
          {
            th: "เนื้อย่างโคขุน",
            en: "Charcoal-Grilled Premium Beef with Jaew Dip",
            price: "450",
            desc: "Premium Kho Khun beef carefully selected for its rich flavour and tenderness — charcoal-grilled to enhance its natural juiciness and smoky aroma. Served with our signature Isan chilli dipping sauce.",
          },
          {
            th: "คอหมูย่างตะไคร้",
            en: "Lemongrass Grilled Pork Neck",
            price: "280",
            desc: "Premium kurobuta pork neck marinated with fresh lemongrass and our signature spices, charcoal-roasted until tender with a fragrant smoky aroma. Served with Isan chilli dipping sauce and aromatic lemongrass sauce.",
          },
        ],
      },
    ],
  },

  {
    id: "a-la-carte",
    numeral: "VII",
    th: "เมนูจานเดียว & ข้าว",
    en: "Rice & Noodle Dishes",
    groups: [
      {
        items: [
          {
            th: "ผัดหมี่โคราชบ้านเฮา",
            en: "Korat-Style Stir-Fried Rice Noodles",
            price: "220",
            desc: "Authentic Korat rice noodles stir-fried over high heat with premium pork belly, coated in traditional Korat sauce known for its rich, slightly sweet and savoury flavour — inspired by the warm culinary heritage of Korat, Khao Yai and Pak Chong.",
            pick: true,
          },
          {
            th: "ข้าวคลุกน้ำพริกตาแดง",
            en: "Rice Tossed in Red Chilli Paste with Fried Tilapia & Egg",
            price: "250",
            desc: "Steamed rice gently mixed with our house-made “Ta Daeng” chilli paste — pounded roasted chillies, garlic and fermented fish for a rich and aromatic flavour. Served with fried tilapia, boiled egg and fresh vegetables.",
          },
          {
            th: "ข้าวคลุกน้ำพริกแมงดา",
            en: "Rice Tossed in Maeng Da Chilli Paste with Fried Tilapia & Egg",
            price: "250",
            desc: "Steamed rice gently mixed with our house-made Maengda chilli paste — pounded roasted chillies, garlic and fermented fish with aromatic charcoal-grilled Maengda. Served with fried tilapia, boiled egg and fresh vegetables.",
          },
          {
            th: "ข้าวคลุกน้ำพริกกุ้งเสียบ",
            en: "Rice Tossed in Dried Shrimp Chilli Paste with Grilled Shrimp",
            price: "280",
            desc: "Steamed rice gently mixed with our house-made dried-shrimp chilli paste — pounded roasted chillies, garlic and fermented fish with aromatic shrimp. Served with charcoal-grilled shrimp, boiled egg and fresh vegetables.",
          },
          {
            th: "ข้าวผัดรถไฟปากช่อง",
            en: "Pak Chong Railway Fried Rice",
            price: "280",
            desc: "Fragrant fried rice wok-tossed over high heat for perfectly separated grains — well-balanced, cooked with fresh garden vegetables. Inspired by the nostalgic charm of Pak Chong Railway Station, this dish reflects warm and timeless Thai comfort.",
          },
          {
            th: "อีสานนัวเส้น",
            en: "Isan Stir-Fried Glass Noodles with Egg & Acacia Leaves",
            price: "220",
            desc: "Glass noodles wok-tossed over high heat with fragrant egg, using traditional stir-fry techniques for a light, well-balanced flavour. Cooked with fresh vegetables and acacia leaves sourced from Isan — rustic and homestyle.",
          },
        ],
      },
      {
        th: "เคียงข้าว & ของแกล้ม",
        en: "Sides",
        items: [
          {
            th: "เข่าสวยเดะนิ",
            en: "Premium Jasmine Rice",
            price: "40",
            desc: "Premium jasmine rice from the fertile lands of Pak Chong — steamed soft, fluffy and fragrant.",
          },
          {
            th: "เข่าเหนียว",
            en: "Sticky Rice",
            price: "40",
            desc: "Glutinous rice from Isan, traditionally steamed soft and perfectly sticky.",
          },
          {
            th: "ข้าวปุ้น",
            en: "Fresh Rice Noodles",
            price: "40",
            desc: "Fresh rice noodles made daily by traditional methods — soft and delicately fragrant.",
          },
          {
            th: "แคบหมู",
            en: "Crispy Pork Crackling",
            price: "50",
            desc: "Premium pork crackling from Pak Chong, slowly rendered and fried until perfectly crispy.",
          },
        ],
      },
    ],
  },

  {
    id: "cocktails",
    numeral: "VIII",
    th: "ค็อกเทล",
    en: "Cocktails",
    groups: [
      {
        th: "ค็อกเทลอีสาน",
        en: "Isaan Cocktails",
        items: [
          {
            th: "ซดแล้วเซ",
            en: "Sod Laew Zae · The Isan Tipsy",
            price: "250",
            ingredients: "Rum · Lime Juice · Syrup",
            desc: "Rum Sour — A refreshing Isan rum cocktail with bright lime, gentle sweetness, and an optional silky egg-white finish.",
          },
          {
            th: "บักนัดลมทุ่ง",
            en: "Buk Nat Lom Tung · Golden Pineapple Isan",
            price: "300",
            ingredients: "Rum · Pineapple · Lime",
            desc: "Sunset — Ripe pineapple sweetness layered with fresh lime citrus, settling into a smooth, warming rum finish.",
          },
          {
            th: "ต้มแซ่บหม้อใหญ่",
            en: "Tom Zab Moh Yai · Spicy Lime Riot",
            price: "300",
            ingredients: "Tom Saap-Inspired · Lime · Lemongrass · Chilli",
            desc: "An Isan-inspired Tom Saap cocktail with bright lime, lemongrass, gentle chili heat, and savoury herbal depth.",
          },
          {
            th: "แซ่บออนซอน",
            en: "Zab On Son · Isan Euphoria",
            price: "300",
            ingredients: "Old Fashioned · Pak Chong Corn · Khao Yai Honey",
            desc: "Old Fashioned with Pak Chong corn sweetness, wild Khao Yai honey, and aromatic bitters — gently stirred.",
          },
          {
            th: "บักม่วงน้ำปลาหวาน",
            en: "Buk Muang Nam Pla Wan · Isan Mango Buzz",
            price: "300",
            ingredients: "Mango Margarita · Chilli-Salt Rim",
            desc: "Mango Margarita — local mango with bright lime acidity and a chili-salt rim for a subtle Isan-inspired kick.",
          },
          {
            th: "หัวทิ่มบ่อ",
            en: "Hua Tim Bo · Mind-Blower",
            price: "350",
            ingredients: "White Rum · Dark Rum · Vodka · Gin · Tequila · Lime Juice · Syrup · Coca-Cola",
          },
        ],
      },
      {
        th: "ค็อกเทลคลาสสิก",
        en: "Classic Cocktails",
        items: [
          {
            th: "โมฮิโต้",
            en: "Mojito",
            price: "250",
            ingredients: "Rum · Brown Sugar · Mint Leaves · Lemon Juice",
          },
          {
            th: "ไหมไท",
            en: "Mai Tai",
            price: "250",
            ingredients: "White Rum · Dark Rum · Orange Curaçao · Pineapple Juice · Orange Juice · Lime Juice",
          },
          {
            th: "จินฟิซ",
            en: "Gin Fizz",
            price: "250",
            ingredients: "Gin · Triple Sec · Lime Juice · Soda · Sugar Syrup",
          },
          {
            th: "พีน่า โคลาด้า",
            en: "Piña Colada",
            price: "250",
            ingredients: "White Rum · Malibu · Pineapple · Coconut Milk",
          },
          {
            th: "บลู ฮาวาย",
            en: "Blue Hawaii",
            price: "250",
            ingredients: "Vodka · White Rum · Blue Curaçao · Pineapple Juice · Lime Juice · Sugar Syrup",
          },
          {
            th: "มาร์การิต้า",
            en: "Margarita",
            price: "250",
            ingredients: "Tequila · Triple Sec · Lime Juice",
          },
          {
            th: "เตกีล่า ซันไรส์",
            en: "Tequila Sunrise",
            price: "250",
            ingredients: "Tequila · Orange Juice · Lime Juice · Grenadine Syrup",
          },
          {
            th: "คอสโมโพลิแทน",
            en: "Cosmopolitan",
            price: "250",
            ingredients: "Vodka · Triple Sec · Cranberry Juice · Lime Juice · Sugar Syrup",
          },
          {
            th: "เอสเปรสโซ มาร์ตินี่",
            en: "Espresso Martini",
            price: "250",
            ingredients: "Espresso · Vodka · Kahlúa · Syrup",
          },
          { th: "มาร์ตินี่", en: "Martini", price: "250", ingredients: "Vodka · Dry Vermouth · Syrup" },
          { th: "คิวบา ลิเบร", en: "Cuba Libre", price: "250", ingredients: "White Rum · Coca-Cola" },
          {
            th: "เมลอน ซาวร์",
            en: "Melon Sour",
            price: "250",
            ingredients: "Melon Vodka · Lime Juice · Syrup",
          },
        ],
      },
      {
        th: "ค็อกเทลพิเศษ",
        en: "Specialty Cocktails",
        items: [
          {
            th: "นะหน้าทอง",
            en: "Na Na Thong",
            price: "300",
            ingredients: "Mekhong · Passion Fruit · Lime Juice · Syrup",
          },
          {
            th: "ขุนแผน",
            en: "Khun Phaen",
            price: "300",
            ingredients: "Mekhong · Pineapple Juice · Lime Juice · Syrup",
          },
          {
            th: "แซ่บซ่าพาเพลิน",
            en: "Zabb Zaa Pa Plean · Isan Heritage Jar",
            price: "300",
            ingredients: "Mekhong · Tom Yum Herbs (Galangal, Lemongrass, Kaffir Lime Leaves) · Pineapple Juice · Lime Juice · Syrup · Chilli on Request",
          },
          {
            th: "ม้ากระทืบโรง",
            en: "Ma Kratuep Rong · Horse Kick",
            price: "50",
            ingredients: "Herbal Shot",
            desc: "Intensely herbal and earthy with pungent medicinal notes — bold, bitter, spicy, and warming with a powerful kick.",
          },
          {
            th: "นารีรำพึง",
            en: "Naree Ramphueng · Ladies' Delight",
            price: "50",
            ingredients: "Herbal Shot",
          },
          {
            th: "โด่ไม่รู้ล้ม",
            en: "Do Mai Roo Lom · Never-Ending Vigor",
            price: "50",
            ingredients: "Herbal Shot",
          },
        ],
      },
    ],
  },

  {
    id: "drinks",
    numeral: "IX",
    th: "เครื่องดื่ม & เบียร์",
    en: "Drinks & Beer",
    groups: [
      {
        th: "เครื่องดื่มร้อน",
        en: "Hot Drinks",
        layout: "compact",
        items: [
          { th: "น้ำผึ้งมะนาวบ้านเฮา", en: "Hot Honey & Lemon", price: "100" },
        ],
      },
      {
        th: "เครื่องดื่มเย็น",
        en: "Cold Drinks",
        layout: "compact",
        items: [
          { th: "น้ำมักนาวม่วนใจ", en: "Iced Lime & Mint", price: "80" },
          { th: "น้ำใบเตยหอมอีหลี", en: "Fragrant Pandan Juice", price: "80" },
          { th: "น้ำบ๊วยแซ่บ", en: "Plum Juice", price: "80" },
          { th: "น้ำกระเจี๊ยบม่วนใจ", en: "Roselle Juice", price: "80" },
          { th: "น้ำเก็กฮวยหอมหลาย", en: "Chrysanthemum Tea", price: "80" },
          { th: "น้ำบักตูมม่วนใจ", en: "Iced Bael Fruit Drink (Isan Style)", price: "80" },
          { th: "น้ำบักส้มเกี้ยง", en: "Freshly Squeezed Orange Juice", price: "100" },
          { th: "บักม่วงหอมเย็น", en: "Mango & Mint", price: "100" },
          { th: "บักนัดใบเตยม่วนใจ", en: "Pineapple & Pandan", price: "100" },
          { th: "บักนัดหอมเย็นม่วนใจ", en: "Pineapple & Mint", price: "100" },
        ],
      },
      {
        th: "หม่องหนีกาแฟ",
        en: "Coffee & Tea",
        layout: "compact",
        items: [
          { th: "ชาไทย ร้อน / เย็น", en: "Thai Tea (Hot / Iced)", price: "120" },
          { th: "โอเลี้ยง ร้อน / เย็น", en: "O-Liang · Thai Black Coffee (Hot / Iced)", price: "120" },
          { th: "กาแฟโบราณ ร้อน / เย็น", en: "Traditional Thai Coffee (Hot / Iced)", price: "120" },
          { th: "โอวัลติน ร้อน / เย็น", en: "Ovaltine (Hot / Iced)", price: "120" },
          { th: "นมชมพู (นมเย็น)", en: "Thai Pink Milk (Nom Yen)", price: "120" },
        ],
      },
      {
        th: "น้ำอัดลม",
        en: "Soft Drinks",
        layout: "compact",
        items: [
          { th: "น้ำแข็ง", en: "Ice Bucket", price: "50" },
          { th: "น้ำเปล่า", en: "Drinking Water", price: "50" },
          { th: "โซดา", en: "Soda Water", price: "50" },
          { th: "โคคา-โคล่า", en: "Coca-Cola", price: "50" },
          { th: "โค้ก ซีโร่", en: "Coca-Cola Zero", price: "50" },
          { th: "พิงค์เลมอนโซดา", en: "Pink Lemon Soda", price: "50" },
          { th: "ชเวปส์ โทนิค วอเตอร์", en: "Schweppes Tonic Water", price: "50" },
        ],
      },
      {
        th: "เบียร์",
        en: "Beer",
        layout: "compact",
        items: [
          { th: "ช้าง", en: "Chang (Bottle)", price: "150" },
          { th: "ช้างดราฟท์ (แก้ว)", en: "Chang Draft (Glass)", price: "200" },
          { th: "ช้างดราฟท์ (เหยือก)", en: "Chang Draft (Pitcher)", price: "490" },
          { th: "ช้างดราฟท์ (ทาวเวอร์)", en: "Chang Draft (Tower)", price: "1,250" },
          { th: "สิงห์", en: "Singha (Bottle)", price: "150" },
          { th: "ลีโอ", en: "Leo (Bottle)", price: "150" },
        ],
      },
    ],
  },

  {
    id: "spirits-wine",
    numeral: "X",
    th: "สุรา & ไวน์",
    en: "Spirits & Wine",
    groups: [
      {
        th: "สุรา",
        en: "Spirits",
        note: "Priced per 45 ml shot · whole bottles as listed",
        items: [
          {
            th: "แม่โขง",
            en: "Mekhong",
            price: "125",
            priceNote: "Bottle 1,450",
            ingredients: "Thai Spirit · Sugarcane & Rice",
            desc: "Mekhong is Thailand's iconic national spirit. Often mistaken for rum, it is actually a sugarcane- and rice-based blended spirit with distinctive herbal aromatics.",
          },
          {
            th: "พระยารัม",
            en: "Phraya Rum",
            price: "180",
            priceNote: "Bottle 3,570",
            ingredients: "Molasses Rum",
            desc: "Phraya is made from sugarcane molasses (not fresh-pressed cane juice), which is the standard base for most traditional rums.",
          },
          {
            th: "หนุ่มชัยภูมิ",
            en: "Num Chaiyaphum",
            price: "150",
            priceNote: "Bottle 1,950",
            ingredients: "Community Spirit · Chaiyaphum",
            desc: "Chaiyaphum liquor refers to traditional community spirits from Chaiyaphum province, rooted in the fermentation and distillation traditions of Thailand's Isan region.",
          },
        ],
      },
      {
        th: "ไวน์แดง",
        en: "Red Wine",
        note: "Priced per bottle",
        layout: "compact",
        items: [
          {
            th: "ซานตา คริสตินา ฟัตโตเรีย เล มาเอสเตรลเล",
            en: "Santa Cristina Fattoria Le Maestrelle",
            price: "1,800",
            ingredients: "Italy · Medium-Bodied · Cherry, Vanilla, Chocolate",
          },
          {
            th: "ฟามิเลีย คอร์เรอา ลิโซนี กาแบร์เนต์ โซวีญง",
            en: "Familia Correa Lisoni Cabernet Sauvignon",
            price: "1,200",
            ingredients: "Cabernet Sauvignon · Medium to Full-Bodied",
          },
          {
            th: "ฟามีย์ แปร์แรง ชาโตเนิฟ-ดู-ปาป เล ซินาร์ รูจ",
            en: "Famille Perrin Châteauneuf-du-Pape Les Sinards Rouge",
            price: "6,500",
            ingredients: "Rhône, France · Medium to Full-Bodied · Silky Tannins",
          },
          {
            th: "พีบี เขาใหญ่ รีเสิร์ฟ ชีราซ",
            en: "2020 PB Khao Yai Reserve Shiraz",
            price: "1,950",
            ingredients: "Khao Yai, Thailand · Shiraz · Medium to Full-Bodied",
          },
          {
            th: "พีบี เขาใหญ่ วัลเลย์ โปกูโร รีเสิร์ฟ คาร์เมแนร์",
            en: "PB Khao Yai Valley Pocuro Reserve Carmenère",
            price: "2,100",
            ingredients: "Khao Yai, Thailand · Carmenère · Medium to Full-Bodied",
          },
          {
            th: "สวาร์ทแลนด์ ไวเนอรี บุช ไวน์ ปิโนทาจ",
            en: "Swartland Winery Bush Vine Pinotage",
            price: "2,100",
            ingredients: "South Africa · Pinotage · Medium to Full-Bodied",
          },
          {
            th: "กันฟอร์ราเลส เทมปรานิลโล",
            en: "Canforrales Tempranillo",
            price: "2,100",
            ingredients: "Spain · Tempranillo · Full-Bodied",
          },
          {
            th: "บาเดีย อัล คอลเล เคียนติ ดีโอซีจี",
            en: "2024 Badia al Colle Chianti DOCG",
            price: "1,600",
            ingredients: "Tuscany, Italy · Sangiovese · Medium-Bodied",
          },
          {
            th: "โดนา เออร์เมลินดา ทินโต พัลเมลา ดีโอซี",
            en: "2023 Dona Ermelinda Tinto Palmela DOC",
            price: "1,600",
            ingredients: "Portugal · Castelão, Touriga Nacional, Cabernet · Full-Bodied",
          },
        ],
      },
      {
        th: "ไวน์ขาว",
        en: "White Wine",
        note: "Priced per bottle",
        layout: "compact",
        items: [
          {
            th: "ฟามิเลีย คอร์เรอา ลิโซนี โซวีญง บลอง",
            en: "Familia Correa Lisoni Sauvignon Blanc",
            price: "1,200",
            ingredients: "Sauvignon Blanc · Light-Bodied · Dry",
          },
          {
            th: "พีบี เขาใหญ่ รีเสิร์ฟ เชอแน็ง บลอง",
            en: "2024 PB Khao Yai Reserve Chenin Blanc",
            price: "1,950",
            ingredients: "Khao Yai, Thailand · Chenin Blanc · Light Oak",
          },
          {
            th: "กาฟ เดอ โรซอง กรองด์ หลุยส์ บอร์โดซ์ บลองก์",
            en: "2023 Caves de Rauzan Grand Louis Bordeaux Blanc",
            price: "1,600",
            ingredients: "Bordeaux, France · Sauvignon Blanc & Sémillon",
          },
          {
            th: "ควีน แอดิเลด ชาร์ดอนเนย์",
            en: "2024 Queen Adelaide Chardonnay",
            price: "1,350",
            ingredients: "South Eastern Australia · Chardonnay · Light Oak",
          },
        ],
      },
      {
        th: "สปาร์กลิง & โรเซ่",
        en: "Sparkling & Rosé",
        note: "Priced per bottle",
        layout: "compact",
        items: [
          {
            th: "อาโมเร รูบาโต โพรเซกโก เอ็กซ์ตร้า ดราย",
            en: "Amore Rubato Prosecco Extra Dry",
            price: "1,700",
            ingredients: "Italy · Sparkling · Off-Dry",
          },
          {
            th: "พีบี วัลเลย์ โปกูโร โรเซ่ เดอ ซีราห์",
            en: "PB Valley Pocuro Rosé de Syrah",
            price: "2,100",
            ingredients: "Khao Yai, Thailand · Rosé · Syrah",
          },
        ],
      },
      {
        th: "ไวน์แก้ว",
        en: "Wine by the Glass",
        note: "Priced per glass",
        layout: "compact",
        items: [
          {
            th: "ไวน์แดง ฟามิเลีย คอร์เรอา ลิโซนี กาแบร์เนต์ โซวีญง (แก้ว)",
            en: "Familia Correa Lisoni Cabernet Sauvignon (Glass)",
            price: "300",
            ingredients: "Red · Cabernet Sauvignon",
          },
          {
            th: "ไวน์ขาว ฟามิเลีย คอร์เรอา ลิโซนี โซวีญง บลอง (แก้ว)",
            en: "Familia Correa Lisoni Sauvignon Blanc (Glass)",
            price: "300",
            ingredients: "White · Sauvignon Blanc",
          },
        ],
      },
    ],
  },
];
