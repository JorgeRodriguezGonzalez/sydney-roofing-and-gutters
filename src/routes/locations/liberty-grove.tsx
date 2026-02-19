import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.847; // Liberty Grove
const AREA_LON = 151.083;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Liberty Grove",
  slug: "liberty-grove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Liberty Grove Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LIBERTY GROVE",
    bullets: [
      "Repairs and installations for modern townhouses",
      "Tile and Colorbond roofing solutions",
      "Gutter cleaning and leaf guard installations",
      "Waterproofing and leak detection for townhouse complexes and homes",
    ],
  },

  introBlock: {
    heading: "Quality Roofing Services in Liberty Grove and the Inner West",
    paragraphs: [
      "Liberty Grove features modern residential developments with a mix of townhouses and apartments near the Parramatta River. These properties need reliable roofing and guttering to handle Sydney weather while maintaining their contemporary appeal.",
      "We provide roof repairs, restorations, installations and guttering upgrades designed for the architectural style and building standards common in this riverside suburb. Whether it is a Colorbond roof, concrete tiles or metal sheeting, we adapt to your property.",
      "From initial inspection to final cleanup, we focus on quality workmanship, transparent quotes and solutions that last — so your home stays protected from rain, heat and wear over time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in Liberty Grove",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Liberty Grove",
    subheading: "Modern housing near the river means different roofing challenges — from shared guttering to rapid water runoff.",
    paragraphs: [
      "Townhouse developments often have linked roof systems where one blocked gutter can affect multiple properties. Leaves, debris and inadequate drainage can cause overflow, damp walls and internal leaks during heavy rain.",
      "Colorbond roofs are popular in Liberty Grove but can suffer from loose fixings, rust spots or poor flashing around chimneys and skylights. Tile roofs may crack or shift, especially after storms or heat expansion.",
      "We diagnose these issues quickly and provide tailored repairs, gutter maintenance, valley upgrades and full restoration where needed — keeping your investment secure and watertight.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Drummoyne",
    quote:
      "Our townhouse had water pooling in the gutters every time it rained. The team cleared out years of debris, repaired damaged sections and now everything flows perfectly. Great service and very professional.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
