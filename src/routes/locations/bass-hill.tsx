import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.901; // Bass Hill
const AREA_LON = 150.993;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bass Hill",
  slug: "bass-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing & Gutter Services",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BASS HILL",
    bullets: [
      "Tile and metal roof repairs for all property types",
      "Storm damage assessments and emergency leak repairs",
      "Full gutter cleaning and replacement services",
      "Trusted by homeowners throughout Bass Hill and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Bass Hill Homes",
    paragraphs: [
      "Bass Hill features a mix of established homes and newer developments, where roof systems face the full force of western Sydney weather—intense summer heat, sudden storms and periods of heavy rain that test every seal and join.",
      "We service the entire Bass Hill area with roof repairs, restorations and gutter work designed to handle these conditions. Whether your roof is tile, Colorbond or metal sheeting, we deliver durable repairs that protect your home year-round.",
      "Our process is straightforward—thorough inspection, honest advice and quality workmanship. We explain exactly what needs attention, provide upfront pricing and complete every job to the highest standard with minimal disruption to your day.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and restoration work in Bass Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Bass Hill",
    subheading: "Western Sydney heat and storm exposure can create recurring problems if roofs are not properly maintained.",
    paragraphs: [
      "Extreme temperatures cause roof materials to expand and contract, leading to cracked tiles, loose ridge capping and worn-out seals. Storm winds can lift metal sheets and damage flashing around chimneys and skylights, allowing water to enter your roof cavity.",
      "Blocked gutters and downpipes are another frequent issue—leaves, debris and sediment build up quickly and cause overflow that can damage fascias, eaves and even internal ceilings during heavy downpours.",
      "We provide targeted repairs for leaks, replace damaged sections, restore tired roof surfaces and upgrade guttering systems to ensure reliable protection. If you notice water stains, rust or overflow, contact us for a professional assessment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Yagoona",
    quote:
      "Our tiled roof had several cracked sections and the gutters were rusted right through. The team replaced everything that needed replacing and the whole job was finished in three days. Great communication and very fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
