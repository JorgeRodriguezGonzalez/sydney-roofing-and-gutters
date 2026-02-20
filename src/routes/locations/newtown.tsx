import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.897; // Newtown
const AREA_LON = 151.179;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Newtown",
  slug: "newtown",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roof and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NEWTOWN",
    bullets: [
      "Heritage terrace roof repairs and restorations",
      "Tile replacement and metal roof maintenance services",
      "Leak detection for older roofing systems",
      "Local team servicing Newtown, Enmore, Erskineville and surrounding suburbs with fast response times",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering in Newtown",
    paragraphs: [
      "Newtown is home to Victorian terrace houses, converted warehouses and mixed-use buildings where roof access can be tricky and older systems need careful attention to keep them watertight for years ahead.",
      "We work with tile roofs, metal roofing, slate sections and guttering configurations typical to the Inner West, handling repairs, restorations, leak fixes and preventative maintenance for residential and commercial properties along King Street and beyond.",
      "Whether you need a full roof restoration for a heritage terrace or a targeted repair after storm damage, our team provides clear quotes, quality workmanship and reliable follow-up from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair work on heritage terrace in Newtown",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Newtown Properties",
    subheading: "Older roofs and tight terrace layouts mean leaks and wear often go unnoticed until the damage spreads.",
    paragraphs: [
      "Terrace houses and older buildings in Newtown frequently have shared valleys, narrow gutters and ageing flashing that can fail during heavy rain, leading to ceiling stains, damp walls and structural concerns if not addressed early.",
      "Cracked or slipped tiles, rusted gutters, blocked downpipes and worn mortar around ridge capping are typical issues we see across the suburb, especially after storms or when maintenance has been deferred for too long.",
      "Our team provides thorough inspections, targeted repairs and full restoration services designed to protect your property, improve water flow and extend the lifespan of your roof without unnecessary replacement costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Sophie R.",
    suburb: "Enmore",
    quote:
      "Our terrace had a leak above the bedroom for months. They found the damaged flashing, replaced broken tiles and sealed everything properly. No more drips and the ceiling has stayed dry through recent storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
