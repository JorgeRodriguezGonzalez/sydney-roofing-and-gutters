import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Safe and Efficient Installation of a Manhole Unit",
  slug: "safe-and-efficient-installation-of-manhole-unit",
  path: "/guides/safe-and-efficient-installation-of-manhole-unit/",
  description: "Learn how to safely install a roof manhole unit in Sydney. Covers regulations, placement, sealing techniques, costs and choosing the right access solution for your home.",
  keywords: "manhole installation sydney, roof access hatch, manhole unit roofing, roof manhole regulations, roof access nsw",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Safe and Efficient Installation of a Manhole Unit",
    subheadline: "A complete guide to installing roof manhole units in Sydney homes. Learn about code requirements, placement strategies, weatherproofing and safety considerations.",
    bullets: [
      "Understand NSW building code requirements for roof access points",
      "Learn the correct placement and sizing for residential manhole units",
      "Discover weatherproofing techniques to prevent leaks around the frame",
      "Know what safety features and compliance standards to look for",
    ],
  },

  intro: {
    paragraphs: [
      "A properly installed manhole unit provides safe, convenient access to your roof space for maintenance, inspections and repairs. Whether you need to check your roof structure, install insulation or inspect electrical and plumbing systems, a well-designed access point makes the job safer and simpler.",
      "In New South Wales, the Building Code of Australia and AS 1657 set clear requirements for roof access. These standards cover minimum opening sizes, clearance heights, ladder access and safety features. Meeting these requirements is not optional if you want your work to pass inspection and comply with insurance requirements.",
      "At Sydney Roofing and Gutters, we install manhole units as part of new roofs and retrofit them into existing structures. This guide explains the key considerations to ensure your manhole is safe, compliant and leak-proof for years to come.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Standard residential manhole openings measure 450mm x 450mm or 600mm x 600mm depending on access requirements",
      "Installation costs range from $400 to $900 including the unit, flashing and labour in the Sydney region",
      "All roof penetrations including manholes must be weatherproofed with proper flashing to AS 1562 standards",
      "Access openings require a minimum 900mm vertical clearance inside the roof space under NSW building codes",
    ],
  },

  sections: [
    {
      id: "choosing-the-right-location",
      heading: "Choosing the Right Location for Your Manhole",
      paragraphs: [
        "Placement is critical for both functionality and structural integrity. The manhole should be positioned where it provides convenient access to the areas you need to reach, typically near the centre of the roof space or close to service runs like plumbing and electrical conduits. Avoid placing it too close to the eaves where headroom is limited.",
        "From a structural perspective, the opening needs to be framed between roof trusses or rafters. Cutting through a load-bearing member is not permitted without engineering approval and additional structural reinforcement. Your installer should identify safe locations that avoid compromising the roof frame.",
      ],
      bullets: [
        "Position the manhole within easy ladder access from inside the home",
        "Ensure at least 900mm of clear vertical space above the opening",
        "Avoid locations that require cutting through trusses or main rafters",
        "Consider proximity to areas you need to access regularly for maintenance",
      ],
    },
    {
      id: "manhole-unit-types",
      heading: "Types of Manhole Units and Materials",
      paragraphs: [
        "Residential manhole units come in several configurations. The most common type is a simple metal or plastic-framed hatch that sits flush with the ceiling. These units typically include a removable lid, a frame that attaches to ceiling joists and an optional ladder or fold-down stair system for easier access.",
        "For tile roofs, metal-framed units with terracotta or concrete tile caps are standard so the exterior blends with the roofing material. For Colorbond and metal roofs, powder-coated steel or aluminium units with colour-matched lids maintain the aesthetic. The key is selecting a unit with a proper weatherproof seal and durable construction.",
      ],
      bullets: [
        "Metal-framed units: durable, suitable for all roof types, available in various colours",
        "Plastic-framed units: lightweight, cost-effective, suitable for low-traffic applications",
        "Tile-capped units: designed to blend with terracotta or concrete tile roofs",
        "Retractable ladder systems: fold-down stairs for frequent or elderly user access",
      ],
    },
    {
      id: "installation-process",
      heading: "The Installation Process Step by Step",
      paragraphs: [
        "Installation begins by marking the opening location on the ceiling from inside the roof space, ensuring clearance from structural members. The ceiling material is carefully cut to size, usually creating a 450mm or 600mm square opening. The manhole frame is then secured to the ceiling joists using appropriate fixings that meet load and safety standards.",
        "The external roof penetration requires precise flashing work. A flashing tray or custom metal flashing is installed under the roofing material around the opening, with proper overlaps and sealant to prevent water ingress. For tile roofs, the flashing extends under the surrounding tiles. For metal roofs, the flashing integrates with the sheet profile.",
        "The final step is fitting the manhole lid and testing the seal. The lid should sit flush, open smoothly and create a weathertight seal when closed. Many modern units include rubber gaskets or compression seals that improve performance. A quality installation includes a water test to confirm no leaks occur during heavy rain.",
      ],
      bullets: [
        "Mark and cut the ceiling opening between joists without damaging the roof structure",
        "Secure the manhole frame with screws or bolts that meet AS 1657 load requirements",
        "Install metal flashing under roofing material with full weatherproof overlap",
        "Test the seal by pouring water over the closed unit and checking for leaks inside",
      ],
    },
    {
      id: "weatherproofing-and-sealing",
      heading: "Weatherproofing and Sealing Techniques",
      paragraphs: [
        "The most common failure point for manhole installations is inadequate weatherproofing. Water can enter around the frame if flashing is poorly installed or if the seal between the lid and frame deteriorates over time. In the Sydney climate with heavy downpours and coastal salt exposure, robust sealing is essential.",
        "Professional installations use multi-layer protection. A metal flashing tray forms the primary barrier, with silicone or polyurethane sealant applied at all joints. The manhole lid includes a gasket or compression seal that remains flexible over a wide temperature range. For exposed coastal locations, marine-grade sealants and corrosion-resistant fasteners are recommended.",
      ],
      bullets: [
        "Use continuous metal flashing that extends at least 150mm under surrounding roofing material",
        "Apply flexible polyurethane or silicone sealant at all frame-to-roof junctions",
        "Select units with replaceable rubber or foam gaskets in the lid seal",
        "In coastal areas within 1km of the ocean, specify marine-grade materials and fasteners",
      ],
    },
    {
      id: "safety-and-compliance",
      heading: "Safety Standards and Compliance Requirements",
      paragraphs: [
        "AS 1657 sets the minimum standards for fixed platforms, walkways, stairways and ladders, which includes access through roof manholes. The standard requires that any opening through which a person may fall must have a minimum clear dimension of 450mm x 450mm, with 600mm x 600mm preferred for frequent access.",
        "The opening must provide adequate vertical clearance in the roof space. A minimum of 900mm from the top of the opening to any overhead obstruction is required for safe passage. If the manhole serves as emergency egress, additional requirements apply including clear marking and unobstructed internal access.",
      ],
      bullets: [
        "Minimum opening size of 450mm x 450mm, with 600mm x 600mm for regular access",
        "Maintain at least 900mm of vertical clearance above the manhole opening",
        "Secure all fixings to meet load requirements of at least 1.5 kN point load",
        "Label the manhole if it serves as an emergency exit point per AS 2293",
      ],
    },
    {
      id: "costs-and-choosing-installer",
      heading: "Installation Costs and Choosing a Qualified Installer",
      paragraphs: [
        "The cost of manhole installation in Sydney depends on the unit type, roof material and access difficulty. A basic metal-framed unit with installation on a standard tile or metal roof typically costs between $400 and $700. Larger openings, retractable ladder systems and complex roof configurations can push the price toward $900 to $1,500.",
        "Always use a licensed roofing contractor for manhole installation. The work involves cutting roof structure, weatherproofing and compliance with building codes. Unlicensed or inexperienced installers often create leaks, structural issues and code violations that cost far more to rectify than the initial saving.",
      ],
      bullets: [
        "Basic manhole installation: $400-$700 including unit, flashing and labour",
        "Retractable ladder systems: add $300-$800 depending on the model",
        "Verify the installer holds a current NSW roofing contractor licence",
        "Ensure the quote includes weatherproofing, flashing and a minimum 5-year workmanship warranty",
      ],
    },
  ],

  testimonial: {
    name: "Michelle P.",
    location: "Castle Hill, Sydney",
    quote: "We needed a manhole installed to access our roof space for insulation work. The team did a great job positioning it for easy access and the flashing is completely watertight even after some heavy storms. Very happy with the result.",
    rating: 5,
  },

  cta: {
    heading: "Need a Manhole Installed?",
    text: "Get a free quote from our licensed roofing team. We ensure every installation meets NSW building codes and is 100% weatherproof with a written workmanship guarantee.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["manhole installation", "roof access", "roofing compliance", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
