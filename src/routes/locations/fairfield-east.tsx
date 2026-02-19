import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.867; // Fairfield East
const AREA_LON = 150.972;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Fairfield East",
  slug: "fairfield-east",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Fairfield East Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FAIRFIELD EAST",
    bullets: [
      "Expert repairs for tile and metal roofing",
      "Full roof restorations and leak detection",
      "Gutter cleaning and replacement for Western Sydney storms",
      "Local service across Fairfield East with transparent quotes",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Homes in Fairfield East",
    paragraphs: [
      "Fairfield East homes deal with Western Sydney heat and summer storms that test every roof and gutter system. From older tile roofs to Colorbond installations, regular maintenance keeps your home protected year-round.",
      "We work across Fairfield East providing roof repairs, full restorations and guttering upgrades. Whether you need emergency leak detection or planned maintenance before storm season, our team delivers clear quotes and quality workmanship.",
      "We understand local conditions: extreme heat, sudden downpours and the wear that comes from Sydney weather. Every job is completed with attention to detail, using materials designed for Australian conditions and backed by proper warranties.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Fairfield East",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Fairfield East",
    subheading: "Western Sydney heat and storms mean roofs and gutters face constant pressure throughout the year.",
    paragraphs: [
      "Cracked or lifted tiles, rusted valleys and blocked gutters are common problems after summer heat and storm activity. Older roofs may also show signs of previous DIY repairs that need professional attention.",
      "If you notice water stains on ceilings, pooling in gutters after rain or loose tiles after wind, these are early warning signs. Catching them early prevents more expensive structural damage down the track.",
      "We provide thorough inspections, targeted repairs and full restoration packages. Whether it is replacing broken tiles, resealing valleys or upgrading gutters for better drainage, we focus on long-term solutions that last.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Maria K.",
    suburb: "Fairfield",
    quote:
      "They fixed a leak that other trades could not find. Very thorough inspection and the repair was done properly with no mess. Highly recommend for anyone in the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
