import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.872; // Elizabeth Bay
const AREA_LON = 151.228;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Elizabeth Bay",
  slug: "elizabeth-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Harbour-Side Roofing Specialists for Elizabeth Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ELIZABETH BAY",
    bullets: [
      "Heritage roofing for Art Deco apartments and period buildings",
      "Salt air protection, leak repairs and waterproofing solutions",
      "Metal roofing, tile repairs and guttering upgrades",
      "Fast response for high-density residential properties across the bay",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Elizabeth Bay Properties",
    paragraphs: [
      "Elizabeth Bay is home to elegant Art Deco apartments, heritage buildings and modern residential towers — all facing the challenges of harbour exposure, salt air and ageing roof systems that require specialist attention.",
      "We deliver roofing repairs, restorations and leak detection services tailored to coastal conditions, working with metal roofs, terracotta tiles and flat membrane systems common in older multi-storey buildings near the water.",
      "Our team understands the importance of protecting heritage features while ensuring long-term weather resistance, offering clear quotes, tidy execution and reliable follow-up for strata properties and private homes alike.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs for Elizabeth Bay harbour-side homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Elizabeth Bay",
    subheading: "Salt air, harbour winds and ageing building stock create unique demands on roofs and guttering systems.",
    paragraphs: [
      "Coastal exposure accelerates rust and corrosion on metal roofs, flashings and gutters, while older buildings often have inadequate waterproofing, leading to leaks during heavy rain or storm surges from the harbour.",
      "Blocked valleys, cracked tiles, failed membrane seals and rusted downpipes are common problems in high-density areas where roof access can be difficult and maintenance often gets deferred until leaks appear inside.",
      "We provide targeted inspections, leak detection, rust treatment and full restoration services — ensuring your roof stays watertight and compliant, whether you are managing strata property or a private residence by the bay.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Anna P.",
    suburb: "Potts Point",
    quote:
      "Our Art Deco apartment had recurring leaks every storm. They identified failed flashings, replaced corroded sections and resealed the valleys. No more water damage — excellent workmanship and very respectful of the building heritage.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
