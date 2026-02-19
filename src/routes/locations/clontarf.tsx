import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.807; // Clontarf
const AREA_LON = 151.249;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Clontarf",
  slug: "clontarf",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Clontarf Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLONTARF",
    bullets: [
      "Expert roofing solutions for beachside and waterfront properties",
      "Colorbond and tile roof repairs designed for coastal exposure",
      "Salt-resistant guttering systems and corrosion prevention treatments",
      "Prompt service across Clontarf, Balgowlah and the Northern Beaches peninsula",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Clontarf Properties",
    paragraphs: [
      "Clontarf sits on the peaceful shores of Manly Lagoon, where beachside character meets quiet residential living. The combination of salt air, ocean winds and mature tree coverage means roofs and gutters need regular attention to stay watertight and structurally sound.",
      "We work with Colorbond, terracotta tile, concrete tile and metal roofing systems common to the area. Whether your home is an older cottage or a modern renovation, our team handles everything from minor leak repairs to complete roof restorations with a focus on coastal durability.",
      "From inspection to completion, we deliver clear quotes, efficient workmanship and long-lasting results that protect your home from the unique demands of waterfront living on the Northern Beaches.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repairs for coastal homes in Clontarf",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Clontarf Homes",
    subheading: "Coastal exposure and lagoon-side weather create specific challenges for roofing systems in this quiet suburb.",
    paragraphs: [
      "Salt air accelerates corrosion on metal roofing, fasteners and guttering. Even small rust spots can spread quickly, leading to leaks, staining and structural weakness if left unchecked. Regular inspections and protective coatings help extend the life of your roof.",
      "Overhanging trees deposit leaves, seed pods and organic debris into valleys and gutters. When combined with coastal moisture, this creates blockages, overflow during storms and damp conditions that encourage moss and lichen growth on tiles.",
      "We offer targeted leak detection, rust treatment, tile replacement, valley re-pointing and complete gutter upgrades. Our approach combines practical repairs with preventative measures to keep your roof system ready for whatever the ocean throws at it.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Balgowlah",
    quote:
      "Our metal roof was showing rust along the ridge after years of salt exposure. They treated it, replaced damaged sections and applied protective coating. The roof looks great and the job was finished ahead of schedule.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
