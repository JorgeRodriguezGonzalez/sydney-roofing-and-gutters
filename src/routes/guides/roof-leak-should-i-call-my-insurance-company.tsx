import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Roof Leak: Should I Call My Insurance Company?",
  slug: "roof-leak-should-i-call-my-insurance-company",
  path: "/guides/roof-leak-should-i-call-my-insurance-company/",
  description: "Learn when to contact your insurance company for a roof leak, what damage is covered, how to document claims and what to do first when you discover water damage in your Sydney home.",
  keywords: "roof leak insurance claim, storm damage insurance, roof repair insurance, water damage claim sydney, home insurance roof",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Roof Leak: Should I Call My Insurance Company?",
    subheadline: "A practical guide for Sydney homeowners on when to contact your insurer for roof leaks, what damage is covered and how to protect your claim from the moment you discover water.",
    bullets: [
      "Know which roof leaks are covered by insurance and which are not",
      "Learn the correct order of steps to take when you discover a leak",
      "Understand how to document damage properly for your claim",
      "Find out when emergency repairs help or hurt your insurance claim",
    ],
  },

  intro: {
    paragraphs: [
      "You walk into the living room and see a brown stain spreading across the ceiling. Or you hear dripping in the roof cavity during a storm. The first question most Sydney homeowners ask is whether they should call their insurance company immediately. The answer depends on what caused the leak and how your policy is structured.",
      "Insurance policies in Australia are designed to cover sudden and accidental damage, not wear and tear or lack of maintenance. A leak caused by a storm ripping off roof tiles is usually covered. A leak caused by 20 years of neglected gutters and rusted valleys is not. Knowing the difference can save you thousands of dollars and prevent a declined claim.",
      "This guide walks you through the decision process step by step, from the moment you discover water to lodging a claim and arranging repairs. We also cover common mistakes that can jeopardise your claim even when the damage should be covered.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: insurance and roof leaks",
    bullets: [
      "Most home insurance policies cover storm damage but exclude wear and tear or poor maintenance",
      "Document everything with photos and video before making any repairs beyond emergency measures",
      "You must take reasonable steps to prevent further damage or the insurer may reduce your payout",
      "Get quotes from licensed roofers but wait for insurer approval before starting permanent repairs",
    ],
  },

  sections: [
    {
      id: "what-damage-is-covered",
      heading: "What Types of Roof Leak Are Covered by Insurance?",
      paragraphs: [
        "Home and contents insurance in NSW typically covers damage from defined events like storms, hail, fallen trees or sudden impact. If severe wind lifts tiles or sheets, or hail punches holes in your roof and water enters, that is generally a claimable event. The same applies if a tree branch falls during a storm and damages the structure.",
        "What insurance does not cover is gradual deterioration. If your valley irons have rusted through over the years, or ridge capping has come loose because screws were never maintained, the insurer will likely refuse the claim. Policies also exclude damage from poor workmanship or faulty installation, though you may have recourse against the original contractor.",
      ],
      bullets: [
        "Covered: storm or wind damage, hail impact, fallen trees, sudden accidental damage",
        "Not covered: rust, wear and tear, lack of maintenance, poor workmanship, faulty design",
        "Age matters: insurers may deny claims if the roof has reached end of life (typically 40+ years for tiles, 25+ for old metal)",
        "Read your Product Disclosure Statement to understand specific exclusions and sub-limits",
      ],
    },
    {
      id: "first-steps-when-you-find-a-leak",
      heading: "What to Do Immediately When You Discover a Leak",
      paragraphs: [
        "The moment you notice water coming through, your priority is to minimise damage. Move furniture and valuables away from the affected area. Place buckets or towels to catch dripping water. If you can safely access the roof space, place a tarp or bucket under the point where water is entering. Do not attempt to climb onto the roof during a storm or in wet conditions.",
        "Once the immediate danger is managed, start documenting everything. Take photos and video of the ceiling damage, water stains, pooling water and any visible external damage like missing tiles or lifted sheets. Photograph the date stamp on your phone or include a newspaper in the shot. This evidence is critical if the insurer disputes the cause or timing of damage.",
      ],
      bullets: [
        "Stop water damage: move items, place buckets, protect floors and furniture",
        "Document everything: photos of internal damage, external roof, date and time stamps",
        "Do not delay: contact your insurer within 24 to 48 hours of discovering the damage",
        "Keep all receipts for emergency materials like tarps, buckets or fans used to dry the area",
      ],
    },
    {
      id: "when-to-call-your-insurer",
      heading: "When You Should Contact Your Insurance Company",
      paragraphs: [
        "If the damage was caused by a defined event (storm, hail, impact) and you have a standard home insurance policy, contact your insurer as soon as practical. Most policies require you to notify them within a reasonable timeframe, usually 24 to 48 hours. Failing to notify promptly can give the insurer grounds to reduce or deny your claim.",
        "Before you call, gather your policy number, details of when and how the damage occurred, and the photos you took. Be honest and factual. If you are unsure whether the leak is related to a storm or gradual wear, say so. Do not speculate or exaggerate, as this can be used against you later if the assessor finds inconsistencies.",
      ],
      bullets: [
        "Call within 24-48 hours of discovering damage from a storm or sudden event",
        "Have your policy number, date of damage and photos ready before you call",
        "Be honest: do not guess at causes or hide information about roof age or maintenance",
        "Ask the insurer if they will send an assessor or if they want you to get quotes first",
      ],
    },
    {
      id: "emergency-repairs-and-your-claim",
      heading: "Emergency Repairs: What You Can and Cannot Do",
      paragraphs: [
        "Most insurance policies require you to take reasonable steps to prevent further damage. This means you can and should make temporary emergency repairs like tarping a hole or placing buckets to catch water. Keep all receipts and take photos before and after the temporary fix. These costs are usually reimbursable.",
        "What you must not do is arrange permanent repairs before the insurer assesses the damage. If you replace the roof or fix the valley before an assessor visits, the insurer may argue that they cannot verify the cause of damage and refuse the claim. Always wait for approval unless the damage is so severe that delay would cause substantially worse harm.",
      ],
      bullets: [
        "Temporary fixes like tarps, sandbags or buckets are expected and reimbursable",
        "Do not arrange permanent roof repairs until the insurer approves the claim",
        "If immediate structural danger exists, get emergency quotes and call your insurer immediately for approval",
        "Document all temporary repairs with photos and keep receipts to include in your claim",
      ],
    },
    {
      id: "working-with-assessors-and-roofers",
      heading: "Dealing with Assessors and Choosing a Roofer",
      paragraphs: [
        "Your insurer will usually send an assessor to inspect the damage and determine the cause. Be present during the inspection if possible. Point out all damage including internal water stains, external roof damage and any other related issues like damaged gutters or fascia. Assessors sometimes focus only on the most obvious damage and miss secondary problems.",
        "Once the claim is approved, you will need to get quotes from licensed roofing contractors. The insurer may nominate a preferred supplier or allow you to choose your own. Get at least two quotes and ensure they are detailed, itemising materials and labour separately. Insurers will pay based on reasonable market rates, not inflated quotes.",
      ],
      bullets: [
        "Be present when the assessor inspects and point out all related damage",
        "Ask the assessor to explain their findings and what will be covered",
        "Get quotes from licensed NSW roofing contractors with current insurance and warranties",
        "If the payout seems too low, you can request a review or get an independent assessment",
      ],
    },
    {
      id: "common-mistakes-that-hurt-claims",
      heading: "Common Mistakes That Can Ruin Your Claim",
      paragraphs: [
        "Many homeowners accidentally damage their own insurance claims by acting too quickly or providing incomplete information. One common mistake is failing to report the damage promptly. If you wait weeks or months, the insurer may argue that subsequent damage was preventable or that the original cause is unclear.",
        "Another mistake is exaggerating the claim or adding unrelated damage. If the assessor finds that you claimed for old pre-existing water stains or damage from a different event, the entire claim may be declined for fraud. Stick to the facts and only claim what is directly related to the insured event.",
      ],
      bullets: [
        "Do not delay reporting: notify the insurer within 24-48 hours of discovery",
        "Do not exaggerate or include pre-existing damage in your claim",
        "Do not start permanent repairs without insurer approval",
        "Keep all documentation organised: photos, receipts, quotes, correspondence with insurer",
      ],
    },
  ],

  testimonial: {
    name: "Michelle T.",
    location: "Epping, Sydney",
    quote: "We had tiles blown off in a wild storm and water came through the ceiling. I called the insurer that night, took photos and got a tarp up. The claim was approved in five days and the roof was repaired within two weeks. Documentation made all the difference.",
    rating: 5,
  },

  cta: {
    heading: "Need Help with a Roof Leak?",
    text: "Whether you are lodging an insurance claim or paying for repairs yourself, we provide detailed quotes and documentation to support your claim. Contact us for a free inspection and written report.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["insurance claims", "roof leaks", "storm damage", "emergency repairs"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
