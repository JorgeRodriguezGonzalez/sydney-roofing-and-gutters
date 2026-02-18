import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.650; // Bilgola Plateau
const AREA_LON = 151.317;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bilgola Plateau",
  slug: "bilgola-plateau",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Northern Beaches Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BILGOLA PLATEAU",
    bullets: [
      "Coastal roof repairs built to withstand salt air and ocean winds",
      "Colorbond and tile restoration for plateau properties",
      "Gutter replacement and leak detection services",
      "Fast response for roof emergencies across Bilgola Plateau and surrounding beaches",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Bilgola Plateau Homes",
    paragraphs: [
      "Bilgola Plateau sits high above the coastline, where every roof faces constant exposure to salt-laden winds and intense sun. These conditions accelerate rust, tile degradation and gutter corrosion if maintenance is deferred too long.",
      "We service homes across the plateau with roof repairs, Colorbond replacement, tile restoration and complete guttering upgrades designed specifically for coastal conditions and Sydney weather extremes.",
      "Whether you need leak repairs, valley rust removal or full gutter replacement, our team delivers clean results with quality materials and transparent pricing from quote to completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work on Northern Beaches",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Bilgola Plateau Properties",
    subheading: "Coastal exposure means roofs and gutters face accelerated wear from salt air and unpredictable weather patterns.",
    paragraphs: [
      "Salt spray from the ocean causes faster rust on metal roofs and gutter systems, especially on properties with direct exposure to prevailing easterly winds. Left unchecked, this leads to leaks and structural damage.",
      "Bilgola Plateau also experiences heavy downpours, strong winds and debris from surrounding bushland. Blocked valleys, sagging gutters and cracked tiles become serious problems if not addressed early.",
      "We inspect, repair and upgrade roofs and gutters to match local conditions. From rust treatment and tile replacement to full Colorbond installations, we ensure your property stays protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma K.",
    suburb: "Newport",
    quote:
      "Our Colorbond roof was showing rust spots after years of salt exposure. The team replaced the damaged sections quickly and professionally. The roof looks great and we have peace of mind now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
