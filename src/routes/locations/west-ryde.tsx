import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.808; // West Ryde
const AREA_LON = 151.089;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "West Ryde",
  slug: "west-ryde",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roof & Gutter Services in West Ryde",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WEST RYDE",
    bullets: [
      "Complete roof repairs for tile and Colorbond installations",
      "Gutter cleaning and replacement for older established homes",
      "Leak detection and waterproofing for storm protection",
      "Quality workmanship across West Ryde and surrounding Ryde suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for West Ryde Homes and Buildings",
    paragraphs: [
      "West Ryde features a diverse mix of established homes, townhouses and newer apartment developments. Many roofing systems here have seen decades of Sydney weather and require regular maintenance to prevent costly water damage and structural issues.",
      "Our team delivers roof repairs, full restorations and gutter upgrades for tile, metal and Colorbond roofing. We work across older fibro cottages, brick homes and modern multi-unit buildings, adapting our approach to each property type.",
      "From leak detection and tile replacement to complete gutter system overhauls, we focus on practical solutions, transparent pricing and long-lasting results that protect your investment through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter repairs in West Ryde",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in West Ryde Properties",
    subheading: "Older homes and tree-lined streets mean gutters and valleys need regular attention to avoid overflow.",
    paragraphs: [
      "Many West Ryde properties have original roofing materials that have reached the end of their service life. Cracked terracotta tiles, rusted metal valleys and deteriorating pointing are common problems that allow water penetration and cause interior damage.",
      "Heavy autumn leaf drop combined with seasonal storms can quickly overwhelm gutters and downpipes. Blocked systems lead to overflow, fascia rot and water pooling near foundations, creating ongoing maintenance headaches.",
      "Our inspection process identifies structural weak points, hidden leaks and drainage issues before they escalate. We provide targeted repairs, preventative maintenance plans and full restoration services tailored to the age and style of your property.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Ryde",
    quote:
      "They replaced the rusted valley iron and re-pointed the ridge capping on our terracotta roof. The work was thorough and the team explained every step. No more leaks after heavy rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
