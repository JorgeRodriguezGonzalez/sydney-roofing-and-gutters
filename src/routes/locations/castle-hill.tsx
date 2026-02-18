import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.731; // Castle Hill
const AREA_LON = 151.003;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Castle Hill",
  slug: "castle-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Castle Hill Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CASTLE HILL",
    bullets: [
      "Roof repairs and restoration for older and newer homes",
      "Leak detection and gutter cleaning services",
      "Colorbond, tile and metal roofing solutions",
      "Experienced team serving all parts of Castle Hill and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Castle Hill Homes",
    paragraphs: [
      "Castle Hill has a diverse housing mix ranging from established homes with mature landscaping to modern estates, and every roof type requires regular attention to stay in top condition throughout the year.",
      "We work across the suburb delivering roof repairs, restoration work, and guttering upgrades for tile, Colorbond and slate roofs affected by heavy rain, storm debris and seasonal temperature swings.",
      "Our team focuses on delivering thorough inspections, reliable repairs and clear pricing so you know exactly what to expect from quote through to finished work.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering work in Castle Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Castle Hill",
    subheading: "Mature trees, changing weather and ageing roof materials create issues that benefit from expert attention.",
    paragraphs: [
      "Gutters blocked by leaf litter and seed pods can overflow during storms, causing water to pool around fascias or flow into ceiling cavities instead of safely draining away.",
      "Cracked tiles, rusted valleys, sagging gutter sections and failing flashing often start small but expand quickly if they are not addressed by an experienced roofing team.",
      "We handle everything from small leak repairs to full roof restorations, gutter replacements and preventive maintenance programs designed to extend the life of your roof system.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Kellyville",
    quote:
      "After several storms we had water staining on the bedroom ceiling. The team found the problem, repaired the valley and cleaned all the gutters. The whole process was smooth and professional.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
