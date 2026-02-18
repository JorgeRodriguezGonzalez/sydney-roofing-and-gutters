import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.015; // Bangor
const AREA_LON = 151.032;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bangor",
  slug: "bangor",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bangor Roof Repairs & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BANGOR",
    bullets: [
      "Trusted roofing services for established Sutherland Shire homes",
      "Tile and metal roof repairs, leak detection, restorations",
      "Gutter cleaning and repair for tree-prone properties",
      "Local team servicing Bangor, Menai, Woronora and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Gutter Services for Bangor Homes",
    paragraphs: [
      "Bangor sits among the bushland and riverside streets of the Sutherland Shire, where mature trees and coastal proximity mean roofs need regular attention to handle leaf build-up, moisture and weather exposure.",
      "We provide comprehensive roofing and guttering services across Bangor — from tile repairs and Colorbond work to full gutter replacement and leak detection. Our team understands the local conditions and the types of homes found throughout the area.",
      "Whether you need a roof restoration, targeted repairs or preventative maintenance, we deliver quality workmanship with clear pricing and no surprises. Every job is treated with care from initial inspection through to final clean-up.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in Bangor homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Bangor",
    subheading: "Tree-lined streets and bushland surrounds create unique challenges for roofs and guttering systems in this area.",
    paragraphs: [
      "Leaf litter, seed pods and debris from surrounding trees can quickly block gutters and valleys, leading to overflow, water staining and even structural damage if left unaddressed.",
      "Older tile roofs and metal sheets in Bangor properties often show signs of weathering — cracked tiles, rust spots, loose pointing or sagging sections that allow water ingress during storms.",
      "We specialise in diagnosing these problems early and providing practical solutions — whether that means targeted repairs, gutter upgrades or full roof restoration to protect your home long-term.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Menai",
    quote:
      "Our gutters were overflowing every time it rained. The team cleared all the debris, replaced damaged sections and checked the roof for loose tiles. Great service and very thorough.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
