import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.911; // Hurlstone Park
const AREA_LON = 151.132;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hurlstone Park",
  slug: "hurlstone-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HURLSTONE PARK",
    bullets: [
      "Expert roof repairs for established Inner West homes",
      "Tile roof restoration and metal roof replacement",
      "Complete guttering solutions and leaf guard installation",
      "Fast service across Hurlstone Park and surrounding Canterbury suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roof and Gutter Services for Hurlstone Park",
    paragraphs: [
      "Hurlstone Park features a mix of established homes from different eras, each with unique roofing requirements. Older tile roofs and metal systems require regular maintenance to prevent leaks and structural issues during Sydney weather patterns.",
      "Our team specialises in roof repairs, complete restorations and gutter maintenance for Inner West properties. We work with terracotta tiles, concrete tiles and Colorbond metal roofing to deliver solutions that match the character of your home.",
      "From minor leak detection to full roof replacements, we provide clear quotes, quality workmanship and reliable service. Every project is completed with attention to detail and a focus on long-term performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services in Hurlstone Park Inner West",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Hurlstone Park Homes",
    subheading: "Older roofing systems need attention before small issues turn into costly repairs and interior damage.",
    paragraphs: [
      "Many homes in the area have ageing tile roofs with cracked or slipped tiles, deteriorating valleys and worn flashing. These issues allow water entry during rain, leading to ceiling damage and timber deterioration.",
      "Gutters on older properties often sag or develop rust holes, causing water to overflow and damage fascia boards. Blocked downpipes and inadequate drainage also create pooling around foundations.",
      "We provide thorough roof inspections, targeted repairs and complete restoration services. Whether you need re-bedding and re-pointing, valley replacements or full gutter upgrades, we deliver lasting solutions that protect your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer L.",
    suburb: "Canterbury",
    quote:
      "Our old tile roof had multiple leaks and damaged flashing. The team completed a full restoration with new valleys and re-bedding. The work was excellent and the roof looks brand new.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
