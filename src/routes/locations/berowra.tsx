import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.622; // Berowra
const AREA_LON = 151.153;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berowra",
  slug: "berowra",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Berowra Roofing and Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEROWRA",
    bullets: [
      "Bushland roofing solutions for tree debris and leaf build-up",
      "Tile, metal and Colorbond roof repairs and restorations",
      "Gutter cleaning and replacement for heavy rainfall events",
      "Free inspections and fast quotes for established homes in Berowra and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Bushland Homes in Berowra",
    paragraphs: [
      "Berowra is a bushland suburb where homes sit among native trees and natural valleys. The leafy environment looks beautiful, but it also means roofs and gutters work harder to handle leaf fall, storm water and debris from overhanging branches.",
      "We provide roofing and guttering services tailored to the local conditions in Berowra — from tile and metal roof repairs to complete gutter replacement and downpipe upgrades that prevent blockages and overflow during heavy rain.",
      "Our team works across older established properties and mid-century homes, delivering reliable leak repairs, roof restorations and gutter maintenance that protects your home from water damage year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing services for bushland properties in Berowra",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Berowra",
    subheading: "Bushland homes face unique roofing challenges — from leaf blockages to storm damage and ageing materials.",
    paragraphs: [
      "Tree canopy coverage means gutters fill quickly with leaves, bark and seed pods. When gutters block, rainwater overflows into eaves, fascia boards and even interior ceilings — causing stains, rot and expensive repairs if left unchecked.",
      "We also see cracked terracotta tiles, corroded valleys, rusted metal roof sections and leaking skylights in older homes. Storms can lift ridge caps or dislodge sections, creating entry points for moisture and wildlife.",
      "Our inspections identify hidden problems before they escalate. We offer targeted repairs, preventative gutter maintenance and full roof restoration services — keeping your home watertight through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen H.",
    suburb: "Hornsby",
    quote:
      "They cleared two years of leaf build-up from our gutters, replaced damaged tiles and sealed the valleys properly. The difference after the next storm was incredible — no more leaks or overflow. Great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
