import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.951; // Padstow
const AREA_LON = 151.032;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Padstow",
  slug: "padstow",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Padstow Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PADSTOW",
    bullets: [
      "Expert repairs for terracotta and Colorbond roofing systems",
      "Leak detection and storm damage restoration services",
      "Complete gutter replacement and overflow prevention solutions",
      "Same-day quotes and flexible scheduling for Padstow and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering Services Across Padstow",
    paragraphs: [
      "Padstow features a mix of established post-war homes and updated properties — many with older roofing systems that need regular care to avoid leaks, rust and weather damage during summer storms.",
      "We service the entire Padstow area with roof repairs, metal roof restoration, tile replacements and full guttering overhauls designed to handle hot summers, heavy rain and the occasional hailstorm.",
      "From terracotta tiles to Colorbond metal roofing, we use quality materials and proven techniques to deliver long-lasting results with full transparency from inspection through to final clean-up.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services and gutter repairs in Padstow",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in Padstow",
    subheading: "Older roofing systems and extreme summer heat can create serious problems if left unchecked too long.",
    paragraphs: [
      "Many homes in Padstow were built decades ago, and original roofs can show wear from UV damage, thermal expansion and storm impact — leading to cracked tiles, rusted valleys and persistent leaks.",
      "Blocked or sagging gutters are another frequent issue, especially after storms. Poor drainage results in water pooling, fascia rot and potential damage to ceilings and internal walls.",
      "We provide targeted repairs, full roof restorations, gutter upgrades and preventative maintenance plans — keeping your home protected year-round without unnecessary replacement costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen D.",
    suburb: "Revesby",
    quote:
      "After years of minor leaks we finally called them in. They replaced the damaged sections, resealed the valleys and cleaned the gutters. No more water stains and the roof looks brand new.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
