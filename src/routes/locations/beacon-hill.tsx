import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.750; // Beacon Hill
const AREA_LON = 151.261;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Beacon Hill",
  slug: "beacon-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Northern Beaches Roofing Specialists in Beacon Hill",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEACON HILL",
    bullets: [
      "Protection from coastal winds and salt air damage",
      "Tile repairs, metal roofing and leak detection",
      "Gutter replacements for Northern Beaches storms",
      "Local crew serving Beacon Hill, Narrabeen and surrounding beaches",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Beacon Hill Properties",
    paragraphs: [
      "Beacon Hill sits on elevated ground near the Northern Beaches, where roofs face constant exposure to ocean breezes, salt spray and coastal weather patterns that accelerate corrosion on metal roofing and gutters.",
      "Whether you need tile replacement, Colorbond roof repairs or gutter upgrades, we work with homes across Beacon Hill that require durable solutions built for coastal conditions.",
      "Our approach combines thorough inspections, quality materials suited to salt-air environments and a focus on long-term weather resistance — so your roof protects your family year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing work on a Beacon Hill residence",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Beacon Hill",
    subheading: "Coastal proximity brings unique roofing issues that require experienced solutions and corrosion-resistant materials.",
    paragraphs: [
      "Salt air accelerates rust on older gutters and metal flashings. Combined with wind-driven rain and debris from surrounding bushland, small vulnerabilities can become expensive leaks within months.",
      "We regularly address rusted gutter sections, cracked or lifted roof tiles, corroded valley irons, blocked downpipes and ventilation issues caused by moisture build-up.",
      "Our team provides targeted repairs, full roof restorations and preventative maintenance schedules designed for the unique demands of Northern Beaches properties.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura K.",
    suburb: "Narrabeen",
    quote:
      "They replaced our rusted gutters and fixed several cracked tiles after the last big storm. Very thorough inspection and fair pricing for the Northern Beaches area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
