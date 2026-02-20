import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.838; // Waverton
const AREA_LON = 151.200;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Waverton",
  slug: "waverton",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waverton Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WAVERTON",
    bullets: [
      "Harbour-side roofing repairs for heritage and period homes",
      "Colorbond and tile restoration services",
      "Leak detection and gutter upgrades for coastal conditions",
      "Local service across Waverton, North Sydney and McMahons Point",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Waverton Homes",
    paragraphs: [
      "Waverton sits on the Lower North Shore with proximity to the harbour, creating a unique challenge for roofs exposed to coastal winds, moisture and salt air that accelerates wear on guttering and metal flashings.",
      "We work with homes across the suburb — from Federation cottages and period terrace houses to contemporary units — providing roof repairs, restorations and gutter replacements that account for local exposure and weather patterns.",
      "Our team specialises in tile, metal and Colorbond roofing systems, delivering solutions that protect your home and preserve its character. Every job includes detailed inspections, transparent quotes and workmanship built to last decades.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering for harbour-side homes in Waverton",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Waverton",
    subheading: "Coastal exposure and older housing stock mean roofs and gutters need regular attention and specialist repairs.",
    paragraphs: [
      "Salt-laden air accelerates rust on metal roofs, corrodes gutters and weakens valley flashings. Moisture from harbour breezes also encourages moss growth on shaded tiles, which traps water and leads to leaks over time.",
      "If you notice rusted sections, sagging gutters, damp ceiling patches, broken tiles or water pooling after storms, your roof system may need targeted repairs or full restoration to prevent escalating damage.",
      "We provide corrosion treatment, flashing replacements, valley repairs and gutter upgrades designed for harbour-side conditions — ensuring your roof remains watertight and structurally sound through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer K.",
    suburb: "McMahons Point",
    quote:
      "Our terrace had constant leaks near the valleys. The team replaced the flashings and repointed the ridge tiles. Two winters later, still completely dry. Excellent service and very thorough.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
