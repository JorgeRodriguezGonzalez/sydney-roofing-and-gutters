import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.683; // Dural
const AREA_LON = 151.019;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dural",
  slug: "dural",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Dural Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DURAL",
    bullets: [
      "Expert roofing for acreage homes and rural properties",
      "Repairs and restorations for tile, Colorbond and metal roofs",
      "Gutter upgrades for large properties and outbuildings",
      "Experienced service across Dural, Glenorie, Galston and surrounding semi-rural areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering for Dural and Acreage Properties",
    paragraphs: [
      "Dural is known for its semi-rural character, acreage blocks and larger properties — which often means more complex roof systems, outbuildings, sheds and greater exposure to storm debris and heavy rainfall.",
      "Our team provides roof repairs, restorations and guttering installations tailored for rural-residential properties. We work with Colorbond, concrete tiles, metal sheeting and slate, handling everything from main homes to secondary structures.",
      "Whether you need leak detection, full gutter replacement or roof restoration across a large site, we focus on durable solutions, clear pricing and workmanship that handles the demands of larger rural properties.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering services for acreage homes in Dural",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Dural Properties",
    subheading: "Larger properties, tree-lined blocks and semi-rural exposure create unique roofing maintenance challenges.",
    paragraphs: [
      "Heavy tree coverage and acreage blocks mean gutters and valleys fill with leaves, branches and debris much faster than in standard suburban homes. Overflow and blockages can quickly lead to water damage across multiple buildings.",
      "Many Dural homes feature older Colorbond or tiled roofs on main residences plus sheds, stables and carports — each requiring inspection and maintenance to avoid rust, leaks and structural deterioration.",
      "We provide preventative gutter cleaning, targeted leak repairs, full roof restoration and new installations designed for larger properties with multiple structures and challenging site access.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew K.",
    suburb: "Galston",
    quote:
      "Our home and shed both needed gutter work after years of neglect. They handled the whole property efficiently, replaced rusted sections and cleared all the leaf build-up. Great result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
