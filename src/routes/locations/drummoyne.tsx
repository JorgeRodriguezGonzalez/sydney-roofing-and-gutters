import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.852; // Drummoyne
const AREA_LON = 151.155;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Drummoyne",
  slug: "drummoyne",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waterside Roofing Experts in Drummoyne",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DRUMMOYNE",
    bullets: [
      "Expert roofing for homes near the Parramatta River",
      "Tile, Colorbond and metal roof repairs and restorations",
      "Gutter cleaning and replacements for storm-prone areas",
      "Comprehensive inspections for coastal wind exposure and water damage",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Drummoyne Homes",
    paragraphs: [
      "Drummoyne sits on a peninsula surrounded by the Parramatta River, which means homes here face unique weather challenges. River breezes, salt exposure and regular rainfall can accelerate wear on roofs and gutters.",
      "We service both older established homes and modern renovations across Drummoyne, providing targeted repairs, full restorations and gutter upgrades that stand up to local conditions.",
      "From leak detection and tile replacements to Colorbond installations and valley repairs, our team delivers clean workmanship with clear communication at every step. We understand the importance of protecting your home from the elements.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and restoration in Drummoyne",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Repair in Drummoyne",
    subheading: "Proximity to water means roofs in Drummoyne need regular checks for wind damage and corrosion.",
    paragraphs: [
      "Homes near the river often deal with wind-driven rain, salt accumulation and leaf debris from surrounding trees. These factors contribute to blocked gutters, rusted downpipes and tile movement that can create leaks.",
      "If you notice water stains on ceilings, sagging gutters, cracked or loose tiles, or overflow during heavy rain, these are clear signs your roof system needs attention before the problem spreads.",
      "Our inspections identify hidden damage early. We provide preventative maintenance, targeted repairs and complete restoration options designed to keep your Drummoyne home watertight and protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca K.",
    suburb: "Five Dock",
    quote:
      "After years of overflow issues near the gutters, they came out and fixed everything properly. The team was punctual, polite and explained what needed doing. No more leaks, even after big storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
