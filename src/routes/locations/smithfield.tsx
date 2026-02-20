import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.852; // Smithfield
const AREA_LON = 150.942;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Smithfield",
  slug: "smithfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Smithfield Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SMITHFIELD",
    bullets: [
      "Expert repairs for extreme heat and storm damage",
      "Colorbond and tile roof installations and restorations",
      "Gutter replacement and downpipe upgrades for heavy rain",
      "Fast response times across Smithfield and surrounding Western Sydney suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Smithfield",
    paragraphs: [
      "Smithfield experiences the full range of Western Sydney weather — scorching summer heat often exceeding 40 degrees, intense afternoon storms and rapid temperature swings that put real stress on roofing materials and gutter systems.",
      "Our team has extensive experience working with Colorbond metal roofing, concrete and terracotta tiles across residential and light commercial properties in Smithfield, ensuring every repair and installation can handle local climate extremes.",
      "From leak detection and targeted repairs to complete roof restorations and gutter upgrades, we deliver reliable workmanship with transparent quotes, minimal disruption and results that last for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and installation in Smithfield",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Smithfield",
    subheading: "Extreme heat, heavy storms and aging materials create a unique set of roofing challenges in this area.",
    paragraphs: [
      "Metal roofs expand and contract under intense summer heat, loosening fixings and creating potential leak points. Tile roofs become brittle over time, cracking under thermal stress. Both require regular inspection to catch problems before water enters your ceiling space.",
      "Gutters in Smithfield face a double challenge — extended dry periods followed by sudden downpours that overwhelm blocked or undersized systems. Rusted sections, sagging brackets and inadequate downpipes lead to overflow, erosion and moisture damage around foundations.",
      "Whether you need emergency leak repairs after a storm, preventative gutter cleaning, complete roof restoration or a full replacement system, our team provides tailored solutions based on real local conditions and proven installation methods.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Wetherill Park",
    quote:
      "After years of leaks every summer storm, they completely re-bedded the ridge and replaced damaged tiles. Two wet seasons later, still bone dry. Excellent work and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
