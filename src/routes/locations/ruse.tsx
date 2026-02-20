import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.068; // Ruse
const AREA_LON = 150.831;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ruse",
  slug: "ruse",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Trusted Roofing Services in Ruse NSW",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RUSE",
    bullets: [
      "Complete roof repairs and restorations for all roof types",
      "Expert leak detection and weather damage assessment",
      "Guttering maintenance designed for Western Sydney storms",
      "Free quotes and inspections for residential homes in Ruse and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Ruse Homes",
    paragraphs: [
      "Ruse is a residential area with a mix of established homes and newer builds, all of which face the demands of Western Sydney weather—intense summer heat, sudden storms and unpredictable downpours that can expose weak points in any roofing system.",
      "We deliver roof repairs, full restorations, gutter installations and leak repairs across tile, Colorbond and metal roofs—using local knowledge to match materials and techniques to the conditions your roof faces year-round.",
      "From initial inspection to project completion, we focus on clear communication, clean workmanship and long-term durability—so you can trust your roof will perform when the next big storm rolls through.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and guttering work in Ruse",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Ruse Residents",
    subheading: "Western Sydney weather brings intense heat, storms and wind that test every roofing system.",
    paragraphs: [
      "Summer temperatures regularly exceed 40 degrees in Ruse, causing Colorbond and metal roofs to expand, contract and eventually develop rust spots or seam failures if not properly maintained over time.",
      "Tile roofs can crack under thermal stress, while gutters often clog with dust and debris, leading to overflow during sudden downpours—resulting in pooling water, stained fascias and internal leaks.",
      "We offer targeted repairs, full gutter replacement, roof coating and restoration services designed to extend roof life, prevent water entry and keep your home protected through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Campbelltown",
    quote:
      "Our Colorbond roof had rust starting around the fasteners and we were worried it would spread. They cleaned, treated and sealed everything—looks brand new and no leaks during the last storm.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
