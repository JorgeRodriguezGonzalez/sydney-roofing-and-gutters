import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.91; // Marrickville
const AREA_LON = 151.155;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Marrickville",
  slug: "marrickville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roofing Specialists for Marrickville",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MARRICKVILLE",
    bullets: [
      "Expert repairs for period terraces and heritage homes",
      "Roof restoration for terracotta tiles and slate",
      "Leak detection and gutter repairs",
      "Fast quotes for Marrickville and surrounding inner west suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Gutter Services Throughout Marrickville",
    paragraphs: [
      "Marrickville is home to a diverse mix of Victorian terraces, Edwardian cottages and renovated warehouse conversions — each with unique roofing needs that require experienced local tradespeople.",
      "From Livingstone Road through to the Factory Theatre precinct, we work on terracotta tile repairs, slate restoration, metal roof installations and complete gutter upgrades designed for tight inner-city properties.",
      "Whether you need leak repairs on an older terrace, full roof restoration on heritage ironwork, or modern Colorbond installation for a warehouse conversion, we deliver clean work with minimal disruption to your home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repairs for heritage homes in Marrickville",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Marrickville",
    subheading: "Older homes and terraces can develop leaks, rusted gutters and cracked tiles that worsen over time.",
    paragraphs: [
      "Many heritage properties in Marrickville feature terracotta tiles, slate roofs and shared valleys that require specialist knowledge to repair correctly without causing further damage to neighbouring sections.",
      "We regularly fix sagging gutters, blocked downpipes, water pooling in parapets, cracked ridge capping and rusted flashings that are common in tightly packed terraces and semi-detached homes.",
      "Our team works carefully around period details and confined access, providing targeted repairs, full restorations and preventive maintenance that protects your investment and keeps interiors dry all year round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Dulwich Hill",
    quote:
      "They replaced cracked tiles on our Victorian terrace and fixed the shared valley that had been leaking into the wall. Professional work, respectful of the heritage details, and no mess left behind.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
