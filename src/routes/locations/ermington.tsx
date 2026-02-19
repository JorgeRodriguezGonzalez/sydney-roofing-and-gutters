import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.816; // Ermington
const AREA_LON = 151.058;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ermington",
  slug: "ermington",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Ermington Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ERMINGTON",
    bullets: [
      "Roof repairs and restoration for period homes",
      "Colorbond and tile roof maintenance across all home styles",
      "Gutter replacement and leak repairs for older properties",
      "Fast response times and transparent quotes for Ermington residents",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering Work Throughout Ermington",
    paragraphs: [
      "Ermington has a diverse mix of established homes and newer builds, each with different roofing needs. Older tile roofs often require repairs or restoration, while more recent installations benefit from regular maintenance to prevent issues before they escalate.",
      "Whether you need a small leak fixed, damaged tiles replaced, or complete gutter upgrades, we handle every job with the same attention to detail. We work with terracotta tiles, Colorbond steel, and metal roofs common throughout the area.",
      "Our team focuses on long-lasting repairs, honest advice, and minimal disruption to your property. From first contact to final clean-up, we keep you informed and deliver work that stands up to Sydney weather conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and guttering work in Ermington",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in Ermington",
    subheading: "Older roofs and changing weather patterns mean maintenance cannot be ignored without risking further damage.",
    paragraphs: [
      "Many homes in Ermington have roofs that are decades old. Cracked or slipped tiles, rusted valleys, and worn flashing are typical problems that allow water to penetrate and cause internal damage if left unaddressed.",
      "Blocked or sagging gutters are another frequent issue, especially after storms or during autumn when debris accumulates. Poor drainage leads to overflow, damp walls, and even foundation concerns over time.",
      "We inspect every roof thoroughly, identify current and potential problems, and provide clear options for repair or replacement. Our goal is to extend the life of your roof while preventing costly water damage inside your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Rydalmere",
    quote:
      "They repaired our old tile roof quickly and explained everything clearly. No surprise costs and the quality of work was excellent. Would recommend them to anyone in the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
