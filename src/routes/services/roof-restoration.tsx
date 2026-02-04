import { createServiceRoute } from "@/routes/services/ServiceTemplate";
import type { ServiceSEOConfig, ServiceContent } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Roof Restoration",
  serviceSlug: "roof-restoration",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/roof-restoration/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Roof Restoration in Sydney",
    titleTop: "ROOF RESTORATION",
    titleBottom: "SYDNEY",
    bullets: [
      "Full cleaning, repairs, re-pointing & re-bedding",
      "Extend roof life & prevent leaks - cost-effective vs replacement",
      "Sealing, coating & painting for lasting protection",
    ],
  },
  intro: {
    heading: "What Is Roof Restoration and What Does It Include?",
    paragraphs: [
      "Roof restoration is a comprehensive process that brings an ageing or worn roof back to a sound, watertight and visually improved condition without the cost and disruption of a full replacement. It is ideal for tile, metal and some concrete roofs across Sydney and surrounding areas.",
      "A typical roof restoration includes: a thorough clean to remove dirt, moss, lichen and debris; replacement of broken or cracked tiles and damaged flashings; re-bedding and re-pointing of ridge cappings and hip tiles where mortar has failed; sealing of cracks and joints; and the application of a protective roof coating or paint. For tile roofs, we also repoint and re-bed where needed to restore structural integrity and prevent water entry. The final coating helps reflect heat, resist moisture and UV, and improves the overall appearance of your home.",
      "Choosing restoration over replacement can save you a significant amount while extending the life of your existing roof by 15–20 years when done correctly. Our licensed team uses quality materials and follows best practice so your restored roof performs reliably for years to come.",
    ],
  },
  why: {
    heading: "Why Choose Roof Restoration?",
    points: [
      {
        title: "Extend Roof Lifespan",
        text: "A professional restoration addresses wear, failed mortar and minor damage before they turn into major leaks or structural issues. With proper cleaning, repairs and coatings, your existing roof can deliver many more years of reliable service, delaying the need for an expensive full replacement.",
      },
      {
        title: "Prevent Leaks and Water Damage",
        text: "Re-bedding, re-pointing and sealing close the gaps that let water in. By fixing loose or missing ridge cappings, cracked tiles and deteriorated flashings, we stop moisture from reaching the ceiling and structure, helping to avoid mould, rot and costly internal repairs.",
      },
      {
        title: "Improve Appearance and Cost-Effective vs Replacement",
        text: "Restoration removes staining and gives the roof a clean, uniform finish with a new coating or paint. The result often looks like a new roof at a fraction of the cost of re-roofing. You get better curb appeal and protection without the larger spend and longer timeline of a full replacement.",
      },
    ],
  },
  process: {
    heading: "Our Roof Restoration Process",
    steps: [
      {
        title: "Inspection & Quote",
        text: "We inspect your roof, gutters and flashings to identify damage, failed mortar and areas that need repair. You receive a clear, written quote covering cleaning, repairs, re-bedding, re-pointing, sealing and coating so you know exactly what is included.",
      },
      {
        title: "Clean, Repair & Re-bed",
        text: "We safely remove dirt, moss and debris, replace broken tiles and damaged flashings, and re-bed and re-point ridge and hip cappings where the mortar has failed. Cracks and joints are sealed to ensure the roof is watertight before any coating is applied.",
      },
      {
        title: "Coat & Protect",
        text: "We apply a premium roof coating or paint suitable for your roof type. This final layer adds UV and weather resistance, improves thermal performance and gives your roof a lasting, refreshed look. We clean up and leave your property tidy.",
      },
    ],
  },
  testimonial: {
    name: "James Chen",
    areaName: "Sydney",
    quote: "We were weighing up full roof replacement until we got a quote for restoration. The team cleaned everything, fixed the ridge cappings and repointed where it was failing, then applied a new coating. The roof looks like new and we've had no leaks since. Highly recommend for anyone in Sydney considering their options.",
    rating: 5,
  },
  cta: {
    heading: "Ready for a Roof Restoration Quote?",
    text: "Get a free, no-obligation quote for roof restoration across Sydney. Our licensed team will inspect your roof and provide a clear scope of work including cleaning, repairs, re-bedding, re-pointing and coating.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/",
  },
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);

export const route = serviceRoute;
export default Page;

