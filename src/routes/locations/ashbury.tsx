import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.900; // Ashbury
const AREA_LON = 151.123;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ashbury",
  slug: "ashbury",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Professional Roofing Services in Ashbury",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ASHBURY",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Leak detection and ceiling damage assessments",
      "Complete gutter cleaning and replacement services",
      "Trusted by homeowners across Ashbury and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Maintenance in Ashbury",
    paragraphs: [
      "Ashbury homes feature a mix of classic terracotta tile roofs and modern metal systems that need regular care to handle Sydney weather. From summer heat to autumn storms, your roof takes constant pressure and small problems grow fast if ignored.",
      "We service homes throughout Ashbury with roof repairs, restorations, leak fixes and complete gutter maintenance. Our team works with tile, Colorbond and older metal roofs, focusing on workmanship that lasts and clear pricing with no hidden fees.",
      "Whether you need a cracked tile replaced, blocked gutters cleared or a full roof inspection before the wet season, we deliver practical solutions backed by local experience and quality materials.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and gutter maintenance in Ashbury",
  },

  problemsBlock: {
    heading: "Common Roofing and Guttering Problems We Solve in Ashbury",
    subheading: "Older roofs and ageing gutter systems are common across Ashbury properties — leading to leaks and water damage.",
    paragraphs: [
      "Terracotta tiles crack over time, metal valleys rust through and gutter brackets fail — especially on homes built decades ago. Add blocked downpipes and leaf build-up, and you have overflow every time it rains.",
      "If you notice water stains on ceilings, sagging gutters, rust spots or tiles slipping out of place, the damage is already progressing. Waiting only makes the repair more expensive.",
      "We provide full roof inspections, targeted repairs and gutter system upgrades designed to keep water flowing away from your home. Fast turnaround, honest quotes and work that stands up to the next storm.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Canterbury",
    quote:
      "Had ongoing leaks after heavy rain and damaged plaster inside. They found the cracked valley and rusted flashing, fixed it properly and cleaned all the gutters. No issues since — very happy with the work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
