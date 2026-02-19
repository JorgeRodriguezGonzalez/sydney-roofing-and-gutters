import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.985; // Connells Point
const AREA_LON = 151.085;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Connells Point",
  slug: "connells-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waterfront Roofing Experts for Connells Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CONNELLS POINT",
    bullets: [
      "Roof repairs built to handle waterfront humidity and salt exposure",
      "Leak detection and gutter protection for riverside homes",
      "Colorbond, tile and metal roof restoration services",
      "Free quotes across Connells Point and the Georges River waterfront",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering Services in Connells Point",
    paragraphs: [
      "Connells Point sits along the Georges River foreshore, where proximity to water means roofs face constant exposure to moisture, salt-laden winds and humid conditions that accelerate weathering.",
      "We service homes across Connells Point with roof repairs, leak detection and gutter maintenance designed to handle the challenges of riverside living — from rusted valleys to blocked stormwater systems.",
      "Our team works with tile, Colorbond and metal roof systems, providing durable repairs and complete restorations that protect your home from the elements year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Connells Point",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Connells Point Homes",
    subheading: "Living near water brings beauty — and extra wear on your roof and guttering system.",
    paragraphs: [
      "Homes close to the Georges River experience higher humidity, salt corrosion and moisture retention, which can lead to rusted flashing, cracked ridge caps, deteriorating valleys and leaking gutters.",
      "If you notice water stains on ceilings, sagging gutters, pooling near downpipes or rust patches spreading across metal roofing, these are signs that salt and moisture have taken their toll.",
      "We specialise in coastal and waterfront roofing challenges — providing targeted repairs, corrosion-resistant materials and preventative maintenance that keeps your roof watertight and protected.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle P.",
    suburb: "Kyle Bay",
    quote:
      "Our roof was showing rust spots and the gutters kept overflowing near the downpipe. They replaced the affected sections and cleaned everything thoroughly — no more leaks or overflow during rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
