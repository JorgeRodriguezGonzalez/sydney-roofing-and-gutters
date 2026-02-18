import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.718; // Kellyville
const AREA_LON = 150.955;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kellyville",
  slug: "kellyville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kellyville Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KELLYVILLE",
    bullets: [
      "Expert roof repairs and restorations for all roof types",
      "Gutter cleaning and replacement for storm-prone areas",
      "Fast leak detection and long-lasting waterproofing solutions",
      "Colorbond, tile and metal roofing installations for growing suburbs across Kellyville",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes Throughout Kellyville",
    paragraphs: [
      "Kellyville has grown rapidly over recent years, with a blend of established family homes and modern developments that require regular roof and gutter maintenance. The local climate brings intense summer heat and seasonal storms that can take a toll on roofing materials over time.",
      "Whether you need urgent leak repairs, complete roof restoration or new guttering to handle heavy rainfall, our team delivers quality workmanship designed to protect your home. We work with all common roofing materials including Colorbond steel, concrete tiles and metal sheeting.",
      "From initial inspection through to project completion, we keep communication clear and transparent. Our focus is on durable solutions that save you money in the long run and keep your property safe from water damage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work on a Kellyville residence",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Kellyville Homeowners",
    subheading: "Storm damage, aging materials and blocked gutters are the most frequent problems we see across the suburb.",
    paragraphs: [
      "After heavy rainfall or high winds, many homeowners discover leaks in ceilings, broken tiles or gutters overflowing with debris. Left unaddressed, these issues lead to water ingress, structural damage and expensive repairs down the track.",
      "Colorbond roofs can suffer from panel corrosion or poor installation, while tile roofs may crack under thermal stress or tree debris. Gutters blocked with leaves and sediment cause overflow that damages fascias, eaves and even foundations.",
      "Our service includes thorough inspections, targeted repairs and complete roof replacement where needed. We also offer gutter cleaning, resealing and realignment to ensure water flows correctly away from your home during the next big downpour.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Beaumont Hills",
    quote:
      "They identified the leak source within minutes and fixed everything the same week. The roof looks fantastic and we have had no more ceiling stains. Great communication and fair pricing throughout the job.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
