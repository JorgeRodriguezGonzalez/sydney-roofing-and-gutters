import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.722; // Cherrybrook
const AREA_LON = 151.043;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cherrybrook",
  slug: "cherrybrook",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cherrybrook Roofing Specialists Since 2009",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHERRYBROOK",
    bullets: [
      "Expert roof repairs and tile replacement",
      "Colorbond roofing installations and restorations",
      "Professional gutter cleaning and downpipe repairs",
      "Complete leak detection and waterproofing for established homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Cherrybrook Homes",
    paragraphs: [
      "Cherrybrook features a mix of established family homes and quality construction that requires ongoing roof maintenance. With mature trees lining the streets, gutters need regular attention to prevent blockages and water damage during heavy Sydney storms.",
      "Our team provides comprehensive roofing services including tile roof repairs, metal roof installations, gutter replacements and complete restoration work. We understand the unique challenges of roofs in Cherrybrook, from leaf build-up to weather exposure.",
      "Whether your home needs minor repairs or a complete roof overhaul, we deliver quality workmanship backed by years of experience. Every job includes thorough inspection, detailed quotes and clean professional service from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs for family homes in Cherrybrook",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Cherrybrook",
    subheading: "Mature trees and established homes mean gutters fill quickly and older roofs need expert attention.",
    paragraphs: [
      "Tree coverage in Cherrybrook means gutters and valleys collect leaves, bark and debris faster than in many suburbs. When gutters overflow, water finds its way into walls, ceilings and foundations, causing expensive damage that could have been prevented.",
      "Many homes in the area have original roof installations that are now showing signs of wear. Cracked or loose tiles, rusted metal sections, perished flashing and deteriorating valleys all need addressing before minor issues become major problems.",
      "We provide targeted repairs for specific problem areas, complete gutter system upgrades, roof restoration services and full replacements when required. Our focus is on long-term protection and value rather than temporary fixes.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer K.",
    suburb: "West Pennant Hills",
    quote:
      "They replaced damaged sections on our tile roof and cleared years of debris from the gutters. The team was punctual, professional and left everything spotless. Highly recommend for anyone in the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
