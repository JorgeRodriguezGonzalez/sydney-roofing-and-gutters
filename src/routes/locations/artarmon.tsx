import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.809; // Artarmon
const AREA_LON = 151.185;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Artarmon",
  slug: "artarmon",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Artarmon Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ARTARMON",
    bullets: [
      "Targeted maintenance for heritage and modern homes",
      "Roof repairs, restorations and leak detection",
      "Gutter replacements suited to dense tree coverage",
      "Fast quotes across Artarmon, Chatswood and Lane Cove",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing & Guttering Services in Artarmon",
    paragraphs: [
      "Artarmon sits on the Lower North Shore with a mix of Federation-era cottages, mid-century apartments and modern townhouses — each with different roofing demands that require tailored solutions and experienced tradespeople.",
      "Covering Artarmon through to Chatswood, Willoughby and Lane Cove, we handle tile repairs, Colorbond restorations, full gutter replacements and emergency leak response for residential and commercial properties.",
      "Our team uses premium materials and proven techniques to deliver roofing outcomes that hold up against heavy rain, strong winds and the debris from mature eucalyptus trees across the North Shore.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering in Artarmon",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Problems We Fix in Artarmon",
    subheading: "Mature trees and ageing rooflines across the Lower North Shore mean gutters and flashing need regular attention.",
    paragraphs: [
      "Dense canopy cover in Artarmon drops leaves, bark and seed pods into gutters and valleys year-round. Without regular clearing, water backs up and finds its way into ceilings and wall cavities.",
      "Older terracotta and concrete tile roofs across the suburb are prone to cracking, ridge cap erosion and flashing failure — especially after prolonged wet weather or seasonal temperature shifts.",
      "We provide thorough inspections, preventative maintenance and targeted repair plans to keep your Artarmon property protected without unnecessary costs or disruption.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Willoughby",
    quote:
      "They cleared years of leaf build-up from our gutters and replaced several cracked tiles on the back slope. The whole job was done in a day — neat, professional and fairly priced.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
