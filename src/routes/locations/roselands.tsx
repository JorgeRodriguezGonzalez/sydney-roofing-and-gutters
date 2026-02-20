import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.930; // Roselands
const AREA_LON = 151.075;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Roselands",
  slug: "roselands",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing Services for Roselands Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ROSELANDS",
    bullets: [
      "Tile and Colorbond roof repairs for local conditions",
      "Expert leak detection and waterproofing solutions",
      "Complete gutter cleaning and replacement services",
      "Fast response times and reliable workmanship throughout Roselands and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Quality Roofing and Guttering Specialists Serving Roselands",
    paragraphs: [
      "Roselands homes face the typical challenges of inner-western Sydney roofing — summer heat, heavy rainfall and the wear that comes with established residential properties that need regular maintenance and expert repairs.",
      "Whether you have an older tile roof requiring restoration, metal roofing showing signs of rust, or gutters that overflow during storms, we deliver practical solutions tailored to the local housing stock and weather patterns.",
      "Our services cover everything from minor leak repairs and flashing work to complete roof restorations and gutter upgrades — ensuring your home stays protected year-round with clear quotes and honest advice.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work on homes in Roselands",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Roselands Residents",
    subheading: "Older homes and changing weather patterns mean roofs and gutters need more attention than ever before.",
    paragraphs: [
      "Many properties in the area feature original terracotta or concrete tiles that have been in place for decades — leading to cracked tiles, worn valleys and flashings that no longer provide adequate weather protection.",
      "Heavy downpours quickly expose blocked gutters, sagging sections and inadequate downpipe systems, causing water to back up into eaves or overflow onto walls and pathways below.",
      "We provide thorough inspections, targeted repairs and full restoration packages designed to extend roof life and prevent costly water damage — with options for re-bedding, re-pointing, rust treatment and complete gutter replacement.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Belmore",
    quote:
      "They fixed persistent leaks around the valley and replaced rusted gutters that had been causing problems for years. The job was completed quickly and the difference is huge — no more water stains.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
