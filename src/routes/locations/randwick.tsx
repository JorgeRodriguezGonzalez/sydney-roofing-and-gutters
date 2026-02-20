import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.914; // Randwick
const AREA_LON = 151.241;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Randwick",
  slug: "randwick",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Randwick Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RANDWICK",
    bullets: [
      "Coastal roofing built to handle salt air and sea winds",
      "Metal roof repairs, tile restoration and leak detection",
      "Gutter cleaning and replacement for older terraces and homes",
      "Servicing Randwick, Coogee, Maroubra and surrounds with quality workmanship",
    ],
  },

  introBlock: {
    heading: "Experienced Roofing Solutions for Randwick Homes and Properties",
    paragraphs: [
      "Randwick offers a mix of older character homes, modern apartments and everything in between. Being close to the coast, roofs here face constant exposure to salt air, ocean winds and shifting weather that accelerates wear on gutters and metal flashing.",
      "We provide thorough roof repairs, preventative maintenance and full restorations across terrace houses, single-storey homes and multi-level residences. Our team understands the challenges of working in densely built areas and respects access constraints, neighbouring properties and council requirements.",
      "Whether you need tiles repointed, Colorbond capping replaced or gutters cleared and upgraded, we focus on lasting solutions, detailed quotes and clean execution from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and gutter services in Randwick",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Problems in Randwick Properties",
    subheading: "Coastal exposure and ageing rooflines create specific maintenance challenges that need experienced attention.",
    paragraphs: [
      "Many Randwick homes have older terracotta or concrete tiles, metal valleys and box gutters that show signs of rust, cracking or pooling water after heavy rain. Salt air speeds up corrosion on metal components, and neglected gutters can overflow onto brickwork or into ceiling cavities.",
      "Blocked downpipes, sagging fascia boards, peeling roof paint and deteriorating ridge capping are all warning signs that your roof system needs professional assessment before small issues turn into expensive internal damage.",
      "We conduct detailed inspections, provide honest recommendations and deliver repairs or full restoration work designed to extend the life of your roof while protecting your home from leaks, rot and structural stress.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel K.",
    suburb: "Coogee",
    quote:
      "Our terrace had water pooling in the valley and staining on the bedroom ceiling. They identified the issue quickly, replaced the valley flashing and repointed the tiles. Job done properly and no fuss.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
