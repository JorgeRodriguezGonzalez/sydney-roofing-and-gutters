import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Is a Leaking Skylight Covered by Insurance?",
  slug: "is-a-leaking-skylight-covered-by-insurance",
  path: "/guides/is-a-leaking-skylight-covered-by-insurance/",
  description: "Find out if your home insurance covers a leaking skylight in Sydney. Learn about what types of damage are covered, exclusions, claim processes and how to protect your policy rights.",
  keywords: "skylight insurance, leaking skylight claim, home insurance sydney, skylight damage coverage, insurance excess",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Is a Leaking Skylight Covered by Insurance?",
    subheadline: "A practical guide for Sydney homeowners on when home insurance covers skylight leaks, what to expect from the claims process and how to strengthen your case.",
    bullets: [
      "Understand which types of skylight damage qualify for insurance claims",
      "Learn the difference between sudden damage and gradual deterioration",
      "Know what evidence insurers require to process your claim",
      "Find out how to prevent claim rejection due to lack of maintenance",
    ],
  },

  intro: {
    paragraphs: [
      "Skylights are a popular feature in Sydney homes, bringing natural light and ventilation into living spaces. But when a skylight starts leaking, homeowners often wonder whether their insurance policy will cover the cost of repairs or replacement. The answer depends on what caused the leak and how your policy is structured.",
      "Most home and contents insurance policies in Australia cover sudden and accidental damage, but exclude damage caused by wear and tear, poor maintenance or gradual deterioration. A skylight that leaks after a hailstorm is likely covered. A skylight that leaks because the seals have perished over ten years is usually not.",
      "This guide explains how insurers assess skylight leak claims, what types of damage are typically covered, and what steps you can take to improve your chances of a successful claim. It is based on common policy wording from major Australian insurers and real-world claim outcomes.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Sudden damage from storms, falling branches or impact is usually covered by home insurance",
      "Wear and tear, perished seals, rust and gradual deterioration are typically excluded",
      "You need to prove the damage was sudden and not the result of deferred maintenance",
      "Excesses for storm damage claims in Sydney range from $500 to $2,500 depending on your policy",
    ],
  },

  sections: [
    {
      id: "what-types-of-damage-are-covered",
      heading: "What Types of Skylight Damage Are Covered",
      paragraphs: [
        "Standard home insurance policies cover damage from defined events. The most common covered events that can damage skylights include storm, hail, falling objects such as tree branches, fire, malicious damage and accidental breakage. If a severe thunderstorm cracks your skylight glass or lifts the flashing, that damage is usually covered.",
        "Impact damage is another covered category. If someone drops a tool during roof work and cracks your skylight, or if debris from a neighbouring property damages it during a storm, insurers generally accept those as valid claims. The key requirement is that the event was sudden and unforeseeable.",
      ],
      bullets: [
        "Storm and hail damage including cracked glass, lifted flashings or broken frames",
        "Impact from falling tree branches, debris or accidental damage during roof work",
        "Malicious damage such as vandalism or deliberate breakage",
        "Fire or smoke damage affecting skylight materials or seals",
      ],
    },
    {
      id: "what-is-not-covered",
      heading: "What Is Not Covered by Most Policies",
      paragraphs: [
        "Insurance policies are designed to cover unforeseen events, not ongoing maintenance. Damage caused by wear and tear, ageing, rust, corrosion or gradual perishing of seals and gaskets is excluded. If your skylight has been leaking slowly for months or years because the rubber seals have degraded, insurers will treat that as a maintenance issue.",
        "Poor installation or defective materials are also excluded. If the skylight was installed incorrectly or if the manufacturer supplied a faulty unit, your insurance will not pay. In those cases, your remedy is against the installer or manufacturer, not your insurer.",
      ],
      bullets: [
        "Wear and tear including perished seals, rusted frames or degraded glazing",
        "Poor installation, incorrect flashing or builder errors",
        "Lack of maintenance such as blocked drainage channels or uncleaned seals",
        "Pre-existing damage that was present when you took out the policy",
      ],
    },
    {
      id: "how-insurers-assess-your-claim",
      heading: "How Insurers Assess Your Claim",
      paragraphs: [
        "When you lodge a claim, the insurer will appoint an assessor to inspect the skylight and determine the cause of the leak. The assessor will look for visible storm damage, cracks, impact marks or signs that the damage occurred suddenly. They will also check for evidence of poor maintenance, rust, perished seals or other issues that suggest gradual deterioration.",
        "Photographs are critical. If you can show photos of the skylight before the storm and photos immediately after the damage, it strengthens your case. Many claims are rejected because homeowners cannot prove the damage was sudden rather than gradual. Assessors are trained to distinguish between new impact damage and old wear.",
      ],
      bullets: [
        "Assessor visits your property to inspect the skylight and surrounding roof",
        "They look for sudden damage markers such as cracks, impact points or storm debris",
        "They check maintenance history including whether seals were replaced or cleaned",
        "You must provide evidence the damage occurred during a specific insured event",
      ],
    },
    {
      id: "strengthening-your-claim",
      heading: "How to Strengthen Your Claim",
      paragraphs: [
        "Documenting the condition of your skylight before damage occurs is the single best way to protect your claim rights. Take clear photos of your skylight every year or two, especially before and after storm seasons. If a storm hits and you suspect damage, photograph the skylight and any visible leaks or cracks within 24 hours.",
        "Keep records of any maintenance work. If you have had the skylight seals replaced, flashing repaired or the frame serviced, keep the invoices. This shows the insurer you have maintained the skylight properly and that the leak is not due to neglect. If you cannot prove maintenance, insurers often assume the worst.",
      ],
      bullets: [
        "Take dated photos of your skylight annually and after major storms",
        "Report damage to your insurer within the timeframe specified in your policy",
        "Keep invoices for any skylight maintenance or repair work over the years",
        "Get a written report from a licensed roofer identifying the cause of the leak",
      ],
    },
    {
      id: "understanding-excesses-and-payouts",
      heading: "Understanding Excesses and Payouts",
      paragraphs: [
        "If your claim is accepted, you will pay an excess before the insurer covers the rest. Storm and water damage excesses in Sydney typically range from $500 to $2,500 depending on your policy and your location. Homes in storm-prone areas or near the coast often face higher excesses.",
        "The payout amount depends on whether your policy is replacement or indemnity. Replacement cover pays to install a new skylight of similar quality. Indemnity cover deducts an amount for age and wear, which can leave you significantly out of pocket. Most modern policies offer replacement cover for buildings but check your policy schedule to be sure.",
      ],
      bullets: [
        "Standard excesses range from $500 to $1,000 for most home insurance policies",
        "Storm-related excesses can be higher, especially in coastal suburbs",
        "Replacement policies pay to install a new skylight of equivalent quality",
        "Indemnity policies deduct depreciation, which may only cover part of the cost",
      ],
    },
    {
      id: "when-to-get-professional-help",
      heading: "When to Get Professional Help",
      paragraphs: [
        "If your claim is denied or the insurer offers a lower payout than expected, you have options. Start by requesting a detailed explanation in writing. Insurers must provide clear reasons for their decision. If you believe the decision is unfair, you can escalate the matter to the Australian Financial Complaints Authority, which provides free dispute resolution for consumers.",
        "Before making a claim, it is often worth getting a licensed roofer to inspect the skylight and provide a written report. A professional report identifying storm damage or impact as the cause of the leak can make the difference between a successful claim and a rejection. The cost of the inspection is usually a few hundred dollars, far less than the cost of a full skylight replacement.",
      ],
      bullets: [
        "Get a licensed roofer to inspect and document the cause of the leak before claiming",
        "Request a written explanation if your claim is denied or reduced",
        "Lodge a complaint with AFCA if you believe the insurer decision is unfair",
        "Consider engaging a loss assessor if the claim is complex or high value",
      ],
    },
  ],

  testimonial: {
    name: "Emma K.",
    location: "Wahroonga, Sydney",
    quote: "After a big storm cracked our skylight, we were worried the insurer would refuse the claim. We got a roofer to document the damage and submitted photos. The claim was approved within a week and we only paid the excess.",
    rating: 5,
  },

  cta: {
    heading: "Need Help with a Leaking Skylight?",
    text: "Whether you are preparing an insurance claim or need urgent repair, our team can inspect your skylight, provide a written report and carry out repairs to prevent further water damage.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["skylight repair", "insurance claims", "storm damage", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
