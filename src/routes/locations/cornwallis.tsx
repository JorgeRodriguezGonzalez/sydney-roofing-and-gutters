import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.567; // Cornwallis
const AREA_LON = 150.823;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cornwallis",
  slug: "cornwallis",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cornwallis Rural Roofing & Gutter Solutions",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CORNWALLIS",
    bullets: [
      "Large property and rural roofing specialists",
      "Metal roof repairs, Colorbond replacements and storm damage",
      "Gutter systems designed for high rainfall zones",
      "Serving acreages, hobby farms and rural homes across Cornwallis and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roofing for Cornwallis Properties and Rural Homes",
    paragraphs: [
      "Cornwallis sits in a high rainfall zone near the Nepean River and Blue Mountains foothills, where properties often sit on larger blocks with metal and Colorbond roofing that takes the full brunt of weather exposure.",
      "Heavy downpours, strong winds and debris from surrounding bushland mean roofing systems work harder here than in suburban areas — and require regular maintenance to avoid leaks, rust and overflow.",
      "We specialize in rural and acreage roofing work, providing metal roof repairs, gutter upgrades, storm damage assessments and full roof replacements designed for high-performance water management and long-term durability.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Metal roof repairs and rural guttering in Cornwallis",
  },

  problemsBlock: {
    heading: "Roofing and Gutter Issues Common to Cornwallis Properties",
    subheading: "Larger roofs, higher rainfall and exposed sites create unique challenges for rural roofing systems.",
    paragraphs: [
      "Properties in Cornwallis often have wide roof spans, shallow pitches and older metal roofing that can develop rust spots, leaking fasteners and valley corrosion over time — especially in high-moisture conditions.",
      "Gutters become overwhelmed during heavy storms, leading to overflow at downpipes, pooling around fascias and water intrusion into sheds, garages or living areas if drainage capacity is undersized.",
      "We assess water flow, roof pitch and existing gutter design to identify weak points, then provide repairs or upgrades that handle the volume and keep your property dry year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Graham P.",
    suburb: "Wallacia",
    quote:
      "Our metal roof was leaking in three spots after storms. They came out, resealed fasteners, replaced corroded sections and upgraded our valley flashing. Rock solid work and no leaks since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
