import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.965; // Leppington
const AREA_LON = 150.808;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Leppington",
  slug: "leppington",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Growing Community Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LEPPINGTON",
    bullets: [
      "New estate roofing repairs and warranty assessments",
      "Colorbond and tile roof installations for modern homes",
      "Gutter cleaning and maintenance after construction",
      "Fast response for leak repairs and storm damage across Leppington and Camden district",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Leppington Homes",
    paragraphs: [
      "Leppington is one of the fastest growing areas in southwest Sydney, with new estates bringing modern homes and fresh roofing systems that still require proper care and occasional repairs.",
      "Whether your home is brand new or established, we provide roof repairs, gutter cleaning, leak detection and full installations using Colorbond and quality tile systems suited to western Sydney conditions.",
      "Our team understands the unique challenges of rapid development areas — from construction debris and settling issues to extreme summer heat and sudden storm downpours. We deliver reliable fixes with clear quotes and clean workmanship every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Modern roofing and gutter services in Leppington",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Leppington",
    subheading: "New homes can still face roofing problems — from installation defects to storm damage and settling cracks.",
    paragraphs: [
      "Rapid construction sometimes means overlooked details. We regularly fix poor flashing, inadequate sealing, blocked valleys and gutter systems that were not finished to proper standards during the building phase.",
      "Western Sydney weather brings extreme heat in summer and intense storm cells. Tiles can crack under thermal stress, Colorbond expands and contracts, and gutters overflow if downpipes are undersized or poorly positioned.",
      "We provide thorough inspections, warranty-friendly repairs and preventative maintenance so your roof performs as it should — whether the house is two months old or twenty years old.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura K.",
    suburb: "Austral",
    quote:
      "Our new build had gutter overflow from day one. They identified poor downpipe placement, fixed it properly and cleaned out all the leftover construction dust. Finally works the way it should.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
