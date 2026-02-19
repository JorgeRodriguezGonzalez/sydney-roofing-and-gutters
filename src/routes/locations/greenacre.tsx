import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.903; // Greenacre
const AREA_LON = 151.056;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Greenacre",
  slug: "greenacre",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Greenacre Roof and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GREENACRE",
    bullets: [
      "Expert roof repairs for tile and Colorbond roofing systems",
      "Complete gutter cleaning and replacement for older homes",
      "Storm damage assessments and insurance-ready repair documentation",
      "Leak detection and roof restoration services across inner western Sydney neighbourhoods",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Solutions for Greenacre Homes",
    paragraphs: [
      "Greenacre features a mix of established brick homes and modern townhouses, many with tile or metal roofing that requires regular care to handle the western Sydney climate. Heat, storms and seasonal rainfall mean gutters and flashings need attention before leaks develop.",
      "Our team provides full-service roofing for the Greenacre area, including tile and Colorbond repairs, gutter replacements, valley maintenance and complete roof restorations. We work across all property types — from original brick houses to newer multi-level developments.",
      "Every inspection includes a detailed assessment of valleys, downpipes, ridge capping and flashing — areas where most leaks begin. We give honest advice, clear pricing and workmanship that protects your home for years ahead.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and gutter maintenance for Greenacre properties",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Greenacre",
    subheading: "Older homes and western Sydney weather mean blocked gutters and worn flashings are frequent problems.",
    paragraphs: [
      "Tile roofs in Greenacre often show cracked or slipped tiles after storms, and many older gutters develop rust or sagging that leads to overflow during heavy rain. Left unchecked, these issues can cause ceiling stains, timber rot and damage to brickwork.",
      "We regularly see blocked valleys, corroded downpipes and deteriorated ridge pointing — all common in established suburbs where roofs have decades of exposure. A proper inspection reveals what needs fixing now and what can wait.",
      "Whether you need targeted repairs or a full roof restoration with repointing and resealing, we provide solutions that match your budget and protect your investment. No upselling, just clear options based on real condition.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen P.",
    suburb: "Bankstown",
    quote:
      "Our tile roof was leaking into the bedroom during storms. They found the damaged valley tiles, replaced them and resealed everything. No leaks since, and the quote was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
