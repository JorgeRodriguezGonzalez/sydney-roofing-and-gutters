import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "The Ultimate Guide to Roof Bedding and Pointing",
  slug: "the-ultimate-guide-to-roof-bedding-and-pointing",
  path: "/guides/the-ultimate-guide-to-roof-bedding-and-pointing/",
  description: "Complete guide to roof bedding and pointing for Sydney homes. Learn when to rebedding, costs, materials, and how to choose the right contractor for your tile roof maintenance.",
  keywords: "roof bedding sydney, roof pointing, rebedding tiles, roof maintenance sydney, tile roof repair",
  publishedISO: "2024-04-21",
  modifiedISO: "2026-01-01",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "The Ultimate Guide to Roof Bedding and Pointing",
    subheadline: "Essential information for Sydney homeowners on maintaining ridge caps and tile roofs through proper bedding and pointing techniques.",
    bullets: [
      "Understand what bedding and pointing actually are and why they matter",
      "Learn when your tile roof needs rebedding or repointing work",
      "Compare flexible vs cement-based bedding materials for coastal areas",
      "Get accurate cost estimates for rebedding and pointing in Sydney",
    ],
  },

  intro: {
    paragraphs: [
      "Roof bedding and pointing are two critical but often misunderstood aspects of tile roof maintenance. Bedding is the mortar that holds ridge and hip capping tiles in place, while pointing is the exterior layer of mortar that seals and protects the bedding underneath. Together, they keep your roof weatherproof and structurally sound.",
      "In Sydney and across New South Wales, older tile roofs often suffer from cracked or deteriorated bedding and pointing due to thermal expansion, UV exposure and storm damage. When these systems fail, wind can lift ridge caps and water can penetrate into the roof cavity, leading to expensive damage to timber and ceilings.",
      "This guide explains everything you need to know about bedding and pointing materials, when to rebedding, what the work involves and how to choose a qualified roofing contractor who will do the job right.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Rebedding and repointing ridge caps typically costs between $55 and $95 per metre in Sydney",
      "Flexible polymer bedding has largely replaced cement mortar for its superior movement tolerance",
      "Most rebedding work on a standard home takes 1 to 2 days depending on roof size",
      "All bedding work in NSW must comply with AS 2050 and be carried out by licensed roofing contractors",
    ],
  },

  sections: [
    {
      id: "what-are-bedding-and-pointing",
      heading: "What Are Bedding and Pointing?",
      paragraphs: [
        "Bedding is the base mortar layer that sits beneath ridge caps and hip tiles, anchoring them to the roof structure. It fills the gaps and provides a solid foundation. Pointing is the external layer of mortar that covers and protects the bedding from weather, water and UV damage.",
        "The two work together as a system. Without proper bedding, ridge caps can shift or lift in strong winds. Without pointing, the bedding is exposed to the elements and will deteriorate much faster. Both need to be installed correctly to create a durable, watertight seal along the ridge line.",
      ],
      bullets: [
        "Bedding: structural mortar that holds ridge caps and hip tiles in place",
        "Pointing: protective exterior layer that seals and weatherproofs the bedding",
        "Ridge caps: the curved or angled tiles that run along the peak of the roof",
        "Flexible bedding systems allow for thermal movement without cracking",
      ],
    },
    {
      id: "signs-your-roof-needs-rebedding",
      heading: "Signs Your Roof Needs Rebedding or Repointing",
      paragraphs: [
        "The most obvious sign is cracked or missing mortar along the ridge line. Walk around your property and look up at the ridge caps. If you can see gaps, cracks or sections where the mortar has fallen away completely, your roof needs attention. Loose or shifted ridge caps are another red flag.",
        "Water stains on ceilings near the ridge line often indicate that water is entering through failed bedding. You might also notice moss or lichen growing in the gaps where moisture is sitting. In severe cases, ridge caps may rattle or move visibly during strong winds, which is an urgent safety issue.",
      ],
      bullets: [
        "Visible cracks or gaps in the mortar along ridge caps",
        "Ridge caps that appear loose, shifted or out of alignment",
        "Water stains or damp patches on ceilings near the roof peak",
        "Moss, lichen or vegetation growing in mortar joints",
      ],
    },
    {
      id: "flexible-vs-cement-bedding",
      heading: "Flexible Bedding vs Traditional Cement Mortar",
      paragraphs: [
        "Traditional cement-based bedding was the standard for decades, but it has a major weakness: it is rigid and cracks when the roof expands and contracts with temperature changes. In Sydney, where summer roof temperatures can exceed 70 degrees Celsius, this thermal movement is significant.",
        "Modern flexible polymer bedding systems are now the industry standard. These products remain pliable over time, moving with the roof structure without cracking. They also bond better to tiles and resist water penetration more effectively than cement. Most reputable contractors in NSW now use flexible bedding exclusively.",
      ],
      bullets: [
        "Cement mortar: traditional, rigid, prone to cracking from thermal movement",
        "Flexible polymer bedding: superior movement tolerance, longer lifespan",
        "Coastal areas benefit most from flexible systems due to salt exposure",
        "Flexible bedding typically comes with 15-year manufacturer warranties",
      ],
    },
    {
      id: "the-rebedding-process",
      heading: "The Rebedding and Repointing Process",
      paragraphs: [
        "The work begins with carefully removing all existing ridge and hip cap tiles and stripping away the old bedding and pointing material. The contractor inspects the underlying roof structure, checking for damaged tiles, broken battens or sarking issues that need addressing before rebedding can proceed.",
        "Once the surface is clean and dry, flexible bedding compound is applied generously along the ridge line. Ridge caps are then repositioned and pressed firmly into the bedding, ensuring they sit level and are properly aligned. After the bedding has cured, pointing mortar is applied over the top to seal and finish the job.",
      ],
      bullets: [
        "All old bedding and pointing is removed and the ridge line cleaned",
        "Underlying tiles and structure are inspected and repaired if needed",
        "Flexible bedding is applied and ridge caps are repositioned and aligned",
        "Pointing mortar is applied once the bedding has set, typically after 24 hours",
      ],
    },
    {
      id: "costs-and-timeframes",
      heading: "Costs and Timeframes for Sydney Homes",
      paragraphs: [
        "Rebedding and repointing costs are typically quoted per linear metre of ridge line. In Sydney, expect to pay between $55 and $95 per metre depending on roof access, height and the products used. A typical single-storey home with 15 to 20 metres of ridge will cost between $1,200 and $2,500 for complete rebedding and repointing.",
        "The work itself usually takes one to two days for a standard residential roof. Day one involves removal of old materials and installation of the new bedding. Day two is for pointing and final cleanup. Complex roofs with multiple hips, valleys and difficult access can take longer.",
      ],
      bullets: [
        "Budget $55 to $95 per metre for rebedding and repointing",
        "Most residential roofs have 15 to 30 metres of ridge and hip line",
        "Allow 1-2 working days for completion on standard homes",
        "Get written quotes that specify the bedding products being used",
      ],
    },
    {
      id: "choosing-a-contractor",
      heading: "How to Choose the Right Contractor for Rebedding Work",
      paragraphs: [
        "Always verify that your contractor holds a current NSW roofing licence. Unlicensed operators are common in the rebedding space and their work often fails within months. Check the licence number on the NSW Fair Trading website and confirm they carry public liability and workers compensation insurance.",
        "Ask specifically what bedding product they plan to use. If they are still using cement mortar, walk away. Reputable contractors use flexible polymer systems and should be able to name the brand and provide product data sheets. A written warranty of at least 10 years on workmanship is standard for quality rebedding work.",
      ],
      bullets: [
        "Verify NSW contractor licence and insurance before signing anything",
        "Ensure the quote specifies flexible polymer bedding, not cement mortar",
        "Ask for photos and references from recent rebedding projects",
        "Get a written warranty covering both materials and workmanship for 10+ years",
      ],
    },
  ],

  testimonial: {
    name: "Michelle P.",
    location: "Castle Hill, Sydney",
    quote: "Our ridge caps had cracks everywhere and we were getting water stains on the ceiling. The team rebedded the whole roof with flexible bedding in two days and the difference is amazing. No more leaks and the ridge line looks brand new.",
    rating: 5,
  },

  cta: {
    heading: "Need Rebedding or Repointing?",
    text: "Get a free inspection and written quote from our licensed roofing team. We use only flexible polymer bedding systems and back all work with a comprehensive warranty.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof bedding", "roof pointing", "tile roof", "ridge caps"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
