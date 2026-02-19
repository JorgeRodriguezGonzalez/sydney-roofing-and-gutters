import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.908; // Clovelly West
const AREA_LON = 151.253;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Clovelly West",
  slug: "clovelly-west",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists in Clovelly West",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLOVELLY WEST",
    bullets: [
      "Salt-air protection for coastal homes and investment properties",
      "Metal roofing repairs, Colorbond installations and tile replacements",
      "Gutter cleaning and corrosion-resistant upgrades for beachside conditions",
      "Same-day quotes and rapid response for urgent leak repairs in Clovelly West",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Clovelly West Homes",
    paragraphs: [
      "Clovelly West sits close to the coast, where salt-laden winds and ocean moisture accelerate wear on roofs, gutters and flashings. Homes in this area benefit from regular inspections and protective treatments to prevent rust and corrosion.",
      "We service properties throughout Clovelly West with roof repairs, metal roofing installations, tile replacements and complete gutter solutions designed for coastal durability. Whether you have an older brick home or a renovated beachside residence, we match materials and techniques to your building.",
      "Our team understands how coastal weather affects roofing systems — from salt corrosion on metal valleys to cracked tiles from thermal cycling. Every job includes a thorough inspection, clear recommendations and quality workmanship backed by local knowledge.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and gutter work in Clovelly West",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Clovelly West",
    subheading: "Ocean air and coastal winds create unique maintenance demands for roofs and gutters near the beach.",
    paragraphs: [
      "Salt corrosion is the primary concern for metal roofs, gutters and downpipes in Clovelly West. Even galvanised steel and standard Colorbond can show rust if not treated or replaced with marine-grade alternatives. We identify early corrosion, replace affected sections and recommend protective coatings where appropriate.",
      "Coastal storms bring heavy rain and strong winds that can dislodge tiles, lift ridge capping and overwhelm older gutter systems. If you notice water pooling around the foundation, ceiling stains or loose tiles after bad weather, your roof may need targeted repairs or capacity upgrades.",
      "Regular maintenance is critical in beachside locations. We offer inspection packages, gutter cleaning schedules and preventative treatments to extend roof life and avoid expensive emergency work during the winter storm season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Bronte",
    quote:
      "Called them after noticing rust spots on our gutters. They replaced the damaged sections, cleaned everything and applied a protective coating. The work was done quickly and the price was very fair for the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
