import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.905; // Greendale
const AREA_LON = 150.636;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Greendale",
  slug: "greendale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Greendale Rural Roofing & Gutter Services",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GREENDALE",
    bullets: [
      "Expert roofing for rural and acreage properties",
      "Wind-resistant repairs for exposed western locations",
      "Guttering solutions for large roof areas",
      "Fast response for storm damage, metal roofing and leak repairs across Greendale",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering for Greendale Properties",
    paragraphs: [
      "Greendale sits in the rural western fringe of Greater Sydney, where acreage homes and larger roof spans are exposed to westerly winds, temperature swings and seasonal storms that demand solid roofing infrastructure.",
      "From Colorbond sheds and home roofs to tile repairs on heritage rural cottages, we deliver roofing solutions built to handle the unique conditions of this semi-rural environment — strong winds, debris impact and UV exposure.",
      "Our team provides roof inspections, targeted repairs, full restorations and custom guttering work designed for properties with extended roof lines, ensuring long-term weather protection and reliable drainage performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter services in Greendale",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Greendale Properties",
    subheading: "Exposed rural locations mean roofs face wind uplift, debris damage and faster weathering than suburban areas.",
    paragraphs: [
      "Metal roofing on sheds and homes can develop loose screws, lifted sheets and corrosion from weather exposure. Tile roofs may crack under branch impact or shift during high winds, creating entry points for water.",
      "Larger properties often have extensive gutter runs that collect leaves, dust and debris — leading to blockages, overflow and foundation erosion during heavy rain if not maintained regularly.",
      "We assess wind damage, replace damaged sheets or tiles, re-secure loose fixings and upgrade guttering systems to handle the demands of rural roof structures and seasonal weather patterns.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul R.",
    suburb: "Wallacia",
    quote:
      "After a big storm lifted sheets on our shed roof, they came out quickly, assessed everything and replaced the damaged sections properly. Great communication and fair pricing for rural work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
