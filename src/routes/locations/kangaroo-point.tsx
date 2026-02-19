import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.988; // Kangaroo Point
const AREA_LON = 151.093;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kangaroo Point",
  slug: "kangaroo-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kangaroo Point Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KANGAROO POINT",
    bullets: [
      "Expert protection against salt air and coastal weather",
      "Roof repairs, gutter cleaning and leak detection services",
      "Colorbond and tile roof restoration for bayside homes",
      "Fast response times across Kangaroo Point and surrounding Sutherland Shire suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Kangaroo Point Homes",
    paragraphs: [
      "Kangaroo Point sits in a beautiful bayside location overlooking Port Hacking, but that proximity to the water brings unique roofing challenges. Salt-laden winds, high humidity and occasional storms can accelerate corrosion and wear on roofs and guttering systems.",
      "We provide targeted roofing solutions for homes across Kangaroo Point, from Colorbond replacements and tile repairs to full gutter upgrades designed to handle coastal conditions. Our team understands how local weather patterns affect metal flashings, valleys and fasteners.",
      "Whether you need emergency leak repairs, preventative maintenance or a complete roof restoration, we deliver quality workmanship backed by local knowledge and transparent pricing from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter repairs in Kangaroo Point bayside homes",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Kangaroo Point",
    subheading: "Coastal environments demand roofing systems that can handle salt exposure, wind and moisture year-round.",
    paragraphs: [
      "Salt air is highly corrosive to metal roofs and guttering. Over time, fasteners rust, Colorbond coatings degrade and older gutter systems develop leaks or sagging sections. Wind-driven rain can also expose weak points in flashings and ridge capping.",
      "Homes near the water may also experience moss and algae growth on tiles, blocked valleys from leaf litter and overflow during heavy downpours if gutters are undersized or poorly maintained.",
      "We offer complete inspections, rust treatment, gutter replacements, tile repointing and Colorbond restorations. Our solutions are built to withstand the unique demands of bayside living in Kangaroo Point.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Sylvania Waters",
    quote:
      "Our Colorbond roof was showing rust spots near the ridge after years of salt exposure. The team treated and resealed everything, and the roof looks brand new. Great communication and attention to detail.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
