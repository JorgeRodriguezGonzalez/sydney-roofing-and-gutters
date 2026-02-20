import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.939; // Moorebank
const AREA_LON = 150.938;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Moorebank",
  slug: "moorebank",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Moorebank Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MOOREBANK",
    bullets: [
      "Roof repairs and restorations for all roof types",
      "Gutter repairs, cleaning and replacement services",
      "Leak detection and waterproofing solutions",
      "Servicing Moorebank and surrounding suburbs with fast reliable quotes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services Across Moorebank and Surrounds",
    paragraphs: [
      "Moorebank features a diverse range of housing stock from weatherboard cottages to newer brick homes and unit developments, each with distinct roofing requirements and maintenance needs.",
      "We service all roof types including Colorbond metal, terracotta and concrete tiles, handling everything from minor leak repairs to complete roof restorations and gutter system upgrades.",
      "Our local team understands the weather patterns that affect roofs in this area, from heavy summer storms to autumn leaf fall near Georges River, delivering solutions built for long-term performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work in Moorebank",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Moorebank Properties",
    subheading: "Local homes face challenges from storm damage, aging materials and inadequate drainage systems.",
    paragraphs: [
      "Older homes in the area often have original gutters that are rusted, undersized or poorly aligned, leading to overflow during heavy rain and water pooling around foundations.",
      "Tiled roofs can develop cracked or slipped tiles after storms, while metal roofs may show signs of corrosion or fastener failure, particularly on north and west-facing sections exposed to direct sun.",
      "We provide thorough inspections, targeted repairs and complete restoration packages, ensuring your roof handles whatever Sydney weather brings while protecting your property investment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael T.",
    suburb: "Liverpool",
    quote:
      "The team fixed several leaks around our roof valleys and replaced the rusted gutters. Work was done quickly, no mess left behind, and the price was fair. Would definitely use them again.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
