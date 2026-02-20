import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.069; // Spring Farm
const AREA_LON = 150.721;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Spring Farm",
  slug: "spring-farm",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Spring Farm Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SPRING FARM",
    bullets: [
      "Roof inspections for newly built homes",
      "Colorbond repairs, leak detection and tile replacements",
      "Gutter cleaning and overflow solutions for summer storms",
      "Local expertise across new estates and established properties in Spring Farm",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Spring Farm",
    paragraphs: [
      "Spring Farm has grown rapidly over the past decade with modern estates and family-focused developments. New homes can still experience roofing defects during the settling period, while older properties face wear from intense summer heat and storm exposure.",
      "We work across Spring Farm and the wider Camden region providing roof repairs, leak detection, gutter cleaning and Colorbond installations. Our team understands the local climate challenges including extreme heat in January and sudden downpours during storm season.",
      "Whether you need post-construction checks, ongoing maintenance or urgent leak repairs, we deliver practical solutions with transparent pricing and reliable service from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Spring Farm properties",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Spring Farm",
    subheading: "New estates and established homes both face unique roofing challenges in the Macarthur climate.",
    paragraphs: [
      "Newer homes in Spring Farm sometimes reveal poor flashing work, inadequate sarking or incorrect valley installation once the builder warranty expires. Older properties may have cracked tiles, rusted Colorbond sheets or clogged gutters from surrounding trees and debris.",
      "During summer storms, inadequate downpipe sizing or blocked gutter systems can lead to overflow and water pooling around foundations. Left unchecked, these issues cause structural damage, ceiling stains and long-term maintenance headaches.",
      "We provide detailed inspections, targeted repairs and preventative maintenance programs designed for local conditions. From minor flashing adjustments to complete gutter replacements, we keep your roof watertight and performing as it should.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Gregory Hills",
    quote:
      "Our Colorbond roof developed leaks around the flashing after two years. The team identified the issue quickly, fixed it properly and checked everything else while they were up there. Great service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
