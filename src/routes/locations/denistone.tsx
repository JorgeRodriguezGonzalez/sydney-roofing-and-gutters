import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.796; // Denistone
const AREA_LON = 151.091;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Denistone",
  slug: "denistone",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Trusted Roofing Specialists Across Denistone",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DENISTONE",
    bullets: [
      "Expert repairs for tile and metal roofs",
      "Complete gutter cleaning and replacement services",
      "Roof restoration to protect established homes",
      "Fast, professional service covering Denistone and surrounding suburbs throughout the year",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Gutter Services for Denistone Residents",
    paragraphs: [
      "Denistone features many established homes with mature trees and older roof systems that require regular attention. Debris build-up, ageing tiles and worn flashings are common challenges in this quiet residential area.",
      "Our team delivers targeted roof repairs, complete restorations and gutter upgrades suited to the local climate. We work with terracotta tiles, Colorbond metal and concrete materials to ensure long-lasting protection.",
      "From leak detection to full roof replacement, every project is handled with care, clear pricing and thorough workmanship. We service Denistone, Denistone East and nearby suburbs with reliable, honest roofing solutions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration in Denistone",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Denistone",
    subheading: "Mature trees and older homes mean gutters and roofs need consistent maintenance to stay effective.",
    paragraphs: [
      "Leaf litter, twigs and seed pods accumulate quickly in gutters throughout Denistone, especially during autumn and after storms. Blocked downpipes lead to overflow, water staining and potential structural damage if left untreated.",
      "Older tile roofs often develop cracks, slipped tiles or deteriorated ridge caps that allow water entry during heavy rain. Rusted valleys and worn pointing are other frequent issues that require professional attention.",
      "We provide thorough inspections, gutter cleaning, tile replacement and re-bedding services to keep your roof watertight. Our approach focuses on prevention, quality repairs and extending the lifespan of your existing roof system.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen P.",
    suburb: "Eastwood",
    quote:
      "They arrived on time, replaced cracked tiles and cleaned all the gutters thoroughly. The roof looks great and no more leaks. Honest pricing and excellent communication throughout the job.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
