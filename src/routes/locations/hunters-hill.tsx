import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.834; // Hunters Hill
const AREA_LON = 151.145;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hunters Hill",
  slug: "hunters-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Specialists for Hunters Hill",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HUNTERS HILL",
    bullets: [
      "Expert care for heritage and period homes",
      "Tile repairs, slate work and metal roof restoration",
      "Gutter maintenance for established tree-lined streets",
      "Trusted by Hunters Hill homeowners for quality workmanship and heritage sensitivity",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Established Homes in Hunters Hill",
    paragraphs: [
      "Hunters Hill is renowned for its heritage architecture, federation homes and beautiful riverside setting. Many properties here feature original or period-style roofs that require specialist knowledge and careful attention to detail.",
      "We work with terracotta tiles, slate, Colorbond and traditional metal roofs across the peninsula — providing repairs, restorations and preventative maintenance that respect the character of older homes while ensuring long-term protection.",
      "From leak detection and valley repairs to complete roof restoration and gutter upgrades, our team delivers clean, reliable work backed by proper insurance and a commitment to quality that matches the care you take with your home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and heritage tile repairs in Hunters Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Hunters Hill Homes",
    subheading: "Older roofs and established trees mean regular maintenance is essential to avoid costly damage.",
    paragraphs: [
      "Heritage and period properties often have aging terracotta tiles, slate or metal roofs that may have decades of wear. Cracked tiles, rusted valleys and worn flashing can allow water to penetrate — especially after heavy rain or storms.",
      "Mature trees provide shade and character, but they also drop leaves, branches and debris that block gutters and downpipes. Left uncleared, this leads to overflow, water pooling and potential structural damage to fascias and eaves.",
      "We provide thorough inspections, targeted repairs and restoration work designed to preserve the integrity of your roof while keeping your home dry and protected. Whether it is a small leak or a full restoration, we work with care and attention to detail.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Gladesville",
    quote:
      "Our federation home had several cracked tiles and a persistent leak near the chimney. The team handled everything with care and the repairs have held up perfectly through two big storms. Very happy with the work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
