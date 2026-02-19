import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.084; // Glen Alpine
const AREA_LON = 150.793;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glen Alpine",
  slug: "glen-alpine",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Glen Alpine Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLEN ALPINE",
    bullets: [
      "Modern roofing solutions for newer estates",
      "Colorbond repairs, restorations and leak fixes",
      "Gutter upgrades for summer storms and heat",
      "Fast quotes and quality workmanship across Glen Alpine and Campbelltown",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Guttering Services in Glen Alpine",
    paragraphs: [
      "Glen Alpine is a modern residential community in the Campbelltown area, with many homes featuring Colorbond and tile roofing that need proper care to handle southwestern Sydney heat and storm conditions.",
      "We provide roof repairs, restorations and guttering work suited to newer estates where small defects, installation issues or storm damage need fast attention before warranties expire or problems escalate.",
      "Our team delivers clean work, honest assessments and lasting fixes for metal roofing, tile repairs and gutter systems, ensuring your home stays protected through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof and gutter repairs in Glen Alpine",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Glen Alpine",
    subheading: "Newer homes still need maintenance, especially after storms or when builder fixes were incomplete.",
    paragraphs: [
      "Hot summers cause metal roofs to expand and contract, which can loosen fasteners, create leaks at flashings or lead to noise during temperature changes. These issues need proper inspection and repair.",
      "Storm damage from heavy rain or hail can dent Colorbond, crack tiles or overload gutters that were undersized during construction. Water overflow and pooling can damage walls and foundations.",
      "We handle leak detection, gutter cleaning, downpipe repairs, valley replacements and full roof restorations, making sure your system works properly and lasts for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura K.",
    suburb: "Campbelltown",
    quote:
      "Had a leak around the flashing that started small but got worse after rain. They found the issue fast, fixed it properly and cleaned up everything. Great service and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
