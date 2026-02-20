import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Gutter Installation",
  serviceSlug: "gutter-installation",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/gutter-installation/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Gutter installation across Sydney",
    titleTop: "GUTTER INSTALLATION",
    titleBottom: "SYDNEY",
    bullets: [
      "New gutter systems for homes and commercial buildings",
      "Colorbond, Zincalume and aluminium options",
      "Correct fall and drainage engineering",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Gutter installation in Sydney",
    paragraphs: [
      "Properly installed gutters protect your home from water damage by directing rainwater away from walls, foundations and landscaping. Poor gutter installation leads to overflows, pooling and structural damage over time.",
      "We install complete gutter systems including box gutters, quad gutters, half-round profiles, downpipes, rainwater heads and leaf guards. Every installation is engineered for correct fall and drainage capacity.",
      "Whether you are building a new home, extending an existing property or replacing a failed gutter system, we deliver installations that perform reliably in Sydney weather conditions."
    ]
  },
  why: {
    heading: "Why choose us for gutter installation?",
    points: [
      {
        title: "Engineered for performance",
        text: "We calculate drainage requirements based on roof area and local rainfall intensity to ensure your gutters handle heavy downpours."
      },
      {
        title: "Quality materials",
        text: "We use Colorbond and Zincalume from BlueScope with manufacturer warranties for long-term corrosion resistance."
      },
      {
        title: "Clean, professional finish",
        text: "We align gutters precisely, secure brackets at correct spacing and ensure all joins are watertight."
      }
    ]
  },
  process: {
    heading: "Our gutter installation process",
    steps: [
      {
        title: "Measure and plan",
        text: "We measure your roofline, calculate drainage needs and recommend the best gutter profile and material."
      },
      {
        title: "Install",
        text: "We fit brackets, install gutters with correct fall, connect downpipes and seal all joins."
      },
      {
        title: "Test and handover",
        text: "We flush the system with water to confirm drainage performance and check for any issues."
      }
    ]
  },
  testimonial: {
    name: "Helen W.",
    areaName: "Sydney",
    quote: "New Colorbond gutters installed on our renovation. The team matched the colour perfectly to our roof and the drainage works brilliantly even in heavy rain.",
    rating: 5
  },
  cta: {
    heading: "Need new gutters installed?",
    text: "Request a free quote for gutter installation. We service all of Sydney with quality materials and workmanship guarantees.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
