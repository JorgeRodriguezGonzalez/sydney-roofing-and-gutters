import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.847; // Cabarita
const AREA_LON = 151.137;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cabarita",
  slug: "cabarita",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cabarita Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CABARITA",
    bullets: [
      "Complete roof repairs and restoration services",
      "Gutter cleaning and replacement for waterfront conditions",
      "Leak detection and weatherproofing for coastal exposure",
      "Tile, metal and Colorbond roofing for homes near Iron Cove and Parramatta River",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering Solutions for Cabarita Homes",
    paragraphs: [
      "Cabarita sits along the foreshores of Iron Cove and Parramatta River, where waterfront exposure and moisture-laden winds create unique roofing challenges for local properties.",
      "We work across all roof types common in Cabarita — terracotta tile, metal, slate and Colorbond — providing repairs, restorations, leak detection and complete gutter system maintenance tailored to conditions near the water.",
      "Our team delivers clean, reliable workmanship backed by clear communication, fair pricing and a focus on long-term protection for roofs exposed to salt air, storms and coastal weather patterns throughout the year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering in Cabarita",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Cabarita",
    subheading: "Proximity to water means roofs face accelerated wear from moisture, salt exposure and variable weather conditions.",
    paragraphs: [
      "Homes near Iron Cove and the river often experience rust on metal flashings, early degradation of guttering, and moisture penetration through older tile systems exposed to humid conditions and salt-laden winds.",
      "Blocked gutters from leaf litter, corroded downpipes and cracked ridge capping allow water to pool and seep into roof cavities, leading to ceiling stains, structural damage and mould growth over time.",
      "We provide targeted inspections, preventative gutter maintenance, rust remediation, leak sealing and full roof restoration options to keep homes weatherproof and protected from ongoing coastal exposure.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Drummoyne",
    quote:
      "Our roof was showing rust and leaks after years near the water. The team replaced sections, sealed everything properly and cleaned all the gutters. No more drips, highly recommend them.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
