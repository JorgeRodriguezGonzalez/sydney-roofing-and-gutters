import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.751; // Beecroft
const AREA_LON = 151.066;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Beecroft",
  slug: "beecroft",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Beecroft Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEECROFT",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Complete roof restoration and leak detection services",
      "Gutter cleaning and downpipe upgrades for heavy rainfall",
      "Fast local response for all roofing emergencies across Beecroft",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Beecroft Homes",
    paragraphs: [
      "Beecroft features established homes on generous blocks, often with mature trees and traditional tile or metal roofs that require regular maintenance to stay watertight through every season.",
      "Our team provides comprehensive roof repairs, restoration work and guttering solutions designed for local conditions including heavy rain, falling leaves and the natural wear that comes with older roof systems.",
      "We work with terracotta tiles, concrete tiles and Colorbond metal roofs, delivering careful workmanship and honest advice from the initial inspection through to final completion and cleanup.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration in Beecroft",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in Beecroft",
    subheading: "Established homes and mature gardens create unique challenges for roof and gutter systems.",
    paragraphs: [
      "Large trees surrounding Beecroft homes drop leaves, branches and debris that accumulate in gutters and valleys, causing blockages, water overflow and potential roof leaks during heavy downpours.",
      "Older tile roofs may develop cracked or broken tiles, worn bedding and pointing, or rusted valley irons that allow water penetration. Colorbond roofs can suffer from fastener corrosion or damaged flashing around chimneys and penetrations.",
      "We provide thorough inspections, targeted repairs and full restoration services including repointing, repainting and gutter replacement to ensure your roof system performs reliably for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer P.",
    suburb: "Pennant Hills",
    quote:
      "Our old tile roof was leaking during storms. The team repointed the ridge caps, replaced damaged tiles and cleared years of debris from the gutters. No leaks since and the roof looks fantastic.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
