import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How Much Rain Can I Collect from My Roof? Rainwater Harvesting",
  slug: "how-much-rain-can-i-collect-from-my-roof-rainwater-harvesting",
  path: "/guides/how-much-rain-can-i-collect-from-my-roof-rainwater-harvesting/",
  description: "Calculate how much rainwater you can harvest from your Sydney roof. Learn about tank sizing, collection efficiency, regulations and savings from rainwater collection systems.",
  keywords: "rainwater harvesting sydney, roof water collection, rainwater tank sizing, water collection calculation, rainwater systems nsw",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How Much Rain Can I Collect from My Roof? Rainwater Harvesting",
    subheadline: "Discover how to calculate rainwater collection potential for your Sydney home and make informed decisions about tank sizing and system design.",
    bullets: [
      "Calculate collection potential using roof area and Sydney rainfall data",
      "Understand the factors that affect actual water yield from your roof",
      "Learn about NSW regulations for rainwater harvesting systems",
      "Determine optimal tank size based on household usage patterns",
    ],
  },

  intro: {
    paragraphs: [
      "Rainwater harvesting has become increasingly popular across Sydney as homeowners look to reduce mains water consumption and lower utility bills. With average annual rainfall exceeding 1,200 millimetres, the potential for roof-based water collection is significant even in urban areas.",
      "The amount of water you can harvest depends on three key factors: the effective catchment area of your roof, the annual rainfall in your suburb, and the efficiency of your collection system. Most Sydney homes can collect between 40,000 and 120,000 litres per year, depending on roof size and local rainfall patterns.",
      "Understanding your collection potential helps you choose the right tank size, estimate water savings and assess whether a rainwater system makes financial sense for your property. This guide provides the formulas, local data and practical considerations you need to calculate accurately.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Basic formula: Collection (litres/year) = Roof area (m²) × Annual rainfall (mm) × 0.8 (efficiency factor)",
      "Sydney average rainfall ranges from 800mm in western suburbs to 1,400mm in eastern and northern areas",
      "A 150 square metre roof in moderate rainfall areas can collect approximately 100,000 litres per year",
      "NSW guidelines recommend rainwater tanks for toilet flushing and outdoor use under BASIX requirements for new builds",
    ],
  },

  sections: [
    {
      id: "calculating-roof-catchment-area",
      heading: "Calculating Your Roof Catchment Area",
      paragraphs: [
        "The first step is determining your effective roof catchment area in square metres. This is not the floor area of your home but the horizontal projection of all roof surfaces that drain into your gutters. For a simple rectangular home with a gable or hip roof, the catchment area is roughly equal to the building footprint.",
        "For more complex roof designs with multiple levels, valleys and dormers, you need to measure each roof plane separately and add them together. Online mapping tools like NearMap or Google Earth can help you measure roof dimensions from above. Alternatively, your local council building plans will show exact roof dimensions.",
      ],
      bullets: [
        "Measure the horizontal projection of roof surfaces, not the sloped area",
        "Include all roof planes that drain to connected gutters and downpipes",
        "Exclude areas that drain separately or are not connected to your tank",
        "A typical Sydney single-storey home has a catchment area between 100 and 200 square metres",
      ],
    },
    {
      id: "sydney-rainfall-data",
      heading: "Understanding Sydney Rainfall Patterns",
      paragraphs: [
        "Sydney experiences significant rainfall variation across different suburbs. Coastal and northern areas like Manly, Hornsby and Pittwater receive higher rainfall, often exceeding 1,300mm annually. Western suburbs such as Penrith and Campbelltown typically see between 800mm and 1,000mm per year. The CBD and inner suburbs average around 1,200mm.",
        "Rainfall is not evenly distributed throughout the year. Summer and early autumn bring more rain, while late winter and spring tend to be drier. This seasonal variation affects how you size your tank. A system designed only for average rainfall may run dry during extended dry periods if tank capacity is too small.",
      ],
      bullets: [
        "Check Bureau of Meteorology historical data for your specific suburb",
        "Coastal suburbs: 1,200-1,400mm average annual rainfall",
        "Western suburbs: 800-1,000mm average annual rainfall",
        "Allow for variability: annual totals can range from 600mm in drought years to 2,000mm in wet years",
      ],
    },
    {
      id: "efficiency-and-losses",
      heading: "Collection Efficiency and System Losses",
      paragraphs: [
        "No rainwater collection system captures 100 percent of rainfall that lands on your roof. Water is lost through evaporation, first-flush diverters, overflow during heavy rain and losses in gutters and downpipes. Industry standard assumes an efficiency factor of around 0.8, meaning you capture roughly 80 percent of the theoretical maximum.",
        "The type of roof surface also affects collection efficiency. Colorbond and other metal roofs provide the best water quality and highest collection efficiency. Tiled roofs work well but may have slightly higher losses due to surface absorption. Older roofs with moss, lichen or debris buildup reduce both efficiency and water quality significantly.",
      ],
      bullets: [
        "Use 0.8 as a standard efficiency factor for well-maintained systems",
        "Metal roofs like Colorbond offer the cleanest water and best collection rates",
        "First-flush diverters remove initial dirty water but reduce total yield by 2-5 percent",
        "Regular gutter cleaning and roof maintenance improve both efficiency and water quality",
      ],
    },
    {
      id: "tank-sizing-and-usage",
      heading: "Choosing the Right Tank Size for Your Needs",
      paragraphs: [
        "Tank size depends on how you plan to use the collected water and how much you want to store between rainfall events. For toilet flushing and laundry, an average Sydney household uses around 100 litres per person per day. Garden watering varies widely depending on season and lawn size but typically peaks at 500-1,000 litres per week in summer.",
        "A common approach is to size your tank to store roughly two to three weeks of demand during the dry season. For a family of four using rainwater for toilets and gardens, this works out to around 5,000 to 10,000 litres. Larger tanks up to 20,000 litres provide greater resilience during droughts but cost significantly more and require more space.",
      ],
      bullets: [
        "Budget 50-70 litres per person per day for toilet and laundry use",
        "5,000-10,000 litre tanks suit most urban Sydney homes with moderate usage",
        "Larger tanks (15,000-20,000 litres) are worthwhile for large gardens or rural properties",
        "BASIX for new homes in NSW often mandates minimum tank sizes based on dwelling size and water targets",
      ],
    },
    {
      id: "regulations-and-compliance",
      heading: "NSW Regulations for Rainwater Harvesting Systems",
      paragraphs: [
        "Rainwater tanks in NSW do not generally require council approval for tanks under 10,000 litres that are used for outdoor purposes only. However, if you plan to connect rainwater to internal plumbing for toilets or laundry, you must comply with AS/NZS 3500 plumbing standards and may need a licensed plumber to certify the installation.",
        "For new builds and major renovations, BASIX (Building Sustainability Index) sets mandatory water efficiency targets. In many cases, installing a rainwater tank connected to toilets is the most cost-effective way to meet these targets. Retrofitting tanks to existing homes is less regulated but still requires backflow prevention and proper plumbing isolation.",
      ],
      bullets: [
        "Tanks under 10,000 litres for outdoor use typically do not need council approval",
        "Connections to internal plumbing require a licensed plumber and must meet AS/NZS 3500",
        "BASIX compliance for new builds often requires rainwater systems for toilets or laundry",
        "All systems must include backflow prevention to protect mains water supply",
      ],
    },
    {
      id: "calculating-savings",
      heading: "Calculating Water and Cost Savings",
      paragraphs: [
        "To estimate savings, multiply your annual collection volume by the cost of mains water in your area. Sydney Water charges around $2.35 per kilolitre (1,000 litres) for usage beyond the included allowance. If you collect 80,000 litres per year, that represents a saving of approximately $188 annually on water usage charges, plus a small reduction in sewage charges for water not returned to the sewer.",
        "The payback period for a rainwater system depends on installation costs, which typically range from $3,000 to $8,000 depending on tank size and plumbing complexity. For a mid-range system costing $5,000, payback takes roughly 20-30 years on water savings alone. However, many homeowners value the water security, garden health benefits and reduced reliance on mains supply beyond pure financial return.",
      ],
      bullets: [
        "Sydney mains water costs around $2.35 per kilolitre above the base allowance",
        "An 80,000 litre per year collection saves roughly $188 in water charges annually",
        "Typical system costs range from $3,000 to $8,000 including tank, plumbing and installation",
        "Financial payback is long, but water security and garden benefits add significant non-financial value",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Epping, Sydney",
    quote: "We installed a 10,000 litre tank connected to our toilets and garden. During the last dry summer we barely used any mains water outside. The peace of mind during water restrictions alone makes it worthwhile.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Explore Rainwater Harvesting?",
    text: "Get expert advice on rainwater system design, tank sizing and installation. Our team can assess your roof and provide a tailored solution that maximises collection and savings.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["rainwater harvesting", "water tanks", "roof collection", "water savings"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
