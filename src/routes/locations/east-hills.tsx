import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.958; // East Hills
const AREA_LON = 150.988;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "East Hills",
  slug: "east-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Trusted Roofing Services in East Hills",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EAST HILLS",
    bullets: [
      "Complete roof repairs and tile replacements",
      "Expert gutter cleaning and downpipe maintenance",
      "Metal roof restorations and Colorbond installations",
      "Storm damage repairs with quick response across East Hills and nearby suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for East Hills Homes",
    paragraphs: [
      "East Hills is home to a diverse range of residential properties, from established brick homes to modern townhouses, each with unique roofing requirements. Regular maintenance is essential to protect your investment from Sydney weather extremes.",
      "Our team delivers dependable roof repairs, full restorations and guttering services throughout East Hills, Panania and surrounding areas. We work with all roof types including tile, metal and Colorbond, ensuring quality workmanship on every job.",
      "From leak detection and valley repairs to complete roof overhauls, we provide transparent quotes and reliable service designed to extend the life of your roof and protect your home year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in East Hills suburb",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in East Hills",
    subheading: "Heavy rainfall and ageing materials can lead to leaks, rust and structural problems if left unaddressed.",
    paragraphs: [
      "Many homes in East Hills have older roof systems that show wear over time. Cracked or broken tiles, rusted valleys and deteriorating ridge capping are common problems that require professional attention before they cause interior damage.",
      "Blocked gutters are another frequent issue in the area. Leaves, debris and sediment build-up can cause water to overflow, damaging fascia boards, eaves and even your foundation if not cleared regularly.",
      "We conduct thorough roof inspections to identify weak points, then provide targeted repairs or full restoration options depending on the condition. Our goal is to deliver lasting solutions that keep your home dry and secure.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Panania",
    quote:
      "Had a persistent leak in the back bedroom for months. They came out same week, found the cracked valley tile and fixed it properly. No issues since and the price was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
