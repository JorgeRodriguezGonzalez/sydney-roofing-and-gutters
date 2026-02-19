import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.831; // Cremorne
const AREA_LON = 151.228;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cremorne",
  slug: "cremorne",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cremorne Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CREMORNE",
    bullets: [
      "Harbour-side roof protection from salt air corrosion",
      "Leak repairs for tile and Colorbond roofs",
      "Gutter cleaning and coastal-grade replacements",
      "Fast quotes and inspections across Cremorne and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Services in Cremorne",
    paragraphs: [
      "Cremorne sits close to the harbour with a mix of heritage homes and modern apartments. Salt air, coastal winds and seasonal storms demand roofing systems that are both durable and regularly maintained.",
      "We service tile roofs, metal roofs and Colorbond installations throughout Cremorne, with a focus on leak detection, gutter maintenance and corrosion prevention. Whether you need a targeted repair or a full roof restoration, we deliver clean results that last.",
      "From older terrace-style homes to contemporary builds, our team understands the challenges of Lower North Shore properties and provides practical solutions with clear pricing and reliable timelines.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter work in Cremorne",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Cremorne",
    subheading: "Salt air and harbour exposure can accelerate rust, corrosion and gutter blockage in coastal suburbs.",
    paragraphs: [
      "Metal roofs and gutter systems near the water are prone to salt corrosion, rust staining and premature wear. Even minor leaks can quickly escalate into ceiling damage or structural issues if left untreated.",
      "We also see blocked valleys and downpipes from leaf debris, cracked or slipped tiles from wind gusts, and gutter sections that sag under load. These problems are common but entirely preventable with the right maintenance and upgrades.",
      "Our inspections identify weak points early, and our repairs use coastal-grade materials designed for harbour-side conditions. Whether it is a single leak or a full gutter replacement, we ensure the job is done properly the first time.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca W.",
    suburb: "Neutral Bay",
    quote:
      "They replaced our rusted gutters and fixed a persistent leak near the chimney. The team was efficient and left everything clean. Highly recommend for anyone in the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
