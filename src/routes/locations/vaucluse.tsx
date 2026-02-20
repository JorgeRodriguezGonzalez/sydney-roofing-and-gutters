import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.858; // Vaucluse
const AREA_LON = 151.272;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Vaucluse",
  slug: "vaucluse",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Premium Roofing Services for Vaucluse Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "VAUCLUSE",
    bullets: [
      "Coastal-grade roofing for salt air and ocean winds",
      "Expert repairs and restorations for prestige properties",
      "Premium Colorbond, tile and slate installations",
      "Specialist guttering solutions to protect waterfront and heritage homes",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Vaucluse Properties",
    paragraphs: [
      "Vaucluse homes face unique challenges from constant exposure to salt air, ocean winds and coastal weather patterns that accelerate wear on roofing materials and fixings.",
      "From Federation estates near South Head to modern architectural residences overlooking the harbour, we deliver roofing repairs, restorations and gutter upgrades tailored to premium properties with exacting standards.",
      "Our team works across Colorbond, concrete and terracotta tiles, slate and metal systems using marine-grade fixings and coatings designed to withstand the demanding coastal environment of the Eastern Suburbs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Premium roofing installations for Vaucluse waterfront properties",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in Coastal Vaucluse Properties",
    subheading: "Ocean winds and salt corrosion demand proactive maintenance to protect high-value roofing investments.",
    paragraphs: [
      "Salt air causes accelerated corrosion of metal roofing, gutters and flashings, particularly on properties with direct exposure to prevailing south-easterly winds from the Tasman Sea.",
      "Wind-driven rain can penetrate valleys, ridge caps and tile overlaps that appear intact but lack proper marine-grade sealing. Combined with UV exposure, this leads to premature failure of both roof coverings and underlying sarking.",
      "We provide thorough inspections using thermal imaging and moisture meters, then deliver targeted repairs or full restoration programs using corrosion-resistant fasteners, sealants and coatings proven in waterfront environments.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Rose Bay",
    quote:
      "Our heritage slate roof had multiple leaks after years of coastal exposure. The team replaced damaged sections, resealed valleys and upgraded all flashings with marine-grade materials. Outstanding craftsmanship and attention to detail throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
