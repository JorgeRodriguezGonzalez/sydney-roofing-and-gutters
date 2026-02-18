import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.795; // Balgowlah
const AREA_LON = 151.261;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Balgowlah",
  slug: "balgowlah",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists Serving Balgowlah",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BALGOWLAH",
    bullets: [
      "Expert repairs for coastal weather exposure",
      "Colorbond and tile roofing for salt air resilience",
      "Gutter cleaning and overflow solutions",
      "Leak detection and restoration for established homes across Balgowlah and surrounds",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering for Balgowlah Homes",
    paragraphs: [
      "Balgowlah sits close to the coast, where ocean winds, salt air and driving rain can accelerate wear on roofs and gutters. Regular maintenance and quality materials make all the difference here.",
      "We work with local residents across Balgowlah, providing roof repairs, leak detection, Colorbond installations and complete gutter upgrades designed to withstand coastal conditions year-round.",
      "Whether your home has terracotta tiles, metal sheeting or slate, our team delivers careful inspections, honest advice and durable repairs that protect your property from water damage and rust.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing team working on coastal property in Balgowlah",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Balgowlah",
    subheading: "Coastal suburbs face unique challenges — salt corrosion, wind-driven rain and fast-moving storms all take their toll.",
    paragraphs: [
      "Salt air causes rust spots on older guttering and fasteners, while strong winds can lift flashing, dislodge ridge caps and push water into weak points around chimneys and valleys.",
      "Many Balgowlah homes have established roof systems that need targeted repairs or restoration to stay watertight. Ignoring small rust patches or loose tiles now often leads to ceiling leaks and timber damage later.",
      "We provide thorough roof inspections, replace corroded sections, restore faded or damaged Colorbond, and install gutter guard where needed — so your roof performs reliably through every coastal storm season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma H.",
    suburb: "Seaforth",
    quote:
      "Our roof had rust developing along the ridge and gutters were overflowing. They replaced all the damaged sections and treated the rust properly. Great work and no mess left behind.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
