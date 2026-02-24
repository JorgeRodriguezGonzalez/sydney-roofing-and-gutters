import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Can I Claim Roof Repairs on My Insurance?",
  slug: "can-i-claim-roof-repairs-on-my-insurance",
  path: "/guides/can-i-claim-roof-repairs-on-my-insurance/",
  description: "Learn when you can claim roof repairs through home insurance in Sydney, what damage is typically covered, and how to file a successful claim with proper documentation.",
  keywords: "roof insurance claims sydney, home insurance roof damage, storm damage claims, roof repair insurance coverage, insurance assessor",
  publishedISO: "2021-03-26",
  modifiedISO: "2026-02-19",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Can I Claim Roof Repairs on My Insurance?",
    subheadline: "A practical guide for Sydney homeowners on navigating insurance claims for roof damage, understanding coverage limits, and working with assessors to get repairs approved.",
    bullets: [
      "Understand what types of roof damage are covered by standard home insurance policies",
      "Learn the difference between sudden damage and gradual wear when filing claims",
      "Discover how to document damage properly to support your claim",
      "Know when it makes financial sense to claim versus paying out of pocket",
    ],
  },

  intro: {
    paragraphs: [
      "Roof damage can happen suddenly during a severe storm or gradually over years of exposure to the elements. Whether you can claim repairs through your home insurance depends on the cause of damage, the type of policy you hold, and how well you have maintained your roof over time.",
      "Most standard home and contents policies in Australia cover sudden and accidental damage to roofs caused by storms, hail, falling trees or fire. What they typically do not cover is damage from poor maintenance, gradual deterioration or wear and tear. Understanding this distinction is critical before lodging a claim.",
      "Sydney homeowners face unique challenges with roof insurance claims due to the frequency of severe weather events across the region. Insurers in NSW are increasingly strict about assessing pre-existing damage and maintenance history, so proper documentation is essential.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Standard home insurance covers sudden damage from storms, hail, fire and falling objects but excludes gradual wear",
      "You must report damage promptly — most insurers require claims within 30 to 90 days of the event",
      "Photos, repair quotes and maintenance records strengthen your claim significantly",
      "Small claims under $2,000 may cost more in premium increases than paying for repairs directly",
    ],
  },

  sections: [
    {
      id: "understanding-roof-coverage",
      heading: "Understanding Roof Coverage in Home Insurance Policies",
      paragraphs: [
        "Most Australian home insurance policies provide cover for the building structure including the roof. There are two main types of policies: basic fire and perils cover, and comprehensive building insurance. Comprehensive policies are far more common and cover a broader range of damage scenarios including storm and water damage.",
        "The key limitation across all policies is that damage must be sudden and unforeseen. If an assessor determines that damage resulted from lack of maintenance or was developing over months or years, the claim will likely be denied. Insurers also set coverage limits for roofs on older homes, sometimes capping payouts for roofs over 15 or 20 years old.",
      ],
      bullets: [
        "Comprehensive building insurance covers storm, hail, fire, and impact damage to roofs",
        "Policies exclude gradual wear, rust, deterioration and damage from poor maintenance",
        "Older roofs may have reduced coverage or require additional premiums for full replacement",
        "Review your Product Disclosure Statement to understand specific exclusions and limits",
      ],
    },
    {
      id: "what-damage-is-covered",
      heading: "What Types of Roof Damage Are Typically Covered",
      paragraphs: [
        "Storm damage is the most common reason Sydney homeowners claim on their roof insurance. This includes missing or lifted tiles from high winds, punctures from hail, and damage from fallen tree branches. If a storm event is recorded in your area on the date you report, insurers are more likely to accept the claim without dispute.",
        "Other covered events include fire damage, damage from aircraft or vehicles striking the home, and water damage resulting from a sudden roof failure. What is not covered includes leaks from cracked tiles that have been deteriorating for years, rust holes in metal roofing, or damage caused by pests like possums or birds nesting in the roof space.",
      ],
      bullets: [
        "Storm and hail damage with evidence of a weather event on the date reported",
        "Fallen trees or branches causing impact damage during storms",
        "Fire damage affecting the roof structure or covering",
        "Sudden leaks from structural failure, not pre-existing wear or poor installation",
      ],
    },
    {
      id: "documenting-and-filing-claims",
      heading: "How to Document Damage and File a Claim",
      paragraphs: [
        "The moment you notice roof damage, take clear photos from ground level and inside the roof space if accessible. Photograph the overall damage, close-ups of specific problem areas, and any water stains on ceilings or walls. If safe, capture images of missing tiles or torn metal sheets. This visual evidence is critical when the assessor reviews your claim.",
        "Contact your insurer as soon as possible to lodge the claim. Most policies require notification within 30 to 90 days of the damage occurring or being discovered. Provide the date of the storm or event, describe the damage clearly, and submit your photos. The insurer will then arrange for an assessor to inspect the property.",
        "While waiting for the assessor, take reasonable steps to prevent further damage such as placing a tarp over exposed areas. Keep receipts for any emergency repairs — these are usually claimable. Do not begin permanent repairs until the assessor has inspected and approved the claim.",
      ],
      bullets: [
        "Take wide and close-up photos of all damage from multiple angles",
        "Note the date and time of the storm or event that caused the damage",
        "Lodge your claim within the timeframe specified in your policy",
        "Arrange temporary protection like tarps and keep receipts for emergency work",
      ],
    },
    {
      id: "working-with-assessors",
      heading: "Working with Insurance Assessors and Getting Quotes",
      paragraphs: [
        "Once your claim is lodged, the insurer will send an assessor to inspect the damage. The assessor determines whether the damage is covered under your policy and estimates the repair cost. Be present during the inspection if possible, and point out all affected areas including internal water damage and less obvious issues like lifted flashing.",
        "Assessors work for the insurance company, so their estimates may be conservative. You have the right to obtain independent quotes from licensed roofing contractors. If the assessor quotes significantly lower than your contractor, you can challenge the assessment by providing detailed written quotes that itemise materials and labour separately.",
      ],
      bullets: [
        "Be present during the assessment and highlight all damage areas",
        "Ask the assessor to explain their findings and coverage decision",
        "Obtain at least two independent quotes from licensed NSW roofing contractors",
        "Challenge low assessments with detailed quotes and supporting photos",
      ],
    },
    {
      id: "when-to-claim-versus-pay",
      heading: "When to Claim Insurance Versus Paying Out of Pocket",
      paragraphs: [
        "Not every roof repair warrants an insurance claim. Small jobs under $1,500 to $2,000 are often better handled without involving your insurer. Making a claim can increase your premiums at renewal and may affect your no-claims discount. If you make multiple claims within a few years, some insurers may refuse to renew your policy.",
        "Before claiming, compare the repair cost against your excess and potential premium increases. If the repair costs $3,000 and your excess is $1,000, you will only receive $2,000 from the insurer. If that claim causes your annual premium to rise by $300 for the next three years, you end up worse off financially. For major damage over $5,000, claims usually make sense.",
      ],
      bullets: [
        "Small repairs under $2,000 may cost more in future premiums than paying directly",
        "Consider your excess amount and likely premium increases before claiming",
        "Multiple claims in a short period can lead to policy non-renewal",
        "Always claim for major damage from storms, fire or fallen trees regardless of excess",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Castle Hill, Sydney",
    quote: "After a hailstorm damaged our tile roof, I documented everything with photos and called our insurer the same day. The assessor was fair and our claim was approved within two weeks. The repairs were completed professionally and we only paid the excess.",
    rating: 5,
  },

  cta: {
    heading: "Need a Quote for Your Insurance Claim?",
    text: "We provide detailed written quotes for insurance claims and work with assessors across Sydney to ensure you get fair coverage. Contact us for a free assessment of your roof damage.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["insurance claims", "roof damage", "storm damage", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
