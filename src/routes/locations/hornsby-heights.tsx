import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.676; // Hornsby Heights
const AREA_LON = 151.100;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hornsby Heights",
  slug: "hornsby-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Specialists for Elevated Properties",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HORNSBY HEIGHTS",
    bullets: [
      "Expert roof repairs for bushland settings",
      "Leak detection and restoration for larger properties",
      "Gutter cleaning for tree-heavy surroundings",
      "Fast turnaround across Hornsby Heights and surrounding Upper North Shore suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Guttering Services in Hornsby Heights",
    paragraphs: [
      "Hornsby Heights is known for elevated blocks, established homes and proximity to bushland. These features create unique roofing challenges, from leaf build-up to storm exposure and moisture management around native vegetation.",
      "We deliver roof repairs, tile replacements, metal roof restoration and complete guttering services tailored to properties in elevated, bush-adjacent locations. Whether you have Colorbond steel, concrete tiles or terracotta, we handle the inspection, repair and long-term protection your home needs.",
      "Our team works across Hornsby Heights and the wider Upper North Shore with a focus on quality workmanship, clear communication and solutions that last through storm season and beyond.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Hornsby Heights",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Hornsby Heights",
    subheading: "Elevated homes near bushland face constant exposure to falling leaves, branches and seasonal storms.",
    paragraphs: [
      "Native trees drop bark, leaves and seed pods year-round. Combined with seasonal rain, this creates blocked valleys, overflowing gutters and water pooling near eaves or fascias. Left unchecked, this leads to rot, rust and interior leaks.",
      "Older tile roofs on sloped blocks are especially vulnerable to cracked or shifted tiles after high winds. Metal roofs can suffer from rust, failed seals or lifted flashing where trees scrape or debris accumulates.",
      "We offer targeted repairs, full gutter replacements, roof resealing and restoration packages designed to reduce maintenance frequency and extend the life of your roof system in challenging bushland conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca W.",
    suburb: "Waitara",
    quote:
      "Our gutters were constantly blocked from the surrounding gums. The team cleaned everything, repaired sagging sections and installed gutter guard. Such a difference during the last storm — would absolutely recommend them.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
