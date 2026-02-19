import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.871; // Dover Heights
const AREA_LON = 151.278;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dover Heights",
  slug: "dover-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DOVER HEIGHTS",
    bullets: [
      "Protection against salt air and coastal winds",
      "Roof repairs, restorations and leak detection",
      "Guttering upgrades for ocean-facing properties",
      "Fast quotes for Dover Heights and surrounding Eastern Suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Services in Dover Heights",
    paragraphs: [
      "Dover Heights sits on the cliffs overlooking the Pacific Ocean, where ocean winds, salt spray and coastal weather constantly test every roof system. Properties here need roofing built to last in these demanding conditions.",
      "We provide roof repairs, restorations and gutter replacements specifically designed for coastal exposure. Our team understands how salt air corrodes metal, how wind drives water into small gaps, and how to protect your home properly.",
      "Whether you have Colorbond, metal sheeting, or tile roofing, we deliver clean workmanship, long-lasting fixes and clear communication from inspection through to completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering in Dover Heights",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Dover Heights",
    subheading: "Coastal properties face unique challenges from salt corrosion, wind-driven rain and constant ocean exposure.",
    paragraphs: [
      "Salt air accelerates rust and corrosion on metal roofs, flashing and gutters. Ocean winds drive rain under tiles and into gaps that would normally stay dry. Without proper coastal-rated materials and maintenance, leaks become inevitable.",
      "If you are seeing rust stains, corroded gutters, water pooling during storms, lifted tiles or damp ceilings, your roof system needs attention before the damage spreads.",
      "We provide thorough inspections, targeted repairs and full restoration options using materials designed for coastal conditions — so your roof stays watertight year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer R.",
    suburb: "Rose Bay",
    quote:
      "Our roof was suffering from years of salt exposure and coastal winds. The team replaced corroded sections, upgraded the flashing and sealed everything properly. No more leaks and the workmanship was excellent.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
