import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.771; // Blacktown
const AREA_LON = 150.906;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Blacktown",
  slug: "blacktown",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Blacktown Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BLACKTOWN",
    bullets: [
      "Roof repairs and restorations built for Western Sydney heat",
      "Colorbond and tile roof maintenance across all suburbs",
      "Gutter upgrades to handle intense summer storms",
      "Fast response for leaks, rust and damaged sections throughout Blacktown",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Guttering Services in Blacktown",
    paragraphs: [
      "Blacktown experiences some of the most intense heat in Sydney during summer, combined with heavy storms and rapid temperature swings that can quickly wear down roofing materials and seals.",
      "From older fibro cottages to modern Colorbond roofs, we service all property types across Blacktown with targeted repairs, full restorations, guttering work and leak detection that addresses the real causes behind failures.",
      "Our team works with tile, metal and Colorbond roofing systems, delivering clean repairs, clear quotes and honest advice that helps you protect your home before small problems turn into expensive damage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and gutter installation in Blacktown",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Blacktown",
    subheading: "Western Sydney weather is harsh on roofs — extreme heat, sudden storms and temperature swings accelerate wear.",
    paragraphs: [
      "Metal roofs expand and contract daily in summer, loosening fasteners and seals. Tiles crack under thermal stress. Gutters rust faster in heat, and downpipes clog after storms, causing overflows that damage fascia and eaves.",
      "If you see rust spots, water stains on ceilings, cracked or lifted tiles, sagging gutters or overflow during heavy rain, these are signs that your roof system needs professional attention before the next storm season.",
      "We provide thorough inspections, targeted repairs and full restoration options designed to handle the conditions of Western Sydney, so your roof stays watertight and protected year-round without unnecessary replacements.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Seven Hills",
    quote:
      "Our Colorbond roof was leaking near the ridge after the last heatwave. They found loose fasteners and resealed everything properly. No more leaks and the quote was spot on. Great work from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
