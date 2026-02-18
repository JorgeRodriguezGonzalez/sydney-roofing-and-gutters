import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.568; // Berrilee
const AREA_LON = 151.108;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berrilee",
  slug: "berrilee",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Berrilee Rural Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BERRILEE",
    bullets: [
      "Expert roofing for rural properties and large homes",
      "Repairs for tile, Colorbond and metal roof systems",
      "Gutter protection against bushland debris and heavy storms",
      "Reliable service for Berrilee and surrounding semi-rural areas across the north",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering in Berrilee and Beyond",
    paragraphs: [
      "Berrilee is a peaceful semi-rural community surrounded by native bushland and larger properties — where roof systems face unique challenges from overhanging trees, wildlife activity and isolated storm cells.",
      "Our team provides targeted roof repairs, restorations and guttering work for homes in Berrilee, Galston and the surrounding rural areas, working with Colorbond, tile and metal roofs designed to handle local weather patterns.",
      "We focus on durable repairs, effective gutter protection and reliable workmanship that accounts for bush debris, seasonal storms and the maintenance needs of properties with substantial roof areas.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for rural properties in Berrilee",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Issues We Solve in Berrilee",
    subheading: "Native trees, possum activity and isolated storms can cause rapid gutter blockages and roof damage in rural settings.",
    paragraphs: [
      "Large eucalypts and overhanging branches drop bark, leaves and seed pods year-round — and one major storm can fill gutters completely, leading to overflow, water entry and internal ceiling damage.",
      "If you are seeing blocked valleys, rust patches, sagging gutters, water pooling near the roofline or staining on internal ceilings after rain, your roof system needs professional attention.",
      "We deliver preventative gutter cleaning, targeted leak repairs, valley replacements and complete roof restorations — giving your property long-term protection against bushland debris and heavy downpours.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Galston",
    quote:
      "We had blocked valleys and water coming through the lounge ceiling after every storm. They cleared everything, repaired the flashings and sealed the valleys properly. Completely reliable work in a tricky location.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
