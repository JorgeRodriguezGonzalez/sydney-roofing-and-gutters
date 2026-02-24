import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Why to Have a Parapet Roof",
  slug: "why-to-have-a-parapet-roof",
  path: "/guides/why-to-have-a-parapet-roof/",
  description: "Discover the benefits of parapet roofs for Sydney homes. Learn about wind protection, modern aesthetics, privacy and key design considerations for this popular roofing style.",
  keywords: "parapet roof sydney, parapet roof benefits, parapet roof design, flat roof parapet, modern roof styles",
  publishedISO: "2024-09-19",
  modifiedISO: "2026-02-19",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Why to Have a Parapet Roof",
    subheadline: "Explore the practical advantages and design benefits of parapet roofs for Sydney homes and commercial buildings.",
    bullets: [
      "Protect your property from strong coastal winds and ember attack",
      "Create a clean modern look that hides rooftop equipment and gutters",
      "Improve privacy for upper-level living spaces and outdoor areas",
      "Understand critical waterproofing and drainage requirements for parapet walls",
    ],
  },

  intro: {
    paragraphs: [
      "A parapet is a low wall that extends above the roofline around the perimeter of a building. Originally designed for defence purposes on castles and fortifications, parapets now serve practical and aesthetic functions on residential and commercial buildings throughout Sydney.",
      "Parapet roofs have become increasingly popular in modern Australian architecture, particularly on flat or low-pitch roofs. They offer a distinctive clean-lined appearance while providing real benefits including wind protection, fire resistance and concealment of roof-mounted equipment.",
      "At Sydney Roofing and Gutters, we design and construct parapet roofs for new builds and retrofits across the metro area. This guide explains why many property owners choose parapets and what you need to know before building one.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: parapet roof essentials",
    bullets: [
      "Parapets add $150 to $300 per linear metre to roof construction costs in Sydney",
      "Parapet walls must be at least 900mm high to provide effective fall protection under Australian standards",
      "Proper capping and waterproofing of the parapet wall is critical to prevent water ingress and rising damp",
      "Parapets on bushfire-prone land can improve BAL ratings by reducing ember entry points",
    ],
  },

  sections: [
    {
      id: "what-is-a-parapet-roof",
      heading: "What is a Parapet Roof and How Does it Work?",
      paragraphs: [
        "A parapet roof features a vertical wall extension that rises above the roof deck around part or all of the building perimeter. This wall is typically constructed from the same material as the main structure — brick, concrete block or steel frame with cladding — and sits directly on top of the exterior wall.",
        "The parapet creates a raised edge that conceals the roof surface and often the gutters as well. On flat roofs, the parapet height is determined by building code requirements for edge protection, usually a minimum of 900mm above the finished roof level. Internal drainage through sumps and downpipes is standard because traditional eave gutters are hidden behind the parapet wall.",
      ],
      bullets: [
        "Parapet walls extend the building facade above the roof deck",
        "They conceal membrane roofing, equipment and internal box gutters",
        "Height is governed by fall protection requirements in AS 1657",
        "Can be solid, perforated or feature decorative capping details",
      ],
    },
    {
      id: "wind-and-weather-protection",
      heading: "Wind and Weather Protection Benefits",
      paragraphs: [
        "One of the most practical advantages of a parapet roof in Sydney is protection from strong winds. The elevated wall acts as a barrier that deflects wind over and around rooftop equipment, HVAC units and roof access points. This reduces uplift forces on the roof membrane and minimises wind-driven rain from entering at roof edges.",
        "In bushfire-prone areas classified under the BAL system, parapets reduce ember attack by eliminating exposed roof edges and eave gaps where embers can enter the roof space. A properly detailed parapet with fire-rated capping and sealed joints can improve the overall bushfire attack level rating of a building.",
      ],
      bullets: [
        "Parapets shield rooftop equipment from direct wind exposure",
        "They reduce wind uplift forces on membrane roofing systems",
        "Sealed parapet edges prevent ember entry in bushfire zones",
        "Capped parapets protect mortar joints from driving rain and UV damage",
      ],
    },
    {
      id: "modern-aesthetic-and-privacy",
      heading: "Modern Aesthetic and Privacy Advantages",
      paragraphs: [
        "From a design perspective, parapets deliver a clean contemporary look by hiding all the functional roof elements that would otherwise be visible from street level. Gutters, downpipes, membrane roofing, solar panel frames and air conditioning units all disappear behind the parapet wall. The result is a crisp horizontal roofline that defines modern architecture.",
        "Privacy is another key benefit, especially for multi-storey homes or buildings with rooftop terraces and balconies. A parapet wall creates a visual screen that prevents overlooking from neighbouring properties while still allowing views outward. Many Sydney terrace renovations and apartment developments use parapets to maximise usable outdoor space without compromising privacy.",
      ],
      bullets: [
        "Parapets hide roof clutter including membranes, pipes and equipment",
        "They create a strong horizontal line that suits minimalist design",
        "Parapets provide privacy screening for rooftop decks and balconies",
        "Lighting and planter boxes can be integrated into parapet walls",
      ],
    },
    {
      id: "waterproofing-and-drainage",
      heading: "Critical Waterproofing and Drainage Considerations",
      paragraphs: [
        "While parapets offer many advantages, they introduce specific waterproofing challenges that must be addressed correctly during construction. The top of the parapet wall is exposed to rain, UV and thermal movement, so it requires durable capping and proper flashing to prevent water penetration into the brickwork or blockwork below.",
        "Rising damp is a common problem on poorly detailed parapets. Moisture can wick up through the wall from the roof membrane level or soak into the masonry from the top. A correctly installed damp-proof course at the base of the parapet, combined with sealed metal or concrete capping at the top, prevents both issues.",
      ],
      bullets: [
        "Install a damp-proof course where the parapet meets the roof deck",
        "Use continuous metal or precast concrete capping with sealed joints",
        "Ensure roof membrane is turned up at least 150mm behind the parapet",
        "Design internal box gutters with adequate fall and overflows to prevent ponding",
      ],
    },
    {
      id: "regulations-and-costs",
      heading: "Building Regulations and Cost Factors",
      paragraphs: [
        "In New South Wales, parapet walls must comply with the Building Code of Australia and relevant Australian Standards including AS 1657 for fall protection. If the roof is accessible, the parapet must be at least 900mm high to meet edge protection requirements. Council approval and engineer certification are typically required for parapet construction on residential properties.",
        "The cost of adding a parapet wall to a new roof or retrofit project varies based on height, length and materials. Brick or block parapets with rendered finish cost between $150 and $300 per linear metre including capping and waterproofing. Steel-framed parapets with metal cladding are sometimes more economical but require careful detailing to avoid thermal bridging and condensation issues.",
      ],
      bullets: [
        "Budget $150-$300 per linear metre for brick parapet with capping",
        "Engineer certification is required for structural adequacy and wind loads",
        "Parapets add weight to the roof structure which may require additional supports",
        "Allow 1-2 weeks for parapet construction and waterproofing on a typical home",
      ],
    },
  ],

  testimonial: {
    name: "Rachel K.",
    location: "Randwick, Sydney",
    quote: "Adding the parapet wall transformed the look of our flat roof extension and gave us total privacy on the rooftop deck. The team handled all the waterproofing and council approvals without any issues.",
    rating: 5,
  },

  cta: {
    heading: "Considering a Parapet Roof?",
    text: "Get expert advice and a free quote for your parapet roof project. Our team can assess your property, recommend the best design approach and handle all approvals and construction.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["parapet roof", "modern roofing", "flat roof", "roof design"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
