import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.795; // St Clair
const AREA_LON = 150.785;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "St Clair",
  slug: "st-clair",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "St Clair Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ST CLAIR",
    bullets: [
      "Complete roof repairs and restorations for Western Sydney conditions",
      "Colorbond and tile roof maintenance for extreme heat",
      "Gutter cleaning and replacement for heavy storm seasons",
      "Local tradies serving St Clair and surrounding suburbs with reliable service",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for St Clair Homes",
    paragraphs: [
      "St Clair homes face the full force of Western Sydney weather — intense summer heat, strong winds and sudden downpours that test every roof and gutter system throughout the year.",
      "Our team provides roof repairs, restoration work and complete guttering solutions tailored to these demanding conditions. Whether you have Colorbond metal roofing, concrete tiles or terracotta, we deliver work that stands up to the climate.",
      "From leak detection and valley repairs to full roof restoration and gutter upgrades, we focus on quality workmanship, transparent pricing and making sure your home stays protected season after season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and maintenance in St Clair",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in St Clair",
    subheading: "Western Sydney weather creates unique challenges — extreme heat, heavy rain and strong winds take their toll on roofing systems.",
    paragraphs: [
      "When temperatures push past 40 degrees, metal roofs expand and contract, flashings weaken and sealants dry out. Tile roofs face cracking and displacement from thermal stress, leaving homes vulnerable to leaks during the next storm.",
      "Blocked gutters and inadequate drainage turn sudden downpours into overflow problems. Water backs up into eaves, ceilings develop stains and structural timber begins to rot if repairs are delayed.",
      "We diagnose the root cause of every issue — whether it is damaged valley irons, broken tiles, worn ridge capping or undersized guttering — and deliver repairs that last, backed by local knowledge and proper materials.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Erskine Park",
    quote:
      "They repaired our leaking valley and replaced the rusted sections of gutter before summer. The work was fast and thorough, and we have had no issues through the last two storm seasons.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
