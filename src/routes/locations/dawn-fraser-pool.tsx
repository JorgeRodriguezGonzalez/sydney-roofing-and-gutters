import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.853; // Dawn Fraser Pool
const AREA_LON = 151.181;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dawn Fraser Pool",
  slug: "dawn-fraser-pool",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Experts for Balmain and the Inner West",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DAWN FRASER POOL",
    bullets: [
      "Heritage roof restoration for period homes in the Inner West",
      "Tile repairs, metal roofing and Colorbond installations tailored for coastal conditions",
      "Guttering maintenance designed to handle harbour winds and salt exposure",
      "Local specialists across Balmain, Rozelle, Birchgrove and surrounding waterfront areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for the Balmain Peninsula",
    paragraphs: [
      "The Inner West around Dawn Fraser Pool features heritage architecture, compact streetscapes and proximity to the harbour — which means roofs face salt air, coastal winds and the specific maintenance needs of older construction.",
      "From Balmain and Birchgrove to Rozelle and Lilyfield, we provide roof repairs, restoration work and guttering upgrades suited to the character of terrace homes, Federation cottages and renovated warehouses that define the area.",
      "Our approach combines respect for heritage details with modern waterproofing, working with terracotta tiles, slate, metal sheeting and Colorbond to deliver lasting protection and clean presentation without compromising the streetscape.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration and guttering in Balmain and the Inner West",
  },

  problemsBlock: {
    heading: "Common Roofing Issues Near Dawn Fraser Pool and the Inner West",
    subheading: "Coastal exposure and heritage construction create specific challenges for roofs in Balmain and surrounding suburbs.",
    paragraphs: [
      "Salt air accelerates corrosion on metal flashings, valleys and older guttering systems — especially on homes within sight of the harbour or exposed to prevailing winds from the water.",
      "Terrace roofs often share party walls, hidden valleys and limited attic access, meaning small leaks can spread undetected until ceiling damage appears or internal walls show moisture staining.",
      "We conduct careful inspections to identify rust, loose tiles, blocked downpipes and failing sealants before they escalate — then deliver targeted repairs or full restorations that honour the original design while meeting current weather protection standards.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel K.",
    suburb: "Balmain",
    quote:
      "Our terrace had chronic leaks where the valley meets the neighbour. They diagnosed the problem quickly, replaced corroded sections and resealed everything. First winter with no water damage in years.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
