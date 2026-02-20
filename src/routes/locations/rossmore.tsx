import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.933; // Rossmore
const AREA_LON = 150.790;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Rossmore",
  slug: "rossmore",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rossmore Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ROSSMORE",
    bullets: [
      "Roof repairs for growing western Sydney communities",
      "Metal roofing and Colorbond installations for new builds",
      "Gutter upgrades built for heat and summer storms",
      "Fast quotes and inspections across Rossmore, Leppington and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Rossmore and Surrounding Suburbs",
    paragraphs: [
      "Rossmore sits in the growing southwest of Sydney, where new homes and acreage properties face the full force of western heat and seasonal storm systems that demand reliable roofing systems.",
      "With temperatures regularly hitting 40 degrees in summer and sudden downpours testing every gutter and valley, your roof needs to be built and maintained to handle extremes without leaking or warping.",
      "We specialise in metal roof installations, Colorbond repairs, tile replacements and complete guttering solutions designed for the conditions found in Rossmore, Leppington, Austral and the surrounding region.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Metal roofing and gutter repairs in Rossmore",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Rossmore Properties",
    subheading: "Heat expansion, storm damage and construction dust can all compromise roofs in developing areas like Rossmore.",
    paragraphs: [
      "Metal roofs expand and contract with extreme temperature swings, leading to loose screws, lifted flashings and vulnerable seams that allow water entry during heavy rain.",
      "Newer homes may also experience issues with inadequate gutter capacity, builder shortcuts or dust and debris settling into valleys and downpipes before landscaping is finished.",
      "Whether you need a complete roof inspection, targeted leak repairs, gutter cleaning or a full Colorbond restoration, we provide solutions that protect your investment and suit the local climate.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Aaron P.",
    suburb: "Leppington",
    quote:
      "Our metal roof was lifting at the edges after summer heat. They re-secured everything, checked the flashings and gave us a full condition report. Great service, fair price and no leaks since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
