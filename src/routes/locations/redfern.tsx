import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.893; // Redfern
const AREA_LON = 151.204;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Redfern",
  slug: "redfern",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Redfern Roof Specialists & Gutter Experts",
    titleTop: "ROOFING SERVICES",
    titleBottom: "REDFERN",
    bullets: [
      "Heritage terrace roofing and slate tile restoration",
      "Roof repairs, leak detection and emergency callouts",
      "Guttering replacement for dense urban environments",
      "Fast response across Redfern, Eveleigh and surrounding inner-city areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Solutions in Redfern",
    paragraphs: [
      "Redfern offers a unique mix of heritage terrace homes, Victorian-era buildings and modern developments — each with distinct roofing needs. Older structures demand careful restoration while newer builds require quality maintenance to prevent future headaches.",
      "From slate and tile repairs to metal roofing upgrades and gutter replacements, we work with the full spectrum of inner-city roofing systems. Our team understands the tight access, heritage requirements and noise considerations that come with dense urban work.",
      "We deliver professional roof inspections, targeted leak repairs, full restorations and custom guttering solutions tailored to Redfern properties. Clear quotes, minimal disruption and lasting results are our standard approach for every project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering services for Redfern homes",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Redfern",
    subheading: "Heritage homes and tight urban spaces create unique challenges for roof maintenance and repairs.",
    paragraphs: [
      "Older terrace houses often feature slate tiles, original corrugated iron or cement sheets that can crack, slip or deteriorate over decades of exposure. Shared walls and limited roof access make repairs more complex than typical suburban work.",
      "We regularly see blocked valleys, rusted box gutters, cracked pointing between terrace rows and leaks caused by deteriorating flashing. Heavy rain can overwhelm undersized guttering systems, causing overflow and internal water damage.",
      "Our team provides thorough inspections, heritage-appropriate repairs, modern waterproofing upgrades and complete gutter overhauls. We work cleanly in tight spaces and respect the character of older buildings while ensuring they remain watertight.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Alexandria",
    quote:
      "Our terrace had a persistent leak that three previous roofers could not solve. The team found the issue, replaced damaged sections and restored the original slate. No leaks since. Highly professional work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
