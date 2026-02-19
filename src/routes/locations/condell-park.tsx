import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.927; // Condell Park
const AREA_LON = 151.017;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Condell Park",
  slug: "condell-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofers Serving Condell Park Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CONDELL PARK",
    bullets: [
      "Terracotta and concrete tile roof repairs",
      "Colorbond roof restorations and leak detection",
      "Gutter cleaning and replacement across Condell Park",
      "Fast local quotes for roof repairs, installations and restoration work",
    ],
  },

  introBlock: {
    heading: "Local Roofing and Guttering Specialists in Condell Park",
    paragraphs: [
      "Condell Park has a mix of established homes with tile and metal roofs that require regular attention to stay watertight. Western Sydney heat, summer storms and ageing materials all take their toll over time.",
      "We provide roof repairs, roof restorations and guttering services across Condell Park and surrounding suburbs. Our team works with terracotta tiles, concrete tiles and Colorbond to deliver lasting results.",
      "From fixing leaks and replacing cracked tiles to restoring faded roofs and upgrading gutters, we focus on clear quotes, quality workmanship and honest communication from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and restorations in Condell Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Condell Park Homes",
    subheading: "Heat damage, storm impact and blocked gutters are the main challenges for roofs in this area.",
    paragraphs: [
      "Western Sydney summers can reach over 40 degrees, causing roof tiles to expand and contract repeatedly. This leads to cracks, broken tiles and weakened seals that let water in during storms.",
      "Blocked gutters are another common problem — leaves and debris build up quickly, especially after wind or rain. When water cannot drain properly, it overflows into fascias, eaves and walls, causing hidden damage.",
      "We repair leaking valleys, replace damaged tiles, restore faded Colorbond roofs and clean or replace guttering systems. Our goal is to fix the problem properly the first time and prevent it from returning.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda K.",
    suburb: "Bankstown",
    quote:
      "Our tile roof was leaking badly after the last storm. They found the issue in the valley, replaced the flashing and fixed several cracked tiles. No more leaks and very fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
