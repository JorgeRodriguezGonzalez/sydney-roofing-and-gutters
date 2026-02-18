import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.669; // Annangrove
const AREA_LON = 150.952;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Annangrove",
  slug: "annangrove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Experts Servicing Annangrove Properties",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ANNANGROVE",
    bullets: [
      "Specialised service for acreage homes and rural properties",
      "Roof repairs, restorations and complete re-roofing",
      "Gutter maintenance to handle bushland debris",
      "Local team experienced with larger roof areas and native tree management",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Annangrove and Surrounds",
    paragraphs: [
      "Annangrove is unique for its semi-rural character, acreage lifestyle and proximity to bushland. Homes here often feature large roof areas, longer gutter runs and exposure to native tree debris that requires proactive maintenance.",
      "From Colorbond installations to tile repairs and slate work, we deliver roofing services suited to the demands of properties on larger blocks where access, scale and durability matter.",
      "Whether you need leak detection after heavy rain, gutter protection for leaf and bark build-up, or a complete roof restoration, our team works with precision and respect for your property.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing services for acreage homes in Annangrove",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges for Annangrove Acreage Homes",
    subheading: "Larger properties and bushland surroundings bring unique roofing maintenance demands that need regular attention.",
    paragraphs: [
      "Eucalyptus bark, gum leaves and seed pods can quickly overwhelm gutters and valleys, especially after storms or high winds. This leads to blockages, overflow and potential water damage if not addressed.",
      "Many acreage homes have steeper roof pitches, multiple roof lines and extended gutter systems that require careful inspection and cleaning to prevent sagging, rust and leaks.",
      "We offer targeted maintenance plans, gutter guard installations and full restoration services designed for the scale and conditions of rural residential properties in this area.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Glenhaven",
    quote:
      "Our property backs onto bushland and the gutters were constantly choked with bark. The team installed gutter protection and repaired damaged sections. No overflow since. Highly professional work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
