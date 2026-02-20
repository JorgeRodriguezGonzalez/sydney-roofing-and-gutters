import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.919; // Sadleir
const AREA_LON = 150.893;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Sadleir",
  slug: "sadleir",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Sadleir Roof Repairs & Maintenance",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SADLEIR",
    bullets: [
      "Roof repairs for fibro and tile homes",
      "Leak detection and rust repairs for aging roofs",
      "Gutter replacement and downpipe upgrades",
      "Reliable service across Sadleir and surrounding Liverpool areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Sadleir Homes",
    paragraphs: [
      "Sadleir is an established suburb with many older homes that need ongoing roof maintenance. Fibro roofs, aging tiles and older guttering systems can develop leaks, rust and weathering over time — especially after wet winters or summer storms.",
      "We provide professional roof repairs, re-roofing, gutter replacement and leak detection across Sadleir and the wider Liverpool region. Our work covers fibro cement, tile, Colorbond and metal roofing systems — with honest advice and no pressure to over-commit.",
      "Our team focuses on affordable, long-lasting repairs and clear quotes. Whether you need a small leak fixed or a full roof restoration, we arrive on time and complete the job properly.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair work on homes in Sadleir",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Sadleir",
    subheading: "Older homes in Sadleir often face issues with rust, broken tiles and blocked gutters that lead to water damage.",
    paragraphs: [
      "Many homes in Sadleir were built decades ago, and original roofing materials are starting to show their age. Rusted metal gutters, cracked fibro sheets and broken terracotta tiles can all allow water into your home during heavy rain.",
      "If you notice damp ceiling patches, rusty gutter sections, sagging roof sections or frequent blockages, those are early warning signs that should not be ignored.",
      "We offer practical solutions for aging roofs — from targeted repairs and sheet replacements to full re-roofing and modern gutter installations. Our team works quickly, keeps the site clean and ensures the work stands the test of time.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Tony W.",
    suburb: "Green Valley",
    quote:
      "My fibro roof was leaking badly after winter storms. They replaced the damaged sheets and resealed the whole roof. No more water stains inside — excellent job and fair price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
