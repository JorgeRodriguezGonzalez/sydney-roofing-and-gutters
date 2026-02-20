import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.969; // Mortdale
const AREA_LON = 151.076;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Mortdale",
  slug: "mortdale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Mortdale Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MORTDALE",
    bullets: [
      "Established suburb roofing maintenance and upgrades",
      "Tile roof repairs, Colorbond replacements and leak detection",
      "Storm damage assessments and gutter system upgrades",
      "Trusted service across the St George area with clear communication",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Homes in Mortdale",
    paragraphs: [
      "Mortdale features a diverse mix of established homes and newer builds across the St George area — which means roofs of varying ages, materials and maintenance needs all in one suburb.",
      "Whether you have terracotta tiles showing their age, Colorbond that needs attention after storms, or concrete tiles with cracked sections, we provide targeted repairs and complete restoration services tailored to local conditions.",
      "Our team inspects every roof system thoroughly — checking tiles, flashing, valleys and guttering — then delivers clear quotes and quality workmanship that stands up to Sydney weather year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work on homes in Mortdale",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Address in Mortdale Homes",
    subheading: "Established suburbs often see a range of roofing problems as materials age and weather takes its toll.",
    paragraphs: [
      "Older tile roofs can develop cracks, lifting or broken sections that let water through during heavy rain. Metal roofs may show rust spots, loose fasteners or fading paint that reduces protection over time.",
      "Gutters in older homes often sag or separate at joints, causing overflow and water damage to fascias and walls. Storm events can worsen these issues, turning minor problems into urgent repairs.",
      "We assess the full condition of your roof and gutter system, then recommend the most cost-effective solution — whether that means targeted repairs, strategic replacements or a complete restoration to extend the life of your roof.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle P.",
    suburb: "Penshurst",
    quote:
      "Our tile roof was leaking in two spots and the gutters were overflowing every storm. They fixed everything properly, replaced damaged tiles and realigned the gutters. Great result and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
