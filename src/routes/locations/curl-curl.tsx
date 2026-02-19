import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.768; // Curl Curl
const AREA_LON = 151.291;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Curl Curl",
  slug: "curl-curl",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Curl Curl Coastal Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CURL CURL",
    bullets: [
      "Coastal roofing repairs built for salt air and ocean winds",
      "Metal roof restoration, leak detection and tile repairs",
      "Guttering upgrades for beach weather and heavy downpours",
      "Fast quotes for homes near Curl Curl Beach and North Curl Curl",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering Services in Curl Curl",
    paragraphs: [
      "Curl Curl sits right on the Northern Beaches coastline, which means every roof is dealing with salt air, ocean winds and the kind of weather that accelerates corrosion and wear on metal roofing and flashings.",
      "Whether you have an older beachside cottage or a recently renovated home near the lagoon, we provide targeted roof repairs, metal roof restoration, Colorbond replacements and guttering work designed specifically for coastal environments.",
      "From North Curl Curl through to Greendale Creek, our team focuses on rust prevention, long-lasting seals and proper drainage to keep your roof watertight and ready for the next storm season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof restoration and repairs in Curl Curl",
  },

  problemsBlock: {
    heading: "Roofing and Gutter Issues We Fix in Curl Curl",
    subheading: "Salt spray and coastal winds mean faster rust, lifted tiles and blocked gutters full of sand and debris.",
    paragraphs: [
      "Living near the beach is fantastic until you notice rust blooms on your Colorbond roof, lifted ridge caps after a southerly, or gutters overflowing because sand and leaves have formed a solid blockage.",
      "Coastal conditions are tough on roofing materials. Metal roofs rust faster, sealants break down quicker, and even concrete tiles can crack from thermal cycling and wind-driven rain.",
      "We provide full coastal roof inspections, targeted leak repairs, rust treatment and protective coatings, gutter cleaning and replacement work designed to extend the life of your roof in this demanding environment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lauren K.",
    suburb: "Dee Why",
    quote:
      "Our metal roof was showing rust in multiple spots and we had leaks near the chimney after big storms. They treated the rust, resealed everything and replaced damaged sheets. No more leaks and the roof looks great again.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
