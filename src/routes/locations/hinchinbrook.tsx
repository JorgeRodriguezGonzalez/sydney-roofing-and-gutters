import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.924; // Hinchinbrook
const AREA_LON = 150.853;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hinchinbrook",
  slug: "hinchinbrook",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hinchinbrook Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HINCHINBROOK",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Fast leak detection and weatherproofing solutions",
      "Complete gutter cleaning and replacement services",
      "Local service across South-Western Sydney with upfront quotes and reliable workmanship",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Solutions for Hinchinbrook Homes",
    paragraphs: [
      "Hinchinbrook homes experience the full force of Western Sydney weather, from intense summer heat pushing past 40 degrees to heavy storm activity that tests every roof and gutter system across the suburb.",
      "We provide targeted roof repairs, leak detection, gutter replacement and complete restoration work designed specifically for local conditions, working with Colorbond metal roofing, concrete tiles and terracotta where required.",
      "Our team delivers clear communication, competitive quotes and clean professional installations from initial inspection through to final clean-up, ensuring your roof system performs reliably year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roof repairs and gutter installations in Hinchinbrook",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Hinchinbrook",
    subheading: "Western Sydney heat and storm cycles create unique challenges for residential roof systems throughout the area.",
    paragraphs: [
      "Extreme temperature swings cause metal roofing to expand and contract repeatedly, loosening screws and creating potential leak points, while older tile roofs can crack under thermal stress and heavy downpours.",
      "Blocked gutters, sagging sections and inadequate drainage are common problems after summer storms, leading to overflow damage, ceiling stains and water pooling around foundations if left unaddressed.",
      "We deliver fast assessments, permanent repairs and proactive maintenance to keep your roof watertight and functioning properly, whether you need a single valley replaced or a complete gutter upgrade.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Amanda K.",
    suburb: "Casula",
    quote:
      "Our Colorbond roof was leaking in two spots after the storms. They found the issue quickly, resealed everything properly and replaced damaged sections. Great service and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
