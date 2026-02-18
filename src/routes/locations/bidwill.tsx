import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.730; // Bidwill
const AREA_LON = 150.816;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bidwill",
  slug: "bidwill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services Throughout Bidwill",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BIDWILL",
    bullets: [
      "Colorbond and metal roofing built for Western Sydney conditions",
      "Emergency leak repairs and storm damage restoration",
      "Gutter replacement and cleaning for rapid water flow",
      "Fast response times and upfront quotes for Bidwill homes",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering for Bidwill Residents",
    paragraphs: [
      "Bidwill is an established Western Sydney suburb where extreme summer heat, seasonal storms and everyday wear can take a serious toll on roof systems — especially on older tile and metal roofs.",
      "Whether you need emergency leak repairs, complete roof restoration, Colorbond replacement or gutter upgrades to handle sudden downpours, we provide transparent quotes and quality workmanship tailored to local conditions.",
      "Our team works across tile, Colorbond and metal roofing systems, delivering long-lasting repairs, preventive maintenance and clear timelines that help Bidwill homeowners avoid costly water damage and structural issues.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and restoration in Bidwill",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Problems We Solve in Bidwill",
    subheading: "Western Sydney heat and summer storms put serious stress on roofing systems, especially older installations.",
    paragraphs: [
      "Extreme temperatures can cause Colorbond panels to expand and contract, leading to loose fasteners, cracked sealant and eventually leaks. Older tile roofs may crack or slip, letting water penetrate into ceiling spaces.",
      "Blocked gutters and undersized downpipes often overflow during heavy rain, causing fascia rot, water stains and structural damage that goes unnoticed until it becomes expensive to fix.",
      "We carry out detailed inspections to identify weak points before they fail, offering targeted repairs, full restorations or modern Colorbond replacements that perform reliably in Western Sydney conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Amanda P.",
    suburb: "Mount Druitt",
    quote:
      "Our roof was leaking badly after a storm and we needed help fast. They came out the same week, fixed the damaged area and replaced rusted sections. Very happy with the quality and price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
