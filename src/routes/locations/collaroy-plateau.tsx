import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.731; // Collaroy Plateau
const AREA_LON = 151.290;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Collaroy Plateau",
  slug: "collaroy-plateau",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Experts Near the Beach",
    titleTop: "ROOFING SERVICES",
    titleBottom: "COLLAROY PLATEAU",
    bullets: [
      "Roofing solutions designed for coastal weather conditions",
      "Tile repairs, metal roofing and leak detection",
      "Gutter replacements engineered for salt air exposure",
      "Prompt quotes and repairs across Collaroy Plateau and surrounding Northern Beaches suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering in Collaroy Plateau",
    paragraphs: [
      "Collaroy Plateau sits just above the coast, which means roofs here face constant exposure to ocean winds, salt-laden air and intense summer sun. Over time, these elements accelerate corrosion and wear on gutters, flashings and metal roofing.",
      "We service homes across the plateau with targeted roof repairs, complete restorations and new installations in Colorbond, tile and metal systems designed to handle the harsh coastal climate.",
      "From initial inspection through to completion, we focus on long-lasting materials, thorough workmanship and clear communication to ensure your roof remains watertight and structurally sound year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing repairs and gutter work near Collaroy Plateau",
  },

  problemsBlock: {
    heading: "Coastal Roofing Challenges Common to Collaroy Plateau Homes",
    subheading: "Salt air and ocean winds create unique roofing problems that require specialised attention and durable materials.",
    paragraphs: [
      "Coastal homes frequently experience accelerated rust in gutters, corroded flashings and deteriorating roof fasteners due to salt spray carried inland by sea breezes. Left unchecked, these issues lead to leaks and structural damage.",
      "You might notice rust stains on Colorbond roofing, lifted tiles after strong winds, blocked valleys filled with sand and debris, or water pooling near eaves after heavy rain.",
      "We provide comprehensive inspections, preventative maintenance programs and targeted repairs using marine-grade materials and corrosion-resistant coatings to extend the life of your coastal roof system.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Dee Why",
    quote:
      "After years of salt damage we needed a full gutter replacement and some flashing work. The crew arrived on time, finished quickly and the new system handles storms perfectly. Very happy with the outcome.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
