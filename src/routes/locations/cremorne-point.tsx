import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.840; // Cremorne Point
const AREA_LON = 151.225;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cremorne Point",
  slug: "cremorne-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Harbour-Side Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CREMORNE POINT",
    bullets: [
      "Coastal roofing solutions for salt air exposure",
      "Heritage roof repairs and tile replacements",
      "Leak detection and gutter maintenance for harbour weather",
      "Prompt service for waterfront properties across Cremorne Point and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Cremorne Point Properties",
    paragraphs: [
      "Cremorne Point sits on a harbour peninsula where salt air, coastal winds and unpredictable storms put extra pressure on roofing materials — particularly tiles, flashings and metal gutters.",
      "From heritage homes along the waterfront to modern apartments, we provide roof repairs, restorations and guttering upgrades tailored to the demands of coastal living in this exclusive Lower North Shore enclave.",
      "Our team works with terracotta and concrete tiles, Colorbond, slate and metal roofing where required — delivering clean workmanship, watertight finishes and clear communication from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for coastal homes in Cremorne Point",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Cremorne Point",
    subheading: "Harbour weather and salt air create unique maintenance challenges for local roofs and guttering systems.",
    paragraphs: [
      "Salt exposure accelerates rust in metal valleys, gutters and downpipes, while coastal winds can dislodge ridge capping and loosen older tiles. Combined with harbour storms, these conditions often lead to leaks and water damage if left unchecked.",
      "If you notice rust spots, sagging gutters, cracked or slipped tiles, damp ceiling patches or overflow during heavy rain, these are signs your roof system needs professional attention.",
      "We provide thorough inspections, targeted repairs and full restoration services designed for the marine environment — keeping your roof watertight and protecting your investment against coastal wear.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Neutral Bay",
    quote:
      "Our heritage terracotta roof had several cracked tiles and rusty valleys. The team replaced everything efficiently and the roof looks fantastic. No leaks after the last storm — highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
