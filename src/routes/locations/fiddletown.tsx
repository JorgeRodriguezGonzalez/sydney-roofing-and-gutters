import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.581; // Fiddletown
const AREA_LON = 151.046;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Fiddletown",
  slug: "fiddletown",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Fiddletown Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FIDDLETOWN",
    bullets: [
      "Roof repairs for rural and bushland properties",
      "Storm damage assessment and leak detection services",
      "Gutter cleaning and protection for tree-surrounded homes",
      "Metal roofing, tile repairs and restoration work across the Central Coast region",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Fiddletown Properties",
    paragraphs: [
      "Fiddletown sits within a bushland setting where tree debris, storms and seasonal weather put extra pressure on roofing systems. Properties in this area often face unique maintenance challenges that require experienced attention.",
      "We service metal roofs, Colorbond installations, tiled roofs and older structures throughout the Central Coast corridor. Our work covers leak repairs, storm damage restoration, valley maintenance and complete gutter system upgrades.",
      "Every job begins with a thorough roof inspection to identify problem areas before they cause water damage or structural issues. We provide clear quotes and reliable timelines for homeowners across Fiddletown and surrounding localities.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and maintenance for Fiddletown homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Fiddletown",
    subheading: "Bushland properties face constant exposure to leaf litter, branch falls and storm-driven debris accumulation.",
    paragraphs: [
      "Overhanging vegetation fills gutters quickly and creates blockages in downpipes and valleys. When heavy rain arrives, water backs up under tiles or overflows into fascia boards, leading to internal leaks and structural rot.",
      "Older metal roofs in the area may show corrosion from humidity and trapped moisture. Tiles can crack under falling branches or shift during strong winds, creating entry points for water during the next downpour.",
      "We assess the full roof system including valleys, flashing, gutters and downpipes to provide targeted repairs or complete restoration. Our approach focuses on long-term protection and minimal ongoing maintenance for property owners.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen H.",
    suburb: "Somersby",
    quote:
      "After years of blocked gutters and minor leaks, they sorted everything in one visit. The valley repairs were exactly what we needed. Great communication and very reasonable pricing for the Central Coast area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
