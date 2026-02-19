import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.607; // Clarendon
const AREA_LON = 150.790;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Clarendon",
  slug: "clarendon",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hawkesbury Roofing Specialists for Rural Properties",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLARENDON",
    bullets: [
      "Expert roofing for acreage homes and rural properties",
      "Storm damage repairs after severe weather events",
      "Metal roof installations and Colorbond upgrades",
      "Fast service for Clarendon, Kurmond and surrounding Hawkesbury areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing for Clarendon and the Hawkesbury Region",
    paragraphs: [
      "Clarendon properties face unique roofing challenges — larger roof areas, exposure to extreme western Sydney heat and severe storm systems rolling through the Hawkesbury valley.",
      "We specialise in roofing solutions for rural and semi-rural homes, working with metal roofing, Colorbond and tile systems that stand up to heat stress, wind damage and heavy rainfall.",
      "Our experienced team delivers high-quality roof repairs, complete restorations and new installations across Clarendon and neighbouring areas. We bring the right equipment, materials and know-how to every job.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Metal roofing installation on rural property in Clarendon",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in Clarendon",
    subheading: "Rural properties often deal with larger roof spans, storm damage and heat-related wear that urban homes rarely see.",
    paragraphs: [
      "Metal roofs expand and contract during hot western Sydney summers. Loose fasteners, cracked flashings and worn ridge capping can all develop over time, leading to leaks when the storms finally arrive.",
      "Tree debris, wind-driven rain and blocked gutters on larger properties mean water can pool in valleys or overflow before you notice. That water finds its way into ceilings, walls and structural timber.",
      "We provide thorough roof inspections, storm damage assessments and repair solutions designed for the conditions you face out here — not generic fixes that fail within a year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "David S.",
    suburb: "Kurmond",
    quote:
      "Storm took off part of our ridge capping and damaged flashings around the chimney. They came out quickly, repaired everything properly and checked the whole roof while they were up there. Very reliable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
