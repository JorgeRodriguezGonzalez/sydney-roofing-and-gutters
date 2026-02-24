import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Fascias, Soffits and Roof Carpentry",
  slug: "fascias-soffits-and-roof-carpentry",
  path: "/guides/fascias-soffits-and-roof-carpentry/",
  description: "Complete guide to fascia boards, soffits and roof carpentry in Sydney. Learn about materials, installation techniques, maintenance and how to choose a qualified roof carpenter.",
  keywords: "fascia boards sydney, soffit installation, roof carpentry, fascia replacement, roof carpenter",
  publishedISO: "2021-10-22",
  modifiedISO: "2026-02-20",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Fascias, Soffits and Roof Carpentry",
    subheadline: "A complete guide to understanding fascia boards, soffits and expert roof carpentry work for Sydney homes.",
    bullets: [
      "Understand what fascias and soffits do and why they matter",
      "Learn which materials work best in the Sydney climate",
      "Discover how proper carpentry prevents costly roof damage",
      "Know what to expect from a professional roof carpentry project",
    ],
  },

  intro: {
    paragraphs: [
      "Fascias and soffits are often overlooked until something goes wrong, yet they play a critical role in protecting your roof structure and the interior of your home. These timber or composite components sit at the edge of your roof, providing a finished look while preventing water, pests and debris from entering the roof cavity.",
      "Roof carpentry encompasses all the structural timber work that supports your roof covering. This includes rafters, battens, ridge beams, fascia boards, barge boards and eave lining. Quality carpentry work is the foundation of a long-lasting roof that can handle the wind, rain and heat cycles common in the Sydney region.",
      "At Sydney Roofing and Gutters, our team includes licensed carpenters who specialise in roof structures. This guide explains the key elements of fascia, soffit and roof carpentry work so you understand what quality looks like and what questions to ask before hiring a contractor.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Fascia boards support gutters and provide a barrier against weather; soffits enclose the underside of eaves and allow ventilation",
      "Hardwood timber, treated pine and fibre cement are the most common materials for fascias and soffits in Sydney",
      "Replacing rotten fascias and soffits typically costs between $80 and $150 per linear metre including materials and labour",
      "All structural roof carpentry in NSW must comply with AS 1684 timber framing standards and be carried out by licensed tradespeople",
    ],
  },

  sections: [
    {
      id: "what-are-fascias-and-soffits",
      heading: "What Are Fascias and Soffits?",
      paragraphs: [
        "The fascia board is the vertical board that runs along the edge of your roof, directly beneath the roofline. It provides the mounting surface for your gutters and protects the exposed ends of rafters from weather damage. Fascias are highly visible from street level, so they also contribute to the overall appearance of your home.",
        "Soffits are the horizontal boards or panels that enclose the underside of your eaves. They run from the fascia back to the exterior wall of your house. Soffits prevent birds and possums from nesting in your roof cavity while allowing controlled ventilation through purpose-built vents. Adequate roof ventilation is essential in Sydney to prevent heat buildup and condensation issues.",
      ],
      bullets: [
        "Fascias run vertically along the roof edge and support gutters",
        "Soffits enclose the eave underside and provide ventilation",
        "Both protect structural timber from moisture and pests",
        "Well-maintained fascias and soffits extend the life of your entire roof",
      ],
    },
    {
      id: "materials-and-options",
      heading: "Materials and Options for Sydney Homes",
      paragraphs: [
        "Hardwood timber such as ironbark or spotted gum is the traditional choice for fascias in Sydney. Hardwood is naturally durable and resists termites and decay, though it requires regular painting or oiling to maintain its appearance. Treated pine is a more affordable option but has a shorter lifespan unless properly maintained with paint or stain.",
        "Fibre cement boards have become increasingly popular in recent years. Products like Hardie fascia boards offer excellent resistance to rot, termites and fire, and they hold paint well. Fibre cement is heavier than timber so proper fixing is essential. Some builders also use aluminium or UPVC fascias, particularly on commercial buildings or modern coastal homes.",
      ],
      bullets: [
        "Hardwood timber: durable, termite-resistant, requires regular maintenance",
        "Treated pine: cost-effective, must be sealed and painted",
        "Fibre cement: low maintenance, fire-resistant, heavier installation",
        "Metal or UPVC: long-lasting, suited to modern or coastal builds",
      ],
    },
    {
      id: "installation-and-carpentry-techniques",
      heading: "Installation and Carpentry Techniques",
      paragraphs: [
        "Installing or replacing fascias and soffits requires precision carpentry. The work often involves removing old gutters, cutting away rotted timber, and ensuring new boards are level, plumb and securely fixed to rafter ends. Each fascia board must be fixed with galvanised or stainless steel screws or nails to prevent rust staining.",
        "Soffit installation involves measuring and cutting panels to fit neatly between the fascia and the wall, with allowance for ventilation panels or continuous strip vents. On older homes, carpenters may discover that rafter tails or eave framing have deteriorated, requiring structural repairs before new fascias and soffits can be fitted. Skipping these repairs leads to sagging and failure within a few years.",
      ],
      bullets: [
        "Old gutters and roofing are removed to access fascia boards",
        "Rotten or damaged timber is cut out and replaced with new material",
        "Fascia boards are fixed level and plumb to rafter ends",
        "Soffit panels are fitted with adequate ventilation and secure fixing",
      ],
    },
    {
      id: "maintenance-and-common-problems",
      heading: "Maintenance and Common Problems",
      paragraphs: [
        "Fascias and soffits are exposed to weather year-round, so deterioration is inevitable over time. Common problems include paint peeling, timber rot from blocked gutters, pest damage from termites or possums, and sagging caused by inadequate fixing or structural movement. Regular inspections from ground level or a ladder can catch early signs before expensive repairs are needed.",
        "Blocked or overflowing gutters are the leading cause of fascia damage. When water spills over the gutter edge, it runs down the fascia and soaks into the timber, causing rot within months. Keeping gutters clean and ensuring downpipes are clear is the simplest way to protect your fascias and extend their lifespan.",
      ],
      bullets: [
        "Inspect fascias and soffits at least once a year for damage or rot",
        "Keep gutters clean to prevent water overflow onto timber",
        "Repaint or reseal timber fascias every 5-7 years",
        "Look for signs of pest activity including possum scratches or termite tunnels",
      ],
    },
    {
      id: "choosing-a-qualified-roof-carpenter",
      heading: "Choosing a Qualified Roof Carpenter",
      paragraphs: [
        "Roof carpentry is specialist work that requires both structural knowledge and roofing experience. In NSW, any carpentry or roofing work valued over $5,000 must be performed by a licensed contractor. Check the licence on the NSW Fair Trading website and confirm that the contractor holds current insurance for public liability and workers compensation.",
        "Ask to see examples of previous fascia and soffit work. Quality carpentry is evident in clean cuts, neat joins, consistent fixing patterns and attention to detail around corners and junctions. A good carpenter will take the time to properly measure, cut and fit each board rather than forcing pieces into place.",
      ],
      bullets: [
        "Verify NSW contractor licence and insurance before hiring",
        "Choose a tradesperson who specialises in roof carpentry",
        "Ask for references and photos from similar projects",
        "Ensure the quote includes removal of old materials and site cleanup",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Epping, Sydney",
    quote: "Our old fascias were completely rotten after years of overflowing gutters. The carpenters replaced everything in two days and the new hardwood boards look fantastic. Very happy with the attention to detail.",
    rating: 5,
  },

  cta: {
    heading: "Need Expert Roof Carpentry?",
    text: "Get a free quote from our team of licensed carpenters and roofers. We handle fascia and soffit replacement, structural repairs and all roof carpentry work across Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["fascias", "soffits", "roof carpentry", "roof repairs"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
