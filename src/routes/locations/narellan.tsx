import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.044; // Narellan
const AREA_LON = 150.729;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Narellan",
  slug: "narellan",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Narellan Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NARELLAN",
    bullets: [
      "Complete roof repairs for homes and properties",
      "Storm damage repairs and leak detection services",
      "Colorbond and tile roof restoration work",
      "Gutter cleaning, replacement and installation across Narellan and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Narellan Homes and Properties",
    paragraphs: [
      "Narellan blends established residential pockets with newer developments in the Macarthur region, and every roof here faces exposure to summer heat, seasonal storms and the wear that comes with Western Sydney conditions.",
      "Whether you need repairs on an older tile roof, restoration of weathered Colorbond or gutter work on a newer property, we provide targeted solutions designed to handle local climate challenges and protect your home long-term.",
      "From initial inspection through to final clean-up, our team delivers professional roof repairs, restorations and guttering services with clear communication and quality workmanship at every stage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration work in Narellan",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve Across Narellan Properties",
    subheading: "Heat stress, storm damage and blocked gutters are frequent challenges for homes in this area.",
    paragraphs: [
      "Summer temperatures in Western Sydney regularly push past 40 degrees, causing expansion cracks in tiles, sealant breakdown and accelerated wear on ridge caps and valleys. Combined with sudden storm cells, this creates the perfect recipe for leaks.",
      "Blocked gutters from dust, debris and leaf litter lead to overflow during downpours, damaging fascias, soffits and even interior ceilings if left unaddressed. Early intervention prevents costly water damage repairs down the line.",
      "We handle everything from minor leak repairs and tile replacements through to full roof restorations, gutter upgrades and preventative maintenance plans that keep your roof system watertight and functioning correctly year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Amanda P.",
    suburb: "Camden",
    quote:
      "Called them after noticing water stains on the ceiling. They found cracked tiles and blocked valleys, fixed everything quickly and explained the whole process. Roof has been perfect since then.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
