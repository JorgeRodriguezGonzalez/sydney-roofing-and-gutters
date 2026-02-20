import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.797; // North Ryde
const AREA_LON = 151.129;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "North Ryde",
  slug: "north-ryde",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roof & Gutter Services North Ryde",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NORTH RYDE",
    bullets: [
      "Comprehensive roof inspections for residential and commercial properties",
      "Tile, Colorbond and metal roof repairs and restoration",
      "Gutter cleaning and replacement for storm protection",
      "Fast response across North Ryde, Macquarie Park and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Specialists in North Ryde",
    paragraphs: [
      "North Ryde combines established residential streets with modern commercial developments near Macquarie University and Macquarie Park. This diverse area requires roofing solutions that handle both older tile roofs and contemporary metal installations across different property types.",
      "We deliver roof repairs, leak detection, restoration work and complete guttering services throughout North Ryde and the surrounding suburbs. Our team understands local weather patterns including heavy downpours, storm damage and the ongoing maintenance needs of roofs in this active area.",
      "Working with concrete tiles, terracotta, Colorbond steel and metal roofing, we focus on reliable workmanship, lasting repairs and clear communication throughout every project from initial assessment to final completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roof repairs and guttering work in North Ryde",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in North Ryde",
    subheading: "Storm damage, ageing roof materials and blocked gutters require prompt attention to prevent expensive water damage.",
    paragraphs: [
      "North Ryde properties face regular challenges from Sydney storms that bring heavy rain, strong winds and debris accumulation. Blocked gutters and damaged downpipes can quickly lead to water pooling, overflow and interior damage if left unattended.",
      "Warning signs include cracked or slipped tiles, rust spots on metal roofs, sagging gutter sections, water stains on ceilings or walls, and persistent leaks during rain. These issues often worsen rapidly without professional intervention.",
      "We provide thorough roof inspections, targeted leak repairs, gutter cleaning and replacement, plus full restoration services. Our preventative maintenance approach helps extend roof life and protect your property investment in North Ryde.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael R.",
    suburb: "Macquarie Park",
    quote:
      "After years of small leaks we finally called for an inspection. They identified multiple issues, explained everything clearly and completed the repairs efficiently. The roof has been completely dry through several storms since then.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
