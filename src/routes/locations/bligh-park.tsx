import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.638; // Bligh Park
const AREA_LON = 150.802;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bligh Park",
  slug: "bligh-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services in Bligh Park",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BLIGH PARK",
    bullets: [
      "Roof repairs and restoration for established Hawkesbury homes",
      "Leak detection and tile replacement services",
      "Colorbond roofing and gutter upgrades for western Sydney weather",
      "Fast response across Bligh Park, Windsor and surrounding Hawkesbury suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Gutter Services for Bligh Park Homes",
    paragraphs: [
      "Bligh Park sits in the Hawkesbury region where established homes face the full force of western Sydney weather — intense summer heat, sudden storms and temperature swings that put pressure on roofs year-round.",
      "We provide targeted roof repairs, tile replacement, gutter installations and full roof restorations across Bligh Park and the surrounding Hawkesbury area. Our team works with Colorbond, concrete tile and older metal roofing systems common in the region.",
      "From leak repairs to preventive maintenance, we focus on durable solutions that handle local conditions — backed by clear quotes, quality workmanship and reliable aftercare from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration in Bligh Park",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Bligh Park",
    subheading: "Western Sydney heat and storm exposure create ongoing wear on roofs — especially on older installations.",
    paragraphs: [
      "Extreme summer temperatures cause roof materials to expand and contract, leading to cracked tiles, loose fixings and weakened sealants. Storm season brings heavy rain and wind that exposes any weak points in your roof or gutter system.",
      "If you are noticing rust spots on Colorbond, sagging gutters, damp ceiling patches, missing tiles or recurring leaks after rain, these are signs your roof system needs professional attention before damage spreads.",
      "We provide complete inspections, targeted repairs, gutter realignment and full restoration options — designed to extend roof life and protect your home through every season in the Hawkesbury region.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda M.",
    suburb: "Windsor",
    quote:
      "Our Colorbond roof had rust patches and the gutters were sagging badly. They replaced the damaged sections, fixed the brackets and cleaned everything properly. Excellent work and very responsive.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
