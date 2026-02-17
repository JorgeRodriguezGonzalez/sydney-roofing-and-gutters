import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.884; // Paddington
const AREA_LON = 151.226;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Paddington",
  slug: "paddington",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Paddington Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PADDINGTON",
    bullets: [
      "Heritage terrace roof maintenance and restoration",
      "Slate, tile and metal roof repairs",
      "Gutter replacements for older properties",
      "Fast quotes across Paddington, Woollahra & Darlinghurst",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing & Guttering Services in Paddington",
    paragraphs: [
      "Paddington is defined by its Victorian terraces, iron lacework and narrow streetscapes — roofing here demands precision, heritage awareness and materials that match the character of each property.",
      "From Paddington and Woollahra to Darlinghurst and Surry Hills, we handle roof repairs, slate restoration and complete gutter replacements designed for the tight access and ageing structures common in the area.",
      "Our team works with slate, terracotta tiles and Colorbond where appropriate — delivering careful workmanship, honest assessments and results that protect both the roof and the heritage value of your home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering in Paddington",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Problems We Fix in Paddington",
    subheading: "Ageing slate roofs and narrow gutters on heritage terraces need regular attention to prevent costly damage.",
    paragraphs: [
      "Victorian-era roofs in Paddington are prone to cracked slate, deteriorating flashing and mortar erosion around ridge caps. Without timely repairs, water finds its way into ceilings and wall cavities.",
      "Narrow box gutters between adjoining terraces are a common weak point — they collect debris quickly and overflow during heavy rain, causing staining, damp and structural concerns if left unchecked.",
      "We provide targeted slate repairs, full gutter replacements and preventative maintenance plans so your Paddington property stays watertight without compromising its original character.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Woollahra",
    quote:
      "They replaced the old box gutters on our terrace and repaired several cracked slates. The whole job was done in two days with zero mess left behind — really impressed.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
