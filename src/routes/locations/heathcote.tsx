import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.089; // Heathcote
const AREA_LON = 151.006;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Heathcote",
  slug: "heathcote",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heathcote Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HEATHCOTE",
    bullets: [
      "Expert roofing for bush-edge and acreage homes",
      "Tile repairs, Colorbond installations and metal restorations",
      "Gutter replacements to handle leaf fall and heavy runoff",
      "Fast response times for Heathcote and surrounding Sutherland areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Heathcote and Surrounds",
    paragraphs: [
      "Heathcote is surrounded by natural bushland and the Royal National Park, which means properties here face unique challenges including falling branches, heavy leaf debris, and exposure to strong winds funneling through the valleys.",
      "We provide roofing repairs, restorations, gutter cleaning and complete roof replacements for homes on large blocks and rural properties throughout Heathcote, where access and material transport require careful planning and experienced tradespeople.",
      "Our team works with concrete tiles, terracotta, Colorbond steel and metal sheeting to suit both heritage homes and modern builds, delivering clean workmanship, transparent quotes and long-lasting weather protection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter repairs in bushland Heathcote properties",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Heathcote Homes",
    subheading: "Bush-edge living brings extra maintenance demands — especially when it comes to gutters and roof drainage.",
    paragraphs: [
      "Properties near native bushland collect huge amounts of leaf litter, bark and twigs that clog gutters and downpipes, causing water to back up into eaves, fascias and ceilings. Left unchecked, this leads to timber rot and interior water damage.",
      "Strong winds and overhanging branches can crack or dislodge tiles, damage ridge capping and wear down protective coatings. Older metal roofs are especially vulnerable to rust once paint films begin to fail.",
      "We offer preventative maintenance plans, targeted leak repairs, full gutter replacements and roof restorations with high-grade sealants and coatings designed to handle the demands of rural Sutherland living.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen S.",
    suburb: "Engadine",
    quote:
      "Our roof was struggling with all the leaf fall from surrounding gums. The team cleared everything, repaired a few cracked tiles and resealed the ridges. No more leaks and excellent workmanship throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
