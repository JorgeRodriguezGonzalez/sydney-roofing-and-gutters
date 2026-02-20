import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.831; // Woodpark
const AREA_LON = 150.962;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Woodpark",
  slug: "woodpark",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Woodpark Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WOODPARK",
    bullets: [
      "Expert repairs for mountain weather conditions",
      "Metal roof installations and Colorbond replacements",
      "Complete gutter cleaning and overflow solutions",
      "Professional service for properties in elevated and bushland areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Woodpark Properties",
    paragraphs: [
      "Woodpark homes face unique challenges with mountain weather, heavy rainfall and surrounding bushland that can impact roof performance throughout the year. Properties in elevated areas need roofing systems that handle intense storms and debris.",
      "We specialise in metal roof repairs, tile restorations and gutter maintenance designed for local terrain. Our team works with Colorbond, tile and metal roofing across properties in bushland settings and elevated blocks.",
      "From leak detection to complete roof restorations, we deliver reliable workmanship with clear timelines and upfront pricing. Every inspection is thorough, every repair is built to last through mountain weather cycles.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and guttering services in Woodpark",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Woodpark",
    subheading: "Mountain weather and bushland debris create ongoing demands on roofs and guttering systems.",
    paragraphs: [
      "Heavy rain, wind-driven debris and temperature swings can damage flashing, crack tiles and overload gutters. Properties near bushland face constant leaf fall and branch debris that blocks valleys and downpipes.",
      "Signs like water stains on ceilings, rusted gutter sections, loose tiles or persistent overflow after storms all point to issues that need professional attention before they worsen.",
      "We handle leak repairs, valley replacements, gutter upgrades and complete roof restorations. Our approach focuses on prevention, durability and keeping your home protected through every weather event.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "David L.",
    suburb: "Glenbrook",
    quote:
      "After heavy storms we had water coming through the ceiling. They found the problem quickly, replaced damaged sections and cleared all the debris. Roof has been solid ever since. Great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
