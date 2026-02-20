import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "What to Do If Your Gutters or Downpipes Are Blocked",
  slug: "what-to-do-if-your-gutters-or-downpipes-are-blocked",
  path: "/guides/what-to-do-if-your-gutters-or-downpipes-are-blocked/",
  description: "Practical steps for Sydney homeowners to identify and fix blocked gutters and downpipes. Learn the warning signs, immediate actions and when to call a professional.",
  keywords: "blocked gutters sydney, downpipe blockage, gutter cleaning, stormwater problems, gutter maintenance",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "What to Do If Your Gutters or Downpipes Are Blocked",
    subheadline: "Immediate steps to protect your Sydney property from water damage when gutters or downpipes become clogged with leaves, debris or nesting materials.",
    bullets: [
      "Recognise the early warning signs of gutter and downpipe blockages",
      "Understand safe DIY clearing methods versus when to call professionals",
      "Learn how to prevent future blockages with proper maintenance",
      "Protect your home from water damage before Sydney storms arrive",
    ],
  },

  intro: {
    paragraphs: [
      "Blocked gutters and downpipes are one of the most common causes of water damage to Sydney homes. With our mix of eucalyptus trees, seasonal storms and coastal winds, gutter systems can become clogged with leaves, twigs, bird nests and even possum debris in just a few months.",
      "When gutters overflow, water can penetrate eaves, run down external walls, pool against foundations or flood into the roof cavity. The longer a blockage remains, the higher the risk of serious structural damage, timber rot and internal water stains that cost thousands to repair.",
      "This guide walks you through the immediate steps to take when you notice signs of blockage, the safest ways to clear minor obstructions yourself, and when you should contact a licensed gutter specialist to prevent lasting damage.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Blocked gutters cost Sydney homeowners between $4,000 and $12,000 in water damage repairs annually on average",
      "Most residential gutter blockages can be cleared within 1 to 3 hours by a professional crew",
      "Working on a ladder above 2 metres legally requires fall protection equipment in NSW workplaces, and the same safety principles apply to DIY work",
      "Gutter guards reduce cleaning frequency by up to 80 percent but require professional installation for proper water flow",
    ],
  },

  sections: [
    {
      id: "identifying-blocked-gutters",
      heading: "How to Identify Blocked Gutters or Downpipes",
      paragraphs: [
        "The most obvious sign is water overflowing from gutters during or immediately after rain. If water cascades over the gutter edge instead of flowing toward downpipes, you have a blockage somewhere in the system. Look for water staining on fascia boards or drip marks running down exterior walls below the gutter line.",
        "Another clear indicator is pooling water that remains in gutters hours or days after rainfall. Gutters should drain completely once rain stops. Standing water means either the gutter slope is incorrect or debris is blocking the path to downpipes. Check downpipes by pouring a bucket of water into the gutter near each one — if water backs up rather than flowing freely, the downpipe is obstructed.",
      ],
      bullets: [
        "Water overflowing from gutter edges during rain",
        "Standing water visible in gutters long after rain stops",
        "Sagging or visibly bowed sections of gutter from accumulated debris weight",
        "Water stains, mould or damp patches on eaves and ceilings near the roofline",
      ],
    },
    {
      id: "immediate-actions",
      heading: "Immediate Actions to Take",
      paragraphs: [
        "If you notice overflow during a storm, the priority is to minimise water damage to your home. Move furniture and valuables away from walls where water is entering. Place buckets or towels under any active leaks. If water is pooling near the foundation, use sandbags or towels to redirect flow away from the house until the rain stops.",
        "Once weather clears, inspect the gutter system from ground level. Use binoculars if needed to see inside gutters without climbing. Identify which sections are overflowing or where downpipes appear blocked. Take photos for reference if you plan to call a contractor. Do not attempt roof or ladder work in wet or windy conditions — many gutter-related injuries occur immediately after storms when surfaces are slippery.",
      ],
      bullets: [
        "Protect interiors by moving valuables and placing buckets under leaks",
        "Redirect pooling water away from foundations using sandbags or towels",
        "Inspect from ground level once rain stops to locate the blockage area",
        "Avoid ladder work until surfaces are completely dry and wind has dropped",
      ],
    },
    {
      id: "safe-diy-clearing",
      heading: "Safe DIY Clearing for Minor Blockages",
      paragraphs: [
        "If the blockage is accessible from a stable ladder and your home is single-storey, you may be able to clear it yourself. Always use a sturdy extension ladder positioned on firm, level ground. Have someone hold the base of the ladder while you work. Wear heavy gloves to protect against sharp gutter edges, metal splinters and debris contaminated with bird droppings or possum waste.",
        "Start by scooping out visible debris with a garden trowel or gutter scoop. Work from the downpipe end toward the middle of each gutter section so debris does not get pushed further into the downpipe. Once loose material is removed, flush the gutter with a hose to check water flow. If the downpipe is still blocked, try feeding a plumber snake or stiff wire down from the top. For stubborn blockages, a wet-dry vacuum can sometimes dislodge compacted leaves.",
      ],
      bullets: [
        "Use a stable ladder on firm ground with someone holding the base",
        "Scoop debris away from downpipes, not toward them",
        "Flush gutters with a hose after clearing to confirm free water flow",
        "Use a plumber snake or wet-dry vacuum for stubborn downpipe clogs",
      ],
    },
    {
      id: "when-to-call-professionals",
      heading: "When to Call a Professional Gutter Specialist",
      paragraphs: [
        "Multi-storey homes, steep roof pitches and difficult access situations require professional equipment and training. Licensed gutter specialists carry scaffolding, harness systems and industrial vacuums designed for efficient clearing. They also have public liability insurance that covers property damage — if you fall from a ladder or drop a tool through a skylight, your home insurance may not cover DIY work gone wrong.",
        "If you find structural damage like rusted gutter sections, pulled brackets, sagging fascia boards or evidence of water entering the roof cavity, a professional assessment is essential. These issues indicate that the blockage has been present for some time and repair work may be needed alongside cleaning. Any work on the roofline that involves structural repairs legally requires a licensed contractor in NSW.",
      ],
      bullets: [
        "Two-storey homes or roof pitches steeper than 20 degrees",
        "Gutters located above pergolas, skylights or fragile surfaces",
        "Evidence of rust, structural damage or water entry into the roof space",
        "Recurring blockages that suggest underlying gutter design or slope problems",
      ],
    },
    {
      id: "preventing-future-blockages",
      heading: "How to Prevent Future Blockages",
      paragraphs: [
        "Regular maintenance is the most effective way to avoid blocked gutters. For most Sydney homes, gutters should be inspected and cleared at least twice per year — once before summer storm season in late spring, and again in autumn after deciduous trees drop their leaves. Homes near large gum trees or surrounded by vegetation may need quarterly cleaning.",
        "Gutter guards are a long-term solution that dramatically reduces maintenance needs. Mesh guards, brush inserts and slotted covers all work by keeping leaves and large debris out while allowing water to flow through. Quality systems cost between $30 and $60 per metre installed but can pay for themselves within a few years by eliminating cleaning costs and preventing water damage.",
      ],
      bullets: [
        "Schedule professional gutter cleaning at least twice annually in Sydney",
        "Trim overhanging tree branches to reduce leaf and twig fall into gutters",
        "Install quality gutter guards to block debris while maintaining water flow",
        "Check downpipes after major storms to catch blockages before they cause overflow",
      ],
    },
  ],

  testimonial: {
    name: "Rebecca M.",
    location: "Epping, Sydney",
    quote: "We had water pouring into the garage during a storm because the downpipe was packed with leaves. The crew cleared the entire gutter system in under two hours and installed mesh guards so it would not happen again.",
    rating: 5,
  },

  cta: {
    heading: "Need Help with Blocked Gutters?",
    text: "Our experienced team can clear blockages, repair damage and install gutter protection systems across Sydney. Get a free quote and same-day service for urgent jobs.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["gutter cleaning", "downpipe blockage", "water damage", "gutter maintenance"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
