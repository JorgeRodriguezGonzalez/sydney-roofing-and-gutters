import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.923; // Kingsford
const AREA_LON = 151.228;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kingsford",
  slug: "kingsford",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kingsford Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KINGSFORD",
    bullets: [
      "Expert repairs for tile and metal roofs",
      "Full roof restorations and repainting services available",
      "Gutter cleaning and replacement for coastal conditions",
      "Prompt quotes and reliable service near UNSW and local streets",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Solutions for Kingsford Homes",
    paragraphs: [
      "Kingsford sits close to the coast, with a mix of older established homes and newer developments. Roofs here face salty air, wind exposure and occasional heavy downpours that can highlight weaknesses in tiles, gutters and flashing.",
      "We work across the suburb, from Anzac Parade to the quieter residential streets, providing roof repairs, leak detection, gutter upgrades and full restoration work when tiles or paint need replacing.",
      "Our team handles Colorbond, terracotta and concrete tile roofs with care, delivering clean installations, honest quotes and workmanship that stands up to local weather conditions year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering work in Kingsford",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Kingsford",
    subheading: "Proximity to the coast means your roof faces salty air and moisture that accelerate rust and tile wear.",
    paragraphs: [
      "We often see rusted gutters, cracked or slipped tiles, blocked downpipes and flashing that has lifted due to wind exposure. Left unchecked, these problems lead to water damage inside walls and ceilings.",
      "If you have noticed sagging gutters, overflow during storms, rust stains on walls or damp spots appearing after rain, your roof system needs attention before the damage spreads.",
      "We provide thorough inspections, targeted repairs and complete restoration packages — making sure your roof stays watertight, secure and ready for whatever Sydney weather delivers next.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa K.",
    suburb: "Randwick",
    quote:
      "They replaced our rusted gutters and fixed several cracked tiles quickly and professionally. No mess, no fuss. Highly recommend them for anyone in the eastern suburbs.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
