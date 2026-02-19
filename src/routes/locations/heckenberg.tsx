import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.919; // Heckenberg
const AREA_LON = 150.879;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Heckenberg",
  slug: "heckenberg",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heckenberg Roofing Repair & Restoration Experts",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HECKENBERG",
    bullets: [
      "Roof repairs for older brick and fibro homes",
      "Tile replacement and Colorbond metal roofing installations",
      "Gutter cleaning and replacement for western Sydney weather",
      "Local service across Heckenberg and surrounding Liverpool suburbs with fast response times",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Heckenberg Homes",
    paragraphs: [
      "Heckenberg is home to established brick and fibro housing built between the 1960s and 1980s, and many of these roofs are reaching the stage where maintenance and repairs become essential to prevent leaks and structural damage.",
      "Our team provides roof restorations, tile repairs, metal roofing upgrades and complete gutter replacements for homes across the local area. We understand the challenges that western Sydney heat and summer storms bring to older roofing systems.",
      "Whether you need a full roof restoration or targeted repairs to cracked tiles and rusted guttering, we deliver professional workmanship and honest advice from the first inspection through to completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair services for homes in Heckenberg",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Heckenberg",
    subheading: "Older roofs in western Sydney face unique challenges from extreme heat, storms and ageing materials.",
    paragraphs: [
      "Many homes in Heckenberg have terracotta or concrete tiles that crack under thermal stress during 40-degree summer days, and ageing Colorbond or metal roofs can develop rust spots and loose fixings after decades of exposure.",
      "Blocked or sagging gutters are another frequent problem, especially after storms deposit leaves and debris. This leads to water pooling, overflow into eaves and potential interior water damage that could have been prevented.",
      "We offer thorough roof inspections, targeted tile and flashing repairs, full gutter cleaning or replacement, and complete roof restoration packages to extend the life of your roof and protect your home investment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda K.",
    suburb: "Busby",
    quote:
      "Our roof was leaking badly after the last storm season. They came out quickly, replaced the damaged tiles and fixed the valley flashing. No more leaks and the price was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
