import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.878; // Cecil Hills
const AREA_LON = 150.842;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cecil Hills",
  slug: "cecil-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cecil Hills Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CECIL HILLS",
    bullets: [
      "Built for Western Sydney heat and storm conditions",
      "Tile and metal roof repairs, restorations and replacements",
      "Gutter cleaning and upgrade for summer downpours",
      "Fast response times across Cecil Hills and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Guttering Solutions for Cecil Hills Homes",
    paragraphs: [
      "Cecil Hills sits in the heart of Western Sydney, where roofs face extreme heat, powerful summer storms and rapid temperature swings that can crack tiles and warp metal over time.",
      "We work with local homeowners across Cecil Hills to repair leaking roofs, restore weathered tiles and metal roofs, clear blocked gutters and install new flashing where needed.",
      "Whether you have an older terracotta tile roof or modern Colorbond cladding, we deliver thorough inspections, quality repairs and long-term solutions that handle the toughest Western Sydney weather.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and gutter services in Cecil Hills",
  },

  problemsBlock: {
    heading: "Common Roof & Gutter Issues We Solve in Cecil Hills",
    subheading: "Western Sydney conditions put extra strain on roofing systems, from heat damage to storm overflow.",
    paragraphs: [
      "When temperatures hit 40 degrees in summer, roof materials expand and contract. Over the years this movement can crack tiles, loosen ridge caps and create gaps where water enters during storms.",
      "Gutters often struggle to handle intense downpours, especially if leaves, debris or sagging sections restrict flow. Overflow leads to staining, fascia rot and interior leaks if left unchecked.",
      "We provide detailed roof inspections, targeted repairs for cracked or damaged tiles, gutter cleaning and realignment, and full restoration packages for homes showing signs of wear and weather damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul D.",
    suburb: "Hoxton Park",
    quote:
      "Our roof was leaking every time it rained hard. They found the problem quickly, replaced broken tiles and re-sealed everything. No leaks since — great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
