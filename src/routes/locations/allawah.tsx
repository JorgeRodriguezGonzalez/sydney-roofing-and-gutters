import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.971; // Allawah
const AREA_LON = 151.113;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Allawah",
  slug: "allawah",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Allawah Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ALLAWAH",
    bullets: [
      "Roof repairs and restorations for Allawah homes",
      "Metal and tile roofing solutions for all property types",
      "Professional gutter replacement and cleaning services",
      "Fast response times across Allawah and surrounding St George suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Allawah Residential Properties",
    paragraphs: [
      "Allawah is a well-established residential suburb with a mix of post-war homes and more recent developments, each with different roofing requirements that need proper attention and maintenance.",
      "We provide comprehensive roof repairs, metal roofing installations, tile replacements and complete gutter systems for Allawah properties. Our work covers everything from minor leak fixes to full roof restorations.",
      "Whether you have Colorbond metal roofing, terracotta tiles or concrete roof tiles, our qualified team delivers reliable workmanship with clear communication throughout every stage of your roofing project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Allawah",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in Allawah Homes",
    subheading: "Older roofing systems combined with Sydney weather patterns create maintenance challenges that require professional attention.",
    paragraphs: [
      "Many Allawah homes feature original roofing materials that have reached or exceeded their expected lifespan. Cracked tiles, rusted metal sections and deteriorated flashing can all lead to water penetration and interior damage.",
      "Blocked gutters are another frequent problem, especially after storms when debris accumulates and prevents proper drainage. This overflow can damage fascias, soffits and even cause foundation issues if left unaddressed.",
      "We conduct thorough roof inspections to identify all problem areas, then provide honest recommendations and competitive quotes for repairs, partial replacements or complete roof restorations based on your property needs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Hurstville",
    quote:
      "They replaced several cracked tiles and resealed the ridge capping on our Allawah property. The team was punctual, worked efficiently and cleaned up thoroughly afterward. Roof has been watertight ever since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
