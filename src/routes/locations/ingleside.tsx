import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.686; // Ingleside
const AREA_LON = 151.260;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ingleside",
  slug: "ingleside",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Ingleside Coastal Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "INGLESIDE",
    bullets: [
      "Coastal roofing built to handle salt air and storms",
      "Leak detection and tile repairs for Northern Beaches weather",
      "Colorbond and metal roof installations for exposed sites",
      "Fast response for guttering, downpipes and emergency repairs across Ingleside and Mona Vale",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Ingleside Homes",
    paragraphs: [
      "Ingleside sits on the Northern Beaches with open terrain, strong coastal winds and salt air that puts extra stress on roofing materials. Homes here need roofs and gutters that can handle repeated weather exposure without breaking down.",
      "We specialise in roofing repairs, restorations and new installations for coastal suburbs like Ingleside, Mona Vale and Narrabeen. Our team works with Colorbond, metal roofing and tile systems that are selected to resist corrosion and wind damage.",
      "Every project includes a detailed roof inspection, clear recommendations and trade-quality workmanship. We focus on long-lasting results, proper waterproofing and follow-up support when you need it most.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and coastal guttering in Ingleside",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Ingleside",
    subheading: "Salt air, strong winds and open exposure can wear down even well-maintained roofing systems over time.",
    paragraphs: [
      "Coastal suburbs see faster corrosion on metal flashings, rusted gutters and wind-damaged ridge caps. Heavy rain after long dry spells can reveal blocked valleys and pooling water on low-pitch sections.",
      "If you notice damp patches on ceilings, missing or cracked tiles, rusted downpipes or water overflowing from gutters during storms, these are signs your roof system needs urgent attention before more damage occurs.",
      "We handle everything from small leak repairs and gutter cleaning to full roof restorations and Colorbond replacements. Our goal is to protect your home, improve drainage and give you confidence the next time a coastal storm rolls through.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel D.",
    suburb: "Mona Vale",
    quote:
      "Our metal roof was showing serious rust from the coastal air. They replaced sections, resealed flashings and the whole job was done in two days. Great communication and solid work throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
