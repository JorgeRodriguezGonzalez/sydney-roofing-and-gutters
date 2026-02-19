import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.798; // Dundas Valley
const AREA_LON = 151.053;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dundas Valley",
  slug: "dundas-valley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Established Homes, Expert Roofing Solutions",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DUNDAS VALLEY",
    bullets: [
      "Specialist repairs for heritage and renovated properties",
      "Complete roof restorations on tile and Colorbond surfaces",
      "Leak detection and permanent waterproofing solutions",
      "Guttering replacement and valley maintenance for older homes across Dundas Valley",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Dundas Valley Homes",
    paragraphs: [
      "Dundas Valley features a blend of established homes and beautifully renovated properties, many with original terracotta tiles or Colorbond upgrades that require careful maintenance and periodic restoration work.",
      "Our team handles everything from minor leak repairs and valley re-flashing to complete roof restorations and gutter overhauls, ensuring every system is prepared for heavy rain and storm conditions typical of the Parramatta region.",
      "We work with tile, metal and Colorbond roofing materials, delivering clean installations, reliable repairs and transparent pricing from initial inspection through to final completion and clean-up.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work on established homes in Dundas Valley",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Dundas Valley",
    subheading: "Older roofs and established properties often show signs of wear that need expert attention before leaks develop.",
    paragraphs: [
      "Cracked or slipped tiles, rusted valleys, worn flashing and aging gutters are common in established suburbs like Dundas Valley. Left unaddressed, these issues lead to ceiling stains, water ingress and structural damage that costs far more to repair.",
      "We also see blocked valleys, sagging gutters and downpipe failures that cause overflow during heavy downpours, resulting in damp walls, eroded garden beds and potential foundation problems over time.",
      "Our service includes thorough roof inspections, targeted repairs and full restoration options designed to extend the life of your roof system, prevent leaks and protect your home investment for decades to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Ermington",
    quote:
      "They replaced all our damaged tiles and re-pointed the ridge caps. The roof looks brand new and we have had zero leaks since the work was completed. Highly professional service from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
