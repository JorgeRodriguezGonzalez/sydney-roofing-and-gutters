import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Guttering Services",
  serviceSlug: "guttering-services",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/guttering-services/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Complete guttering solutions across Sydney",
    titleTop: "GUTTERING SERVICES",
    titleBottom: "SYDNEY",
    bullets: [
      "Full range of gutter services for homes and businesses",
      "Installation, replacement, repairs, cleaning and protection",
      "Colorbond, Zincalume and aluminium systems",
      "Free inspections and quotes across all Sydney suburbs"
    ]
  },
  intro: {
    heading: "Your complete guttering partner in Sydney",
    paragraphs: [
      "Sydney Roofing and Gutters provides a full range of guttering services across Sydney. Whether you need new gutters on a build, old gutters replaced, a repair after storm damage or a routine clean to prevent blockages, our team handles it all.",
      "We work with Colorbond, Zincalume and aluminium gutter systems in every common profile including quad, half-round, square-line and box gutters. Every job is completed with correct fall engineering and proper drainage connections.",
      "Explore our specialist guttering services below to find out more about each solution we offer."
    ]
  },
  why: {
    heading: "Why choose Sydney Roofing and Gutters?",
    points: [
      {
        title: "One team for everything",
        text: "From installation through to ongoing maintenance, you deal with one experienced team who knows your property and gutter system."
      },
      {
        title: "Engineered drainage",
        text: "We calculate gutter size, fall and downpipe capacity based on your roof area and local rainfall data so your system performs when it matters most."
      },
      {
        title: "Quality materials and warranties",
        text: "We use BlueScope Colorbond and Zincalume products backed by manufacturer warranties, installed to specification for long-term performance."
      }
    ]
  },
  process: {
    heading: "How we work",
    steps: [
      {
        title: "Inspect and advise",
        text: "We assess your current gutters or plans, identify what you need and recommend the right service, materials and approach."
      },
      {
        title: "Quote and schedule",
        text: "You receive a clear written quote with no hidden costs. We schedule the work at a time that suits you."
      },
      {
        title: "Deliver and confirm",
        text: "We complete the work, test the system with water and walk you through what was done before we leave."
      }
    ]
  },
  relatedServices: [
    {
      title: "Gutter Installation",
      href: "/gutter-installation/",
      description: "New gutter systems for homes, extensions and commercial buildings. Colorbond, Zincalume and aluminium profiles with correct fall and drainage engineering."
    },
    {
      title: "Gutter Replacement",
      href: "/gutter-replacement/",
      description: "Full removal and replacement of ageing, rusted or damaged gutters. Includes fascia inspection and repair where needed."
    },
    {
      title: "Gutter Repairs",
      href: "/gutter-repairs/",
      description: "Fix leaking joins, sagging sections, rust damage and storm damage. Fast response with same-day repairs where possible."
    },
    {
      title: "Gutter Cleaning",
      href: "/gutter-cleaning/",
      description: "Professional removal of leaves, debris and silt. Includes downpipe flushing and a free gutter condition report."
    },
    {
      title: "Gutter Protection",
      href: "/gutter-protection/",
      description: "Leaf guard and mesh systems to reduce blockages and maintenance. Bushfire ember protection for BAL-rated properties."
    },
    {
      title: "Aluminium Gutter Installation",
      href: "/aluminium-gutter-installation/",
      description: "Corrosion-resistant aluminium gutters ideal for coastal properties and salt-spray environments. Seamless and sectional profiles available."
    },
    {
      title: "Downpipe Installation",
      href: "/downpipe-installation/",
      description: "New downpipes, rainwater heads and drainage connections. Correct sizing for your roof area and gutter system."
    }
  ],
  testimonial: {
    name: "Karen J.",
    areaName: "Sydney",
    quote: "They replaced our gutters, added leaf guards and now come back once a year for a clean. Great to have one team that handles everything.",
    rating: 5
  },
  cta: {
    heading: "Need guttering help?",
    text: "Whether it is a new installation, a replacement, repairs or a clean, get a free quote from our guttering specialists. We service every suburb in Sydney.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
