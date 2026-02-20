import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.667; // Middle Dural
const AREA_LON = 151.015;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Middle Dural",
  slug: "middle-dural",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing for Acreage Homes & Rural Properties",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MIDDLE DURAL",
    bullets: [
      "Roofing solutions for large homes and rural properties",
      "Repairs and restorations across Colorbond, tile and metal roofs",
      "Guttering systems designed for heavy tree coverage",
      "Service for main residences, sheds, stables and outbuildings across semi-rural blocks",
    ],
  },

  introBlock: {
    heading: "Roof Repairs & Maintenance for Middle Dural Properties",
    paragraphs: [
      "Middle Dural is home to expansive acreage properties, established tree canopies and a mix of family homes, equestrian facilities and rural outbuildings. These larger roof systems demand regular upkeep, especially when surrounded by tall gums and native bushland.",
      "We work with tile, Colorbond and metal roofs across the area, providing everything from leak detection and valley repairs to full roof restorations and gutter upgrades tailored to properties with significant tree coverage.",
      "Whether you need work on the main residence, a machinery shed, stables or a guest cottage, our team delivers clean installations, durable repairs and transparent quotes designed for the realities of semi-rural life.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering for acreage homes in Middle Dural",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Middle Dural",
    subheading: "Large properties with heavy tree coverage create unique maintenance demands for roofs and guttering systems.",
    paragraphs: [
      "Gum leaves, bark, seed pods and branches accumulate quickly on roofs and in gutters, blocking downpipes and creating overflow points that can damage fascias, eaves and interior ceilings if left unchecked.",
      "Older tile roofs may develop cracks from falling branches or wildlife movement, while metal roofs on sheds and outbuildings can rust or lose fasteners after years of exposure to weather and tree debris.",
      "We provide targeted inspections, preventative gutter cleaning, valley repairs, re-bedding and re-pointing for tiles, and full Colorbond replacements when restoration is no longer cost-effective for your property.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lauren H.",
    suburb: "Dural",
    quote:
      "Our property has a lot of trees and the gutters were constantly overflowing. They cleared everything out, replaced damaged sections and recommended better leaf guards. Huge improvement after the first storm.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
