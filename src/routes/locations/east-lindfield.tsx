import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.771; // East Lindfield
const AREA_LON = 151.178;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "East Lindfield",
  slug: "east-lindfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing Services in East Lindfield",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EAST LINDFIELD",
    bullets: [
      "Expert roof repairs for established North Shore homes",
      "Tile and Colorbond roof restoration and replacements",
      "Gutter maintenance to handle tree debris and runoff",
      "Honest assessments and transparent pricing for East Lindfield residents",
    ],
  },

  introBlock: {
    heading: "Quality Roofing and Guttering for East Lindfield Properties",
    paragraphs: [
      "East Lindfield is home to established family residences with mature gardens and tree-lined streets. These beautiful surroundings also mean roofs and gutters need regular attention to handle leaf accumulation and storm runoff.",
      "Our team provides roof repairs, restorations and full replacements across tile, Colorbond and metal roofing systems. We understand the needs of older homes undergoing renovation as well as properties requiring preventative maintenance.",
      "From leak detection and valley repairs to complete gutter overhauls, we deliver reliable workmanship and clear communication. Every job is assessed thoroughly and completed to the highest standards expected by North Shore homeowners.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roofing and gutter services for East Lindfield homes",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in East Lindfield",
    subheading: "Mature trees and heavy rainfall can create ongoing challenges for roofs and drainage systems.",
    paragraphs: [
      "Blocked gutters from leaf litter are one of the most common problems in East Lindfield. When downpipes become clogged, water backs up into the roof cavity, leading to damp ceilings, timber rot and potential interior damage.",
      "Ageing tile roofs may develop cracked or slipped tiles, broken valleys or deteriorating bedding and pointing. Metal roofs can suffer from rust spots, loose fasteners or worn flashing around chimneys and skylights.",
      "Our inspections identify these issues early. We provide targeted repairs where possible and honest advice when replacement is the better long-term option. You receive upfront pricing with no hidden costs or pressure tactics.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen H.",
    suburb: "Lindfield",
    quote:
      "We had water stains appearing on the bedroom ceiling after every storm. They found broken valley tiles and cleared years of debris from the gutters. The work was thorough and the quote was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
