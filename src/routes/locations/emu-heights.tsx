import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.735; // Emu Heights
const AREA_LON = 150.648;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Emu Heights",
  slug: "emu-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Reliable Roofing Solutions for Emu Heights",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EMU HEIGHTS",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Fast leak detection and permanent sealing solutions",
      "Gutter cleaning and replacement for storm protection",
      "Comprehensive inspections and honest quotes across the Penrith region",
    ],
  },

  introBlock: {
    heading: "Professional Roof Repairs and Guttering in Emu Heights",
    paragraphs: [
      "Emu Heights sits at the foothills of the Blue Mountains, where homes face intense summer heat, afternoon storms and the occasional strong westerly wind. These conditions put real pressure on older roof materials and gutter systems.",
      "We work across this area regularly, handling everything from broken tile replacements and Colorbond panel repairs to valley leaks and blocked downpipes. Our team knows how local weather accelerates wear on roof flashings, ridge capping and gutter joints.",
      "Whether you need a targeted repair, a full restoration or new guttering installed to handle runoff better, we deliver clean work with clear timelines and pricing that makes sense.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration work completed in Emu Heights",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Emu Heights",
    subheading: "Western Sydney heat and summer storms create a tough environment for roofs — small problems grow fast if left unchecked.",
    paragraphs: [
      "Cracked or slipped tiles are common here, especially after storms or during extreme temperature shifts. Even minor gaps let water through into ceiling spaces, risking structural damage and mould growth over time.",
      "Rusted or sagging gutters struggle to cope with heavy downpours, leading to overflow that damages walls, eaves and landscaping. Old fascias and brackets often fail first, allowing sections to pull away completely.",
      "We assess the full system during inspections — roof surface, flashings, valleys, gutters and downpipes — then recommend repairs or upgrades that solve the root cause, not just the visible symptom.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Mark L.",
    suburb: "Leonay",
    quote:
      "They replaced several tiles and resealed the ridge capping after a storm. The job was finished quickly and there have been no leaks since. Very happy with the quality and the price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
