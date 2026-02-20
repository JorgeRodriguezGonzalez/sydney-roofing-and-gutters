import { createServiceRoute, type ServiceContent, type ServiceSEOConfig } from "@/routes/services/ServiceTemplate";

const config: ServiceSEOConfig = {
  serviceName: "Roof Flashing",
  serviceSlug: "roof-flashing",
  areaName: "Sydney",
  areaSlug: "sydney",
  latitude: "-33.8688",
  longitude: "151.2093",
  state: "NSW",
  country: "Australia",
  path: "/roof-flashing/",
};

const content: ServiceContent = {
  hero: {
    eyebrow: "Roof flashing services across Sydney",
    titleTop: "ROOF FLASHING",
    titleBottom: "SYDNEY",
    bullets: [
      "Expert flashing installation, repair and replacement",
      "Lead, Colorbond and aluminium flashing options",
      "Leak prevention at roof penetrations and junctions",
      "Free inspections and quotes across Sydney"
    ]
  },
  intro: {
    heading: "Roof flashing services in Sydney",
    paragraphs: [
      "Roof flashing is the thin metal sheeting that seals joints, penetrations and transitions on your roof. When flashing fails, water enters the building and causes damage to ceilings, walls and structural timbers.",
      "We install, repair and replace all types of roof flashing including ridge capping, valley irons, apron flashings, barge flashings and penetration flashings around vents, pipes and skylights.",
      "Whether your flashing has corroded, lifted in a storm or was poorly installed from the start, our team will identify the problem and fix it properly the first time."
    ]
  },
  why: {
    heading: "Why choose us for roof flashing?",
    points: [
      {
        title: "Leak specialists",
        text: "Many roof leaks trace back to failed flashing. We diagnose the exact source and repair it with materials that last."
      },
      {
        title: "Quality materials",
        text: "We use lead, Colorbond and marine-grade aluminium flashing depending on your roof type and exposure conditions."
      },
      {
        title: "Attention to detail",
        text: "Proper flashing relies on correct overlap, sealing and fastening. We take the time to get every joint right."
      }
    ]
  },
  process: {
    heading: "Our roof flashing process",
    steps: [
      {
        title: "Inspection",
        text: "We inspect all flashing points on your roof and identify areas of concern, wear or failure."
      },
      {
        title: "Repair or replacement",
        text: "We remove failed flashing, prepare surfaces and install new flashing with correct overlap and sealing."
      },
      {
        title: "Water test and sign-off",
        text: "We test repaired areas and confirm all junctions are sealed before completing the job."
      }
    ]
  },
  testimonial: {
    name: "Michelle T.",
    areaName: "Sydney",
    quote: "We had a persistent leak around our skylight that two other roofers could not fix. This team replaced the flashing properly and the leak is gone for good.",
    rating: 5
  },
  cta: {
    heading: "Flashing problems causing leaks?",
    text: "Book a free roof flashing inspection. We will find the source of the problem and provide a clear quote for repairs.",
    buttonText: "GET QUOTE",
    buttonHref: "/contact/"
  }
};

const { Page, route: serviceRoute } = createServiceRoute(config, content);
export const route = serviceRoute;
export default Page;
