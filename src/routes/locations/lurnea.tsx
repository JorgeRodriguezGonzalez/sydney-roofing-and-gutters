import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.935; // Lurnea
const AREA_LON = 150.903;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Lurnea",
  slug: "lurnea",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roof & Gutter Specialists for Lurnea",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LURNEA",
    bullets: [
      "Expert roof repairs for residential homes in Lurnea",
      "Complete gutter cleaning and replacement services",
      "Metal and tile roof restoration and maintenance",
      "Fast response times and competitive pricing for Liverpool area residents",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Homes Across Lurnea",
    paragraphs: [
      "Lurnea homes face typical Western Sydney conditions including intense summer heat, sudden downpours and seasonal storms that put pressure on older roofing systems and gutters.",
      "Our team provides complete roofing services for the Lurnea area including leak repairs, Colorbond installations, tile replacements and full gutter system upgrades designed to withstand local weather patterns.",
      "Whether you need urgent repairs after storm damage or planned maintenance for an ageing roof, we deliver quality workmanship backed by clear quotes and reliable service across the Liverpool region.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for residential properties in Lurnea",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Lurnea Residents",
    subheading: "Western Sydney weather demands roofs and gutters that can handle extreme heat and sudden heavy rainfall.",
    paragraphs: [
      "Many Lurnea homes feature older tile or metal roofing that has weathered years of intense sun exposure, leading to cracked tiles, rust spots and deteriorating flashing that allows water entry during storms.",
      "Blocked or damaged gutters are another frequent issue, especially after high winds deposit debris that clogs downpipes and causes overflow that damages fascias, eaves and even interior ceilings.",
      "We assess the full roofing system including valleys, penetrations and gutter alignment to identify current problems and prevent future damage through targeted repairs or complete restoration when needed.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel K.",
    suburb: "Liverpool",
    quote:
      "Called them after noticing leaks in two rooms during the last storm. They came out quickly, found the problem areas and repaired everything properly. No more leaks and the price was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
