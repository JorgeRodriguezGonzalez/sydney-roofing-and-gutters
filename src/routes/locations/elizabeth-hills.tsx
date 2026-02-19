import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.889; // Elizabeth Hills
const AREA_LON = 150.837;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Elizabeth Hills",
  slug: "elizabeth-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Elizabeth Hills Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ELIZABETH HILLS",
    bullets: [
      "Built for Western Sydney heat and storms",
      "Metal roofing, tile repairs and leak fixes",
      "Gutter cleaning and replacement services",
      "Prompt inspections and clear quotes for every Elizabeth Hills property",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Elizabeth Hills Homes",
    paragraphs: [
      "Elizabeth Hills experiences the full force of Western Sydney weather — extreme summer heat, sudden storms and rapid temperature shifts that test every roof system.",
      "Whether you need metal roof repairs, tile replacements, leak detection or complete gutter overhauls, we deliver work that stands up to local conditions and lasts for years.",
      "Our team works across Colorbond, terracotta tiles and concrete tile roofs, providing transparent assessments and quality workmanship from start to finish for every Elizabeth Hills home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter services in Elizabeth Hills",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Elizabeth Hills",
    subheading: "Western Sydney heat and storm intensity create unique challenges for roofs and gutters.",
    paragraphs: [
      "Intense summer heat expands metal roofing and weakens tile adhesion, while sudden downpours overwhelm blocked or undersized gutters — leading to overflow, ceiling stains and structural water damage.",
      "Homes in Elizabeth Hills also face issues like cracked or loose tiles, rusted flashings, sagging gutter sections and blocked downpipes that turn minor problems into expensive repairs if left unchecked.",
      "We provide thorough roof inspections, targeted leak repairs, gutter cleaning and full restoration work to keep your home protected year-round, no matter what the weather brings.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew P.",
    suburb: "Hoxton Park",
    quote:
      "After years of patching leaks ourselves, we called these guys in. They found the real problem, replaced the damaged sections and cleaned all the gutters. No leaks since, even in heavy storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
