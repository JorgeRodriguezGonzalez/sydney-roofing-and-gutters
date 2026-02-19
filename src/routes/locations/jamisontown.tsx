import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.769; // Jamisontown
const AREA_LON = 150.682;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Jamisontown",
  slug: "jamisontown",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services for Jamisontown Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "JAMISONTOWN",
    bullets: [
      "Heat-resistant roof repairs and Colorbond installations",
      "Complete gutter repairs and valley maintenance",
      "Storm damage assessment and leak detection",
      "Quality roof restoration for western Sydney weather conditions",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Jamisontown Residents",
    paragraphs: [
      "Jamisontown experiences the full force of western Sydney weather with extreme summer heat regularly exceeding forty degrees and powerful storms that test every roof system. Homes in the area need roofing solutions built to handle these demanding conditions year after year.",
      "We provide comprehensive roofing services across Jamisontown including metal and tile roof repairs, complete gutter cleaning and replacement, leak investigations and full roof restorations. Our team works with Colorbond steel, concrete tiles and metal roofing systems common throughout the Penrith region.",
      "Whether you need emergency repairs after storm damage or proactive maintenance to prevent future problems, we deliver reliable workmanship backed by local experience and proper trade qualifications. Every project includes clear upfront quotes and thorough site cleanup.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and maintenance in Jamisontown",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Jamisontown",
    subheading: "Western Sydney heat and storm activity create specific challenges for roofs and guttering systems throughout Jamisontown.",
    paragraphs: [
      "Extended periods above forty degrees cause metal roofing to expand and contract repeatedly, loosening fasteners and creating gaps where leaks can develop. Colorbond sheets can lift at the edges and ridge capping often works loose over time without proper maintenance checks.",
      "Summer storms bring sudden downpours that overwhelm blocked gutters and damaged valleys, sending water into roof cavities and ceiling spaces. Cracked tiles, deteriorated flashing and sagging gutters all contribute to water entry during heavy rain events.",
      "If you have noticed rust spots on metal roofing, water stains on ceilings, overflowing gutters during storms or loose roof sections after high winds, a professional inspection will identify the underlying causes and prevent further deterioration.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew P.",
    suburb: "Penrith",
    quote:
      "Our gutters were completely blocked and overflowing every storm. The team cleared everything out, replaced damaged sections and fixed the downpipe drainage. Very thorough work and excellent communication throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
