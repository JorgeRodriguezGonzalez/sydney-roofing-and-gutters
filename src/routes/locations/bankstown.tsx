import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.918; // Bankstown
const AREA_LON = 151.035;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bankstown",
  slug: "bankstown",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bankstown Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BANKSTOWN",
    bullets: [
      "Expert repairs for older tile and metal roofs",
      "Full roof restorations and Colorbond upgrades",
      "Gutter replacements to handle summer storms",
      "Fast service for homes and commercial buildings across Bankstown",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Bankstown Homes and Businesses",
    paragraphs: [
      "Bankstown has a mix of established residential streets and busy commercial areas, with many roofs that have weathered decades of Western Sydney heat, storms and wear. Small cracks or loose tiles can quickly escalate if left unchecked.",
      "We provide roof repairs, complete restorations and guttering work across Bankstown, covering concrete tiles, terracotta, Colorbond and metal sheeting. Every project includes a detailed inspection and upfront pricing before work begins.",
      "Whether you need urgent leak repairs, a full roof restoration or gutter upgrades to improve water flow, our team delivers reliable results that protect your property year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and restoration work in Bankstown",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Bankstown",
    subheading: "Older roofs in Western Sydney often show signs of heat damage, cracked tiles and blocked gutters.",
    paragraphs: [
      "Extreme summer heat causes roof materials to expand and contract, leading to cracked tiles, lifted ridges and weakened seals. Combine that with intense storms and you get leaks, water pooling and interior damage.",
      "Blocked or rusted gutters overflow during heavy rain, damaging fascias, eaves and even foundations. If your gutters sag or your downpipes fail to drain properly, the problem will only get worse.",
      "Our team inspects the entire roof system, identifies weak points and provides targeted repairs or full restoration options. We focus on long-term protection, not quick patches that fail after the next storm.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "David R.",
    suburb: "Yagoona",
    quote:
      "After years of patching leaks, we finally called for a proper inspection. They found multiple issues and completed a full restoration in under a week. The roof looks brand new.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
