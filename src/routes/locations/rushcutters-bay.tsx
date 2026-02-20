import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.874; // Rushcutters Bay
const AREA_LON = 151.228;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Rushcutters Bay",
  slug: "rushcutters-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rushcutters Bay Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RUSHCUTTERS BAY",
    bullets: [
      "Coastal roofing repairs for harbor-side properties",
      "Salt air corrosion protection and metal roof treatments",
      "Gutter replacements for apartments and heritage buildings",
      "Emergency leak repairs across Rushcutters Bay and Darlinghurst",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering in Rushcutters Bay",
    paragraphs: [
      "Rushcutters Bay sits right on the harbor, with salt-laden winds and coastal conditions that accelerate wear on metal roofs, gutters and flashings. Properties near the water need proactive protection and regular inspections to avoid corrosion and leaks.",
      "From heritage terraces to modern apartment buildings, we work with Colorbond, metal sheeting, tile and slate — delivering repairs, restorations and gutter upgrades suited to harbor-side exposure and inner-city density.",
      "We understand the challenges of working in compact streetscapes and strata environments. Our team delivers clean, efficient roofing solutions with minimal disruption and clear communication from quote through to completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs near Rushcutters Bay harbor precinct",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Rushcutters Bay",
    subheading: "Harbor exposure and salt air create unique challenges for roofs in this coastal suburb.",
    paragraphs: [
      "Salt air accelerates rust and corrosion on metal roofs and guttering, especially on north-facing and harbor-side elevations. Even galvanised steel can fail faster here without the right protective coatings.",
      "Older terraces and heritage buildings often have undersized gutters, valley rust and flashings that were never designed for modern downpour intensity. That leads to overflow, damp ceilings and internal water damage.",
      "We provide targeted repairs for corroded gutters, re-sealing for leaking valleys, protective coatings for metal roofs and complete restorations where needed — keeping your property watertight and protected from harbor weather.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen S.",
    suburb: "Darlinghurst",
    quote:
      "Our terrace had rusted valleys and the gutters were overflowing every rain. They replaced the lot, sealed everything properly and explained the whole process. Great work in a tight access area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
