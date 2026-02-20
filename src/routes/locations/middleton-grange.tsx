import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.919; // Middleton Grange
const AREA_LON = 150.842;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Middleton Grange",
  slug: "middleton-grange",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Experts Serving Middleton Grange Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MIDDLETON GRANGE",
    bullets: [
      "Roof repairs and restorations for growing residential areas",
      "Colorbond and tile roof installations for new builds",
      "Gutter cleaning and replacement to prevent water damage",
      "Fast response times across Middleton Grange and surrounding Liverpool suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Middleton Grange Residents",
    paragraphs: [
      "Middleton Grange is a developing residential suburb in the Liverpool area, with a mix of established homes and newer construction. These properties need reliable roof maintenance to handle the variable weather patterns and seasonal storms of western Sydney.",
      "We provide complete roofing services including leak detection, tile replacement, metal roof repairs, gutter installations and preventative maintenance. Our team works with all common roof types, from Colorbond and concrete tile to terracotta and composite materials.",
      "Whether you need urgent repairs after storm damage or scheduled maintenance to extend the life of your roof, we deliver quality workmanship with clear pricing and reliable timelines from initial inspection through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and maintenance in Middleton Grange",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Middleton Grange",
    subheading: "Western Sydney weather can be tough on roofs — from intense summer heat to sudden storm cells and heavy rain.",
    paragraphs: [
      "Extreme heat causes metal roofs to expand and contract, which can loosen fasteners and create gaps. Tile roofs may crack under thermal stress, and valley flashings can deteriorate faster than expected. Combined with summer storms, these conditions create opportunities for leaks.",
      "Blocked gutters are another frequent problem. Debris accumulation redirects water toward weak points in your roof structure, causing water stains on ceilings, fascia rot and potential internal damage that worsens over time if not addressed promptly.",
      "We provide thorough roof inspections, targeted repairs for leaks and damaged sections, complete gutter cleaning and replacement services, and full roof restorations when needed. Every job includes a detailed assessment and transparent recommendations.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Hoxton Park",
    quote:
      "They replaced damaged tiles and cleared years of debris from the gutters. The team was professional, finished on time, and left the property clean. Very happy with the results and would recommend them.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
