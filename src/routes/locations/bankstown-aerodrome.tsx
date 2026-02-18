import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.924; // Bankstown Aerodrome
const AREA_LON = 151.027;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bankstown Aerodrome",
  slug: "bankstown-aerodrome",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Services for Bankstown Aerodrome Area",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BANKSTOWN AERODROME",
    bullets: [
      "Commercial and industrial roofing for aviation facilities",
      "Metal roof repairs, Colorbond installations and leak detection",
      "Gutter systems built to handle western Sydney storms",
      "Fast quotes for commercial hangars, industrial buildings and residential properties nearby",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services Around Bankstown Aerodrome",
    paragraphs: [
      "Bankstown Aerodrome is home to aviation businesses, industrial facilities and residential properties that require durable roofing systems capable of handling the unique demands of western Sydney weather and airport proximity.",
      "We provide roof repairs, metal roof installations and commercial guttering work for hangars, warehouses and residential buildings near the aerodrome — using Colorbond, metal sheeting and tile systems designed for longevity and weather resistance.",
      "Our team understands the technical requirements of industrial and aviation facilities, delivering compliant workmanship, clean installations and clear documentation from inspection through to final completion and sign-off.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Industrial and commercial roofing near Bankstown Aerodrome",
  },

  problemsBlock: {
    heading: "Common Roofing Issues Around Bankstown Aerodrome",
    subheading: "Industrial facilities and western Sydney heat create specific challenges for metal and tile roofing systems.",
    paragraphs: [
      "Metal roofs on commercial buildings and hangars can suffer from thermal expansion, fastener fatigue and corrosion from industrial pollutants. Western Sydney temperatures exceeding 40 degrees Celsius accelerate wear on roofing materials.",
      "Heavy storms bring intense rainfall that overwhelms undersized guttering, causing overflow into walls, ceiling spaces and equipment areas. Industrial facilities near the aerodrome require robust drainage solutions.",
      "We deliver targeted repairs for rusted flashings, leaking valleys, damaged roof sheeting and blocked commercial guttering — plus full restoration and upgrade options for aging industrial roofing systems that need compliance updates.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael K.",
    suburb: "Condell Park",
    quote:
      "Our warehouse roof had multiple leak points and rusted sections. They assessed everything, replaced damaged sheeting and upgraded the guttering. Professional work, completed on schedule with minimal disruption to operations.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
