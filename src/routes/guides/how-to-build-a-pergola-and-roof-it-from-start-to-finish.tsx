import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Build a Pergola and Roof It from Start to Finish",
  slug: "how-to-build-a-pergola-and-roof-it-from-start-to-finish",
  path: "/guides/how-to-build-a-pergola-and-roof-it-from-start-to-finish/",
  description: "Complete step-by-step guide to building a pergola and installing a roof. Learn about permits, materials, construction techniques and roofing options for Sydney outdoor structures.",
  keywords: "pergola construction, pergola roofing, build pergola sydney, pergola roof materials, outdoor structure permits",
  publishedISO: "2022-12-08",
  modifiedISO: "2025-11-22",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Build a Pergola and Roof It from Start to Finish",
    subheadline: "A comprehensive guide for Sydney homeowners planning to construct and roof a pergola, covering design, permits, materials and installation best practices.",
    bullets: [
      "Learn the complete process from site preparation to final roofing installation",
      "Understand NSW building permit requirements and approval processes",
      "Compare roofing materials including polycarbonate, Colorbond and insulated panels",
      "Discover construction techniques that ensure structural integrity and durability",
    ],
  },

  intro: {
    paragraphs: [
      "A well-built pergola transforms outdoor living spaces and adds significant value to Sydney properties. Whether you want shade for summer entertaining or a covered area that extends your living space year-round, constructing a pergola with a proper roof requires careful planning and execution.",
      "Building regulations in New South Wales require specific engineering and approval processes for roofed structures. Unlike open pergolas, adding a solid or translucent roof changes the classification of the structure and triggers additional compliance requirements under the Building Code of Australia.",
      "This guide walks through the entire process from initial planning to completed installation. We cover site assessment, material selection, structural requirements, roofing options and finishing details based on current NSW standards and decades of experience building outdoor structures across Sydney.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Roofed pergolas in NSW typically require a development application and engineering certification for structures over 20 square metres",
      "Total costs range from $8,000 to $25,000 depending on size, materials and roofing choice",
      "Construction takes 3 to 7 days for a standard 4x6 metre attached pergola including roofing",
      "Polycarbonate and Colorbond are the most popular roofing materials for Sydney pergolas due to weather resistance",
    ],
  },

  sections: [
    {
      id: "planning-and-permits",
      heading: "Planning Your Pergola and Obtaining Permits",
      paragraphs: [
        "The first step is deciding on size, location and roof type. Attached pergolas that connect to the house are most common, but freestanding structures offer more flexibility in placement. Consider sun angles, prevailing winds and views when choosing location. In Sydney, north and east-facing pergolas provide morning sun and afternoon shade.",
        "Permit requirements depend on size and roof type. Open-sided structures under 20 square metres with a roof pitch below 30 degrees may qualify as exempt development in some councils. However, adding solid roofing or enclosing sides usually requires a complying development certificate or development application. Always check with your local council before starting construction.",
      ],
      bullets: [
        "Measure the proposed area and create a basic site plan showing dimensions",
        "Check setback requirements from boundaries (typically 900mm minimum in Sydney)",
        "Determine if engineering certification is required for your design",
        "Submit permit applications at least 4-6 weeks before planned construction",
      ],
    },
    {
      id: "foundation-and-posts",
      heading: "Building the Foundation and Installing Posts",
      paragraphs: [
        "Solid foundations are essential for long-term stability. For most residential pergolas in Sydney, concrete footings provide the best support. Dig holes to at least 600mm depth (deeper in sandy or reactive soils) and pour concrete around galvanised steel post anchors. This method prevents timber posts from sitting in ground moisture and rotting over time.",
        "Treated pine posts in 90x90mm or 120x120mm dimensions work for most applications, though hardwood posts offer superior durability in exposed locations. Set posts vertically using temporary bracing and allow concrete to cure for 48 hours before continuing. For attached pergolas, the ledger board must be securely fixed to the house frame using coach screws into studs, not just into cladding.",
      ],
      bullets: [
        "Dig footing holes 600-800mm deep and 300mm diameter",
        "Install galvanised post anchors in wet concrete and check they are perfectly vertical",
        "Use H4 treated pine or hardwood for posts to resist moisture and termites",
        "Attach ledger boards with 12mm coach screws at 450mm centres into solid timber frame",
      ],
    },
    {
      id: "beam-and-rafter-construction",
      heading: "Installing Beams and Rafters",
      paragraphs: [
        "The beam carries the weight of the rafters and roof, so correct sizing is critical. For spans up to 4 metres, 190x45mm treated pine beams work well. Longer spans require engineered timber or laminated beams specified by your engineer. Fix beams to posts using galvanised brackets and bolts rated for structural applications.",
        "Rafters run from the ledger board to the beam and support the roofing material. Spacing depends on roof type — polycarbonate sheets need rafters at 900mm centres maximum, while Colorbond requires closer spacing at 600mm for wind loads. Cut rafters with a slight fall (5-10 degrees minimum) to ensure water runs off efficiently.",
      ],
      bullets: [
        "Use 190x45mm or larger beams depending on span and roof load calculations",
        "Space rafters at 600-900mm centres depending on roofing material specifications",
        "Install birdsmouth cuts where rafters meet the beam for solid contact",
        "Add purlins between rafters at 600mm spacing for additional roof support",
      ],
    },
    {
      id: "roofing-material-options",
      heading: "Choosing and Installing Roofing Materials",
      paragraphs: [
        "Roofing choice affects both appearance and functionality. Clear or tinted polycarbonate multiwall sheets are extremely popular in Sydney because they provide shelter from rain while allowing natural light through. These sheets come in 6mm to 16mm thicknesses with higher R-values for better insulation. They are lightweight and relatively easy to install with the correct flashings and fixings.",
        "Colorbond steel sheeting offers complete weather protection and matches house roofing for a cohesive look. Profiles like Trimdek and Custom Orb work well on pergola applications. Insulated roof panels combine a Colorbond outer skin with foam core for thermal performance, making the space comfortable even in Sydney summers. These cost more but reduce heat transfer significantly.",
      ],
      bullets: [
        "Polycarbonate multiwall: $40-$80 per square metre, translucent, good for covered outdoor areas",
        "Colorbond sheeting: $60-$100 per square metre, full weather protection, multiple colours available",
        "Insulated panels: $120-$180 per square metre, excellent thermal performance, premium option",
        "Install roof sheets with correct overlap and use foam closures to prevent insect and water entry",
      ],
    },
    {
      id: "flashing-and-finishing",
      heading: "Installing Flashings and Finishing Details",
      paragraphs: [
        "Proper flashing where the pergola roof meets the house wall is essential to prevent water damage. Remove a course of cladding if necessary and install step flashing or a continuous apron flashing that tucks under the weather barrier and directs water over the roof sheets. Seal all penetrations with neutral cure silicone rated for exterior use.",
        "Gutter installation completes the water management system. A box gutter along the front beam collects runoff and directs it to downpipes. Size gutters correctly — a 4 metre wide roof needs at least 150mm quad gutters in Sydney rainfall conditions. Connect downpipes to stormwater or install grated drains at ground level.",
      ],
      bullets: [
        "Install apron flashings that extend at least 150mm up the wall under cladding",
        "Use flexible flashings around curved or irregular junctions",
        "Fit quad or box gutters along the low edge with adequate fall (1:100 minimum)",
        "Paint all exposed timber with exterior-grade paint or stain for protection and appearance",
      ],
    },
    {
      id: "final-considerations",
      heading: "Final Considerations and Maintenance",
      paragraphs: [
        "Once construction is complete, arrange for the required building inspections. Most councils require a final inspection to issue an occupation certificate, especially for roofed structures. Keep all documentation including engineering certificates, permits and warranty information from suppliers in a safe location.",
        "Regular maintenance extends the life of your pergola. Check fasteners and brackets annually for rust or looseness, clean gutters before and after storm seasons, and inspect flashing joints for deterioration. Polycarbonate roofs benefit from occasional cleaning with mild detergent to maintain clarity, while Colorbond roofs need minimal maintenance beyond gutter clearing.",
      ],
      bullets: [
        "Schedule final inspection with council before using the completed structure",
        "Clean gutters at least twice per year to prevent overflow and water damage",
        "Inspect and tighten all bolts and brackets every 12 months",
        "Apply protective coating to timber every 2-3 years in exposed locations",
      ],
    },
  ],

  testimonial: {
    name: "Michelle K.",
    location: "Castle Hill, Sydney",
    quote: "We built a 5x4 metre pergola with insulated roofing last spring. The entire process took about 5 days and the result is fantastic. We use it year-round now and it stays comfortable even on hot days.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Build Your Pergola?",
    text: "Get expert advice and a free quote from our team. We design and construct custom pergolas with professional roofing throughout Sydney and can handle permits and engineering for you.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["pergola construction", "outdoor structures", "pergola roofing", "sydney building"],
  readingTime: "9 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
