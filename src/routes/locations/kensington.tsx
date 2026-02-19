import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.914; // Kensington
const AREA_LON = 151.223;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kensington",
  slug: "kensington",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kensington Heritage Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KENSINGTON",
    bullets: [
      "Expert repairs for period terrace and Victorian homes",
      "Slate, tile and Colorbond roof restorations",
      "Gutter maintenance for heritage architecture",
      "Fast local service near UNSW, Randwick and Centennial Park",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing Solutions for Kensington and Surrounding Suburbs",
    paragraphs: [
      "Kensington combines leafy streetscapes with heritage architecture and modern apartment developments. Older homes feature intricate rooflines, slate and terracotta tiles that require careful attention, while newer construction demands reliable leak detection and weatherproofing.",
      "From terrace houses near Anzac Parade to the residential streets around Centennial Park, our team provides roof repairs, gutter cleaning, tile replacements and full restoration work tailored to local building styles and materials.",
      "We handle slate roofs, Colorbond installations, metal flashing repairs and gutter upgrades — delivering clean workmanship, transparent quotes and long-lasting solutions for every property type in Kensington.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and gutter services in Kensington homes",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Kensington",
    subheading: "Period homes and dense urban layouts often lead to unique drainage and weatherproofing challenges.",
    paragraphs: [
      "Heritage terraces and older buildings frequently suffer from cracked slate tiles, rusted metal valleys, blocked box gutters and inadequate flashing around chimneys and parapets. Small leaks can spread quickly through old timber framing if left unchecked.",
      "Newer properties face different problems — poor gutter grading, overflow during heavy rain, debris buildup from street trees and builder defects that only appear after the first storm season.",
      "Whether you have damp ceilings, missing tiles, overflowing gutters or visible rust, we provide targeted inspections, preventative maintenance and full restoration services to keep your roof watertight year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Randwick",
    quote:
      "They replaced cracked slate tiles and repaired the flashing on our Victorian terrace. No more leaks in the upstairs bedroom. Very respectful of the original details and finished on time.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
