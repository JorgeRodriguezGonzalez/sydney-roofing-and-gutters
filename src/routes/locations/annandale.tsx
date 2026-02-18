import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.882; // Annandale
const AREA_LON = 151.170;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Annandale",
  slug: "annandale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Experts in Annandale",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ANNANDALE",
    bullets: [
      "Specialist repairs for period and heritage properties",
      "Terrace roofing, slate work and tile restoration",
      "Guttering upgrades for sandstone and brick homes",
      "Expert inspections across Annandale and the Inner West with heritage sensitivity",
    ],
  },

  introBlock: {
    heading: "Local Roofing and Guttering Specialists for Annandale Homes",
    paragraphs: [
      "Annandale is one of the Inner West suburbs where heritage meets modern living — Victorian terraces, Federation homes and period properties define the streetscape, and many roofs reflect that history.",
      "From slate repairs and terrace valleys to tile replacement and metal gutter upgrades, we work with care on both older homes and contemporary builds where craftsmanship and durability matter.",
      "Our team understands the needs of period roofing systems — proper flashing, matching materials, water management on shared walls — and delivers clean work that respects the architecture without compromising weather performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof repairs and slate work in Annandale",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Annandale",
    subheading: "Heritage properties and terrace homes often share unique challenges — aging materials, narrow access and shared parapets.",
    paragraphs: [
      "Older slate roofs can crack or lift, terrace valleys may fail where two homes meet, and original guttering systems may not handle the volume of today storms — especially when downpipes are undersized or blocked.",
      "If you see damp patches on ceilings, rust staining on brickwork, cracked or missing tiles, or water pooling after rain, it is time for a proper inspection before damage spreads.",
      "We offer targeted repairs, full restorations and modern upgrades designed to work with heritage homes — from valley re-lining and flashing renewal to gutter replacement and emergency leak repairs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Leichhardt",
    quote:
      "Our terrace had a leaking valley that water was coming through the bedroom wall. They rebuilt the valley properly, matched the tiles and everything has been dry since. Really careful work and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
