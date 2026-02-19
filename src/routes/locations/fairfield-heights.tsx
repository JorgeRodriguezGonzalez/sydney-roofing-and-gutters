import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.862; // Fairfield Heights
const AREA_LON = 150.941;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Fairfield Heights",
  slug: "fairfield-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Fairfield Heights Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FAIRFIELD HEIGHTS",
    bullets: [
      "Expert roof repairs for Western Sydney conditions",
      "Tile, metal and Colorbond roof restoration",
      "Gutter cleaning and downpipe upgrades",
      "Fast turnaround across Fairfield Heights and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Fairfield Heights Homes",
    paragraphs: [
      "Fairfield Heights has a mix of established brick homes and older housing stock that need dependable roofing maintenance to handle the Western Sydney climate. Summer heat above 40 degrees and sudden storm activity can take a toll on older tile and metal roofs.",
      "We provide roof repairs, full restorations and guttering services designed for local conditions — addressing rust spots, cracked tiles, blocked valleys and worn flashing before they turn into major leaks.",
      "Whether you need a targeted repair, complete re-roofing or gutter replacement, our team delivers honest advice, quality materials and workmanship that lasts through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration in Fairfield Heights",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Fairfield Heights",
    subheading: "Extreme heat and storm activity can expose weaknesses in older roofing systems across Western Sydney.",
    paragraphs: [
      "Terracotta and concrete tiles expand and contract in hot weather, leading to cracks and broken clips. Metal roofs rust faster in humid conditions, especially where gutters overflow or downpipes are undersized.",
      "Blocked valleys, sagging gutters and deteriorated flashing are common problems we see in Fairfield Heights — all of which can cause ceiling leaks, water stains and damage to timber framing if left unchecked.",
      "Our process includes a full roof inspection, clear documentation of any damage and practical repair options that fit your budget and protect your home for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul G.",
    suburb: "Fairfield",
    quote:
      "Our roof was leaking in two spots after a big storm. The team came out quickly, found the damaged tiles and replaced them the same week. No fuss, fair price and the roof has been dry ever since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
