import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.774; // Seven Hills
const AREA_LON = 150.934;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Seven Hills",
  slug: "seven-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Seven Hills Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SEVEN HILLS",
    bullets: [
      "Complete roof repairs for all tile and metal systems",
      "Gutter cleaning, repairs and full replacement services",
      "Leak detection and waterproofing for western Sydney conditions",
      "Professional roof restorations backed by years of experience in Seven Hills",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Seven Hills Homes",
    paragraphs: [
      "Seven Hills features a diverse mix of established homes and newer properties, with roofs exposed to western Sydney heat, summer storms and occasional hail. Regular maintenance is key to preventing expensive damage down the track.",
      "We work with terracotta and concrete tiles, Colorbond metal, slate and mixed roof systems. Our local team provides roof repairs, complete restorations, guttering upgrades and thorough leak inspections throughout Seven Hills.",
      "From small patch repairs to full roof makeovers, every project is delivered with attention to detail, quality materials and clear communication at every stage of the job.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Seven Hills homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Seven Hills",
    subheading: "Heat, storms and ageing materials create a range of problems for western Sydney roofs.",
    paragraphs: [
      "Extended hot days can crack brittle tiles and warp older metal sections, while sudden downpours expose weak flashing, blocked valleys and undersized gutters. Both lead to leaks, ceiling stains and structural damage if not addressed.",
      "Many roofs in Seven Hills are decades old and showing signs of wear — rusted fasteners, lifted ridge caps, cracked pointing, sagging gutters or moss and lichen buildup across shaded sections.",
      "We diagnose the real cause, provide honest recommendations and deliver repairs or restorations that extend roof life and protect your property through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul D.",
    suburb: "Toongabbie",
    quote:
      "Our old tile roof was falling apart after years of neglect. They replaced damaged sections, repointed the ridge and cleared all gutters. Looks brand new and no more leaks after rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
