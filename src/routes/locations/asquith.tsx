import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.687; // Asquith
const AREA_LON = 151.107;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Asquith",
  slug: "asquith",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Asquith Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ASQUITH",
    bullets: [
      "Expert repairs for bushland roofs and heritage tiles",
      "Leak detection and waterproofing for storm-prone areas",
      "Gutter cleaning and replacement for heavy leaf fall",
      "Trusted service across Asquith and surrounding Upper North Shore suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Asquith Homes",
    paragraphs: [
      "Asquith sits on the edge of bushland with tree-lined streets and a mix of original character homes alongside modern builds. This beautiful setting means roofs face constant exposure to leaves, branches and storm weather.",
      "We work across all roof types common in the area — from terracotta and concrete tiles on older homes to Colorbond and metal systems on renovated properties. Our services include roof repairs, restoration, leak detection and full gutter upgrades.",
      "Whether you need urgent leak repairs after heavy rain or a complete roof restoration to protect your investment, we provide clear quotes, quality workmanship and reliable follow-up from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repairs in Asquith Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Asquith",
    subheading: "Bushland proximity and older homes create unique challenges for roofs and guttering systems.",
    paragraphs: [
      "Trees drop leaves, bark and branches year-round, filling gutters and valleys faster than most homeowners expect. Blocked downpipes cause water to back up under tiles or pool around eaves, leading to rot and interior damage.",
      "Older tile roofs may have cracked or slipped tiles that let water penetrate during storms, while metal roofs can rust or develop leaks at seams and flashings. These problems worsen quickly if left unchecked.",
      "We deliver thorough inspections, targeted repairs and preventative maintenance plans to keep your roof watertight and performing through every storm season. Fast response, quality materials and honest pricing every time.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Hornsby",
    quote:
      "After years of gutter problems from all the gum trees, they replaced our entire system and fixed the flashing around the chimney. Clean job, fair price and zero leaks since. Highly recommend them for the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
