import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.053; // Bow Bowing
const AREA_LON = 150.817;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bow Bowing",
  slug: "bow-bowing",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bow Bowing Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BOW BOWING",
    bullets: [
      "Roof repairs for Colorbond and tile systems",
      "Storm damage assessment and emergency leak fixes",
      "Complete gutter replacement and overflow solutions",
      "Licensed roofing team serving Bow Bowing and surrounding Campbelltown suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Solutions for Bow Bowing Homes",
    paragraphs: [
      "Bow Bowing homes face the full force of western Sydney weather — intense summer heat, sudden storms and seasonal downpours that test every roof and gutter system across the suburb.",
      "We deliver roof repairs, complete restorations and guttering upgrades for metal roofs, Colorbond installations and concrete tile systems common throughout the area. Our work protects your home against leaks, rust and storm damage.",
      "From first inspection through to final clean-up, our licensed team provides honest advice, quality materials and workmanship that lasts. We understand local conditions and tailor every solution to suit Bow Bowing properties.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter installation in Bow Bowing",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Bow Bowing",
    subheading: "Western Sydney storms and summer heat create unique challenges for every roof system in the area.",
    paragraphs: [
      "Metal roofs expand and contract in extreme temperatures, loosening fasteners and creating potential leak points. Tile roofs develop cracks from thermal stress. Gutters overflow when debris blocks downpipes during heavy rain events.",
      "If you notice water stains on ceilings, rusted gutter sections, broken or displaced tiles, or pooling water around your home after storms, these issues will only worsen without professional attention.",
      "We provide targeted repairs for leak sources, full gutter replacements where rust has taken hold, roof restorations for aging systems and preventative maintenance to keep everything watertight year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Minto",
    quote:
      "Had multiple leaks after a big storm and they came out within two days. Found every problem area, replaced damaged sections and the roof has been perfect ever since. Great service from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
