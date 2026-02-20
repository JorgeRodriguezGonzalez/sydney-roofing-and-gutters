import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.731; // Thornleigh
const AREA_LON = 151.079;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Thornleigh",
  slug: "thornleigh",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Thornleigh Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "THORNLEIGH",
    bullets: [
      "Expert roof repairs for tile and Colorbond systems",
      "Gutter cleaning and replacement for leafy residential streets",
      "Leak detection and waterproofing solutions for all roof types",
      "Fast response times for homes throughout Thornleigh and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Thornleigh Homes",
    paragraphs: [
      "Thornleigh features established residential streets with a mix of older tile roofs and modern Colorbond installations. Regular maintenance is essential to prevent small issues from becoming expensive repairs, especially as many homes sit under mature tree canopies.",
      "Our team provides complete roofing and guttering services across Thornleigh, including roof repairs, tile replacements, gutter upgrades and full roof restorations. We work with terracotta, concrete tile and metal roofing systems common throughout the area.",
      "Whether you need urgent leak repairs, preventative maintenance or a complete roof overhaul, we deliver reliable workmanship with clear quotes, minimal disruption and attention to detail that protects your home for years ahead.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repair services in Thornleigh",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Thornleigh Properties",
    subheading: "Tree coverage and ageing roof materials can lead to blocked gutters, leaks and deteriorating roof surfaces.",
    paragraphs: [
      "Many Thornleigh homes have mature trees that deposit leaves, bark and seed pods into gutters and valleys. Without regular cleaning, this debris blocks downpipes, causes overflow during storms and can lead to water damage in ceilings, eaves and fascia boards.",
      "Older tile roofs often develop cracked or slipped tiles, worn ridge capping and damaged valleys. Metal roofs may show rust spots, loose screws or failed seals around flashings. Both issues allow water entry and accelerate deterioration if left untreated.",
      "We assess the full roof system during inspection, identify problem areas and recommend targeted repairs or restoration options. Our approach focuses on long-term durability, proper water flow and protecting your home from Sydney weather extremes.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Pennant Hills",
    quote:
      "After heavy rain we had water coming through the ceiling. The team found cracked tiles and cleared blocked valleys. Everything was fixed quickly and the roof has been perfect since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
