import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.781; // Northmead
const AREA_LON = 151.002;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Northmead",
  slug: "northmead",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Specialists Serving Northmead Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NORTHMEAD",
    bullets: [
      "Repairs and restorations for Colorbond and tile roofs",
      "Leak detection and urgent storm damage repairs",
      "Complete gutter cleaning and replacement services",
      "Professional workmanship backed by written guarantees for local properties",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Northmead Residential Properties",
    paragraphs: [
      "Northmead features a diverse mix of established homes and modern properties, each requiring consistent roof maintenance to handle the demanding Western Sydney climate. Heat, sudden storms and seasonal weather changes put constant pressure on roofing systems.",
      "We specialise in roof repairs, complete restorations, guttering upgrades and thorough leak investigations across Northmead and surrounding suburbs. Our team works with Colorbond steel, terracotta tiles, concrete and metal roofs to deliver lasting solutions.",
      "From routine maintenance to urgent storm damage repairs, we focus on quality materials, careful attention to detail and clear communication at every stage of the project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work on Northmead residential property",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in Northmead Homes",
    subheading: "Western Sydney conditions can accelerate roof wear, with heat and storm damage creating costly problems if left unchecked.",
    paragraphs: [
      "Summer temperatures regularly exceed 40 degrees in Northmead, causing tiles to expand and contract. This leads to cracked tiles, broken seals and weakened flashings that eventually let water through during heavy rain.",
      "Blocked gutters are another frequent concern. Leaf debris and dust can build up quickly, leading to overflow, rust damage and water pooling near fascias or running into the roof space.",
      "Whether you need urgent leak repairs, tile replacements, gutter cleaning or a comprehensive roof restoration, we provide tailored solutions designed to protect your home year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Wentworthville",
    quote:
      "The team fixed multiple broken tiles and resealed the ridge capping after storm damage. They were prompt, professional and left the site spotless. Very happy with the quality of work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
