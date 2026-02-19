import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.065; // Campbelltown
const AREA_LON = 150.814;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Campbelltown",
  slug: "campbelltown",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Campbelltown Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CAMPBELLTOWN",
    bullets: [
      "Roof repairs for heritage homes and modern estates",
      "Storm damage assessment and emergency leak repairs",
      "Metal, tile and Colorbond roof restoration",
      "Gutter replacement and downpipe upgrades across Campbelltown and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Campbelltown Homes",
    paragraphs: [
      "Campbelltown is one of the oldest settled areas in Australia, with a unique mix of heritage properties, established family homes and newer housing developments. Each style brings different roofing challenges — from aging tiles on older homes to modern metal roofs that need regular maintenance.",
      "The area experiences hot summers, severe storms and heavy rain events that can expose weak points in roofs and gutters. Whether you need a minor repair, full restoration or complete gutter system upgrade, we deliver reliable workmanship that handles local weather conditions.",
      "We service all roof types including concrete and terracotta tiles, Colorbond steel, metal sheeting and older slate installations. Our team focuses on durable solutions, transparent pricing and completing work on time without shortcuts.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in Campbelltown",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Campbelltown Homes",
    subheading: "Older roofs and summer storms combine to create leaks, rust damage and gutter overflow problems.",
    paragraphs: [
      "Many Campbelltown homes have roofs that are 20 to 40 years old, with tiles that crack under heat stress or metal sections corroded by years of rain and humidity. Storm damage from falling branches and high winds is also a frequent issue in established areas with large trees.",
      "Gutters often fail first — rust holes, sagging sections and blocked downpipes lead to water spilling over and damaging fascias, eaves and internal ceilings. These problems get worse with each rain event if left untreated.",
      "We provide thorough inspections, honest assessments and targeted repairs or full restorations depending on the condition. Our goal is to extend the life of your roof system and prevent costly water damage before it starts.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen B.",
    suburb: "Ingleburn",
    quote:
      "Our roof was leaking in three spots after the last storm. The team came out fast, identified all the damaged tiles and fixed everything in one day. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
