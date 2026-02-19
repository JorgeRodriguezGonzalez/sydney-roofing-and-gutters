import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.853; // Guildford West
const AREA_LON = 150.969;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Guildford West",
  slug: "guildford-west",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Solutions for Guildford West Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GUILDFORD WEST",
    bullets: [
      "Comprehensive roof repairs and restoration work",
      "Tile and Colorbond roofing installations and replacements",
      "Gutter maintenance and downpipe upgrades for all roof types",
      "Same-day leak detection and emergency repairs available across Western Sydney suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services Across Guildford West",
    paragraphs: [
      "Guildford West features a mix of established brick homes, fibro cottages and newer construction — each requiring different roofing approaches to handle heat, storms and long-term wear.",
      "Our team delivers tile replacement, metal roof repairs, full restorations and guttering upgrades tailored to local building stock and weather exposure, from summer heat to storm season.",
      "We work with terracotta tiles, concrete tiles, Colorbond steel and older corrugated iron — prioritizing clean repairs, proper flashing and drainage solutions that last through Western Sydney weather extremes.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repair in Guildford West",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Guildford West",
    subheading: "Older homes and summer heat create distinct roof stresses — from cracked tiles to rusted gutters and failing sealants.",
    paragraphs: [
      "Many properties in the area have aging tile roofs with broken or slipped sections, rusted valley irons and deteriorated ridge capping that leak during heavy rain or allow heat penetration in summer.",
      "Gutter systems on older homes often lack capacity for intense downpours, leading to overflow, eaves damage, fascia rot and pooling near foundations after storms.",
      "We handle leak tracing, tile and sheet replacement, gutter rebuilds, valley upgrades and full roof restorations — restoring protection and improving long-term performance without unnecessary cost.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Merrylands",
    quote:
      "Our terracotta roof had leaks every winter. They replaced cracked tiles, resealed valleys and upgraded downpipes. Three storms later and no issues — great service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
