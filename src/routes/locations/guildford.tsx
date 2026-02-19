import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.852; // Guildford
const AREA_LON = 150.987;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Guildford",
  slug: "guildford",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Western Sydney Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GUILDFORD",
    bullets: [
      "Repairs for older tiles and Colorbond systems",
      "Leak detection and valley maintenance services",
      "Heat-resistant coatings and ventilation upgrades",
      "Fast response across Guildford and nearby Parramatta suburbs",
    ],
  },

  introBlock: {
    heading: "Local Roofing & Guttering Services for Guildford Homes",
    paragraphs: [
      "Guildford has a mix of older character homes and established housing stock that can show age in the roof and guttering — particularly after years of Western Sydney heat, storms and limited maintenance.",
      "We work with terracotta tiles, metal roofs and Colorbond across the area, handling everything from minor repairs and re-pointing to full restorations, leak fixes and gutter replacements.",
      "Our team understands the conditions in Guildford — extreme summer temperatures, sudden downpours and the common issues that come with older roofing systems — and we focus on solutions that last.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and restoration work in Guildford",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Guildford Homes",
    subheading: "Older homes in Western Sydney face heat stress, tile deterioration and guttering that was never designed for modern storms.",
    paragraphs: [
      "Terracotta and concrete tiles can crack or slip after decades of exposure to summer heat over 40 degrees. Metal roofs expand and contract, loosening screws and creating entry points for water.",
      "Gutters on older homes were often undersized for current rainfall intensity — meaning overflow, fascia rot and water pooling near foundations during heavy rain.",
      "We diagnose the root cause, whether it is broken tiles, rusted valleys, blocked downpipes or poor fall in gutters — then provide targeted repairs or full system upgrades depending on your budget.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca N.",
    suburb: "Merrylands",
    quote:
      "Our old tile roof was leaking in three places. They replaced damaged tiles, resealed the valleys and checked the whole system. Great service and fair pricing for the work done.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
