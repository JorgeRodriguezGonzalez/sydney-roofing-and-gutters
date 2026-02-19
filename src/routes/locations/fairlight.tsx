import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.797; // Fairlight
const AREA_LON = 151.276;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Fairlight",
  slug: "fairlight",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists in Fairlight",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FAIRLIGHT",
    bullets: [
      "Expert repairs for salt air and coastal wind damage",
      "Tile, Colorbond and metal roof restoration services",
      "Gutter cleaning and replacement for coastal homes",
      "Fast response for leak repairs and storm damage across Fairlight and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Fairlight Coastal Homes",
    paragraphs: [
      "Fairlight sits right on the coast between Manly and North Harbour, where ocean breezes and salt air put constant pressure on roofing materials. Without regular maintenance, metal roofs corrode and tiles crack under coastal exposure.",
      "We work across Fairlight providing roof repairs, restoration work and full gutter replacement for homes facing these unique coastal challenges. Our team understands how salt air accelerates wear on Colorbond, terracotta tiles and metal flashing.",
      "From heritage homes near the beach to modern renovations on the hillside, we deliver clean installations, reliable leak detection and long-lasting repairs that stand up to wind, salt and storm weather year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof restoration and repairs in Fairlight",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Fairlight Coastal Properties",
    subheading: "Salt air and ocean winds create specific challenges that inland suburbs never face — rust, corrosion and wind damage.",
    paragraphs: [
      "Metal roofs exposed to salt air develop rust spots and corroded flashing far faster than inland properties. Tiles crack from wind uplift and thermal expansion, while gutters fill with leaf debris and salt residue that accelerates decay.",
      "If you notice rust stains, damp ceiling patches, loose ridge capping, blocked downpipes or water pooling after heavy rain, these are signs your roof system needs professional attention before minor issues become major expenses.",
      "We provide thorough inspections, targeted repairs and complete restoration options tailored to coastal conditions — ensuring your Fairlight home stays protected from ocean weather, storms and the relentless effects of salt air exposure.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Balgowlae",
    quote:
      "Our metal roof was showing serious rust damage from the salt air. They replaced the corroded sections, resealed the flashing and cleaned the gutters thoroughly. The roof looks fantastic and we feel confident it will last for years.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
