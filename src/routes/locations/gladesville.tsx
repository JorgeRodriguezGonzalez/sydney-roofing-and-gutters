import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.831; // Gladesville
const AREA_LON = 151.131;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Gladesville",
  slug: "gladesville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Gladesville Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLADESVILLE",
    bullets: [
      "Expert roof repairs for established homes",
      "Tile and metal roof restoration services",
      "Professional gutter cleaning and replacement",
      "Storm damage inspections and rapid leak repairs throughout the area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Gladesville Properties",
    paragraphs: [
      "Gladesville features a mix of established homes, heritage properties and mid-century builds — many with older roofing systems that need careful maintenance or complete restoration to handle Sydney weather.",
      "From terracotta and concrete tiles to older metal roofs, we deliver roof repairs, leak detection, restorations and guttering upgrades designed for local conditions including summer storms and tree debris.",
      "Our qualified team works across all roof types with attention to detail, clean site management and honest advice — ensuring your property stays protected through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and guttering in Gladesville",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Gladesville Homes",
    subheading: "Older roofs and mature trees mean regular maintenance is essential to prevent expensive water damage.",
    paragraphs: [
      "Many Gladesville homes have roofs that are decades old — tiles can crack or slip, metal sections can rust through, and valleys often develop leaks where two roof planes meet.",
      "Mature trees drop leaves, twigs and seed pods that block gutters and downpipes. When gutters overflow, water finds its way into eaves, walls and ceilings, causing rot and stains.",
      "We provide thorough roof inspections, targeted repairs, complete restorations and gutter upgrades — fixing the root cause so you avoid repeat call-outs and ongoing water issues.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Hunters Hill",
    quote:
      "They restored our terracotta roof and replaced all the rusted gutters. The work was completed on time and the house looks fantastic — no more leaks after heavy rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
