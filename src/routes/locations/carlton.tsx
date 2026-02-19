import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.973; // Carlton
const AREA_LON = 151.119;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Carlton",
  slug: "carlton",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roofing Specialists in Carlton",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CARLTON",
    bullets: [
      "Roof repairs for tile and Colorbond systems",
      "Leak detection and waterproofing for older homes",
      "Complete gutter cleaning and replacement services",
      "Serving Carlton and surrounding southern Sydney suburbs with quality workmanship",
    ],
  },

  introBlock: {
    heading: "Professional Roof Repairs and Maintenance in Carlton",
    paragraphs: [
      "Carlton is home to a mix of traditional brick homes and modern renovations, many with older roof systems that require regular attention to prevent leaks and structural damage over time.",
      "Our team specializes in roof repairs, gutter maintenance and complete roof restorations for homes across the southern Sydney area. We work with concrete tiles, terracotta, Colorbond metal and slate roofing materials.",
      "Whether you need a quick leak repair, complete gutter replacement or full roof restoration, we provide transparent quotes and quality work backed by experience in local roofing conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work on a Carlton home",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Carlton Homes",
    subheading: "Older roofs and changing weather patterns mean proactive maintenance is essential for preventing costly damage.",
    paragraphs: [
      "Many homes in Carlton were built decades ago, and original roof systems are now reaching the end of their lifespan. Cracked tiles, corroded flashings and blocked valleys can lead to water damage inside your ceiling and walls.",
      "We also see recurring issues with rusted gutters, sagging rooflines and poor drainage that causes pooling and overflow during heavy rain. These problems only get worse if left unaddressed.",
      "Our inspection process identifies the root cause of leaks and structural wear, allowing us to recommend targeted repairs or a full restoration plan that fits your budget and protects your home long-term.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael K.",
    suburb: "Kogarah",
    quote:
      "They replaced all the rusted sections of our guttering and fixed the leaking valley that had been a problem for years. Professional service and no mess left behind. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
