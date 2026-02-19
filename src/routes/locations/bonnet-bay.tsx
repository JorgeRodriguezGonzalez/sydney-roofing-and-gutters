import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.025; // Bonnet Bay
const AREA_LON = 151.048;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bonnet Bay",
  slug: "bonnet-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bonnet Bay Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BONNET BAY",
    bullets: [
      "Expert repairs for tile and Colorbond roofs",
      "Guttering and downpipe services for heavy rain",
      "Leak detection and roof restoration",
      "Professional service for homes near the Georges River and bushland",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Bonnet Bay Homes",
    paragraphs: [
      "Bonnet Bay is a peaceful suburb surrounded by natural bushland and the Georges River, which creates a unique environment for local roofs. Heavy tree coverage means gutters fill quickly with leaves and debris, while seasonal rain can expose weak points in older tile and Colorbond systems.",
      "Our team provides roof repairs, restoration work and complete gutter maintenance designed specifically for homes in this established residential area. We work with terracotta tile, concrete tile and metal roofing, ensuring each repair is built to last through wet weather and dry summers.",
      "From leak detection and flashing repairs to full roof cleaning and valley replacements, we deliver honest assessments, reliable workmanship and clear pricing for every job across Bonnet Bay and surrounding suburbs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in Bonnet Bay",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Bonnet Bay",
    subheading: "Proximity to bushland and the Georges River brings unique challenges for roof and gutter systems.",
    paragraphs: [
      "Tree coverage around homes in Bonnet Bay means gutters and valleys often become blocked with leaves, seed pods and organic debris. When gutters overflow during heavy rain, water can damage fascia, eaves and even internal ceilings if left unchecked.",
      "Older tile roofs can suffer from cracked or slipped tiles after storms, while Colorbond systems may develop rust spots or loose ridge capping over time. Flashing around chimneys and skylights is another common leak source, especially in homes built several decades ago.",
      "We provide thorough roof and gutter inspections, targeted repairs and preventative maintenance plans to keep your home protected year-round. Whether you need a quick fix or a full restoration, our team delivers practical solutions with no hidden surprises.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen W.",
    suburb: "Jannali",
    quote:
      "Had persistent leaks near the chimney and blocked gutters after autumn. They arrived on time, fixed the flashing properly and cleaned everything thoroughly. Roof has been watertight ever since. Great communication and honest pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
