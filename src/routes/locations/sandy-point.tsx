import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.998; // Sandy Point
const AREA_LON = 150.976;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Sandy Point",
  slug: "sandy-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Sandy Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SANDY POINT",
    bullets: [
      "Salt air protection and coastal corrosion treatments",
      "Metal roof repairs, Colorbond installations and tile work",
      "Gutter cleaning and replacement for ocean-side properties",
      "Storm damage repairs and waterproofing for exposed homes in Sandy Point and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Sandy Point Coastal Homes",
    paragraphs: [
      "Sandy Point sits right on the coast where salt spray, ocean winds and driving rain put constant pressure on roofing materials. Metal roofs corrode faster, tiles crack from thermal stress, and gutters fill with debris after every storm season.",
      "We service the entire Sandy Point area with targeted solutions for coastal conditions. Whether you need a full Colorbond roof replacement, urgent leak repairs or gutter upgrades to handle heavy downpours, we match the materials and methods to the local environment.",
      "Our roofers understand how ocean exposure accelerates wear. We use marine-grade fasteners, corrosion-resistant coatings and proven waterproofing systems that deliver long-term performance even in harsh coastal weather.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs for coastal homes in Sandy Point",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Sandy Point",
    subheading: "Coastal properties face unique challenges from salt corrosion, wind-driven rain and constant moisture exposure.",
    paragraphs: [
      "Metal roofs near the ocean often develop rust spots, lifted fasteners and cracked sealants within just a few years. Colorbond performs better than standard steel, but even quality materials need proper installation and regular maintenance to survive the salt air.",
      "Blocked gutters are another frequent issue. Leaves, sand and organic debris accumulate quickly, and when gutters overflow during heavy rain, water backs up under tiles or into wall cavities. That leads to leaks, staining and structural damage that costs far more to fix later.",
      "We offer full coastal roofing services including rust treatment, gutter replacement, tile repointing and complete roof restorations. Every job includes an inspection to identify hidden corrosion and weak points before they become emergency repairs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Bundeena",
    quote:
      "Our metal roof was covered in rust and the gutters were sagging. The team replaced everything with Colorbond, resealed the edges and cleaned up perfectly. The roof looks brand new and feels solid again.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
