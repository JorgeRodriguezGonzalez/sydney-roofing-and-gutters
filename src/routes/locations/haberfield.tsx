import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.880; // Haberfield
const AREA_LON = 151.138;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Haberfield",
  slug: "haberfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Specialists in Haberfield",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HABERFIELD",
    bullets: [
      "Terracotta tile repairs and heritage roof restorations",
      "Expert leak detection for Federation-era homes",
      "Sympathetic roof replacements matching period character",
      "Guttering solutions designed for older homes with original detailing and pressed metal work",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing Services for Heritage Homes in Haberfield",
    paragraphs: [
      "Haberfield is renowned for its Federation architecture and heritage streetscapes, where original terracotta tiles, pressed metal gutters and slate roofing define the local character. These older roofing systems need careful attention to keep them watertight without compromising their historic value.",
      "We specialise in heritage-appropriate roof repairs, tile replacements and gutter restorations that respect the original design while improving performance. Whether you need cracked tiles replaced, valley irons re-sealed or original gutters repaired, we work with materials and methods suited to period homes.",
      "From terracotta and slate to Colorbond where required, our team delivers sympathetic repairs, leak fixes and complete roof restorations with clear communication, detailed inspections and long-lasting workmanship that protects your heritage investment.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Federation-era roof repairs and heritage restoration in Haberfield",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Federation Homes",
    subheading: "Older roofs have unique challenges — cracked tiles, rusted valley irons and ageing gutter systems that need specialist care.",
    paragraphs: [
      "Terracotta tiles can crack or slip over time, and mortar bedding under ridge capping often deteriorates after decades of exposure. Valley irons rust through, and original pressed metal gutters can split or sag if not properly maintained.",
      "If you notice damp patches on ceilings, water stains near chimneys, rust marks on gutters or loose ridge tiles after storms, these are signs your heritage roof needs professional attention before minor issues become major leaks.",
      "We provide targeted repairs using period-appropriate materials, full tile replacements where needed, valley iron renewals and gutter restorations that maintain the character of your Federation home while ensuring modern weatherproofing performance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen R.",
    suburb: "Leichhardt",
    quote:
      "They replaced damaged terracotta tiles and re-pointed all the ridge capping on our Federation cottage. The colour match was perfect and the workmanship was excellent. Very respectful of the heritage details.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
