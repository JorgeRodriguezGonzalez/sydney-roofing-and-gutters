import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.906; // Zetland
const AREA_LON = 151.210;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Zetland",
  slug: "zetland",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Zetland Roof and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ZETLAND",
    bullets: [
      "Roofing solutions for apartments and mixed-use developments",
      "Metal roofing repairs and Colorbond installations",
      "Leak detection and waterproofing for modern buildings",
      "Fast response for commercial and residential properties in Zetland and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Zetland",
    paragraphs: [
      "Zetland has transformed rapidly over recent years with new apartment complexes, commercial spaces and modern residential buildings. These structures demand reliable roofing systems that handle urban weather exposure and drainage challenges.",
      "Whether you need metal roof repairs, gutter replacement or leak fixes for your Zetland property, we deliver skilled workmanship suited to contemporary building standards and high-density environments.",
      "Our team specialises in Colorbond metal roofing, tile repairs and gutter systems for both residential units and commercial properties — ensuring quality results that stand up to Sydney weather.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Modern roofing and guttering services in Zetland",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Resolve in Zetland",
    subheading: "Urban environments create unique roofing challenges, from drainage stress to building movement and weathering.",
    paragraphs: [
      "Modern multi-storey buildings require robust drainage systems to handle storm runoff from large roof areas. Blocked gutters or undersized downpipes can cause overflow, pooling and water damage to facades and interiors.",
      "Metal roofing in urban settings is exposed to pollution, temperature extremes and structural settling. This can lead to rust spots, fastener loosening, flashing failures and unexpected leaks during heavy rain.",
      "We diagnose these problems thoroughly and provide targeted repairs, gutter upgrades and preventative maintenance — keeping your Zetland property protected and compliant with building standards.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jessica L.",
    suburb: "Green Square",
    quote:
      "They fixed a persistent leak above our balcony that two other contractors could not find. Professional service, clean work and solved the problem completely. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
