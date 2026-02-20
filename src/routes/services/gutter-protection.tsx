import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Gutter Protection",
  serviceSlug: "gutter-protection",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/gutter-protection/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Gutter protection systems across Sydney",
    titleTop: "GUTTER PROTECTION",
    titleBottom: "SYDNEY",
    bullets: [
      "Leaf guard and gutter mesh installation",
      "Reduce gutter cleaning frequency and blockages",
      "Bushfire ember protection for BAL-rated properties",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Gutter protection in Sydney",
    paragraphs: [
      "Gutter guards and mesh systems keep leaves, debris and pests out of your gutters while allowing water to flow freely. For homes surrounded by trees, gutter protection dramatically reduces maintenance and prevents blockages that cause overflow and water damage.",
      "We install a range of gutter protection systems including aluminium mesh, steel mesh, foam inserts and micro-mesh products. The right choice depends on your gutter profile, the type of debris in your area and whether you need ember protection for bushfire zones.",
      "Properly installed gutter protection pays for itself over time by reducing cleaning costs and preventing the water damage that blocked gutters cause."
    ]
  },
  why: {
    heading: "Why choose us for gutter protection?",
    points: [
      {
        title: "Right product for your situation",
        text: "We assess your property, tree cover and gutter type to recommend the most effective protection system."
      },
      {
        title: "Bushfire compliance",
        text: "For properties in BAL-rated zones, we install ember guard mesh that meets AS 3959 requirements."
      },
      {
        title: "Secure installation",
        text: "We fix gutter guards firmly so they stay in place during storms and do not void your gutter warranty."
      }
    ]
  },
  process: {
    heading: "Our gutter protection process",
    steps: [
      {
        title: "Assess",
        text: "We inspect your gutters, note the debris type and volume, and recommend the best guard system."
      },
      {
        title: "Clean and install",
        text: "We clean your gutters thoroughly first, then fit the protection system securely along every run."
      },
      {
        title: "Confirm",
        text: "We check that water flows correctly through the mesh and into downpipes without pooling."
      }
    ]
  },
  testimonial: {
    name: "David M.",
    areaName: "Sydney",
    quote: "We used to clean our gutters every three months because of the gum trees. Since getting gutter guards installed, we have not had a single blockage in over a year.",
    rating: 5
  },
  cta: {
    heading: "Tired of cleaning gutters?",
    text: "Get a free quote for gutter protection installation. We will recommend the best system for your property and budget.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
