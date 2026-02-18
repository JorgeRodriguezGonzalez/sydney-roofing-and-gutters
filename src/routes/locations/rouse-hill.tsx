import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.685; // Rouse Hill
const AREA_LON = 150.917;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Rouse Hill",
  slug: "rouse-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rouse Hill Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ROUSE HILL",
    bullets: [
      "Expert roof repairs for modern homes and new estates",
      "Colorbond and tile roof installations and restoration services",
      "Complete gutter cleaning, repairs and replacement solutions",
      "Fast response times for storm damage and urgent leak repairs across Rouse Hill",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Rouse Hill Homes",
    paragraphs: [
      "Rouse Hill has grown rapidly over the last decade with modern estates, new builds and expanding residential areas — which means roofs and gutters need expert attention from the start to avoid costly repairs later.",
      "Our team provides roof restoration, leak detection, tile and Colorbond repairs, gutter cleaning and full roof replacements designed for local weather conditions including summer storms and heat stress on roofing materials.",
      "We work with builders, homeowners and property managers across Rouse Hill to deliver clean professional work, clear timelines and reliable solutions that keep your roof system watertight and performing for decades.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and guttering work in Rouse Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Rouse Hill",
    subheading: "New homes and fast-growing suburbs can hide roofing problems until heavy rain or extreme heat exposes them.",
    paragraphs: [
      "Many newer roofs in Rouse Hill experience installation defects, poor flashing around skylights and chimneys, inadequate gutter capacity or debris build-up from construction work that blocks downpipes and valleys during storms.",
      "If you notice water stains on ceilings, overflowing gutters, loose or cracked tiles, sagging roof sections or pooling water after rain, these are warning signs that require a professional roof inspection before damage spreads.",
      "We provide thorough inspections, targeted leak repairs, full gutter system upgrades and roof restoration services that address the root cause and protect your home investment long-term.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Kellyville",
    quote:
      "They found and fixed a leak that two other roofers missed. Clear communication, fair pricing and no mess left behind. Highly recommend their team for any roofing work in the Hills District.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
