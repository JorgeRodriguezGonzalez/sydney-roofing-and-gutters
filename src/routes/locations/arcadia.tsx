import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.623; // Arcadia
const AREA_LON = 151.060;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Arcadia",
  slug: "arcadia",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Arcadia Roof and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ARCADIA",
    bullets: [
      "Roofing solutions for acreage and rural properties",
      "Storm repairs, gutter cleaning and bushfire ember protection",
      "Colorbond and metal roofing for larger roof spans",
      "Servicing Arcadia, Dural, Galston and surrounding bushland areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing for Arcadia and Acreage Properties",
    paragraphs: [
      "Arcadia is known for acreage living, bushland surrounds and larger roof footprints that require careful maintenance. Properties here face heavy storms, tree debris and seasonal bushfire considerations that demand durable roofing systems.",
      "We deliver roof repairs, restorations and guttering upgrades suited to rural and semi-rural conditions. From Colorbond installations to ember protection retrofits and valley leak repairs, we work across all roof types found in Arcadia and nearby areas.",
      "Our team understands the challenges of larger blocks and harder-to-reach roof sections. We provide clear quotes, efficient service and long-lasting repairs designed for the local environment.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter services for Arcadia acreage homes",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in Arcadia and Bushland Areas",
    subheading: "Tree debris, ember attack and storm damage are the main threats to roofs in acreage settings.",
    paragraphs: [
      "Large gum trees and native bushland drop leaves, bark and seed pods that clog gutters and valleys. When storms hit, blocked systems overflow and water flows into eaves, ceilings and walls instead of safely away from the structure.",
      "Older metal roofs can rust through at fasteners and ridges, while tile roofs crack or lift during high winds. Bushfire-prone areas also require ember guards and well-maintained gutters to reduce ignition risk during fire season.",
      "We inspect every roof section, clear all debris, repair rusted valleys and recommend upgrades where needed. Whether you need a full restoration or targeted storm repairs, we deliver solutions that suit acreage living.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Dural",
    quote:
      "Our gutters were full of leaves and the valley was leaking into the bedroom. They cleared everything, patched the valley and installed ember guards. Professional work and no mess left behind.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
