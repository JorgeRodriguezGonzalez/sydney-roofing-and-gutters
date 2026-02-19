import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.650; // Box Hill
const AREA_LON = 150.899;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Box Hill",
  slug: "box-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Box Hill New Estate Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BOX HILL",
    bullets: [
      "Expert roofing for modern homes and new estates",
      "Colorbond repairs, installations and leak detection services",
      "Gutter systems built for western Sydney weather extremes",
      "Fast response for builder warranty issues and post-construction defects across Box Hill",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Box Hill Homes",
    paragraphs: [
      "Box Hill has grown rapidly over the past decade, with new estates and modern homes spread across the area. While newer roofs should last decades, early defects, settling issues and construction debris can create problems within the first few years of ownership.",
      "Our team provides roofing repairs, installations and gutter maintenance tailored to the Colorbond and tile systems common in Box Hill. We understand western Sydney conditions where temperatures can exceed 40 degrees in summer and storms roll through with little warning.",
      "From minor leak repairs to full roof restorations and gutter replacements, we deliver clear quotes, reliable workmanship and ongoing support for homeowners looking to protect their investment long-term.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Modern roofing installation and gutter work in Box Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Box Hill We Repair and Prevent",
    subheading: "New estates often face unique challenges from construction debris, settling foundations and extreme western Sydney heat cycles.",
    paragraphs: [
      "Even new roofs can develop leaks if flashing was poorly installed, if screws have backed out during settling, or if debris was left in valleys during construction. These issues often appear after the first heavy rain or heatwave.",
      "Western Sydney heat is hard on Colorbond roofs. Expansion and contraction cycles can loosen fasteners, create gaps in ridge capping, and cause premature wear if the original installation was rushed or substandard.",
      "We inspect every system thoroughly, identify defects early, and provide repairs that address the root cause rather than just patching symptoms. Whether you need warranty support documentation or a complete gutter upgrade, we help Box Hill homeowners stay ahead of costly damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "The Ponds",
    quote:
      "Our new build had water stains in the ceiling within six months. They found missing flashing and fixed everything properly. Great communication and the report helped us deal with the builder too.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
