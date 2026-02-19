import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.932; // Hoxton Park
const AREA_LON = 150.855;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hoxton Park",
  slug: "hoxton-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hoxton Park Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HOXTON PARK",
    bullets: [
      "Emergency repairs after severe storms and hail",
      "Colorbond and tile roofing for growing estates",
      "Heat-resistant solutions for Western Sydney summers",
      "Full gutter cleaning, repairs and replacement for modern homes across Hoxton Park",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Hoxton Park Homes",
    paragraphs: [
      "Hoxton Park is a rapidly growing suburb in the south-west of Sydney, with newer estates and family homes that need roofing systems built to handle extreme heat and unpredictable storm activity across Western Sydney.",
      "From Colorbond installations and tile repairs to full gutter system upgrades, our team provides roofing work designed for local weather conditions — including summer temperatures above 40 degrees and sudden downpours that test drainage capacity.",
      "Whether you need leak detection, roof restoration or preventive maintenance, we deliver clear quotes, efficient service and quality workmanship that protects your investment for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter services in Hoxton Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Hoxton Park",
    subheading: "Extreme heat, heavy rain and construction debris create ongoing challenges for roofs in growing suburbs.",
    paragraphs: [
      "Newer homes often experience settling cracks in tiles, gutter misalignment from poor installation, or debris accumulation from nearby construction sites — all of which can cause leaks and drainage problems if left unchecked.",
      "Older sections of Hoxton Park may have ageing Colorbond or metal roofing showing signs of rust, corrosion or heat-related expansion that creates gaps and vulnerable points during storms.",
      "We assess your entire roof system — from ridge caps and flashing to valleys and downpipes — then provide targeted repairs or complete restoration solutions that handle both summer heat and winter weather without compromise.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Carnes Hill",
    quote:
      "After a big storm we had water coming through the ceiling. They came out quickly, found the problem and fixed it the same week. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
