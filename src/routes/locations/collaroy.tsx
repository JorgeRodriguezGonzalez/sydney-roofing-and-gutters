import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.735; // Collaroy
const AREA_LON = 151.300;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Collaroy",
  slug: "collaroy",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Northern Beaches Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "COLLAROY",
    bullets: [
      "Coastal roofing designed for salt air and ocean winds",
      "Roof repairs, restorations and full replacements",
      "Guttering upgrades for heavy coastal downpours",
      "Fast quotes for Collaroy, Collaroy Plateau and surrounding beach suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Services in Collaroy",
    paragraphs: [
      "Collaroy sits right on the Northern Beaches coastline, where salt air, ocean winds and constant exposure demand tougher roofing materials and regular maintenance. Homes here face unique challenges that inland properties rarely see.",
      "From beachfront properties on Collaroy Beach to elevated homes on the Plateau, we provide roof repairs, Colorbond installations, tile restorations and guttering work built to withstand coastal conditions and heavy summer storms.",
      "Our team works with corrosion-resistant materials like Colorbond steel, concrete tiles and metal roofing systems — delivering clean installations, long-lasting repairs and clear communication from site inspection to final handover.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof repairs and guttering in Collaroy",
  },

  problemsBlock: {
    heading: "Coastal Roofing & Gutter Problems We Fix in Collaroy",
    subheading: "Salt air accelerates rust and corrosion — especially on older gutters, flashings and roof fasteners.",
    paragraphs: [
      "Homes near the beach often experience rust staining, corroded screws, lifting ridge caps and flashing failures within a few years if cheaper materials or incorrect fixings were used during the original build or renovation.",
      "If you notice rust streaks down the walls, sagging gutters, cracked tiles, water marks on ceilings or overflowing downpipes during rain, those are early warning signs that should not be ignored.",
      "We provide targeted leak repairs, full gutter replacements, roof restorations and Colorbond upgrades — so your home stays protected against coastal weather year after year without constant patching and band-aid fixes.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen D.",
    suburb: "Dee Why",
    quote:
      "Our roof was only ten years old but already showing rust and lifted sections. They replaced the damaged areas with marine-grade fixings and resealed everything. No leaks since — highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
