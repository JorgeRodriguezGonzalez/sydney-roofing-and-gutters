import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.854; // Wareemba
const AREA_LON = 151.131;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wareemba",
  slug: "wareemba",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Wareemba Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WAREEMBA",
    bullets: [
      "Roofing services for traditional and modern homes",
      "Fast response for leak repairs and tile replacements",
      "Gutter cleaning and downpipe maintenance services",
      "Quality workmanship across Wareemba and surrounding Inner West suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Gutter Services for Wareemba Homes",
    paragraphs: [
      "Wareemba features a blend of traditional Federation homes and modern developments, each with unique roofing needs. Regular maintenance keeps these roofs functioning properly through Sydney weather patterns, from summer storms to winter rainfall.",
      "Our team provides comprehensive roofing services including tile repairs, metal roof restorations, Colorbond installations and complete gutter system upgrades. We understand how homes in this riverside suburb face specific challenges from humidity and changing weather conditions.",
      "Whether you need emergency leak repairs or preventative roof maintenance, we deliver reliable solutions with transparent pricing and quality materials. Every job receives the same attention to detail, from initial inspection through to final cleanup and follow-up.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter maintenance in Wareemba",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Wareemba",
    subheading: "Older roofs and blocked gutters can lead to water damage if not addressed early.",
    paragraphs: [
      "Many Wareemba properties feature terracotta tiles or metal roofing that may show signs of wear after years of exposure. Cracked tiles, rusted valleys and deteriorating flashings can all allow water penetration during heavy rain events.",
      "Blocked gutters filled with leaves and debris cause overflow issues, with water backing up into fascias and eaves. This creates damp patches inside ceilings and can damage interior walls if left unresolved over multiple rain cycles.",
      "We handle everything from minor tile replacements to full roof restorations and gutter system overhauls. Our inspection process identifies all issues upfront, giving you clear options and honest recommendations for repair or replacement work.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Concord",
    quote:
      "They fixed three broken tiles and cleared years of debris from our gutters. The team was efficient and left everything tidy. Very happy with the quality of work and reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
