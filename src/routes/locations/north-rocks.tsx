import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.769; // North Rocks
const AREA_LON = 151.023;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "North Rocks",
  slug: "north-rocks",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "North Rocks Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NORTH ROCKS",
    bullets: [
      "Complete roof repairs and maintenance",
      "Leak detection and permanent waterproofing solutions",
      "Gutter cleaning and replacement services",
      "Fast quotes for all roofing work across North Rocks and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for North Rocks Homes",
    paragraphs: [
      "North Rocks features a mix of established residential homes with tile and metal roofing that require regular maintenance to perform well through Sydney weather. When storms arrive, older gutters and worn roof valleys can quickly become problem areas.",
      "We service the entire North Rocks area with targeted roof repairs, complete restorations and guttering upgrades. Whether you need a cracked tile replaced, a full Colorbond re-roof or new downpipes installed, we deliver clean results and reliable workmanship.",
      "Our team understands local roofing conditions — summer heat that degrades sealants, heavy rain that tests drainage and tree debris that fills gutters. Every job is completed with attention to detail and backed by warranties you can trust.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter cleaning in North Rocks",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in North Rocks",
    subheading: "Established homes often face the same roofing challenges — broken tiles, blocked gutters and ageing flashings.",
    paragraphs: [
      "After storms or high winds, broken roof tiles and loose ridge capping are common. Left unrepaired, these small problems let water into your roof cavity and cause expensive internal damage over time.",
      "Blocked gutters filled with leaves and debris lead to overflow and staining on fascia boards and walls. When downpipes cannot drain properly, water pools and creates leaks at joints and seams.",
      "We inspect the full roof system — tiles, valleys, gutters, flashings and downpipes — then provide clear recommendations and permanent fixes. Whether it is a targeted repair or a complete restoration, we get your roof watertight again.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Carlingford",
    quote:
      "They came out quickly after a storm damaged our roof. The repairs were done professionally and the gutters were cleaned at the same time. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
