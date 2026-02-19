import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "What Causes Roof Leaks?",
  slug: "what-causes-roof-leaks",
  path: "/guides/what-causes-roof-leaks/",
  description: "Discover the most common causes of roof leaks in Sydney homes. Learn to identify early warning signs, understand how weather and age affect roofs, and when to call professionals.",
  keywords: "roof leaks sydney, roof leak causes, damaged roof, roof repair, water damage prevention",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "What Causes Roof Leaks?",
    subheadline: "A comprehensive guide to understanding why roofs leak, how to spot the warning signs early, and what Sydney homeowners can do to prevent costly water damage.",
    bullets: [
      "Identify the most common sources of roof leaks before they cause major damage",
      "Understand how Sydney weather patterns contribute to roofing failures",
      "Learn which roofing materials are most vulnerable to leaks and why",
      "Discover when DIY fixes are safe and when professional help is essential",
    ],
  },

  intro: {
    paragraphs: [
      "Roof leaks are one of the most stressful problems a homeowner can face. What starts as a small damp patch on the ceiling can quickly escalate into thousands of dollars in structural damage, ruined insulation and mould growth. Understanding what causes leaks helps you spot problems early and take action before minor issues become major expenses.",
      "Sydney homes face unique challenges when it comes to roof integrity. The combination of intense summer heat, severe storms, coastal salt exposure and occasional hail means roofs here work harder than in many other climates. Even quality roofing materials will fail eventually without proper maintenance and timely repairs.",
      "At Sydney Roofing and Gutters, we investigate and repair hundreds of leaking roofs every year. This guide breaks down the most common culprits we encounter, from obvious storm damage to subtle wear-and-tear issues that homeowners often miss until water starts dripping inside.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: the main causes of roof leaks",
    bullets: [
      "Damaged or missing roof tiles and sheets account for roughly 40% of leaks we repair in Sydney",
      "Deteriorated flashings around chimneys, vents and valleys are responsible for about 30% of all roof leaks",
      "Blocked or overflowing gutters cause water to back up under roof edges and into ceiling cavities",
      "Most roof leaks become noticeable during heavy rain but the underlying damage often begins months earlier",
    ],
  },

  sections: [
    {
      id: "broken-damaged-roofing-materials",
      heading: "Broken or Damaged Roofing Materials",
      paragraphs: [
        "The most obvious cause of roof leaks is physical damage to the roofing material itself. Terracotta and concrete tiles can crack from falling branches, hail impact or simply age-related brittleness. Metal roofing can develop holes from corrosion, especially in coastal areas where salt accelerates rust on older unpainted steel or damaged Colorbond coatings.",
        "Even a single broken tile or punctured sheet can let significant water into the roof cavity during heavy rain. The water often travels along battens or rafters before dripping into the ceiling, which means the leak inside your home may appear several metres away from the actual point of entry on the roof.",
      ],
      bullets: [
        "Cracked or broken tiles from storm debris, foot traffic or age-related wear",
        "Corroded metal sheets with holes or splits, particularly around fastener points",
        "Lifted or displaced roof sheets caused by high winds or improper installation",
        "Degraded ridge capping that no longer seals the peak of the roof properly",
      ],
    },
    {
      id: "faulty-deteriorated-flashings",
      heading: "Faulty or Deteriorated Flashings",
      paragraphs: [
        "Flashings are the metal strips and fittings that seal junctions and penetrations in the roof. They surround chimneys, vent pipes, skylights and the joins between different roof planes (valleys). When flashings fail, water can pour into the roof cavity even if the surrounding tiles or sheets are in perfect condition.",
        "In Sydney, many older homes have galvanised steel flashings that rust out after 20 to 30 years. Modern Colorbond flashings last much longer, but poor installation or impact damage can compromise any flashing. Silicone or mastic sealants used around flashings also degrade over time, cracking and shrinking away from the metal to leave gaps.",
      ],
      bullets: [
        "Rusted or corroded valley irons that allow water to seep through joins",
        "Poorly sealed chimney flashings with gaps between the flashing and brickwork",
        "Cracked sealant around vent pipes and plumbing penetrations",
        "Missing or damaged step flashings where the roof meets a vertical wall",
      ],
    },
    {
      id: "gutter-drainage-problems",
      heading: "Gutter and Drainage Problems",
      paragraphs: [
        "Gutters are designed to channel water away from the roof and foundations. When they become blocked with leaves, debris or tennis balls, water backs up under the roof edge and can penetrate into the ceiling cavity or down inside walls. This type of leak often appears during or immediately after heavy rain and stops once the downpour eases.",
        "Sagging or incorrectly installed gutters that do not have enough fall toward downpipes will hold standing water. Over time this water finds its way into the fascia boards and roof structure. Undersized gutters on large or steeply pitched roofs can also overflow during intense Sydney storms even when they are clean.",
      ],
      bullets: [
        "Blocked gutters overflowing and pushing water back under the roof edge",
        "Sagging gutter sections that hold standing water instead of draining properly",
        "Corroded or split gutter joints that leak water onto fascia and walls",
        "Downpipes blocked with debris causing water to back up in the gutter system",
      ],
    },
    {
      id: "age-weathering-wear",
      heading: "Age, Weathering and General Wear",
      paragraphs: [
        "Even well-maintained roofs have a finite lifespan. Terracotta tiles can last 50 years or more, but concrete tiles typically begin to degrade after 30 to 40 years as the surface coating breaks down. Metal roofing lasts 30 to 50 years depending on the coating and environment, with coastal homes seeing faster deterioration due to salt exposure.",
        "Ultraviolet radiation from intense Sydney sun gradually breaks down protective coatings, sealants and even the roofing material itself. Expansion and contraction from daily temperature swings causes fasteners to work loose over time. Moss and lichen growth on shaded roofs holds moisture against the surface, accelerating wear and creating pathways for water infiltration.",
      ],
      bullets: [
        "Brittle or porous tiles that absorb water and crack during freeze-thaw cycles",
        "Faded or chalky Colorbond coatings that indicate the steel underneath is vulnerable",
        "Loose or missing fasteners that allow sheets or tiles to lift in the wind",
        "Degraded sarking or underlay materials that no longer provide a secondary barrier",
      ],
    },
    {
      id: "poor-installation-maintenance",
      heading: "Poor Installation and Lack of Maintenance",
      paragraphs: [
        "Not all roof leaks are caused by time or weather. Substandard workmanship during initial installation or previous repairs creates weak points that fail prematurely. Common installation errors include incorrect roof pitch, insufficient overlap between sheets, fasteners placed in the wrong position, and missing or poorly fitted flashings.",
        "Regular maintenance is the best defence against leaks. A professional roof inspection every two to three years identifies small problems before they become big ones. Simple tasks like clearing gutters, replacing a few cracked tiles and resealing flashings cost hundreds of dollars. Ignoring maintenance until a major leak develops can cost tens of thousands to repair structural damage and replace ceiling linings.",
      ],
      bullets: [
        "Incorrect fastener placement that punctures the waterproof membrane",
        "Inadequate overlap between metal sheets allowing water to track sideways",
        "Missing or undersized sarking that fails to catch minor leaks before they reach the ceiling",
        "Years of deferred maintenance allowing small issues to compound into major failures",
      ],
    },
  ],

  testimonial: {
    name: "Emma K.",
    location: "Hornsby, Sydney",
    quote: "We noticed a small water stain and called Sydney Roofing straight away. They found broken tiles and worn valley flashings that would have caused major damage in the next storm. Quick response and honest advice.",
    rating: 5,
  },

  cta: {
    heading: "Worried About a Roof Leak?",
    text: "Do not wait until a small leak becomes a big problem. Contact Sydney Roofing and Gutters for a thorough roof inspection and honest assessment of what needs attention.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof leaks", "roof repair", "roof maintenance", "water damage"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
