import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Gutter Repairs",
  serviceSlug: "gutter-repairs",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/gutter-repairs/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Gutter repair services across Sydney",
    titleTop: "GUTTER REPAIRS",
    titleBottom: "SYDNEY",
    bullets: [
      "Fix leaking joins, sagging sections and overflow problems",
      "Repair rust damage and re-seal gutter connections",
      "Storm damage repairs and emergency callouts",
      "Free inspections and quotes across Sydney"
    ]
  },
  intro: {
    heading: "Gutter repairs in Sydney",
    paragraphs: [
      "Leaking, sagging or overflowing gutters cause water damage to fascia boards, walls and foundations if left unrepaired. Most gutter problems are straightforward to fix when caught early.",
      "We repair all types of gutter issues including leaking joins, rust holes, sagging sections, blocked downpipes and storm damage. Our repairs use quality materials and proper techniques to ensure long-lasting results.",
      "From a single leaking joint to extensive storm damage across your gutter system, we provide fast and reliable repairs across Sydney."
    ]
  },
  why: {
    heading: "Why choose us for gutter repairs?",
    points: [
      {
        title: "Fast response",
        text: "We offer prompt inspections and can often complete repairs on the same visit, minimising the risk of further water damage."
      },
      {
        title: "Proper repair methods",
        text: "We use rivets, sealants and replacement sections rather than temporary patches that fail within months."
      },
      {
        title: "Honest assessment",
        text: "If your gutters need replacing rather than repairing, we will tell you upfront and explain why."
      }
    ]
  },
  process: {
    heading: "Our gutter repair process",
    steps: [
      {
        title: "Diagnose",
        text: "We inspect your gutters to identify all issues including hidden problems like internal rust or incorrect fall."
      },
      {
        title: "Repair",
        text: "We fix leaks, re-secure brackets, replace damaged sections and clear any blockages."
      },
      {
        title: "Confirm",
        text: "We flush the system with water to confirm the repair is effective and drainage is working correctly."
      }
    ]
  },
  testimonial: {
    name: "Sandra L.",
    areaName: "Sydney",
    quote: "Water was pouring over the gutters every time it rained. They found the problem quickly, fixed the fall and sealed the joins. No more overflow.",
    rating: 5
  },
  cta: {
    heading: "Gutters leaking or overflowing?",
    text: "Book a free gutter inspection and get a clear quote for repairs. We service all suburbs across Sydney.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
