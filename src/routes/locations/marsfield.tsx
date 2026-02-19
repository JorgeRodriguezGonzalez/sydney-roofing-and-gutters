import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.778; // Marsfield
const AREA_LON = 151.110;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Marsfield",
  slug: "marsfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Marsfield Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MARSFIELD",
    bullets: [
      "Expert tile and metal roof repairs across Marsfield",
      "Storm damage assessment and fast leak detection",
      "Gutter cleaning and replacement for all roof types",
      "Local team serving Marsfield, Epping and West Ryde with reliable service",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Marsfield Homes and Units",
    paragraphs: [
      "Marsfield properties range from established brick homes to modern residential complexes, each with different roofing needs. Whether you have terracotta tiles, Colorbond metal or concrete roofing, proper maintenance ensures your roof handles Sydney weather year-round.",
      "Our team provides comprehensive roof repairs, restorations and gutter services throughout Marsfield. We address common issues like cracked tiles, rusted valleys, blocked downpipes and weathered flashing before they turn into costly interior damage.",
      "Every job starts with a thorough inspection. We explain what needs attention, provide transparent pricing and complete work efficiently. From minor leak repairs to full roof restoration, we deliver quality results backed by local experience.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration work in Marsfield",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in Marsfield Properties",
    subheading: "Marsfield homes face typical Sydney roofing challenges — storm damage, aging materials and gutter blockages.",
    paragraphs: [
      "Heavy rain events can expose weak points in older roofing systems. Cracked tiles allow water penetration, rusted gutters overflow onto fascias, and blocked valleys create pooling that accelerates deterioration. These problems worsen quickly if left unaddressed.",
      "Many Marsfield properties feature mature trees that deposit leaves and debris into gutters. Combined with seasonal storms, this creates drainage problems that can lead to water damage inside your home or unit.",
      "Our repair services target these issues directly. We replace damaged tiles, upgrade failing gutters, seal leaking valleys and clear all drainage systems. The result is a watertight roof ready for whatever Sydney weather brings next.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer K.",
    suburb: "West Ryde",
    quote:
      "After a storm damaged several tiles, they came out quickly to assess and repair everything. The work was completed in one day and the roof looks excellent. Professional service from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
