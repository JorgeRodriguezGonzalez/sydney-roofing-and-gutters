import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.745; // Glendenning
const AREA_LON = 150.832;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glendenning",
  slug: "glendenning",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Glendenning Roofing Specialists Since 1999",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLENDENNING",
    bullets: [
      "Metal and tile roof repairs for western Sydney heat",
      "Complete roof restorations and leak detection services",
      "Gutter cleaning and replacement for heavy rain events",
      "Fast service across Glendenning, Plumpton and Blacktown areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services for Glendenning Homes",
    paragraphs: [
      "Glendenning sits in western Sydney where summer temperatures regularly climb above 40 degrees and afternoon storms arrive fast. These conditions put constant stress on roof materials, sealants and guttering systems, making regular maintenance essential.",
      "Our team handles everything from minor repairs and gutter replacements to full roof restorations for tile and Colorbond installations. We work with the climate challenges specific to western Sydney suburbs, ensuring your roof stands up to both extreme heat and heavy downpours.",
      "Whether you need urgent leak repairs, preventative inspections or a complete re-roof, we provide clear pricing, reliable scheduling and quality workmanship that keeps homes protected through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repair in Glendenning",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Glendenning",
    subheading: "Western Sydney heat and storm damage create unique roofing challenges that need targeted solutions.",
    paragraphs: [
      "Colorbond and metal roofs expand and contract in extreme temperatures, leading to loose fasteners, cracked sealants and eventual leaks. Tile roofs face similar issues with broken or displaced tiles after storms and heatwaves.",
      "Gutters often overflow during heavy rain because downpipes cannot handle the volume, or debris blocks the flow entirely. This creates water pooling on roofs, leaks into ceilings and potential structural damage over time.",
      "We provide thorough inspections that identify problem areas before they escalate, plus targeted repairs and upgrades designed to handle the full range of western Sydney weather conditions throughout the year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael K.",
    suburb: "Plumpton",
    quote:
      "Had a persistent leak we could not locate for months. Their team found it within 20 minutes, fixed it properly and checked the entire roof. Great service and honest pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
