import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.733; // Glenwood
const AREA_LON = 150.931;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glenwood",
  slug: "glenwood",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing Services in Glenwood",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLENWOOD",
    bullets: [
      "Colorbond and tile roof repairs for modern homes",
      "Complete gutter cleaning and replacement services",
      "Storm damage repairs and leak detection across Glenwood",
      "Expert roof restoration and new installations for local residences",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering for Glenwood Properties",
    paragraphs: [
      "Glenwood is home to well-established family residences and newer developments, with roof systems that need regular care to handle Western Sydney weather extremes including intense summer heat and seasonal storms.",
      "Our roofing services cover everything from targeted leak repairs and gutter cleaning to complete roof restoration and Colorbond installation, designed to protect homes through the hottest days and the heaviest downpours.",
      "We work with all common roofing materials found across Glenwood including concrete tiles, terracotta and metal systems, delivering professional workmanship with transparent pricing and reliable timelines from the initial inspection through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repair work in Glenwood",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Glenwood Homes",
    subheading: "Western Sydney heat and seasonal storms can accelerate wear on roofs and guttering systems.",
    paragraphs: [
      "Extended periods over 40 degrees cause roof material expansion and contraction, leading to cracked tiles, lifted ridge capping and deteriorated seals that allow water entry when storms finally arrive.",
      "Blocked gutters from debris accumulation combined with sudden heavy rainfall often result in overflow into eaves, fascia damage and interior water stains that require both immediate repairs and preventative solutions.",
      "We provide thorough roof inspections, targeted leak repairs, gutter upgrades and complete restoration services to ensure your Glenwood property remains protected year-round with systems built to withstand local climate conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Stanhope Gardens",
    quote:
      "After years of ignoring minor leaks, we finally called them in. They repaired damaged tiles, resealed the ridge and cleaned out years of debris. The roof looks fantastic and no more water marks inside.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
