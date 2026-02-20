import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.870; // Rodd Point
const AREA_LON = 151.142;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Rodd Point",
  slug: "rodd-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rodd Point Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RODD POINT",
    bullets: [
      "Roof repairs and leak detection for peninsula homes",
      "Waterside roof restoration and protective coatings",
      "Gutter cleaning and overflow prevention systems",
      "Fast response for Five Dock, Haberfield and surrounding Inner West areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Rodd Point Homes",
    paragraphs: [
      "Rodd Point sits on a quiet peninsula where river breezes, moisture and older building stock mean roofs take a beating over time. Tile movement, flashing failures and gutter overflow are common issues that need early attention.",
      "We provide roof repairs, restoration work and guttering upgrades for homes across Rodd Point and the Inner West. Our focus is on durable solutions that handle local weather patterns and protect properties close to water.",
      "Whether you need leak detection, re-bedding and re-pointing, valley replacements or full gutter overhauls, we deliver clean work and lasting results with minimal disruption to your home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and guttering solutions in Rodd Point",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues for Rodd Point Properties",
    subheading: "Peninsula living brings moisture, wind exposure and older roofing systems that need regular care.",
    paragraphs: [
      "Homes near the river often face accelerated wear from humidity and salt-laden air. Rust spots, cracked tiles, failed sealants and blocked downpipes become bigger problems if left unchecked.",
      "If you have water stains on ceilings, gutters that overflow during heavy rain, loose ridge capping or visible rust on metal roofing components, an inspection can prevent expensive damage.",
      "We handle everything from targeted leak repairs and tile replacements to complete roof restorations and gutter realignments — keeping your roof watertight and ready for Sydney weather year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul T.",
    suburb: "Five Dock",
    quote:
      "Our terrace roof had leaks every winter and rust spreading across the gutters. They replaced the damaged sections and resealed everything properly. No leaks this year and the work was clean and professional.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
