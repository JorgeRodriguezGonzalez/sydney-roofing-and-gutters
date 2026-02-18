import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.053; // Bardia
const AREA_LON = 150.832;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bardia",
  slug: "bardia",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bardia Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BARDIA",
    bullets: [
      "Expert roofing solutions for new estates",
      "Fast response for storm damage and leak repairs",
      "Colorbond, tile and metal roof installations",
      "Gutter cleaning, repairs and full replacements across Macarthur",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Bardia",
    paragraphs: [
      "Bardia is home to modern estates and growing families — which means roofs are newer, but they still need expert care when storms hit or when builder warranties expire and maintenance becomes your responsibility.",
      "From roof inspections and leak detection to gutter cleaning and full roof restorations, we service Bardia homes with quality workmanship and transparent pricing.",
      "Whether you need urgent storm repairs, proactive maintenance or a complete roof upgrade, our team works with all major roof types including Colorbond steel, concrete tiles and metal sheeting.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering in Bardia",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Bardia",
    subheading: "New homes still need proper maintenance — especially after heavy rain and Western Sydney heat.",
    paragraphs: [
      "Even recently built homes can develop problems like blocked downpipes, poor drainage or damaged flashing if they were not installed correctly or if extreme weather exposes weaknesses.",
      "Western Sydney summers mean your roof faces intense UV exposure, thermal expansion and sudden storms that can loosen fixings or crack sealants over time.",
      "We inspect, diagnose and repair roofing and gutter problems quickly — from minor leaks and rust spots to full gutter replacements and re-roofing when needed.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel K.",
    suburb: "Oran Park",
    quote:
      "Had a persistent leak after heavy rain that no one could find. They identified the cause within minutes and fixed it properly. Great communication and no mess left behind.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
