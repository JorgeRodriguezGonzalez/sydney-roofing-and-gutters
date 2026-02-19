import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.860; // Concord
const AREA_LON = 151.105;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Concord",
  slug: "concord",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Solutions for Inner West Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CONCORD",
    bullets: [
      "Roof repairs and restorations for established homes",
      "Tile and Colorbond roof maintenance and upgrades",
      "Gutter cleaning and replacement to manage heavy rain",
      "Reliable service across Concord, North Strathfield and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Dependable Roofing Services for Concord and Surrounds",
    paragraphs: [
      "Concord is home to a mix of heritage properties, established brick homes and modern developments, each with unique roofing needs that require careful attention and experienced workmanship.",
      "Our team provides roof repairs, tile replacements, Colorbond installations and complete roof restorations across the area. We understand local building styles and the impact of Sydney weather on older and newer roof systems alike.",
      "Whether you need urgent leak repairs, gutter upgrades or a full roof restoration, we deliver quality results with clear communication and reliable service from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repair work in Concord",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Concord Homes",
    subheading: "Older roofs and changing weather patterns can lead to leaks, rust and structural wear over time.",
    paragraphs: [
      "Many homes in Concord feature original tile roofs and older gutter systems that show signs of age. Cracked tiles, rusted valleys and blocked downpipes can cause water to pool and seep into ceilings during heavy rain.",
      "We also see damage from wind-driven storms, tree debris accumulation and inadequate flashing around chimneys and skylights. Left unaddressed, these problems lead to interior water damage and costly repairs.",
      "Our inspections identify issues early, and our repair and restoration work is designed to extend roof life, improve drainage and protect your home investment for years ahead.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Melissa K.",
    suburb: "Strathfield",
    quote:
      "They replaced damaged tiles and resealed our valleys after we had leaks for months. The team was professional, thorough and cleaned up perfectly. Highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
