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
  villas: {
    tagline: string;
    title: string;
    desc: string;
    /** Counts are per room TYPE, so they live here rather than on the cards —
        the grid splits three of the types into King and Twin variants, and a
        per-card count would read as double the real inventory. */
    roomTypes: { name: string; count: string }[];
    roomTypesTotal: string;
    viewDetails: string;
    startingFrom: string;
    perNight: string;
    amenities: string;
    bookThis: string;
  };
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
      villas: "Rooms & Suites",
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
          desc: "Just 300 metres from Khao Yai National Park, this is where your journey begins — and where Isan culture lives in every detail, from your first step into the lobby to your restful nights in a private room.",
          cta: "Explore Rooms",
          ctaHref: "#villas",
          ctaStyle: "primary",
        },
        {
          image: "/picture/khao-yai-resort-big.webp",
          subtitle: "Your Access to Isan Culture",
          title: "Four Room Types, 82 Rooms",
          desc: "Choose your way to unwind across 4 room types and 82 rooms — from warm garden-view rooms to Pool Houses with private pools, each designed with natural textures and authentic Isan craft.",
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
        "82 Rooms · 4 Room Types",
        "Authentic Isan Gastronomy",
        "Thai Spa & Traditional Massage",
        "Open-Air Cinema & Isan Night Market",
      ],
    },
    story: {
      tagline: "Our Design Story",
      title: "The Story of the Kratip, the Pha Khao Ma, and the Isan Rooster",
      intro:
        "We don't decorate with Isan culture. We let it live in every space.",
      blocks: [
        {
          title: "The Kratip",
          text: "The sticky-rice basket at the heart of every Isan kitchen, holding a family's warmth and the spirit of sharing. We shaped our lobby after it.",
        },
        {
          title: "The Pha Khao Ma",
          text: "The all-purpose cloth of Isan life — worn, wrapped, tied, or laid down to sit on. Its patterns and colors run throughout the resort.",
        },
        {
          title: "The Rooster",
          text: "The emblem in our logo. Nearly every Isan household kept chickens — the morning crow, kai yang with sticky rice, the old craft of fighting cocks. For us: warmth and abundance.",
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
      title: "Four Room Types, 82 Rooms",
      desc: "Choose from 4 room types across 82 rooms. Every room is designed with natural textures, Isan weaves, and a private balcony to bring you closer to the nature of Khao Yai.",
      roomTypes: [
        { name: "Superior", count: "50 rooms" },
        { name: "Deluxe", count: "14 rooms" },
        { name: "Grand Deluxe", count: "9 rooms" },
        { name: "Pool House", count: "9 villas" },
      ],
      roomTypesTotal: "82 rooms in total",
      viewDetails: "View Details",
      startingFrom: "Starting From",
      perNight: "/ night",
      amenities: "Room Amenities & Features:",
      bookThis: "Book This Room",
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
          desc: "Authentic Isan cuisine from local ingredients, prepared with traditional recipes and spices. 84 seats, indoor and outdoor.",
          link: "Explore Menu →",
          href: "/menu",
        },
        {
          icon: "cinema",
          title: "Open-Air Cinema",
          desc: "Starlit movie nights on a canvas screen in the resort grounds, a nostalgic atmosphere you won't find in the city.",
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
          title: "Outdoor Swimming Pool",
          desc: "An outdoor pool with a kids' pool alongside it, framed by Khao Yai mountain views.",
          link: "View Atmosphere →",
        },
        {
          icon: "spa",
          title: "Thai Spa & Massage",
          desc: "Traditional Thai and foot massage to rejuvenate body and spirit after a day in the mountains.",
          link: "Discover Treatments →",
        },
        {
          icon: "concierge",
          title: "More Services",
          desc: "Concierge, tour desk, laundry, meeting room, EV charging, and complimentary Wi-Fi throughout.",
          link: "Contact Us →",
          href: "#location",
        },
      ],
    },
    gallery: {
      tagline: "Visual Journey",
      title: "Resort Gallery",
      desc: "Glimpse into the serene beauty, handcrafted architectural details, and natural splendor of Isaan Isan Resort Khaoyai.",
      filters: [
        { key: "all", label: "All Photos" },
        { key: "villas", label: "Rooms & Villas" },
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
        villas: "Rooms & Suites",
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
      villas: "ห้องพัก",
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
          desc: "ห่างจากอุทยานแห่งชาติเขาใหญ่เพียง 300 เมตร จุดเริ่มต้นของการเดินทางที่ซึ่งวัฒนธรรมอีสานมีชีวิตอยู่ในทุกรายละเอียด — ตั้งแต่ก้าวแรกที่ล็อบบี้ ไปจนถึงคืนพักผ่อนในห้องพักส่วนตัว",
          cta: "สำรวจห้องพัก",
          ctaHref: "#villas",
          ctaStyle: "primary",
        },
        {
          image: "/picture/khao-yai-resort-big.webp",
          subtitle: "ประตูสู่วัฒนธรรมอีสาน",
          title: "ห้องพัก 4 ประเภท รวม 82 ห้อง",
          desc: "เลือกการพักผ่อนในแบบของคุณ จากห้องพัก 4 ประเภท 82 ห้อง — ตั้งแต่ห้องวิวสวนอบอุ่น ไปจนถึงพูลเฮาส์พร้อมสระว่ายน้ำส่วนตัว ทุกห้องออกแบบด้วยพื้นผิวธรรมชาติและงานหัตถศิลป์อีสานแท้",
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
        "ห้องพัก 82 ห้อง 4 ประเภท",
        "อาหารอีสานต้นตำรับ",
        "สปาและนวดแผนไทย",
        "หนังกลางแปลง & ตลาดนัดอีสาน",
      ],
    },
    story: {
      tagline: "ที่มาของการออกแบบ",
      title: "เรื่องเล่าจากกระติบข้าว ผ้าขาวม้า และไก่แห่งอีสาน",
      intro:
        "เราไม่ได้นำวัฒนธรรมอีสานมา “ตกแต่ง” แต่ตั้งใจให้มัน “มีชีวิต” อยู่ในทุกพื้นที่",
      blocks: [
        {
          title: "กระติบข้าวเหนียว",
          text: "ภาชนะคู่ครัวอีสานทุกบ้าน ที่เก็บความอบอุ่นและการแบ่งปันของครอบครัว เราจึงให้ล็อบบี้เป็นทรงกระติบ",
        },
        {
          title: "ผ้าขาวม้า",
          text: "ผ้าสารพัดประโยชน์ที่อยู่กับคนอีสานทุกช่วงชีวิต ทั้งนุ่ง คาดเอว โพกหัว หรือปูรองนั่ง ลายและสีของมันอยู่ทั่วรีสอร์ท",
        },
        {
          title: "ไก่",
          text: "สัญลักษณ์ในโลโก้ของเรา แทบทุกบ้านอีสานเลี้ยงไก่ — เสียงขันยามเช้า ไก่ย่างคู่ข้าวเหนียว และ “ไก่ชน” ที่สืบทอดรุ่นสู่รุ่น สำหรับเราคือความอบอุ่นและความอุดมสมบูรณ์",
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
      title: "ห้องพัก 4 ประเภท รวม 82 ห้อง",
      desc: "เรามีห้องพักให้เลือก 4 ประเภท รวม 82 ห้อง ทุกห้องออกแบบด้วยพื้นผิวธรรมชาติ ลายผ้าอีสาน และระเบียงส่วนตัว เพื่อให้คุณใกล้ชิดธรรมชาติเขาใหญ่มากที่สุด",
      roomTypes: [
        { name: "ซูพีเรีย", count: "50 ห้อง" },
        { name: "ดีลักซ์", count: "14 ห้อง" },
        { name: "แกรนด์ดีลักซ์", count: "9 ห้อง" },
        { name: "พูลเฮาส์", count: "9 หลัง" },
      ],
      roomTypesTotal: "รวมทั้งหมด 82 ห้อง",
      viewDetails: "ดูรายละเอียด",
      startingFrom: "เริ่มต้น",
      perNight: "/ คืน",
      amenities: "สิ่งอำนวยความสะดวกในห้องพัก:",
      bookThis: "จองห้องนี้",
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
          desc: "อาหารอีสานต้นตำรับจากวัตถุดิบท้องถิ่น ปรุงด้วยสูตรและเครื่องปรุงแบบอีสานแท้ 84 ที่นั่ง ทั้งในอาคารและกลางแจ้ง",
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
          title: "สระว่ายน้ำกลางแจ้ง",
          desc: "สระว่ายน้ำกลางแจ้งพร้อมสระเด็ก ท่ามกลางวิวขุนเขาเขาใหญ่",
          link: "ชมบรรยากาศ →",
        },
        {
          icon: "spa",
          title: "สปาและนวดแผนไทย",
          desc: "นวดแผนไทยและนวดฝ่าเท้า ฟื้นฟูกายและใจหลังวันเดินทางท่ามกลางขุนเขา",
          link: "ดูทรีตเมนต์ →",
        },
        {
          icon: "concierge",
          title: "บริการอื่นๆ",
          desc: "คอนเซียร์จ จัดทัวร์ท่องเที่ยว ซักรีด ห้องประชุม สถานีชาร์จรถไฟฟ้า (EV) และ Wi-Fi ฟรีทั่วโรงแรม",
          link: "ติดต่อเรา →",
          href: "#location",
        },
      ],
    },
    gallery: {
      tagline: "เส้นทางแห่งภาพ",
      title: "แกลเลอรีรีสอร์ต",
      desc: "สัมผัสความงามอันเงียบสงบ รายละเอียดสถาปัตยกรรมทำมือ และความงดงามของธรรมชาติแห่ง Isaan Isan Resort Khaoyai",
      filters: [
        { key: "all", label: "ภาพทั้งหมด" },
        { key: "villas", label: "ห้องพักและวิลลา" },
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
        villas: "ห้องพัก",
        facilities: "สิ่งอำนวยความสะดวกและร้านอาหาร",
        gallery: "แกลเลอรีภาพ",
        offers: "โปรโมชันพิเศษ",
      },
      rights: "สงวนลิขสิทธิ์",
      credit: "บูทีครีสอร์ตอีสานร่วมสมัย • ปากช่อง เขาใหญ่",
    },
  },
};
