import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.911; // Clovelly
const AREA_LON = 151.260;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Clovelly",
  slug: "clovelly",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists Serving Clovelly",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLOVELLY",
    bullets: [
      "Protection against salt air and coastal wind exposure",
      "Tile, Colorbond and metal roof repairs and restorations",
      "Gutter replacement and leak detection services",
      "Trusted by homeowners across Clovelly and surrounding coastal suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Clovelly Homes",
    paragraphs: [
      "Clovelly sits on the coast between Coogee and Bronte, where ocean spray, salt air and coastal storms place constant pressure on roofing materials and gutter systems. Older homes with terracotta tiles need regular attention to prevent cracking and corrosion.",
      "We provide roof repairs, full restorations and guttering work designed for coastal conditions — protecting your home from leaks, rust and accelerated wear caused by exposure to the sea.",
      "Whether you need cracked tile replacement, Colorbond upgrades or corroded valley repairs, our team delivers durable results with minimal disruption and clear communication throughout the project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing repairs in Clovelly protecting homes from ocean exposure",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Clovelly",
    subheading: "Living near the ocean means your roof faces salt corrosion, wind-driven rain and faster material breakdown.",
    paragraphs: [
      "Coastal properties experience rust in metal flashings, cracked mortar in ridge caps, and corroded gutters long before inland homes. Wind lifts tiles, and salt accelerates wear on painted finishes.",
      "If you see staining on ceilings, water pooling in gutters after rain, rust spots forming on Colorbond or loose ridge tiles, these problems will only worsen without attention.",
      "We deliver targeted repairs, rust treatment and preventive upgrades — ensuring your roof remains watertight and structurally sound against the harsh coastal environment year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lauren K.",
    suburb: "Bronte",
    quote:
      "Our tile roof was suffering from salt damage and several tiles were loose after the winter storms. The team replaced damaged sections and sealed everything properly. No leaks since and the work was finished fast.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
