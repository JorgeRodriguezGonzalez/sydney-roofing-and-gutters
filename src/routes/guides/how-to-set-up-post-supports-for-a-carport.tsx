import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Set Up Post Supports for a Carport",
  slug: "how-to-set-up-post-supports-for-a-carport",
  path: "/guides/how-to-set-up-post-supports-for-a-carport/",
  description: "Learn how to properly set up post supports for your carport in Sydney. Covers in-ground footings, surface mounting, spacing, materials and NSW compliance requirements.",
  keywords: "carport post supports, carport footings sydney, carport installation, post spacing carport, concrete footings",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Set Up Post Supports for a Carport",
    subheadline: "A complete guide for Sydney homeowners on choosing, installing and securing carport post supports that meet building codes and last for decades.",
    bullets: [
      "Understand the different types of post support systems and when to use each",
      "Learn correct spacing, depth and concrete mix requirements for footings",
      "Discover how to comply with NSW building regulations and wind load requirements",
      "Get step-by-step advice on site preparation and post installation techniques",
    ],
  },

  intro: {
    paragraphs: [
      "The foundation of any carport is its post support system. Get this right and your carport will stand firm for 30 years or more. Get it wrong and you risk structural failure, insurance issues and costly repairs down the track. In Sydney and across NSW, strong winds and heavy rain make proper post anchoring even more critical.",
      "Most carport failures occur not because of poor roofing material or frame design, but because the posts were inadequately supported or the footings were undersized. Whether you are building a simple single-bay carport or a large double structure, the principles of proper post support remain the same.",
      "This guide covers the most common post support methods used in Sydney, explains the regulations you need to follow and provides practical advice on installation. We have built hundreds of carports across the region and this information is based on real-world experience and current Australian Standards.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "In-ground concrete footings are the most common and reliable method for carport posts in Sydney",
      "Posts should be spaced no more than 3 metres apart for standard residential carports with sheet roofing",
      "Footings must typically be 450mm to 600mm deep and 300mm to 400mm wide depending on soil type and wind zone",
      "All carport structures in NSW require council approval if they exceed 10 square metres in area",
    ],
  },

  sections: [
    {
      id: "types-of-post-supports",
      heading: "Types of Post Support Systems",
      paragraphs: [
        "There are three main methods for securing carport posts: in-ground concrete footings, surface-mounted bolt-down brackets and adjustable post anchors. In-ground footings are by far the most common choice in Sydney because they provide superior stability and are required by most councils for structures attached to homes or over a certain size.",
        "Surface-mounted systems use heavy-duty metal brackets bolted to an existing concrete slab. They are faster to install and useful when digging is not an option, but they rely entirely on the slab being thick enough and properly reinforced. Adjustable post anchors sit on top of concrete piers and allow for minor height adjustments during installation.",
      ],
      bullets: [
        "In-ground footings: maximum strength, ideal for exposed sites and larger carports",
        "Surface-mounted brackets: fast install on existing slabs, limited to lighter structures",
        "Adjustable post anchors: used on concrete piers, good for uneven ground",
        "Galvanised or stainless steel brackets are essential in coastal Sydney areas to prevent rust",
      ],
    },
    {
      id: "planning-and-spacing",
      heading: "Planning Post Spacing and Layout",
      paragraphs: [
        "Post spacing depends on the span capacity of your roof beams and the load from the roofing material. For a typical carport with Colorbond sheeting and steel C-section beams, posts are generally placed every 2.4 to 3 metres along the length of the structure. Wider spacing requires larger beams and increases material costs significantly.",
        "Your layout also needs to account for vehicle access, door clearances and any existing structures like fences or retaining walls. Mark out the post positions on the ground using string lines and check that diagonals are equal to ensure the frame will be square. Getting the layout right at this stage saves major headaches during assembly.",
      ],
      bullets: [
        "Standard spacing is 2.4m to 3m for residential carports with steel frames",
        "Closer spacing may be required in high wind zones or for heavy roofing like tiles",
        "Use string lines and measure diagonals to ensure posts are square before digging",
        "Allow minimum 3m width for single car access and 5.5m for double carports",
      ],
    },
    {
      id: "footing-requirements",
      heading: "Footing Depth and Concrete Requirements",
      paragraphs: [
        "In Sydney, footing depth is determined by soil type, wind classification and the size of the structure. For most suburban sites with stable clay or sandy soil, a 450mm to 600mm deep footing is standard. Coastal areas classified as high wind zones may require deeper footings or additional reinforcement with steel bar.",
        "The hole diameter should be at least 300mm for standard 100mm steel posts, increasing to 400mm or more for larger posts or heavier structures. Use N20 or N25 concrete mix for structural footings — this is readily available from concrete suppliers and provides the strength needed. Pour concrete within 24 hours of digging to prevent soil collapse and water ingress.",
      ],
      bullets: [
        "Dig footings 450mm to 600mm deep depending on soil and wind zone",
        "Hole diameter should be 3 times the post width as a general rule",
        "Use N20 or N25 concrete mix with minimum 20MPa compressive strength",
        "Install posts while concrete is wet and brace in position until fully cured (at least 48 hours)",
      ],
    },
    {
      id: "installation-process",
      heading: "Step by Step Installation Process",
      paragraphs: [
        "Start by marking out and digging all post holes to the required depth. Remove any loose soil from the bottom of each hole and check that the base is level. If the ground is very dry, wet the hole lightly before pouring concrete to prevent the soil from drawing moisture out too quickly.",
        "Set each post into its hole and pour concrete around it, tamping down with a rod to remove air pockets. Use a spirit level on two adjacent faces to ensure the post is perfectly vertical, then brace it with temporary timber supports. Double-check that all posts are aligned and at the correct height before the concrete begins to set.",
        "Allow the concrete to cure for at least 48 hours before removing braces or applying any load. In hot weather, cover the footings with damp hessian to slow the curing process and prevent cracking. Once cured, backfill around the top of each footing with soil to create a slight slope away from the post for drainage.",
      ],
      bullets: [
        "Dig all holes first and check depths before mixing concrete",
        "Plumb each post with a spirit level and brace firmly before concrete sets",
        "Tamp concrete to remove air pockets and ensure full contact with the post",
        "Allow minimum 48 hours curing time before loading or removing braces",
      ],
    },
    {
      id: "regulations-and-compliance",
      heading: "NSW Building Regulations and Compliance",
      paragraphs: [
        "Any carport over 10 square metres in area requires a complying development certificate or full development approval from your local council in NSW. The structure must be designed to withstand wind loads specified for your region under AS 1170.2, which classifies Sydney suburbs into different wind zones based on exposure and distance from the coast.",
        "If your carport is attached to the house or close to a boundary, additional setback and fire separation rules apply. Your installer should provide engineered drawings stamped by a registered engineer if the structure is over a certain size or in a high wind zone. Skipping approvals can lead to fines, forced removal and insurance problems if damage occurs.",
      ],
      bullets: [
        "Carports over 10 square metres require council approval in NSW",
        "Wind load calculations must comply with AS 1170.2 for your specific suburb",
        "Attached carports may require fire-rated materials if within 900mm of a boundary",
        "Always use a licensed builder or certifier to ensure compliance with the Building Code of Australia",
      ],
    },
    {
      id: "choosing-materials-and-contractors",
      heading: "Choosing Materials and Hiring a Contractor",
      paragraphs: [
        "For posts, galvanised steel is the standard choice in Sydney due to its strength, durability and resistance to termites. Timber posts can be used but must be treated to H4 or H5 standard for in-ground contact and are prone to rot in damp conditions. Avoid using untreated pine or hardwood without proper chemical treatment.",
        "When hiring a contractor, verify that they hold a current NSW builder licence and carry public liability insurance. Ask to see examples of previous carport installations and request a detailed written quote that includes footings, posts, framing, roofing and all hardware. A good contractor will also handle the council approval process on your behalf.",
      ],
      bullets: [
        "Galvanised steel posts offer the best combination of strength and longevity",
        "Timber posts must be H4 or H5 treated if used in-ground in Sydney",
        "Check contractor licence on NSW Fair Trading website before signing any contract",
        "Ensure quote includes council fees, engineering if required and a workmanship warranty of at least 5 years",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Parramatta, Sydney",
    quote: "The team installed our double carport with in-ground footings and the whole job was completed in under a week. The posts are rock solid even in the strong winds we get here. Very happy with the quality and professionalism.",
    rating: 5,
  },

  cta: {
    heading: "Need a Carport Built the Right Way?",
    text: "Get a free quote for a professionally designed and installed carport with engineered post supports. We handle council approvals, engineering and all construction work across Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["carport", "post supports", "footings", "building regulations"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
