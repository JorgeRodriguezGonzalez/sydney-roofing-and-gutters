import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Who Do You Call When Your Roof Is Leaking? Your Rainy Day Plan",
  slug: "who-do-you-call-when-your-roof-is-leaking-your-rainy-day-plan",
  path: "/guides/who-do-you-call-when-your-roof-is-leaking-your-rainy-day-plan/",
  description: "A practical guide for Sydney homeowners on how to respond to a roof leak, who to call, how to find emergency roofers and what to expect from repairs.",
  keywords: "roof leak emergency, emergency roofer sydney, roof leak repair, emergency roof repair, roof leak who to call",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Who Do You Call When Your Roof Is Leaking? Your Rainy Day Plan",
    subheadline: "Stay calm and act fast when water starts coming through the ceiling. This guide shows Sydney homeowners exactly who to call, what to do first and how to get emergency roof repairs done right.",
    bullets: [
      "Know exactly who to contact the moment you discover a leak",
      "Learn immediate damage control steps to protect your home and belongings",
      "Understand when a leak qualifies as an emergency and when it can wait",
      "Find out how to choose a reliable emergency roofing contractor in Sydney",
    ],
  },

  intro: {
    paragraphs: [
      "A roof leak can turn a peaceful Sydney afternoon into a stressful scramble. Water coming through the ceiling triggers panic, but knowing who to call and what to do immediately can save you thousands of dollars in damage and make the repair process much smoother.",
      "Not all roof leaks require an emergency callout at 2am. Understanding the difference between a genuine emergency and a problem that can wait until morning helps you make smart decisions when stress levels are high. Either way, having a plan before you need it gives you confidence and saves precious time.",
      "This guide walks you through every step from the moment you spot water dripping through the ceiling to getting the repair completed properly. The advice below is based on decades of emergency callout experience across Sydney and the broader NSW region.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Call a licensed emergency roofing contractor immediately if water is actively entering the home or damage is spreading fast",
      "For minor leaks that appear during storms, contain the water and arrange inspection as soon as weather clears",
      "Emergency roof repairs in Sydney typically cost between $300 and $1,200 depending on severity and time of day",
      "Your home insurance may cover roof leak damage — contact your insurer within 24 hours and document everything with photos",
    ],
  },

  sections: [
    {
      id: "immediate-steps-when-you-find-a-leak",
      heading: "Immediate Steps When You Find a Leak",
      paragraphs: [
        "The moment you discover water coming through the ceiling, move furniture and valuables away from the area. Place buckets or towels underneath to catch dripping water and prevent it spreading across floors. If water is pooling in the ceiling and creating a bulge, carefully puncture the lowest point with a screwdriver to let the water drain in a controlled way rather than collapsing suddenly.",
        "Turn off electricity to any light fixtures or power outlets near the leak. Water and electricity are a dangerous combination and many ceiling fixtures are not waterproof. If you cannot isolate individual circuits, consider turning off power to affected rooms at the switchboard. Once immediate safety measures are in place, you can assess the situation calmly and decide on next steps.",
      ],
      bullets: [
        "Move furniture, electronics and anything valuable away from the leak area",
        "Use buckets, towels or plastic sheeting to catch and contain water",
        "Puncture bulging ceilings at the lowest point to release trapped water safely",
        "Turn off power to affected rooms if water is near electrical fittings",
      ],
    },
    {
      id: "who-to-call-first",
      heading: "Who to Call First: Insurance or Roofer?",
      paragraphs: [
        "If the leak is severe and causing active damage, your first call should be to a licensed emergency roofing contractor. Getting the leak stopped or temporarily patched is the priority. However, take photos and notes before any work starts because your insurance company will need evidence of the damage and its cause.",
        "For less urgent leaks where water has stopped or slowed, contact your home insurance provider first. Most policies require you to notify them within 24 to 48 hours of discovering damage. The insurer can advise whether the damage is covered, arrange an assessor visit and sometimes recommend approved repair contractors. Keep all receipts and quotes because you will need them for claims processing.",
      ],
      bullets: [
        "Severe active leaks: call an emergency roofer immediately to stop water entry",
        "Moderate leaks: contact your insurer first to confirm coverage and process",
        "Document everything with photos showing the leak source, water damage and roof condition",
        "Keep all quotes, invoices and correspondence for insurance claims",
      ],
    },
    {
      id: "finding-an-emergency-roofer-in-sydney",
      heading: "Finding an Emergency Roofer in Sydney",
      paragraphs: [
        "Not every roofing company offers genuine 24-hour emergency service. When you search online or ask for recommendations, look for contractors who clearly advertise emergency callouts and have systems in place to respond quickly outside normal business hours. Ask upfront about callout fees, hourly rates and whether they charge extra for after-hours work.",
        "Always verify the contractor holds a current NSW contractor licence and public liability insurance. Even in an emergency, do not let unlicensed operators onto your roof. Legitimate emergency roofers will provide their licence number over the phone and confirm insurance details before starting work. If they hesitate or refuse, call someone else.",
      ],
      bullets: [
        "Look for roofers who clearly advertise 24-hour emergency response services",
        "Verify NSW contractor licence and insurance before agreeing to any work",
        "Ask about callout fees and after-hours rates upfront to avoid surprises",
        "Choose local contractors who can reach you quickly during storms or overnight",
      ],
    },
    {
      id: "what-emergency-roof-repairs-involve",
      heading: "What Emergency Roof Repairs Involve",
      paragraphs: [
        "Emergency roof repairs are temporary measures designed to stop water entering your home until permanent repairs can be completed safely. Common temporary fixes include applying roof sealant or silicone to cracks, placing tarps over damaged sections and securing loose or missing tiles or sheets. These solutions buy you time but are not long-term fixes.",
        "Once the weather clears and conditions are safe, the roofer will return to assess the full extent of damage and provide a detailed quote for permanent repairs. Emergency callouts typically cost between $300 and $800 during business hours, with after-hours and weekend work costing more. Permanent repairs are quoted separately and depend on the damage severity.",
      ],
      bullets: [
        "Temporary fixes include tarps, sealants and securing loose materials",
        "Emergency callouts focus on stopping water entry, not permanent repairs",
        "Expect to pay $300-$800 for emergency response during business hours",
        "After-hours and weekend callouts may cost $500-$1,200 depending on complexity",
      ],
    },
    {
      id: "when-a-leak-is-not-an-emergency",
      heading: "When a Leak is Not an Emergency",
      paragraphs: [
        "If you discover a small damp patch on the ceiling but no active water dripping, or if the leak only appears during heavy rain and stops when rain eases, this is usually not an emergency. Contain any water, document the issue with photos and arrange a roof inspection during normal business hours. You will save money and still get the problem fixed properly.",
        "Many roof leaks in Sydney homes are caused by blocked gutters, damaged flashing around chimneys or worn seals around roof penetrations. These issues rarely worsen overnight and can be assessed and repaired during a scheduled visit. Calling an emergency service for a non-urgent leak means paying premium rates for work that could have been done more affordably the next business day.",
      ],
      bullets: [
        "Small damp patches with no active dripping can usually wait until morning",
        "Leaks that only occur during heavy rain and then stop are not urgent",
        "Contain water, take photos and book an inspection within 24-48 hours",
        "Avoid paying emergency rates for issues that pose no immediate structural risk",
      ],
    },
    {
      id: "preventing-future-leaks",
      heading: "Preventing Future Leaks and Staying Prepared",
      paragraphs: [
        "The best way to handle roof leaks is to prevent them happening in the first place. Schedule annual roof inspections before storm season so any wear and tear can be addressed early. Keep gutters clear of leaves and debris, check flashing around chimneys and vents annually and replace damaged or missing tiles promptly. Small maintenance tasks prevent expensive emergency callouts.",
        "Keep contact details for a trusted licensed roofer saved in your phone so you are not searching frantically during a crisis. Know where your home insurance policy documents are stored and understand what roof damage is covered. Having a rainy day plan ready means you can respond calmly and effectively when leaks occur.",
      ],
      bullets: [
        "Schedule annual roof inspections before Sydney storm season starts",
        "Clear gutters and check flashing regularly to catch problems early",
        "Save contact details for a licensed roofer before you need them urgently",
        "Review your home insurance policy so you know what roof damage is covered",
      ],
    },
  ],

  testimonial: {
    name: "Emma K.",
    location: "Epping, Sydney",
    quote: "Water started pouring through the lounge room ceiling during a massive storm at midnight. We called Sydney Roofing and Gutters and they were here within 90 minutes, tarp on the roof and leak stopped. Genuine lifesavers.",
    rating: 5,
  },

  cta: {
    heading: "Need Emergency Roof Repairs?",
    text: "We offer 24-hour emergency response across Sydney for roof leaks and storm damage. Licensed, insured and ready to help when you need it most.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof leak", "emergency repairs", "roof maintenance", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
