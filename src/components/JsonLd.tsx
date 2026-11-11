import { company, OG_IMAGE, sameAs, SITE_URL } from "@/data/company";

/**
 * Structured data. A Resort (LodgingBusiness) + WebSite.
 * No aggregateRating — there are no real, visible reviews yet, and faking one
 * risks a manual action (playbook §4D). The 4.9★ badge stays decorative.
 * No starRating either: 4.9 is a guest-review score, not an official star
 * classification, and the resort has not given us one.
 * Amenities list only what the site states; add one only once it is confirmed.
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
          "Boutique Isan resort 300 metres from Khao Yai National Park in Moo Si, Pak Chong. It has 82 rooms across 4 room types: Superior, Deluxe, Grand Deluxe and 9 Pool House villas with private pools. Guests enjoy authentic Isan dining at the resort restaurant and treatments at the Isaan Sumbai spa.",
        url: SITE_URL,
        numberOfRooms: 82,
        telephone: company.phones[0].tel,
        email: company.email,
        priceRange: company.priceRange,
        image: [
          `${SITE_URL}${OG_IMAGE}`,
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
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Outdoor Swimming Pool", value: true },
          { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
          { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
          { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
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
