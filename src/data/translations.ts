/**
 * UI copy dictionary for the EN/TH toggle.
 * Components read `t.<section>.<key>` for the active language.
 */

import type { IconName } from "@/components/icons/Icons";

export type Lang = "en" | "th";

export interface HeroSlide {
  image: string;
  subtitle: string;
  title: string;
  desc: string;
  cta: string;
  ctaHref: string;
  ctaStyle: "primary" | "gold" | "outline-light";
}

export interface Dict {
  nav: {
    home: string;
    about: string;
    villas: string;
    facilities: string;
    gallery: string;
    contact: string;
    book: string;
    menuLabel: string;
  };
  hero: { slides: HeroSlide[] };
  booking: {
    checkIn: string;
    checkOut: string;
    guests: string;
    guestOptions: string[];
    submit: string;
    resortName: string;
    /** Calendar picker copy. */
    months: string[];
    weekdays: string[];
    selectCheckIn: string;
    selectCheckOut: string;
    clearDates: string;
    done: string;
    nightsSelected: string;
    prevMonth: string;
    nextMonth: string;
  };
  about: {
    tagline: string;
    title: string;
    lead: string;
    text: string;
    badgeLabel: string;
    features: string[];
  };
  story: {
    tagline: string;
    title: string;
    intro: string;
    /** The three motifs the resort is built around. */
    blocks: { title: string; text: string }[];
    elementsTitle: string;
    elements: { title: string; desc: string }[];
    closing: string;
  };
  villas: { tagline: string; title: string; desc: string; viewDetails: string; startingFrom: string; perNight: string; amenities: string; bookThis: string };
  facilities: {
    tagline: string;
    title: string;
    desc: string;
    items: { badge?: string; icon: IconName; title: string; desc: string; link: string; href?: string }[];
  };
  gallery: {
    tagline: string;
    title: string;
    desc: string;
    filters: { key: string; label: string }[];
    captions: Record<string, string>;
  };
  map: {
    tagline: string;
    title: string;
    desc: string;
    getDirections: string;
    openInMaps: string;
    addressLabel: string;
    hoursLabel: string;
    hoursValue: string;
    checkInLabel: string;
    checkInValue: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    accommodations: string;
    contactLocation: string;
    links: { home: string; about: string; villas: string; facilities: string; gallery: string; offers: string };
    rights: string;
    credit: string;
  };
}

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      home: "Home",
      about: "About Resort",
      villas: "Villas & Suites",
      facilities: "Facilities & Dining",
      gallery: "Gallery",
      contact: "Contact Us",
      book: "Book Now",
      menuLabel: "Menu",
    },
    hero: {
      slides: [
        {
          image: "/picture/51205307327_1cc96cb36e_h.jpg",
          subtitle: "Your Gateway to Khao Yai",
          title: "Experience the Heart of Isan in the Heart of Khao Yai",
          desc: "Just 300 metres from Khao Yai National Park, this is where your journey begins — and where Isan culture lives in every detail, from your first step into the lobby to your last night in a private pool villa.",
          cta: "Explore Villas",
          ctaHref: "#villas",
          ctaStyle: "primary",
        },
        {
          image: "/picture/khao-yai-resort-big.webp",
          subtitle: "Your Access to Isan Culture",
          title: "Private Pool Villas & Suites",
          desc: "Immerse yourself in refined luxury amid Khao Yai's green hillsides — in just 9 private pool villas, in architecture woven from authentic Isan bamboo craft and local wisdom.",
          cta: "Reserve Your Stay",
          ctaHref: "#booking",
          ctaStyle: "gold",
        },
        {
          image: "/picture/khao-yai-resort-concept.webp",
          subtitle: "Nature Awaits You Here, Always",
          title: "Authentic Isan Heritage in the Wilds of Khao Yai",
          desc: "A stay that tells the Isan story through every sense — pha khao ma weaves, sticky-rice-basket forms, the emblematic Isan rooster, home-style flavors, and the warm care of Isan hospitality.",
          cta: "Discover the Story",
          ctaHref: "#story",
          ctaStyle: "outline-light",
        },
      ],
    },
    booking: {
      checkIn: "Check-In",
      checkOut: "Check-Out",
      guests: "Guests",
      guestOptions: ["1 Guest", "2 Guests"],
      submit: "Check Availability",
      resortName: "Isaan Isan Resort Khaoyai",
      months: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      selectCheckIn: "Select your check-in date",
      selectCheckOut: "Select your check-out date",
      clearDates: "Clear",
      done: "Done",
      nightsSelected: "nights selected",
      prevMonth: "Previous month",
      nextMonth: "Next month",
    },
    about: {
      tagline: "Your Gateway to Khao Yai — Your Access to Isan Culture",
      title: "Isaan Isan Resort Khaoyai — Experience Isan in the Heart of Khao Yai",
      lead: "This is more than a place to stay in Khao Yai. It's your gateway into the heart of Isan culture.",
      text: "Set amid the green hillsides of Khao Yai, just 300 metres from the entrance to Khao Yai National Park — a UNESCO World Heritage Site — Isaan Isan Resort Khaoyai is where your access to both the nature of Khao Yai and the rich cultural heritage of Isan begins. Every moment of your stay is designed to be an authentic Isan experience — right in the heart of Khao Yai.",
      badgeLabel: "Boutique Resort of Khao Yai",
      features: [
        "9 Private Pool Villas",
        "Authentic Isan Gastronomy",
        "Thai Spa & Traditional Massage",
        "Open-Air Cinema & Isan Night Market",
      ],
    },
    story: {
      tagline: "Our Design Story",
      title: "The Story of the Kratip, the Pha Khao Ma, and the Isan Rooster",
      intro:
        "Every design choice at Isaan Isan Resort Khaoyai carries a story. We don't simply decorate with Isan culture — we let it live in every space.",
      blocks: [
        {
          title: "The Kratip",
          text: "The sticky-rice basket is the heart of the Isan kitchen — a vessel that holds a family's warmth and the spirit of sharing. We shaped our lobby after it, so the very first building you encounter speaks of true Isan welcome.",
        },
        {
          title: "The Pha Khao Ma",
          text: "The all-purpose cloth that accompanies Isan people through every stage of life — worn, wrapped, tied, or laid down to sit on. Its patterns, colors, and textures appear throughout the resort, connecting you to the real way of life here.",
        },
        {
          title: "The Rooster",
          text: "The emblem in our logo, and an animal woven deeply into the Isan way of life. For generations, nearly every Isan household kept chickens — easy to raise, and a source of eggs, meat, affordable protein, and extra income for the family. The rooster's morning crow signals a new day and the diligence of Isan people. The chicken also gives rise to the region's most beloved dishes — kai yang, grilled chicken eaten with sticky rice and som tam — while the tradition of raising fighting cocks is a craft passed down through generations. For us, the rooster stands for warmth, abundance, and the very heart of the Isan home.",
        },
      ],
      elementsTitle: "Every element of the resort tells the Isan story",
      elements: [
        {
          title: "Terracotta tones and local weaving patterns",
          desc: "Warm terracotta hues and woven motifs inspired by traditional Isan weaving, reflecting wisdom passed down through generations.",
        },
        {
          title: "Home-style Isan gastronomy",
          desc: "At Isaan Isan Restaurant, local ingredients are prepared with authentic Isan recipes and spices, letting you taste the culture in every dish.",
        },
        {
          title: "Hospitality with an Isan heart",
          desc: "We treat every guest as family, with the genuine warmth that defines the people of Isan.",
        },
      ],
      closing:
        "When architecture, weaves, colors, the rooster, cuisine, and service come together, you don't just visit Khao Yai — you experience the culture of Isan with your whole heart, all in one place.",
    },
    villas: {
      tagline: "Accommodations",
      title: "Villas & Suites",
      desc: "Each villa is crafted to provide absolute privacy, generous living space, and stunning views of the surrounding Khao Yai mountain ranges.",
      viewDetails: "View Details",
      startingFrom: "Starting From",
      perNight: "/ night",
      amenities: "Villa Amenities & Features:",
      bookThis: "Book This Villa",
    },
    facilities: {
      tagline: "Experiences at Isaan Isan",
      title: "Facilities & Dining",
      desc: "Indulge your senses with our curated wellness activities, authentic regional gastronomy, and scenic leisure spaces.",
      items: [
        {
          badge: "Taste of Isan",
          icon: "dining",
          title: "Isaan Isan Restaurant",
          desc: "Authentic Isan cuisine from local ingredients, prepared with traditional recipes and spices.",
          link: "Explore Menu →",
          href: "/menu",
        },
        {
          icon: "cinema",
          title: "Open-Air Cinema",
          desc: "Starlit movie nights in the resort gardens, an atmosphere you won't find in the city.",
          link: "View Atmosphere →",
        },
        {
          icon: "market",
          title: "Night-Market Evenings",
          desc: "Craft stalls, traditional Thai games, and beautifully illuminated photo spots.",
          link: "View Atmosphere →",
        },
        {
          icon: "pool",
          title: "Outdoor Pool & Pool Villas",
          desc: "An outdoor swimming pool for everyone, plus 9 private pool villas with a pool of their own.",
          link: "Explore Villas →",
        },
        {
          icon: "spa",
          title: "Thai Spa & Massage",
          desc: "Traditional Thai and foot massage to rejuvenate body and spirit after a day in the mountains.",
          link: "Discover Treatments →",
        },
        {
          icon: "bicycle",
          title: "Complimentary Bicycles",
          desc: "Free to borrow, for exploring Khao Yai's nature routes right from the resort gate.",
          link: "View Atmosphere →",
        },
      ],
    },
    gallery: {
      tagline: "Visual Journey",
      title: "Resort Gallery",
      desc: "Glimpse into the serene beauty, handcrafted architectural details, and natural splendor of Isaan Isan Resort Khaoyai.",
      filters: [
        { key: "all", label: "All Photos" },
        { key: "villas", label: "Villas & Rooms" },
        { key: "dining", label: "Dining & Food" },
        { key: "atmosphere", label: "Nature & Atmosphere" },
      ],
      captions: {
        atmosphere: "Isaan Isan Resort Khaoyai",
      },
    },
    map: {
      tagline: "Find Us",
      title: "Nestled in the Heart of Khao Yai",
      desc: "Set amid the green hillsides of Moo Si, Pak Chong — just 300 metres from the entrance to Khao Yai National Park, and close to the vineyards and the region's finest attractions.",
      getDirections: "Get Directions",
      openInMaps: "Open in Google Maps",
      addressLabel: "Our Address",
      hoursLabel: "Reception Hours",
      hoursValue: "Open 24 Hours, Daily",
      checkInLabel: "Check-In / Check-Out",
      checkInValue: "From 14:00 / Until 12:00",
    },
    footer: {
      desc: "Experience the ultimate fusion of contemporary Northeastern Thai artistry and luxury mountain sanctuary. Your private retreat amidst the verdant hills of Pak Chong awaits.",
      quickLinks: "Quick Links",
      accommodations: "Accommodations",
      contactLocation: "Contact & Location",
      links: {
        home: "Home",
        about: "About Resort",
        villas: "Villas & Suites",
        facilities: "Facilities & Dining",
        gallery: "Photo Gallery",
        offers: "Special Offers",
      },
      rights: "All Rights Reserved.",
      credit: "Contemporary Isan Boutique Resort • Pak Chong, Khao Yai",
    },
  },

  th: {
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับรีสอร์ต",
      villas: "วิลล่าและสวีท",
      facilities: "สิ่งอำนวยความสะดวกและร้านอาหาร",
      gallery: "แกลเลอรี",
      contact: "ติดต่อเรา",
      book: "จองห้องพัก",
      menuLabel: "เมนู",
    },
    hero: {
      slides: [
        {
          image: "/picture/51205307327_1cc96cb36e_h.jpg",
          subtitle: "ประตูสู่เขาใหญ่",
          title: "สัมผัสหัวใจอีสาน ณ ใจกลางเขาใหญ่",
          desc: "ห่างจากอุทยานแห่งชาติเขาใหญ่เพียง 300 เมตร จุดเริ่มต้นของการเดินทางที่ซึ่งวัฒนธรรมอีสานมีชีวิตอยู่ในทุกรายละเอียด — ตั้งแต่ก้าวแรกที่ล็อบบี้ ไปจนถึงคืนสุดท้ายในพูลวิลล่าส่วนตัว",
          cta: "สำรวจวิลล่า",
          ctaHref: "#villas",
          ctaStyle: "primary",
        },
        {
          image: "/picture/khao-yai-resort-big.webp",
          subtitle: "ประตูสู่วัฒนธรรมอีสาน",
          title: "พูลวิลล่าและสวีทส่วนตัว",
          desc: "ดื่มด่ำความหรูหราท่ามกลางขุนเขาเขียวขจี ในพูลวิลล่าส่วนตัวเพียง 9 หลัง พร้อมสระว่ายน้ำส่วนตัว งานสถาปัตยกรรมถักทอจากภูมิปัญญาจักสานไม้ไผ่และหัตถศิลป์อีสานแท้",
          cta: "จองที่พักของคุณ",
          ctaHref: "#booking",
          ctaStyle: "gold",
        },
        {
          image: "/picture/khao-yai-resort-concept.webp",
          subtitle: "ธรรมชาติรอต้อนรับคุณเสมอ",
          title: "มรดกอีสานแท้ กลางผืนป่าเขาใหญ่",
          desc: "ที่พักที่เล่าเรื่องอีสานผ่านทุกสัมผัส ลายผ้าขาวม้า ทรงกระติบข้าว ไก่แจ้แห่งอีสาน รสมืออีสาน และการดูแลด้วยใจแบบคนอีสาน",
          cta: "ค้นพบเรื่องราว",
          ctaHref: "#story",
          ctaStyle: "outline-light",
        },
      ],
    },
    booking: {
      checkIn: "เช็คอิน",
      checkOut: "เช็คเอาต์",
      guests: "ผู้เข้าพัก",
      guestOptions: ["1 ท่าน", "2 ท่าน"],
      submit: "ตรวจสอบห้องว่าง",
      resortName: "Isaan Isan Resort Khaoyai",
      months: [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
        "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
      ],
      weekdays: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
      selectCheckIn: "เลือกวันเช็คอิน",
      selectCheckOut: "เลือกวันเช็คเอาต์",
      clearDates: "ล้าง",
      done: "เสร็จสิ้น",
      nightsSelected: "คืน",
      prevMonth: "เดือนก่อนหน้า",
      nextMonth: "เดือนถัดไป",
    },
    about: {
      tagline: "ประตูสู่เขาใหญ่ — ประตูสู่วัฒนธรรมอีสาน",
      title: "Isaan Isan Resort Khaoyai — สัมผัสอีสาน ณ ใจกลางเขาใหญ่",
      lead: "ที่นี่ไม่ใช่แค่ที่พักในเขาใหญ่ แต่คือประตูที่พาคุณเข้าสู่หัวใจของวัฒนธรรมอีสาน",
      text: "Isaan Isan Resort Khaoyai ตั้งอยู่ท่ามกลางขุนเขาเขียวขจีของเขาใหญ่ ห่างจากทางเข้าอุทยานแห่งชาติเขาใหญ่ มรดกโลกโดยยูเนสโก เพียง 300 เมตร เป็นจุดเริ่มต้นที่พาคุณเข้าถึงทั้งธรรมชาติของเขาใหญ่ และมรดกวัฒนธรรมอีสานอันงดงามในเวลาเดียวกัน เราตั้งใจให้ทุกช่วงเวลาที่คุณพักที่นี่ คือการได้สัมผัสประสบการณ์อีสานแท้ — ณ ใจกลางเขาใหญ่",
      badgeLabel: "บูทีครีสอร์ตแห่งเขาใหญ่",
      features: [
        "พูลวิลล่าส่วนตัว 9 หลัง",
        "อาหารอีสานต้นตำรับ",
        "สปาและนวดแผนไทย",
        "หนังกลางแปลง & ตลาดนัดอีสาน",
      ],
    },
    story: {
      tagline: "ที่มาของการออกแบบ",
      title: "เรื่องเล่าจากกระติบข้าว ผ้าขาวม้า และไก่แห่งอีสาน",
      intro:
        "ทุกดีไซน์ที่ Isaan Isan Resort Khaoyai มีเรื่องราวเบื้องหลัง เราไม่ได้แค่นำวัฒนธรรมอีสานมา “ตกแต่ง” แต่ตั้งใจให้มัน “มีชีวิต” อยู่ในทุกพื้นที่",
      blocks: [
        {
          title: "กระติบข้าวเหนียว",
          text: "คือหัวใจของครัวอีสาน เป็นภาชนะที่เก็บความอบอุ่นและการแบ่งปันของครอบครัว เราจึงเลือกทรงกระติบมาเป็นรูปทรงของล็อบบี้ เพื่อให้อาคารหลังแรกที่คุณพบ บอกเล่าถึงการต้อนรับแบบอีสานอย่างแท้จริง",
        },
        {
          title: "ผ้าขาวม้า",
          text: "คือผ้าสารพัดประโยชน์ที่อยู่กับคนอีสานทุกช่วงชีวิต ทั้งใช้นุ่ง คาดเอว โพกหัว หรือปูรองนั่ง เรานำลาย สี และเนื้อผ้ามาไว้ในรายละเอียดของรีสอร์ท เพื่อเชื่อมโยงคุณกับวิถีชีวิตจริงของผู้คนที่นี่",
        },
        {
          title: "ไก่",
          text: "คือสัญลักษณ์ในโลโก้ของเรา และเป็นสัตว์ที่ผูกพันกับวิถีอีสานอย่างลึกซึ้ง ในอดีตแทบทุกบ้านอีสานเลี้ยงไก่ไว้ เพราะเลี้ยงง่าย ให้ทั้งไข่และเนื้อ เป็นแหล่งโปรตีนราคาย่อมเยาและรายได้เสริมของครอบครัว เสียงไก่ขันยามเช้าคือสัญญาณของวันใหม่และความขยันของคนอีสาน ไก่ยังเป็นที่มาของอาหารอีสานอันเลื่องชื่ออย่าง “ไก่ย่าง” ที่กินคู่กับข้าวเหนียวและส้มตำ อีกทั้ง “ไก่ชน” ยังเป็นภูมิปัญญาและวัฒนธรรมที่สืบทอดกันมารุ่นสู่รุ่น เราจึงเลือกไก่เป็นตัวแทนของความอบอุ่น ความอุดมสมบูรณ์ และหัวใจของบ้านอีสาน",
        },
      ],
      elementsTitle: "ทุกองค์ประกอบของรีสอร์ทถูกออกแบบเพื่อเล่าเรื่องอีสาน",
      elements: [
        {
          title: "สีดินเผาและลายทอพื้นถิ่น",
          desc: "โทนสีเทอราคอตต้าอบอุ่นและลายทอที่ได้แรงบันดาลใจจากเทคนิคการทอผ้าอีสาน สะท้อนภูมิปัญญาที่ส่งต่อกันมาหลายชั่วอายุคน",
        },
        {
          title: "อาหารรสมืออีสาน",
          desc: "ที่ห้องอาหาร Isaan Isan เราคัดวัตถุดิบท้องถิ่น ปรุงด้วยสูตรและเครื่องปรุงแบบอีสานแท้ ให้คุณได้ลิ้มรสวัฒนธรรมผ่านทุกจานอาหาร",
        },
        {
          title: "การบริการด้วยใจแบบคนอีสาน",
          desc: "เราดูแลแขกทุกคนเหมือนคนในครอบครัว ด้วยความจริงใจและอบอุ่นตามแบบฉบับชาวอีสาน",
        },
      ],
      closing:
        "เมื่อรวมสถาปัตยกรรม ลายผ้า สีสัน ไก่ อาหาร และการบริการเข้าด้วยกัน คุณจะไม่ได้แค่มาเที่ยวเขาใหญ่ แต่ได้สัมผัสวัฒนธรรมอีสานอย่างเต็มหัวใจ — ในที่เดียว",
    },
    villas: {
      tagline: "ห้องพัก",
      title: "วิลล่าและสวีท",
      desc: "ทุกวิลล่ารังสรรค์ขึ้นเพื่อมอบความเป็นส่วนตัวอย่างสมบูรณ์ พื้นที่ใช้สอยกว้างขวาง และวิวทิวเขาเขาใหญ่อันงดงาม",
      viewDetails: "ดูรายละเอียด",
      startingFrom: "เริ่มต้น",
      perNight: "/ คืน",
      amenities: "สิ่งอำนวยความสะดวกในวิลล่า:",
      bookThis: "จองวิลล่านี้",
    },
    facilities: {
      tagline: "ประสบการณ์ ณ Isaan Isan",
      title: "สิ่งอำนวยความสะดวกและร้านอาหาร",
      desc: "ปรนเปรอทุกสัมผัสด้วยกิจกรรมเพื่อสุขภาพที่คัดสรร อาหารพื้นถิ่นแท้ และพื้นที่พักผ่อนท่ามกลางทิวทัศน์",
      items: [
        {
          badge: "รสชาติแห่งอีสาน",
          icon: "dining",
          title: "ห้องอาหาร Isaan Isan",
          desc: "อาหารอีสานต้นตำรับจากวัตถุดิบท้องถิ่น ปรุงด้วยสูตรและเครื่องปรุงแบบอีสานแท้",
          link: "ดูเมนู →",
          href: "/menu",
        },
        {
          icon: "cinema",
          title: "หนังกลางแปลง",
          desc: "ค่ำคืนแห่งภาพยนตร์จอผ้าใบใต้แสงดาว กลางลานของรีสอร์ท บรรยากาศย้อนวันวานที่หาไม่ได้ในเมือง",
          link: "ชมบรรยากาศ →",
        },
        {
          icon: "market",
          title: "ค่ำคืนตลาดนัดอีสาน",
          desc: "ร้านหัตถกรรม การละเล่นไทยพื้นบ้าน และมุมถ่ายรูปประดับไฟสวยงาม",
          link: "ชมบรรยากาศ →",
        },
        {
          icon: "pool",
          title: "สระว่ายน้ำกลางแจ้ง และพูลวิลล่า",
          desc: "สระว่ายน้ำกลางแจ้งสำหรับทุกท่าน พร้อมพูลวิลล่าส่วนตัว 9 หลังที่มีสระเป็นของตัวเอง",
          link: "สำรวจวิลล่า →",
        },
        {
          icon: "spa",
          title: "สปาและนวดแผนไทย",
          desc: "นวดแผนไทยและนวดฝ่าเท้า ฟื้นฟูกายและใจหลังวันเดินทางท่ามกลางขุนเขา",
          link: "ดูทรีตเมนต์ →",
        },
        {
          icon: "bicycle",
          title: "จักรยานฟรี",
          desc: "ยืมได้ฟรี สำหรับปั่นชมเส้นทางธรรมชาติรอบเขาใหญ่ ออกจากประตูรีสอร์ทได้เลย",
          link: "ชมบรรยากาศ →",
        },
      ],
    },
    gallery: {
      tagline: "เส้นทางแห่งภาพ",
      title: "แกลเลอรีรีสอร์ต",
      desc: "สัมผัสความงามอันเงียบสงบ รายละเอียดสถาปัตยกรรมทำมือ และความงดงามของธรรมชาติแห่ง Isaan Isan Resort Khaoyai",
      filters: [
        { key: "all", label: "ภาพทั้งหมด" },
        { key: "villas", label: "วิลล่าและห้องพัก" },
        { key: "dining", label: "อาหารและเครื่องดื่ม" },
        { key: "atmosphere", label: "ธรรมชาติและบรรยากาศ" },
      ],
      captions: {
        atmosphere: "Isaan Isan Resort Khaoyai",
      },
    },
    map: {
      tagline: "พบเราได้ที่",
      title: "ซ่อนตัวอยู่ใจกลางเขาใหญ่",
      desc: "ตั้งอยู่ท่ามกลางเนินเขาเขียวขจีของตำบลหมูสี ปากช่อง ห่างจากทางเข้าอุทยานแห่งชาติเขาใหญ่เพียง 300 เมตร ใกล้ไร่องุ่นและสถานที่ท่องเที่ยวชั้นนำของภูมิภาค",
      getDirections: "นำทาง",
      openInMaps: "เปิดใน Google Maps",
      addressLabel: "ที่อยู่ของเรา",
      hoursLabel: "เวลาทำการต้อนรับ",
      hoursValue: "เปิดทุกวัน ตลอด 24 ชั่วโมง",
      checkInLabel: "เช็คอิน / เช็คเอาต์",
      checkInValue: "ตั้งแต่ 14:00 น. / ก่อน 12:00 น.",
    },
    footer: {
      desc: "สัมผัสการผสานที่ลงตัวระหว่างศิลปะอีสานร่วมสมัยกับที่พักผ่อนหรูหรากลางขุนเขา ที่พักส่วนตัวของคุณท่ามกลางเนินเขาเขียวขจีของปากช่องรอคุณอยู่",
      quickLinks: "ลิงก์ด่วน",
      accommodations: "ห้องพัก",
      contactLocation: "ติดต่อและที่ตั้ง",
      links: {
        home: "หน้าแรก",
        about: "เกี่ยวกับรีสอร์ต",
        villas: "วิลล่าและสวีท",
        facilities: "สิ่งอำนวยความสะดวกและร้านอาหาร",
        gallery: "แกลเลอรีภาพ",
        offers: "โปรโมชันพิเศษ",
      },
      rights: "สงวนลิขสิทธิ์",
      credit: "บูทีครีสอร์ตอีสานร่วมสมัย • ปากช่อง เขาใหญ่",
    },
  },
};
