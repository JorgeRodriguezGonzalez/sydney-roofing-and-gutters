import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.595; // Maraylya
const AREA_LON = 150.934;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Maraylya",
  slug: "maraylya",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Acreage Roofing Specialists for Maraylya Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MARAYLYA",
    bullets: [
      "Roof inspections for larger rural properties",
      "Metal and tile roof repairs built for western Sydney heat",
      "Gutter maintenance for bushfire-prone areas",
      "Quality workmanship across the Hawkesbury region with reliable turnaround times",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Maraylya and Surrounding Acreages",
    paragraphs: [
      "Maraylya is home to larger acreage properties and spacious homes that require careful attention when it comes to roofing. Bigger roofs mean more exposure to western Sydney heat, seasonal storms and bushfire ember attack risk.",
      "We provide comprehensive roof repairs, metal roof restorations, tile maintenance and gutter upgrades designed for rural and semi-rural conditions. Whether your roof is Colorbond, corrugated iron or terracotta tiles, we match the system to local climate demands.",
      "From initial inspection to final sign-off, our team delivers clear communication, honest quotes and long-lasting results — keeping your home watertight and protected through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for acreage properties in Maraylya",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Maraylya Acreages",
    subheading: "Larger properties face unique challenges — from heat expansion to ember guard compliance and blocked valleys.",
    paragraphs: [
      "Metal roofs in western Sydney heat can expand, shift and develop leaks at fastener points or ridge capping. Tiles can crack from storms, wildlife and falling branches. Both need regular maintenance to avoid costly interior damage.",
      "Gutters on rural homes often collect leaf litter, seed pods and debris from surrounding bushland. Blocked downpipes lead to overflow, rust and potential foundation issues during heavy rain events.",
      "We handle leak detection, flashing repairs, full metal roof reseals, tile replacement and gutter cleaning — with extra attention to ember guard upgrades and fire-rated access points where required.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Glenorie",
    quote:
      "Our metal roof was leaking in three places after last summer. They resealed the entire roof, upgraded the ridge capping and cleared all the gutters. Professional service and no issues since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
