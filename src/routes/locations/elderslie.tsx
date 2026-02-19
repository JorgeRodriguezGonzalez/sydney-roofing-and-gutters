import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.056; // Elderslie
const AREA_LON = 150.710;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Elderslie",
  slug: "elderslie",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Elderslie Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ELDERSLIE",
    bullets: [
      "Expert roof repairs for modern estates",
      "Colorbond installation, restoration and leak detection",
      "Complete guttering solutions for new builds",
      "Rapid service across Elderslie, Camden and Narellan area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Elderslie Homes",
    paragraphs: [
      "Elderslie is a thriving modern suburb with new estates and contemporary homes that require proper roofing maintenance from the start. Even newly built properties can develop issues as the structure settles and materials adjust to local weather patterns.",
      "The Macarthur region experiences hot summers, intense UV exposure and seasonal storms that test every roof system. From Colorbond metal to tile installations, we deliver repairs, restorations and new work designed to withstand these conditions.",
      "Our team provides thorough inspections, quality workmanship and honest advice for homeowners across Elderslie and surrounding suburbs. We work efficiently to protect your investment and keep your home weatherproof year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roofing repairs and installation in Elderslie",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Elderslie Properties",
    subheading: "New builds and modern estates can still develop roofing problems that need professional attention.",
    paragraphs: [
      "Even recently built homes can experience leaks around flashings, pooling water from inadequate drainage, or loose fixings as the structure settles. Construction debris in gutters and poor initial installation can cause early failures.",
      "Intense summer heat in the Macarthur area accelerates wear on roofing materials, while sudden downpours test gutter capacity and valley design. Ignoring these early warning signs leads to water damage and costly repairs later.",
      "We handle builder warranty follow-ups, preventative maintenance, leak detection and complete roof restorations. Our goal is to catch problems early and deliver long-term solutions that match local climate demands.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca L.",
    suburb: "Camden",
    quote:
      "Our roof was only three years old but had a persistent leak around the valley. They diagnosed the problem quickly, fixed the flashing properly and gave us peace of mind. Excellent service and communication.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
