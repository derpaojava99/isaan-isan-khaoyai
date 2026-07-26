import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description:
      "Contemporary Isan boutique pool-villa resort in Pak Chong, Khao Yai.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6efe2",
    theme_color: "#241d16",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
