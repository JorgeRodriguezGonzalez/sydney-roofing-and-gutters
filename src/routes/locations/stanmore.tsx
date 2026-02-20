import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.893; // Stanmore
const AREA_LON = 151.166;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Stanmore",
  slug: "stanmore",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Stanmore Heritage Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "STANMORE",
    bullets: [
      "Heritage tile and slate roof restoration",
      "Terrace roofing repairs for Victorian and Federation homes",
      "Leak detection and waterproofing for compact roof layouts",
      "Fast quotes for Stanmore and surrounding inner west suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Stanmore Heritage Properties",
    paragraphs: [
      "Stanmore is filled with beautiful Victorian and Federation terrace homes, each with unique roof designs that require specialised care and attention to detail. Older roofs often present challenges like cracked tiles, ageing valleys and hidden leaks.",
      "We work extensively across the inner west, providing expert repairs, restorations and maintenance tailored to heritage-style properties. Our team understands slate, terracotta tiles and metal roofing systems common in older Stanmore homes.",
      "Whether you need a full restoration, targeted leak repair or gutter upgrades to handle heavy rain, we deliver quality workmanship that respects the character and structure of your home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration and tile repairs in Stanmore",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Stanmore Homes",
    subheading: "Older terrace homes and tight roof valleys often mean more maintenance and careful repairs are needed.",
    paragraphs: [
      "Stanmore homes feature compact roofing layouts with narrow valleys and close proximity to neighbouring properties. Water flow problems, damaged flashing and cracked tiles can quickly lead to interior leaks if not addressed early.",
      "Age is a factor too — many roofs here are decades old and show signs of wear like loose ridges, rusted gutters, broken tiles and deteriorated pointing that can compromise structural integrity.",
      "We provide thorough inspections, heritage-appropriate repairs and full restorations designed to preserve the original look while ensuring modern waterproofing standards and long-term durability.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Sophie L.",
    suburb: "Petersham",
    quote:
      "Our Victorian terrace had persistent leaks near the valley. The team identified broken tiles and damaged flashing, replaced everything carefully and the roof has been perfect since. Great communication throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
