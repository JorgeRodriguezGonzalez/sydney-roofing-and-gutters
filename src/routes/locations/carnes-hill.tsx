import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.929; // Carnes Hill
const AREA_LON = 150.840;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Carnes Hill",
  slug: "carnes-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Carnes Hill Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CARNES Hill",
    bullets: [
      "Expert roofing for newer residential estates",
      "Colorbond and tile repairs for western Sydney conditions",
      "Fast guttering solutions during extreme summer heat",
      "Preventive maintenance and leak detection across Carnes Hill and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Guttering in Carnes Hill",
    paragraphs: [
      "Carnes Hill features modern residential estates with Colorbond and tile roofing systems designed for western Sydney conditions — hot summers, occasional storms and rapid temperature swings that test every roof over time.",
      "Whether you need leak detection, broken tile replacement, gutter cleaning or full restoration work, our team delivers quality repairs backed by clear communication and proper workmanship.",
      "We understand the local building standards and the impact of extreme heat on roofing materials, so we focus on solutions that last through summer peaks and storm season without shortcuts or hidden costs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter services in Carnes Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Carnes Hill",
    subheading: "Western Sydney heat and occasional heavy downpours can accelerate wear on roofing and guttering systems.",
    paragraphs: [
      "High summer temperatures cause thermal expansion in metal roofing, which can loosen fixings, crack sealants and create gaps where leaks develop. Tile roofs can suffer cracked or slipped tiles from temperature stress.",
      "Blocked gutters during storm season lead to overflow, water pooling near the roofline and potential damage to fascias, soffits and interior ceilings if downpipes cannot handle the load.",
      "We provide thorough roof inspections, targeted repairs for thermal damage, gutter upgrades and preventive maintenance plans designed to keep your roof watertight year-round without surprise failures.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel K.",
    suburb: "Hoxton Park",
    quote:
      "They came out quickly, found the leak around the valley flashing and repaired it properly. No more water marks on the ceiling. Great service and very fair pricing for the work done.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
