import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.839; // Henley
const AREA_LON = 151.134;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Henley",
  slug: "henley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Henley Roofing and Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HENLEY",
    bullets: [
      "Expert roof repairs for residential properties",
      "Complete roof restorations with Colorbond and tile systems",
      "Gutter cleaning, replacement and leak detection",
      "Fast response times and honest quotes across Henley and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Henley",
    paragraphs: [
      "Henley is a quiet residential suburb with established homes and mature gardens, which means roof systems need regular attention to handle leaf build-up, weather exposure and normal wear over time.",
      "We provide roof repairs, roof restorations, gutter replacements and leak detection across Henley, Mortlake, Five Dock and surrounding areas. Our work covers Colorbond, concrete tile and metal roofing with a focus on quality finish and long-term reliability.",
      "Whether you need a minor repair, full restoration or complete guttering upgrade, our team delivers clean, efficient work with clear communication from the first inspection through to final handover.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering work in Henley",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in Henley",
    subheading: "Older homes and tree-lined streets often lead to blocked gutters, rusted sections and unnoticed leaks.",
    paragraphs: [
      "Mature trees in Henley bring shade and character but also create consistent gutter blockages from leaves, seed pods and fine debris. Left unchecked, this causes overflow, fascia rot and water entry into ceilings.",
      "We regularly see rusted valleys, sagging gutter sections, cracked or slipped tiles, and minor leaks that go unnoticed until heavier rain hits. Early detection saves money and prevents further structural damage.",
      "Our service includes thorough inspections, targeted repairs, full restoration work and preventative maintenance — keeping your roof watertight and ready for whatever Sydney weather throws at it.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca P.",
    suburb: "Five Dock",
    quote:
      "Called them after noticing a damp patch on the ceiling. They came quickly, found the leak, replaced a few tiles and cleaned the gutters. No fuss, fair price, and the problem is gone.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
