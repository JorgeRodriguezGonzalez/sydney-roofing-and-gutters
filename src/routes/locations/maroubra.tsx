import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.943; // Maroubra
const AREA_LON = 151.241;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Maroubra",
  slug: "maroubra",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Maroubra Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MAROUBRA",
    bullets: [
      "Expert coastal roof maintenance solutions",
      "Comprehensive repairs for oceanic climates",
      "Specialized in stormwater management systems",
      "Service across Maroubra, Coogee & Randwick",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing & Guttering Services in Maroubra",
    paragraphs: [
      "Maroubra is a popular coastal suburb with robust residential communities and diverse architectural styles, including traditional homes and modern apartments. Regular maintenance ensures these properties stay protected against the ocean elements.",
      "From Maroubra and Coogee to Randwick and Kingsford, we offer customized roofing solutions to handle local weather conditions, preventing storm impacts and leaf accumulation.",
      "Our team works with diverse roofing materials such as Colorbond, terracotta tiles, and more, prioritizing immaculate finishes and reliability to withstand coastal weather.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering in Maroubra",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Problems We Fix in Maroubra",
    subheading: "Coastal winds and salt exposure can damage roof structures rapidly.",
    paragraphs: [
      "The coastal environment brings unique challenges, such as salt corrosion and strong winds impacting roof integrity. Regular assessments can prevent substantial damage.",
      "If rust stains or leaking roofs are recurring problems, it is crucial to schedule an expert evaluation to avoid exacerbating the issues.",
      "Tailored preventive measures and comprehensive repairs keep your roofing systems robust and efficient against Maroubra climate.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Maroubra",
    quote:
      "The team at Sydney Roofing fixed our leaking problem swiftly and professionally, ensuring our roof was in top condition for the next forecast.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
