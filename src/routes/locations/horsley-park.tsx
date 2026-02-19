import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.846; // Horsley Park
const AREA_LON = 150.844;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Horsley Park",
  slug: "horsley-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Horsley Park Roofing & Gutter Solutions",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HORSLEY PARK",
    bullets: [
      "Industrial and acreage roofing specialists",
      "Colorbond and metal roofing for large structures",
      "Storm damage repairs and re-roofing services",
      "Guttering systems designed for Western Sydney heat and downpours",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Horsley Park Properties",
    paragraphs: [
      "Horsley Park features a unique mix of acreage homes, industrial warehouses and semi-rural properties — each with distinct roofing requirements that demand experienced contractors who understand large-scale installations and repairs.",
      "Whether you own a residential acreage with expansive Colorbond roofing or manage a commercial warehouse with metal sheeting, we deliver targeted solutions for leak repairs, re-roofing, gutter replacement and storm damage restoration across the area.",
      "Our team works with all roof types common to Western Sydney — from traditional tile roofs on older homes to modern metal systems on sheds and industrial buildings — ensuring every project meets Australian standards and withstands local weather extremes.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Horsley Park acreage and commercial properties",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in Horsley Park We Address Daily",
    subheading: "Western Sydney heat, summer storms and large roof spans create unique maintenance demands for local properties.",
    paragraphs: [
      "Metal roofs expand and contract significantly under the extreme temperature swings typical of Western Sydney — from 40-degree summer days to overnight lows — leading to fastener failure, sheet movement and penetration leaks that require specialist attention.",
      "Properties on larger blocks often have multiple structures (homes, sheds, workshops, stables) with interconnected guttering systems that can fail catastrophically during intense summer storms if not properly maintained or upgraded to handle high water volumes.",
      "We provide comprehensive inspections for all roof types, identify vulnerable points before they fail, and deliver lasting repairs or full replacements using materials proven to perform in the Horsley Park climate year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael D.",
    suburb: "Abbotsbury",
    quote:
      "Our warehouse roof had multiple leak points after the January storms. The crew identified every weak spot, replaced damaged sheeting and upgraded the flashing. Professional work that has held up perfectly through another wet season.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
