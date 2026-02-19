import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.822; // Harris Park
const AREA_LON = 151.014;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Harris Park",
  slug: "harris-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Harris Park Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HARRIS PARK",
    bullets: [
      "Roof repairs for tile and Colorbond systems",
      "Gutter cleaning and downpipe repairs for storm-prone areas",
      "Leak detection and roof restorations across Harris Park",
      "Fast response times and clear quotes for established residential homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Gutter Services in Harris Park",
    paragraphs: [
      "Harris Park features a mix of established residential homes and newer developments, and many roofs are dealing with the effects of western Sydney heat, summer storms and years of exposure to extreme weather conditions.",
      "From tile roof repairs and Colorbond replacements to full gutter system upgrades, we provide reliable roofing solutions that are designed to handle the challenges of this local climate — heavy downpours, intense UV exposure and rapid temperature shifts.",
      "Our team works with all common roof types across Harris Park, delivering clean workmanship, honest advice and long-lasting results that protect your home from water damage and structural issues.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in Harris Park",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Problems We Fix in Harris Park",
    subheading: "Western Sydney weather can be tough on roofs — heat, storms and debris all contribute to common issues.",
    paragraphs: [
      "If your roof is showing signs of cracked or broken tiles, rusted valleys, sagging gutters or water stains on ceilings, these are clear indicators that maintenance or repairs are overdue and should be addressed before the next storm season.",
      "Blocked downpipes and overflowing gutters are common after summer storms, especially when debris builds up in valley sections. This causes water to pool, increasing the risk of leaks, rust and structural damage over time.",
      "We provide thorough roof inspections, gutter cleaning, targeted repairs and full restoration services — ensuring your roof system stays watertight and ready to handle whatever the western Sydney climate brings.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Parramatta",
    quote:
      "They repaired cracked tiles and cleared blocked gutters after a big storm. The job was completed quickly and the difference is noticeable — no more leaks or overflow issues.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
