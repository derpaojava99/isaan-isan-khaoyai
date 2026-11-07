/**
 * Restaurant menu — transcribed from the printed menu
 * "อีสานบ้านเฮา เขาใหญ่ / Isaan Baan Hao". Food names, prices and order follow
 * the owner's sheet of 04.11.2569, which overrides the print where they differ.
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
            en: "Khao Yai Crispy Fried Chicken Wings",
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
            th: "ไส้กรอกอีสานย่าง",
            en: "Charcoal-Grilled Isan Pork Sausage",
            price: "220",
            desc: "Isan Khao Yai charcoal-grilled north-eastern premium local pork and rice sausage, with pickled ginger, chilli and garlic.",
          },
          {
            th: "หมูแดดเดียว",
            en: "Crispy Sun-Dried Pork",
            price: "220",
            desc: "Marinated premium kurobuta pork with northeastern local herbs & spices, naturally sun-dried and deep-fried until crispy outside, tender inside.",
          },
          {
            th: "เนื้อแดดเดียว",
            en: "Crispy Sun-Dried Beef",
            price: "260",
            desc: "Marinated premium Korat beef with northeastern local herbs & spices, naturally sun-dried and deep-fried until crispy outside, tender inside.",
          },
          {
            th: "ลาบหมูทอด",
            en: "Crispy Larb-Spiced Pork",
            price: "260",
            desc: "Thinly-sliced premium kurobuta pork marinated with traditional larb spices and local herbs, deep-fried until crispy and golden with fragrant herbs in classic northeastern Isan style.",
          },
          {
            th: "ปลาส้มทอด",
            en: "Crispy Fried Fermented Fish (Pla Som)",
            price: "260",
            desc: "Traditional northeastern Isan local fermented fish stuffed with rice and local herbs, deep-fried until golden and crispy, with a well-balanced savoury flavour. Served with pickled ginger, chilli and garlic.",
          },
          {
            th: "แหนมหมูส้มทอด",
            en: "Crispy Fried Fermented Pork (Moo Som)",
            price: "260",
            desc: "Traditional northeastern fermented kurobuta pork marinated with garlic, rice and local spices — naturally fermented for a rich tangy flavour, deep-fried until golden and crispy. Served with pickled ginger and fresh chilli.",
          },
        ],
      },
    ],
  },

  {
    id: "chilli-dip",
    numeral: "II",
    th: "น้ำพริก & แจ่ว",
    en: "Chilli Dip",
    groups: [
      {
        items: [
          {
            th: "แจ่วขี้กาบ้านเฮา",
            en: "House Roasted Chilli Dip with Crispy Mackerel & Vegetables",
            price: "240",
            desc: "House-made authentic northeastern Thai Isan chilli dip, prepared by pounding roasted chillies, garlic and local herbs with fermented fish sauce in a mortar — bold and rustic. Served with crispy fried mackerel, fresh and steamed vegetables.",
            pick: true,
          },
          {
            th: "แจ่วบองแซ่บนัว",
            en: "Jaew Bong – Isan Fermented Fish Chilli Relish",
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
    en: "Thai Spicy Salad",
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
    en: "Thai Papaya Salad",
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
            en: "Luang Prabang Papaya Salad with Crispy Prawns",
            price: "240",
            desc: "Hand-sliced green papaya cut into wide flat strips for a crisp texture that absorbs the dressing. Tossed with traditional seasonings and our rich, well-balanced shrimp paste from Pak Chong, with crispy fried prawns.",
            pick: true,
          },
          {
            th: "ตำบักหุ่งใส่ปูปลาร้า",
            en: "Isan Papaya Salad with Field Crab & Pla Ra",
            price: "200",
            desc: "Garden-grown papaya tossed with house-cooked fermented fish sauce and naturally raised field crab from Pak Chong — pounded with chilli and lime for a bold, savoury Isan flavour.",
          },
          {
            th: "ตำป่าอีสานเขาใหญ่",
            en: "Khao Yai Mixed Papaya Salad (Tam Pa)",
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
    en: "Spicy Soup",
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
            desc: "Premium Australian sirloin carefully selected for its rich flavour and tenderness — charcoal-grilled to enhance its natural juiciness and smoky aroma. Served with our signature Isan chilli dipping sauce.",
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
    en: "À la Carte & Rice",
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
        en: "Sides & Rice",
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
    th: "ค็อกเทลอีสาน",
    en: "Isaan Cocktails",
    groups: [
      {
        items: [
          {
            th: "ซดแล้วเซ",
            en: "Sod Laew Zae · The Isan Tipsy",
            price: "250",
            desc: "Rum Sour — A refreshing Isan rum cocktail with bright lime, gentle sweetness, and an optional silky egg-white finish.",
          },
          {
            th: "บักนัดลมทุ่ง",
            en: "Buk Nat Lom Tung · Golden Pineapple Isan",
            price: "350",
            desc: "Sunset — Ripe pineapple sweetness layered with fresh lime citrus, settling into a smooth, warming rum finish.",
          },
          {
            th: "ต้มแซ่บหม้อใหญ่",
            en: "Tom Zab Moh Yai · Spicy Lime Riot",
            price: "250",
            desc: "An Isan-inspired Tom Saap cocktail with bright lime, lemongrass, gentle chili heat, and savoury herbal depth.",
          },
          {
            th: "แซ่บออนซอน",
            en: "Zab On Son · Isan Euphoria",
            price: "300",
            desc: "Old Fashioned with Pak Chong corn sweetness, wild Khao Yai honey, and aromatic bitters — gently stirred.",
          },
          {
            th: "บักม่วงน้ำปลาหวาน",
            en: "Buk Muang Nam Pra Wan · Isan Mango Buzz",
            price: "300",
            desc: "Mango Margarita — local mango with bright lime acidity and a chili-salt rim for a subtle Isan-inspired kick.",
          },
          {
            th: "คันแข่วบักนัด",
            en: "Kan Khaew Buk Nat · Dizzy Delight Pineapple",
            price: "300",
            desc: "Pina Colada — Isan-inspired blend of fresh local coconut and sweet pineapple, creamy yet vibrant, with a naturally balanced tropical finish.",
          },
          {
            th: "หัวทิ่มบ่อ",
            en: "Hua Tim Bo · Mind-Blower",
            price: "350",
            desc: "Long Island Iced Tea — local rice and corn spirits with tamarind, cane sugar, and Khao Yai honey: rustic, layered, powerfully balanced.",
          },
        ],
      },
      {
        th: "ค็อกเทลพิเศษ",
        en: "Specialty Cocktails",
        items: [
          {
            th: "น้ำลายแตกซวดๆ",
            en: "Nam Lai Taek Zod Zod · Isan Spicy Lime",
            price: "250",
            desc: "Pink Lady — Local rice spirit with a light, airy body, finished with toasted rice powder for gentle nuttiness and depth.",
          },
          {
            th: "อีสานม่วนกึ๊บ",
            en: "Isaan Muan Gub! · Minty Muan-Go-Round",
            price: "250",
            desc: "Mojito — Rustic Isan-style Mojito with grainy depth, Wang Nam Keaw cane sugar, and fresh mint for a lively, cooling finish.",
          },
          {
            th: "เป็นตาแซ่บอยู่",
            en: "Pen Ta Zab Yu · Rum Sabai Isan",
            price: "300",
            desc: "Mai Tai — Thai rum with pineapple and orchard-grown local fruits, offering sun-ripened sweetness and warm tropical depth.",
          },
          {
            th: "ลำซิ่ง ซอดแจ้ง (ไห)",
            en: "Lam Zing Zod Jaeng · Isan Clay Jar Spirit",
            price: "300",
            desc: "Mekhong · Coconut · Pandan — Isan-style cocktail with creamy local coconut and fragrant pandan, softly rounded and aromatic.",
          },
          {
            th: "แซ่บซ่าพาเพลิน",
            en: "Zabb Zaa Pa Plean · Isan Heritage Jar",
            price: "250",
            desc: "Mekhong · Lemongrass · Wild Honey — Homegrown lemongrass and Khao Yai wild honey bring citrusy freshness and soft natural sweetness.",
          },
          {
            th: "บั้งไฟ",
            en: "Bang Fai (Rocket) · One-Hit Wonder",
            price: "300",
            desc: "Creamy coconut, milky sweetness, and smooth vodka — easy drinking with a warming, powerful finish.",
          },
          {
            th: "กำลังช้างสาร",
            en: "Kamlang Chang San · Elephant Power · Ma Kratuep Long",
            price: "50",
            desc: "Intensely herbal and earthy with pungent medicinal notes — bold, bitter, spicy, and warming with a powerful kick.",
          },
        ],
      },
    ],
  },

  {
    id: "mocktails",
    numeral: "IX",
    th: "ม็อกเทล & เครื่องดื่ม",
    en: "Mocktails & Non-Alcoholic Drinks",
    groups: [
      {
        th: "สาวร้อยผัว",
        en: "Specialty Mocktails",
        layout: "compact",
        items: [
          { th: "สาวร้อยผัว", en: "Sao Roy Phua · Naree Ramphueng / Ladies' Delight", price: "50" },
          { th: "น้องเมียสะอื้น", en: "Nong Mia Sa-uen · Do Mai Roo Lom / Never-Ending Vigor", price: "50" },
        ],
      },
      {
        th: "เครื่องดื่มร้อน",
        en: "Hot Drinks",
        layout: "compact",
        items: [
          { th: "น้ำขิงลมทุ่ง", en: "Ginger Juice", price: "50" },
          { th: "มะตูมหอมทุ่ง", en: "Bael Fruit Juice", price: "50" },
          { th: "น้ำผึ้งมะนาวบ้านเฮา", en: "Honey & Lemon", price: "50" },
        ],
      },
      {
        th: "เครื่องดื่มเย็น",
        en: "Cold Drinks",
        layout: "compact",
        items: [
          { th: "น้ำมักนาวม่วนใจ", en: "Lime & Mint / Honey & Lemon", price: "50" },
          { th: "น้ำใบเตยหอมอีหลี", en: "Fragrant Pandan Juice", price: "50" },
          { th: "น้ำบ๊วยแซ่บ", en: "Plum Juice", price: "50" },
          { th: "น้ำกระเจี๊ยบม่วนใจ", en: "Roselle Juice", price: "50" },
          { th: "น้ำเก็กฮ้วยหอมหลาย", en: "Chrysanthemum Tea", price: "50" },
          { th: "น้ำบักตูมม่วนใจ", en: "Bael Fruit Herbal Drink — Isan Style", price: "50" },
          { th: "น้ำบักส้มเกี้ยง", en: "Orange Juice — Freshly Squeezed", price: "100" },
          { th: "บักม่วงหอมเย็น", en: "Mango & Mint", price: "100" },
          { th: "บักนัดใบเตยม่วนใจ", en: "Pineapple & Pandan", price: "100" },
          { th: "บักนัดหอมเย็นม่วนใจ", en: "Pineapple & Mint", price: "100" },
        ],
      },
      {
        th: "หม่อง หนี กาแฟ",
        en: "Mong Nee Coffee Station",
        layout: "compact",
        items: [
          { th: "ชาไทย ร้อน / เย็น", en: "Thai Tea (Hot / Iced)", price: "120" },
          { th: "โอเลี้ยง ร้อน / เย็น", en: "O-Liang · Thai Black Coffee (Hot / Iced)", price: "120" },
          { th: "กาแฟโบราณ ร้อน / เย็น", en: "Traditional Thai Coffee (Hot / Iced)", price: "120" },
          { th: "โอวันติน ร้อน / เย็น", en: "Ovaltine (Hot / Iced)", price: "120" },
          { th: "นมชมพู / นมเย็น", en: "Pink Milk / Nom Yen", price: "120" },
        ],
      },
      {
        th: "น้ำอัดลม",
        en: "Soft Drinks",
        layout: "compact",
        items: [
          { th: "น้ำแข็ง", en: "Ice Bucket", price: "50" },
          { th: "น้ำเปล่า", en: "Water", price: "50" },
          { th: "โซดา", en: "Soda Water", price: "50" },
          { th: "โคคา-โคล่า", en: "Coca-Cola", price: "50" },
          { th: "โค้ก ซีโร่", en: "Coca-Cola Zero", price: "50" },
          { th: "พิงค์เลม่อน โซดา", en: "Pink Lemon Soda", price: "50" },
        ],
      },
      {
        th: "เบียร์",
        en: "Beer",
        layout: "compact",
        items: [
          { th: "ช้างดราฟท์ (เหยือก)", en: "Chang Draft — Pitcher", price: "400" },
          { th: "ช้างดราฟท์ (แก้ว)", en: "Chang Draft — Glass", price: "200" },
          { th: "ช้าง", en: "Chang", price: "150" },
          { th: "สิงห์", en: "Singha", price: "150" },
          { th: "ลีโอ", en: "Leo", price: "150" },
        ],
      },
    ],
  },

  {
    id: "spirits-wine",
    numeral: "X",
    th: "สุรา & ช็อต",
    en: "Spirits & Shots",
    groups: [
      {
        note: "Available by the bottle or shot",
        items: [
          {
            th: "แม่โขง · Mekong",
            en: "Thailand's Iconic National Spirit",
            price: "220",
            desc: "Mekhong is Thailand's iconic national spirit. Often mistaken for rum, it is actually a sugarcane- and rice-based blended spirit with distinctive herbal aromatics.",
          },
          {
            th: "พระยารัม · Phraya Rum",
            en: "Sugarcane Molasses Rum",
            price: "350",
            desc: "Phraya is made from sugarcane molasses (not fresh-pressed cane juice), which is the standard base for most traditional rums.",
          },
          {
            th: "หนุ่มชัยภูมิ · Num Chaiyaphum",
            en: "Chaiyaphum Community Spirit",
            price: "220",
            desc: "Chaiyaphum liquor refers to traditional community spirits from Chaiyaphum province, rooted in the fermentation and distillation traditions of Thailand's Isan region.",
          },
          {
            th: "สาโท · Sato",
            en: "Thai Rice Wine",
            price: "550",
            desc: "Sato is a traditional Isan rice wine made from fermented glutinous rice, deeply rooted in northeastern Thailand's local culture and communal lifestyle.",
          },
          {
            th: "ป้าดติโร่ · Pad-Ti-Tho",
            en: "Community-Distilled Liquor",
            price: "250",
            desc: "“Community liquor” refers to locally-produced fermented and distilled spirits — clear or white distilled liquor made at the community level using crops such as rice or sugarcane.",
          },
          {
            th: "ซอดแจ้ง · Sod Jang",
            en: "Ubon Heritage White Spirit",
            price: "220",
            desc: "Traditional community-distilled white spirit from Ubon Ratchathani Province — rooted in Isan's local fermentation and distillation heritage.",
          },
        ],
      },
      {
        th: "รายการไวน์เขาใหญ่",
        en: "PB Valley Khao Yai",
        note: "Phaya Yen, Nakhon Ratchasima — One of the oldest and leading vineyards and wineries in the Khao Yai region. Located in Pak Chong, with guided tours of their vineyards and wine production facilities.",
        layout: "compact",
        items: [
          { th: "2024 PB Khao Yai Reserve", en: "Chenin Blanc", price: "1,950" },
          { th: "2025 PB Khao Yai Reserve", en: "Rosé", price: "1,950" },
          { th: "2020 PB Khao Yai Reserve", en: "Shiraz", price: "1,950" },
        ],
      },
      {
        en: "GranMonte Khao Yai",
        note: "Pak Chong, Nakhon Ratchasima — Estate-grown grapes, award-winning GI (Geographical Indication) wines. An award-winning vineyard in Asoke Valley, Khao Yai, renowned for producing 100% Thai wines known as “New Latitude Wines.”",
        layout: "compact",
        items: [
          { th: "2022 GranMonte", en: "Durif", price: "2,700" },
          { th: "2023 Spring", en: "Syrah Cabernet", price: "1,750" },
          { th: "GranMonte Spring · Unwooded Chenin / Syrah Cabernet", en: "By the Glass", price: "350" },
        ],
      },
    ],
  },
];
