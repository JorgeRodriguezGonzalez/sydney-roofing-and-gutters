import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.893; // Eveleigh
const AREA_LON = 151.193;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Eveleigh",
  slug: "eveleigh",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner Sydney Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EVELEIGH",
    bullets: [
      "Heritage roof repairs and restoration work",
      "Metal and tile roof maintenance for terrace and warehouse conversions",
      "Gutter replacements for heritage and modern buildings",
      "Fast service across Eveleigh, Redfern, Alexandria and Waterloo areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Eveleigh",
    paragraphs: [
      "Eveleigh sits at the heart of inner Sydney, blending heritage railway buildings with modern conversions and new residential developments — and each roof type requires different maintenance approaches.",
      "From terrace homes in neighbouring streets to converted warehouses and contemporary apartments, we handle roof repairs, leak detection, metal roofing and guttering work suited to inner-city conditions including pollution, limited access and mixed roof materials.",
      "Our team works with Colorbond, corrugated metal, tile and heritage slate — delivering clean site management, efficient repairs and long-lasting waterproofing for properties close to the CBD.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and metal roofing in Eveleigh",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Problems We Fix in Eveleigh",
    subheading: "Older buildings and tight access mean roofing issues need fast attention before they escalate.",
    paragraphs: [
      "Inner-city properties often face corrosion from pollution, poor drainage from ageing gutters, and leaks around shared walls or parapet flashings. Tight laneways and shared access add complexity to inspections and repairs.",
      "If you are noticing rust spots on metal roofs, water stains on ceilings, blocked box gutters, cracked terracotta tiles or overflow during storms, a proper inspection is the first step.",
      "We offer targeted leak repairs, metal roof replacements, gutter upgrades and full restoration options — keeping heritage character intact while ensuring modern waterproofing performance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa K.",
    suburb: "Redfern",
    quote:
      "Our converted warehouse had persistent leaks around the parapet. They identified the flashing issue, replaced the sections and sealed everything properly. No more water damage and the work was neat and fast.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
