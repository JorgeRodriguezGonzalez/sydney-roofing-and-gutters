import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.905; // Georges Hall
const AREA_LON = 150.987;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Georges Hall",
  slug: "georges-hall",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Georges Hall Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GEORGES HALL",
    bullets: [
      "Roofing services for established and newer homes",
      "Fast leak detection and lasting repairs",
      "Gutter cleaning and replacement after storms",
      "Local team serving Georges Hall and surrounding suburbs with quality workmanship",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Georges Hall Properties",
    paragraphs: [
      "Georges Hall is home to a mix of established family homes and newer builds. Each property type brings its own roofing challenges — from older tile roofs needing restoration to metal roofs requiring leak repairs and gutter maintenance.",
      "Whether you have Colorbond, terracotta tiles or metal sheeting, our team provides targeted repairs, full restorations and guttering upgrades designed to handle western Sydney weather and protect your investment.",
      "We focus on clear communication, clean workmanship and long-lasting results. From the first inspection to final clean-up, you get honest advice and a roof system you can rely on year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and guttering in Georges Hall",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Georges Hall",
    subheading: "Western Sydney conditions demand tough roofs — heat, storms and wind can all take their toll over time.",
    paragraphs: [
      "Intense summer heat causes roof fasteners to loosen and sealants to degrade. Tiles can crack and metal roofs expand, leading to leaks when the next downpour hits. Add in spring storms and wind damage, and small issues quickly become urgent.",
      "Blocked gutters, rusted sections and poor drainage create overflow that can damage fascias, eaves and even internal walls. If you see water stains, sagging gutters or pooling after rain, your roof system needs attention.",
      "We handle everything from minor leak repairs and tile replacements to full re-roofing and gutter installations. Our team inspects the entire system, identifies weak points and provides a detailed quote before any work begins.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael T.",
    suburb: "Bankstown",
    quote:
      "Our roof had been leaking for months and we finally called them in. They found the problem quickly, replaced damaged tiles and fixed the flashing. No leaks since — highly recommend their service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
