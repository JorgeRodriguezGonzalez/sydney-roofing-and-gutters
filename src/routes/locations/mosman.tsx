import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.829; // Mosman
const AREA_LON = 151.244;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Mosman",
  slug: "mosman",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Harbourside Roofing Specialists for Mosman Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MOSMAN",
    bullets: [
      "Heritage and Federation home roofing specialists",
      "Tile, slate and metal roof repairs and restorations",
      "Coastal-grade materials resistant to salt air corrosion",
      "Expert leak detection and valley repairs for heritage properties with complex roof designs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Mosman Heritage and Modern Homes",
    paragraphs: [
      "Mosman homes range from grand Federation estates to renovated modern residences, many with harbour views and complex rooflines that demand specialist attention. Coastal exposure means every roof faces salt air, ocean winds and accelerated weathering.",
      "We provide roof repairs, heritage roof restoration and complete re-roofing services using materials suited to harbourside conditions. From terracotta tiles and slate to Colorbond metal, we match the right solution to your property style and location.",
      "Our team understands the building standards for heritage-listed areas and works with council requirements where needed. Every project begins with a thorough inspection and detailed quote, so you know exactly what is required before work begins.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration on Federation home in Mosman",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Mosman Properties",
    subheading: "Salt air and coastal weather accelerate wear on tiles, metal flashings and guttering systems across the suburb.",
    paragraphs: [
      "Older heritage roofs often develop leaks around valleys, ridges and chimney flashings. Terracotta tiles crack from thermal movement, and rusted box gutters cause hidden water damage to ceilings and timber frames.",
      "Modern homes are not immune either. Colorbond roofing can corrode prematurely near the coast without proper coating, and poorly installed flashings allow water penetration during heavy rain or storms.",
      "We repair broken tiles, replace corroded gutters, re-seal valleys and restore box gutter systems to modern waterproofing standards. Our focus is long-term protection using quality materials designed for coastal Sydney conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Neutral Bay",
    quote:
      "Our Federation home had persistent leaks around the chimney and back valley. The team repaired all the leadwork, replaced damaged tiles and repointed the ridge. No leaks since, even through the big storms last month.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
