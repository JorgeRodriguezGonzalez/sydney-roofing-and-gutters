import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.837; // Huntleys Cove
const AREA_LON = 151.139;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Huntleys Cove",
  slug: "huntleys-cove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Huntleys Cove Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HUNTLEYS COVE",
    bullets: [
      "Riverside roof maintenance and leak prevention",
      "Tile, metal and Colorbond roofing repairs",
      "Guttering and downpipe upgrades for waterside homes",
      "Experienced with heritage and contemporary properties in riverside settings",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services in Huntleys Cove",
    paragraphs: [
      "Huntleys Cove is a quiet riverside enclave where mature properties and harbour views demand roofing systems that handle weather changes, moisture and the occasional storm with equal reliability.",
      "Our team services homes across this waterside suburb with roof repairs, gutter maintenance and restoration work suited to the mix of older-style residences and modern renovations common in the area.",
      "We work with tile, slate, Colorbond and metal roofs — delivering thorough inspections, quality repairs and solutions that protect your home from leaks, rust and water damage year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter repairs in riverside Huntleys Cove",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Huntleys Cove Properties",
    subheading: "Proximity to water and leafy surroundings create unique maintenance demands for roofs and gutters.",
    paragraphs: [
      "Riverside locations mean higher humidity, morning dew and more organic debris — all of which can contribute to gutter blockages, moss growth and accelerated wear on flashings and valley irons.",
      "Older homes in the area may have original tile or slate roofs that need re-bedding, while renovated properties often feature Colorbond or metal roofing that requires regular fastener checks and sealant maintenance.",
      "We address blocked valleys, rusted gutters, cracked tiles, ceiling stains and overflow problems — with repairs designed to last and maintenance schedules that prevent small issues from becoming expensive replacements.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Fiona L.",
    suburb: "Gladesville",
    quote:
      "They replaced sections of rusted valley iron and cleared years of leaf build-up. The roof looks great and we have had zero leaks since. Friendly, punctual and very thorough with the clean-up.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
