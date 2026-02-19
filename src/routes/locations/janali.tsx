import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.029; // Janali
const AREA_LON = 151.061;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Janali",
  slug: "janali",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Janali Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "JANALI",
    bullets: [
      "Salt air and coastal weather protection",
      "Roof repairs, replacements and tile restoration",
      "Valley and downpipe upgrades for heavy rain",
      "Fast turnaround and fully licensed tradespeople across southern Sydney",
    ],
  },

  introBlock: {
    heading: "Complete Roofing Services for Janali Homes",
    paragraphs: [
      "Janali sits close enough to the coast to experience salt air, wind exposure and intense summer sun. Roofs in this part of Sutherland Shire need regular checks and proactive maintenance to avoid rust, cracked tiles and blocked drainage.",
      "We work with tile, Colorbond and metal roofs across the area, providing leak detection, full restorations, valley repairs and gutter upgrades tailored to local weather patterns and the mix of older homes and newer builds.",
      "From first inspection to final clean-up, we focus on durable repairs, transparent pricing and timely project delivery — so your roof stays watertight through every storm season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and gutter cleaning in Janali",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in Janali",
    subheading: "Proximity to the ocean means wind-driven rain, salt corrosion and gutter debris from nearby vegetation.",
    paragraphs: [
      "Salt air accelerates rust on gutters, flashings and older metal roofs. Wind can lift tiles, crack ridge caps or drive water into poorly sealed valleys. Heavy downpours quickly reveal blocked downpipes or sagging gutter sections.",
      "If you notice rust spots, water stains on ceilings, loose tiles or overflow during storms, these are early warning signs that a professional inspection is needed before small problems become costly structural damage.",
      "We provide targeted repairs, preventative gutter cleaning and complete roof restoration options to keep your home protected year-round — no matter what the weather brings.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jessica L.",
    suburb: "Sutherland",
    quote:
      "They replaced the valley, resealed the flashings and cleared years of debris from the gutters. The roof looks great and we have not had any leaks since. Very reliable team.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
