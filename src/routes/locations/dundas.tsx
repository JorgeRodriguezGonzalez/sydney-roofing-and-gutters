import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.803; // Dundas
const AREA_LON = 151.063;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dundas",
  slug: "dundas",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing Solutions for Dundas",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DUNDAS",
    bullets: [
      "Repairs and maintenance for established residential properties",
      "Tile, Colorbond and metal roof specialists",
      "Complete gutter cleaning and replacement services",
      "Fast response times throughout Dundas and surrounding Parramatta suburbs",
    ],
  },

  introBlock: {
    heading: "Quality Roof Repairs and Guttering for Dundas Homes",
    paragraphs: [
      "Dundas is home to a mix of established residential properties and newer housing, where regular roof maintenance is essential to protect against summer heat, storm damage and the wear that comes with western Sydney weather conditions.",
      "From emergency leak repairs to complete roof restorations and gutter upgrades, we deliver practical solutions for tile, metal and Colorbond roofs throughout the suburb and nearby areas including Telopea and Rydalmere.",
      "Our team focuses on thorough inspections, honest recommendations and reliable workmanship — giving you a roof system that handles extreme temperatures and heavy downpours without ongoing problems or unexpected failures.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repair work on Dundas suburban homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Dundas Properties",
    subheading: "Hot summers and seasonal storms create unique challenges for roofs in western Sydney suburbs.",
    paragraphs: [
      "Extreme heat causes tiles to crack, metal roofing to expand and fasteners to loosen over time. Combined with sudden summer storms, these conditions lead to leaks, rust and gutter overflow if maintenance is neglected.",
      "Many Dundas homes have older guttering systems that struggle with heavy rainfall — leading to water pooling, fascia rot and damp internal ceilings that only get worse without proper attention.",
      "We provide targeted repairs for cracked tiles, rusted valleys and blocked gutters, plus full restoration services when your roof needs comprehensive attention — keeping your home protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer K.",
    suburb: "Telopea",
    quote:
      "After years of minor leaks we finally called them in. They replaced damaged tiles, resealed the valleys and cleared years of gutter debris. The work was efficient and the roof has been perfect since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
