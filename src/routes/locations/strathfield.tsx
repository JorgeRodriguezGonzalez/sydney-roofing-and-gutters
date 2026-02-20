import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.879; // Strathfield
const AREA_LON = 151.093;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Strathfield",
  slug: "strathfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofers Serving Strathfield Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "STRATHFIELD",
    bullets: [
      "Complete roof repairs for heritage and modern homes",
      "Tile and metal roof restoration services",
      "Gutter repairs and replacement for established properties",
      "Fast response to storm damage and leak emergencies throughout Strathfield",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Strathfield Properties",
    paragraphs: [
      "Strathfield is home to a mix of heritage houses and modern developments where roof maintenance is essential for property protection. From mature tree coverage to seasonal storms, roofs in this area face consistent challenges.",
      "We provide professional roofing services across Strathfield including tile repairs, metal roof restoration, gutter cleaning and leak detection. Our work covers terracotta tiles, Colorbond roofing and slate where needed.",
      "Every inspection is thorough and every repair is completed with attention to detail. We work directly with homeowners to ensure your roof remains watertight and structurally sound through all weather conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Strathfield homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Strathfield",
    subheading: "Established suburbs with mature trees and older roof systems need regular attention to avoid costly damage.",
    paragraphs: [
      "Overhanging branches and leaf debris can clog gutters quickly, leading to overflow during heavy rain. Water pooling around eaves or staining on ceilings often signals blocked drainage or damaged flashings.",
      "Older terracotta tiles can crack or shift over time, while metal roofs may develop rust spots or loose fasteners. Small problems become major leaks if left unrepaired.",
      "We offer complete diagnostic inspections followed by targeted repairs or full restorations. Whether you need gutter replacement, tile work or valley sealing, we deliver long-lasting results that protect your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer W.",
    suburb: "Burwood",
    quote:
      "They arrived on time, found the source of the leak we had been dealing with for months, and repaired it efficiently. The roof looks great and no more water stains. Highly recommend their service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
