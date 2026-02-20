import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.796; // Oatlands
const AREA_LON = 151.024;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Oatlands",
  slug: "oatlands",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Oatlands Roof Repairs & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "OATLANDS",
    bullets: [
      "Expert roof repairs for heritage and modern homes",
      "Complete roof restorations, re-bedding and re-pointing services",
      "Colorbond and tile roof installations and replacements",
      "Full gutter cleaning, repairs and downpipe upgrades for storm protection",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Oatlands Homes",
    paragraphs: [
      "Oatlands features a diverse range of residential properties, from established brick homes to modern developments, each with unique roofing requirements that demand local expertise and quality workmanship.",
      "Our team specialises in all aspects of roofing for the Oatlands area, including terracotta and concrete tile repairs, metal roof restoration, Colorbond installations, and comprehensive guttering solutions designed for Sydney storm conditions.",
      "Whether you need emergency leak repairs, preventative maintenance, or a complete roof replacement, we deliver clean installation, transparent quotes and long-lasting results backed by industry warranties and local knowledge.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in Oatlands",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Oatlands",
    subheading: "Established homes and older roof systems often face weathering, blocked gutters and structural wear over time.",
    paragraphs: [
      "Many Oatlands properties have mature roof systems that develop problems like cracked or loose tiles, deteriorated ridge capping, rusted valley irons, and blocked box gutters that lead to water pooling and interior damage.",
      "Storm events combined with tree debris from surrounding vegetation can quickly overwhelm older gutter systems, causing overflow into fascias, water ingress through roof penetrations, and gradual damage to ceiling linings.",
      "We conduct thorough roof inspections, identify all problem areas, and provide targeted repairs or full restoration packages depending on your roof condition, budget requirements and long-term protection goals.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Carlingford",
    quote:
      "Our tile roof was leaking badly during heavy rain. The team assessed everything, replaced damaged tiles, re-bedded the ridges and cleared the gutters. No more leaks and very fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
