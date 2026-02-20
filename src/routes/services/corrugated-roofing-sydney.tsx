import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Corrugated Roofing",
  serviceSlug: "corrugated-roofing-sydney",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/corrugated-roofing-sydney/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Corrugated roofing across Sydney",
    titleTop: "CORRUGATED ROOFING",
    titleBottom: "SYDNEY",
    bullets: [
      "Installation and replacement of corrugated metal roofing",
      "Colorbond Custom Orb and Zincalume profiles available",
      "Suited to residential, rural and commercial buildings",
      "Free quotes across Sydney"
    ]
  },
  intro: {
    heading: "Corrugated roofing in Sydney",
    paragraphs: [
      "Corrugated roofing is one of the most recognisable and versatile roof profiles in Australia. Its classic wave pattern provides excellent water runoff, structural strength and a timeless appearance that suits everything from heritage cottages to modern farm buildings.",
      "We install and replace corrugated roofing using Colorbond Custom Orb and Zincalume sheeting. Both materials offer excellent corrosion resistance and are manufactured by BlueScope to Australian standards.",
      "Whether you are replacing an old corrugated iron roof or installing new corrugated sheets on an extension, shed or carport, we deliver quality installations across Sydney."
    ]
  },
  why: {
    heading: "Why choose us for corrugated roofing?",
    points: [
      {
        title: "Versatile applications",
        text: "We install corrugated roofing on homes, sheds, carports, verandahs, commercial buildings and rural properties."
      },
      {
        title: "Correct installation",
        text: "We use the right screw patterns, overlaps and flashings to ensure your corrugated roof is watertight and wind-rated."
      },
      {
        title: "Full colour range",
        text: "Choose from the complete Colorbond colour palette to match or contrast with your property."
      }
    ]
  },
  process: {
    heading: "Our corrugated roofing process",
    steps: [
      {
        title: "Measure and specify",
        text: "We measure your roof, confirm profile and colour, and order sheets cut to exact length."
      },
      {
        title: "Install",
        text: "We lay sheets with correct overlap, fix with colour-matched screws and install all flashings."
      },
      {
        title: "Complete and inspect",
        text: "We check every fixing, flashing and seal point before handing over the completed roof."
      }
    ]
  },
  testimonial: {
    name: "Mark S.",
    areaName: "Sydney",
    quote: "New corrugated Colorbond roof on our verandah extension. Matches the original house roof perfectly. Clean work and finished on time.",
    rating: 5
  },
  cta: {
    heading: "Need corrugated roofing?",
    text: "Get a free quote for corrugated roofing installation or replacement. We service all of Sydney.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
