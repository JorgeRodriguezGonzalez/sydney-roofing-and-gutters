import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.877; // Double Bay
const AREA_LON = 151.247;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Double Bay",
  slug: "double-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Premium Roofing Services for Double Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DOUBLE BAY",
    bullets: [
      "Specialist coastal roofing for salt air and ocean exposure",
      "Metal roof repairs, tile replacements and heritage restorations",
      "Gutter cleaning and replacement for harbourside conditions",
      "Fast response for leaks, storm damage and preventative maintenance across Double Bay",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering Solutions for Double Bay",
    paragraphs: [
      "Double Bay homes face unique challenges from coastal weather, salt air and ocean winds. High-value properties demand roof systems that protect against corrosion, leaks and weather-driven deterioration while maintaining their premium appearance.",
      "We work across residential apartments, heritage terraces and modern harbour-view homes, providing metal roof repairs, tile restoration, gutter replacement and full roof inspections. Every project is tailored to the specific demands of this exclusive harbourside suburb.",
      "Our team understands that Double Bay properties require minimal disruption, clean workmanship and solutions that last. From leak detection to complete roof replacement, we deliver results that protect your investment and maintain your property standards.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing and gutter services in Double Bay",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in Double Bay and How We Fix Them",
    subheading: "Coastal conditions accelerate wear on roofs and gutters, leading to rust, leaks and structural issues.",
    paragraphs: [
      "Salt air corrodes metal roofing, flashing and gutters faster than inland areas. Colorbond roofs can develop surface rust, tiles can crack from wind stress, and valleys often fail when drainage systems are overwhelmed by heavy rain or debris.",
      "Harbour-facing properties also experience increased wind exposure, which can lift tiles, damage ridgecaps and cause concealed leaks. If you notice damp ceilings, rusted gutter sections or water stains after storms, early intervention prevents expensive damage.",
      "We provide targeted repairs, full roof restorations and gutter upgrades designed for coastal environments. Our work includes rust treatment, flashing renewal, valley repairs and complete drainage system checks to ensure long-term protection.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Rose Bay",
    quote:
      "Our Colorbond roof had rust spots and a persistent leak near the valley. The team fixed it properly, treated the corrosion and left everything spotless. Excellent service for coastal properties.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
