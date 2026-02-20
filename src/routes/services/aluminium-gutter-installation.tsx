import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Aluminium Gutter Installation",
  serviceSlug: "aluminium-gutter-installation",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/aluminium-gutter-installation/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Aluminium gutter installation across Sydney",
    titleTop: "ALUMINIUM GUTTER INSTALLATION",
    titleBottom: "SYDNEY",
    bullets: [
      "Lightweight, corrosion-resistant aluminium gutters",
      "Ideal for coastal properties and salt-spray zones",
      "Seamless and sectional profiles available",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Aluminium gutter installation in Sydney",
    paragraphs: [
      "Aluminium gutters offer excellent corrosion resistance, making them a popular choice for Sydney properties near the coast where salt spray accelerates rust on steel gutters.",
      "We install both sectional and seamless aluminium gutters in a range of profiles and colours. Aluminium is lighter than steel, does not rust and can be powder-coated to match your roof and trim colours.",
      "Whether you are building new, replacing corroded steel gutters or upgrading a coastal property, aluminium guttering provides reliable performance with minimal maintenance."
    ]
  },
  why: {
    heading: "Why choose aluminium gutters?",
    points: [
      {
        title: "Superior corrosion resistance",
        text: "Aluminium does not rust, making it ideal for coastal areas, pool surrounds and properties exposed to salt air."
      },
      {
        title: "Lightweight and strong",
        text: "Aluminium gutters are lighter than steel, reducing load on fascia boards while maintaining structural performance."
      },
      {
        title: "Low maintenance",
        text: "No painting or rust treatment required. Powder-coated finishes retain their appearance for decades."
      }
    ]
  },
  process: {
    heading: "Our aluminium gutter installation process",
    steps: [
      {
        title: "Consultation",
        text: "We assess your property, discuss profile options and recommend the best aluminium system for your needs."
      },
      {
        title: "Fabrication and install",
        text: "We fabricate gutters to length, install with correct fall and connect to downpipes and drainage."
      },
      {
        title: "Quality check",
        text: "We test water flow, check all joins and confirm the system drains correctly."
      }
    ]
  },
  testimonial: {
    name: "Carol B.",
    areaName: "Sydney",
    quote: "Living near the beach meant our old steel gutters rusted every few years. The new aluminium gutters look great and we will never have to worry about rust again.",
    rating: 5
  },
  cta: {
    heading: "Interested in aluminium gutters?",
    text: "Get a free quote for aluminium gutter installation. We service all of Sydney including coastal suburbs.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
