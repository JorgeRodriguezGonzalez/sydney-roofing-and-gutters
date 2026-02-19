import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.877; // Kemps Creek
const AREA_LON = 150.786;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kemps Creek",
  slug: "kemps-creek",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kemps Creek Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KEMPS CREEK",
    bullets: [
      "Expert roofing solutions for rural and residential properties",
      "Metal roof repairs, Colorbond installations and re-roofing",
      "Gutter replacement and leaf guard systems",
      "Serving Kemps Creek, Luddenham, Badgerys Creek and surrounding Western Sydney areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Kemps Creek Properties",
    paragraphs: [
      "Kemps Creek sits in Western Sydney where properties range from rural acreage to newer residential developments, and roofs face intense summer heat, severe storms and wide temperature swings throughout the year.",
      "We deliver metal roofing repairs, Colorbond installations, tile roof restorations and complete guttering upgrades across the area. Our work covers both rural sheds and modern homes with equal attention to quality and durability.",
      "Every job starts with a detailed inspection to identify heat damage, storm impact, rust spots or gutter blockages before we recommend repairs or full replacement options. We use quality materials that handle Western Sydney conditions without compromise.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof installation and repairs in Kemps Creek",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Kemps Creek",
    subheading: "Western Sydney weather puts extra stress on roofing materials through heat, storms and rapid temperature changes.",
    paragraphs: [
      "Metal roofs expand and contract in extreme temperatures, which can loosen fasteners, create gaps and lead to leaks. Older Colorbond may fade or show rust patches where the coating has worn through after years of harsh sun exposure.",
      "Tile roofs crack under thermal stress or shift during storms, while gutters collect dust and debris that turns into sludge during heavy rain. Blocked valleys and overflowing downpipes cause water to back up under the roof line.",
      "We fix rusted sections, replace damaged tiles, reseal flashings, clear gutters and install new systems where repairs are no longer cost-effective. Our focus is on lasting solutions that protect your property year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul R.",
    suburb: "Luddenham",
    quote:
      "Our metal roof had rust spots and loose sheets after last summer. The team replaced the damaged sections, resealed everything and checked all the flashings. Solid work and fair pricing for the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
