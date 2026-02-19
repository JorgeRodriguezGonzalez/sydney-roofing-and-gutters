import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.901; // Erskineville
const AREA_LON = 151.186;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Erskineville",
  slug: "erskineville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner-City Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ERSKINEVILLE",
    bullets: [
      "Heritage roof repairs for terraces and cottages",
      "Slate, tile and metal roof restoration",
      "Gutter upgrades and leak detection services",
      "Fast response across Erskineville and surrounding inner suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Solutions for Erskineville Homes",
    paragraphs: [
      "Erskineville is home to rows of beautiful Victorian and Federation-era terraces — many with original slate roofs, shared party walls and tight laneway access that require careful, experienced tradespeople.",
      "From heritage cottage restorations to terrace roof repairs, we specialise in working with older inner-city properties where precision, respect for original materials and minimal disruption matter most.",
      "Our team handles slate repairs, tile replacements, valley re-lining, gutter replacements and leak detection — delivering high-quality work that protects the character and integrity of your heritage home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage terrace roof repairs in Erskineville",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Erskineville Properties",
    subheading: "Older homes in tightly packed streets face unique challenges — from cracked slate to shared gutter systems.",
    paragraphs: [
      "Slate roofs are stunning but brittle with age. Cracked or slipped slates, rusted nails and deteriorating valleys are common in terraces built over a century ago. Water intrusion can damage ceilings, timber frames and interior walls fast.",
      "Narrow laneways and shared gutters mean debris, overflow and poor drainage often go unnoticed until leaks appear. Box gutters between terraces are especially vulnerable to blockages and rust-through if not maintained properly.",
      "We provide heritage-sensitive repairs, re-bedding and re-pointing, valley replacements and modern gutter solutions that respect the original design while improving water management and longevity.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emily R.",
    suburb: "Newtown",
    quote:
      "Our Victorian terrace had water coming through the ceiling after every storm. The team replaced the valley and repaired the slates without disturbing the neighbours. Really impressed with the care and professionalism.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
