import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.799; // Denistone East
const AREA_LON = 151.100;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Denistone East",
  slug: "denistone-east",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roof & Gutter Services in Denistone East",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DENISTONE EAST",
    bullets: [
      "Professional roof repairs and tile replacements for established homes",
      "Comprehensive gutter cleaning and downpipe maintenance services",
      "Expert leak detection and targeted roof restoration solutions",
      "Trusted local roofing contractor serving Denistone East and nearby suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering Specialists for Denistone East Homes",
    paragraphs: [
      "Denistone East features a mix of mid-century brick homes and modern renovations, many with terracotta tile and Colorbond roofs that require regular maintenance to stay weatherproof through Sydney storms and seasonal downpours.",
      "We provide targeted roof repairs, full restorations, gutter cleaning and leak detection services throughout Denistone East and surrounding areas including West Ryde, Eastwood and Epping.",
      "Our team works with all roof types including tile, metal and slate, delivering quality workmanship, honest assessments and long-term solutions that protect your home from water damage and structural issues.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering work in Denistone East",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Denistone East",
    subheading: "Established homes in Denistone East often face age-related roof and gutter issues that require expert attention.",
    paragraphs: [
      "Older terracotta and concrete tiles can crack or slip over time, especially after storms or high winds. Blocked valleys and rusted gutter sections create overflow problems that lead to fascia damage and interior leaks.",
      "If you have noticed damp ceiling patches, water stains after rain, sagging gutters or broken tiles, these are signs your roof system needs professional inspection and targeted repairs.",
      "We deliver thorough assessments, clear quotes and quality repairs that address the root cause, whether that means replacing damaged tiles, resealing valleys or upgrading old gutter systems to handle heavy rain events.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle K.",
    suburb: "West Ryde",
    quote:
      "They repaired several cracked tiles and cleared years of debris from the gutters. The quote was fair, the work was fast and professional, and we have had no leaks since. Highly recommend for local roof work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
