import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.990; // Blakehurst
const AREA_LON = 151.110;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Blakehurst",
  slug: "blakehurst",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Blakehurst Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BLAKEHURST",
    bullets: [
      "Expert repairs for riverside homes and established properties",
      "Complete roof restoration for tile and metal systems",
      "Professional gutter cleaning and replacement services",
      "Leak detection and weatherproofing for St George region homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Blakehurst Homes",
    paragraphs: [
      "Blakehurst is a well-established riverside suburb with mature homes that often require careful roofing attention. Proximity to the Georges River and coastal weather means roofs face regular exposure to moisture, wind and salt-laden air.",
      "We service the entire Blakehurst area with roof repairs, complete restorations and guttering solutions tailored to local housing stock. Whether you have terracotta tiles, Colorbond roofing or older metal systems, we focus on durable repairs and long-term protection.",
      "Our team understands the demands placed on roofs in the St George region. From leak detection to full re-bedding and re-pointing, we deliver clear quotes, clean workmanship and reliable follow-up service.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work in Blakehurst residential area",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Blakehurst",
    subheading: "Riverside humidity and mature trees can accelerate wear on roofs and gutters throughout the area.",
    paragraphs: [
      "Homes near the Georges River often experience higher moisture levels, which can lead to rust in metal roofing, deteriorating flashings and premature aging of roof valleys. Combined with mature tree coverage, gutters can fill quickly with leaves and debris.",
      "If you notice water stains on ceilings, blocked downpipes after rain, rusted gutter sections or tiles that have shifted or cracked, these are signs your roof system needs professional attention before damage spreads.",
      "We provide thorough inspections, targeted repairs and full restoration options for Blakehurst homes. Our approach focuses on fixing the root cause and ensuring your roof remains watertight through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle K.",
    suburb: "Hurstville",
    quote:
      "Our tile roof was leaking in two spots and the gutters were completely blocked. The team arrived on time, fixed everything properly and left the site clean. Very happy with the service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
