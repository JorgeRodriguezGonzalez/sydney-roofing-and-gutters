import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.078; // Bradbury
const AREA_LON = 150.814;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bradbury",
  slug: "bradbury",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bradbury Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BRADBURY",
    bullets: [
      "Colorbond and tile roof repairs for local homes",
      "Guttering solutions designed for southwest Sydney weather",
      "Fast response for storm damage and leak repairs",
      "Reliable service across Bradbury and surrounding Campbelltown suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Bradbury Homes",
    paragraphs: [
      "Bradbury is a residential suburb where many homes were built in the 1990s and 2000s, and roofs are now reaching the age where maintenance and repairs become essential to avoid larger problems down the track.",
      "We service Colorbond, tile and metal roofing across Bradbury, offering everything from targeted leak repairs and gutter cleaning to full roof restorations and weatherproofing treatments that suit the local climate.",
      "Our team understands the conditions in southwest Sydney and we focus on lasting repairs, transparent pricing and clear communication so you know exactly what work is needed and why.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work in Bradbury homes",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Bradbury",
    subheading: "Western Sydney heat and occasional storms can take a toll on roofs over time.",
    paragraphs: [
      "Roof issues often start small but escalate quickly when ignored. Cracked or lifted tiles, rusted Colorbond panels, blocked gutters and failing valleys are common after years of exposure to hot summers and unpredictable weather.",
      "If you notice water stains on ceilings, sagging gutters, overflow during rain or visible rust on your roof, it means the system is already under stress and needs attention before the problem spreads.",
      "We provide thorough inspections, targeted repairs and complete restoration options designed to protect your home and extend the life of your roof system without unnecessary costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jason K.",
    suburb: "Ambarvale",
    quote:
      "Had a leak above the garage after heavy rain. They found the issue fast, replaced damaged tiles and checked the whole roof. No problems since and the quote was spot on.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
