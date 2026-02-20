import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.933; // Wolli Creek
const AREA_LON = 151.153;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wolli Creek",
  slug: "wolli-creek",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Wolli Creek Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WOLLI CREEK",
    bullets: [
      "High-rise and apartment complex roof inspections",
      "Leak detection and weatherproofing for modern developments",
      "Gutter replacement and strata roofing solutions",
      "Fast response across Wolli Creek, Tempe, Arncliffe and Banksia",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering for Wolli Creek Properties",
    paragraphs: [
      "Wolli Creek sits in a rapidly developing urban zone near the airport, with modern apartment towers, newer estates and high-density construction — all of which demand careful roof maintenance to prevent water ingress and structural issues.",
      "From residential townhouses to commercial strata buildings, we handle leak repairs, roof restorations, gutter upgrades and weatherproofing designed for the local climate (coastal winds, aviation zone exposure and heavy storm events).",
      "Our team works with Colorbond, metal cladding and membrane systems — delivering compliant installations, clear reporting for strata committees and long-term waterproof performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Modern roofing solutions for Wolli Creek apartments and homes",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Wolli Creek",
    subheading: "High-density living and newer construction often reveal installation flaws or premature wear under coastal conditions.",
    paragraphs: [
      "Modern buildings can still develop leaks if flashings, valleys or box gutters were not correctly installed during the initial build. Combined with coastal winds and airport exposure, even small gaps can lead to water damage.",
      "If you notice ceiling stains, pooling water on balconies, blocked downpipes, corroded gutter sections or dripping soffits after rain, it is time for a professional roof inspection.",
      "We provide targeted repairs, full gutter replacement, membrane re-sealing and compliance documentation for body corporate requirements — ensuring your building stays watertight and meets strata standards.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Tempe",
    quote:
      "Our building had recurring leaks from the box gutters. They came out, identified the faulty joints and re-sealed the entire system. Two years later, no issues. Excellent work for strata properties.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
