import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.881; // Glebe
const AREA_LON = 151.186;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glebe",
  slug: "glebe",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Specialists in Glebe",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLEBE",
    bullets: [
      "Heritage roof repairs and slate restoration",
      "Victorian terrace roofing maintenance and leak fixes",
      "Colorbond and tile replacements for period homes",
      "Guttering upgrades for older properties across Glebe and Forest Lodge",
    ],
  },

  introBlock: {
    heading: "Expert Roof Repairs and Restoration for Glebe Properties",
    paragraphs: [
      "Glebe is home to Victorian terraces, Federation homes and heritage properties with roofing systems that need careful attention and specialist repair work to maintain their character and structural integrity.",
      "Many properties across Glebe, Forest Lodge and surrounding streets feature slate roofs, old terracotta tiles and original guttering that require experienced tradespeople who understand period construction and weatherproofing standards.",
      "We deliver roof repairs, restoration work and gutter replacements across all housing types in Glebe — combining traditional roofing methods with modern waterproofing and compliance to keep your property protected and looking its best.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration and repairs in Glebe",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Glebe",
    subheading: "Older homes and period architecture mean roofs and gutters often need specialist attention and targeted repairs.",
    paragraphs: [
      "Heritage properties in Glebe often experience cracked or slipped slate tiles, rusted valley irons, aged terracotta tiles and corroded cast iron or steel guttering that no longer drains properly or shows signs of leaking.",
      "Urban tree coverage, leaf build-up and limited roof access can make routine maintenance difficult, leading to blocked downpipes, water pooling, ceiling stains and gradual deterioration of flashing and roof penetrations.",
      "We provide detailed inspections, heritage-sensitive repairs, full roof restorations and modern gutter replacements — ensuring your Glebe property is watertight, compliant and ready for heavy rain without compromising its original character.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Annandale",
    quote:
      "Our Victorian terrace had multiple slate tiles cracked and the gutters were overflowing every storm. They replaced the damaged sections, resealed the valleys and upgraded the downpipes. Professional work and the roof looks fantastic.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
