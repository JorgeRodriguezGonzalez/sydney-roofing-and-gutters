import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.882; // Leichhardt
const AREA_LON = 151.156;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Leichhardt",
  slug: "leichhardt",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Leichhardt Roof Restoration & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LEICHHARDT",
    bullets: [
      "Heritage roof repairs for terrace homes",
      "Tile, slate and Colorbond restoration work",
      "Gutter replacements for tight-access properties",
      "Leak detection and repairs for Victorian-era roofs across Leichhardt",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Heritage Homes in Leichhardt",
    paragraphs: [
      "Leichhardt is home to Victorian terraces, federation cottages and character properties that demand careful roofing work — especially when dealing with original tile, slate or narrow access points.",
      "We work across Norton Street, Marion Street and surrounding areas to deliver roof repairs, restorations and gutter replacements that respect heritage features while ensuring modern weatherproofing and drainage.",
      "Our team handles terracotta tiles, slate roofs, metal valleys and custom guttering — with attention to period details, structural integrity and long-term performance in inner-city conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration work on terrace homes in Leichhardt",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Leichhardt Homes",
    subheading: "Older roofs in inner-city areas often face unique challenges — from cracked tiles to rusted iron and tight-access repairs.",
    paragraphs: [
      "Many Leichhardt properties still have original terracotta tiles or slate that has lasted decades — but age, weather and poor past repairs can lead to cracked tiles, sagging sections and persistent leaks.",
      "Narrow laneways, shared walls and limited roof access make DIY fixes risky. We use proper scaffolding, safety systems and specialised tools to complete repairs without damaging heritage features or surrounding properties.",
      "Whether you need tile replacements, valley re-lining, gutter upgrades or full roof restoration — we deliver clean, compliant work that protects your home and maintains its character.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Annandale",
    quote:
      "Our terrace had ongoing leaks from cracked tiles and old valleys. They replaced everything carefully, matched the tiles perfectly and solved the problem. Great work from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
