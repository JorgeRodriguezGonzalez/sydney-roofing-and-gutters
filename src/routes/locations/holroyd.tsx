import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.836; // Holroyd
const AREA_LON = 150.999;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Holroyd",
  slug: "holroyd",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Holroyd Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HOLROYD",
    bullets: [
      "Metal and tile roof repairs across Western Sydney",
      "Colorbond restoration for heat-damaged roofing systems",
      "Leak detection and gutter replacement services",
      "Fast response times for homes experiencing storm damage and water ingress",
    ],
  },

  introBlock: {
    heading: "Professional Roof and Gutter Services for Holroyd Homes",
    paragraphs: [
      "Holroyd homes face the full force of Western Sydney weather — summer temperatures above 40 degrees, sudden storms and temperature swings that test every roofing material. That environment demands regular attention to prevent long-term damage.",
      "We work across Holroyd and surrounding suburbs delivering roof repairs, restorations and complete gutter replacements. Whether you have metal roofing, concrete tiles or mixed materials, we provide solutions built to handle local climate conditions.",
      "Our focus is clear communication, efficient work and lasting repairs. Every project includes a thorough inspection, transparent pricing and workmanship that stands up to Western Sydney heat and seasonal storms.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter work for Holroyd properties",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Resolve in Holroyd",
    subheading: "Western Sydney heat combined with sudden storms creates conditions that expose roofing weaknesses quickly.",
    paragraphs: [
      "Metal roofing in Holroyd often shows early signs of heat stress — faded coatings, loose fasteners and minor rust patches that grow over time. Tile roofs face cracking from temperature cycling and storm damage from heavy downpours.",
      "Gutters in this area deal with debris accumulation, structural sagging and rust damage. When storms hit, blocked or damaged gutters lead to overflow, water pooling near foundations and internal ceiling leaks that require urgent attention.",
      "We handle everything from minor patch repairs and gutter cleaning through to full roof restorations and complete gutter system upgrades. Each solution is tailored to address the specific issues your property faces.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Merrylands",
    quote:
      "Our metal roof was showing rust spots and the gutters were sagging badly. They completed the restoration quickly, replaced the damaged sections and fixed all the drainage issues. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
