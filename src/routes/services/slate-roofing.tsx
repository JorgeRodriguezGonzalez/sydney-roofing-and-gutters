import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Slate Roofing",
  serviceSlug: "slate-roofing",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/slate-roofing/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Slate roofing specialists in Sydney",
    titleTop: "SLATE ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Repair, restoration and replacement of slate roofs",
      "Sourcing of matching slate tiles for heritage properties",
      "Experience with Federation and Victorian-era homes",
      "Free inspections and quotes across Sydney"
    ]
  },
  intro: {
    heading: "Slate roofing services in Sydney",
    paragraphs: [
      "Slate roofing is one of the most durable and visually striking roofing materials available. Many of the heritage homes across inner Sydney and the lower North Shore feature original slate roofs that have lasted over a century.",
      "We specialise in repairing, restoring and replacing slate roofs. Our team sources matching slate tiles from Australian and international suppliers to maintain the character and heritage value of your property.",
      "Whether you need a few cracked slates replaced or a full slate roof restoration, we have the skills and materials to do the job properly."
    ]
  },
  why: {
    heading: "Why choose us for slate roofing?",
    points: [
      {
        title: "Heritage expertise",
        text: "We understand the requirements of working on heritage-listed and conservation-area properties in Sydney."
      },
      {
        title: "Slate sourcing network",
        text: "We source matching slate from suppliers across Australia and overseas to ensure colour and texture consistency."
      },
      {
        title: "Traditional techniques",
        text: "Slate installation requires specific skills including copper nail fixing and lead soaker work that our team delivers."
      }
    ]
  },
  process: {
    heading: "Our slate roofing process",
    steps: [
      {
        title: "Assessment",
        text: "We inspect the slate roof, identify damaged or missing tiles, and assess the condition of battens and underlay."
      },
      {
        title: "Material sourcing",
        text: "We source matching slate tiles and prepare all necessary materials including lead flashings and copper fixings."
      },
      {
        title: "Repair or restoration",
        text: "We replace damaged slates, re-bed ridge caps and restore flashings to bring the roof back to full condition."
      }
    ]
  },
  testimonial: {
    name: "Robert H.",
    areaName: "Sydney",
    quote: "Our Federation home needed slate repairs that matched the originals. The team found perfect matching tiles and the roof looks fantastic.",
    rating: 5
  },
  cta: {
    heading: "Need slate roof repairs?",
    text: "Get a free inspection and quote for your slate roofing project. We work with heritage properties across Sydney.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
