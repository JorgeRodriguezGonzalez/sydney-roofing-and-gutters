import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.852; // Auburn
const AREA_LON = 151.033;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Auburn",
  slug: "auburn",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Auburn Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "AUBURN",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Storm damage assessment and leak detection",
      "Gutter cleaning and replacement services",
      "Fast response for older homes and modern builds across Auburn",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Guttering Solutions for Auburn Homes",
    paragraphs: [
      "Auburn features a diverse mix of older weatherboard homes, brick properties and newer townhouse developments. Each style brings different roofing challenges, from aged terracotta tiles to modern metal installations requiring regular upkeep.",
      "Western Sydney weather puts roofs under constant pressure. Summer heat above 40 degrees causes expansion and contraction, while heavy downpours test every gutter and downpipe. Both conditions accelerate wear and expose weak points fast.",
      "We deliver roof repairs, restorations and guttering work across Auburn. Our team handles Colorbond, concrete tile and metal roofs with attention to detail, clear communication and workmanship built to handle the local climate.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Auburn",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Repair in Auburn",
    subheading: "Extreme heat and sudden storms create roofing problems that need professional attention before they escalate.",
    paragraphs: [
      "Older tile roofs in Auburn often show cracked or slipped tiles after storms. Metal roofs expand in extreme heat, loosening fixings and creating potential leak points. Both issues are manageable with early detection and targeted repairs.",
      "Gutters clogged with debris cause overflow during heavy rain, leading to fascia rot, water entry and ceiling stains. Rusted sections and poor falls worsen the problem, especially in properties with older drainage layouts.",
      "We provide thorough inspections, preventative maintenance and complete restoration options. Whether you need a handful of tiles replaced or a full gutter system upgrade, we focus on long-term solutions that suit your property and budget.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Lidcombe",
    quote:
      "Called them after noticing water marks on the ceiling. They arrived quickly, found cracked tiles and poor flashing. Fixed everything in one day and the price was very reasonable. Great service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
