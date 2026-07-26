import { company, sameAs, SITE_URL } from "@/data/company";

/**
 * Structured data. A Resort (LodgingBusiness) + WebSite.
 * No aggregateRating — there are no real, visible reviews yet, and faking one
 * risks a manual action (playbook §4D). The 4.9★ badge stays decorative.
 */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Resort",
        "@id": `${SITE_URL}/#resort`,
        name: company.name,
        description:
          "Contemporary Isan boutique pool-villa resort in Mu Si, Pak Chong — private pool villas, authentic Isan dining, and serene Khao Yai mountain views.",
        url: SITE_URL,
        telephone: company.phones[0].tel,
        email: company.email,
        priceRange: company.priceRange,
        image: [
          `${SITE_URL}/picture/khao-yai-resort-concept.webp`,
          `${SITE_URL}/picture/khao-yai-boutique-hotel-big.webp`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.district,
          addressRegion: company.address.city,
          postalCode: company.address.postalCode,
          addressCountry: company.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: company.geo.lat,
          longitude: company.geo.lng,
        },
        checkinTime: "14:00",
        checkoutTime: "12:00",
        petsAllowed: false,
        starRating: { "@type": "Rating", ratingValue: "5" },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Private Pool", value: true },
          { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
          { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
          { "@type": "LocationFeatureSpecification", name: "Butler Service", value: true },
        ],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        inLanguage: ["en", "th"],
        publisher: { "@id": `${SITE_URL}/#resort` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
