import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.968; // Hurstville
const AREA_LON = 151.103;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hurstville",
  slug: "hurstville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hurstville Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HURSTVILLE",
    bullets: [
      "Complete roof repairs for older and modern homes",
      "Expert tile and metal roofing services",
      "Gutter cleaning and replacement solutions",
      "Storm damage repairs and leak detection for Hurstville properties",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Hurstville",
    paragraphs: [
      "Hurstville features a diverse range of housing from established post-war homes to modern residential developments, each with unique roofing requirements that demand expert attention and proper maintenance.",
      "Our team delivers comprehensive roof repairs, restoration work and guttering services across Hurstville, addressing the challenges of aging terracotta tiles, metal roofing systems and the impact of seasonal storms common to the St George area.",
      "Whether you need leak repairs, complete roof restoration, gutter replacement or preventative maintenance, we provide reliable workmanship with clear communication and attention to detail from initial inspection through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Expert roofing and gutter services in Hurstville",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Hurstville",
    subheading: "Older homes and variable weather patterns create specific maintenance challenges that require timely attention.",
    paragraphs: [
      "Many Hurstville homes feature aging terracotta or concrete tiles that can crack, slip or lose their water seal over time. Metal roofs may develop rust spots, and valleys can accumulate debris during stormy periods.",
      "Blocked gutters, rusted downpipes, sagging sections and persistent ceiling stains are clear warning signs that your roof system needs professional assessment before minor issues escalate into costly water damage.",
      "We provide thorough inspections, targeted repairs and full restoration options designed to extend roof life, prevent leaks and ensure your home stays protected through all weather conditions the St George region experiences.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela W.",
    suburb: "Penshurst",
    quote:
      "Our terracotta roof had several cracked tiles and water staining inside. They replaced the damaged sections, repointed the ridge and resealed everything. The work was thorough and the quote was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
