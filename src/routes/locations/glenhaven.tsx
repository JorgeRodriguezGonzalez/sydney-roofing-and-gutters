import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.708; // Glenhaven
const AREA_LON = 151.013;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glenhaven",
  slug: "glenhaven",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Glenhaven Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLENHAVEN",
    bullets: [
      "Expert repairs for tree-lined acreage properties",
      "Gutter cleaning and protection against leaf build-up",
      "Tile and metal roof maintenance for bushland homes",
      "Storm damage assessments and fast repairs across Glenhaven and surrounds",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Glenhaven Homes",
    paragraphs: [
      "Glenhaven is known for its bushland setting, larger blocks and mature tree canopy — creating a unique environment where roofs and gutters work harder to handle constant leaf fall and storm debris.",
      "Whether you own a family home on acreage or a modern build tucked into native bushland, we deliver roof repairs, restorations and gutter maintenance tailored to the demands of this semi-rural setting.",
      "We work across tile, Colorbond and metal roofing systems, focusing on clean installations, reliable leak repairs and gutter solutions that keep water flowing away from your home year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof and gutter work for Glenhaven properties",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Glenhaven",
    subheading: "Bushland locations bring beauty and shade — but also heavy leaf loads and branch debris year-round.",
    paragraphs: [
      "Gutters in Glenhaven often clog with leaves, bark and seed pods from native eucalypts and imported trees. When downpipes block, water backs up into roof cavities or overflows onto walls and foundations.",
      "Storms can dislodge ridge caps, crack tiles or damage flashing around chimneys and skylights. Metal roofing can develop rust spots or loose screws, leading to leaks during heavy rain.",
      "We provide thorough inspections, targeted repairs and preventive maintenance packages designed to keep your roof system functional and watertight — even during the wettest months.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Castle Hill",
    quote:
      "Our gutters were constantly overflowing with gum leaves. The team cleared everything, fixed a few sagging sections and installed mesh. Zero blockages since then — highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
