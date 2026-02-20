import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "8 Roof Design Ideas for Extensions",
  slug: "8-roof-design-ideas-for-extensions",
  path: "/guides/8-roof-design-ideas-for-extensions/",
  description: "Explore 8 practical roof design ideas for home extensions in Sydney. From skillion to gable roofs, learn which design suits your space, budget and local regulations.",
  keywords: "roof extension ideas, extension roof design sydney, skillion roof extension, gable extension roof, flat roof extension",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "8 Roof Design Ideas for Extensions",
    subheadline: "Choosing the right roof design for your home extension can transform your space while staying within budget and council regulations. Explore the most popular options for Sydney homes.",
    bullets: [
      "Compare skillion, gable, hip and flat roof styles for extensions",
      "Understand which designs work best with Sydney weather and planning rules",
      "Learn typical costs and timeframes for each roof type",
      "Get expert advice on matching new roofs to existing architecture",
    ],
  },

  intro: {
    paragraphs: [
      "Adding an extension to your Sydney home is an exciting project, but the roof design you choose can make or break the result. The right roof needs to blend with your existing home, meet structural and waterproofing requirements, stay within budget and satisfy local council approvals.",
      "From sleek skillion roofs on modern rear extensions to traditional gable designs that match heritage homes, there are more options than most homeowners realise. Each style has different cost implications, aesthetic appeal and performance in the Sydney climate.",
      "This guide covers eight practical roof design ideas for extensions, drawn from real projects across Sydney. Whether you are adding a single-storey living area, a second-storey addition or a granny flat, one of these designs will suit your needs.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Skillion roofs are the most popular choice for modern single-storey extensions in Sydney",
      "Matching the pitch and material of your existing roof helps with council approval and resale value",
      "Extension roof costs typically range from $8,000 to $25,000 depending on size and complexity",
      "All extension roofs in NSW require Development Approval or Complying Development Certificate before construction",
    ],
  },

  sections: [
    {
      id: "choosing-the-right-roof-style",
      heading: "Choosing the Right Roof Style for Your Extension",
      paragraphs: [
        "The roof design for your extension should balance three key factors: architectural harmony with the existing home, practical performance in the Sydney climate, and compliance with local planning rules. Many councils prefer designs that do not compete with or dominate the original roofline, especially in heritage conservation areas.",
        "Think about how the new roof will look from the street and neighbouring properties. A poorly matched extension roof can reduce kerb appeal and resale value. At the same time, modern extensions on period homes can work beautifully when the design is confident and well-executed rather than trying to mimic historical details.",
      ],
      bullets: [
        "Match roof pitch and materials to blend seamlessly with the existing home",
        "Consider sight lines from the street and adjacent properties",
        "Check your local council Development Control Plan for specific design guidelines",
        "Work with a designer or architect for complex or multi-storey extensions",
      ],
    },
    {
      id: "skillion-and-mono-pitch-designs",
      heading: "Skillion and Mono-Pitch Roof Designs",
      paragraphs: [
        "Skillion roofs, also called mono-pitch or shed roofs, have become the default choice for modern rear extensions in Sydney. A single sloped plane provides excellent water runoff, creates high ceilings on one side, and offers a clean contemporary look. The design is simple to build, which helps keep costs down.",
        "One challenge with skillion roofs is managing water drainage. The entire roof sheds water in one direction, so gutters and downpipes need careful sizing to handle heavy Sydney downpours. Orientation matters too — a north-facing skillion can provide great natural light through high windows, while a south-facing slope may leave the extension feeling dark.",
      ],
      bullets: [
        "Simple construction reduces labour time and material waste",
        "High ceilings on one side create a sense of space and allow clerestory windows",
        "Ideal for single-storey extensions where the roof sits below the main house ridgeline",
        "Minimum pitch of 5 degrees required for Colorbond and most metal roofing profiles",
      ],
    },
    {
      id: "gable-and-hip-roof-extensions",
      heading: "Gable and Hip Roof Extensions",
      paragraphs: [
        "Gable roofs feature two sloping sides that meet at a central ridge, creating triangular end walls. This traditional design works well when you want the extension to match the existing home, particularly on Federation, Californian bungalow and weatherboard houses. A gable extension can be designed to continue the existing roofline or sit as a secondary gable at right angles.",
        "Hip roofs slope on all four sides and are common on older brick homes across Sydney. Extending a hip roof usually means continuing the hipped form, which creates a more complex roof structure with multiple valleys and intersections. Hip extensions look cohesive but require careful flashing work to prevent leaks where new and old roofs meet.",
      ],
      bullets: [
        "Gable designs suit traditional and heritage-style homes",
        "Hip roofs provide excellent wind resistance and work well in exposed coastal areas",
        "Both styles allow for ceiling height variation and natural ventilation through gable vents",
        "More complex framing increases labour costs compared to skillion designs",
      ],
    },
    {
      id: "flat-and-low-pitch-options",
      heading: "Flat and Low-Pitch Roof Options",
      paragraphs: [
        "True flat roofs are rare on residential extensions in Sydney, but low-pitch roofs under 5 degrees are increasingly popular on modern designs. These roofs require membrane waterproofing systems like TPO, PVC or torch-on bitumen rather than standard metal sheeting. Proper drainage is critical — even a slight ponding issue can lead to leaks and membrane failure.",
        "Flat and low-pitch roofs suit contemporary box-style extensions and second-storey additions where you want a rooftop terrace or balcony above. The roof structure is simpler than pitched roofs, but waterproofing and drainage require specialist knowledge. Not all roofing contractors have experience with membrane systems, so choose your contractor carefully.",
      ],
      bullets: [
        "Membrane systems like TPO or torch-on required for pitches under 2 degrees",
        "Box gutters and internal drains must be designed to AS 3500.3 plumbing standards",
        "Ideal for creating usable rooftop outdoor spaces on second-storey extensions",
        "Regular maintenance and inspection needed to prevent membrane degradation",
      ],
    },
    {
      id: "butterfly-and-curved-designs",
      heading: "Butterfly and Curved Roof Designs",
      paragraphs: [
        "For homeowners looking for something distinctive, butterfly roofs and curved designs offer striking visual impact. A butterfly roof features two opposing slopes that meet at a central valley, creating a dramatic V-shape. Water drains to the centre rather than the edges, which requires robust box gutters and overflow protection.",
        "Curved roofs, whether barrel-vaulted or wave-formed, are rare on Sydney extensions due to complexity and cost. They require custom framing and specialised cladding like standing seam metal or flexible membrane systems. The result can be stunning, but expect to pay a significant premium over conventional designs.",
      ],
      bullets: [
        "Butterfly roofs create high ceilings at the perimeter and central drainage challenges",
        "Both designs require experienced architects and specialist roofing contractors",
        "Material and labour costs are typically 50-100 percent higher than standard pitched roofs",
        "Striking aesthetic impact suits architecturally designed contemporary homes",
      ],
    },
    {
      id: "costs-approvals-and-next-steps",
      heading: "Costs, Council Approvals and Next Steps",
      paragraphs: [
        "Extension roof costs vary widely based on size, complexity and materials. A simple skillion roof over a 20-square-metre extension might cost $8,000 to $12,000 including framing, Colorbond sheeting and gutters. A complex hip roof with multiple valleys on a larger extension could reach $20,000 to $30,000. Custom designs like butterfly or curved roofs can easily exceed $40,000.",
        "All extension roofs in NSW require either Development Approval from your local council or certification under the Complying Development pathway. Your designer or architect will advise which route suits your project. Council planners pay close attention to roof height, setbacks from boundaries, overshadowing of neighbouring properties and architectural character. Getting the roof design right early avoids costly redesigns later.",
      ],
      bullets: [
        "Budget $400 to $600 per square metre for a complete extension roof installed",
        "Allow 8 to 12 weeks for DA approval, or 2 to 4 weeks for Complying Development",
        "Work with a designer who understands local council planning requirements",
        "Factor in costs for engineer certification if the extension exceeds 25 square metres",
      ],
    },
  ],

  testimonial: {
    name: "Emma K.",
    location: "Epping, Sydney",
    quote: "Our architect suggested a skillion roof for the rear extension and it completely transformed the space. The high ceiling and clerestory windows make the kitchen feel huge, and it blends perfectly with our existing tile roof.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Design Your Extension Roof?",
    text: "Get expert advice on the best roof design for your Sydney extension. We work with architects, builders and homeowners to deliver quality roofing that complements your home and meets all regulations.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["extension roofs", "roof design", "skillion roof", "home extensions"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
