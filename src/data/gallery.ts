import type { Localized } from "./villas";

export interface GalleryItem {
  image: string;
  category: "villas" | "dining" | "atmosphere";
  span2?: boolean;
  alt: Localized;
}

export const galleryItems: GalleryItem[] = [
  {
    image: "/picture/51205307327_1cc96cb36e_h.jpg",
    category: "atmosphere",
    span2: true,
    alt: { en: "Resort garden view at Khao Yai", th: "วิวสวนรีสอร์ตที่เขาใหญ่" },
  },
  {
    image: "/picture/181482831.jpg",
    category: "villas",
    alt: { en: "Villa interior with Isan silk decor", th: "ภายในวิลล่าตกแต่งผ้าไหมอีสาน" },
  },
  {
    image: "/picture/311946224.jpg",
    category: "villas",
    alt: { en: "Pool villa balcony", th: "ระเบียงพูลวิลล่า" },
  },
  {
    image: "/picture/isaan-food-khao-yai.webp",
    category: "dining",
    alt: { en: "Authentic Isan food feast", th: "สำรับอาหารอีสานแท้" },
  },
  {
    image: "/picture/3667491be6fff31d8ca59e0c8319e705.webp",
    category: "atmosphere",
    alt: { en: "Resort pathway at sunset", th: "ทางเดินรีสอร์ตยามพระอาทิตย์ตก" },
  },
  {
    image: "/picture/04c5ca72ebcaccefe8be207df205c3a8.webp",
    category: "villas",
    span2: true,
    alt: { en: "Grand pool villa bedroom", th: "ห้องนอนพูลวิลล่าหลังใหญ่" },
  },
  {
    image: "/picture/6c6c828bbe45c40b61c3a1751c4bc9aa.webp",
    category: "atmosphere",
    alt: { en: "Lobby with bamboo craft detail", th: "ล็อบบี้กับงานสานไม้ไผ่" },
  },
  {
    image: "/picture/913fe8343661ec72f9062c4fd874bc48.webp",
    category: "dining",
    alt: { en: "Cocktail by the pool", th: "ค็อกเทลริมสระว่ายน้ำ" },
  },
];
