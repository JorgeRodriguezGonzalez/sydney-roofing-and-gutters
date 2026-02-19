import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.593; // Cowan
const AREA_LON = 151.170;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cowan",
  slug: "cowan",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cowan Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "COWAN",
    bullets: [
      "Roofing solutions for bushland and national park properties",
      "Full roof repairs, leak detection and tile replacements",
      "Gutter cleaning for high leaf-load environments",
      "Fast local service covering Cowan, Berowra and Brooklyn areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Cowan and Surrounding Areas",
    paragraphs: [
      "Cowan sits at the edge of Ku-ring-gai Chase National Park, surrounded by native bushland and steep, tree-covered terrain. Properties here face constant leaf fall, debris build-up and the risk of fire ember damage during bushfire season.",
      "We provide roof repairs, gutter cleaning, roof restorations and leak detection for homes in this unique environment. Our team works with Colorbond, terracotta tiles and metal roofs designed to handle heavy debris and weather exposure.",
      "From routine maintenance to storm damage repairs, we deliver clean workmanship and reliable service that keeps your roof system performing in one of the most naturally beautiful parts of northern Sydney.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering work in Cowan bushland properties",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Challenges in Cowan",
    subheading: "National park surroundings mean more leaves, bark and branches landing on your roof every single day.",
    paragraphs: [
      "In bushland environments like Cowan, gutters can fill with leaf litter within weeks, especially after storms or high winds. Blocked downpipes and valleys lead to water overflow, damp ceilings and rust damage if left unaddressed.",
      "Fallen branches can crack tiles, damage flashing or compromise roof valleys. Ember protection and fire safety are also critical concerns for properties surrounded by native forest.",
      "We provide thorough inspections, gutter clearing, roof repairs and ember guard installations. Our goal is to keep your roof watertight and bushfire-ready all year round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Berowra",
    quote:
      "Living next to the national park means constant leaf build-up. They cleared the gutters, fixed two cracked tiles and installed ember guards. Very thorough work and great communication throughout the entire job.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
