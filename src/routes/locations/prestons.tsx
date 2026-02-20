import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.946; // Prestons
const AREA_LON = 150.869;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Prestons",
  slug: "prestons",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Prestons Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PRESTONS",
    bullets: [
      "Complete roof repairs and restorations for all home types",
      "Metal and tile roof installations and maintenance",
      "Gutter cleaning and replacement for Western Sydney weather",
      "Professional service across Prestons and surrounding Liverpool areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services Throughout Prestons",
    paragraphs: [
      "Prestons combines established family homes with newer developments, creating diverse roofing needs from aging tile roofs to modern Colorbond installations. Each property requires specific attention to ensure long-term protection against our Western Sydney climate.",
      "Our team services all roof types across Prestons, from leak detection and emergency repairs to full roof restorations and gutter system upgrades. We understand how extreme summer heat and sudden storm activity impact local roofs.",
      "Using quality materials and proven techniques, we deliver reliable roofing solutions that protect your home while maintaining its appearance. Every job includes thorough inspection, clear communication, and workmanship that stands behind our reputation.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roofing installations and repairs in Prestons",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve for Prestons Properties",
    subheading: "Western Sydney conditions create unique challenges for roofs — heat stress, storm damage, and accelerated wear.",
    paragraphs: [
      "Extreme temperatures in Prestons cause metal roofs to expand and contract, loosening fasteners and creating potential leak points. Tile roofs crack under heat stress, while gutters suffer from thermal movement and debris accumulation.",
      "Storm activity brings heavy rainfall that overwhelms blocked gutters and exposes weak spots in valley flashing. We regularly see water pooling, ceiling stains, and damaged fascia boards that result from inadequate drainage systems.",
      "Our comprehensive approach addresses both immediate repairs and underlying causes. We inspect the entire roof system, identify vulnerabilities, and implement solutions that withstand local weather patterns for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle K.",
    suburb: "Casula",
    quote:
      "They replaced our old rusted gutters and repaired damaged sections of the tile roof. The team was efficient and the work area was left spotless. Very happy with the result and the pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
