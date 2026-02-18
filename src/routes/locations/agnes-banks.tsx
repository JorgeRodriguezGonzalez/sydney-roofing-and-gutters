import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.614; // Agnes Banks
const AREA_LON = 150.702;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Agnes Banks",
  slug: "agnes-banks",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rural Roofing Specialists for Agnes Banks",
    titleTop: "ROOFING SERVICES",
    titleBottom: "AGNES BANKS",
    bullets: [
      "Metal and tile roofing for rural properties",
      "Heat-resistant roof coatings for Western Sydney temperatures",
      "Storm damage repairs and gutter reinforcement",
      "Tailored solutions for Hawkesbury region homes and semi-rural blocks",
    ],
  },

  introBlock: {
    heading: "Expert Roof Repairs and Maintenance for Agnes Banks",
    paragraphs: [
      "Agnes Banks sits in the semi-rural Hawkesbury region, where properties face extreme summer heat, sudden storms and the unique challenges of rural roofing. Metal roofs expand under 40-degree-plus days, while tile systems can crack from rapid temperature shifts.",
      "Whether you own an established home or a newer build on a larger block, our team delivers targeted roof repairs, restorations and gutter upgrades designed for Western Sydney conditions. We work with Colorbond steel, concrete tiles and older terracotta systems.",
      "From leak detection to complete re-roofing, we provide clear quotes, quality workmanship and long-lasting results. Our service covers Agnes Banks and surrounding Hawkesbury communities, with a focus on durability and weather resistance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and installations in Agnes Banks",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Agnes Banks",
    subheading: "Rural properties and extreme heat create specific roofing challenges that need proper attention.",
    paragraphs: [
      "Western Sydney summers push roof surfaces past 60 degrees, causing metal roofs to expand, fasteners to loosen and coatings to degrade. Tile roofs suffer from cracking and movement, particularly on older homes. Add sudden storms and you have a recipe for leaks, rust and water ingress.",
      "Many properties in the Hawkesbury area also deal with overhanging trees, dust accumulation and limited gutter capacity during heavy downpours. These factors combine to create blocked valleys, sagging gutters and interior water damage.",
      "We provide comprehensive inspections, emergency repairs and preventative maintenance programs. Whether you need a full restoration, targeted patching or upgraded drainage, our team delivers solutions built for rural conditions and long-term performance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Londonderry",
    quote:
      "Our metal roof was suffering from extreme heat damage and loose screws. The team completed a full inspection, replaced worn sections and applied heat-reflective coating. Much cooler inside now and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
