import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.839; // North Sydney
const AREA_LON = 151.207;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "North Sydney",
  slug: "north-sydney",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Commercial & Residential Roofing in North Sydney",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NORTH SYDNEY",
    bullets: [
      "Specialised roofing for strata, apartments and heritage buildings",
      "Leak detection and urgent repairs for multi-level properties",
      "Metal roof restoration, guttering upgrades and safety compliance",
      "Fast turnaround for commercial and residential sites across North Sydney",
    ],
  },

  introBlock: {
    heading: "Expert Roofing for North Sydney Homes and Buildings",
    paragraphs: [
      "North Sydney combines heritage architecture, modern apartments and bustling commercial hubs — each with unique roofing demands. Access, strata approvals and weather exposure require careful coordination and proven systems.",
      "We service residential homes, apartment complexes and commercial properties throughout North Sydney, handling metal roof restorations, tile repairs, leak detection and complete guttering overhauls. Every project is planned for minimal disruption and full compliance.",
      "Our team works with Colorbond, metal cladding, tiles and heritage slate. We manage site access, safety protocols and strata liaison so you get reliable, long-lasting results without the headaches.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in North Sydney",
  },

  problemsBlock: {
    heading: "Roofing Challenges We Solve in North Sydney",
    subheading: "High-rise living, heritage homes and harbour winds create roofing issues that need specialist attention.",
    paragraphs: [
      "Harbour-side locations mean salt air, wind-driven rain and accelerated corrosion on metal roofs and gutters. Older buildings face cracked flashings, worn mortar and hidden leaks that damage ceilings and internal walls.",
      "Strata properties often struggle with blocked valley gutters, ageing downpipes and poor drainage design that overflows during storms. Multi-level access complicates inspections and delays repairs.",
      "We provide thorough assessments, coordinated repairs and preventative maintenance programs that protect your property value and avoid emergency callouts. From heritage restorations to modern apartment blocks, we deliver compliant, durable solutions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca W.",
    suburb: "Crows Nest",
    quote:
      "Our strata needed urgent leak repairs on a heritage building. They coordinated everything with council and body corporate, fixed the flashings and valley gutters, and the whole process was seamless. Highly recommended.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
