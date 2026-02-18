import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.599; // Berowra Waters
const AREA_LON = 151.117;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berowra Waters",
  slug: "berowra-waters",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waterfront Roofing Specialists for Berowra Waters",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEROWRA WATERS",
    bullets: [
      "Expert repairs for remote waterfront properties",
      "Rust prevention & marine air protection for Colorbond and metal roofs",
      "Leak detection & gutter upgrades for riverside homes",
      "Responsive service via road or water access – inspections scheduled efficiently",
    ],
  },

  introBlock: {
    heading: "Specialist Roofing for Riverside Homes in Berowra Waters",
    paragraphs: [
      "Berowra Waters presents unique challenges for homeowners. With riverside humidity, limited road access and dense surrounding bush, roofs here demand specialist attention and durable materials built for moisture exposure.",
      "Our team services waterfront properties across the Hawkesbury area, delivering roof restorations, leak repairs, guttering work and protective coatings suited to high-humidity environments where traditional roofing degrades faster.",
      "We work with Colorbond, metal sheeting and tile systems, coordinating access logistics carefully and using corrosion-resistant fixings and sealants designed for long-term performance in exposed river settings.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs for riverside homes in Berowra Waters",
  },

  problemsBlock: {
    heading: "Common Roof & Gutter Issues Along the Hawkesbury River",
    subheading: "River humidity, salt spray and dense vegetation accelerate corrosion and debris build-up on roofs.",
    paragraphs: [
      "Properties near the water experience higher rust rates on metal roofs, fastener corrosion and accelerated paint breakdown. Gutters collect leaf litter from overhanging eucalypts, blocking downpipes and causing overflow into walls and ceilings.",
      "Without regular maintenance, moisture penetration through rusted valleys or failed flashings leads to internal rot, ceiling stains and structural timber decay that is costly to repair once discovered.",
      "We provide comprehensive inspections, targeted rust treatment, gutter realignment, protective recoating and full restoration options designed to extend the life of roofs in challenging riverside microclimates.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca P.",
    suburb: "Cowan",
    quote:
      "Access was tricky but they coordinated everything smoothly. Replaced rusted sections, resealed all flashings and treated the entire roof surface. First proper maintenance in years and the difference is remarkable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
