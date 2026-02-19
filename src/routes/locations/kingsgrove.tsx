import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.938; // Kingsgrove
const AREA_LON = 151.099;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kingsgrove",
  slug: "kingsgrove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kingsgrove Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KINGSGROVE",
    bullets: [
      "Expert repairs for terracotta and tile roofs",
      "Complete roof restorations and repointing services",
      "Guttering solutions for established homes",
      "Fast response times for leak detection and urgent repairs across the St George area",
    ],
  },

  introBlock: {
    heading: "Professional Roof and Gutter Services for Kingsgrove Homes",
    paragraphs: [
      "Kingsgrove is home to many established properties with ageing roof systems that require regular maintenance and careful repairs. Terracotta tiles, older metal roofs and original guttering all need attention to prevent leaks and water damage.",
      "We service the entire St George region including Kingsgrove, providing roof repairs, complete restorations, repointing, and gutter upgrades designed to protect homes built decades ago. Our team understands how older roof systems behave and where problems typically develop.",
      "Whether you need broken tiles replaced, valleys resealed, rusted sections repaired or full gutter replacement, we deliver reliable workmanship with transparent pricing and clear communication throughout every project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and tile repairs in Kingsgrove",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in Kingsgrove",
    subheading: "Older homes in the area often experience tile deterioration, valley leaks and rusted guttering that needs urgent attention.",
    paragraphs: [
      "Terracotta and concrete tiles can crack or slip over time, allowing water to enter the roof space. Valleys and flashings often fail first, especially around chimneys and where two roof planes meet. These problems worsen rapidly if left untreated.",
      "Gutters on established homes frequently show rust, sagging or poor drainage due to decades of weathering. Downpipes become blocked or disconnected, causing overflow that damages fascias, eaves and even foundations.",
      "We conduct thorough inspections to identify weak points before they escalate into major leaks. Our repairs focus on stopping water entry, restoring structural integrity and extending the life of your existing roof system.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen W.",
    suburb: "Hurstville",
    quote:
      "Our tile roof was leaking badly after the storms. They identified the problem quickly, replaced damaged tiles and resealed the valley. Professional service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
