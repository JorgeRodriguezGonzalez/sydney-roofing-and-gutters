import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.857; // Balmain
const AREA_LON = 151.179;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Balmain",
  slug: "balmain",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roof Specialists for Balmain",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BALMAIN",
    bullets: [
      "Expert repairs for heritage terrace roofs and period properties",
      "Slate, tile and metal roof restoration services",
      "Gutter repairs and replacement for older downpipe systems",
      "Fast response for leak detection and storm damage across the peninsula",
    ],
  },

  introBlock: {
    heading: "Specialist Roofing and Guttering for Balmain Properties",
    paragraphs: [
      "Balmain is home to some of the finest Victorian and Federation-era architecture in Sydney, with slate roofs, terrace houses and older guttering systems that require specialist knowledge and care.",
      "From Birchgrove to East Balmain, our team understands the unique demands of heritage properties, working with slate, tile and traditional metal roofing to preserve character while delivering modern weatherproofing performance.",
      "We provide targeted leak repairs, full roof restorations and gutter upgrades designed for older homes — ensuring your property stays protected without compromising its period features or street appeal.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration and leak repairs in Balmain",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Balmain",
    subheading: "Older roofs and tight terrace layouts often mean hidden leaks and drainage challenges that need expert attention.",
    paragraphs: [
      "Heritage slate roofs are beautiful but prone to cracked tiles, worn flashings and hidden leaks around valleys and chimneys. Original cast-iron gutters can rust through or pull away from fascias over time.",
      "Terrace houses often share party walls and tight access, which makes roof inspections and repairs more difficult. Leaks can travel between properties or appear far from the actual source of water entry.",
      "We bring ladders, scaffolding and experience to navigate tight laneways and multi-level roofs — delivering repairs, restorations and gutter work that respects the structure and solves the problem properly.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Rozelle",
    quote:
      "Our slate roof was leaking into the bedroom ceiling. They identified two cracked tiles and replaced the valley flashing. Work was careful and respectful of the heritage details. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
