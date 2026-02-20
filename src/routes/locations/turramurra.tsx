import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.737; // Turramurra
const AREA_LON = 151.130;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Turramurra",
  slug: "turramurra",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Turramurra Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "TURRAMURRA",
    bullets: [
      "Expert repairs for established roofs and heritage tiles",
      "Complete roof restorations tailored for Upper North Shore conditions",
      "Gutter cleaning and overflow solutions for leafy properties",
      "Leak detection and storm damage assessment across Turramurra homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Turramurra Properties",
    paragraphs: [
      "Turramurra homes feature mature gardens and established roof systems that need regular attention to handle the heavy rainfall and tree debris common to the Upper North Shore. From terracotta tiles to Colorbond metal roofs, local properties demand expert care.",
      "We provide targeted roof repairs, complete restorations and gutter maintenance designed specifically for properties surrounded by bushland and tall trees. Our team understands how seasonal storms and leaf accumulation affect roofs in this area.",
      "Whether you need urgent leak repairs, valley gutter replacement or preventive maintenance for an aging roof, we deliver clean workmanship backed by detailed inspections and clear communication at every stage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering services in Turramurra",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in Turramurra Homes",
    subheading: "Tree canopy coverage and older roof structures often lead to blocked gutters and water penetration problems.",
    paragraphs: [
      "Established properties in Turramurra frequently deal with clogged valleys, blocked downpipes and overflowing gutters caused by falling leaves, seed pods and bark. Left unchecked, this leads to internal water damage and ceiling stains.",
      "We also see aging terracotta tiles with hairline cracks, rusted valley irons, deteriorated ridge capping and failing flashing that allows water to seep into roof cavities during heavy downpours.",
      "Our inspection process identifies the root cause of leaks, gutter overflow and ventilation issues — then we provide repair or restoration options that protect your investment and restore long-term performance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca K.",
    suburb: "Pymble",
    quote:
      "After years of patching leaks, they rebuilt the valley gutters and replaced cracked tiles. The roof looks fantastic and we have had no issues through two big storms. Highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
