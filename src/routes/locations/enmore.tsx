import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.898; // Enmore
const AREA_LON = 151.173;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Enmore",
  slug: "enmore",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Specialists for Inner Sydney",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ENMORE",
    bullets: [
      "Specialised repairs for terrace and heritage roofs",
      "Slate, tile and metal roof restoration work",
      "Leak detection for older roofing systems",
      "Fast response times throughout the inner west with minimal disruption to residents",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Heritage Homes in Enmore",
    paragraphs: [
      "Enmore is home to rows of Victorian and Edwardian terrace houses with original roofing features that require careful attention and specialist knowledge to maintain properly over time.",
      "We provide targeted repairs, restorations and leak fixes for slate roofs, terracotta tiles and older metal roofing systems common in heritage properties throughout the inner west suburbs.",
      "Our team understands how to work respectfully on period homes, delivering watertight repairs that preserve character while meeting modern performance standards and council requirements where applicable.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage terrace roof restoration work in Enmore",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Enmore Properties",
    subheading: "Older homes often face unique challenges including cracked slate, broken tiles and outdated flashing systems.",
    paragraphs: [
      "Many terrace roofs in Enmore have original slate or terracotta tiles that crack over time, combined with ageing valleys and flashing that no longer provide adequate weather protection.",
      "Leaks often appear during heavy rain, causing internal water damage to ceilings, walls and even timber framing if left unaddressed for extended periods.",
      "We carry out thorough inspections to identify damaged tiles, worn flashing and blocked gutters, then provide targeted repairs or full restoration depending on the condition and your budget.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma R.",
    suburb: "Newtown",
    quote:
      "Our slate roof had multiple leaks and several cracked tiles. The team replaced damaged sections, repointed the ridge and fixed all the flashing. No more water stains and the roof looks fantastic.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
