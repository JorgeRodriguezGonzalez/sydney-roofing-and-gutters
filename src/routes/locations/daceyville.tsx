import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.924; // Daceyville
const AREA_LON = 151.224;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Daceyville",
  slug: "daceyville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Solutions for Daceyville",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DACEYVILLE",
    bullets: [
      "Professional tile and metal roof repairs",
      "Complete roof restoration and gutter replacement services",
      "Leak detection and weatherproofing for all roof types",
      "Fast response times for residential and strata properties across Daceyville",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Guttering in Daceyville",
    paragraphs: [
      "Daceyville combines classic Federation homes with modern residential developments, creating a diverse range of roofing systems that require specialised maintenance and repair solutions tailored to each property type.",
      "Our local team services tile roofs, Colorbond installations and metal structures throughout the area, providing leak repairs, gutter cleaning, roof restoration and complete replacement work for homes and strata buildings.",
      "We focus on quality craftsmanship, honest advice and long-term solutions that protect your property from Sydney weather patterns, backed by clear communication and reliable follow-through on every project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter services in Daceyville",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Daceyville",
    subheading: "Older homes and coastal proximity create specific challenges for roof systems in the eastern suburbs.",
    paragraphs: [
      "Federation-era properties often feature terracotta tiles that crack over time, while metal roofing near the coast experiences accelerated wear from salt air and humidity leading to rust and deterioration.",
      "Blocked gutters, sagging downpipes, ceiling stains and recurring leaks after rain are warning signs that should not be ignored, as minor issues quickly escalate into costly structural damage without prompt attention.",
      "We provide thorough roof inspections, targeted repairs, valley replacements and complete restoration services to keep your roof watertight and structurally sound through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Kingsford",
    quote:
      "They replaced cracked tiles and re-sealed the valley after we had persistent leaks. The work was clean, fast and has held up perfectly through heavy rain. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
