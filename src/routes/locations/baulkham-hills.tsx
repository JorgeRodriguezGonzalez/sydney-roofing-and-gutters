import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.758; // Baulkham Hills
const AREA_LON = 150.992;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Baulkham Hills",
  slug: "baulkham-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Trusted Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BAULKHAM HILLS",
    bullets: [
      "Expert repairs for tile, Colorbond and metal roofs",
      "Full restorations and leak detection for established homes",
      "Gutter cleaning and replacement for leaf-heavy areas",
      "Fast response times and accurate quotes tailored to local conditions",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Homes in Baulkham Hills",
    paragraphs: [
      "Baulkham Hills combines established residential streets with mature trees and varying roof ages — which means gutter blockages, tile wear and leak risks are common issues for homeowners across the area.",
      "We specialise in roof repairs, full restorations and guttering upgrades for properties dealing with leaf build-up, storm damage and the demands of Western Sydney weather, including extreme heat and heavy downpours.",
      "Our team delivers thorough inspections, transparent pricing and reliable workmanship on every project — whether you need a minor repair or a complete roof restoration using modern materials designed for longevity.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering work in Baulkham Hills",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Baulkham Hills",
    subheading: "Established suburbs with large trees create ongoing maintenance challenges for roofs and drainage systems.",
    paragraphs: [
      "Leaf accumulation from surrounding trees clogs gutters and valleys, leading to water overflow, damp patches and potential structural damage if left unchecked. Regular maintenance is essential to prevent costly interior repairs.",
      "Older roofs in the area often show signs of cracked tiles, corroded flashing, rusted metal sections and failed sealant — all common issues that worsen quickly under intense summer heat and storm exposure.",
      "We provide targeted leak repairs, valley replacements, full gutter overhauls and complete roof restorations using quality Australian materials — so your home stays protected year-round with minimal ongoing maintenance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Sarah K.",
    suburb: "Winston Hills",
    quote:
      "They handled our entire roof restoration with care and professionalism. The team arrived on time, kept us informed throughout, and the final result exceeded our expectations. Highly recommend their service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
