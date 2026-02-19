import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.068; // Engadine
const AREA_LON = 151.015;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Engadine",
  slug: "engadine",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Sutherland Shire Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ENGADINE",
    bullets: [
      "Complete roof repairs and tile replacement for family homes",
      "Guttering maintenance for storm-prone areas near bushland",
      "Leak detection and targeted roof repairs",
      "Colorbond, tile and metal roofing installations with workmanship warranty",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering Solutions for Homes in Engadine",
    paragraphs: [
      "Engadine is a well-established family suburb in the Sutherland Shire, with homes ranging from classic brick and tile designs to more contemporary builds. The proximity to Royal National Park and regular seasonal storms means roofs and gutters face consistent exposure to wind, tree debris and heavy rainfall.",
      "We provide complete roofing services across Engadine and surrounding areas — including roof repairs, tile replacement, gutter cleaning, downpipe upgrades and full roof restorations for both Colorbond and concrete tile systems.",
      "Our team focuses on thorough inspections, transparent quoting and long-lasting repairs that protect your home from water damage, rust and structural wear over time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter maintenance in Engadine",
  },

  problemsBlock: {
    heading: "Common Roofing and Guttering Issues We Solve in Engadine",
    subheading: "Proximity to bushland and seasonal weather patterns create specific maintenance challenges for local roofs.",
    paragraphs: [
      "Homes near the national park or bushland reserves often experience heavy accumulation of leaves, bark and seed pods in gutters and roof valleys. When gutters become blocked, water backs up and can seep into roof cavities, ceilings and walls.",
      "Storm activity in the Sutherland Shire region also leads to loose or cracked tiles, damaged ridge capping and valley rust — especially on older tile roofs that have not been maintained regularly.",
      "We deliver targeted repairs for leaking roofs, rusted valleys, sagging gutters and broken tiles, as well as full restoration packages for roofs showing signs of age, wear or inadequate prior work.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Melissa T.",
    suburb: "Como",
    quote:
      "They replaced damaged tiles and cleaned out years of gum leaves from our gutters. The team was punctual, professional and left the site spotless. Very happy with the outcome.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
