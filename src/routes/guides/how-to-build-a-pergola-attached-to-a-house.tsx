import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Build a Pergola Attached to a House",
  slug: "how-to-build-a-pergola-attached-to-a-house",
  path: "/guides/how-to-build-a-pergola-attached-to-a-house/",
  description: "Complete guide to building a pergola attached to your house in Sydney. Learn about design, materials, permits, attachment methods, costs and installation steps for your outdoor living space.",
  keywords: "pergola attached to house, build pergola sydney, pergola installation, attached pergola design, pergola building costs",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Build a Pergola Attached to a House",
    subheadline: "A complete guide for Sydney homeowners on designing, planning and building a pergola attached to your home, from materials and permits to professional installation.",
    bullets: [
      "Learn how to properly attach a pergola to your house wall without causing leaks or structural damage",
      "Understand the council approval and permit requirements for attached pergolas in Sydney",
      "Compare timber, steel and aluminium materials for durability in coastal and suburban conditions",
      "Get realistic cost estimates and timeframes for professional and DIY pergola builds",
    ],
  },

  intro: {
    paragraphs: [
      "An attached pergola transforms your outdoor living area by providing shelter, shade and a seamless extension of your home. Unlike freestanding pergolas, an attached design uses your house as one of the structural anchor points, reducing materials and creating a more integrated look.",
      "Building a pergola attached to a house requires careful planning to avoid water damage, structural issues and council headaches. The attachment method, flashing details and post placement all need to be done correctly or you risk leaks into your wall cavity or uneven loads on your house frame.",
      "At Sydney Roofing and Gutters, we design and install attached pergolas across Sydney that comply with AS 1170 structural standards and local council regulations. This guide covers what you need to know before starting your project.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Most attached pergolas in Sydney require a Complying Development Certificate or Development Approval depending on size and location",
      "Expect to pay between $6,000 and $18,000 for a professionally built attached pergola depending on size and materials",
      "Hardwood or treated pine timber lasts 15-25 years while powder-coated aluminium requires minimal maintenance for 30+ years",
      "Proper ledger board attachment and flashing are critical to prevent water damage to your house wall",
    ],
  },

  sections: [
    {
      id: "design-and-planning",
      heading: "Design and Planning Your Attached Pergola",
      paragraphs: [
        "Start by deciding how far you want the pergola to extend from your house. Most attached pergolas in Sydney range from 3 to 5 metres deep and span between 4 and 8 metres wide. The depth affects how much shade you get during summer when the sun is high versus winter when the angle is lower.",
        "Consider the orientation of your outdoor space. North-facing pergolas get full sun in Sydney, so you may want closer rafter spacing or a shade cloth to reduce heat. East-facing areas get morning sun and are cooler in the afternoon. South-facing pergolas stay shaded most of the day, which can feel cool in winter.",
      ],
      bullets: [
        "Measure the available wall length and decide on your desired depth and width",
        "Check the height of your eaves and ensure the pergola roof line sits below or aligns neatly",
        "Plan for drainage by ensuring the pergola roof has adequate fall away from the house",
        "Consider adding polycarbonate roofing, shade cloth or louvres for weather protection",
      ],
    },
    {
      id: "materials-and-structural-options",
      heading: "Materials and Structural Options",
      paragraphs: [
        "Timber remains the most popular choice for attached pergolas in Sydney. Treated pine is cost-effective and widely available, while hardwoods like merbau and ironbark offer superior durability in exposed coastal conditions. All timber needs regular oiling or staining to prevent weathering and maintain appearance.",
        "Steel and aluminium pergolas are becoming more common, especially for modern homes. Powder-coated aluminium requires virtually no maintenance and will not warp or rot. Steel posts and beams are stronger and allow for longer unsupported spans, but require rust-proofing and higher upfront costs.",
      ],
      bullets: [
        "Treated pine: affordable, requires maintenance every 1-2 years, 15-20 year lifespan",
        "Hardwood timber: durable, naturally resistant to rot and termites, 20-30 year lifespan",
        "Aluminium: lightweight, low maintenance, ideal for coastal properties, 30+ years",
        "Steel: strongest option for large spans, requires quality powder coating or galvanising",
      ],
    },
    {
      id: "permits-and-approvals",
      heading: "Permits and Council Approvals in Sydney",
      paragraphs: [
        "In most Sydney council areas, an attached pergola can be approved as Complying Development if it meets the size and setback requirements in the State Environmental Planning Policy. This means you can get approval through a private certifier in a matter of weeks rather than months.",
        "Typical complying development rules require the pergola to be behind the building line, not exceed 25 square metres, maintain 900mm setback from side boundaries and stay under the maximum building height for your zone. If your proposal does not meet these criteria, you need a full Development Application through council.",
      ],
      bullets: [
        "Check your council planning controls and SEPP requirements before starting",
        "Engage a certifier or architect if your design is close to boundary or height limits",
        "Budget $1,200-$2,500 for certifier fees and structural engineering reports",
        "Do not start building until you have written approval or risk being forced to remove the structure",
      ],
    },
    {
      id: "attachment-methods-and-flashing",
      heading: "Attachment Methods and Flashing Details",
      paragraphs: [
        "The ledger board is the horizontal beam that attaches to your house wall and supports one side of the pergola roof. It must be bolted securely into the house frame, not just into cladding or brick veneer. Most builders use galvanised coach bolts or dynabolts spaced at 600mm centres.",
        "Flashing is critical to keep water out. A custom-made metal flashing should sit behind the ledger, tuck up under the house weatherboard or render, and lap over the top of the ledger. Without proper flashing, water will track down the wall and cause rot, mould or internal leaks over time.",
      ],
      bullets: [
        "Ledger board should be at least 150mm x 45mm treated timber or steel channel",
        "Fix the ledger into studs or masonry with bolts rated for structural loads",
        "Install metal flashing with a minimum 5-degree fall to direct water away from the wall",
        "Seal all bolt penetrations with sikaflex or equivalent to prevent moisture ingress",
      ],
    },
    {
      id: "post-footings-and-foundations",
      heading: "Post Footings and Foundations",
      paragraphs: [
        "The freestanding posts at the outer edge of your pergola need solid footings to prevent movement and uneven loads. In Sydney clay soils, concrete footings should be at least 600mm deep and 300mm diameter for standard residential pergolas. Deeper footings may be required in reactive clay or on sloping sites.",
        "Steel post brackets set into wet concrete are the most common method for timber posts. The bracket keeps the timber above ground level to prevent rot and allows for easy replacement if needed. For steel or aluminium posts, the post is often cast directly into the concrete.",
      ],
      bullets: [
        "Dig footings at least 600mm deep or to the depth specified by your engineer",
        "Pour concrete mix with minimum 20 MPa strength for residential pergolas",
        "Use galvanised or stainless steel post brackets to prevent corrosion",
        "Allow concrete to cure for at least 3 days before loading the posts",
      ],
    },
    {
      id: "building-process-and-costs",
      heading: "Building Process and Costs",
      paragraphs: [
        "For a professionally built attached pergola in Sydney, the process typically takes 3 to 7 days depending on size and complexity. The builder will dig and pour footings, install the ledger and flashing, erect posts and beams, then add rafters and any roofing or shade material.",
        "Costs vary widely based on materials, size and finishes. A basic 4m x 3m treated pine pergola attached to your house might cost $6,000 to $10,000 installed. A larger 6m x 4m hardwood or aluminium pergola with polycarbonate roofing can reach $15,000 to $25,000. These figures include labour, materials and disposal of waste.",
      ],
      bullets: [
        "DIY builds can save 40-60% on labour but require tools, skills and physical effort",
        "Budget $100-$200 per square metre for basic timber builds, $250-$400 for premium materials",
        "Add $1,500-$3,000 for polycarbonate or insulated roofing panels",
        "Get at least three detailed written quotes that specify all materials and inclusion items",
      ],
    },
  ],

  testimonial: {
    name: "Rachel M.",
    location: "Cronulla, Sydney",
    quote: "We had an attached hardwood pergola built along our back deck. The flashing work was meticulous and the finish is beautiful. It has completely changed how we use our outdoor area, even on hot summer days.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Build Your Attached Pergola?",
    text: "Get a free design consultation and quote from our experienced team. We handle everything from council approvals to final installation across greater Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["pergola", "outdoor living", "home improvement", "sydney building"],
  readingTime: "9 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
