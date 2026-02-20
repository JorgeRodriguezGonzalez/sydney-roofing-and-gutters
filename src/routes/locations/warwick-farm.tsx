import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.914; // Warwick Farm
const AREA_LON = 150.936;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Warwick Farm",
  slug: "warwick-farm",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Warwick Farm Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WARWICK FARM",
    bullets: [
      "Experienced with tile, Colorbond and metal roofs across western Sydney",
      "Roof repairs, replacements and complete restorations",
      "Gutter cleaning, repairs and downpipe upgrades",
      "Fast service for homes and commercial buildings in Warwick Farm and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Warwick Farm Homes and Businesses",
    paragraphs: [
      "Warwick Farm sits in western Sydney where summer heat pushes past 40 degrees, storms roll in hard and roofs take a real beating year after year.",
      "From older tile roofs needing restoration to newer Colorbond installations requiring repairs after storm damage, we handle the full range of roofing work for residential and light commercial properties throughout the area.",
      "Our team delivers honest assessments, quality materials and workmanship that lasts — backed by clear pricing, responsive service and a focus on getting the job done right the first time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering services in Warwick Farm",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Warwick Farm",
    subheading: "Western Sydney conditions mean roofs age faster — cracked tiles, rusted valleys and blocked gutters are common problems.",
    paragraphs: [
      "Extreme summer heat causes expansion and contraction that cracks tiles, loosens fixings and accelerates rust on metal components. Add heavy storms and debris, and small problems turn into leaks.",
      "If you are seeing water stains on ceilings, sagging gutters, cracked or missing tiles, or overflow during heavy rain, those are signs your roof system needs attention before damage spreads.",
      "We provide thorough inspections, targeted repairs for specific problems and full restoration options when roofs have reached the end of their lifespan — all tailored to local conditions and built to last.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Donna P.",
    suburb: "Liverpool",
    quote:
      "Our roof was leaking in three spots after the last big storm. They came out quickly, found all the issues and fixed everything properly. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
