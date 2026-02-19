import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.659; // Galston
const AREA_LON = 151.048;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Galston",
  slug: "galston",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Galston Rural Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GALSTON",
    bullets: [
      "Tailored roofing for acreage and bushland properties",
      "Tile and Colorbond repairs for rural homes",
      "Guttering solutions for heavy debris and leaf buildup",
      "Fast response across Galston, Arcadia and Dural areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Galston Properties",
    paragraphs: [
      "Galston is a semi-rural suburb surrounded by bushland, larger blocks and acreage homes where roofs face unique challenges from falling branches, heavy leaf drop and storm exposure.",
      "Our team provides roof repairs, restorations and gutter upgrades for Colorbond, concrete tile and metal roofing systems common throughout the area, ensuring your home is protected from the elements year-round.",
      "We work across Galston and nearby Dural, Arcadia and Middle Dural, delivering reliable fixes, preventative maintenance and clear advice from initial inspection through to job completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter repairs in Galston",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Galston",
    subheading: "Bushland surroundings and larger roof areas mean more exposure to debris, storms and drainage stress.",
    paragraphs: [
      "Acreage properties often have long gutter runs, multiple valleys and complex roof pitches that collect leaves, bark and branches from overhanging eucalypts. Blocked gutters lead to overflow, rust and water pooling around foundations.",
      "Storm damage is another concern in this region, with high winds lifting ridge capping, cracking tiles or dislodging fasteners. Left unaddressed, minor damage quickly escalates into leaks and interior water damage.",
      "We provide thorough inspections, targeted repairs, gutter cleaning and full roof restoration services to keep rural homes watertight and safe through wet weather and bushfire season preparation.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen S.",
    suburb: "Dural",
    quote:
      "Our gutters were constantly blocked from the gum trees. They cleared everything, re-sealed valleys and replaced damaged sections. The difference after heavy rain has been incredible. Highly recommend their service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
