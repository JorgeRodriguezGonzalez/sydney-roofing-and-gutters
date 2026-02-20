import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.832; // Wentworth Point
const AREA_LON = 151.071;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wentworth Point",
  slug: "wentworth-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Wentworth Point Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WENTWORTH POINT",
    bullets: [
      "Apartment complex and townhouse roofing solutions",
      "Waterfront property roof maintenance and repairs",
      "Guttering and downpipe upgrades for high-density buildings",
      "Reliable service for Wentworth Point and surrounding waterfront areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Wentworth Point Properties",
    paragraphs: [
      "Wentworth Point is a modern waterfront suburb with apartment complexes, townhouses and contemporary developments that require specialised roofing maintenance. Salt air and proximity to the Parramatta River demand regular inspections to prevent corrosion and water damage.",
      "Our team handles roofing repairs, restorations and gutter maintenance for multi-level buildings, townhouse complexes and standalone homes throughout Wentworth Point. We work with Colorbond, metal roofing and tile systems suited to coastal conditions.",
      "Whether you need urgent leak repairs, complete gutter replacement or preventative maintenance for strata properties, we deliver clean workmanship with minimal disruption to residents and clear communication with property managers.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering for Wentworth Point waterfront properties",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Wentworth Point Waterfront Properties",
    subheading: "Salt air exposure and high-density living create unique challenges for roofing systems in this area.",
    paragraphs: [
      "Waterfront locations accelerate rust and corrosion in metal roofing, gutters and flashing. Without regular maintenance, small areas of rust can spread quickly, leading to leaks and structural damage that affect multiple units.",
      "Apartment complexes often face blocked downpipes, overflowing gutters and inadequate drainage during heavy rain. Poor water management can cause internal leaks, ceiling stains and damage to common areas.",
      "We provide targeted repairs for corroded sections, complete gutter system upgrades and comprehensive maintenance plans for strata buildings — keeping your roofing investment protected from the elements year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda K.",
    suburb: "Rhodes",
    quote:
      "Our building had persistent leaks after every storm. The team identified failed flashing and old gutters, replaced everything efficiently and coordinated perfectly with our strata. No more water issues.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
