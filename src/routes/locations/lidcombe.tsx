import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.864; // Lidcombe
const AREA_LON = 151.045;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Lidcombe",
  slug: "lidcombe",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Lidcombe Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LIDCOMBE",
    bullets: [
      "Expert roof repairs for older homes and new builds",
      "Metal roofing and tile restoration services",
      "Gutter cleaning and downpipe replacement",
      "Heat-resilient solutions for western Sydney conditions",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes Across Lidcombe",
    paragraphs: [
      "Lidcombe features a diverse housing mix, from established homes near the station to modern townhouses and new developments. Each property type has unique roofing needs that require experienced local attention.",
      "Western Sydney heat and summer storms place real demands on roofing systems. We provide metal roofing repairs, tile replacements, gutter upgrades and leak detection tailored to these conditions.",
      "Our work covers Colorbond installations, Terracotta tile repairs, and full gutter system overhauls. We focus on durable materials, clean installation and honest service from first inspection through to final cleanup.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter work in Lidcombe homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair Throughout Lidcombe",
    subheading: "Western Sydney weather means roofs face intense heat, storm damage and ageing material stress.",
    paragraphs: [
      "Older homes often develop cracked tiles, rusted valley irons and blocked gutters. Modern builds sometimes reveal poor flashing or inadequate drainage design that only shows up after heavy rain.",
      "Signs like ceiling stains, overflowing gutters during storms, loose or missing tiles, and sagging rooflines all point to problems that get worse the longer they wait.",
      "We handle targeted repairs, complete restorations and preventative maintenance. Our goal is watertight performance, long material life and clear quotes that match the final invoice.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael K.",
    suburb: "Auburn",
    quote:
      "Our roof leaked every storm for two years. They found the problem fast, replaced the damaged valley and cleared all the gutters. No more leaks and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
