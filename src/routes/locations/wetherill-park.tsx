import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.843; // Wetherill Park
const AREA_LON = 150.910;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wetherill Park",
  slug: "wetherill-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Solutions for Industrial and Residential Properties",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WETHERILL PARK",
    bullets: [
      "Metal roofing and Colorbond repairs for warehouses and homes",
      "Leak detection and gutter repairs across commercial sites",
      "Heat-resistant coatings for Western Sydney summer conditions",
      "Fast response for industrial roofing emergencies and residential maintenance work",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Wetherill Park Homes and Businesses",
    paragraphs: [
      "Wetherill Park combines a major industrial precinct with residential zones, creating unique roofing demands for both warehouse metal roofs and suburban tile roofs. The Western Sydney climate adds pressure with extreme heat, severe storms and rapid temperature shifts that stress roofing materials over time.",
      "Whether you manage a commercial property on Polding Street or own a home in the residential streets, we deliver metal roof repairs, gutter replacements, tile restoration and leak detection tailored to local conditions. Our work covers Colorbond, tile and corrugated metal systems.",
      "We know the difference between industrial urgency and residential quality expectations. Every job receives the same attention to detail, clear quotes and durable workmanship built to handle Western Sydney weather extremes year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Commercial and residential roofing repairs in Wetherill Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Wetherill Park Properties",
    subheading: "Western Sydney heat and storm activity create serious wear on both metal and tile roofing systems.",
    paragraphs: [
      "Summer temperatures regularly exceed 40 degrees, causing metal roofs to expand and contract rapidly. This movement loosens fasteners, cracks sealant and accelerates rust formation around screw points and valleys. Industrial roofs suffer additional stress from equipment loads and foot traffic during maintenance access.",
      "Severe storm cells bring heavy rain, hail and wind gusts that tear flashing, crack tiles and overwhelm poorly designed gutter systems. Water pooling on flat commercial roofs or in blocked residential gutters leads to internal leaks, ceiling damage and structural deterioration if not addressed quickly.",
      "We provide emergency leak repairs, full metal roof restorations, gutter upgrades for better drainage capacity, and preventative maintenance programs for both commercial and residential clients. Our goal is to extend roof life and eliminate recurring leak problems.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael T.",
    suburb: "Fairfield",
    quote:
      "Our warehouse roof had multiple leak points after the last big storm. They responded within 24 hours, sealed everything properly and replaced damaged sections. No more water coming through — excellent service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
