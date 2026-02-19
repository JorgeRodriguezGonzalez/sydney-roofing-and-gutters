import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.036; // Gymea
const AREA_LON = 151.086;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Gymea",
  slug: "gymea",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Gymea Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GYMEA",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Comprehensive leak detection and gutter maintenance services",
      "Storm damage assessments and insurance work assistance",
      "Reliable service for established homes and modern properties across Gymea",
    ],
  },

  introBlock: {
    heading: "Quality Roofing & Guttering Services for Gymea Homes",
    paragraphs: [
      "Gymea features a mix of established family homes and modern properties, many with larger roof areas and mature landscaping that require regular maintenance to stay in top condition.",
      "Our team provides comprehensive roofing services across Gymea, from tile repairs and Colorbond installations to gutter cleaning and leak repairs that protect your home year-round.",
      "We work with all roof types common to the area, delivering thorough inspections, quality repairs and professional installations backed by clear communication and reliable workmanship.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter services in Gymea",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Gymea Residents",
    subheading: "Mature trees and seasonal storms can create ongoing challenges for roofs and gutters in this area.",
    paragraphs: [
      "Leaf build-up from surrounding trees often blocks gutters and valleys, leading to overflow during heavy rain and potential water damage to fascias and internal ceilings.",
      "Ageing tile roofs may develop cracks or loose sections, while metal roofs can suffer from rust spots or damaged flashing around valleys and chimneys.",
      "We offer targeted repairs, preventative maintenance plans and full roof restorations to keep your home protected from water damage and extend the life of your roofing system.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle P.",
    suburb: "Miranda",
    quote:
      "Our gutters were overflowing badly after every storm. The team cleared everything out, repaired damaged sections and the difference has been excellent. Very thorough and professional service throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
