import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.87; // Fairfield
const AREA_LON = 150.956;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Fairfield",
  slug: "fairfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Fairfield Roof Repairs & Guttering",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FAIRFIELD",
    bullets: [
      "Metal roof repairs for extreme western Sydney heat",
      "Emergency leak detection and fast storm damage response",
      "Colorbond and tile roof restorations for older homes",
      "Gutter cleaning and replacement to handle heavy downpours and debris build-up",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing Services for Fairfield Homes and Businesses",
    paragraphs: [
      "Fairfield experiences some of the harshest weather in Sydney — extreme summer heat, violent storms and heavy rainfall that puts constant pressure on roofs and gutters. Older fibro and brick homes, in particular, need regular maintenance to avoid costly water damage.",
      "Our team works across Fairfield and surrounding suburbs, providing metal roof repairs, tile restorations, gutter upgrades and emergency leak fixes. We understand the local building stock and tailor solutions to match the age and condition of each property.",
      "From Colorbond roof replacements to valley repairs and downpipe rerouting, we focus on practical, long-term solutions that protect your home from the next heatwave or storm season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter services in Fairfield",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Fairfield",
    subheading: "Western Sydney heat and storms create unique challenges for roofs — especially on older properties.",
    paragraphs: [
      "Metal roofs expand and contract in extreme heat, causing fasteners to loosen, seams to open and rust to accelerate. Tile roofs suffer from cracked or dislodged tiles after storms. Both lead to leaks that worsen quickly in heavy rain.",
      "Gutters in Fairfield often struggle with debris from trees and overflow during summer storms. Sagging sections, blocked downpipes and rusted seams cause water to pool near walls and foundations, leading to damp, rot and structural damage.",
      "We inspect, repair and upgrade roofs and gutters to handle local conditions. Whether you need a full restoration, targeted leak repair or gutter replacement, we deliver clean workmanship and honest advice without upselling.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Maria L.",
    suburb: "Cabramatta",
    quote:
      "Our old tile roof leaked every time it rained. They came out fast, found the problem valleys and fixed them properly. No more drips and the price was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
