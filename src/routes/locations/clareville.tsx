import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.636; // Clareville
const AREA_LON = 151.290;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Clareville",
  slug: "clareville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Clareville Coastal Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLAREVILLE",
    bullets: [
      "Protection against salt air and coastal wind exposure",
      "Roof repairs, restorations and waterproofing for waterfront properties",
      "Gutter replacement and marine-grade coating for longevity",
      "Comprehensive inspections for tile roofs, Colorbond and metal systems in Pittwater area",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Clareville Waterfront Homes",
    paragraphs: [
      "Clareville sits on the shores of Pittwater and faces constant exposure to salt spray, coastal winds and intense afternoon sun — all factors that accelerate corrosion and wear on roofing materials and gutter systems.",
      "Whether you own a waterfront property or a home tucked into the hillside, your roof needs regular attention to prevent rust, leaks and structural damage caused by the harsh marine environment.",
      "We provide targeted roof repairs, complete restorations, re-bedding and re-pointing for tile roofs, along with Colorbond and aluminium guttering solutions that stand up to the coastal conditions year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof repair and gutter installation in Clareville",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Clareville Coastal Homes",
    subheading: "Salt air, wind and water views come with hidden costs — especially for older roofing systems.",
    paragraphs: [
      "Homes close to Pittwater are constantly exposed to salt-laden winds that corrode metal flashings, rust gutter brackets and degrade protective coatings on Colorbond roofs faster than inland properties.",
      "If you notice surface rust, flaking paint on gutters, loose ridge caps, water stains on ceilings or tiles shifting during storms, these are early warning signs that require professional assessment.",
      "We deliver corrosion-resistant repairs, full gutter replacements using marine-grade materials, and roof restorations with protective coatings designed specifically for coastal exposure and long-term durability.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen P.",
    suburb: "Avalon",
    quote:
      "Our Colorbond roof was showing rust spots after years of salt exposure. They sanded back the affected areas, applied marine coating and replaced all flashings. Looks brand new and should last another decade.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
