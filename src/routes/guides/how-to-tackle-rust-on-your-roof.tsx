import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Tackle Rust on Your Roof",
  slug: "how-to-tackle-rust-on-your-roof",
  path: "/guides/how-to-tackle-rust-on-your-roof/",
  description: "Learn how to identify, treat and prevent rust on metal roofs in Sydney. Expert advice on rust removal, protective coatings and when to replace corroded roofing.",
  keywords: "roof rust removal, metal roof rust, roof corrosion sydney, rusty roof repair, colorbond rust",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Tackle Rust on Your Roof",
    subheadline: "A practical guide for Sydney homeowners dealing with rust and corrosion on metal roofs, including treatment options and long-term prevention strategies.",
    bullets: [
      "Identify the early warning signs of roof rust before major damage occurs",
      "Understand which metal roofing materials are most vulnerable to corrosion",
      "Learn effective rust removal and treatment techniques for different roof types",
      "Discover when repair is possible and when full replacement is necessary",
    ],
  },

  intro: {
    paragraphs: [
      "Rust is one of the most common issues facing older metal roofs in Sydney, particularly those installed before modern corrosion-resistant materials became standard. Coastal properties are especially vulnerable due to salt-laden air, but even inland homes can develop rust problems over time if protective coatings fail or water drainage is poor.",
      "Tackling rust early can extend the life of your roof by years and prevent costly water damage to your home interior. Left unchecked, surface rust spreads through metal sheeting, creating holes that allow rain to penetrate insulation, ceiling cavities and even structural timber below.",
      "This guide explains how rust forms on metal roofs, how to assess the severity of corrosion, and what treatment or replacement options are available to Sydney homeowners dealing with rusty roofing.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Surface rust can often be treated with wire brushing and protective coatings if caught early",
      "Roofs within 5km of the coast are at much higher risk of corrosion and may need treatment every 5-7 years",
      "Once rust has eaten through the metal creating holes, that section must be replaced rather than repaired",
      "Modern Colorbond and Zincalume roofs have factory-applied coatings that resist rust far better than older galvanised iron",
    ],
  },

  sections: [
    {
      id: "understanding-roof-rust",
      heading: "Understanding How Rust Forms on Metal Roofs",
      paragraphs: [
        "Rust is the result of iron oxidation that occurs when steel is exposed to moisture and oxygen over time. On roofing, this typically begins when the protective coating breaks down due to age, physical damage from falling branches, or constant exposure to salt air near the coast. Once bare metal is exposed, rust forms rapidly especially in humid conditions.",
        "Different roofing materials rust at different rates. Old galvanised iron sheeting from the 1970s and 80s is particularly vulnerable once the zinc coating deteriorates. Modern Colorbond has multiple protective layers including a metallic coating and baked enamel finish, making it far more resistant. Zincalume offers excellent corrosion resistance through its aluminium-zinc alloy coating.",
      ],
      bullets: [
        "Rust begins where protective coatings are scratched, chipped or worn away",
        "Pooling water accelerates corrosion by keeping metal wet for extended periods",
        "Salt air from coastal locations dramatically increases the rate of rust formation",
        "Dissimilar metals in contact can cause galvanic corrosion even on coated surfaces",
      ],
    },
    {
      id: "inspecting-for-rust",
      heading: "Inspecting Your Roof for Signs of Rust",
      paragraphs: [
        "Early detection is crucial for effective rust treatment. Walk around your property and look for brown or orange staining on roof sheets, particularly around fasteners, ridges and valleys where water tends to collect. Rust stains on gutters or downpipes often indicate that corrosion is occurring somewhere above.",
        "If you can safely access your roof, inspect sheets up close for bubbling paint, flaking metal or actual holes where rust has eaten through. Pay special attention to areas under trees where leaves trap moisture, and northern slopes which receive more sun exposure causing paint to break down faster in Sydney climate.",
      ],
      bullets: [
        "Look for brown or red-orange staining visible from ground level",
        "Check around fasteners and screws where coatings often crack first",
        "Inspect valleys and low-pitch areas where water may pool after rain",
        "Watch for rust stains running down walls or fascia boards below the roof line",
      ],
    },
    {
      id: "treatment-options",
      heading: "Treatment Options for Rusty Roofs",
      paragraphs: [
        "For surface rust that has not yet penetrated the full thickness of the metal, treatment is often possible. The process involves wire brushing or grinding to remove loose rust and flaking paint, then applying a rust converter or metal primer followed by weatherproof topcoat paint. This can add 5 to 10 years of life to an otherwise sound roof.",
        "Rust treatments work best on roofs with less than 30 percent coverage of corrosion. Beyond that threshold, the ongoing maintenance becomes impractical and full replacement is usually more cost-effective. Professional roofing contractors can apply specialist coatings like acrylic roof membranes that seal and protect large areas efficiently.",
      ],
      bullets: [
        "Remove loose rust with a wire brush or rotary tool fitted with a grinding disc",
        "Apply rust converter to neutralise remaining oxidation before painting",
        "Use exterior-grade metal roof paint with UV and moisture resistance",
        "Consider professional membrane coatings for roofs with widespread surface rust",
      ],
    },
    {
      id: "when-to-replace",
      heading: "When to Replace Rather Than Repair",
      paragraphs: [
        "Once rust has created holes in the roofing sheets, patching becomes a temporary fix at best. Water ingress through even small holes can cause hidden damage to timber framing and insulation before you notice problems inside. If more than a third of your roof shows active corrosion or multiple sheets have holes, replacement is the smarter long-term investment.",
        "Replacement also makes sense if your roof is over 30 years old and showing widespread rust. Older galvanised roofs lack the corrosion protection built into modern materials, so rust will continue spreading no matter how much you patch and paint. Upgrading to Colorbond or Zincalume provides decades of maintenance-free service.",
      ],
      bullets: [
        "Replace sheets immediately if rust has created holes allowing water through",
        "Consider full replacement when more than one third of roof area shows corrosion",
        "Factor in age — roofs over 30 years old rarely justify extensive rust treatment costs",
        "Modern replacement materials come with 20+ year warranties against corrosion",
      ],
    },
    {
      id: "prevention-strategies",
      heading: "Long-Term Prevention Strategies",
      paragraphs: [
        "Preventing rust is always easier and cheaper than treating it. Regular roof inspections every 2-3 years allow you to catch minor issues before they spread. Keep gutters clear of leaves and debris so water drains properly rather than pooling on low areas of the roof. Trim overhanging branches that drop leaves and keep sections of roof damp.",
        "If you live within 10km of the coast, consider applying a protective roof coating every 7-10 years even if no rust is visible. This refreshes the UV protection and seals any micro-cracks in the paint before moisture can penetrate. For new roof installations in coastal areas, always specify materials rated for severe marine environments per AS 2728.",
      ],
      bullets: [
        "Schedule roof inspections every 2-3 years to catch problems early",
        "Clean gutters twice yearly to prevent water backing up onto roof edges",
        "Apply protective coatings every 7-10 years in coastal or high-humidity areas",
        "Choose marine-grade materials if building or re-roofing within 5km of the ocean",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Manly, Sydney",
    quote: "Our roof was only 15 years old but the salt air had caused rust around all the fasteners. The team treated the whole roof with a protective membrane and it looks brand new again. Definitely worth doing before it got worse.",
    rating: 5,
  },

  cta: {
    heading: "Need Help with a Rusty Roof?",
    text: "Get expert advice on whether your roof needs treatment or replacement. We offer free inspections and detailed quotes for rust repair and roof restoration across Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["rust removal", "roof corrosion", "metal roof repair", "roof maintenance"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
