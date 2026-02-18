import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.731; // Belrose
const AREA_LON = 151.214;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Belrose",
  slug: "belrose",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Belrose Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BELROSE",
    bullets: [
      "Expert roofing solutions for leafy Northern Beaches homes",
      "Roof repairs, restoration and complete re-roofing services",
      "Guttering upgrades to handle heavy rainfall and debris",
      "Fast response times and clear quotes for Belrose and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Belrose",
    paragraphs: [
      "Belrose combines the tranquillity of tree-lined streets with the challenges of heavy coastal rainfall and persistent debris. Homes in this suburb need roofing systems that can handle both the lush surroundings and the weather that comes with living near the coast.",
      "We provide roof repairs, tile replacement, Colorbond installations and complete gutter system overhauls for properties across Belrose. Our team understands the specific demands of this area, from managing leaf build-up to protecting against wind-driven rain.",
      "Whether you need a quick leak repair, a full restoration on an older tile roof, or new guttering to improve drainage, we deliver clean workmanship and long-term solutions backed by local experience and transparent pricing.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter maintenance in Belrose",
  },

  problemsBlock: {
    heading: "Common Roofing & Guttering Issues We Fix in Belrose",
    subheading: "Leafy suburbs and coastal weather create unique roofing challenges that need proactive attention.",
    paragraphs: [
      "Tree canopies provide shade and beauty but also shed leaves, twigs and seed pods that fill gutters and block downpipes. When combined with heavy rain, this debris leads to overflow, water damage to eaves, and interior leaks that spread quickly.",
      "Older roofs in Belrose often show signs of cracked or slipped tiles, rusted metal sections, and worn valley irons. These problems worsen during storm season and can result in ceiling damage, mould growth, and structural issues if left unaddressed.",
      "We diagnose the root cause of leaks, clear blockages, repair or replace damaged sections, and recommend preventative maintenance schedules. Our goal is to keep your roof watertight and functioning properly through every weather event.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Forestville",
    quote:
      "After years of blocked gutters and overflow during storms, they cleared everything, replaced the rusted sections and installed new gutter guards. The difference has been incredible. Highly professional and reasonably priced.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
