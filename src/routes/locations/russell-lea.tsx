import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.864; // Russell Lea
const AREA_LON = 151.139;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Russell Lea",
  slug: "russell-lea",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Russell Lea Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RUSSELL LEA",
    bullets: [
      "Roof repairs for riverside homes and weatherboard cottages",
      "Metal roof replacements and Colorbond installations",
      "Gutter cleaning and replacement for waterfront exposure",
      "Fast response across Russell Lea and the surrounding Inner West",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Guttering Solutions in Russell Lea",
    paragraphs: [
      "Russell Lea sits close to the Parramatta River, home to a mix of weatherboard cottages, brick homes and modern renovations — all exposed to river winds, salt moisture and unpredictable Sydney weather.",
      "We provide roof repairs, metal roof replacement, tile restoration and full gutter upgrades designed to handle local conditions. Whether you need leak detection, valley repairs or storm damage assessment, we cover the full scope.",
      "Our team works with Colorbond, tiled roofs and metal sheeting. Every project is completed with clean workmanship, transparent pricing and a focus on long-term performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and guttering work in Russell Lea",
  },

  problemsBlock: {
    heading: "Common Roof & Gutter Issues We Fix in Russell Lea",
    subheading: "Riverside exposure and compact blocks mean roofs need regular attention to stay watertight.",
    paragraphs: [
      "Homes near the water face extra pressure from salt air, high winds and moisture retention — leading to rust on metal roofs, cracked ridge capping, blocked valleys and deteriorating flashings.",
      "If you notice water stains on ceilings, sagging gutters, loose downpipes or pooling after rain, those are signs your roof or gutter system needs attention before the next storm arrives.",
      "We handle everything from targeted repairs and gutter replacements to full roof restorations. Our goal is to keep your roof sealed, your gutters flowing and your home protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Five Dock",
    quote:
      "They replaced our rusted gutters and repaired cracked tiles after winter storms. The crew was punctual, tidy and the work has held up perfectly through heavy rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
