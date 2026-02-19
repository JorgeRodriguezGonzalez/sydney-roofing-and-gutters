import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.048; // Gymea Bay
const AREA_LON = 151.090;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Gymea Bay",
  slug: "gymea-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Services for Gymea Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GYMEA BAY",
    bullets: [
      "Salt-resistant roofing solutions for waterfront properties",
      "Expert leak detection and tile replacement services",
      "Colorbond and metal roofing designed for coastal conditions",
      "Guttering repairs and maintenance to handle heavy rainfall near Port Hacking",
    ],
  },

  introBlock: {
    heading: "Professional Roof Repairs and Maintenance in Gymea Bay",
    paragraphs: [
      "Gymea Bay sits along Port Hacking with a mix of established homes and modern waterfront properties. The coastal environment means your roof faces constant exposure to salt air, strong winds and ocean moisture that can accelerate wear on tiles, flashings and guttering systems.",
      "We provide targeted roofing services for Gymea Bay properties, including tile repairs, Colorbond installations, leak detection and gutter maintenance. Our team understands how coastal conditions impact different roof materials and can recommend solutions that extend the life of your roof while protecting your home from water damage.",
      "Whether you need emergency leak repairs, a complete roof restoration or routine maintenance, we deliver clean workmanship and honest advice tailored to the unique challenges of living near the water in the Sutherland Shire.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof restoration and repairs in Gymea Bay",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Gymea Bay Homes",
    subheading: "Coastal exposure means your roof works harder — salt air, wind and moisture can cause problems that inland homes never face.",
    paragraphs: [
      "Salt air corrodes metal flashings, rusts gutters and weakens sealants around valleys and penetrations. Wind-driven rain can push water under tiles and into roof cavities, while constant moisture exposure speeds up the deterioration of mortar bedding and ridge caps.",
      "If you notice rust spots on Colorbond, cracked or slipped tiles, damp ceilings after storms, or gutters that overflow despite being clear, these are signs your roof needs professional attention before minor issues become expensive structural repairs.",
      "We provide thorough inspections to identify vulnerable areas, then deliver targeted repairs or full restoration work using materials designed to withstand the coastal environment. Our goal is to keep your home watertight and your roof performing well for decades.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Gymea",
    quote:
      "Living near the water means constant salt exposure. They replaced all our rusted valley irons and resealed the ridge capping. The difference after storms is incredible — no more leaks or stress.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
