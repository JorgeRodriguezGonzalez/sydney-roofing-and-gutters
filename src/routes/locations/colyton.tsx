import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.788; // Colyton
const AREA_LON = 150.806;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Colyton",
  slug: "colyton",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Colyton Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "COLYTON",
    bullets: [
      "Expert repairs for western Sydney weather conditions",
      "Colorbond and tile roof installations and restorations",
      "Complete gutter replacement and downpipe upgrades",
      "Fast response for leak detection and emergency repairs across Colyton",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Colyton Homes and Properties",
    paragraphs: [
      "Colyton experiences the full impact of western Sydney weather — intense summer heat, severe afternoon storms and rapid temperature shifts that place constant pressure on roofing materials and gutter systems.",
      "We service residential properties across Colyton with roof repairs, complete restorations, metal roofing installations and full guttering solutions designed to handle local climate demands without compromise.",
      "Our team works with Colorbond steel, concrete and terracotta tiles, providing thorough inspections, transparent quotes and quality workmanship that protects your home year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and gutter work in Colyton",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Resolve in Colyton",
    subheading: "Western Sydney heat and storm exposure accelerate wear on roofs and drainage systems.",
    paragraphs: [
      "Extreme summer temperatures cause metal roofing to expand and contract, loosening fasteners and creating gaps. Tile roofs suffer cracking and displacement, while gutters warp or pull away from fascia boards under thermal stress.",
      "Heavy storm runoff overwhelms undersized or blocked gutters, leading to overflow, water pooling around foundations and interior ceiling damage that worsens with each weather event.",
      "We provide detailed roof and gutter inspections, targeted repairs for leaks and damage, complete system replacements where needed, and preventative maintenance plans to keep your property protected.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer L.",
    suburb: "St Marys",
    quote:
      "Our Colorbond roof was lifting at the edges after several hot summers. The team re-fastened everything, replaced damaged sheets and checked the entire system. No more noise or leaks during storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
