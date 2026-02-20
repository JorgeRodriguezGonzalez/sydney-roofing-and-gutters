import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.884; // Surry Hills
const AREA_LON = 151.213;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Surry Hills",
  slug: "surry-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner City Roofing & Restoration Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SURRY HILLS",
    bullets: [
      "Heritage terrace roofing & restoration work",
      "Leak repairs for shared valleys and ageing flashings",
      "Metal roof restoration and slate replacements",
      "Fast response for inner city properties close to the CBD",
    ],
  },

  introBlock: {
    heading: "Expert Roof Repairs & Restoration for Surry Hills Properties",
    paragraphs: [
      "Surry Hills is home to Victorian terraces, converted warehouses and compact inner city roofs where small problems can quickly affect neighbouring properties or interior finishes.",
      "From Crown Street to Cleveland and across to Riley, we deliver targeted roof repairs, restoration work and leak detection designed for heritage buildings and tight urban conditions.",
      "Our team works with terrace valleys, box gutters, slate roofs and Colorbond replacements — focusing on long-term weather protection, clean finishes and minimal disruption to your home or tenants.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Terrace roof repairs and heritage restoration in Surry Hills",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Surry Hills",
    subheading: "Older terrace homes and shared valleys often mean water ingress issues that need careful diagnosis.",
    paragraphs: [
      "Victorian terraces feature long shared valleys, ageing mortar and original box gutters that were never designed for modern downpours. When flashings fail or valleys rust, water tracks straight into walls and ceilings.",
      "If you notice damp patches, staining near chimney flashings, rusted valley trays or leaks after rain, it usually means the roof system needs targeted repairs or partial restoration.",
      "We provide detailed inspections, valley replacements, flashing upgrades and full terrace roof restorations — keeping heritage features intact while restoring proper drainage and weather protection.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Redfern",
    quote:
      "Our terrace had leaks tracking down the shared valley for months. They rebuilt the valley tray and replaced the flashings without damaging the original slate. No leaks since and the work was incredibly tidy.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
