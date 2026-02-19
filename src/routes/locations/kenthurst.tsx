import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.654; // Kenthurst
const AREA_LON = 151.001;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kenthurst",
  slug: "kenthurst",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kenthurst Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KENTHURST",
    bullets: [
      "Expert roofing solutions for acreage and rural properties",
      "Roof repairs, restorations and metal roof installations",
      "Gutter systems designed for larger homes and rural blocks",
      "Fast response for Kenthurst, Glenhaven and surrounding rural areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Kenthurst Properties",
    paragraphs: [
      "Kenthurst is one of the most peaceful rural pockets in northwest Sydney, with larger blocks, established trees and homes that often feature expansive rooflines and complex gutter systems.",
      "We specialise in roofing and guttering for acreage properties across Kenthurst, Glenhaven and surrounding areas. Our team handles Colorbond metal roofs, tile repairs, valley replacements and gutter upgrades designed for rural blocks that collect more leaf debris and face heavy storm exposure.",
      "From leak detection to full roof restoration, we deliver clean workmanship, competitive pricing and reliable service for every property type — whether you have a modern rural residence or a classic farmhouse.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering services for Kenthurst acreage homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Kenthurst and Surrounding Areas",
    subheading: "Larger properties and rural settings bring unique challenges for roof and gutter maintenance.",
    paragraphs: [
      "With mature eucalypts and native trees across many Kenthurst properties, gutters can quickly fill with bark, leaves and twigs. Left unchecked, this creates blockages, overflow and water damage to fascias, walls and interior ceilings.",
      "Metal roofs are popular in rural areas but can develop rust spots, loose fasteners or damaged flashings over time. Tile roofs may crack from fallen branches or storm debris, while valleys often become blocked and overflow during heavy rain.",
      "We provide thorough inspections, preventative maintenance plans and targeted repairs for every roof type. Whether you need a full restoration or a quick leak fix, we keep your Kenthurst property protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Robert K.",
    suburb: "Glenhaven",
    quote:
      "Our property has a huge roof and lots of trees. They cleaned the entire gutter system, replaced damaged valleys and sealed a few rust spots. Professional work and very reasonable pricing for the size of the job.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
