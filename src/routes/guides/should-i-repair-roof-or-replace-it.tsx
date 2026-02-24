import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Should I Repair My Roof or Replace It?",
  slug: "should-i-repair-roof-or-replace-it",
  path: "/guides/should-i-repair-roof-or-replace-it/",
  description: "Learn when roof repair is enough and when full replacement is necessary for Sydney homes. Compare costs, lifespan and decision factors to make the right choice.",
  keywords: "roof repair vs replacement, when to replace roof sydney, roof repair cost, roof replacement cost, roof lifespan",
  publishedISO: "2024-01-03",
  modifiedISO: "2026-02-04",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Should I Repair My Roof or Replace It?",
    subheadline: "A practical guide for Sydney homeowners facing roof damage. Learn when a repair is sufficient and when full replacement is the smarter long-term investment.",
    bullets: [
      "Understand the key factors that determine repair versus replacement decisions",
      "Compare costs, lifespan and benefits of each option for Sydney homes",
      "Identify warning signs that indicate full replacement is necessary",
      "Learn how roof age and material type affect the repair-or-replace decision",
    ],
  },

  intro: {
    paragraphs: [
      "When you discover roof damage on your Sydney home, the first question that comes to mind is whether a simple repair will fix the problem or if the entire roof needs replacing. It is a critical decision that affects your budget, your home value and your peace of mind for years to come.",
      "The answer depends on several factors including the age of your roof, the extent and type of damage, your budget constraints and your long-term plans for the property. A small leak in an otherwise sound roof is very different from widespread deterioration across multiple sections.",
      "At Sydney Roofing and Gutters, we help homeowners make informed decisions every week. This guide breaks down the key considerations so you can choose the option that makes the most sense for your situation.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: repair or replace?",
    bullets: [
      "Repairs typically cost $200 to $2,000 depending on extent; full replacement ranges from $12,000 to $40,000 for Sydney homes",
      "If your roof is over 20 years old and showing multiple problems, replacement is usually more cost-effective",
      "Damage covering less than 25% of the roof area often justifies repair rather than full replacement",
      "Some insurance policies cover storm damage repair but not wear-and-tear replacement, so check your policy before deciding",
    ],
  },

  sections: [
    {
      id: "assessing-extent-of-damage",
      heading: "Assessing the Extent of Damage",
      paragraphs: [
        "The first step is understanding how much of your roof is affected. A single cracked tile, a few missing screws or a small flashing leak can usually be repaired quickly and affordably. But if you notice multiple leaks in different areas, widespread rust or corrosion, or structural sagging, these are signs of systemic failure.",
        "For tile roofs in Sydney, one of the most common issues is broken or slipped tiles after storms. If only a handful of tiles are damaged and the rest are in good condition, repair is straightforward. However, if large sections of tiles are cracked, brittle or delaminating, replacement becomes the safer option.",
      ],
      bullets: [
        "Isolated damage: single leak, small area of missing tiles or flashing — repair is appropriate",
        "Widespread damage: multiple leaks, extensive rust, sagging sections — replacement is often needed",
        "Hidden damage: check ceiling and roof cavity for water stains that indicate long-term leaks",
        "Professional inspection: a licensed roofer can identify problems not visible from the ground",
      ],
    },
    {
      id: "roof-age-and-material-lifespan",
      heading: "Roof Age and Material Lifespan",
      paragraphs: [
        "Every roofing material has a predictable lifespan. Concrete and terracotta tiles last 40 to 60 years in Sydney, while Colorbond and metal roofs typically last 25 to 40 years. Asphalt shingles, less common in Australia, have shorter lifespans of 15 to 25 years. If your roof is approaching the end of its expected lifespan, replacement is usually the better investment.",
        "Consider this example: if your 22-year-old tile roof has a leak, repairing it might buy you 3 to 5 more years before other sections start failing. In that scenario, spending $1,500 on a repair followed by $25,000 on a replacement in three years means you pay twice. Replacing now saves money and hassle in the long run.",
      ],
      bullets: [
        "Tile roofs over 30 years old with multiple issues should usually be replaced",
        "Metal roofs over 25 years old showing rust or fastener failure are nearing end-of-life",
        "If your roof is less than halfway through its expected lifespan, repair is often sufficient",
        "Age alone is not the only factor — well-maintained roofs can outlast poorly maintained newer roofs",
      ],
    },
    {
      id: "cost-comparison-and-roi",
      heading: "Cost Comparison and Return on Investment",
      paragraphs: [
        "Repairs are cheaper upfront, ranging from $200 for minor fixes to $2,000 for more involved work like replacing multiple tiles or re-bedding ridge capping. Full roof replacement costs significantly more, typically between $12,000 and $40,000 depending on size, material and complexity. At first glance, repair seems like the obvious choice.",
        "However, you need to consider the long-term return on investment. A new roof adds value to your home, improves energy efficiency and comes with warranties of 10 to 20 years. If you plan to sell in the next 5 years, a new roof can be a strong selling point that justifies a higher asking price. Repeated repairs on an ageing roof drain your budget without adding value.",
      ],
      bullets: [
        "Minor repairs: $200-$800 for isolated problems like broken tiles or small leaks",
        "Major repairs: $1,000-$3,000 for extensive flashing work, re-bedding or structural fixes",
        "Full replacement: $12,000-$40,000 depending on material, size and access",
        "Consider total cost over 10 years — multiple repairs can exceed the cost of one replacement",
      ],
    },
    {
      id: "warning-signs-replacement-needed",
      heading: "Warning Signs That Replacement Is Needed",
      paragraphs: [
        "Certain problems indicate that repair is no longer practical. If you notice daylight coming through gaps in your roof, widespread water stains on ceilings, sagging roof sections or visible rot in timber battens, these are signs of structural compromise that require full replacement.",
        "Another red flag is when repairs start becoming frequent. If you call a roofer every year for leaks in different spots, the roof has reached the end of its useful life. Continual patch jobs do not address the underlying deterioration and can mask bigger issues until they become emergencies.",
      ],
      bullets: [
        "Multiple leaks appearing in different areas over the past 12 months",
        "Visible sagging or dips in the roof line indicating structural failure",
        "Widespread rust, corrosion or brittle tiles that crumble when touched",
        "Roof is over 25 years old and has never been replaced since the home was built",
      ],
    },
    {
      id: "insurance-and-compliance",
      heading: "Insurance Coverage and Compliance Considerations",
      paragraphs: [
        "Check your home and contents insurance policy before making a decision. Many policies cover sudden storm damage, meaning repairs or replacement caused by hail, wind or falling branches may be partially or fully covered. However, wear-and-tear damage from age or poor maintenance is typically not covered.",
        "In NSW, any roofing work over $5,000 must be carried out by a licensed contractor and comply with the Building Code of Australia and relevant Australian Standards like AS 1562 for metal roofing. If you proceed with replacement, ensure your contractor is licensed and provides proper documentation for insurance and council approval if required.",
      ],
      bullets: [
        "Contact your insurer before proceeding — storm damage repairs may be covered",
        "Keep records and photos of all damage for insurance claims",
        "Any replacement work must comply with current building codes and standards",
        "Licensed contractors provide warranties that protect you if problems arise later",
      ],
    },
    {
      id: "making-the-final-decision",
      heading: "Making the Final Decision",
      paragraphs: [
        "Ultimately, the right choice depends on balancing cost, roof age, extent of damage and your future plans. If your roof is relatively young with isolated damage, repair makes sense. If it is older, showing multiple issues and you plan to stay in the home for at least five more years, replacement is usually the better investment.",
        "The best approach is to get a professional assessment from a licensed roofing contractor. An experienced roofer can inspect your roof, explain what they find and provide quotes for both repair and replacement options. This allows you to make an informed decision based on facts rather than guesswork.",
      ],
      bullets: [
        "Get at least two professional inspections to compare opinions and quotes",
        "Consider your timeline — if selling soon, a repair may be adequate",
        "Think long-term — replacement offers decades of protection and peace of mind",
        "Ask contractors for written quotes that itemise materials, labour and warranties",
      ],
    },
  ],

  testimonial: {
    name: "Lisa M.",
    location: "Hornsby, Sydney",
    quote: "We had three leaks and thought we needed repairs. The inspection showed our 28-year-old roof was failing in multiple spots. Replacing it saved us from endless repairs and we got a 20-year warranty on the new Colorbond roof.",
    rating: 5,
  },

  cta: {
    heading: "Need Help Deciding?",
    text: "Get a free roof inspection and honest advice on whether repair or replacement is right for your Sydney home. No pressure, just expert guidance you can trust.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof repair", "roof replacement", "sydney roofing", "roof maintenance"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
