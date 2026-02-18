import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.072; // Ambarvale
const AREA_LON = 150.797;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ambarvale",
  slug: "ambarvale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Specialists Servicing Ambarvale Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "AMBARVALE",
    bullets: [
      "Fast response for storm damage and emergency repairs",
      "Tile and Colorbond roof repairs, restorations and installations",
      "Gutter repairs and replacements for effective water drainage",
      "Professional roof leak detection and full warranty on all workmanship",
    ],
  },

  introBlock: {
    heading: "Quality Roofing and Guttering Services Throughout Ambarvale",
    paragraphs: [
      "Ambarvale homes face the full force of southwestern Sydney weather — intense summer heat, sudden storms and heavy downpours that test every roof and gutter system across the suburb.",
      "We service all types of roofing for Ambarvale properties, including tile roofs, metal roofs, Colorbond installations and full restoration work for older homes showing wear from years of sun exposure and storm activity.",
      "Our team delivers reliable repairs, thorough inspections and honest advice on whether your roof needs a targeted fix or a complete restoration — all backed by clear communication and quality materials built to last.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and gutter work in Ambarvale",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Repair in Ambarvale",
    subheading: "Southwestern Sydney weather can be harsh — roofs take a beating from heat, storms and heavy rainfall events.",
    paragraphs: [
      "Cracked or broken tiles, rusted roof valleys, sagging gutters and blocked downpipes are common problems we see throughout Ambarvale — often caused by extreme temperature swings and debris buildup after storm season.",
      "If water is pooling on your roof, dripping through ceilings, or overflowing from gutters during rain, the damage will only get worse without professional attention and proper repairs.",
      "We handle everything from minor leak repairs and gutter realignment to full roof restorations and Colorbond replacements — ensuring your home stays protected through every season and weather event.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Campbelltown",
    quote:
      "Called them after a big storm left water coming through the bedroom ceiling. They were out the same week, found the cracked valley and fixed it properly. No more leaks and the price was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
