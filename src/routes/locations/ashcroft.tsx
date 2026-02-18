import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.920; // Ashcroft
const AREA_LON = 150.897;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ashcroft",
  slug: "ashcroft",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Ashcroft Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ASHCROFT",
    bullets: [
      "Expert roof repairs for established residential homes",
      "Metal roofing and Colorbond installations throughout Ashcroft",
      "Complete guttering solutions for heavy summer storms",
      "Fast turnaround on leak detection and emergency repairs across western Sydney",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Ashcroft Homes",
    paragraphs: [
      "Ashcroft is a quiet residential suburb in western Sydney with a mix of established homes and newer builds. Older roofing on these properties can face challenges from summer heat, storm damage and general weathering over time.",
      "We provide roof repairs, roof restorations and metal roofing installations designed to handle western Sydney conditions. Whether you need leak repairs, tile replacement or a full Colorbond roof upgrade, we cover everything from inspection to completion.",
      "Our team works across Ashcroft and surrounding areas like Miller, Cartwright and Liverpool, delivering durable solutions with clear timelines and honest pricing. Every project is finished to trade standards and backed by local experience.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering work in Ashcroft",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Ashcroft",
    subheading: "Western Sydney heat and summer storms put extra pressure on roofing systems, especially on older homes.",
    paragraphs: [
      "Hot summer days in Ashcroft can cause metal roofs to expand and contract, leading to loose fasteners, cracked sealant and eventually leaks. Tiles can crack under thermal stress, and older roofs often show wear from years of sun exposure.",
      "Heavy downpours during storm season expose weak gutters, blocked downpipes and poor drainage. Water can pool on flat sections, overflow into eaves or damage fascia boards if the system is not maintained properly.",
      "We fix leaking roofs, replace damaged tiles, upgrade tired guttering and provide full inspections to identify problems before they turn into costly repairs. Our work is built to last through Sydney weather and local conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Miller",
    quote:
      "Called them after spotting water stains on the ceiling. They came out quickly, found cracked tiles and loose flashing, and fixed everything in one day. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
