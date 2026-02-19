import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.878; // Bonnyrigg Heights
const AREA_LON = 150.878;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bonnyrigg Heights",
  slug: "bonnyrigg-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing in Bonnyrigg Heights",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BONNYRIGG HEIGHTS",
    bullets: [
      "Emergency leak repairs for Western Sydney storms",
      "Tile and Colorbond roof repairs and replacements",
      "Gutter cleaning and downpipe maintenance services",
      "Qualified local roofers covering all of Bonnyrigg Heights and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roof and Gutter Services for Bonnyrigg Heights",
    paragraphs: [
      "Bonnyrigg Heights homes face typical western Sydney conditions — intense summer heat, powerful afternoon storms and occasional hailstorms that can damage roofs and block guttering systems. Regular inspection and timely repairs make all the difference in avoiding costly water damage.",
      "From concrete and terracotta tile repairs to Colorbond roof replacements and full gutter upgrades, we deliver trusted roofing solutions that stand up to local weather. Our team works with family homes across the suburb, offering reliable service and clear pricing from start to finish.",
      "Whether you need urgent leak detection, valley cleaning, broken tile replacement or complete roof restoration, we handle every job with attention to detail and a focus on long-term results.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing specialist working on a Bonnyrigg Heights home",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Bonnyrigg Heights",
    subheading: "Western Sydney weather puts extra strain on roofing materials, especially during peak summer and storm season.",
    paragraphs: [
      "Extreme heat can cause metal roofing to expand and contract, loosening fixings and creating gaps where water can enter. Combined with sudden heavy rain and debris buildup, gutters quickly overflow and direct water into eaves and ceiling cavities.",
      "Cracked or slipped tiles, rusty valleys, blocked downpipes and worn flashing around chimneys are all frequent issues we see throughout the area. Left unattended, they lead to interior water damage, mould and expensive structural repairs.",
      "We provide thorough inspections, targeted repairs and preventative maintenance packages designed for Bonnyrigg Heights conditions — keeping your home watertight all year round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Edensor Park",
    quote:
      "After a big storm we had water coming through the ceiling. They came the same week, found the damaged tiles and fixed everything properly. Great communication and no mess left behind.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
