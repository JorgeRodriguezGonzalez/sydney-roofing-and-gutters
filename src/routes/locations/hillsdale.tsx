import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.949; // Hillsdale
const AREA_LON = 151.229;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hillsdale",
  slug: "hillsdale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hillsdale Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HILLSDALE",
    bullets: [
      "Coastal roofing repairs built to withstand salt air",
      "Leak detection and tile replacement for older homes",
      "Gutter upgrades and downpipe installation for drainage",
      "Free quotes and fast service across Hillsdale and surrounding eastern suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Solutions for Hillsdale Homes",
    paragraphs: [
      "Hillsdale homes face unique roofing challenges, from coastal weather patterns that accelerate wear on tiles and gutters to the mix of older weatherboard cottages and modern townhouses that require tailored solutions.",
      "We deliver roof repairs, leak detection, tile replacements, Colorbond installations and gutter upgrades designed for the coastal conditions of the eastern suburbs. Our team understands how salt air, wind and heavy rain affect roofing materials over time.",
      "Whether you need emergency repairs after a storm or a full roof restoration to protect your investment, we provide transparent quotes, quality workmanship and long-lasting results that keep your home dry and secure.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and gutter installation in Hillsdale",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Hillsdale",
    subheading: "Coastal exposure and older housing stock mean roofs need regular attention to prevent leaks and deterioration.",
    paragraphs: [
      "Salt air corrodes metal flashings and gutters faster than inland areas, while strong winds can lift tiles and damage valleys. If your roof shows rust stains, cracked or missing tiles, or water pooling after rain, those problems will only worsen without professional repairs.",
      "Blocked gutters and undersized downpipes often cause overflow during storms, leading to staining, foundation erosion and internal water damage. Many older homes in Hillsdale also have asbestos gutters that need safe replacement with modern Colorbond systems.",
      "We assess the full roof system, identify weak points and provide practical solutions including targeted repairs, preventative maintenance and full replacements where needed. Every fix is backed by quality materials and workmanship you can trust.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel K.",
    suburb: "Maroubra",
    quote:
      "They replaced our rusted gutters and fixed several cracked tiles on the northern side. The team was efficient, cleaned up thoroughly and the quote was very reasonable. No more leaks during heavy rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
