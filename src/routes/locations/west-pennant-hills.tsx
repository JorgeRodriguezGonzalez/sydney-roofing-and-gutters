import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.748; // West Pennant Hills
const AREA_LON = 151.052;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "West Pennant Hills",
  slug: "west-pennant-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "West Pennant Hills Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WEST PENNANT HILLS",
    bullets: [
      "Expert care for established homes and heritage properties",
      "Tile and metal roof repairs tailored to local conditions",
      "Gutter cleaning and repairs for tree-heavy environments",
      "Comprehensive roof inspections with honest assessments and transparent pricing",
    ],
  },

  introBlock: {
    heading: "Quality Roofing and Guttering for West Pennant Hills Homes",
    paragraphs: [
      "West Pennant Hills is characterised by mature tree canopy, larger blocks and established homes that require regular roof maintenance. The combination of bushland surrounds and seasonal storms means gutters fill quickly and roof valleys need attention.",
      "We specialise in tile roof repairs, Colorbond installations and gutter system upgrades for properties across the suburb. Whether you need leak detection, valley repairs or full restoration work, our team provides clear communication and quality workmanship at every stage.",
      "From older terracotta tiles to modern metal roofing, we handle a wide range of materials and roof types. Our approach is honest, thorough and designed to extend the life of your roof without unnecessary upselling.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering services in West Pennant Hills",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in West Pennant Hills",
    subheading: "Tree cover and seasonal weather create unique challenges for roofs in this suburb.",
    paragraphs: [
      "The established tree canopy in West Pennant Hills means constant leaf litter, blocked downpipes and moss growth on shaded roof sections. These issues lead to water pooling, rust and eventual leaks if left unchecked.",
      "Many homes in the area feature tile roofs that have been in place for decades. Cracked tiles, dislodged ridges and deteriorated valley flashing are common problems that worsen during heavy rain or high winds.",
      "Our team provides targeted repairs, preventative maintenance and full restoration options. We clear blockages, replace damaged tiles, seal valleys and upgrade gutter systems to handle the volume of debris this suburb experiences year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca T.",
    suburb: "Pennant Hills",
    quote:
      "We had persistent leaks in the back bedroom every time it rained. The team found cracked tiles and faulty flashing within minutes. They fixed everything in one day and the roof has been perfect ever since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
