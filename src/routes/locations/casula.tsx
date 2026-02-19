import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.949; // Casula
const AREA_LON = 150.906;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Casula",
  slug: "casula",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Casula Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CASULA",
    bullets: [
      "Complete roof repairs and gutter maintenance",
      "Metal and tile roof restorations for all ages",
      "Leak detection and waterproofing solutions",
      "Storm damage repairs with transparent quoting and fast turnaround",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Homes in Casula",
    paragraphs: [
      "Casula is a well-established suburb with a mix of older fibro and brick homes alongside more recent construction. Roofs here face western Sydney heat in summer, heavy storms and the natural wear that comes with decades of exposure.",
      "We provide targeted roof repairs, full restorations and gutter replacements across all roof types. Whether your home has Colorbond metal, terracotta tiles or older cement sheets, we focus on practical fixes that extend the life of your roof without unnecessary cost.",
      "Our team works throughout the Liverpool area and knows the local conditions — from heat expansion issues to storm-related damage. We provide clear quotes, quality materials and workmanship that stands up to the elements year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter installations in Casula",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Casula",
    subheading: "Older homes and summer heat can lead to cracked tiles, rusted gutters and unexpected leaks.",
    paragraphs: [
      "Many homes in the area are decades old, and roofs that were well-built in the 80s and 90s are now showing signs of fatigue. Cracked or broken tiles, rusted valley irons and sagging gutters are typical problems we see every week.",
      "Summer heat causes metal roofs to expand and contract, which loosens screws and creates gaps where water can enter. Add a heavy downpour and you have ceiling leaks, stained plaster and potential structural damage if left unchecked.",
      "We assess the full roof system — tiles, flashing, valleys, gutters and downpipes — and recommend repairs or restoration based on what will actually solve the problem. No upselling, just honest advice and quality work.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Liverpool",
    quote:
      "Our Colorbond roof had multiple leaks after the last big storm. The team found all the problem areas, replaced damaged sections and resealed everything properly. No issues since and the quote was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
