import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "3 Ways to Clean a Tile Roof",
  slug: "3-ways-to-clean-a-tile-roof",
  path: "/guides/3-ways-to-clean-a-tile-roof/",
  description: "Discover three effective methods to clean tile roofs in Sydney. Learn about pressure washing, chemical treatments and soft washing to restore your roof safely.",
  keywords: "tile roof cleaning sydney, roof cleaning methods, terracotta tile maintenance, concrete tile cleaning, roof restoration",
  publishedISO: "2020-11-13",
  modifiedISO: "2026-01-23",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "3 Ways to Clean a Tile Roof",
    subheadline: "Proven methods for cleaning terracotta and concrete tile roofs in Sydney, from pressure washing to chemical treatments and soft wash techniques.",
    bullets: [
      "Compare three professional roof cleaning techniques used across Sydney",
      "Understand the risks and benefits of high-pressure versus low-pressure methods",
      "Learn when to use chemical treatments and which products work best",
      "Discover how to prevent moss and algae regrowth on tile roofs",
    ],
  },

  intro: {
    paragraphs: [
      "Tile roofs in Sydney accumulate dirt, moss, lichen and algae over time due to humid coastal conditions and regular rainfall. Left untreated, these organic growths can hold moisture against tiles, accelerate deterioration and reduce the lifespan of your roof. Regular cleaning helps maintain the appearance and structural integrity of both terracotta and concrete tiles.",
      "There are three main methods professionals use to clean tile roofs: high-pressure washing, chemical treatment followed by low-pressure rinsing, and soft washing with biodegradable solutions. Each approach has advantages and drawbacks depending on tile condition, level of contamination and the surrounding environment.",
      "This guide explains how each method works, when to use them and what to watch out for. Whether you are planning to clean your roof yourself or hire a professional, understanding these techniques will help you make the right choice for your home.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Professional tile roof cleaning in Sydney typically costs between $1,200 and $3,500 depending on roof size and method used",
      "High-pressure washing is fast but can damage older terracotta tiles or dislodge pointing if not done correctly",
      "Chemical treatments kill moss and algae at the root but require careful product selection to avoid runoff issues",
      "Soft washing is the gentlest method and works well for delicate heritage tiles or roofs with existing damage",
    ],
  },

  sections: [
    {
      id: "method-one-high-pressure-washing",
      heading: "Method One: High Pressure Washing",
      paragraphs: [
        "High-pressure washing uses a water jet at 3000 to 4000 PSI to blast away dirt, moss and organic buildup from tile surfaces. This method delivers fast results and can strip years of accumulated grime in a single pass. Most contractors in Sydney use this technique for concrete tiles in good condition because it requires minimal chemical use and produces immediate visible improvement.",
        "The main risk with high-pressure washing is tile damage. Older terracotta tiles can crack or chip under excessive pressure, and mortar pointing between tiles can be dislodged if the operator is not careful. Water can also be forced under tiles into the roof cavity if the nozzle is angled incorrectly, potentially causing leaks or ceiling damage.",
      ],
      bullets: [
        "Works best on modern concrete tiles in good structural condition",
        "Requires experienced operator to avoid damaging tiles or pointing",
        "Uses large volumes of water which must be managed to prevent erosion around downpipes",
        "Results are immediate but moss and algae may return within 12 to 18 months without treatment",
      ],
    },
    {
      id: "method-two-chemical-treatment-and-rinse",
      heading: "Method Two: Chemical Treatment and Low Pressure Rinse",
      paragraphs: [
        "This two-stage process involves applying a biocide or algaecide to kill moss, lichen and algae, then returning after several days to rinse away the dead organic matter with low-pressure water. Common products used include sodium hypochlorite, copper sulfate and proprietary roof cleaning solutions that comply with Australian environmental standards.",
        "Chemical treatments penetrate deeper than washing alone, killing growth at the root level and slowing regrowth. The dwell time between application and rinse is critical — most products need 3 to 7 days to work effectively. During this period the roof may look worse as the dying organisms turn brown or black before they are rinsed away.",
      ],
      bullets: [
        "Effective for heavy moss and lichen infestations that resist pressure washing alone",
        "Requires compliance with NSW environmental protection regulations for chemical runoff",
        "Best results when combined with gutter guards to prevent debris buildup after treatment",
        "Expect to pay 20 to 40 percent more than pressure washing alone due to multiple site visits",
      ],
    },
    {
      id: "method-three-soft-washing",
      heading: "Method Three: Soft Washing with Biodegradable Solutions",
      paragraphs: [
        "Soft washing uses low-pressure water combined with biodegradable cleaning agents that break down organic growth without mechanical force. The cleaning solution is applied with a pump sprayer or low-pressure hose, left to dwell for 15 to 30 minutes, then rinsed with gentle water flow. This method is gaining popularity in Sydney for heritage homes and properties near sensitive waterways.",
        "The key advantage of soft washing is safety. There is minimal risk of tile damage, dislodged pointing or water intrusion because pressure stays below 500 PSI throughout the process. The trade-off is time — soft washing takes longer than high-pressure methods and may require a second treatment for stubborn stains or thick moss layers.",
      ],
      bullets: [
        "Ideal for fragile heritage terracotta tiles that cannot withstand high pressure",
        "Uses biodegradable surfactants and low-toxicity biocides safe for plants and waterways",
        "Takes 4 to 6 hours for an average residential roof including dwell and rinse time",
        "Results improve over 2 to 4 weeks as dead organic matter weathers away naturally",
      ],
    },
    {
      id: "comparing-costs-and-results",
      heading: "Comparing Costs and Long-Term Results",
      paragraphs: [
        "High-pressure washing is the most affordable option, typically costing $1,200 to $2,000 for a standard single-storey Sydney home. Chemical treatment adds $500 to $1,000 to that base cost depending on the products used and the number of site visits required. Soft washing sits in the middle at $1,800 to $2,800 because it requires specialised equipment and more labour time.",
        "Long-term results depend on aftercare and preventative treatments. All three methods remove existing contamination but none offer permanent protection. Most professionals recommend applying a biocide sealant after cleaning to slow regrowth. Expect to reclean or retreat your roof every 3 to 5 years in Sydney conditions, or more frequently in heavily shaded areas with poor airflow.",
      ],
      bullets: [
        "High-pressure wash: $1,200-$2,000, fastest results, higher risk on older tiles",
        "Chemical treatment: $1,700-$3,000, kills growth at root level, requires careful runoff management",
        "Soft wash: $1,800-$2,800, safest for delicate tiles, slower visible results",
        "Add $300-$600 for post-clean biocide application to extend time between cleanings",
      ],
    },
    {
      id: "choosing-the-right-method",
      heading: "How to Choose the Right Method for Your Roof",
      paragraphs: [
        "The best cleaning method depends on tile type, condition and the level of contamination. For modern concrete tiles with light to moderate dirt buildup, high-pressure washing delivers great results quickly. If you have heavy moss or lichen that has been growing for years, chemical treatment is more effective because it kills the roots and prevents rapid regrowth.",
        "For heritage terracotta tiles, roofs with existing cracks or loose tiles, or properties near sensitive environmental areas, soft washing is the safest choice. Always hire a licensed roofing contractor who carries public liability insurance and understands NSW building and environmental regulations. A good contractor will inspect your roof before recommending a method and will provide a written quote that includes post-clean biocide treatment.",
      ],
      bullets: [
        "Inspect tiles for cracks, loose pieces or damaged pointing before choosing a method",
        "Consider environmental factors like proximity to gardens, water tanks or natural waterways",
        "Ask contractors about their insurance coverage and which Australian Standard products they use",
        "Request before and after photos from recent projects with similar tile types to yours",
      ],
    },
  ],

  testimonial: {
    name: "Michelle P.",
    location: "Epping, Sydney",
    quote: "Our terracotta roof was covered in moss after ten years of neglect. The team used a soft wash method and the tiles look like new without any damage. They also treated the roof to prevent regrowth which has worked perfectly for over two years now.",
    rating: 5,
  },

  cta: {
    heading: "Need Your Tile Roof Cleaned?",
    text: "Get a free assessment and quote from our experienced roof cleaning team. We use the right method for your tile type and provide preventative treatments to keep your roof looking great for years.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["tile roof", "roof cleaning", "maintenance", "sydney"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
