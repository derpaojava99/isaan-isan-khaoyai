import type { Localized } from "./villas";

export interface GalleryItem {
  image: string;
  category: "villas" | "dining" | "atmosphere";
  span2?: boolean;
  alt: Localized;
}

// Alt text doubles as the lightbox caption. Describe what is actually in the
// photo — the mockup's alts ("Pool villa balcony", "Cocktail by the pool")
// never matched these pictures.
export const galleryItems: GalleryItem[] = [
  {
    image: "/picture/51205307327_1cc96cb36e_h.jpg",
    category: "atmosphere",
    span2: true,
    alt: { en: "Woven bamboo architecture at the resort", th: "สถาปัตยกรรมไม้ไผ่สานของรีสอร์ต" },
  },
  {
    image: "/picture/181482831.jpg",
    category: "villas",
    alt: { en: "Boardwalk and garden stream between the room buildings", th: "ทางเดินไม้ริมลำธาร ระหว่างอาคารห้องพัก" },
  },
  {
    image: "/picture/311946224.jpg",
    category: "villas",
    alt: { en: "Garden stream with the Khao Yai hills behind", th: "ลำธารในสวน ฉากหลังคือแนวเขาเขาใหญ่" },
  },
  {
    image: "/picture/isaan-food-khao-yai.webp",
    category: "dining",
    alt: { en: "Authentic Isan food feast", th: "สำรับอาหารอีสานแท้" },
  },
  {
    image: "/picture/3667491be6fff31d8ca59e0c8319e705.webp",
    category: "atmosphere",
    alt: { en: "Stone courtyard and garden stream by the room buildings", th: "ลานหินและลำธารหน้าอาคารห้องพัก" },
  },
  {
    image: "/picture/04c5ca72ebcaccefe8be207df205c3a8.webp",
    category: "villas",
    span2: true,
    alt: { en: "Sun loungers beside the outdoor pool", th: "เตียงอาบแดดริมสระว่ายน้ำกลางแจ้ง" },
  },
  {
    image: "/picture/6c6c828bbe45c40b61c3a1751c4bc9aa.webp",
    category: "atmosphere",
    alt: { en: "Outdoor pool facing the room buildings", th: "สระว่ายน้ำกลางแจ้งหน้าอาคารห้องพัก" },
  },
  {
    image: "/picture/913fe8343661ec72f9062c4fd874bc48.webp",
    category: "dining",
    alt: { en: "Curved outdoor pool set in the garden", th: "สระว่ายน้ำกลางแจ้งทรงโค้งกลางสวน" },
  },
];
