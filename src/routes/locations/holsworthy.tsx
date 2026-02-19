import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.976; // Holsworthy
const AREA_LON = 150.953;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Holsworthy",
  slug: "holsworthy",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services Across Holsworthy",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HOLSWORTHY",
    bullets: [
      "Comprehensive roof repairs for suburban properties",
      "Specialist leak detection and waterproofing solutions",
      "Colorbond roof installations and tile restorations",
      "Storm damage repairs with rapid response for local homes and businesses",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Gutter Services in Holsworthy",
    paragraphs: [
      "Holsworthy is home to established residential streets and growing estates where roofs face the full impact of Western Sydney weather — intense summer heat, heavy downpours and seasonal storms that test every seal and flashing.",
      "From older tile roofs needing restoration to modern Colorbond installations showing early wear, we deliver targeted repairs, preventive maintenance and complete roof replacements tailored to local building styles and climate exposure.",
      "Our experienced team handles everything from cracked ridge caps and blocked valleys to full gutter upgrades, ensuring your roof remains watertight and structurally sound through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work in Holsworthy suburb",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve Around Holsworthy",
    subheading: "Weather extremes and ageing materials create predictable roof vulnerabilities across the area.",
    paragraphs: [
      "Intense summer heat causes Colorbond expansion and tile cracking, while storm season brings sudden leaks from failed flashing, blocked valleys and overflowing gutters that damage fascias and interior ceilings.",
      "Many homes experience slow leaks that only appear during heavy rain — often traced to deteriorated pointing, cracked tiles or inadequate waterproofing around penetrations like skylights and vents.",
      "We provide thorough roof inspections, targeted leak repairs and long-term restoration solutions including re-bedding, re-pointing, gutter realignment and full membrane replacements where required.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael R.",
    suburb: "Wattle Grove",
    quote:
      "Had a persistent leak during storms that two other companies could not trace. These guys found the issue in fifteen minutes and fixed it properly. Roof has been perfect ever since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
