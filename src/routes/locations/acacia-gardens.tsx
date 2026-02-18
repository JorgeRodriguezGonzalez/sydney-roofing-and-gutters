import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.737; // Acacia Gardens
const AREA_LON = 150.928;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Acacia Gardens",
  slug: "acacia-gardens",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Acacia Gardens Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ACACIA GARDENS",
    bullets: [
      "Expert roof repairs for modern homes and growing estates",
      "Full roof restorations including Colorbond and tile roofing",
      "Gutter cleaning, repairs and replacement services",
      "Fast response times with upfront pricing for the local area",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Acacia Gardens Residents",
    paragraphs: [
      "Acacia Gardens is a growing community with modern homes and diverse roof types, from Colorbond steel to concrete tiles. This mix means roof maintenance needs vary, and regular inspections help avoid expensive surprises down the track.",
      "Whether you need a quick leak repair, complete roof restoration or gutter system upgrade, we deliver practical solutions tailored to local weather patterns and building standards across the northwest suburbs.",
      "We pride ourselves on clean workmanship, honest communication and long-lasting results. From initial inspection through to final clean-up, our team treats every home with care and respect.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and installation in Acacia Gardens",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Acacia Gardens",
    subheading: "Newer homes can still develop roofing problems, especially when storms and heat cycles take their toll.",
    paragraphs: [
      "Modern estates often face issues like thermal expansion cracks in tiles, blocked valley gutters from construction dust, and poor initial flashing installation that leads to leaks around skylights or chimneys.",
      "Summer heat above 40 degrees can warp underlays and stress metal roofing, while sudden downpours reveal hidden gutter overflow points and inadequate drainage slopes that were missed during building handover.",
      "We diagnose the real cause of leaks, overflowing gutters and roof wear, then provide targeted repairs or full system upgrades to keep your home protected year-round without unnecessary costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Quakers Hill",
    quote:
      "Had a persistent leak that three other tradies could not fix properly. These guys found the flashing issue in minutes, repaired it cleanly and guaranteed the work. No more water stains, very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
