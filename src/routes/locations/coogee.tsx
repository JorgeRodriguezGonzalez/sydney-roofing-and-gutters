import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.921; // Coogee
const AREA_LON = 151.255;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Coogee",
  slug: "coogee",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists Serving Coogee",
    titleTop: "ROOFING SERVICES",
    titleBottom: "COOGEE",
    bullets: [
      "Expert protection against salt air and coastal winds",
      "Roof repairs, restorations and corrosion prevention for beachside homes",
      "Colorbond and tile specialists for ocean-exposed roofs",
      "Fast response to leaks, rust damage and storm repairs across the beachfront and surrounding streets",
    ],
  },

  introBlock: {
    heading: "Dependable Roofing Services for Coogee Homes and Properties",
    paragraphs: [
      "Living close to Coogee Beach means stunning views and coastal lifestyle, but it also exposes your roof to constant salt spray, strong ocean winds and rapid material degradation that inland properties never face.",
      "We specialise in roofing solutions designed for beachside conditions, from rust prevention on metal roofs to tile repairs on heritage homes and modern leak sealing across terraces and apartment blocks in the suburb.",
      "Whether you need urgent storm repairs, gutter cleaning to prevent overflow, or a full roof restoration to combat years of coastal wear, we deliver clean workmanship and materials built to withstand the marine environment.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and restoration in coastal Coogee",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Coogee Beachside Homes",
    subheading: "Salt air accelerates rust, weakens seals and damages roofs faster than anywhere else in Sydney.",
    paragraphs: [
      "Coastal homes face unique challenges including corroded flashings, rusted gutters, lifted tiles from wind, cracked seals around skylights and water stains on ceilings after heavy rain or easterly storms that push moisture under worn roof edges.",
      "Even newer Colorbond roofs can develop surface rust or fastener corrosion within a few years if not installed with marine-grade fittings, and older terracotta or concrete tiles often crack from the constant thermal cycling and salt exposure.",
      "We assess every roof with coastal conditions in mind, recommend protective coatings where needed, replace corroded components with corrosion-resistant materials, and ensure every repair is sealed properly to keep ocean moisture out and your home dry year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca T.",
    suburb: "Randwick",
    quote:
      "Our metal roof was showing rust spots and the gutters were sagging badly after years of coastal weather. The team replaced the worst sections and applied protective coating. Looks brand new and feels secure again.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
