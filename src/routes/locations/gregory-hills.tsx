import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.018; // Gregory Hills
const AREA_LON = 150.766;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Gregory Hills",
  slug: "gregory-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Gregory Hills Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GREGORY HILLS",
    bullets: [
      "Roofing expertise for modern estates and new builds",
      "Colorbond repairs, tile replacements and leak inspections",
      "Guttering upgrades to handle western Sydney storms",
      "Local service across Gregory Hills, Oran Park and Narellan",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Gutters in Gregory Hills",
    paragraphs: [
      "Gregory Hills is one of the fastest-growing estates in the south-west, with modern homes, Colorbond roofs and contemporary designs. Even new roofs need expert care when settling issues, builder oversights or storm damage occur.",
      "We provide roof repairs, tile and metal replacements, leak detection and complete gutter installations across the estate — working with builders, homeowners and strata managers to deliver reliable results.",
      "From new Colorbond installations to existing tile repairs and blocked downpipes, our team understands local construction methods and what it takes to keep your roof system performing through 40-degree heat and heavy downpours.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Modern roofing and gutter services in Gregory Hills",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Gregory Hills and New Estates",
    subheading: "New builds and master-planned estates come with unique roofing challenges that need specialist attention.",
    paragraphs: [
      "Construction debris, inadequate flashings, poorly aligned gutters or settling cracks can appear within the first few years. Many homeowners discover leaks or pooling water only after the first big storm hits the south-west corridor.",
      "Western Sydney heat places huge stress on Colorbond and tile roofs — expansion, contraction and UV exposure can lead to fastener loosening, sealant failure or early wear around penetrations and valleys.",
      "Our team inspects the full roof system, documents defects for warranty claims where applicable, and provides targeted repairs or upgrades that meet Australian Standards and protect your investment long-term.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel K.",
    suburb: "Oran Park",
    quote:
      "Our new home had water pooling near the downpipe after only six months. They fixed the gutter fall, replaced faulty brackets and cleared the valley. Everything drains perfectly now — very thorough work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
