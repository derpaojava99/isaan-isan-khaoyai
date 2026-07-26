/**
 * UI copy dictionary for the EN/TH toggle.
 * Components read `t.<section>.<key>` for the active language.
 */

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
    promo: string;
    promoPlaceholder: string;
    submit: string;
    available: string;
    resortName: string;
    duration: string;
    nights: string;
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
    confirm: string;
    modify: string;
    reservedRate: string;
  };
  about: {
    tagline: string;
    title: string;
    lead: string;
    text: string;
    badgeLabel: string;
    features: string[];
  };
  villas: { tagline: string; title: string; desc: string; viewDetails: string; startingFrom: string; perNight: string; amenities: string; bookThis: string };
  facilities: {
    tagline: string;
    title: string;
    desc: string;
    items: { badge?: string; icon: string; title: string; desc: string; link: string }[];
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
          subtitle: "Sensing The Embrace Of Khao Yai",
          title: "Isaan Isan Concept at Khaoyai",
          desc: "Where contemporary Isan artistry meets the tranquil wilderness of Khao Yai mountains. Experience refined comfort and timeless Thai hospitality.",
          cta: "Explore Villas",
          ctaHref: "#villas",
          ctaStyle: "primary",
        },
        {
          image: "/picture/khao-yai-resort-big.webp",
          subtitle: "Sanctuary of Refined Comfort",
          title: "Private Pool Villas & Suites",
          desc: "Immerse yourself in sumptuous luxury surrounded by lush hillsides and handcrafted architectural aesthetics.",
          cta: "Reserve Your Stay",
          ctaHref: "#booking",
          ctaStyle: "gold",
        },
        {
          image: "/picture/khao-yai-resort-concept.webp",
          subtitle: "Nature Awaits You Here, Always",
          title: "Authentic Isan Heritage",
          desc: "Unwind with organic farm-to-table gastronomy, traditional wellness therapies, and unforgettable sunset views.",
          cta: "Discover Story",
          ctaHref: "#about",
          ctaStyle: "outline-light",
        },
      ],
    },
    booking: {
      checkIn: "Check-In",
      checkOut: "Check-Out",
      guests: "Guests & Rooms",
      guestOptions: [
        "2 Adults, 1 Room",
        "2 Adults, 2 Rooms",
        "4 Adults (Family Villa)",
        "6 Adults, 2 Rooms",
      ],
      promo: "Promo Code",
      promoPlaceholder: "Enter Code (e.g. ISAN2026)",
      submit: "Check Availability",
      available: "Rooms Available!",
      resortName: "Isaan Isan Concept at Khaoyai",
      duration: "Total Duration",
      nights: "Night(s)",
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
      confirm: "Confirm & Book Now →",
      modify: "Modify Dates",
      reservedRate:
        "We have reserved our best rate for your stay. Click below to proceed to our secure booking gateway.",
    },
    about: {
      tagline: "Sensing The Embrace Of Khao Yai",
      title: "Welcome to Isaan Isan Concept at Khaoyai",
      lead: "A harmonious celebration of Northeastern Thai culture, traditional bamboo craft, and modern luxury living.",
      text: "Nestled amidst the lush verdant hillsides of Pak Chong, Isaan Isan Concept at Khaoyai offers travelers an unforgettable sanctuary. Our architecture is inspired by traditional Isan weaving techniques and local wisdom, seamlessly blended with private pool villas, lush tropical gardens, and tailored hospitality that treats every guest like family.",
      badgeLabel: "Boutique Resort of Khao Yai",
      features: [
        "Private Plunge Pools",
        "Authentic Isan Gastronomy",
        "Traditional Thai Wellness",
        "24/7 Personalized Butler",
      ],
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
      tagline: "Experience & Wellness",
      title: "Facilities & Dining",
      desc: "Indulge your senses with our curated wellness activities, authentic regional gastronomy, and scenic leisure spaces.",
      items: [
        {
          badge: "Taste of Isan",
          icon: "🍽️",
          title: "Khaoyai Isan Dining",
          desc: "Savor authentic Isan gastronomy and modern Thai fusion cuisine crafted from organic local farm ingredients and traditional spices.",
          link: "Explore Menu →",
        },
        {
          icon: "🌿",
          title: "Isan Heritage Spa",
          desc: "Rejuvenate body and spirit with ancient herbal compresses, aromatic oil therapies, and traditional Thai healing massage techniques.",
          link: "Discover Treatments →",
        },
        {
          icon: "🏊",
          title: "Jungle Pool Deck",
          desc: "Lounge by our scenic outdoor swimming pool surrounded by verdant tropical hillsides, refreshing mountain breezes, and sunset cocktails.",
          link: "View Atmosphere →",
        },
      ],
    },
    gallery: {
      tagline: "Visual Journey",
      title: "Resort Gallery",
      desc: "Glimpse into the serene beauty, handcrafted architectural details, and natural splendor of Isaan Isan Concept at Khaoyai.",
      filters: [
        { key: "all", label: "All Photos" },
        { key: "villas", label: "Villas & Rooms" },
        { key: "dining", label: "Dining & Food" },
        { key: "atmosphere", label: "Nature & Atmosphere" },
      ],
      captions: {
        atmosphere: "Isaan Isan Concept at Khaoyai",
      },
    },
    map: {
      tagline: "Find Us",
      title: "Nestled in the Heart of Khao Yai",
      desc: "Set amidst the verdant hillsides of Mu Si, Pak Chong — just moments from Khao Yai National Park, vineyards, and the region's finest attractions.",
      getDirections: "Get Directions",
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
          subtitle: "สัมผัสอ้อมกอดแห่งเขาใหญ่",
          title: "อีสาน อีสาน คอนเซปต์ ที่เขาใหญ่",
          desc: "ที่ซึ่งศิลปะอีสานร่วมสมัยมาบรรจบกับความสงบของขุนเขาเขาใหญ่ สัมผัสความสะดวกสบายอันประณีตและการต้อนรับแบบไทยที่ไม่มีวันจางหาย",
          cta: "ชมวิลล่า",
          ctaHref: "#villas",
          ctaStyle: "primary",
        },
        {
          image: "/picture/khao-yai-resort-big.webp",
          subtitle: "ที่พักผ่อนแห่งความสบายอันประณีต",
          title: "พูลวิลล่าและสวีทส่วนตัว",
          desc: "ดื่มด่ำกับความหรูหราท่ามกลางเนินเขาเขียวขจีและงานสถาปัตยกรรมทำมืออันวิจิตร",
          cta: "จองที่พักของคุณ",
          ctaHref: "#booking",
          ctaStyle: "gold",
        },
        {
          image: "/picture/khao-yai-resort-concept.webp",
          subtitle: "ธรรมชาติรอคุณอยู่ที่นี่ เสมอ",
          title: "มรดกอีสานแท้",
          desc: "ผ่อนคลายกับอาหารออร์แกนิกฟาร์มทูเทเบิล การบำบัดเพื่อสุขภาพแบบดั้งเดิม และวิวพระอาทิตย์ตกที่ไม่รู้ลืม",
          cta: "อ่านเรื่องราว",
          ctaHref: "#about",
          ctaStyle: "outline-light",
        },
      ],
    },
    booking: {
      checkIn: "เช็คอิน",
      checkOut: "เช็คเอาต์",
      guests: "ผู้เข้าพักและห้อง",
      guestOptions: [
        "ผู้ใหญ่ 2 ท่าน, 1 ห้อง",
        "ผู้ใหญ่ 2 ท่าน, 2 ห้อง",
        "ผู้ใหญ่ 4 ท่าน (วิลล่าครอบครัว)",
        "ผู้ใหญ่ 6 ท่าน, 2 ห้อง",
      ],
      promo: "รหัสส่วนลด",
      promoPlaceholder: "กรอกรหัส (เช่น ISAN2026)",
      submit: "ตรวจสอบห้องว่าง",
      available: "มีห้องว่าง!",
      resortName: "อีสาน อีสาน คอนเซปต์ ที่เขาใหญ่",
      duration: "ระยะเวลาเข้าพัก",
      nights: "คืน",
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
      confirm: "ยืนยันและจองเลย →",
      modify: "แก้ไขวันที่",
      reservedRate:
        "เราได้สำรองราคาที่ดีที่สุดไว้สำหรับการเข้าพักของคุณ คลิกด้านล่างเพื่อไปยังระบบจองที่ปลอดภัยของเรา",
    },
    about: {
      tagline: "สัมผัสอ้อมกอดแห่งเขาใหญ่",
      title: "ยินดีต้อนรับสู่ อีสาน อีสาน คอนเซปต์ ที่เขาใหญ่",
      lead: "การเฉลิมฉลองอันกลมกลืนของวัฒนธรรมอีสาน งานสานไม้ไผ่ดั้งเดิม และการใช้ชีวิตหรูหราสมัยใหม่",
      text: "ท่ามกลางเนินเขาเขียวชอุ่มของปากช่อง อีสาน อีสาน คอนเซปต์ ที่เขาใหญ่ มอบสถานที่พักผ่อนอันน่าจดจำแก่ผู้มาเยือน สถาปัตยกรรมของเราได้แรงบันดาลใจจากเทคนิคการทอผ้าอีสานดั้งเดิมและภูมิปัญญาท้องถิ่น ผสานอย่างลงตัวกับพูลวิลล่าส่วนตัว สวนเขตร้อนอันเขียวขจี และการต้อนรับที่ดูแลทุกท่านดั่งคนในครอบครัว",
      badgeLabel: "บูทีครีสอร์ตแห่งเขาใหญ่",
      features: [
        "สระว่ายน้ำส่วนตัว",
        "อาหารอีสานแท้",
        "สุขภาพและสปาแบบไทย",
        "บัตเลอร์ส่วนตัว 24 ชม.",
      ],
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
      tagline: "ประสบการณ์และสุขภาพ",
      title: "สิ่งอำนวยความสะดวกและร้านอาหาร",
      desc: "ปรนเปรอทุกสัมผัสด้วยกิจกรรมเพื่อสุขภาพที่คัดสรร อาหารพื้นถิ่นแท้ และพื้นที่พักผ่อนท่ามกลางทิวทัศน์",
      items: [
        {
          badge: "รสชาติแห่งอีสาน",
          icon: "🍽️",
          title: "ห้องอาหารอีสานเขาใหญ่",
          desc: "ลิ้มรสอาหารอีสานแท้และอาหารไทยฟิวชันสมัยใหม่ ปรุงจากวัตถุดิบออร์แกนิกจากฟาร์มท้องถิ่นและเครื่องเทศดั้งเดิม",
          link: "ดูเมนู →",
        },
        {
          icon: "🌿",
          title: "อีสาน เฮอริเทจ สปา",
          desc: "ฟื้นฟูกายและใจด้วยลูกประคบสมุนไพรโบราณ การบำบัดด้วยน้ำมันหอมระเหย และศาสตร์การนวดแผนไทยดั้งเดิม",
          link: "ดูทรีตเมนต์ →",
        },
        {
          icon: "🏊",
          title: "สระว่ายน้ำกลางป่า",
          desc: "พักผ่อนริมสระว่ายน้ำกลางแจ้งท่ามกลางเนินเขาเขตร้อนเขียวขจี สายลมภูเขาที่สดชื่น และค็อกเทลยามพระอาทิตย์ตก",
          link: "ชมบรรยากาศ →",
        },
      ],
    },
    gallery: {
      tagline: "เส้นทางแห่งภาพ",
      title: "แกลเลอรีรีสอร์ต",
      desc: "สัมผัสความงามอันเงียบสงบ รายละเอียดสถาปัตยกรรมทำมือ และความงดงามของธรรมชาติแห่ง อีสาน อีสาน คอนเซปต์ ที่เขาใหญ่",
      filters: [
        { key: "all", label: "ภาพทั้งหมด" },
        { key: "villas", label: "วิลล่าและห้องพัก" },
        { key: "dining", label: "อาหารและเครื่องดื่ม" },
        { key: "atmosphere", label: "ธรรมชาติและบรรยากาศ" },
      ],
      captions: {
        atmosphere: "อีสาน อีสาน คอนเซปต์ ที่เขาใหญ่",
      },
    },
    map: {
      tagline: "พบเราได้ที่",
      title: "ซ่อนตัวอยู่ใจกลางเขาใหญ่",
      desc: "ตั้งอยู่ท่ามกลางเนินเขาเขียวขจีของตำบลหมูสี ปากช่อง ห่างเพียงไม่กี่นาทีจากอุทยานแห่งชาติเขาใหญ่ ไร่องุ่น และสถานที่ท่องเที่ยวชั้นนำของภูมิภาค",
      getDirections: "นำทาง",
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
