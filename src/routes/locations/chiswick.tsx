import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.850; // Chiswick
const AREA_LON = 151.138;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Chiswick",
  slug: "chiswick",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Chiswick Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHISWICK",
    bullets: [
      "Heritage and period home roof restorations",
      "Tile repairs, Colorbond and metal roofing work",
      "Gutter cleaning and downpipe upgrades for mature properties",
      "Leak detection and waterproofing for riverside homes in the inner west",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Chiswick Homes",
    paragraphs: [
      "Chiswick is a quiet riverside suburb in the inner west, known for Federation homes, mature trees and properties close to the Parramatta River. Older roofs in the area often need careful maintenance to stay watertight.",
      "We provide roof repairs, tile replacements, metal roofing installations and full restorations for homes throughout Chiswick and the surrounding inner west. Our work suits both period properties and modern renovations.",
      "From terracotta tiles and slate to Colorbond and corrugated iron, we handle the full range of materials — always with attention to detail, clean workmanship and long-term durability.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter repairs in Chiswick",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Chiswick",
    subheading: "Older homes and riverside locations bring unique challenges — from ageing tiles to moisture exposure.",
    paragraphs: [
      "Many Chiswick homes were built in the early 1900s, and their original roofs may now have cracked tiles, rusted valleys or failing sarking. Moisture from the river can accelerate wear on metal components.",
      "Gutters often become clogged with leaves from mature street trees, leading to overflow, fascia rot and water pooling near foundations. Regular cleaning and repairs are essential.",
      "If you notice damp ceilings, loose tiles, sagging gutters or water stains on walls, we can inspect the roof system and provide targeted repairs or a full restoration plan.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Abbotsford",
    quote:
      "Our Federation cottage had several cracked tiles and the gutters were constantly overflowing. The team replaced all the damaged sections and cleared years of debris. Roof looks fantastic and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
