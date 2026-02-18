import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.79; // Eastwood
const AREA_LON = 151.081;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Eastwood",
  slug: "eastwood",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Eastwood Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EASTWOOD",
    bullets: [
      "Expert repairs for older tile and metal roofs",
      "Gutter cleaning and replacement for multi-storey buildings",
      "Leak detection and restoration for heritage properties",
      "Rapid response across Eastwood and surrounding North Shore suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Eastwood Homes and Buildings",
    paragraphs: [
      "Eastwood features a diverse mix of older Federation homes, post-war houses and modern residential developments. Each style presents unique roofing challenges that require experienced tradespeople who understand local building stock.",
      "Our team services tile roofs, Colorbond installations and metal roofing systems throughout Eastwood. We handle everything from minor leak repairs to full roof restorations, ensuring quality workmanship on every project regardless of scale.",
      "Whether you need urgent repairs after storm damage, preventative maintenance, or complete gutter replacement, we deliver reliable solutions with clear quotes and professional service from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repair work in Eastwood area",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Eastwood Properties",
    subheading: "Older homes and high-density buildings create specific maintenance challenges that demand proper attention.",
    paragraphs: [
      "Many Eastwood properties feature ageing terracotta tiles, corroded metal valleys and undersized guttering systems that were never designed for modern rainfall intensity. These issues lead to water penetration, ceiling stains and structural concerns if left unaddressed.",
      "Multi-storey buildings and townhouses often have complex roof lines with poor drainage, blocked downpipes and rusted box gutters. Regular inspections catch these problems before they escalate into expensive damage.",
      "We provide targeted repairs, gutter upgrades and complete roof restorations using quality materials and proven techniques. Our approach focuses on long-term performance rather than temporary patches.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "West Ryde",
    quote:
      "They replaced our entire gutter system and repaired damaged tiles after years of leaks. The team was efficient and thorough, and the roof has been completely watertight since. Highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
