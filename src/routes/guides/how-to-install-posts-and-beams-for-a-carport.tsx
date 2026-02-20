import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Install Posts and Beams for a Carport",
  slug: "how-to-install-posts-and-beams-for-a-carport",
  path: "/guides/how-to-install-posts-and-beams-for-a-carport/",
  description: "A complete guide to installing carport posts and beams in Sydney. Learn about post selection, concrete footings, beam attachment, Australian standards and how to hire the right builder.",
  keywords: "carport post installation, carport beams sydney, concrete footings, carport construction, carport posts australia",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Install Posts and Beams for a Carport",
    subheadline: "A comprehensive guide for Sydney homeowners on installing carport posts and beams correctly, covering materials, footings, compliance and construction best practices.",
    bullets: [
      "Learn how to prepare the site and mark out post locations accurately",
      "Understand concrete footing requirements under NSW building regulations",
      "Compare timber, steel and engineered beam options for different spans",
      "Discover the correct methods for securing posts and attaching beams",
    ],
  },

  intro: {
    paragraphs: [
      "Building a carport is one of the most practical additions to a Sydney property, protecting vehicles from sun, rain and hail while adding usable covered space. The structural foundation of any carport is the post and beam framework, which carries the entire roof load and must be engineered to withstand wind loads common across New South Wales.",
      "Getting posts and beams right is critical for safety and compliance. Incorrectly sized members, inadequate footings or poor connections can lead to structural failure, especially during severe weather events. This guide walks through the key steps of carport post and beam installation so you understand what is required before starting construction.",
      "At Sydney Roofing and Gutters, we build and install carports across the greater Sydney region. The information below reflects current Australian Standards and real-world construction experience in local conditions.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Carport construction in NSW requires a complying development certificate or development approval depending on size and setback",
      "Concrete footings must typically be at least 400mm deep in most Sydney soils, with larger footings required in reactive clay areas",
      "Treated pine, steel or engineered LVL beams are the most common options, with spans typically ranging from 3 to 6 metres",
      "Posts are usually spaced 3 to 4 metres apart for residential carports, with spacing determined by beam capacity and roof load",
    ],
  },

  sections: [
    {
      id: "site-preparation-and-layout",
      heading: "Site Preparation and Marking Out Post Locations",
      paragraphs: [
        "Before digging any holes, the site needs to be cleared and accurately marked out. Start by identifying the exact footprint of the carport and marking each post location with spray paint or wooden stakes. Use string lines and a builders square to ensure corners are perfectly square — even small errors at this stage will show up as twisted or misaligned posts later.",
        "Check for underground services before excavating. Dial Before You Dig is a free service in Australia that locates water, gas, electricity and telecommunications lines. Hitting a service during excavation can be dangerous and expensive. Also consider drainage — water should not pool around post footings or run under the carport slab if one is being laid.",
      ],
      bullets: [
        "Mark post centres accurately using string lines and a measuring tape",
        "Check that diagonals are equal to confirm the layout is square",
        "Call Dial Before You Dig at least two business days before excavating",
        "Ensure the site slopes away from the house or has adequate drainage",
      ],
    },
    {
      id: "choosing-posts-and-beams",
      heading: "Selecting the Right Posts and Beams",
      paragraphs: [
        "The size and type of posts and beams depend on the span, roof pitch, cladding material and wind rating for your area. For most single-car carports in Sydney, 90mm x 90mm or 100mm x 100mm treated pine posts are adequate. Larger carports or areas with higher wind loads may require steel posts or larger timber sections.",
        "Beams must be sized to span between posts without excessive deflection. Treated pine, LVL (laminated veneer lumber) and steel C-section or I-beams are all suitable. An engineer or experienced builder can calculate the correct beam size based on your specific design. Undersized beams will sag over time and may fail under load during storms.",
      ],
      bullets: [
        "Treated pine H4 or higher is required for posts in ground contact",
        "Steel posts offer greater strength and are ideal for long spans or modern designs",
        "LVL beams provide excellent span capacity with consistent engineered strength",
        "Always verify beam and post sizes against an engineering calculation or building code table",
      ],
    },
    {
      id: "excavating-and-pouring-footings",
      heading: "Excavating Holes and Pouring Concrete Footings",
      paragraphs: [
        "Footings transfer the carport load into the ground and must be sized according to soil type and load requirements. In stable soils, a 400mm diameter hole dug to 500-600mm depth is typical for residential carports. Reactive clay soils common in western Sydney may require deeper footings or engineer-designed piers to prevent movement.",
        "Once holes are dug, place the post in the centre and brace it vertically before pouring concrete. Use a spirit level on two adjacent faces to check plumb. Pour concrete around the post, leaving the top 50-100mm below finished ground level so the post base is protected from moisture. Some builders prefer to set posts on galvanised stirrups cast into the footing for better ventilation and rot resistance.",
      ],
      bullets: [
        "Dig footing holes at least 400mm in diameter and 500-600mm deep in stable soil",
        "Larger footings or engineered piers may be required in reactive clay areas",
        "Brace posts vertically and check plumb on two faces before pouring concrete",
        "Consider using stirrup anchors to keep timber posts above ground level",
      ],
    },
    {
      id: "installing-and-bracing-posts",
      heading: "Installing Posts and Temporary Bracing",
      paragraphs: [
        "With footings poured and posts set vertically, the concrete needs at least 24-48 hours to cure before applying any load. During this time, temporary bracing keeps posts aligned and prevents movement. Run diagonal braces from each post to stakes driven into the ground, and re-check plumb as the concrete sets.",
        "Once cured, the tops of the posts are marked and cut to the correct height. For a flat or slightly pitched carport roof, all posts should be cut to the same height or follow a consistent slope. Use a water level, laser level or string line to transfer heights accurately across all posts.",
      ],
      bullets: [
        "Allow concrete footings to cure for at least 24 hours before removing temporary braces",
        "Use diagonal timber bracing staked into the ground to hold posts vertical during curing",
        "Mark post heights using a laser level or water level for accuracy",
        "Cut posts to final height only after concrete has fully set",
      ],
    },
    {
      id: "attaching-beams-and-final-connections",
      heading: "Attaching Beams and Making Final Connections",
      paragraphs: [
        "Beams are typically bolted directly to the top of posts using galvanised coach screws or bolts, or fixed using galvanised post caps and brackets. For timber-on-timber connections, pre-drill holes to prevent splitting and use hot-dip galvanised fasteners rated for outdoor use. Steel beams may be welded to steel posts or bolted using brackets.",
        "If the carport is attached to the house, the beam on that side is usually fixed to the fascia or wall frame using a ledger board and joist hangers. This connection must be strong enough to carry half the roof load and resist uplift during high winds. Rafters or purlins then run from the ledger to the freestanding beams, completing the structural frame.",
      ],
      bullets: [
        "Use coach screws or through-bolts with washers for timber beam connections",
        "Galvanised post caps provide a neat and strong connection between posts and beams",
        "Ledger boards must be securely fixed to house framing, not just cladding",
        "Check that all fasteners are hot-dip galvanised or stainless steel for corrosion resistance",
      ],
    },
  ],

  testimonial: {
    name: "Jenny W.",
    location: "Castle Hill, Sydney",
    quote: "We had a double carport built last year and the team did an excellent job setting the posts and beams. Everything was perfectly level and the structure has been rock solid through some heavy storms.",
    rating: 5,
  },

  cta: {
    heading: "Need Help Building Your Carport?",
    text: "Get a free quote from our experienced carport and outdoor structure team. We handle everything from design and approvals to construction and finishing.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["carport construction", "posts and beams", "concrete footings", "sydney carpentry"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
