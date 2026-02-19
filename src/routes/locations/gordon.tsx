import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.756; // Gordon
const AREA_LON = 151.154;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Gordon",
  slug: "gordon",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Gordon Roof Repairs & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GORDON",
    bullets: [
      "Comprehensive roof repairs and heritage roof restoration",
      "Expert guttering solutions for established North Shore homes",
      "Tile replacement, metal roof repairs and leak detection",
      "Local service covering Gordon, Killara, Pymble and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Gordon Homes",
    paragraphs: [
      "Gordon sits in the heart of the North Shore, known for established homes, tree-lined streets and a mix of tile and metal roofs that require regular attention to stay watertight. Heavy rain and debris from mature trees can test even well-maintained roof systems.",
      "We provide targeted roof repairs, complete restoration work, guttering upgrades and proactive maintenance for Gordon residents. Whether your roof is terracotta tile, Colorbond steel or heritage slate, we deliver thorough inspections and lasting solutions.",
      "Our team understands the local building character and works efficiently to restore roof integrity, improve drainage flow and protect your home from water damage before it escalates into costly repairs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in Gordon NSW",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix Across Gordon",
    subheading: "Mature tree canopies and seasonal storms create unique challenges for North Shore roofing systems.",
    paragraphs: [
      "Overhanging branches deposit leaves and debris into gutters, valleys and downpipes. When these pathways block, water backs up under tiles, into ceilings and behind fascias — turning a minor blockage into serious water ingress.",
      "Older tile roofs in Gordon often show cracked or slipped tiles, worn mortar ridges and aging flashings. Metal roofs can develop rust spots, loose fasteners or failed sealants that allow leaks during heavy downpours.",
      "We address blocked gutters, sagging sections, leaking box gutters and internal water stains with efficient diagnostics and practical repair solutions. Prevention and early intervention save you money and preserve structural integrity.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca W.",
    suburb: "Killara",
    quote:
      "The team arrived on time, inspected the entire roof thoroughly and repaired several cracked tiles and a rusted gutter section. No leaks since the last storm. Very satisfied with the workmanship and professionalism.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
