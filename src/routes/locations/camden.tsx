import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.054; // Camden
const AREA_LON = 150.696;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Camden",
  slug: "camden",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Camden Heritage & Modern Roof Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CAMDEN",
    bullets: [
      "Heritage tile repairs for older Camden homes",
      "Metal roofing and gutter installations across the district",
      "Storm damage assessments and leak detection services",
      "Professional maintenance for acreage properties and larger rural blocks",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Camden and Surrounds",
    paragraphs: [
      "Camden combines heritage homes with modern estates, and each roof type needs the right approach. From colonial-era tiles to Colorbond on new builds, we handle repairs, restorations and full installations.",
      "Whether you have an older property in the town centre or a larger acreage block, local conditions (storms, high winds and rural debris) can wear down roofs and gutters faster than expected.",
      "Our Camden team works with tile, metal, slate and Colorbond systems. We provide thorough inspections, honest quotes and reliable fixes that protect your home for years.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter work in Camden",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We See in Camden",
    subheading: "Heritage properties and rural blocks face unique roofing challenges from age, weather and debris.",
    paragraphs: [
      "Older homes in Camden often have original tile roofs that crack, slip or develop leaks over time. Without regular maintenance, water can seep through and damage ceilings, insulation and timber frames.",
      "Acreage properties deal with extra debris from nearby trees and paddocks. Blocked gutters and valleys lead to overflow, rust and structural strain during heavy downpours.",
      "If you notice missing tiles, rusted valleys, sagging gutters or water stains inside, we can assess the damage, recommend the right fix and get your roof back to full protection.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda M.",
    suburb: "Narellan",
    quote:
      "Our old tile roof was leaking badly after every storm. The team replaced damaged sections and cleaned all the gutters. The work was fast, tidy and exactly what we needed.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
