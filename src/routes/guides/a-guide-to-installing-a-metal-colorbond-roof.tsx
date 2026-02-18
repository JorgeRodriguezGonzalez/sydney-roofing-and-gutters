import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "A Guide to Installing a Metal/Colorbond Roof",
  slug: "a-guide-to-installing-a-metal-colorbond-roof",
  path: "/guides/a-guide-to-installing-a-metal-colorbond-roof/",
  description: "A comprehensive guide to installing a Colorbond or metal roof in Sydney. Learn about materials, preparation, installation steps, costs and how to choose the right roofing contractor.",
  keywords: "colorbond roof installation, metal roof sydney, colorbond roofing guide, metal roof cost, roof installation process",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "A Guide to Installing a Metal/Colorbond Roof",
    subheadline: "Everything Sydney homeowners need to know about metal and Colorbond roof installation, from choosing materials to finding the right contractor.",
    bullets: [
      "Understand the full installation process from start to finish",
      "Compare Colorbond profiles, colours and costs for Sydney homes",
      "Learn what preparation work is required before installation day",
      "Know what questions to ask your roofing contractor before signing",
    ],
  },

  intro: {
    paragraphs: [
      "Metal roofing has become the go-to choice for Sydney homeowners looking for durability, energy efficiency and a clean modern look. Colorbond steel, manufactured by BlueScope, is by far the most popular option across New South Wales thanks to its resistance to corrosion, termites and extreme weather.",
      "Whether you are building a new home, replacing an ageing tile roof or re-roofing after storm damage, understanding the installation process helps you make informed decisions and avoid costly mistakes. This guide covers the key stages of a metal roof installation so you know exactly what to expect.",
      "At Sydney Roofing and Gutters, we have installed hundreds of Colorbond and metal roofs across the greater Sydney area. The information below is drawn from real project experience and current Australian building standards.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Colorbond roofing typically costs between $60 and $120 per square metre installed in Sydney",
      "A full re-roof on an average home takes 2 to 5 days depending on size and complexity",
      "All metal roof installations in NSW require a licensed roofing contractor and must comply with AS 1562.1",
      "Proper ventilation and sarking are essential for preventing condensation under metal roofs in coastal areas",
    ],
  },

  sections: [
    {
      id: "choosing-the-right-metal-roof",
      heading: "Choosing the Right Metal Roof for Your Home",
      paragraphs: [
        "The first decision is which profile and material suits your property. Colorbond comes in several profiles including Trimdek, Klip-Lok and Custom Orb, each with different aesthetic and performance characteristics. Trimdek is the most common choice for residential homes due to its balance of strength and clean lines.",
        "Colour selection matters more than most homeowners realise. Lighter colours like Surfmist and Shale Grey reflect more heat, which can reduce cooling costs during Sydney summers. Darker tones like Monument and Woodland Grey are popular for modern builds but absorb more heat. BlueScope offers over 20 standard colours in the Colorbond range.",
      ],
      bullets: [
        "Trimdek: versatile, strong, suits most residential applications",
        "Klip-Lok: concealed fix system, ideal for low-pitch roofs",
        "Custom Orb: traditional corrugated look, lightweight and cost-effective",
        "Standing Seam: premium option with clean lines and hidden fasteners",
      ],
    },
    {
      id: "preparation-and-planning",
      heading: "Preparation and Planning Before Installation",
      paragraphs: [
        "Before any sheets go on, your roofing contractor needs to assess the existing structure. For re-roofs, this means removing old tiles or sheeting, inspecting battens and rafters for rot or termite damage, and replacing any compromised timber. Skipping this step is one of the most common causes of problems down the track.",
        "Your contractor should also confirm the roof pitch. Metal roofing has minimum pitch requirements — typically 5 degrees for most profiles, though some concealed-fix systems can go as low as 1 degree. Getting the pitch wrong can lead to water pooling and leaks.",
      ],
      bullets: [
        "Remove existing roofing material and inspect the structure underneath",
        "Replace any damaged battens, rafters or fascia boards",
        "Install or upgrade sarking (reflective insulation) under the battens",
        "Confirm roof pitch meets manufacturer specifications for the chosen profile",
      ],
    },
    {
      id: "installation-process",
      heading: "The Installation Process Step by Step",
      paragraphs: [
        "Once preparation is complete, the installation follows a logical sequence. Sheets are measured and cut to length on site or pre-ordered to exact specifications. Starting from the eave and working up to the ridge, each sheet is fixed to the battens using colour-matched tek screws or clips depending on the profile.",
        "Flashings are one of the most critical elements. Ridge capping, valley irons, barge flashings and apron flashings all need to be installed correctly to prevent water ingress. Poor flashing work is the number one cause of leaks on otherwise sound metal roofs. A quality contractor will spend significant time getting flashings right.",
        "Finally, gutters and downpipes are installed or reconnected. If you are upgrading from tiles to metal, your existing gutters may need to be repositioned or replaced to match the new roof line.",
      ],
      bullets: [
        "Sheets are laid from eave to ridge with correct overlap",
        "Fasteners are placed in the pan (not the rib) for water tightness",
        "All penetrations like vents and skylights are sealed with proper flashings",
        "Gutters are aligned and connected to downpipes with correct fall",
      ],
    },
    {
      id: "costs-and-timeframes",
      heading: "Costs and Timeframes for Sydney Homes",
      paragraphs: [
        "The cost of a metal roof installation in Sydney depends on roof size, complexity, access and the profile chosen. As a rough guide, a straightforward Colorbond re-roof on a single-storey home with a simple hip or gable design will cost between $15,000 and $30,000. Multi-storey homes, steep pitches and complex roof shapes push costs higher.",
        "Timeframes vary but most residential re-roofs are completed within 2 to 5 working days once materials arrive on site. Weather can cause delays — contractors generally avoid installing metal sheets in wet or very windy conditions for safety and quality reasons.",
      ],
      bullets: [
        "Budget $60-$120 per square metre for supply and installation",
        "Allow 2-5 working days for a standard residential re-roof",
        "Factor in additional costs for sarking, gutter replacement and scaffolding",
        "Get at least three written quotes that itemise materials and labour separately",
      ],
    },
    {
      id: "choosing-a-contractor",
      heading: "How to Choose the Right Roofing Contractor",
      paragraphs: [
        "Not all roofing contractors deliver the same quality of work. In NSW, any roofing work valued over $5,000 requires a licensed contractor. Ask to see their licence number and verify it on the NSW Fair Trading website. Also check that they carry current public liability and workers compensation insurance.",
        "Look for contractors who specialise in metal roofing rather than general builders who do roofing on the side. Specialists understand the nuances of different profiles, correct screw patterns and proper flashing techniques that prevent leaks years down the line.",
      ],
      bullets: [
        "Verify NSW contractor licence and insurance before signing",
        "Ask for references and photos from recent metal roof projects",
        "Ensure the quote includes cleanup, removal of old materials and a written warranty",
        "Choose a contractor who offers a workmanship guarantee of at least 10 years",
      ],
    },
  ],

  testimonial: {
    name: "David R.",
    location: "Baulkham Hills, Sydney",
    quote: "We replaced our old concrete tile roof with Colorbond Surfmist. The team was professional, finished in three days and the house looks completely different. Our energy bills dropped noticeably that first summer too.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Install a Metal Roof?",
    text: "Get a free, no-obligation quote from our experienced metal roofing team. We service all of Sydney and offer workmanship guarantees on every installation.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["colorbond", "metal roofing", "roof installation", "sydney roofing"],
  readingTime: "8 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
