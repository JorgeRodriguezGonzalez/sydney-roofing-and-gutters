import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.001; // Ingleburn
const AREA_LON = 150.864;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ingleburn",
  slug: "ingleburn",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Ingleburn Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "INGLEBURN",
    bullets: [
      "Roof repairs for established homes across Ingleburn",
      "Tile replacements, metal roof repairs and leak fixes",
      "Gutter cleaning and replacement for older roof systems",
      "Prompt service backed by local knowledge and honest pricing",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs & Gutter Services in Ingleburn",
    paragraphs: [
      "Ingleburn is home to a mix of established properties and newer builds, many with roofs that need regular attention after decades of exposure to western Sydney weather conditions.",
      "We handle roof repairs, tile replacements, metal roof restoration and guttering upgrades across Ingleburn and surrounding areas like Macquarie Fields and Minto — working with Colorbond, terracotta tiles and concrete tile systems.",
      "Whether you need a quick leak repair or a full roof restoration, our team provides clear quotes, tidy workmanship and solutions built to handle summer heat, storms and heavy rainfall year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Ingleburn suburbs",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix Around Ingleburn",
    subheading: "Older roofs in western Sydney face unique challenges from heat, storms and age-related wear.",
    paragraphs: [
      "Prolonged exposure to heat can cause roof tiles to crack, metal sheets to expand and contract, and gutters to sag or pull away from fascia boards over time.",
      "Storm damage is another frequent issue — broken tiles, loose ridge caps, blocked valleys and overflowing gutters often go unnoticed until leaks appear inside the home.",
      "We inspect the full roof system, identify problem areas early, and provide repairs or restoration options that extend the life of your roof while keeping costs transparent and manageable.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "David L.",
    suburb: "Minto",
    quote:
      "Called them after noticing water stains on the ceiling. They came out fast, found cracked tiles and a blocked valley, fixed everything in one day. Great communication and fair price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
