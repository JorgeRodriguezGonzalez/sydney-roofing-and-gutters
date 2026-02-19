import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.812; // East Ryde
const AREA_LON = 151.137;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "East Ryde",
  slug: "east-ryde",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "East Ryde Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EAST RYDE",
    bullets: [
      "Expert roof repairs for tile and metal roofing",
      "Complete gutter cleaning and replacement services",
      "Storm damage repairs and leak detection",
      "Fast response times for all roofing work across East Ryde and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Homes in East Ryde",
    paragraphs: [
      "East Ryde homes range from established brick residences to modern townhouses, each requiring tailored roofing care to handle Sydney weather patterns. Whether dealing with aging tiles or contemporary metal systems, local roofs face challenges from intense summer heat and winter storms.",
      "Our team provides comprehensive roofing services including repairs, restoration work, gutter maintenance and full installations. We work with terracotta tiles, Colorbond steel, and concrete tile systems common throughout the area, ensuring every job meets Australian building standards.",
      "From initial inspection through to completion, we focus on clear communication and quality workmanship. Our local knowledge means faster response times and solutions designed specifically for East Ryde properties and their unique roofing requirements.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work on East Ryde residential property",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in East Ryde Homes",
    subheading: "Local weather patterns and aging roofing materials create specific challenges that require experienced attention and proper solutions.",
    paragraphs: [
      "Many East Ryde homes were built decades ago with tile roofs that now show cracking, slippage or broken sections. Add summer heat expansion and winter storms, and minor issues quickly escalate into water penetration and ceiling damage that costs far more to repair.",
      "Gutter systems face blockages from surrounding vegetation, leading to overflow during heavy rain. Rusted sections, poor fall angles and inadequate downpipe capacity mean water backs up instead of draining properly, threatening fascias and even internal walls.",
      "We tackle these problems with thorough inspections, targeted repairs and preventative maintenance plans. Whether replacing damaged tiles, re-bedding ridge caps, installing new guttering or fixing persistent leaks, our work is guaranteed for long-term performance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer L.",
    suburb: "West Ryde",
    quote:
      "Had recurring leaks every time it rained heavily. The team found cracked tiles and poor flashing. Fixed everything in one day and no more water issues since then.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
