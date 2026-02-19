import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.796; // Denistone West
const AREA_LON = 151.081;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Denistone West",
  slug: "denistone-west",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Denistone West Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DENISTONE WEST",
    bullets: [
      "Reliable repairs for established brick homes",
      "Tile roof restorations, repointing and leak detection",
      "Valley iron replacement and gutter maintenance",
      "Expert service across Denistone West and surrounding northern suburbs with fast response times",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Denistone West Homes",
    paragraphs: [
      "Denistone West is home to many established properties with terracotta and concrete tile roofs that require regular maintenance to stay in great condition over decades of use.",
      "From leak repairs and repointing to full restorations and valley replacements, we specialise in keeping older roofs watertight and structurally sound through every season.",
      "We work with Colorbond, tile and metal roofing systems, delivering reliable workmanship and clear communication throughout every project from initial inspection through to final completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repairs in Denistone West",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve for Denistone West Residents",
    subheading: "Older tile roofs and mature trees create unique maintenance challenges that require expert attention.",
    paragraphs: [
      "Terracotta tiles naturally age over time, and mortar bedding can crack or become loose. This leads to water pooling, leaks through ceilings and gradual structural damage if ignored.",
      "Blocked gutters from leaf buildup, corroded valley irons and sagging gutter sections often cause overflow during storms, sending water into eaves and ceiling spaces.",
      "We inspect every detail — from ridge caps and pointing to gutter falls and downpipe connections — and deliver targeted repairs or comprehensive restoration depending on what your roof needs most.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer H.",
    suburb: "West Ryde",
    quote:
      "Our tile roof had several leaks after heavy rain. The team repointed the ridge, replaced damaged tiles and cleared the valleys. The work was thorough, quick and very well priced.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
