import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.921; // Belmore
const AREA_LON = 151.093;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Belmore",
  slug: "belmore",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Belmore Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BELMORE",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Leak detection and ceiling damage repairs",
      "Gutter cleaning and replacement for older homes",
      "Fast service across Belmore and surrounding Canterbury-Bankstown areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering in Belmore",
    paragraphs: [
      "Belmore features a mix of established homes and newer builds, with many properties now showing signs of aging roofs and guttering systems that need attention before small problems turn into expensive repairs.",
      "We service the entire Belmore area with roof repairs, leak fixes, tile replacements, Colorbond installations and complete guttering solutions designed for the local climate and typical Sydney storm patterns.",
      "Whether you need a quick repair, a full roof restoration or upgraded gutters that can handle heavy rain, our team delivers quality workmanship with clear quotes and reliable service from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and guttering services in Belmore",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Belmore",
    subheading: "Older roofs and blocked gutters are the main cause of water damage in established suburbs like Belmore.",
    paragraphs: [
      "Many homes in Belmore were built decades ago, and the original roofing materials are now reaching the end of their lifespan. Cracked tiles, rusted valleys and deteriorating flashing can all lead to leaks during heavy rain.",
      "Gutters filled with debris cause overflow, which damages eaves, fascias and even internal ceilings. If your gutters sag or leak at the joints, the problem will only get worse with the next storm.",
      "We provide thorough inspections, targeted repairs and full restoration services to bring your roof and gutters back to full performance — protecting your home and preventing costly water damage down the track.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen P.",
    suburb: "Canterbury",
    quote:
      "They identified a valley leak we had been living with for months. Fixed it properly, replaced some cracked tiles and cleaned the whole gutter system. Very happy with the result and the price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
