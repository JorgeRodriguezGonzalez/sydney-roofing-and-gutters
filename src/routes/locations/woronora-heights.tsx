import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.040; // Woronora Heights
const AREA_LON = 151.035;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Woronora Heights",
  slug: "woronora-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Woronora Heights Roofing Specialists Since 2010",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WORONORA HEIGHTS",
    bullets: [
      "Expert roof repairs for established Sutherland homes",
      "Tile, slate and Colorbond restoration services",
      "Gutter cleaning and downpipe upgrades for bushland areas",
      "Fast response for storm damage and emergency leak repairs across Sutherland Shire",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Gutter Services in Woronora Heights",
    paragraphs: [
      "Woronora Heights features established residential homes set among natural bushland, creating unique roofing challenges including heavy leaf fall, tree debris and exposure to severe weather conditions that require regular maintenance and expert attention.",
      "Our team delivers comprehensive roofing solutions for tile, slate and metal roof systems common in the area, including leak detection, storm damage repairs, gutter cleaning and full roof restoration designed to withstand local Sutherland Shire conditions.",
      "We provide detailed inspections, competitive quotes and quality workmanship using premium materials suited to the local climate, ensuring your roof system remains watertight and protected year round without cutting corners or using substandard products.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and gutter work in Woronora Heights",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Woronora Heights",
    subheading: "Bushland settings and established trees create ongoing maintenance demands for roofs and guttering systems throughout Sutherland Shire.",
    paragraphs: [
      "Proximity to natural bushland means constant leaf accumulation, seed pods and tree debris that block gutters, valleys and downpipes, leading to overflow during heavy rain, water penetration into roof cavities and potential structural damage if left unaddressed.",
      "Severe storms common in the Sutherland area can crack or dislodge roof tiles, damage flashing, tear valley irons and overwhelm guttering systems with branches and debris, requiring professional inspection and repair to prevent ongoing water damage to ceilings and walls.",
      "Our roofing specialists address blocked gutters, cracked tiles, damaged valleys, rusted sections, inadequate drainage and storm damage with targeted repairs or complete restoration, ensuring your roof system handles the demands of bushland living in Woronora Heights without compromise.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Sutherland",
    quote:
      "After a big storm we had multiple leaks and damaged tiles. The team arrived quickly, inspected thoroughly and repaired everything in two days. Professional service and the roof has been perfect since. Highly recommend them for Sutherland homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
