import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.760; // East Killara
const AREA_LON = 151.174;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "East Killara",
  slug: "east-killara",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing Services for East Killara",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EAST KILLARA",
    bullets: [
      "Roof repairs and restorations for established homes",
      "Expert tile and metal roof maintenance",
      "Gutter cleaning and downpipe upgrades for heavy rainfall",
      "Comprehensive leak detection and waterproofing solutions for North Shore properties",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for East Killara Homes",
    paragraphs: [
      "East Killara is home to many established properties with mature gardens and quality roofing systems that need regular care to perform at their best through every season.",
      "Our team provides roof repairs, restoration services and gutter maintenance tailored to the conditions of the lower North Shore, from heavy rainfall and debris accumulation to natural wear on tile and metal roofs.",
      "We work with all roofing materials including terracotta and concrete tiles, Colorbond steel and slate, delivering clean workmanship and practical advice from the first inspection through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof maintenance and repairs for East Killara homes",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in East Killara Properties",
    subheading: "Mature trees and seasonal rainfall often lead to blocked gutters and roof valleys that need attention.",
    paragraphs: [
      "The area is known for established gardens with native trees that provide shade but also drop leaves, bark and seeds onto roofing systems, particularly during autumn and after storms.",
      "Over time this debris can block gutters, valley irons and downpipes, causing water to pool and seep into fascias or roof spaces, leading to damp ceilings and rust damage.",
      "We address these issues with preventative cleaning, targeted repairs to cracked tiles or corroded flashing, and gutter replacements where needed, ensuring your roof stays watertight year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer L.",
    suburb: "Lindfield",
    quote:
      "They cleared years of debris from our roof valleys and replaced damaged tiles without fuss. The team was punctual and thorough, and we have not had any leaks since. Highly recommended.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
