import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.863; // Bossley Park
const AREA_LON = 150.881;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bossley Park",
  slug: "bossley-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bossley Park Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BOSSLEY PARK",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Professional leak detection and long-lasting repairs",
      "Complete gutter replacement and downpipe upgrades",
      "Fast local service across Bossley Park and surrounding Western Sydney areas",
    ],
  },

  introBlock: {
    heading: "Quality Roofing Solutions for Bossley Park Homes",
    paragraphs: [
      "Bossley Park is home to established residential streets with a mix of brick veneer and tiled homes that need regular roofing maintenance to handle the intense Western Sydney climate.",
      "With summer temperatures regularly exceeding 40 degrees and sudden storm activity throughout the year, roofs in this area face expansion stress, heat damage and water entry risks that require professional attention.",
      "We deliver roof repairs, restorations and complete gutter systems using quality materials suited to local conditions — Colorbond steel, concrete tiles and metal flashings designed for durability and weather resistance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Bossley Park residential properties",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Bossley Park",
    subheading: "Western Sydney heat and storms create specific challenges for roofs and gutters in this area.",
    paragraphs: [
      "Extreme heat causes roof materials to expand and contract repeatedly, leading to cracked tiles, loose ridge capping and gaps where water can enter during storms.",
      "Older gutter systems often sag or rust through after years of UV exposure and temperature stress, resulting in overflow during heavy rain and potential damage to fascias and eaves.",
      "We provide targeted inspections, replace damaged sections and install upgraded materials that withstand the local climate — keeping your roof watertight and properly ventilated year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Tony M.",
    suburb: "Edensor Park",
    quote:
      "They replaced our rusted gutters and fixed several cracked tiles before the storm season. The crew was efficient and cleaned up properly. Very happy with the results.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
