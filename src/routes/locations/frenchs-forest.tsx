import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.749; // Frenchs Forest
const AREA_LON = 151.231;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Frenchs Forest",
  slug: "frenchs-forest",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services in Frenchs Forest",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FRENCHS FOREST",
    bullets: [
      "Comprehensive leak repairs and roof restorations for local homes",
      "Tile, Colorbond and metal roof specialists",
      "Gutter cleaning and replacement to prevent overflow",
      "Fast response across Frenchs Forest and the Northern Beaches region",
    ],
  },

  introBlock: {
    heading: "Reliable Roof and Gutter Services for Frenchs Forest Homes",
    paragraphs: [
      "Frenchs Forest combines established family homes with modern developments across leafy streets and sloping terrain. These conditions create unique roofing challenges from storm exposure and tree debris to ageing tile systems that need professional attention before small cracks become costly leaks.",
      "Our team specialises in roof repairs, full restorations and guttering solutions designed for the local climate. We work with Colorbond, terracotta tiles and metal roofing to deliver durable results that protect your property through heavy rain and coastal weather patterns.",
      "From valley repairs to complete gutter upgrades, we focus on transparent quotes, clean workmanship and long-lasting results. Every job is completed with attention to detail and backed by local knowledge of Frenchs Forest conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering work in Frenchs Forest",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Frenchs Forest",
    subheading: "Tree coverage and storm activity can quickly turn minor gutter blockages into major problems.",
    paragraphs: [
      "Established eucalyptus and native trees throughout Frenchs Forest provide shade but also drop leaves, bark and seed pods that clog gutters and valleys. When downpipes block, water backs up and can enter roof spaces or damage fascias and eaves.",
      "We also see cracked or slipped tiles from storm damage, rusted Colorbond sections from moisture exposure, and ageing terracotta roofs that need full restoration before the next wet season. Ignoring these issues leads to interior water damage and expensive repairs.",
      "Our inspections identify problem areas early and provide targeted solutions, whether that means replacing damaged sections, upgrading gutter capacity or restoring the entire roof system to protect your home for years ahead.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel T.",
    suburb: "Belrose",
    quote:
      "They replaced our entire tile roof after years of leaks and damage. The team was professional, efficient and left the site spotless. Highly recommend their work in the Northern Beaches area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
