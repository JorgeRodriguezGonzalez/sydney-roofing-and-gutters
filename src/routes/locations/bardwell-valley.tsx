import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.930; // Bardwell Valley
const AREA_LON = 151.132;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bardwell Valley",
  slug: "bardwell-valley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bardwell Valley Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BARDWELL VALLEY",
    bullets: [
      "Complete roof repairs and tile replacements for residential homes",
      "Metal and Colorbond roof installations and restoration work",
      "Gutter cleaning, repairs and leaf guard installations",
      "Expert leak detection and storm damage repairs across Bardwell Valley",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Gutter Services in Bardwell Valley",
    paragraphs: [
      "Bardwell Valley features a mix of established residential homes and newer developments, many with tile and metal roofs that require regular maintenance to handle changing Sydney weather conditions.",
      "From storm damage repairs to full roof restorations, our team delivers quality workmanship for tile roofs, metal roofs and Colorbond installations across Bardwell Valley and surrounding areas including Bexley and Arncliffe.",
      "We specialise in leak detection, gutter repairs, downpipe upgrades and preventive maintenance that keeps your roof system in top condition year-round with transparent pricing and reliable service.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roof restoration and gutter services in Bardwell Valley",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Bardwell Valley",
    subheading: "Established homes and seasonal weather can create roofing problems that escalate if left unaddressed.",
    paragraphs: [
      "Many homes in Bardwell Valley have tile roofs that can develop cracked or broken tiles after storms, leading to water ingress and interior ceiling damage if not repaired quickly.",
      "Blocked gutters are another common problem, especially after heavy rain or when leaves and debris accumulate from nearby trees, causing overflow, water pooling and potential foundation issues.",
      "We provide thorough inspections, targeted repairs and preventive maintenance plans to address leaks, rusted metal sections, sagging gutters and storm damage before they become costly replacements.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle D.",
    suburb: "Bexley",
    quote:
      "Fast response after storm damage took out several tiles. They arrived within two days, replaced everything properly and checked the entire roof. No leaks since and pricing was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
