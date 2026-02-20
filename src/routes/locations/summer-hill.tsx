import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.891; // Summer Hill
const AREA_LON = 151.139;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Summer Hill",
  slug: "summer-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Summer Hill Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SUMMER HILL",
    bullets: [
      "Expert care for heritage tile and slate roofs",
      "Leak detection and repairs for older roofing systems",
      "Gutter cleaning and replacement for terrace homes",
      "Reliable service for Federation and Victorian properties across the inner west",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Summer Hill Homes",
    paragraphs: [
      "Summer Hill is home to beautiful Federation and Victorian architecture, and many of these period homes have original or aging roof systems that require specialist attention. Terracotta tiles, slate and older flashings can develop leaks or wear over time.",
      "We work with heritage and modern roofing materials to deliver repairs, restorations and gutter solutions tailored to the inner west climate. Whether you need tile replacement, valley sealing or complete gutter upgrades, we focus on maintaining the character of your home.",
      "From tree-lined streets near Summer Hill Station to quiet residential blocks, we provide clear quotes, tidy workmanship and long-lasting results for Colorbond, tile and slate roofing systems throughout the area.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing services for heritage homes in Summer Hill",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Summer Hill",
    subheading: "Older roofs and narrow gutters often struggle with leaf build-up and storm water during heavy rain.",
    paragraphs: [
      "Many terrace and semi-detached homes in Summer Hill have limited roof access and tightly packed gutter systems that clog quickly with debris from nearby trees. Blockages lead to overflow, water pooling and internal leaks that damage ceilings and walls.",
      "Cracked or slipped terracotta tiles, worn valley irons and aging flashing around chimneys are common issues in Federation-era homes. Left unchecked, these small problems turn into costly interior damage and structural concerns.",
      "We provide targeted leak repairs, gutter clearing, tile replacement and full restoration services for heritage and modern roofs. Our team understands how older roofing systems work and how to maintain them properly without compromising their original design.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura W.",
    suburb: "Ashfield",
    quote:
      "They repaired our heritage tile roof after years of leaks. The team was respectful of the home and fixed everything properly. No more water stains and the gutters drain perfectly now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
