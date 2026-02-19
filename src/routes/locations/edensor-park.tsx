import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.876; // Edensor Park
const AREA_LON = 150.874;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Edensor Park",
  slug: "edensor-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Edensor Park Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EDENSOR PARK",
    bullets: [
      "Expert tile and metal roof repairs",
      "Leak detection and gutter cleaning services",
      "Heat-resistant Colorbond installations for Western Sydney summers",
      "Fast response times across Edensor Park and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Edensor Park Homes",
    paragraphs: [
      "Edensor Park features a mix of brick homes and weatherboard properties that face the full force of Western Sydney heat, with summer temperatures often pushing past 40 degrees and sudden storm cells bringing heavy downpours.",
      "Our team provides targeted roof repairs, restorations and gutter upgrades for both terracotta tile and Colorbond metal roofs, working with materials that handle extreme temperature swings without cracking or warping.",
      "From minor leak fixes to complete roof overhauls, we deliver clean workmanship and honest advice — ensuring your home stays protected through every season without unnecessary extras or hidden charges.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs in Edensor Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Edensor Park",
    subheading: "Western Sydney heat and sudden storms create a tough environment for roofing systems.",
    paragraphs: [
      "Extreme heat causes older tiles to crack and metal fasteners to loosen, while rapid temperature drops during storms can warp flashing and create gaps where water finds its way through.",
      "If you notice ceiling stains, blocked downpipes, rusted valley irons or tiles that have shifted or cracked, these are clear signs your roof needs attention before minor problems escalate into major water damage.",
      "We assess the full system — from ridge capping and valley installations to gutter alignment and downpipe capacity — then provide practical solutions that match your budget and extend the life of your roof.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel T.",
    suburb: "Bonnyrigg",
    quote:
      "Our terracotta roof was leaking in two spots after the storms. The team came out quickly, found all the problem areas and replaced the damaged tiles. No more leaks and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
