import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.704; // Hornsby
const AREA_LON = 151.099;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hornsby",
  slug: "hornsby",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hornsby Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HORNSBY",
    bullets: [
      "Roof repairs for all tile and metal systems",
      "Leak detection and roof restoration services",
      "Gutter cleaning and downpipe upgrades for heavy rain",
      "Fast response across Hornsby and surrounding Upper North Shore suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes in Hornsby",
    paragraphs: [
      "Hornsby sits at the gateway to the Upper North Shore, with established homes, newer units and a mix of tile and Colorbond roofs that need regular maintenance to handle Sydney storms.",
      "We provide roof repairs, roof restoration and guttering services across Hornsby and nearby areas, working with concrete tiles, terracotta, slate and metal systems that respond to local weather conditions.",
      "Our team focuses on thorough inspections, quality repairs and clear communication at every stage — from the first call to final clean-up, ensuring your roof stays watertight year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter work in Hornsby",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Hornsby",
    subheading: "Heavy rain and older housing stock often lead to blocked gutters, leaking valleys and damaged tiles.",
    paragraphs: [
      "Homes in Hornsby regularly face storm damage, blocked downpipes and leaf build-up from nearby bushland. When gutters overflow, water can seep into ceilings, walls and roofline timber.",
      "Cracked or lifted tiles, rusted flashings and corroded valley irons are common problems we address during inspections. Many homes also have inadequate fall or undersized gutters that struggle in heavy downpours.",
      "We provide targeted repairs, preventative maintenance and full restoration options tailored to your roof type — keeping your home dry and protected through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Waitara",
    quote:
      "After years of minor leaks, they found cracked valley irons and damaged sarking. The team replaced everything, cleaned the gutters and explained each step clearly. No more water stains.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
