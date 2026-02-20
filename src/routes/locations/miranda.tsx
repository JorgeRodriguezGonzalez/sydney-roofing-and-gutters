import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.034; // Miranda
const AREA_LON = 151.103;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Miranda",
  slug: "miranda",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Trusted Roofing Solutions Across Miranda",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MIRANDA",
    bullets: [
      "Complete repairs for tile, Colorbond and metal roofing systems",
      "Gutter cleaning and replacement to handle coastal weather",
      "Leak detection and restoration for older housing stock",
      "Professional service across Miranda and the Sutherland Shire with fast response times",
    ],
  },

  introBlock: {
    heading: "Expert Roof Repairs and Guttering in Miranda",
    paragraphs: [
      "Miranda combines established residential streets with busy commercial zones, and the housing stock reflects decades of Sydney building styles. From older tile roofs to more recent Colorbond installations, each system requires tailored care to handle local conditions.",
      "Proximity to the coast means salt air, afternoon winds and year-round exposure that can accelerate rust, corrosion and wear on gutters, flashings and roof sheets. Regular inspections catch small issues before they escalate into expensive damage.",
      "We deliver roof repairs, restorations, gutter upgrades and leak fixes across Miranda and the wider Sutherland Shire. Our approach focuses on lasting results, clean workmanship and transparent communication at every stage of the project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering services in Miranda",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Miranda",
    subheading: "Coastal winds, mixed housing ages and unpredictable weather create specific challenges for roofs in this area.",
    paragraphs: [
      "Older tile roofs often develop cracked or slipped tiles after storms, while metal roofs closer to the coast show rust spots, worn valleys and corroded flashings from salt exposure. Both issues can lead to slow leaks that damage ceilings and insulation over time.",
      "Gutters on homes near bushland or mature trees frequently clog with leaves and debris, causing overflow during heavy rain. Sagging gutter sections, broken brackets and blocked downpipes compound the problem, especially on multi-level homes.",
      "We provide targeted repairs, full restorations, preventative maintenance and gutter system upgrades. Whether you need a quick leak fix or a complete roof overhaul, we tailor the solution to your property and budget.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca T.",
    suburb: "Caringbah",
    quote:
      "They repaired three cracked tiles and replaced rusted valley iron after spotting early signs of leaks. Quick turnaround, fair pricing and the roof has been perfect through the last few storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
