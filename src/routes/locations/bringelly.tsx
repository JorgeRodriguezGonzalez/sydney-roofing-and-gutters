import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.943; // Bringelly
const AREA_LON = 150.728;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bringelly",
  slug: "bringelly",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bringelly Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BRINGELLY",
    bullets: [
      "Roof solutions for new estates and rural properties",
      "Leak detection, repairs and full roof restorations",
      "Gutter upgrades for Western Sydney storms and heat",
      "Fast response across Bringelly and the South West Growth Corridor",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Bringelly",
    paragraphs: [
      "Bringelly is growing fast thanks to the Western Sydney Aerotropolis, with new estates joining established rural properties. Both need roofing systems built to handle extreme heat, intense storms and rapid expansion across the area.",
      "We service every roofing type common to Bringelly including Colorbond metal roofs, concrete tiles and older corrugated iron on rural blocks. Whether you need repairs after a storm, a full restoration or installation for a new build, we deliver quality work that lasts.",
      "Our team understands local weather demands including dust, heat above 40 degrees in summer and flash flooding during storm season. We focus on watertight, durable solutions backed by clear communication and reliable service.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter work in Bringelly",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Bringelly",
    subheading: "Rapid growth and intense weather create unique challenges for roofs across Bringelly and nearby estates.",
    paragraphs: [
      "New builds can suffer from poor installation, construction debris left in gutters and settling cracks. Older rural properties face rust, worn seals, damaged flashing and outdated gutter systems that overflow during heavy rain.",
      "Western Sydney heat accelerates wear on metal roofs and Colorbond finishes, while sudden storms dump massive water volumes that push undersized or clogged gutters to their limit. Both lead to leaks, ceiling stains and structural damage over time.",
      "We inspect for rust, blocked downpipes, cracked tiles, loose ridge caps and failing valleys. Then we deliver targeted repairs, full restorations or modern gutter upgrades designed for the demands of this fast-growing region.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael S.",
    suburb: "Rossmore",
    quote:
      "Our rural property had years of rust and blocked gutters. They replaced sections, sealed leaks and upgraded downpipes. Professional work at a fair price, very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
