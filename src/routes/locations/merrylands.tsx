import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.834; // Merrylands
const AREA_LON = 150.991;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Merrylands",
  slug: "merrylands",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Merrylands Roof Repairs & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MERRYLANDS",
    bullets: [
      "Expert repairs for older tile and metal roofing systems",
      "Leak detection and restoration for Western Sydney conditions",
      "Gutter cleaning and replacement for heavy summer storms",
      "Fast local service covering Merrylands and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes in Merrylands",
    paragraphs: [
      "Merrylands homes face the full force of Western Sydney weather — scorching summer heat above 40 degrees, sudden storms and aging roofing materials that need regular care to stay watertight.",
      "We provide targeted roof repairs, restorations and guttering upgrades designed for the mix of older tile roofs and metal systems common across this established suburb.",
      "From leak repairs and broken tile replacement to full gutter overhauls, our team delivers honest assessments, quality materials and workmanship that lasts through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and gutter services in Merrylands",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Merrylands",
    subheading: "Older properties and extreme heat mean roofing problems can escalate quickly without proper maintenance.",
    paragraphs: [
      "Cracked or slipped tiles, rusted metal sheets, sagging gutters and blocked downpipes are all common in established Western Sydney suburbs where roofing systems are decades old and exposed to intense UV and thermal cycling.",
      "Leaks often start small — a damp patch on the ceiling, water stains after heavy rain or gutters overflowing during summer storms — but delays turn minor repairs into major expenses.",
      "We inspect, repair and restore roofing systems to handle the local climate, preventing water damage and extending the life of your roof without unnecessary replacement costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Guildford",
    quote:
      "They fixed three cracked tiles and replaced our rusted front gutter in one day. The team was punctual, thorough and left everything clean. No leaks since and the price was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
