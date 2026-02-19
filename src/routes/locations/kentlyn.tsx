import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.071; // Kentlyn
const AREA_LON = 150.841;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kentlyn",
  slug: "kentlyn",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kentlyn Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KENTLYN",
    bullets: [
      "Expert roof repairs for acreage and suburban homes",
      "Metal roofing installations and Colorbond restorations",
      "Gutter replacements designed for summer storms",
      "Fast response for leak detection and insurance assessments across Kentlyn",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Gutter Services for Kentlyn Properties",
    paragraphs: [
      "Kentlyn combines acreage living with established suburban homes on larger blocks — which often means larger roofs, complex guttering layouts and exposure to extreme western Sydney heat and summer storms.",
      "We provide roof repairs, metal roofing installations, Colorbond restorations and gutter replacements tailored to local conditions. Whether your roof has faded paint, rusty valleys, loose tiles or blocked downpipes, we deliver lasting solutions built to withstand heat and heavy rain.",
      "Our team works across tile, metal and Colorbond roofing systems with transparent quotes, licensed tradespeople and a focus on quality that protects your investment.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter repairs in Kentlyn",
  },

  problemsBlock: {
    heading: "Common Roofing & Guttering Issues We Fix in Kentlyn",
    subheading: "Larger blocks and older roofing systems often face challenges from heat stress, tree debris and storm damage.",
    paragraphs: [
      "Many properties in Kentlyn feature older tile roofs and metal roofing that has been exposed to decades of harsh sun, thermal expansion and heavy downpours. Cracked tiles, rusted valleys, sagging gutters and faded Colorbond are common problems we address every week.",
      "Blocked gutters from gum trees and poor drainage can lead to overflows, internal water damage and foundation issues — especially during summer storms when water hits fast and hard.",
      "We provide thorough inspections, preventative maintenance plans, targeted repairs and full roof restoration options designed to extend the life of your roof system and keep your home protected.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew K.",
    suburb: "Campbelltown",
    quote:
      "Had major leaks during the last big storm. The team came out quickly, identified three problem areas and completed repairs the same week. Roof has been watertight ever since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
