import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.024; // Kearns
const AREA_LON = 150.803;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kearns",
  slug: "kearns",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roofing Experts Servicing Kearns",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KEARNS",
    bullets: [
      "Roof repairs and restorations for all roof types",
      "Gutter cleaning, repairs and replacement services",
      "Leak detection and fast emergency roof repairs",
      "Free quotes for homes across Kearns and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Kearns Homes",
    paragraphs: [
      "Kearns homes face the challenges of western Sydney weather, including summer heat that regularly exceeds 35 degrees, strong afternoon storms and seasonal wind that can lift or damage tiles and sheeting.",
      "We provide roof repairs, tile replacements, Colorbond installations and complete gutter systems for properties across Kearns, working with tile, metal and Colorbond roofing on homes of all ages and styles.",
      "Our team delivers honest assessments, quality materials and reliable workmanship — from small leak repairs to full roof restorations, we treat every job with the same attention to detail and care.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter work completed in Kearns",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Kearns Residents",
    subheading: "Western Sydney heat and afternoon storms create specific challenges for roofs and gutters in this area.",
    paragraphs: [
      "Heat expansion can crack older tiles and warp metal flashing, while storms bring heavy bursts of rain that overload blocked or undersized gutters, leading to water damage and interior leaks.",
      "If you are seeing rust stains, loose or broken tiles, sagging gutters, water pooling near walls or damp ceiling spots, these are signs that your roof system needs professional attention before small problems escalate.",
      "We offer complete roof and gutter inspections, targeted repairs and long-term solutions that suit the local climate and your budget — protecting your home from heat, water and storm damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa K.",
    suburb: "Minto",
    quote:
      "Had a major leak during the last storm. They came out the same day, found the problem and fixed it properly. No more water damage and the quote was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
