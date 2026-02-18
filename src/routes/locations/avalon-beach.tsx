import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.628; // Avalon Beach
const AREA_LON = 151.328;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Avalon Beach",
  slug: "avalon-beach",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Experts in Avalon Beach",
    titleTop: "ROOFING SERVICES",
    titleBottom: "AVALON BEACH",
    bullets: [
      "Roofing built to withstand salt air and coastal winds",
      "Colorbond, tile and metal roof repairs and restorations",
      "Guttering designed for heavy downpours and debris",
      "Fast service across Avalon Beach and the Northern Beaches region",
    ],
  },

  introBlock: {
    heading: "Expert Roofing for Beachside Homes in Avalon Beach",
    paragraphs: [
      "Avalon Beach is known for its relaxed beachside lifestyle, but the coastal environment places unique demands on roofs. Salt air, strong ocean winds and unpredictable weather patterns require roofing systems that are corrosion-resistant and built to last.",
      "We deliver roof repairs, roof restorations and guttering solutions tailored to homes near the ocean. Whether you have an older beach cottage or a modern coastal home, we work with Colorbond, tile and metal roofing materials that suit the local climate.",
      "From leak detection to full roof overhauls, our team delivers thorough inspections, clear quotes and quality workmanship designed to protect your home from the elements year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in Avalon Beach homes",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Avalon Beach",
    subheading: "Salt spray and coastal winds can accelerate rust, corrosion and water damage on roofs and gutters.",
    paragraphs: [
      "Living near the ocean means your roof is constantly exposed to salt-laden air, which corrodes metal flashings, fasteners and gutters over time. Even high-quality materials need regular maintenance to avoid premature failure.",
      "Common issues include rusted gutters, lifting or cracked tiles, blocked downpipes from windblown debris, and leaks around valleys and ridges. Left unchecked, these small problems lead to ceiling stains, timber rot and costly interior damage.",
      "We provide targeted repairs, rust treatment, gutter replacement and preventative maintenance programs designed specifically for coastal properties. Our goal is to keep your roof watertight and ready for the next storm season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Newport",
    quote:
      "They replaced our rusted gutters and fixed several tiles damaged by wind. The team was professional, quick and left the site spotless. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
