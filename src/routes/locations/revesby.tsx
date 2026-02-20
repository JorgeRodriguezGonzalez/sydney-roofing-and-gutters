import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.948; // Revesby
const AREA_LON = 151.015;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Revesby",
  slug: "revesby",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Revesby Roofing and Gutter Services",
    titleTop: "ROOFING SERVICES",
    titleBottom: "REVESBY",
    bullets: [
      "Roof repairs for tile and Colorbond systems",
      "Leak detection and weatherproofing for established homes",
      "Gutter cleaning and replacement to handle Sydney storms",
      "Free inspections and quotes across the Georges River area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Homes in Revesby",
    paragraphs: [
      "Revesby combines a mix of established homes and newer builds, with roofing materials ranging from terracotta tiles to modern Colorbond steel. Many properties here were built decades ago and require regular inspection to stay weathertight.",
      "Located near the Georges River and surrounded by older suburbs, Revesby homes often face challenges from humidity, storms and age-related wear on roof tiles, valley flashing and gutter systems.",
      "We provide roof repairs, leak detection, gutter replacement and full restoration work — using materials designed for Sydney weather and backed by local expertise in the Georges River region.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and restoration work in Revesby",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Repair in Revesby",
    subheading: "Older homes and humid conditions mean roof systems need regular maintenance to avoid leaks and damage.",
    paragraphs: [
      "Cracked or slipped tiles, rusted valleys and corroded gutters are common in suburbs like Revesby where many homes were built in the 70s and 80s. Left unchecked, small problems turn into water damage and ceiling stains.",
      "Heavy Sydney storms can overwhelm gutters blocked by leaves and debris, leading to overflow and water pooling around the roofline. If downpipes are undersized or incorrectly positioned, the problem gets worse.",
      "We carry out detailed inspections to identify weak points in your roof system, then deliver targeted repairs, gutter upgrades or full restorations — so your home stays protected through every storm season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Padstow",
    quote:
      "Our roof was leaking after every storm and nobody could find the source. They arrived on time, identified the problem with the valley and fixed it properly. No more leaks and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
