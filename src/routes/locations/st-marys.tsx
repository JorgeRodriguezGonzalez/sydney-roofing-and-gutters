import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.762; // St Marys
const AREA_LON = 150.773;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "St Marys",
  slug: "st-marys",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "St Marys Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ST MARYS",
    bullets: [
      "Expert roof repairs for extreme western Sydney heat",
      "Colorbond and tile roofing installations and restorations",
      "Gutter replacements to handle seasonal storms",
      "Local team servicing St Marys and surrounding western suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Solutions in St Marys",
    paragraphs: [
      "St Marys experiences some of the hottest days in Sydney, with temperatures regularly exceeding 40 degrees during summer — placing extra stress on roofing materials, seals and gutter systems that can lead to premature wear and unexpected failures.",
      "Whether you have an older home with terracotta tiles or a more modern Colorbond roof, our team provides targeted repairs, complete restorations and new installations designed to withstand the demanding western Sydney climate.",
      "We service residential and commercial properties across St Marys and nearby areas, offering straightforward quotes, reliable workmanship and solutions that protect your property from heat damage, leaks and storm-related issues.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for homes in St Marys",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for St Marys Properties",
    subheading: "Extreme heat and unpredictable storms put roofs under pressure — regular inspections prevent costly damage.",
    paragraphs: [
      "Intense summer heat causes expansion and contraction in roofing materials, which can crack tiles, loosen fixings and degrade sealants around flashings and valleys — all common entry points for water during unexpected downpours.",
      "Many homes in St Marys also face blocked gutters from dust, debris and seasonal leaf drop, leading to overflow, fascia rot and water pooling near foundations during heavy rain events.",
      "Our inspections identify heat stress, structural wear and drainage issues early, allowing us to deliver repairs or upgrades that keep your roof watertight and extend its lifespan under tough conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Amanda K.",
    suburb: "Werrington",
    quote:
      "After years of patching leaks, we finally had the whole roof restored. The team was punctual, tidy and explained everything clearly. No more water stains and the house feels cooler in summer.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
