import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.743; // Emerton
const AREA_LON = 150.808;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Emerton",
  slug: "emerton",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Emerton Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EMERTON",
    bullets: [
      "Built for Western Sydney heat and summer storms",
      "Roof repairs, tile replacements and Colorbond installations",
      "Gutter cleaning and downpipe upgrades for heavy rain",
      "Honest quotes with no surprises — serving Emerton and Mount Druitt families",
    ],
  },

  introBlock: {
    heading: "Professional Roof & Gutter Services for Emerton Homes",
    paragraphs: [
      "Emerton experiences the full intensity of Western Sydney weather, with summer temperatures climbing past 40 degrees and sudden afternoon storms dumping heavy rain. Roofs and gutters in this climate need regular attention to avoid heat damage, cracked tiles and blocked downpipes.",
      "We work with tile, Colorbond and metal roofing systems common across the area, providing repairs, replacements and full roof restoration when required. Every job includes a thorough inspection to identify problems before they escalate.",
      "From fixing storm damage to upgrading worn gutters and clearing debris, our team delivers reliable workmanship at fair rates. We understand the local conditions and build solutions that last through heat, rain and everything in between.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repairs in Emerton Western Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing & Guttering Issues We Fix in Emerton",
    subheading: "Extreme heat and seasonal storms create unique challenges for roofs in Western Sydney suburbs like Emerton.",
    paragraphs: [
      "Prolonged exposure to 40-degree heat can cause tiles to crack, metal roofing to expand, and older ridge capping to deteriorate. When the storms arrive, weakened roofs and blocked gutters become major problems fast, leading to leaks, ceiling damage and structural concerns.",
      "If you notice rust spreading on your roof, sagging gutter sections, water pooling around your home, or tiles shifting out of position, those are clear signs of maintenance that cannot wait. Ignoring small issues in this climate turns them into expensive repairs.",
      "We handle everything from targeted leak repairs and gutter cleaning to complete roof restorations and Colorbond replacements. Our focus is fixing problems properly the first time, so your home stays protected no matter what the weather brings.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "David T.",
    suburb: "Mount Druitt",
    quote:
      "Had a leak after the last big storm and they came out within two days. Fixed the cracked tiles, cleared the gutters and checked everything else. Fair price, clean work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
