import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.731; // Quakers Hill
const AREA_LON = 150.881;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Quakers Hill",
  slug: "quakers-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Quakers Hill Roofing and Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "QUAKERS HILL",
    bullets: [
      "Full roof repairs and restoration for established homes",
      "Leak detection and targeted fixes for tile and Colorbond roofs",
      "Gutter cleaning and upgrades to handle storm runoff",
      "Licensed work across Quakers Hill, Schofields and Stanhope Gardens neighbourhoods",
    ],
  },

  introBlock: {
    heading: "Reliable Roof and Gutter Work in Quakers Hill",
    paragraphs: [
      "Quakers Hill combines established family homes with newer estates, meaning roofs range from original tile systems to modern Colorbond installations. Both types need regular attention to stay watertight through our storm season.",
      "We service the entire area with roof repairs, complete roof restorations, gutter replacements and leak repairs. Our work is designed for local weather patterns including summer storms, dry heat and heavy downpours that test your roof system.",
      "Whether you need a quick leak fix or a full roof overhaul, we focus on quality materials, clean workmanship and transparent pricing from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Quakers Hill suburb",
  },

  problemsBlock: {
    heading: "Common Roofing and Guttering Issues We Solve in Quakers Hill",
    subheading: "Established roofs and growing trees create maintenance challenges that worsen with each storm if left unattended.",
    paragraphs: [
      "Many homes in Quakers Hill have original roof systems that are now thirty or forty years old. Cracked tiles, rusted valleys and worn ridge capping let water in during heavy rain, leading to ceiling stains, rotting timber and expensive internal repairs.",
      "Gutters fill with leaves and debris, especially near established gardens and tree-lined streets. When downpipes block or gutters sag, overflow runs straight into your walls and fascia boards, causing water damage that could have been prevented.",
      "We deliver targeted roof repairs, full restorations with membrane upgrades, gutter cleaning, sectional replacements and downpipe improvements. Everything is designed to keep your home dry and your roof system performing reliably for years ahead.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca P.",
    suburb: "Stanhope Gardens",
    quote:
      "Our old tile roof was leaking in two rooms after every storm. They replaced broken tiles, resealed the valleys and upgraded our ridge caps. The work was fast, tidy and has held up perfectly through a wet winter.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
