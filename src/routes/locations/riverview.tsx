import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.827; // Riverview
const AREA_LON = 151.160;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Riverview",
  slug: "riverview",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Riverview Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RIVERVIEW",
    bullets: [
      "Expert repairs for heritage and modern roofing systems",
      "Tile roof restorations and Colorbond metal installations",
      "Guttering upgrades for mature tree-lined streets",
      "Detailed inspections and long-term maintenance solutions for riverside properties",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Riverview",
    paragraphs: [
      "Riverview combines riverside charm with mature trees and varied roofing styles, from federation terracotta tiles to modern Colorbond. Properties here require specialist care to handle both coastal weather patterns and leaf debris from established vegetation.",
      "Our team works throughout Riverview, Lane Cove and surrounding areas, providing roof repairs, restoration services and gutter maintenance tailored to local conditions. We understand how riverfront humidity and seasonal storms impact roof longevity.",
      "Whether you need leak detection, tile replacements, metal roof restorations or complete gutter upgrades, we deliver clean workmanship and transparent communication at every stage of the project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing services for Riverview homes near Lane Cove River",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Riverview Properties",
    subheading: "Riverside location and mature canopy trees create unique maintenance challenges for roofs and guttering systems.",
    paragraphs: [
      "Heavy leaf fall from established gums and native trees blocks valleys, gutters and downpipes throughout autumn and spring. Combined with sudden storm events, this leads to overflow, water pooling and potential structural damage.",
      "Older terracotta and slate roofs often show cracked tiles, ridge cap deterioration and valley rust, while metal roofs can suffer from coastal corrosion due to proximity to the harbour and river systems.",
      "We provide thorough inspections, targeted leak repairs, full restoration options and preventative gutter maintenance designed to protect your investment and keep water flowing safely away from foundations and walls.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer K.",
    suburb: "Lane Cove",
    quote:
      "After years of minor leaks we finally called them in for a full inspection. They replaced damaged tiles, repointed the ridge and cleared years of debris. The roof looks fantastic and no more water stains inside.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
