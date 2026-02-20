import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.719; // Wahroonga
const AREA_LON = 151.117;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wahroonga",
  slug: "wahroonga",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Upper North Shore Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WAHROONGA",
    bullets: [
      "Expert repairs for heritage and modern properties",
      "Storm damage repairs and leak detection services",
      "Gutter cleaning and replacement for leafy areas",
      "Quality workmanship across tile, slate and Colorbond roofing systems",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Wahroonga Homes",
    paragraphs: [
      "Wahroonga is home to beautiful established properties with mature trees and a mix of heritage and contemporary architecture. This means roofs face constant challenges from falling debris, storm activity and the demanding Upper North Shore climate.",
      "We provide complete roofing and guttering solutions including repairs, restorations, leak detection and gutter upgrades tailored for local conditions. Our team works with all roof types including terracotta tiles, slate, metal and Colorbond with attention to detail and quality.",
      "From heritage homes requiring sympathetic restoration to modern builds needing proactive maintenance, we deliver clean professional work backed by experience across the Upper North Shore suburbs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roof repairs and restoration in Wahroonga",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Wahroonga",
    subheading: "Established trees and seasonal storms create ongoing roof and gutter maintenance challenges in this area.",
    paragraphs: [
      "Large eucalypts and native trees provide shade and character but also drop leaves, bark and branches that block gutters and valleys. This leads to water overflow, fascia rot and interior ceiling damage during heavy rain events.",
      "We regularly see cracked or slipped tiles from storm debris, rusted valley irons, sagging gutters from blockage weight and leaking penetrations around skylights or vents. Many older homes also have original terracotta tiles that need careful maintenance.",
      "Our service includes thorough inspection, targeted repairs, valley replacements, gutter realignment and full restoration work. We help Wahroonga homeowners protect their investment with long-term solutions instead of temporary patches.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew K.",
    suburb: "Turramurra",
    quote:
      "Fantastic work on our Federation home. They replaced damaged tiles, repaired valley leaks and cleaned out years of debris. The attention to detail was excellent and the roof looks great now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
