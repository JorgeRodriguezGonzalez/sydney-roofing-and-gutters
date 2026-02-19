import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.046; // Currans Hill
const AREA_LON = 150.762;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Currans Hill",
  slug: "currans-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Currans Hill Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CURRANS HILL",
    bullets: [
      "Roofing solutions for new estates and modern homes",
      "Metal roof repairs, Colorbond installations and restorations",
      "Leak detection and stormwater management for southwest conditions",
      "Expert guttering services across Currans Hill, Camden and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Currans Hill Homes",
    paragraphs: [
      "Currans Hill is a growing modern suburb in southwest Sydney with newer homes and contemporary roof designs. Even in new builds, issues like flashing gaps, gutter misalignment and storm damage require professional attention to prevent long-term problems.",
      "Our team provides comprehensive roofing and guttering services throughout Currans Hill and the Camden region, including metal roof repairs, Colorbond installations, gutter replacements and thorough leak inspections suited to local weather patterns.",
      "We focus on precision workmanship, long-lasting materials and transparent communication from the initial site visit through to project completion, ensuring your roof remains watertight and ready for southwest Sydney conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing work on modern homes in Currans Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Currans Hill",
    subheading: "New developments and extreme weather mean roofs need careful maintenance and timely repairs.",
    paragraphs: [
      "Southwest Sydney experiences intense summer heat, sudden storms and strong winds that test even newer roofing systems. Metal roofs can expand and contract, seals can fail, and flashing around skylights or chimneys can work loose over time.",
      "Signs like ceiling stains, blocked gutters, sagging fascia boards, cracked ridge capping or water pooling near downpipes indicate problems that need professional assessment before they escalate into costly interior damage.",
      "We deliver targeted repairs, preventative maintenance programs and complete roof restoration services designed for the specific challenges of modern estates in the Camden region, keeping your home protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Narellan",
    quote:
      "They fixed persistent leaks around our skylight and replaced damaged ridge capping quickly. The crew was professional, the quote was fair and the work has held up perfectly through heavy rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
