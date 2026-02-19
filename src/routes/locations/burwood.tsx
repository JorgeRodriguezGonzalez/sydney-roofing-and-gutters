import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.877; // Burwood
const AREA_LON = 151.104;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Burwood",
  slug: "burwood",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Burwood Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BURWOOD",
    bullets: [
      "Expert service for mixed residential and commercial properties",
      "Tile, Colorbond and metal roof repairs and restorations",
      "Storm damage repairs and emergency leak detection",
      "Same-day quotes available for Burwood and surrounding inner-west suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services Across Burwood",
    paragraphs: [
      "Burwood is a busy inner-west suburb with diverse building types ranging from older character homes to modern apartment complexes. Each property type comes with unique roofing challenges that require experienced attention.",
      "Whether you have an older terrace with original slate tiles, a brick home with concrete roof tiles or a newer property with Colorbond, our team delivers targeted repairs, restorations and guttering solutions suited to local conditions.",
      "We work across Burwood, Strathfield, Croydon and Ashfield providing reliable service with transparent pricing, quality materials and a focus on lasting results that protect your property investment.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and restoration work in Burwood",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Burwood",
    subheading: "Older roof systems and unpredictable weather can lead to leaks, rust and drainage problems.",
    paragraphs: [
      "Many properties in Burwood feature ageing roof materials that need ongoing maintenance. Cracked or slipped tiles, rusted flashings and blocked valleys often go unnoticed until leaks appear inside the home.",
      "Heavy rain events combined with inadequate gutter capacity can cause water to pool or overflow, leading to damage to fascias, eaves and even interior ceilings. Storm damage from branches and debris adds further risk.",
      "Our inspections identify problem areas early and provide practical repair or restoration options. Whether it is replacing broken tiles, sealing penetrations or upgrading gutters, we ensure your roof system stays watertight year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda K.",
    suburb: "Strathfield",
    quote:
      "Called them after noticing water stains on the ceiling. They came out quickly, found the leak and fixed it properly. Great communication and fair pricing. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
