import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.921; // Earlwood
const AREA_LON = 151.126;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Earlwood",
  slug: "earlwood",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Earlwood Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EARLWOOD",
    bullets: [
      "Expert tile repairs for heritage bungalows",
      "Leak detection and restoration on older rooflines",
      "Gutter cleaning and realignment to prevent overflow",
      "Quality workmanship that respects character homes across Earlwood and Undercliffe",
    ],
  },

  introBlock: {
    heading: "Roofing Services for Earlwood Homes and Families",
    paragraphs: [
      "Earlwood is home to beautiful californian bungalows, art deco facades and mature street trees that give the area its distinct charm. But many of these homes still have original tiles and older gutter systems that need careful attention.",
      "We work with terracotta tiles, slate, Colorbond and older metal roofing, providing leak repairs, restoration services and gutter upgrades designed for Inner West conditions (heavy rain, wind gusts and debris build-up).",
      "From minor tile replacements to complete roof overhauls, we focus on matching materials to maintain the look and integrity of your home while keeping everything watertight and functional for the long term.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs on a heritage home in Earlwood",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in Earlwood",
    subheading: "Older homes bring character — and sometimes hidden issues behind the fascia, valleys and ridge capping.",
    paragraphs: [
      "If you see cracked or broken tiles, water stains on ceilings, rusted valleys or gutters overflowing during rain, your roof system may be showing the signs of age or storm damage.",
      "Many homes in Earlwood have original roof structures from the 1920s and 30s. Without regular maintenance, small leaks can lead to timber rot, internal damage and expensive remediation work.",
      "We provide comprehensive inspections, targeted repairs and full restoration options to preserve the character of your home and protect it from further deterioration. Every job is completed with attention to detail and respect for the heritage style.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Amanda F.",
    suburb: "Undercliffe",
    quote:
      "Our bungalow had cracked tiles and leaking valleys for years. They matched everything perfectly and fixed the gutters as well. Clean work, no mess, and really knowledgeable about older homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
