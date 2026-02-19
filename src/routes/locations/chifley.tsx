import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.970; // Chifley
const AREA_LON = 151.237;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Chifley",
  slug: "chifley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Chifley Coastal Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHIFLEY",
    bullets: [
      "Salt-resistant roofing solutions for coastal exposure",
      "Leak detection, tile repairs and metal roof restoration",
      "Guttering systems built to handle coastal wind and rain",
      "Fast local service between Maroubra and La Perouse",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Coastal Homes in Chifley",
    paragraphs: [
      "Chifley sits in the heart of the Eastern Suburbs, only minutes from Maroubra Beach and Little Bay. The coastal location brings ocean views and strong winds, along with year-round exposure to salt air that puts extra pressure on roofing materials.",
      "We provide roof repairs, leak detection, tile replacements and metal roof restoration across Chifley and nearby suburbs. Whether you have an older terracotta roof or a modern Colorbond installation, we tailor our approach to the demands of coastal living.",
      "Our team focuses on durable materials, corrosion-resistant fastenings and thorough inspections to make sure your roof handles salty winds, heavy downpours and everything in between.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and leak repairs in Chifley",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Coastal Chifley",
    subheading: "Living near the ocean means constant exposure to wind-driven rain, salt mist and rapid corrosion.",
    paragraphs: [
      "Many homes in Chifley deal with rust spots, flaking paint and early deterioration of roof screws and flashings. Salt-laden winds accelerate wear on metal roofs and gutters, especially on homes facing east or north toward the water.",
      "We also see blocked valleys from windblown debris, cracked or slipped tiles after storms, and leaks around skylights and ridge caps. These issues get worse fast if left unattended, particularly during spring and autumn rain.",
      "Our coastal roofing service includes rust treatment, full restoration with marine-grade coatings, gutter replacement with improved fall, and proactive inspections to catch small problems before they require major work.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa P.",
    suburb: "Maroubra",
    quote:
      "Our metal roof was rusting badly from the salt air. They stripped, treated and re-coated the whole thing in two days. Looks brand new and the warranty gives us real peace of mind.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
