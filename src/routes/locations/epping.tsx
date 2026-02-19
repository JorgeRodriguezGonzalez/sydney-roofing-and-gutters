import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.773; // Epping
const AREA_LON = 151.082;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Epping",
  slug: "epping",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Epping Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EPPING",
    bullets: [
      "Complete roof repairs and restoration work",
      "Metal, tile and Colorbond installations and upgrades",
      "Gutter cleaning, replacement and leak repairs",
      "Fast response times for residential and commercial properties across Epping",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering Experts Servicing Epping",
    paragraphs: [
      "Epping has a diverse mix of established homes, modern townhouses and commercial buildings — each with different roofing systems and maintenance needs that require experienced attention.",
      "We provide comprehensive roofing services across the suburb, including repairs for older tile roofs, Colorbond replacements, leak detection and full gutter system overhauls for properties of all ages.",
      "Our local team understands how storm damage, aging materials and blocked drainage affect Epping homes, and we deliver long-lasting solutions with clear pricing and reliable workmanship every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and maintenance in Epping",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Epping Residents",
    subheading: "Older roofs and mixed housing types often lead to recurring leaks, rust and blocked gutters.",
    paragraphs: [
      "Many homes in Epping were built decades ago, and original roof tiles, flashing and gutters have reached the end of their lifespan — resulting in water damage, interior stains and structural concerns.",
      "Blocked downpipes, rusted valley irons and cracked ridge capping are common problems we encounter, especially after heavy rain or windstorms that expose weak points in aging systems.",
      "We offer thorough inspections, targeted repairs and complete restoration packages designed to extend roof life, prevent further damage and restore full weather protection for your property.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel K.",
    suburb: "Carlingford",
    quote:
      "Our roof was leaking in two spots and the gutters were completely blocked. They fixed everything in one day and left the site spotless. Highly recommend for quality work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
