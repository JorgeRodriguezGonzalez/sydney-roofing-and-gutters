import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.736; // Bella Vista
const AREA_LON = 150.957;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bella Vista",
  slug: "bella-vista",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bella Vista Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BELLA VISTA",
    bullets: [
      "Roof repairs and installations for modern homes",
      "Expert leak detection and Colorbond roof restoration",
      "Complete gutter cleaning and replacement services",
      "Trusted roofing solutions throughout Bella Vista and surrounding northwest suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Gutter Services for Bella Vista Homes",
    paragraphs: [
      "Bella Vista combines established residential streets with newer housing estates, and modern roofs require proper maintenance to handle Sydney northwest weather conditions including summer heat and storm season downpours.",
      "Our team services all roof types across Bella Vista, from Colorbond metal roofing and concrete tiles to terracotta and slate. We deliver complete roof repairs, restoration work, leak fixes and guttering solutions designed for local conditions.",
      "Whether you need urgent leak repairs, full gutter replacement or preventative roof maintenance, we focus on quality workmanship, clear pricing and fast turnaround from first inspection through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repair work in Bella Vista",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve Throughout Bella Vista",
    subheading: "Northwest Sydney weather patterns create specific challenges for residential and commercial roofing systems.",
    paragraphs: [
      "Summer temperatures often exceed 40 degrees in Bella Vista, causing metal roofing to expand and contract repeatedly. This leads to loose fasteners, cracked sealants and potential leak points that worsen during heavy rain events.",
      "Blocked gutters and downpipes are another frequent problem, especially in streets with established trees. When debris accumulates, water overflows into fascias and eaves, creating dampness and potential structural damage over time.",
      "We provide thorough roof inspections, targeted repairs for leaks and rust damage, complete gutter cleaning and replacement services, plus full roof restoration options that protect your home for years ahead.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca T.",
    suburb: "Castle Hill",
    quote:
      "They fixed a persistent leak above our main bedroom that two other companies could not locate. The team was professional, arrived on time, and the repair has held up perfectly through multiple storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
