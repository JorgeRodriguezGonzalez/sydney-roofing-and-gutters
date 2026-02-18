import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.738; // Blackett
const AREA_LON = 150.806;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Blackett",
  slug: "blackett",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Reliable Roofing Services for Blackett Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BLACKETT",
    bullets: [
      "Roof repairs and maintenance built for Western Sydney heat",
      "Metal and tile roof work across all property types",
      "Emergency leak repairs and storm damage response available",
      "Full roof restorations that extend lifespan and protect against extreme summer conditions",
    ],
  },

  introBlock: {
    heading: "Professional Roof Repairs and Guttering in Blackett",
    paragraphs: [
      "Blackett homes face the full force of Western Sydney weather — blistering summer heat that can exceed 40 degrees, intense UV exposure and sudden storm fronts that test every roof system. If your roof is showing signs of wear, early repairs prevent larger problems.",
      "We deliver practical roofing solutions across Blackett, working with Colorbond metal roofs and concrete tiles that dominate the local housing mix. From single missing tiles to full gutter replacement, our team handles jobs of all sizes with clear pricing and reliable workmanship.",
      "Our service covers leak detection, rust treatment, valley repairs, downpipe upgrades and complete roof restorations. Every project begins with a thorough inspection so you understand exactly what needs attention and why it matters for long-term protection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing team repairing tile roof in Western Sydney suburb",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix for Blackett Properties",
    subheading: "Extreme heat and occasional heavy downpours create wear patterns that demand proactive roof maintenance and timely repairs.",
    paragraphs: [
      "Metal roofs expand and contract in the Western Sydney heat cycle, which can loosen fasteners, crack sealants and accelerate rust formation around penetrations and ridge capping. Tile roofs suffer from cracked or broken tiles, deteriorating pointing and failing sarking that allows heat and moisture into roof cavities.",
      "Blocked gutters and undersized downpipes are common after storm events, leading to overflow, water entry through eaves and staining on exterior walls. Left unchecked, these issues cause timber rot, ceiling damage and mould growth that costs far more to remediate than the original repair.",
      "We identify problem areas early using thermal imaging and hands-on inspections, then deliver targeted solutions — whether that means resealing flashings, replacing damaged sections, upgrading drainage capacity or applying protective coatings that reflect heat and extend roof life in harsh conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Mount Druitt",
    quote:
      "Our metal roof was leaking badly near the ridge after the last storm. They came out quickly, found the problem and fixed it properly. No more drips and the price was fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
