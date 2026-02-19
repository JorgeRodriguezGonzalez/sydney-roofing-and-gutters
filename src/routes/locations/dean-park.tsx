import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.746; // Dean Park
const AREA_LON = 150.854;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dean Park",
  slug: "dean-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roofing Experts Servicing Dean Park",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DEAN PARK",
    bullets: [
      "Tile and Colorbond roof repairs for established homes",
      "Storm damage assessment and emergency leak repairs",
      "Complete gutter cleaning and overflow solutions",
      "Full roof restorations with local trade warranties and fast turnaround",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Homes in Dean Park",
    paragraphs: [
      "Dean Park homes range from established brick properties to newer builds, and each requires careful attention to roofing materials, drainage and local weather patterns. Summer heat and storm activity can accelerate wear on tiles and flashings.",
      "We service every part of the suburb with roof repairs, gutter replacements, leak detection and full restoration packages designed for Western Sydney conditions. Whether you need urgent storm repairs or planned maintenance, we work quickly and clearly.",
      "From terracotta tile roofs to modern Colorbond installations, our team handles every aspect of roofing and guttering — backed by trade guarantees and transparent pricing from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and gutter work in Dean Park",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Resolve in Dean Park",
    subheading: "Older roofs and summer heat cycles often reveal weak points in tiles, valleys and gutter systems.",
    paragraphs: [
      "Cracked or slipped tiles, rusted valley irons, sagging gutters and blocked downpipes are the most common calls we receive in this area. Left unattended, these issues turn into ceiling leaks, water stains and structural damage.",
      "Western Sydney storm cells bring sudden heavy rain that tests every part of your roof and drainage system. If gutters overflow or water pools near the roofline, you need a targeted inspection and proper repairs.",
      "We deliver honest assessments, practical fixes and long-term solutions — whether that means repairing a few tiles, replacing gutters or planning a full roof restoration to extend the life of your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela D.",
    suburb: "Blacktown",
    quote:
      "They arrived on time, replaced the damaged tiles and cleared all the gutters within a few hours. The roof has been perfect through two storms now. Highly recommend for quick reliable work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
