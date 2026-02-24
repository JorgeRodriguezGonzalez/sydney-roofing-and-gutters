import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Looking to Clean Your Roof? Here Is What You Should Remember",
  slug: "looking-to-clean-your-roof-heres-what-you-should-remember",
  path: "/guides/looking-to-clean-your-roof-heres-what-you-should-remember/",
  description: "Essential tips for roof cleaning in Sydney. Learn about safe methods, costs, frequency and what to look for when hiring a professional roof cleaning contractor.",
  keywords: "roof cleaning sydney, clean roof tiles, roof maintenance, pressure washing roof, roof moss removal",
  publishedISO: "2023-08-13",
  modifiedISO: "2026-01-02",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Looking to Clean Your Roof? Here Is What You Should Remember",
    subheadline: "A practical guide to roof cleaning for Sydney homeowners. Understand the right methods, avoid common mistakes and keep your roof looking great for years.",
    bullets: [
      "Learn which roof types need cleaning and how often in Sydney conditions",
      "Understand the difference between soft washing and high-pressure cleaning",
      "Discover what causes roof staining, moss and algae growth in NSW",
      "Find out what a professional roof clean should cost and what to expect",
    ],
  },

  intro: {
    paragraphs: [
      "A clean roof does more than improve curb appeal. Regular cleaning removes organic growth like moss, lichen and algae that trap moisture against roof surfaces and accelerate deterioration. In the Sydney region, high humidity and coastal salt spray create ideal conditions for this growth on tile, metal and asbestos cement roofs.",
      "However, roof cleaning done incorrectly can cause serious damage. High-pressure washing can dislodge tiles, strip protective coatings from Colorbond and force water under flashings. Understanding the right approach for your roof type prevents costly repairs and potential safety hazards.",
      "This guide covers everything Sydney homeowners need to know before cleaning a roof or hiring a contractor. The advice below is based on current Australian building standards and years of practical experience across Sydney suburbs.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Professional roof cleaning in Sydney typically costs between $400 and $1,200 depending on roof size and condition",
      "Tile roofs benefit from cleaning every 2 to 3 years in high-humidity coastal areas, less frequently inland",
      "Soft washing with low-pressure chemical treatment is safer and more effective than high-pressure water alone",
      "Never attempt to clean your own roof without proper safety equipment and fall protection systems",
    ],
  },

  sections: [
    {
      id: "why-roofs-need-cleaning",
      heading: "Why Sydney Roofs Need Regular Cleaning",
      paragraphs: [
        "The climate in Sydney creates perfect conditions for biological growth on roofs. Moisture from morning dew, humidity from coastal air and shade from trees allow moss, lichen and algae to establish quickly on tile and cement surfaces. Once growth takes hold, it spreads rapidly and holds water against the roof surface.",
        "This constant moisture accelerates wear on terracotta and concrete tiles, causes premature fading on painted metal roofs and creates slip hazards during maintenance work. Dark stains from algae also reduce the reflective properties of lighter coloured roofs, increasing heat absorption and potentially raising cooling costs during summer.",
      ],
      bullets: [
        "Moss and lichen trap moisture that accelerates tile degradation and cracking",
        "Algae growth creates dark streaks that absorb more solar heat",
        "Organic matter blocks valleys and gutters, increasing overflow risk during heavy rain",
        "Regular cleaning extends roof lifespan by removing damaging biological growth early",
      ],
    },
    {
      id: "cleaning-methods-explained",
      heading: "Cleaning Methods: Soft Wash vs High Pressure",
      paragraphs: [
        "High-pressure cleaning was the standard method for decades, but it causes significant problems. Water blasted at 3,000 PSI or higher can strip glaze from terracotta tiles, remove protective granules from concrete tiles and force water up under ridge capping and into roof cavities. Many older tile roofs have been damaged beyond repair by overzealous pressure washing.",
        "Soft washing uses low-pressure chemical treatment combined with gentle rinsing to kill organic growth at the root. A biodegradable cleaning solution is applied to the roof surface and allowed to dwell for 15 to 30 minutes, breaking down moss, algae and lichen. The surface is then rinsed with low-pressure water. This method is safer for all roof types and delivers longer-lasting results.",
      ],
      bullets: [
        "High-pressure washing can dislodge tiles, damage sealants and force water into roof cavities",
        "Soft washing kills organic growth at the root without damaging roof surfaces",
        "Chemical treatments typically include sodium hypochlorite or biodegradable alternatives approved for roof use",
        "Results from soft washing last 2 to 4 years compared to 6 to 12 months for pressure washing alone",
      ],
    },
    {
      id: "what-roof-types-can-be-cleaned",
      heading: "Which Roof Types Can Be Safely Cleaned",
      paragraphs: [
        "Terracotta and concrete tile roofs are the most common candidates for cleaning in Sydney. Both materials develop moss and algae growth readily, especially on south-facing slopes that receive less direct sunlight. Tiles can be soft washed safely, though extra care is needed on older terracotta where the glaze may have degraded.",
        "Metal roofs including Colorbond and Zincalume can also be cleaned, though they rarely need it. If your metal roof has developed mould or algae staining in shaded areas, a gentle soft wash is safe. Never use high-pressure water on metal roofing as it can damage the paint finish. Asbestos cement roofs should never be pressure washed or scraped — if cleaning is required, only licensed asbestos professionals should do the work.",
      ],
      bullets: [
        "Tile roofs (terracotta and concrete) are ideal candidates for regular soft washing",
        "Metal roofs rarely need cleaning but can be soft washed if mould or algae appear",
        "Slate roofs require specialist cleaning methods and should only be handled by experienced contractors",
        "Asbestos cement roofs must be treated by licensed asbestos removalists, not general roof cleaners",
      ],
    },
    {
      id: "safety-considerations",
      heading: "Safety Considerations for Roof Cleaning",
      paragraphs: [
        "Falls from roofs are one of the leading causes of serious injury in residential property maintenance. Working on a wet, algae-covered tile roof without proper fall protection equipment is extremely dangerous. NSW SafeWork requires that anyone working at height above 2 metres uses appropriate fall arrest systems or edge protection.",
        "Professional roof cleaners carry public liability insurance and are trained in working safely at heights. They use harnesses, anchor points and scaffolding where appropriate. Attempting to save money by cleaning your own roof puts you at risk of serious injury or death — it is simply not worth it.",
      ],
      bullets: [
        "Falls from roofs cause over 30 deaths per year in Australia, many during DIY maintenance",
        "Professional contractors use fall arrest harnesses anchored to approved roof points",
        "Walking on wet tiles coated with algae is extremely slippery even with non-slip footwear",
        "Insurance may not cover injuries sustained during unsafe DIY roof work",
      ],
    },
    {
      id: "costs-and-frequency",
      heading: "How Much Does Roof Cleaning Cost in Sydney",
      paragraphs: [
        "The cost to clean a roof in Sydney depends primarily on roof size, pitch and level of contamination. For a standard single-storey home with a tile roof of around 150 square metres, expect to pay between $400 and $800 for a professional soft wash clean. Two-storey homes and complex roof shapes push costs into the $800 to $1,200 range.",
        "How often you need to clean depends on your location and surroundings. Homes in coastal suburbs or surrounded by trees typically need cleaning every 2 to 3 years. Inland properties with good sun exposure may only need attention every 5 years or more. A good rule of thumb is to have your roof inspected annually and cleaned when you notice visible moss or dark algae staining.",
      ],
      bullets: [
        "Single-storey tile roof cleaning typically costs $400 to $800 for an average Sydney home",
        "Two-storey or complex roofs range from $800 to $1,200 depending on access and condition",
        "Coastal homes and properties with overhanging trees need cleaning every 2 to 3 years",
        "Metal roofs rarely need cleaning unless located in heavily shaded or high-humidity areas",
      ],
    },
    {
      id: "choosing-a-contractor",
      heading: "What to Look for When Hiring a Roof Cleaner",
      paragraphs: [
        "Not all roof cleaning contractors deliver safe, effective work. Start by verifying they hold current public liability insurance of at least $10 million — ask to see a certificate of currency. Check they understand the difference between soft washing and high-pressure cleaning, and confirm they will use low-pressure methods on tile roofs.",
        "Ask about their safety procedures. Do they use fall protection equipment? Will they protect garden beds and plants from chemical runoff? Will they inspect for damaged or loose tiles before starting work? A quality contractor will answer these questions confidently and provide written details in their quote.",
      ],
      bullets: [
        "Verify current public liability insurance before signing any agreement",
        "Ask whether they use soft washing or high-pressure methods — avoid high-pressure for tile roofs",
        "Request photos from recent jobs showing before and after results",
        "Ensure the quote includes gutter cleaning, debris removal and protection for landscaping",
      ],
    },
  ],

  testimonial: {
    name: "Emma P.",
    location: "Cronulla, Sydney",
    quote: "Our tile roof was covered in black algae stains after years of neglect. The soft wash treatment brought it back to looking almost new. The team was careful around our garden and left no mess behind. Very happy with the result.",
    rating: 5,
  },

  cta: {
    heading: "Need Your Roof Cleaned?",
    text: "Get a free quote for professional roof cleaning from Sydney Roofing and Gutters. We use safe, low-pressure soft washing methods that deliver lasting results without damaging your roof.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof cleaning", "roof maintenance", "tile roof", "soft washing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
