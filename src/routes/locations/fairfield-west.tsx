import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.871; // Fairfield West
const AREA_LON = 150.934;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Fairfield West",
  slug: "fairfield-west",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Fairfield West Roof and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FAIRFIELD WEST",
    bullets: [
      "Residential roof repairs for tile and Colorbond",
      "Guttering maintenance and downpipe installations",
      "Heat-resistant solutions for extreme summer conditions",
      "Prompt service across Fairfield, Prairiewood and surrounding western suburbs",
    ],
  },

  introBlock: {
    heading: "Quality Roofing and Guttering Services in Fairfield West",
    paragraphs: [
      "Fairfield West features diverse residential housing with tile and Colorbond roofs that face the challenges of western Sydney heat, seasonal storms and everyday weathering.",
      "Our team provides roof repairs, leak detection, gutter cleaning and restorations tailored to local conditions. We work with concrete tiles, terracotta and metal roofing — handling heat stress, cracked tiles and guttering problems efficiently.",
      "From inspection to completion, we deliver practical repairs, clear communication and quality workmanship. Whether you need emergency leak fixes or a planned restoration, we service Fairfield West with the same care and professionalism.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter work in Fairfield West",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Fairfield West",
    subheading: "Western Sydney conditions mean your roof faces extreme heat, sudden storms and regular wear that needs proactive attention.",
    paragraphs: [
      "Summer temperatures above 40 degrees cause tile expansion, Colorbond fading and seal deterioration. Add sudden downpours to heat-stressed materials and you get cracks, leaks and gutter overflow that only gets worse with time.",
      "Blocked gutters from seasonal debris, rusted sections, broken brackets and poor drainage are common across older homes in the area. Water backs up, seeps into eaves and ceilings, and creates avoidable damage that spreads quickly.",
      "We inspect every roof system for heat damage, structural wear and hidden leaks — then provide targeted repairs, gutter upgrades or full restorations depending on what your property actually needs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Prairiewood",
    quote:
      "Our tiles were cracked and the gutters overflowed every storm. They replaced damaged sections, fixed the downpipes and cleaned everything properly. No more leaks and the quote was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
