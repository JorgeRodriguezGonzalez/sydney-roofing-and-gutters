import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.934; // Bardwell Park
const AREA_LON = 151.128;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bardwell Park",
  slug: "bardwell-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bardwell Park Roofing Specialists Since 2016",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BARDWELL PARK",
    bullets: [
      "Comprehensive roof repairs for established homes",
      "Tile, metal and Colorbond roofing solutions",
      "Guttering upgrades and downpipe replacements",
      "Storm damage assessment and rapid leak detection across Bardwell Park homes",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing and Guttering Solutions in Bardwell Park",
    paragraphs: [
      "Bardwell Park is home to a diverse mix of established properties, from brick cottages to renovated family homes. Many roofs in this suburb date back several decades and benefit from regular maintenance and timely repairs.",
      "We provide professional roofing services for Bardwell Park residents, covering everything from tile replacements and metal roof restoration to complete guttering overhauls. Our team understands the unique challenges of older roofing systems and delivers solutions that extend their lifespan.",
      "Whether you need a quick leak repair, a full roof restoration or new Colorbond installation, we work with transparency and precision. Every job is completed to Australian standards, with clear communication from quote to final inspection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter repairs in Bardwell Park",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Bardwell Park",
    subheading: "Older homes often face challenges with ageing roof materials, cracked tiles and outdated gutter systems.",
    paragraphs: [
      "Many properties in Bardwell Park feature terracotta or concrete tile roofs that have weathered decades of summer storms and winter rain. Cracked tiles, deteriorating mortar and worn flashing can all lead to water ingress if left unaddressed.",
      "Guttering systems on older homes may sag, rust or become blocked with debris, causing water to pool near foundations or overflow during heavy rain. This can damage fascia boards, eaves and interior ceilings over time.",
      "We specialise in diagnosing these issues early and providing targeted solutions. From ridge cap re-bedding and valley repairs to complete gutter replacement, our work is designed to protect your home and prevent costly water damage down the track.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael S.",
    suburb: "Bexley",
    quote:
      "Our roof was leaking in two spots after a big storm. The team came out quickly, found the problem and replaced several cracked tiles. They even cleaned the gutters while they were up there. Very happy with the service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
