import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.866; // Homebush
const AREA_LON = 151.088;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Homebush",
  slug: "homebush",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Homebush Roofing Repairs & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HOMEBUSH",
    bullets: [
      "Complete roof repairs and gutter maintenance for all property types",
      "Metal, tile and Colorbond roofing solutions",
      "Fast response to leaks and storm damage",
      "Trusted service across Homebush, Strathfield and surrounding inner west suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Gutter Services Throughout Homebush",
    paragraphs: [
      "Homebush homes range from older brick homes with tile roofs to modern townhouses and units with Colorbond or metal roofing. Each type requires different maintenance, but every roof needs regular inspection to prevent leaks and costly repairs.",
      "We deliver targeted roof repairs, complete restorations and guttering upgrades for residential and commercial properties across Homebush and the inner west. Whether you need a quick leak fix or a full roof overhaul, we work efficiently and leave every site clean.",
      "Our team has experience with terracotta tiles, concrete tiles, metal sheeting and Colorbond systems — providing honest assessments and quality workmanship that keeps your property protected year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration work in Homebush",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Homebush",
    subheading: "Older roofs and changing weather patterns can lead to leaks, rust and gutter problems.",
    paragraphs: [
      "Many Homebush properties have mature roofs that show signs of wear — cracked tiles, rusted valleys, blocked gutters and deteriorating flashings. Left unchecked, these issues allow water entry and structural damage.",
      "Storm damage is another frequent problem. High winds lift tiles, overflow clogs downpipes, and heavy rain exposes weak points in older gutter systems. Quick repairs prevent expensive water damage inside your home.",
      "We inspect the full roof system, identify problem areas and recommend cost-effective solutions — whether you need targeted repairs, gutter replacement or a complete roof restoration to extend the life of your roof.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Strathfield",
    quote:
      "Our tile roof was leaking during heavy rain. The team arrived quickly, replaced damaged tiles and resealed the valleys. No leaks since and the price was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
