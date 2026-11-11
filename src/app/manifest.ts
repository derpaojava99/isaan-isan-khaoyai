import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description:
      "Boutique Isan resort in Pak Chong, 300 m from Khao Yai National Park.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6efe2",
    theme_color: "#241d16",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
