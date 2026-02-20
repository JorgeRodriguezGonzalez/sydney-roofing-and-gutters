import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Commercial Metal Roofing",
  serviceSlug: "commercial-metal-roofing",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/commercial-metal-roofing/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Commercial metal roofing across Sydney",
    titleTop: "COMMERCIAL METAL ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Metal roofing for warehouses, factories and retail buildings",
      "Colorbond and Zincalume systems for commercial applications",
      "Minimal disruption to business operations during installation",
      "Free quotes for commercial properties across Sydney"
    ]
  },
  intro: {
    heading: "Commercial metal roofing in Sydney",
    paragraphs: [
      "Metal roofing is the preferred choice for commercial buildings in Sydney due to its durability, low maintenance requirements and cost-effectiveness over the life of the roof.",
      "We install and replace metal roof systems on warehouses, shopping centres, office buildings, schools and industrial facilities. Our team works with Colorbond, Zincalume and custom metal profiles suited to large-span commercial structures.",
      "From minor repairs to full re-roofs on operating premises, we plan every project to minimise downtime and keep your business running."
    ]
  },
  why: {
    heading: "Why choose us for commercial metal roofing?",
    points: [
      {
        title: "Experience with large-scale projects",
        text: "We have completed metal roofing projects on commercial buildings across Sydney, from small retail units to large industrial warehouses."
      },
      {
        title: "Licensed and fully insured",
        text: "Our team holds all required NSW licences and carries comprehensive insurance for commercial roofing work, including public liability and workers compensation."
      },
      {
        title: "Minimal business disruption",
        text: "We schedule work around your operations, provide dust and debris containment, and coordinate with building managers to keep disruption to a minimum."
      }
    ]
  },
  process: {
    heading: "Our commercial metal roofing process",
    steps: [
      {
        title: "Site assessment",
        text: "We inspect the existing roof, assess structural requirements and discuss your budget and timeline."
      },
      {
        title: "Detailed proposal",
        text: "You receive a comprehensive quote covering materials, labour, access equipment and project scheduling."
      },
      {
        title: "Installation and handover",
        text: "We complete the installation with quality checks at every stage and provide documentation including warranties."
      }
    ]
  },
  testimonial: {
    name: "Andrew K.",
    areaName: "Sydney",
    quote: "They re-roofed our warehouse over two weekends so we never had to close. Professional crew, great communication throughout the project.",
    rating: 5
  },
  cta: {
    heading: "Need commercial metal roofing?",
    text: "Get a free quote for your commercial metal roofing project. We service all of Sydney and provide detailed proposals with transparent pricing.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
