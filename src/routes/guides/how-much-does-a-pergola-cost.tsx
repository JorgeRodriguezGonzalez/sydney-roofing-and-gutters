import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How Much Does a Pergola Cost?",
  slug: "how-much-does-a-pergola-cost",
  path: "/guides/how-much-does-a-pergola-cost/",
  description: "Discover the real cost of building a pergola in Sydney. Compare timber, steel and aluminium options, understand permit requirements and get accurate pricing for your outdoor project.",
  keywords: "pergola cost sydney, pergola prices, timber pergola, steel pergola, outdoor structure costs",
  publishedISO: "2022-05-02",
  modifiedISO: "2026-01-09",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How Much Does a Pergola Cost?",
    subheadline: "A complete breakdown of pergola costs in Sydney, including materials, labour, council approvals and hidden expenses that affect your final price.",
    bullets: [
      "Compare timber, steel and aluminium pergola costs with real Sydney pricing",
      "Understand how size, materials and design complexity impact your budget",
      "Learn which permits and approvals you need in NSW and what they cost",
      "Get insider tips on reducing costs without compromising quality or compliance",
    ],
  },

  intro: {
    paragraphs: [
      "Pergolas are one of the most popular outdoor additions for Sydney homeowners. They provide shade, define outdoor living areas and can significantly increase property value. But the cost of building a pergola varies dramatically depending on materials, size, design and whether you hire professionals or take the DIY route.",
      "In the Sydney market, a basic timber pergola for a standard backyard might start around $3,000 for materials only, while a fully engineered steel and polycarbonate structure with electrical work and council certification can easily exceed $25,000. The gap between budget and premium is substantial, and understanding what drives those costs helps you plan realistically.",
      "This guide breaks down every cost component based on current Sydney pricing and NSW building requirements. Whether you are considering a simple weekend project or a custom-designed outdoor room, you will finish reading with a clear picture of what to budget.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Basic DIY timber pergolas start around $3,000 to $6,000 for materials and tools",
      "Professionally installed timber pergolas typically cost between $8,000 and $18,000 in Sydney",
      "Steel and aluminium structures range from $12,000 to $30,000 depending on size and finish",
      "Council approval is required for most pergolas in NSW and fees range from $150 to $800 depending on your local council",
    ],
  },

  sections: [
    {
      id: "types-of-pergolas-and-price-ranges",
      heading: "Types of Pergolas and Their Price Ranges",
      paragraphs: [
        "The material you choose has the biggest single impact on cost. Treated pine is the most affordable option and suits traditional designs. Hardwood timber like merbau or spotted gum costs significantly more but offers superior durability and a premium look. Steel pergolas, often powder-coated Colorbond, are popular for modern homes and require less maintenance over time.",
        "Aluminium pergolas sit at the premium end of the market. They are lightweight, rust-proof and often come with integrated louvre roofs that let you control light and ventilation. These systems are engineered products and the initial cost is high, but they deliver long-term value in low-maintenance outdoor living.",
      ],
      bullets: [
        "Treated pine: $3,000-$8,000 for a basic 4m x 3m DIY kit",
        "Hardwood timber: $10,000-$18,000 professionally installed for similar size",
        "Steel frame with Colorbond posts and beams: $12,000-$22,000 installed",
        "Aluminium louvre systems: $18,000-$35,000 for a fully motorised setup",
      ],
    },
    {
      id: "factors-that-affect-pergola-cost",
      heading: "Key Factors That Affect Pergola Cost",
      paragraphs: [
        "Size is the most obvious factor. A small 3m x 3m structure uses less material and labour than a 6m x 4m pergola that covers a full outdoor dining area. Roof type also matters. Open-beam pergolas are cheaper than structures with polycarbonate panels, shade cloth or insulated roofing, all of which add material and installation time.",
        "Complexity drives cost quickly. Attached pergolas that connect to your house require structural engineering and council approval. Freestanding structures in the middle of the yard are simpler and often exempt from permits if they meet size limits. Site access, ground conditions and whether you need concrete footings versus post anchors also influence the final bill.",
      ],
      bullets: [
        "Larger footprints require more posts, beams and fasteners which increase material costs proportionally",
        "Adding roofing like polycarbonate or insulated panels can add $2,000 to $8,000 to the project",
        "Electrical work for lighting or fans typically adds $800 to $2,500 depending on circuit runs",
        "Difficult access or sloped ground can increase labour costs by 20 to 40 percent",
      ],
    },
    {
      id: "detailed-cost-breakdown",
      heading: "Detailed Cost Breakdown for Sydney Projects",
      paragraphs: [
        "For a professionally built 4m x 3m hardwood timber pergola in Sydney, expect to pay around $12,000 to $15,000. This includes treated hardwood posts and beams, galvanised bolts and brackets, concrete footings, labour and basic waterproofing. If you add a polycarbonate roof to keep rain out, that pushes the total closer to $18,000.",
        "Steel pergolas in a similar size range typically cost $14,000 to $20,000 installed. The frame is often Colorbond steel with powder-coated finishes, and the structure is engineered to meet wind load requirements for the Sydney region. Adding extras like downlights, ceiling fans or privacy screens can easily add another $3,000 to $6,000.",
      ],
      bullets: [
        "Materials for a 4m x 3m hardwood pergola: $4,000-$6,000",
        "Labour for professional installation: $3,000-$6,000",
        "Concrete footings and site preparation: $800-$1,500",
        "Engineering certificate and council fees: $600-$1,200",
      ],
    },
    {
      id: "permits-and-council-requirements",
      heading: "Permits and Council Requirements in Sydney",
      paragraphs: [
        "In NSW, most pergolas require either a Complying Development Certificate or a full Development Application. The rules vary by council, but generally if your pergola is under 20 square metres, freestanding and setback at least 900mm from boundaries, it may qualify as exempt development. Anything attached to the house or larger than that threshold will need approval.",
        "Council fees in Sydney vary significantly. Some councils charge as little as $150 for a simple CDC, while others charge $600 or more. If you need a full DA due to heritage overlays or non-compliant setbacks, expect fees upwards of $1,500 plus the cost of architectural plans. Always check with your local council before starting work to avoid costly removal orders.",
      ],
      bullets: [
        "Exempt development applies to small freestanding structures under 20m² with correct setbacks",
        "Complying Development Certificates cost $400-$800 and take 2-4 weeks to process",
        "Full Development Applications cost $1,200-$2,500 and can take 8-12 weeks",
        "Structural engineering reports add $600-$1,200 to your approval costs",
      ],
    },
    {
      id: "choosing-a-pergola-builder",
      heading: "Choosing the Right Pergola Builder",
      paragraphs: [
        "Not all builders are equal when it comes to outdoor structures. Look for contractors who specialise in pergolas, decking and outdoor carpentry rather than general builders who do everything. Specialists understand material behaviour in the Sydney climate, know the council approval process and have relationships with certifiers that can speed up approvals.",
        "Check that your builder holds a valid NSW contractor licence if the project value exceeds $5,000. Ask for recent photos of completed pergola projects and contact at least two references. A quality builder will provide a detailed written quote that breaks down materials, labour, permits and any exclusions, so you know exactly what you are paying for.",
      ],
      bullets: [
        "Verify the contractor holds a current NSW builder licence and insurance",
        "Ask to see examples of completed pergola projects in your area",
        "Get at least three detailed written quotes that itemise all costs",
        "Ensure the contract includes a timeline, payment schedule and workmanship warranty of at least 6 years",
      ],
    },
  ],

  testimonial: {
    name: "Michelle K.",
    location: "Pennant Hills, Sydney",
    quote: "We had a hardwood pergola installed last spring and it transformed our backyard. The builder handled all the council paperwork and the whole project was finished in under two weeks. The quote was detailed and there were no surprise costs.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Build Your Pergola?",
    text: "Get a free, no-obligation quote for your pergola project. We handle everything from design and council approvals to final construction, and we service all of greater Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["pergola", "outdoor structures", "pergola cost", "sydney builder"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
