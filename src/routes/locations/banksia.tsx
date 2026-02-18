import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.945; // Banksia
const AREA_LON = 151.141;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Banksia",
  slug: "banksia",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roofing & Guttering Experts in Banksia",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BANKSIA",
    bullets: [
      "Roof repairs for coastal and urban homes",
      "Salt-air resistant coatings and metal roof maintenance",
      "Gutter cleaning and downpipe repairs for heavy rain",
      "Fast response across Banksia and surrounding suburbs with fully licensed tradespeople",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Services for Banksia Homes",
    paragraphs: [
      "Banksia sits in a tightly-knit residential pocket between Rockdale and the bay, with a mix of older brick homes and renovated properties — many featuring tiled or metal roofs that need regular care in coastal air.",
      "We service Banksia homes with roof repairs, leak detection, gutter replacement and Colorbond installations — accounting for salt exposure, airport proximity and the stop-start weather patterns common to the St George region.",
      "Our local team works quickly and cleanly on everything from cracked tiles and rusted valleys to full roof restorations, delivering results that last through Sydney summers and coastal downpours alike.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Banksia Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Banksia",
    subheading: "Coastal air and tight rooflines mean rust, blockages and leaks can develop faster than you expect.",
    paragraphs: [
      "Even a few kilometres from the coast, salt-laden winds accelerate corrosion on metal roofs, flashing and gutters — especially around joins, valleys and older fasteners that lose their protective coating over time.",
      "Gutters in Banksia can clog quickly with leaves from street trees and debris carried by strong winds, leading to overflow during heavy rain and water damage to fascias, soffits and internal ceilings.",
      "We inspect the full roof system — checking for rust spots, pooling water, cracked or dislodged tiles, blocked downpipes and weak points that could fail during the next storm — then fix them properly the first time.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Rockdale",
    quote:
      "They replaced two rusted valleys and cleared years of gunk from the gutters. No more leaks in the bedroom and the quote was very fair. Highly recommend for anyone in the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
