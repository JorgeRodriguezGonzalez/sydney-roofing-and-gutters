import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.981; // Alfords Point
const AREA_LON = 151.024;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Alfords Point",
  slug: "alfords-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Alfords Point Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ALFORDS POINT",
    bullets: [
      "Roof repairs for established homes near Georges River",
      "Tile and metal roof restoration services",
      "Gutter cleaning and replacement for storm protection",
      "Leak detection and ceiling repairs for properties throughout Alfords Point and Illawong",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Alfords Point",
    paragraphs: [
      "Alfords Point sits alongside the Georges River, where established homes on quiet streets face challenges from river humidity, seasonal storms and mature tree cover that keeps gutters busy all year round.",
      "We service properties throughout Alfords Point and nearby suburbs with tile roof repairs, Colorbond roof restorations, gutter replacements and leak repairs designed to handle the local climate and protect your investment.",
      "Our approach combines thorough inspections, honest quotes and quality workmanship, so your roof and gutter system delivers reliable weather protection for the long term.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering work completed in Alfords Point",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Alfords Point Homes",
    subheading: "Older homes near the river often develop problems with tile movement, rust and blocked downpipes over time.",
    paragraphs: [
      "Many properties in Alfords Point feature terracotta or concrete tile roofs that have been in place for decades. Cracked tiles, broken ridges and worn bedding let water into ceilings, especially during heavy rain.",
      "Gutters in the area fill quickly with leaves from surrounding trees, and older metal systems rust through at joints and along the back edge where water sits after storms.",
      "We repair or replace damaged tiles, restore ridge capping, install new Colorbond gutters where needed, and clear blockages so water flows away cleanly without damaging fascias or eaves.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Illawong",
    quote:
      "They replaced four cracked tiles and repointed the full ridge line on our place. The quote was fair, the work was clean and the follow-up was excellent. Really happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
