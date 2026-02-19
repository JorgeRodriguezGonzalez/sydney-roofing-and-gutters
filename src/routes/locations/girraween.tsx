import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.800; // Girraween
const AREA_LON = 150.944;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Girraween",
  slug: "girraween",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Girraween Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GIRRAWEEN",
    bullets: [
      "Heat-resistant repairs for Western Sydney conditions",
      "Metal and Colorbond roof installations and restorations",
      "Leak detection and rapid repairs for residential properties",
      "Guttering solutions for summer storms and heavy downpours in the area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Work Throughout Girraween",
    paragraphs: [
      "Girraween sits in Western Sydney where summer temperatures regularly hit 40 degrees and above, putting extra stress on metal roofing, sealants and flashing that can crack or fail under extreme heat conditions.",
      "We service both established homes and newer developments across Girraween with metal roof repairs, Colorbond installations, tile replacements and complete guttering upgrades designed to handle intense heat and sudden storm events.",
      "Our team focuses on durable materials, precise workmanship and transparent pricing — so whether you need emergency leak repairs or a planned roof restoration, you get a solution that lasts through Western Sydney weather.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Metal roof repair and guttering work in Girraween",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Resolve in Girraween",
    subheading: "Extreme heat, intense UV and sudden storms create specific challenges for roofs across Western Sydney suburbs.",
    paragraphs: [
      "Metal roofs expand and contract daily during summer heatwaves, which can loosen screws, crack sealants around penetrations and cause fasteners to work free — resulting in leaks when the next storm arrives.",
      "Gutters and downpipes become overwhelmed during intense summer downpours, especially if they are undersized, blocked with debris or sagging from age — leading to overflow damage to fascias, eaves and walls.",
      "We conduct thorough roof inspections to identify heat damage, structural movement, missing tiles, rusted valleys and poor drainage before providing targeted repairs, full restorations or complete gutter replacements as needed.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Greystanes",
    quote:
      "Our metal roof was leaking badly after the last heatwave. They pinpointed the failed sealants, replaced them properly and checked the whole system. No more leaks — excellent service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
