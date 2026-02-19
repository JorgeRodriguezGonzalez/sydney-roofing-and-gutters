import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.926; // Clemton Park
const AREA_LON = 151.101;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Clemton Park",
  slug: "clemton-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Clemton Park Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLEMTON PARK",
    bullets: [
      "Complete roofing solutions for established homes",
      "Metal and tile roof repairs, replacements and restorations",
      "Gutter cleaning, repairs and downpipe upgrades",
      "Free inspections and transparent quotes across the inner west area",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Clemton Park Homes",
    paragraphs: [
      "Clemton Park features a mix of established residential properties with varying roof designs, from traditional tile to metal sheeting. Older roofs require regular maintenance to prevent leaks, rust and gutter overflow during Sydney storms.",
      "Our team provides comprehensive roofing services across Clemton Park and neighbouring suburbs like Earlwood and Campsie. We handle everything from emergency leak repairs to full roof restorations, working with tile, Colorbond and metal roofing systems.",
      "We focus on delivering quality workmanship with clear communication throughout the process. Every job includes a thorough inspection, honest assessment and reliable solutions that protect your home for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering services in Clemton Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Clemton Park",
    subheading: "Established homes in the inner west face unique roofing challenges that need professional attention.",
    paragraphs: [
      "Ageing tile roofs often develop cracked or slipped tiles that allow water penetration. Metal roofs can suffer from rust spots, loose fasteners and deteriorating valley flashings. Both types need regular inspection to catch problems early.",
      "Blocked gutters are a major concern in this area. Leaves and debris accumulate quickly, leading to overflow that damages fascia boards, soffits and even internal ceilings. Storm water can pool around foundations if downpipes are inadequate or incorrectly positioned.",
      "We provide targeted repairs for leaks, rust treatment, tile replacements, gutter cleaning and complete restoration packages. Our goal is to extend the life of your existing roof while ensuring it performs reliably through every weather event.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Maria T.",
    suburb: "Earlwood",
    quote:
      "Our terracotta tiles were cracked in several spots and we had water stains appearing inside. The team replaced the damaged tiles and repointed the ridge capping. No leaks since and the work was completed quickly.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
