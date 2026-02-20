import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.681; // Riverstone
const AREA_LON = 150.862;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Riverstone",
  slug: "riverstone",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Riverstone Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RIVERSTONE",
    bullets: [
      "Roofing solutions for established homes and new estates",
      "Storm damage repairs and leak detection",
      "Heat-resistant Colorbond and tile installations",
      "Trusted gutter cleaning and replacement across Riverstone and nearby suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Riverstone",
    paragraphs: [
      "Riverstone sits in the growing northwest corridor, where rapid development brings a mix of older established homes and brand-new estates. Both need roofing systems that can handle summer heat and seasonal storms.",
      "We service all roof types across Riverstone, including Colorbond, concrete tile and heritage slate. Our team delivers roof repairs, restoration work and full gutter replacements — built to withstand local weather extremes.",
      "Whether your home is heritage-listed or brand new, we provide honest assessments, clean workmanship and long-lasting results that protect your investment from the first inspection through to handover.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and gutter services in Riverstone",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Riverstone",
    subheading: "Summer heat, intense storms and rapid suburban growth can all put pressure on older roofing systems.",
    paragraphs: [
      "In Riverstone, we often see cracked tiles from extreme heat cycles, rusted gutters from storm overflow, and debris blockages from nearby construction or bushland. Each of these issues can lead to leaks if left unaddressed.",
      "If you notice water stains on ceilings, sagging gutter sections, loose flashing or pooling water after rain, it means your roof system needs attention before the next weather event hits.",
      "We provide targeted repairs, preventative maintenance and full restoration packages — so your home stays protected year-round, no matter what the seasons bring to the northwest.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen S.",
    suburb: "Schofields",
    quote:
      "They replaced our rusted gutters and fixed broken tiles after a huge storm. The team was on time, professional and left everything spotless. Our roof has been perfect since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
