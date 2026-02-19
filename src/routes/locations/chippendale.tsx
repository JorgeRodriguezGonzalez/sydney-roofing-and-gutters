import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.884; // Chippendale
const AREA_LON = 151.200;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Chippendale",
  slug: "chippendale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner-City Roofing Specialists in Chippendale",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHIPPENDALE",
    bullets: [
      "Expert repairs for terrace roofs and heritage properties",
      "Metal and Colorbond installations for urban homes",
      "Fast leak detection and targeted waterproofing solutions",
      "Gutter clearing and replacement for high-density neighbourhoods near the CBD",
    ],
  },

  introBlock: {
    heading: "Local Roofing and Guttering Services in Chippendale",
    paragraphs: [
      "Chippendale combines Victorian terraces, converted warehouses and modern developments — each with unique roofing needs that require precise work and inner-city site access experience.",
      "From slate repairs on heritage homes to Colorbond installations on contemporary builds, we deliver reliable roofing, leak detection and guttering upgrades tailored to the compact urban environment.",
      "Our team understands tight laneways, shared walls and proximity challenges — ensuring every project is completed with minimal disruption and maximum attention to detail.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing work on terrace homes in Chippendale",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Chippendale",
    subheading: "Urban density and older building stock mean leaks, worn flashings and blocked gutters are frequent concerns.",
    paragraphs: [
      "Terrace roofs often share valleys and party walls — when one side develops leaks or damaged flashings, water can travel unpredictably and cause internal damage fast.",
      "Older gutters on Victorian and Edwardian properties frequently rust out or sag under debris load, especially when trees from neighbouring courtyards shed leaves and branches.",
      "We specialise in pinpoint repairs, flashing renewals, metal re-roofing and gutter upgrades designed for the space constraints and heritage character of inner-Sydney properties.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Redfern",
    quote:
      "Our terrace had a persistent leak that two other roofers failed to locate. These guys found the problem in the valley flashing and fixed it properly. No more water damage — highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
