import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.883; // Burwood Heights
const AREA_LON = 151.098;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Burwood Heights",
  slug: "burwood-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roofing Specialists in Burwood Heights",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BURWOOD HEIGHTS",
    bullets: [
      "Expert repairs for heritage and modern homes alike",
      "Storm damage assessment and rapid leak repairs",
      "Colorbond and tile roof restoration services",
      "Professional gutter cleaning and replacement for established properties throughout the area",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Burwood Heights Homes",
    paragraphs: [
      "Burwood Heights features a mix of established homes and modern residences, each with distinct roofing needs. From original terracotta tiles on older properties to contemporary Colorbond installations, local roofs face regular exposure to Sydney storms, humidity and seasonal temperature swings.",
      "Our team handles everything from minor leak repairs and gutter maintenance to complete roof restorations. We work across tile, metal and slate systems, ensuring each job meets Australian standards and delivers lasting weather protection.",
      "Whether you need urgent storm damage repairs or planned maintenance for an aging roof, we provide detailed inspections, transparent quotes and quality workmanship designed to protect your investment for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Burwood Heights",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Burwood Heights",
    subheading: "Older homes and mature trees create unique maintenance challenges that require experienced attention.",
    paragraphs: [
      "Many properties in the area have roofs that were installed decades ago. Cracked tiles, deteriorating ridge capping and worn flashing can allow water penetration, especially during heavy downpours. Without timely intervention, minor issues escalate into ceiling damage and structural concerns.",
      "Established gardens and street trees contribute to blocked gutters and downpipes. When debris accumulates, water overflows into fascias and eaves, causing rot and creating pathways for leaks. Regular cleaning and properly sized guttering systems prevent these problems before they start.",
      "We conduct thorough roof inspections to identify vulnerable points, then recommend targeted repairs or full restoration depending on the condition. Our goal is to extend roof lifespan while preventing costly emergency callouts during the next storm season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle P.",
    suburb: "Burwood",
    quote:
      "After noticing water stains on the ceiling, we called for an inspection. They found cracked tiles and blocked valleys, fixed everything efficiently and explained each step. No leaks since, even through recent storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
