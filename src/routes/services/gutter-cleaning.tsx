import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Gutter Cleaning",
  serviceSlug: "gutter-cleaning",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/gutter-cleaning/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Gutter cleaning services across Sydney",
    titleTop: "GUTTER CLEANING",
    titleBottom: "SYDNEY",
    bullets: [
      "Remove leaves, debris and built-up silt from gutters",
      "Flush and clear blocked downpipes",
      "Inspect for damage while cleaning",
      "Free quotes for residential and commercial properties"
    ]
  },
  intro: {
    heading: "Gutter cleaning in Sydney",
    paragraphs: [
      "Blocked gutters overflow during rain, sending water down walls and into foundations. Regular gutter cleaning prevents costly water damage and extends the life of your gutter system.",
      "We remove all leaves, debris, silt and moss from your gutters and downpipes. During every clean, we also inspect for rust, loose brackets, incorrect fall and other issues that could cause problems down the track.",
      "Whether you have a single-storey home surrounded by trees or a multi-level commercial building, we have the equipment and experience to clean your gutters safely and thoroughly."
    ]
  },
  why: {
    heading: "Why choose us for gutter cleaning?",
    points: [
      {
        title: "Thorough clean and flush",
        text: "We do not just scoop out leaves. We flush every downpipe and check water flow through the entire system."
      },
      {
        title: "Free condition report",
        text: "After every clean, we let you know if we spotted any damage, rust or alignment issues that need attention."
      },
      {
        title: "Safe access on any property",
        text: "We carry ladders, harnesses and elevated work platforms to clean gutters safely on all building types."
      }
    ]
  },
  process: {
    heading: "Our gutter cleaning process",
    steps: [
      {
        title: "Clear debris",
        text: "We remove all leaves, twigs, silt and moss from gutter channels by hand and with vacuum equipment."
      },
      {
        title: "Flush downpipes",
        text: "We flush every downpipe with water to confirm it is clear and flowing freely to ground drainage."
      },
      {
        title: "Inspect and report",
        text: "We check for rust, loose brackets, incorrect fall and other issues, then provide a written condition summary."
      }
    ]
  },
  testimonial: {
    name: "Jenny R.",
    areaName: "Sydney",
    quote: "They cleaned our gutters, flushed the downpipes and found a cracked bracket that was causing a sag. Everything was sorted in one visit.",
    rating: 5
  },
  cta: {
    heading: "Gutters due for a clean?",
    text: "Book a professional gutter clean with a free condition inspection. We service all Sydney suburbs.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
