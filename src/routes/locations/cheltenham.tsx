import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.754; // Cheltenham
const AREA_LON = 151.082;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cheltenham",
  slug: "cheltenham",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cheltenham Coastal Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHELTENHAM",
    bullets: [
      "Coastal roofing built to withstand salt air",
      "Colorbond and tile repairs for beachside homes",
      "Gutter replacement to handle ocean winds and debris",
      "Fast response across Cheltenham and the Northern Beaches area",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Cheltenham Beachside Properties",
    paragraphs: [
      "Cheltenham sits close to the ocean between Manly and Balgowlah, where salt spray, coastal winds and high humidity put extra pressure on roofing materials. Without proper maintenance, corrosion and leaks can develop faster than in other suburbs.",
      "We specialise in roof repairs, metal roof restorations and gutter upgrades designed for coastal conditions. Whether your home has Colorbond, terracotta tiles or older cement sheeting, we protect it from the elements year-round.",
      "Our service covers everything from minor leak detection to complete roof overhauls. We work with quality materials, deliver clean installations and provide warranties you can rely on.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs for coastal homes in Cheltenham",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Cheltenham Homes",
    subheading: "Salt air and coastal weather accelerate wear on roofing systems near the beach.",
    paragraphs: [
      "Metal roofs can rust quickly near the water, especially around fasteners, valleys and flashing. Tiles can crack from temperature shifts and wind uplift. Gutters often fill with leaves and sand, leading to blockages and overflow during storms.",
      "If you notice rust stains, water marks on ceilings, loose or missing tiles, or gutters pulling away from the fascia, these are warning signs that need attention before damage spreads.",
      "We provide thorough inspections, targeted repairs and preventative maintenance plans. Our team understands coastal roofing challenges and delivers solutions built to last in harsh seaside environments.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Balgowlah",
    quote:
      "Our metal roof had rust spots and a persistent leak near the chimney. The team assessed everything, replaced corroded sections and resealed the flashing. The work was excellent and completed on time.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
