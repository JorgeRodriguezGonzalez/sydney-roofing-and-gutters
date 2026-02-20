import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Gutter Replacement",
  serviceSlug: "gutter-replacement",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/gutter-replacement/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Gutter replacement across Sydney",
    titleTop: "GUTTER REPLACEMENT",
    titleBottom: "SYDNEY",
    bullets: [
      "Full gutter system replacement for ageing or damaged gutters",
      "Upgrade from old profiles to modern high-capacity systems",
      "Colorbond colour matching with your existing roof",
      "Free quotes and inspections across Sydney"
    ]
  },
  intro: {
    heading: "Gutter replacement in Sydney",
    paragraphs: [
      "Old gutters that rust, sag or overflow are more than an eyesore. They allow water to damage fascia boards, external walls and foundations. Replacing worn-out gutters is one of the most cost-effective ways to protect your home.",
      "We remove old gutter systems, inspect and repair fascia boards where needed, and install new gutters with correct fall and modern drainage capacity. Our replacements use Colorbond or Zincalume for long-term performance.",
      "Whether your gutters are leaking at the joins, pulling away from the fascia or simply past their useful life, we provide a complete replacement service across Sydney."
    ]
  },
  why: {
    heading: "Why choose us for gutter replacement?",
    points: [
      {
        title: "Complete system replacement",
        text: "We replace gutters, downpipes, brackets and fascia boards as needed for a fully renewed drainage system."
      },
      {
        title: "Proper disposal",
        text: "We remove all old materials from your property and dispose of them responsibly, including asbestos where required."
      },
      {
        title: "Colour-matched finish",
        text: "We match your new gutters to your roof colour using the full Colorbond range for a seamless appearance."
      }
    ]
  },
  process: {
    heading: "Our gutter replacement process",
    steps: [
      {
        title: "Inspect and quote",
        text: "We assess your existing gutters, check fascia condition and provide a detailed written quote."
      },
      {
        title: "Remove and replace",
        text: "We strip old gutters, repair any fascia damage and install the new system with correct fall."
      },
      {
        title: "Test and clean up",
        text: "We water-test the new system, confirm performance and leave your property clean."
      }
    ]
  },
  testimonial: {
    name: "Peter D.",
    areaName: "Sydney",
    quote: "Our 30-year-old gutters were rusting through and overflowing. The new Colorbond system looks great and handles heavy rain without any issues.",
    rating: 5
  },
  cta: {
    heading: "Time to replace your gutters?",
    text: "Get a free inspection and quote for gutter replacement. We handle everything from removal to installation.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
