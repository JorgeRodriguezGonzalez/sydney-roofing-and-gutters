import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.9; // Waterloo
const AREA_LON = 151.209;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Waterloo",
  slug: "waterloo",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner Sydney Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WATERLOO",
    bullets: [
      "Roof repairs & restorations for older terraces and apartments",
      "Leak detection and metal flashing repairs",
      "Gutter cleaning and replacement for urban environments",
      "Fast response times across inner Sydney suburbs and nearby areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering in Waterloo",
    paragraphs: [
      "Waterloo is a dense inner suburb with a mix of heritage terraces, apartments and redevelopment projects. Many roofs here are older, high-density structures that require careful inspection and targeted repairs.",
      "From metal roofing and tile repairs to gutter overflow caused by debris and limited drainage space, we provide solutions tailored to urban roofing challenges in the area.",
      "Our team works with Colorbond, terracotta tiles and metal sheeting — delivering fast turnaround, clear quotes and long-lasting workmanship for homes and strata properties across Waterloo and surrounding inner Sydney suburbs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and guttering services in Waterloo",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Waterloo",
    subheading: "Urban roofs face unique pressures — pollution, limited access and high-density layouts can accelerate wear.",
    paragraphs: [
      "Many properties in Waterloo have ageing roofs with rusted valley irons, cracked tiles or failed flashings that go unnoticed until water damage appears inside the ceiling or walls.",
      "Gutter systems in terraces and older buildings are often undersized or blocked by debris, leading to overflow during heavy rain and potential structural issues over time.",
      "We provide thorough inspections, roof repairs and gutter upgrades designed for inner-city conditions — keeping your property watertight and avoiding expensive future repairs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Alexandria",
    quote:
      "Our terrace had a persistent leak in the back room. They found the failed flashing, replaced it cleanly and checked the gutters too. No mess, no hassle — really professional work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
