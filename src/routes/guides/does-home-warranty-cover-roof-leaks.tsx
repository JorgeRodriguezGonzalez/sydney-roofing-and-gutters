import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Does Home Warranty Cover Roof Leaks?",
  slug: "does-home-warranty-cover-roof-leaks",
  path: "/guides/does-home-warranty-cover-roof-leaks/",
  description: "Find out whether your home warranty insurance covers roof leaks in Sydney. Learn about typical exclusions, structural defects, policy limits and how to claim.",
  keywords: "home warranty roof leaks, building insurance roof damage, roof leak coverage sydney, warranty claim roof, structural defects nsw",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Does Home Warranty Cover Roof Leaks?",
    subheadline: "A clear guide to understanding what your home warranty insurance does and does not cover when it comes to roof leaks in Sydney and across NSW.",
    bullets: [
      "Understand the difference between home warranty insurance and building insurance",
      "Learn which types of roof leaks are typically covered and which are excluded",
      "Find out what evidence you need to make a successful claim",
      "Know your rights under NSW building and consumer protection laws",
    ],
  },

  intro: {
    paragraphs: [
      "Roof leaks can cause serious damage to your home, from ceiling stains and mould to structural timber rot. When water starts dripping through your ceiling, one of the first questions homeowners ask is whether their warranty or insurance will cover the repair costs.",
      "The answer depends on several factors including the type of policy you hold, the age of your home, and most importantly the cause of the leak. Home warranty insurance in NSW is designed to cover certain defects in new building work, but it is not a general maintenance plan and many common leak scenarios fall outside its scope.",
      "This guide explains how home warranty insurance works in NSW, what roof leak situations are typically covered, and what steps to take if you discover a leak that you believe should be covered under warranty.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Home warranty insurance in NSW covers structural defects and certain waterproofing failures in new or renovated homes for up to 6 years",
      "General wear and tear, lack of maintenance, storm damage and gradual deterioration are not covered under home warranty insurance",
      "You must report defects to your builder first and allow them reasonable opportunity to fix the issue before claiming on warranty insurance",
      "Building insurance covers sudden damage from storms, falling trees and other insured events, but not defects in workmanship or materials",
    ],
  },

  sections: [
    {
      id: "what-is-home-warranty-insurance",
      heading: "What Is Home Warranty Insurance in NSW?",
      paragraphs: [
        "Home warranty insurance, previously called Home Owners Warranty or HOW insurance, is a form of last-resort protection required by law in NSW for residential building work over $20,000. It covers structural defects and incomplete work if your builder dies, disappears or becomes insolvent during construction or within the defects liability period.",
        "The coverage is not immediate and only kicks in after the builder has been given a chance to remedy the defect. For roof work, home warranty insurance typically covers structural defects like incorrect roof framing or failure of waterproofing membranes installed during construction, but only if the builder cannot or will not fix the problem.",
      ],
      bullets: [
        "Required for residential building contracts and owner-builder permits over $20,000",
        "Covers incomplete work, non-structural defects for 2 years, structural defects for 6 years",
        "Only applies to work completed after the policy was taken out",
        "Does not cover defects you knew about before purchase or that were listed in a pre-purchase inspection",
      ],
    },
    {
      id: "when-roof-leaks-are-covered",
      heading: "When Roof Leaks Are Typically Covered",
      paragraphs: [
        "A roof leak may be covered under home warranty insurance if it results from a structural defect or failure in the original construction. Examples include incorrectly installed valley irons that allow water to enter the roof cavity, missing or poorly fitted sarking that fails to redirect moisture, or improperly fastened roofing sheets that lift and let water through.",
        "For coverage to apply, the defect must stem from faulty workmanship or materials used during the original building or renovation work. The leak must also be reported within the warranty period, which is 2 years for non-structural defects and 6 years for major structural defects under NSW law.",
      ],
      bullets: [
        "Leaks caused by faulty installation of flashings, valleys or ridge capping",
        "Roof membrane or sarking installed incorrectly allowing water penetration",
        "Structural framing defects that cause the roof to sag or pond water",
        "Defective materials like cracked tiles or sheets that fail prematurely due to manufacturing faults",
      ],
    },
    {
      id: "common-exclusions",
      heading: "Common Exclusions and What Is Not Covered",
      paragraphs: [
        "Most roof leaks are not covered by home warranty insurance because they fall into excluded categories. Wear and tear is the most common exclusion. If your roof has reached the end of its expected lifespan and starts leaking due to age, warranty insurance will not cover repairs. Similarly, damage from lack of maintenance such as blocked gutters leading to overflow is excluded.",
        "Storm damage, falling branches, hail and other external events are also not covered under home warranty insurance. These types of sudden damage fall under building or home and contents insurance, which is a separate policy. If you have not maintained adequate building insurance, you may be left to cover repair costs yourself.",
      ],
      bullets: [
        "Leaks from normal wear and age-related deterioration of roofing materials",
        "Storm damage, wind-blown debris, hail or falling trees",
        "Damage caused by poor maintenance like blocked gutters or overhanging branches",
        "Pre-existing defects known at the time of purchase or settlement",
      ],
    },
    {
      id: "making-a-claim",
      heading: "How to Make a Home Warranty Claim for a Roof Leak",
      paragraphs: [
        "If you believe a roof leak is the result of defective building work, the first step is to contact your builder in writing and give them a reasonable opportunity to inspect and repair the defect. This is a legal requirement in NSW before you can claim on warranty insurance. Keep copies of all correspondence, photos of the damage and any inspection reports.",
        "If the builder refuses to repair the defect, cannot be contacted, or has gone out of business, you can lodge a claim with the insurer who underwrote the home warranty policy. You will need to provide evidence that the defect was caused by faulty workmanship, that it falls within the warranty period, and that you have made reasonable efforts to have the builder rectify the issue.",
      ],
      bullets: [
        "Document the leak with photos, videos and any water damage to ceilings or walls",
        "Notify the builder in writing and allow reasonable time for them to respond",
        "Obtain an independent building inspection report identifying the cause of the leak",
        "Lodge a claim with the warranty insurer only after the builder fails to remedy the defect",
      ],
    },
    {
      id: "alternatives-and-building-insurance",
      heading: "Building Insurance and Other Coverage Options",
      paragraphs: [
        "While home warranty insurance is limited in scope, building insurance is essential for protecting your home from sudden and unexpected damage including storm-related roof leaks. Building insurance covers the cost to repair or rebuild your home if it is damaged by events like severe weather, fire, or vandalism.",
        "Building insurance does not cover gradual deterioration or poor maintenance, but it does cover most scenarios where external forces cause sudden damage to your roof. If a severe storm tears off roofing sheets or a tree falls onto your roof during high winds, building insurance will typically cover the repair costs minus any excess.",
      ],
      bullets: [
        "Building insurance covers sudden damage from storms, falling objects and natural disasters",
        "Policies typically exclude wear and tear, pest damage and maintenance-related issues",
        "Check your policy for coverage limits on temporary repairs and emergency accommodation",
        "Maintain records of roof maintenance to support claims and prove you met policy conditions",
      ],
    },
  ],

  testimonial: {
    name: "Emma K.",
    location: "Parramatta, Sydney",
    quote: "We had a leak from poorly installed valley irons on our new extension. After the builder went silent, we lodged a warranty claim and the insurer covered the repairs. Documentation and photos made all the difference.",
    rating: 5,
  },

  cta: {
    heading: "Need Expert Help with a Roof Leak?",
    text: "Whether you need an independent inspection report for a warranty claim or fast repairs to stop a leak, our licensed team can help. We provide detailed reports and quality repairs across Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["home warranty", "roof leaks", "building insurance", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
