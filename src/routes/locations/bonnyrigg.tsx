import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.887; // Bonnyrigg
const AREA_LON = 150.889;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bonnyrigg",
  slug: "bonnyrigg",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services in Bonnyrigg",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BONNYRIGG",
    bullets: [
      "Complete roof repairs and restorations across Bonnyrigg",
      "Professional tile and Colorbond roof repairs",
      "Gutter cleaning and replacement for all roof types",
      "Leak detection and weather damage repairs in Western Sydney conditions",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Bonnyrigg Homes",
    paragraphs: [
      "Bonnyrigg homes feature a blend of established housing and more recent builds, each requiring roofing solutions that match their age and construction. Western Sydney heat and seasonal storms place constant demands on roof materials and guttering systems.",
      "We specialise in roof repairs, restorations and full gutter upgrades across tile, Colorbond and metal roofs. Our work includes leak detection, valley repairs, ridge capping and downpipe replacements designed to handle intense summer heat and heavy rainfall.",
      "Every project begins with a thorough inspection and clear quotation. We deliver reliable repairs and long-term results, backed by proper workmanship and local knowledge of Bonnyrigg roofing challenges.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and gutter work in Bonnyrigg",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Bonnyrigg",
    subheading: "Western Sydney weather creates real pressure on roofs — from extreme summer heat to sudden storm damage.",
    paragraphs: [
      "Older tile roofs often develop cracked or broken tiles after years of heat cycling and storm impacts. Metal roofs face rust, fastener failure and seal degradation. Gutters fill with debris, sag under weight or pull away from fascia boards.",
      "When gutters overflow or water pools near foundations, the damage extends beyond the roof itself. Damp ceiling patches, stained walls and visible leaks during rain are all signs that repairs should not be delayed.",
      "We assess the full roof system — tiles or sheets, valleys, flashings, gutters and downpipes — then provide targeted repairs or complete restoration options depending on the condition and your budget.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Fairfield",
    quote:
      "Our tile roof had several cracked tiles and the gutters were pulling away. They replaced the damaged sections, resealed the valleys and fixed all the guttering. Great work and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
