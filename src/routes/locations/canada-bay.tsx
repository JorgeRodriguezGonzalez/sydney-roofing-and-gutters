import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.860; // Canada Bay
const AREA_LON = 151.117;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Canada Bay",
  slug: "canada-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Riverside Roofing Specialists for Canada Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CANADA BAY",
    bullets: [
      "Expert repairs for heritage tiles and modern Colorbond roofs",
      "Leak detection and waterproofing for riverside properties",
      "Complete gutter cleaning and replacement across the area",
      "Fast response times for storm damage repairs and emergency work",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Riverside Canada Bay Homes",
    paragraphs: [
      "Canada Bay combines beautiful riverside heritage homes with contemporary housing, creating diverse roofing needs that require experienced tradespeople who understand both older tile systems and modern metal installations.",
      "Proximity to the Parramatta River means roofs face increased moisture exposure, regular storms and seasonal weather changes that can accelerate wear on flashings, valleys and gutter systems if not properly maintained.",
      "We provide complete roof restoration, targeted leak repairs, Colorbond installations and thorough guttering services for all property types across Canada Bay, ensuring lasting protection and quality workmanship every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration work in Canada Bay",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Address Throughout Canada Bay",
    subheading: "Riverside locations and mature trees create unique challenges for roof and gutter systems.",
    paragraphs: [
      "Homes near the water often experience increased humidity and moisture that leads to rust in older metal valleys, deteriorating mortar in tile ridges and blocked downpipes from leaf debris accumulating faster than expected.",
      "Older heritage properties may have slate or terracotta tiles with cracked sections, failing flashings or inadequate waterproofing that allows water into roof cavities during heavy rain events.",
      "If you notice damp ceiling patches, rusted gutters, pooling water after storms or loose tiles, a thorough inspection can identify problems early and prevent more expensive structural damage down the track.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Drummoyne",
    quote:
      "Our heritage home had recurring leaks every winter. They replaced all the lead work, repointed the ridge and cleaned the box gutters properly. No issues since and the roof looks fantastic.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
