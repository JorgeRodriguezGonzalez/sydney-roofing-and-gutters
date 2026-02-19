import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.744; // Hebersham
const AREA_LON = 150.816;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hebersham",
  slug: "hebersham",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hebersham Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HEBERSHAM",
    bullets: [
      "Complete roof repairs and metal roofing installations",
      "Storm damage repairs and urgent leak fixes",
      "Gutter replacement and downpipe upgrades for heavy rain",
      "Licensed roof inspections and maintenance across Hebersham and Mount Druitt",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Homes Throughout Hebersham",
    paragraphs: [
      "Hebersham homes face the full impact of Western Sydney weather, from intense summer heat to sudden storm cells that test roof integrity and drainage capacity. Small issues like cracked tiles or blocked gutters escalate quickly under these conditions.",
      "We provide targeted roof repairs, full restorations and new Colorbond installations designed to handle the local climate. Whether you need urgent leak detection or scheduled maintenance, our team works efficiently across tile, metal and slate roofing systems.",
      "From first inspection to final cleanup, we focus on transparent pricing, quality materials and workmanship that protects your home for years. Every project is completed with trade certification and public liability cover as standard.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and installation in Hebersham",
  },

  problemsBlock: {
    heading: "Common Roofing and Drainage Issues We Solve in Hebersham",
    subheading: "Western Sydney heat and storm exposure accelerate wear on roofs and gutters throughout the suburb.",
    paragraphs: [
      "Extreme temperatures cause tile movement and fastener fatigue, while summer storms deliver sudden downpours that overwhelm undersized or blocked gutters. The result is water entry, ceiling stains and rust that worsens every season.",
      "If you notice cracked or dislodged tiles, rusty valleys, sagging gutters or water pooling near the roofline after rain, the damage will only continue. Waiting turns minor repairs into costly replacements.",
      "We assess the full system, including flashing, valleys and downpipe capacity, then provide clear options for repair or upgrade. Our work is backed by warranty and designed to withstand the conditions that caused the original failure.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael D.",
    suburb: "Mount Druitt",
    quote:
      "They fixed a major leak above the kitchen and replaced two sections of rusted valley. The team was punctual, thorough and left the site spotless. No issues since the repair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
