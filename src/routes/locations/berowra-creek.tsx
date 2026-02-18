import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.613; // Berowra Creek
const AREA_LON = 151.142;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berowra Creek",
  slug: "berowra-creek",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Berowra Creek Roofing & Gutter Services",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEROWRA CREEK",
    bullets: [
      "Expert roofing for bushland and waterside homes",
      "Repairs, restorations and full roof replacements",
      "Gutter cleaning and leaf guard installations",
      "Fast response for storm damage and emergency leak repairs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Berowra Creek Homes",
    paragraphs: [
      "Berowra Creek is a peaceful bushland suburb where homes are surrounded by native trees, rugged terrain and the natural waterway that gives the area its name. That environment demands roofs and gutters that can handle leaf buildup, storms and exposure to the elements year-round.",
      "We provide roof repairs, restorations, leak detection and gutter maintenance across Berowra Creek and surrounding areas like Cowan, Mount Colah and Hornsby. Our team works with tile, Colorbond and metal roofing — always tailored to the conditions your home faces.",
      "From inspections to installations, we deliver clean workmanship, clear quotes and repairs that last — so your roof stays watertight no matter what the bushland throws at it.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter services for Berowra Creek properties",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Berowra Creek",
    subheading: "Bushland living brings natural beauty — and extra pressure on roofs and gutters from debris and weather.",
    paragraphs: [
      "Homes near native bushland deal with constant leaf fall, bark and seed pods that quickly clog gutters and valleys. When downpipes block, water overflows into fascias, soffits and even roof cavities — leading to rot, mould and interior damage.",
      "Storm season brings heavy rain and wind that can lift tiles, crack ridging or expose weak points in flashing. If you have noticed sagging gutters, ceiling stains, rusted valleys or overflow after rain, those issues will only get worse without proper attention.",
      "We handle everything from gutter cleanouts and leaf guard installations to full roof repairs and restorations — making sure your system is built to withstand the bushland environment for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen R.",
    suburb: "Mount Colah",
    quote:
      "We needed a full gutter replacement after years of buildup and corrosion. The team was professional, the work was spotless, and we finally have gutters that handle the leaf fall properly. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
