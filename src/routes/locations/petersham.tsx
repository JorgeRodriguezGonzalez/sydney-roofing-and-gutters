import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.894; // Petersham
const AREA_LON = 151.155;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Petersham",
  slug: "petersham",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Heritage Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PETERSHAM",
    bullets: [
      "Heritage roof repairs for period homes",
      "Slate, tile and metal roof restoration work",
      "Traditional guttering upgrades to match original character",
      "Local experts who understand older roof systems and inner-city challenges",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Petersham Homes and Buildings",
    paragraphs: [
      "Petersham is home to beautiful Victorian and Edwardian terraces, Federation homes and classic semi-detached properties built with slate, terracotta tiles and original metal roofing. These older roof systems need careful, knowledgeable repair work to preserve their character and function.",
      "Whether you need slate replacement, valley tray repairs, box gutter restoration or skilled leak detection in tight inner-city rooflines, we bring experience and respect for heritage details to every project. Our team works across Petersham, Lewisham, Stanmore and surrounding suburbs.",
      "We provide roof inspections, targeted repairs, full restorations and modern waterproofing solutions that work with traditional materials — keeping your home protected without compromising the look and feel of the original architecture.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration for Petersham period homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Petersham and the Inner West",
    subheading: "Older homes have unique roofing challenges that require experienced tradespeople and the right approach.",
    paragraphs: [
      "Slate roofs crack and slip, terracotta tiles break under foot traffic, and original metal valleys rust through after decades of service. Box gutters fill with debris, and traditional downpipes struggle with modern storm intensity.",
      "If you notice damp ceilings, water stains near chimneys, rusted flashings, sagging gutters or missing roof tiles, the problem will only worsen over time. Early intervention saves money and prevents structural damage to timber framing and internal plaster.",
      "We specialise in heritage-sensitive repairs, valley tray replacements, box gutter rebuilds and roof restorations designed for inner-city properties. Our goal is to fix the problem properly while respecting the building and the neighbourhood.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen P.",
    suburb: "Stanmore",
    quote:
      "They repaired our slate roof and replaced a rusted valley tray without damaging any of the original tiles. The work was clean, professional and respectful of the heritage features. Highly recommend for older homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
