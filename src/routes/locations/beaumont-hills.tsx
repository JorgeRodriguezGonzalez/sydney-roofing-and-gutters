import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.702; // Beaumont Hills
const AREA_LON = 150.946;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Beaumont Hills",
  slug: "beaumont-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Experts for Beaumont Hills Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEAUMONT HILLS",
    bullets: [
      "Expert roofing services for newer estate homes",
      "Tile, Colorbond and metal roof repairs and installations",
      "Gutter cleaning and replacement for heavy rain protection",
      "Professional inspections and maintenance for growing families in the Northwest",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Beaumont Hills Properties",
    paragraphs: [
      "Beaumont Hills is a thriving residential area with modern homes, young families and quality construction. Even newer roofs benefit from regular inspections to catch minor wear before it becomes a costly repair.",
      "We provide comprehensive roofing and guttering services across Beaumont Hills, from tile and metal roof repairs to full gutter replacements and storm damage assessments that protect your investment.",
      "Our team understands the local climate, building standards and the importance of keeping your home watertight through every season — whether you need a quick fix or a complete roof restoration.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing team working on Beaumont Hills residence",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Beaumont Hills",
    subheading: "New estates face unique challenges, from builder warranty gaps to unexpected storm damage.",
    paragraphs: [
      "Even well-built homes can develop roof problems over time. Cracked ridge caps, loose tiles, gutter overflow and early signs of wear around valleys and flashing are issues we see regularly in the Northwest.",
      "Heavy rain and strong winds can expose weaknesses in gutter systems, leading to pooling water, staining and potential leaks into ceilings and walls if left unaddressed.",
      "We offer fast inspections, transparent quotes and quality repairs using Australian-made materials. Whether your roof needs a minor fix or a full restoration, we keep your Beaumont Hills home protected and looking its best.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Kellyville",
    quote:
      "After a big storm we noticed water pooling near the garage. The team came out quickly, identified the blocked valley and repaired the gutter run. Professional service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
