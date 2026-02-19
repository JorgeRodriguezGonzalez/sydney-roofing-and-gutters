import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.924; // Liverpool
const AREA_LON = 150.924;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Liverpool",
  slug: "liverpool",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Liverpool Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LIVERPOOL",
    bullets: [
      "Repairs and installations for all roof types",
      "Storm damage repairs and leak detection across Liverpool",
      "Colorbond, tile and metal roofing solutions",
      "Fast response times with upfront quotes and long-term warranties",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services for Liverpool Homes",
    paragraphs: [
      "Liverpool features a mix of older established homes, modern townhouses and rapidly growing residential estates, each with different roofing needs. Western Sydney heat, summer storms and aging materials can create leaks, rust and cracked tiles if left unchecked.",
      "From roof repairs and restorations to new installations and complete gutter replacements, our team handles projects across Liverpool with care and precision. We work with Colorbond, terracotta, concrete tiles and metal sheeting, adapting our approach to suit your home and budget.",
      "Our focus is on long-lasting repairs, clean installations and transparent communication from start to finish. Whether you need urgent leak repairs or a planned roof restoration, we deliver quality workmanship backed by local experience and genuine customer care.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and gutter installations in Liverpool",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Liverpool",
    subheading: "Western Sydney conditions put real stress on roofs, especially during summer heat and storm season.",
    paragraphs: [
      "Intense heat accelerates the wear on Colorbond and tile roofs, causing expansion cracks, faded coatings and weakened seals. Storm season brings heavy rain that tests gutters, downpipes and valleys, exposing blockages and rust that have been building up over time.",
      "If you notice water stains on ceilings, rusted gutters, missing or cracked tiles, or overflow during rain, these are signs your roof system needs attention before the damage spreads to timbers and interiors.",
      "We provide thorough inspections, targeted repairs and full roof restoration options designed to handle Liverpool conditions. From minor leak fixes to complete gutter upgrades and roof re-coatings, we help keep your home protected and your roof system in top shape.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Warwick Farm",
    quote:
      "After a big storm we had water leaking into two rooms. They came out quickly, found the problem with the valley flashing and fixed it properly. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
