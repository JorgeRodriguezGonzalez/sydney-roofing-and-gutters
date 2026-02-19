import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.544; // Brooklyn
const AREA_LON = 151.224;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Brooklyn",
  slug: "brooklyn",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Riverside Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BROOKLYN",
    bullets: [
      "Roofing solutions for waterfront and riverside properties",
      "Humidity-resistant repairs and Colorbond installations",
      "Gutter cleaning and overflow prevention for river conditions",
      "Fast response times for Brooklyn and surrounding Hawkesbury communities",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Brooklyn Riverside Homes",
    paragraphs: [
      "Brooklyn sits on the edge of the Hawkesbury River with unique roofing challenges — high humidity, coastal air and marine conditions that can accelerate rust and wear on unprepared roof systems.",
      "From riverside cottages and elevated homes to houseboat access properties, we deliver roof repairs, restorations and gutter upgrades designed to handle the moisture-heavy environment of the Hawkesbury region.",
      "We work with Colorbond, metal and tiled roofs — providing clean installation, targeted leak repairs and maintenance that extends the life of your roof in humid river conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering services for riverside homes in Brooklyn",
  },

  problemsBlock: {
    heading: "Common Roofing Issues for Brooklyn Riverside Properties",
    subheading: "Humidity and marine exposure can cause rust, corrosion and faster deterioration in coastal and riverside areas.",
    paragraphs: [
      "Homes near the Hawkesbury are exposed to constant moisture, salt spray and temperature fluctuations that can damage gutters, flashings and roof fasteners over time if the right materials are not used.",
      "Blocked gutters from surrounding bushland combined with heavy rain can lead to overflow and water damage. Rust spots on older Colorbond or metal roofs can spread quickly if left untreated.",
      "We offer rust treatment, gutter replacement, flashing upgrades and full roof restorations designed for the demanding conditions of riverside living in Brooklyn and the Hawkesbury.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Peter R.",
    suburb: "Mooney Mooney",
    quote:
      "Our roof had rust patches from the river air and blocked gutters from overhanging trees. They cleaned, treated the rust and replaced damaged sections. The roof looks great and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
