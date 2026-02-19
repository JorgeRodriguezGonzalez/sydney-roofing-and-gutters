import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.882; // Chester Hill
const AREA_LON = 150.999;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Chester Hill",
  slug: "chester-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Chester Hill Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHESTER HILL",
    bullets: [
      "Roof repairs for Western Sydney heat and storms",
      "Tile, Colorbond and metal roofing installations",
      "Gutter cleaning and replacement for heavy rainfall",
      "Fast local service across Chester Hill and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Chester Hill Homes",
    paragraphs: [
      "Chester Hill experiences the full force of Western Sydney weather — intense summer heat, afternoon storms and temperature swings that put constant pressure on roofing materials and gutter systems.",
      "We provide roof repairs, restorations and complete installations for tile, Colorbond and metal roofs throughout Chester Hill, with a focus on durability and proper drainage that suits the local climate.",
      "From cracked tiles and rusted valleys to blocked gutters and leaking flashings, our team delivers thorough inspections and lasting repairs backed by workmanship guarantees and clear timelines.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Chester Hill properties",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Chester Hill",
    subheading: "Western Sydney heat accelerates wear on roofing materials, while storms test your drainage systems.",
    paragraphs: [
      "Extreme summer temperatures cause tiles to crack, metal to expand and sealants to fail. Add sudden afternoon storms and your roof system faces constant stress throughout the year.",
      "Many Chester Hill homes deal with blocked gutters from nearby trees, rusted valley irons, lifted ridge caps and deteriorating mortar that allows water entry during heavy downpours.",
      "We repair leaks, replace damaged sections, upgrade guttering for better flow and restore aging roofs to full weather protection — giving you confidence through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul R.",
    suburb: "Sefton",
    quote:
      "They re-bedded the entire ridge line and replaced several cracked tiles after the last heatwave. Work was clean, pricing was fair and the roof has been perfect through two big storms since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
