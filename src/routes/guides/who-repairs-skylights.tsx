import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Who Repairs Skylights?",
  slug: "who-repairs-skylights",
  path: "/guides/who-repairs-skylights/",
  description: "Find out which trades repair skylights in Sydney. Learn when to call a roofer, skylight specialist or glazier, plus costs, licensing and what to expect from your repair.",
  keywords: "skylight repair sydney, who fixes skylights, skylight leak repair, skylight replacement cost, licensed roofer",
  publishedISO: "2024-08-27",
  modifiedISO: "2025-11-09",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Who Repairs Skylights?",
    subheadline: "Understanding which trade professional to call for skylight repairs in Sydney, from leaks and cracks to full replacement and glazing work.",
    bullets: [
      "Learn which trades handle different types of skylight repairs",
      "Understand when a roofer or specialist glazier is the right choice",
      "Know the licensing and insurance requirements for skylight work in NSW",
      "Get typical repair costs and timeframes for Sydney homes",
    ],
  },

  intro: {
    paragraphs: [
      "When a skylight leaks, cracks or simply stops working, many homeowners are unsure who to call. Skylight repairs sit at the intersection of roofing, glazing and waterproofing, and the right professional depends on what has actually failed. Calling the wrong trade can waste time and money.",
      "In Sydney, skylight issues are common due to the combination of intense sun, heavy downpours and coastal humidity. Seals perish, flashings corrode and acrylic domes can crack under UV exposure. Understanding which trade handles which problem helps you get the repair done quickly and properly.",
      "This guide explains the different professionals who repair skylights in the Sydney area, what each specialises in, and how to choose the right one for your situation.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: who repairs skylights",
    bullets: [
      "Licensed roofing contractors handle flashing leaks, structural issues and skylight replacement in NSW",
      "Skylight specialists repair mechanisms, seals and complete skylight systems from brands like Velux and Solatube",
      "Glaziers replace cracked or broken glass and acrylic domes but generally do not handle roof penetrations",
      "Most skylight repairs in Sydney cost between $300 and $1,500 depending on the issue and access",
    ],
  },

  sections: [
    {
      id: "licensed-roofing-contractors",
      heading: "Licensed Roofing Contractors for Flashing and Structural Work",
      paragraphs: [
        "The majority of skylight leaks occur not because the skylight itself has failed, but because the flashing around it was installed incorrectly or has corroded over time. Flashings are the metal skirts that seal the junction between the skylight curb and the roof surface. When these fail, water runs down inside the roof cavity.",
        "Any work involving roof penetrations in NSW requires a licensed roofing contractor. This includes replacing flashings, resealing skylights to the roof structure, repairing curbs and installing new skylights. Roofers also handle structural issues like rotted timber around the skylight frame, which is common in older installations.",
      ],
      bullets: [
        "Flashing leaks and corrosion around the skylight perimeter",
        "Structural timber repairs to curbs, joists and rafters",
        "Full skylight removal and replacement including roof sealing",
        "Upgrading old skylights to modern low-profile units with better waterproofing",
      ],
    },
    {
      id: "skylight-specialists",
      heading: "Skylight Specialists and Branded Service Networks",
      paragraphs: [
        "Brands like Velux, Solatube and Fakro operate service networks of authorised installers and repair technicians. These specialists focus exclusively on skylights and understand the mechanisms, seals and parts for specific models. If your skylight is still under warranty or is a premium brand, going through the authorised network can be the fastest path to parts and expertise.",
        "Skylight specialists handle issues with opening mechanisms, broken chains, failed motors on electric units, perished seals and condensation problems. They can also retrofit blinds, flyscreens and ventilation upgrades. For simple repairs like a stuck handle or a torn seal, these specialists often provide a quicker and cheaper solution than a full roofing contractor.",
      ],
      bullets: [
        "Opening and closing mechanisms for manual and electric skylights",
        "Seal replacement and condensation issues between panes",
        "Parts replacement under warranty for major brands",
        "Retrofitting blinds, insect screens and ventilation kits",
      ],
    },
    {
      id: "glaziers-for-glass-and-dome-replacement",
      heading: "Glaziers for Glass and Dome Replacement",
      paragraphs: [
        "If the problem is a cracked glass pane or a cloudy acrylic dome, a glazier is often the right choice. Glaziers specialise in cutting, sealing and installing glass and plastic panels. They can replace a broken skylight dome without needing to disturb the flashing or roof structure, provided the curb and frame are still sound.",
        "However, glaziers typically do not work on the roof side of the installation. If the leak is coming from the flashing or there is rot around the frame, you will need a roofer to address those issues before or after the glazier replaces the pane. Many glaziers work closely with roofing contractors to coordinate repairs that involve both trades.",
      ],
      bullets: [
        "Replacement of cracked or broken acrylic domes",
        "Upgrading old single-pane skylights to double-glazed units",
        "Resealing glass panes that have lost their airtight seal",
        "Custom glass cutting for non-standard or older skylight models",
      ],
    },
    {
      id: "licensing-and-insurance-requirements",
      heading: "Licensing and Insurance Requirements in NSW",
      paragraphs: [
        "Any skylight work that involves the roof structure or costs more than $5,000 requires a licensed contractor in New South Wales. You can verify a contractor licence on the NSW Fair Trading website using their licence number. Never hire someone who cannot provide proof of a current licence.",
        "Equally important is insurance. Skylight repairs involve working at height and cutting into the roof, both of which carry significant risk. Ensure your contractor has current public liability insurance and, if they have employees, workers compensation cover. If someone is injured on your property and the contractor is uninsured, you may be held liable.",
      ],
      bullets: [
        "Roofing work over $5,000 requires a NSW contractor licence",
        "Verify licence numbers on the Fair Trading website before signing contracts",
        "Confirm public liability insurance of at least $10 million",
        "Check that workers compensation is current if the contractor has staff",
      ],
    },
    {
      id: "costs-and-timeframes",
      heading: "Typical Costs and Timeframes for Skylight Repairs",
      paragraphs: [
        "Simple repairs like resealing a skylight or replacing a broken dome typically cost between $300 and $800 in Sydney, depending on access and the size of the unit. Flashing repairs that require lifting tiles or metal sheets and fabricating custom flashings can range from $600 to $1,500. Full skylight replacement usually starts around $1,200 and can exceed $3,000 for large or complex installations.",
        "Most repairs are completed in a few hours to one day. Full replacements may take one to two days if structural work or roof repairs are required. Always get a detailed written quote that specifies what is included, and ask about warranties on both parts and labour.",
      ],
      bullets: [
        "Minor sealing work: $300-$600 for a typical residential skylight",
        "Flashing repair or replacement: $600-$1,500 depending on roof type",
        "Glass or dome replacement by a glazier: $400-$1,000",
        "Full skylight replacement including roofing work: $1,200-$3,000+",
      ],
    },
    {
      id: "how-to-choose-the-right-professional",
      heading: "How to Choose the Right Professional for Your Skylight",
      paragraphs: [
        "Start by identifying the problem. If you see water stains around the skylight frame, the issue is almost certainly flashing-related and you need a roofer. If the skylight will not open, the seal has failed or condensation is forming between panes, a skylight specialist or glazier is the better choice. When in doubt, call a licensed roofer for an inspection — they can usually diagnose the issue and refer you to a specialist if needed.",
        "Ask for references and check online reviews. Skylight work requires precision and an understanding of how water moves across a roof. Poor repairs often make leaks worse. Choose professionals who provide written warranties of at least 12 months on their workmanship, and ensure all materials used meet Australian Standards.",
      ],
      bullets: [
        "Identify whether the leak is from flashing or the skylight unit itself",
        "Ask for photos or case studies of similar repairs the contractor has completed",
        "Ensure written quotes itemise materials, labour and any structural work required",
        "Confirm warranties on workmanship and check that parts meet AS 2047 for glazing or AS 1562.1 for roofing",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Epping, Sydney",
    quote: "Our skylight was leaking every time it rained. The roofer found corroded flashing and replaced it in one morning. No leaks since and the price was very reasonable for the peace of mind.",
    rating: 5,
  },

  cta: {
    heading: "Need a Skylight Repaired?",
    text: "Get an honest assessment and a free quote from our licensed roofing team. We diagnose leaks accurately and work with trusted skylight specialists when needed.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["skylight repair", "roof leaks", "licensed roofer", "sydney"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
