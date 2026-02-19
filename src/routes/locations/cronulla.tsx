import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.054; // Cronulla
const AREA_LON = 151.152;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cronulla",
  slug: "cronulla",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists in Cronulla",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CRONULLA",
    bullets: [
      "Expert repairs for coastal weather and salt air exposure",
      "Colorbond and metal roofing built to withstand ocean winds",
      "Gutter cleaning and replacement for beach environments",
      "Fast response for leaks, rust damage and coastal corrosion throughout Cronulla",
    ],
  },

  introBlock: {
    heading: "Roofing and Guttering Services Built for Cronulla",
    paragraphs: [
      "Cronulla sits right on the coast, which means roofs face constant exposure to salt air, ocean winds and intense sun. These conditions accelerate rust, corrosion and weathering — especially on older metal roofs and gutter systems.",
      "From beachside homes near Cronulla Beach to properties along Gunnamatta Bay, we provide roof repairs, rust treatment, gutter replacements and full restorations designed specifically for coastal conditions.",
      "Our team works with Colorbond, Zincalume and coastal-grade materials that resist salt damage. Every job is completed with proper ventilation, rust inhibitors and long-term weather protection in mind.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing and gutter repairs in Cronulla",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Cronulla",
    subheading: "Salt air and ocean winds create unique roofing challenges that require proper materials and coastal experience.",
    paragraphs: [
      "Rust is the biggest issue in Cronulla. Salt particles settle on roofs and gutters, trapping moisture and accelerating corrosion. What starts as surface rust can quickly eat through fasteners, flashings and gutter seams if left untreated.",
      "We also see a lot of wind damage after coastal storms — lifted ridges, loose tiles, cracked flashings and gutters filled with sand and debris from strong sea breezes.",
      "Our coastal roofing service includes rust inspection, protective coatings, gutter upgrades with proper drainage and repairs using corrosion-resistant fasteners. We make sure your roof can handle everything the ocean throws at it.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Caringbah",
    quote:
      "Our roof was rusting badly near the gutters. They replaced the affected sections with Colorbond, treated the rust spots and upgraded the gutters. Looks great and should last much longer now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
