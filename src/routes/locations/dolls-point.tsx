import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.993; // Dolls Point
const AREA_LON = 151.144;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dolls Point",
  slug: "dolls-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Experts in Dolls Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DOLLS POINT",
    bullets: [
      "Specialist repairs for coastal salt air conditions",
      "Metal roof restoration, tile replacement and leak repairs",
      "Guttering upgrades to handle ocean winds and debris",
      "Trusted service across Dolls Point and surrounding bayside suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Dolls Point Homes",
    paragraphs: [
      "Dolls Point sits right on the shores of Botany Bay, where salt air and coastal winds put constant pressure on roof materials — especially metal roofing, flashing and exposed guttering systems.",
      "Homes in this bayside suburb often feature established architecture with tile or metal roofs that need regular inspection and targeted maintenance to prevent rust, corrosion and water ingress from ocean weather.",
      "We deliver roof repairs, restorations and gutter upgrades designed for coastal exposure — using durable materials and protective coatings that stand up to the marine environment while keeping your home watertight year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Dolls Point coastal homes",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Dolls Point",
    subheading: "Salt air accelerates corrosion on metal roofs and fixings — catching issues early saves major repairs down the track.",
    paragraphs: [
      "Coastal suburbs like Dolls Point see faster deterioration of metal roofing, ridge capping, valley irons and gutter systems due to constant exposure to salt spray and high humidity levels.",
      "If you notice rust spots on Colorbond or metal roofs, cracked or dislodged tiles, blocked downpipes, water stains on ceilings or gutters pulling away from fascia boards, it means your roof needs professional attention.",
      "We provide thorough inspections, targeted leak repairs, protective recoating for metal roofs and full gutter replacement where needed — all designed to extend roof life in demanding bayside conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Sans Souci",
    quote:
      "They replaced rusted sections on our Colorbond roof and recoated the entire surface. The difference is incredible — no more rust marks and everything sealed properly. Highly recommend for coastal homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
