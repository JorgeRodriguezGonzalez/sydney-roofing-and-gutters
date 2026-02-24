import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How Long Does a Roof Last?",
  slug: "how-long-does-a-roof-last",
  path: "/guides/how-long-does-a-roof-last/",
  description: "Discover how long different roofing materials last in Sydney conditions. Learn about Colorbond, tile and other roof lifespans, plus maintenance tips to maximise durability.",
  keywords: "roof lifespan sydney, how long does a roof last, colorbond roof life, tile roof lifespan, roof replacement",
  publishedISO: "2022-02-11",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How Long Does a Roof Last?",
    subheadline: "Understand the lifespan of different roofing materials in Sydney conditions and learn how to get the most years from your roof investment.",
    bullets: [
      "Compare lifespans of Colorbond, terracotta, concrete and slate roofing",
      "Discover how Sydney climate impacts roof durability and performance",
      "Learn maintenance practices that extend roof life by decades",
      "Recognise the warning signs that indicate roof replacement is needed",
    ],
  },

  intro: {
    paragraphs: [
      "The lifespan of a roof depends on the material used, installation quality, local climate and ongoing maintenance. In Sydney, where homes face intense summer sun, coastal salt spray and occasional hail storms, choosing the right material and caring for it properly makes a significant difference to how long your roof will last.",
      "Some roofing materials can last over 50 years with minimal maintenance, while others require replacement after 15 to 20 years. Understanding these differences helps homeowners budget for future costs and make informed decisions when building or replacing a roof.",
      "This guide breaks down the typical lifespan of common roofing materials used in Sydney, explains the factors that shorten or extend roof life, and provides practical advice on maintenance and replacement timing.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: roof lifespan by material",
    bullets: [
      "Colorbond steel roofing: 40 to 60 years with proper coating and maintenance",
      "Terracotta tiles: 50 to 100 years, though fixings and sarking may need replacing sooner",
      "Concrete tiles: 30 to 50 years depending on quality and exposure to salt and moisture",
      "Asphalt shingles: 15 to 25 years in Australian conditions, less common in Sydney",
    ],
  },

  sections: [
    {
      id: "colorbond-and-metal-roofing-lifespan",
      heading: "Colorbond and Metal Roofing Lifespan",
      paragraphs: [
        "Colorbond steel roofing, manufactured by BlueScope with a protective paint coating, is designed to last 40 to 60 years in most Australian environments. The Activar coating system resists corrosion, fading and chalking, making it ideal for the harsh Sydney climate. Coastal homes within 1 kilometre of the ocean should opt for Colorbond Coastal or Colorbond Ultra, which have enhanced corrosion resistance.",
        "Zincalume and other bare metal roofing options typically last 25 to 40 years. Without a painted finish, these materials are more vulnerable to surface rust, particularly in coastal and industrial areas. Regular inspections and touch-up coatings can extend their life significantly.",
      ],
      bullets: [
        "Colorbond roofs in standard environments: 50-60 years expected lifespan",
        "Colorbond Coastal near the ocean: 40-50 years with proper maintenance",
        "Zincalume and unpainted metal: 25-40 years depending on exposure",
        "Fasteners and flashings may need replacement after 25-30 years",
      ],
    },
    {
      id: "tile-roofing-lifespan",
      heading: "Terracotta and Concrete Tile Lifespan",
      paragraphs: [
        "Terracotta tiles are one of the longest-lasting roofing materials available. High-quality terracotta can easily exceed 100 years, and many Sydney homes built in the early 1900s still have their original terracotta tiles in place. The clay is fired at extremely high temperatures, making it resistant to UV damage, moisture and temperature fluctuations.",
        "Concrete tiles have a shorter lifespan than terracotta, typically 30 to 50 years. Lower-quality concrete tiles can deteriorate faster due to moisture absorption, which causes cracking during freeze-thaw cycles or delamination of the surface coating. In coastal Sydney suburbs, salt exposure accelerates concrete tile degradation.",
      ],
      bullets: [
        "Terracotta tiles: 50 to 100+ years, depending on quality and installation",
        "Concrete tiles: 30 to 50 years, with earlier failure in coastal zones",
        "Tile fixings and bedding mortar require inspection every 15-20 years",
        "Underlayment and sarking typically need replacement after 30-40 years",
      ],
    },
    {
      id: "factors-that-reduce-roof-life",
      heading: "Factors That Shorten Roof Lifespan",
      paragraphs: [
        "The Sydney environment poses specific challenges. Intense UV radiation degrades roofing materials over time, causing fading, cracking and brittleness. Coastal properties face additional stress from salt-laden air, which accelerates corrosion on metal roofs and degrades concrete tiles and fixings.",
        "Poor installation is one of the biggest causes of premature roof failure. Incorrect fastener placement, inadequate flashing, insufficient ventilation or missing sarking can all lead to leaks, rust and structural damage within years of installation. A roof installed to Australian Standard AS 1562.1 will always outlast one that cuts corners.",
      ],
      bullets: [
        "Coastal salt spray accelerates corrosion and tile degradation",
        "Lack of roof ventilation traps heat and moisture, causing premature wear",
        "Overhanging tree branches cause abrasion and trap moisture on the roof surface",
        "Blocked gutters lead to water pooling, which damages tiles and rusts metal",
      ],
    },
    {
      id: "maintenance-to-extend-roof-life",
      heading: "Maintenance Practices That Extend Roof Life",
      paragraphs: [
        "Regular maintenance can add decades to roof lifespan. Cleaning gutters twice a year prevents water overflow and pooling, which are major causes of rust and water damage. Removing debris like leaves and moss from roof surfaces prevents moisture retention and abrasion during windy conditions.",
        "Annual inspections by a licensed roofing contractor catch small problems before they become expensive failures. Inspections should check for cracked or slipped tiles, rusted fasteners, damaged flashings, blocked valleys and signs of water ingress. Repairing minor issues early often costs a fraction of a full re-roof.",
      ],
      bullets: [
        "Clean gutters and downpipes at least twice per year",
        "Remove leaves, moss and debris from roof valleys and surfaces",
        "Inspect flashings, ridge capping and penetrations annually",
        "Repaint or re-coat metal roofs every 15-20 years to restore protection",
      ],
    },
    {
      id: "when-to-replace-your-roof",
      heading: "Signs It Is Time to Replace Your Roof",
      paragraphs: [
        "Even with excellent maintenance, every roof eventually reaches the end of its useful life. Persistent leaks that reappear after repairs, widespread rusting on metal roofs, or multiple cracked and broken tiles across the roof surface are all signs that replacement may be more cost-effective than ongoing repairs.",
        "Interior water stains, mould growth in the ceiling or roof cavity, and daylight visible through the roof are urgent indicators that the roofing system has failed. Sagging or uneven roof lines can indicate structural damage to the supporting timbers, which must be addressed immediately for safety reasons.",
      ],
      bullets: [
        "Leaks that recur despite repeated repairs indicate widespread failure",
        "Extensive rust, cracked tiles or visible deterioration across large areas",
        "Roof age approaching or exceeding the expected lifespan for the material",
        "Rising energy bills due to loss of insulation or ventilation performance",
      ],
    },
  ],

  testimonial: {
    name: "Angela M.",
    location: "Bondi, Sydney",
    quote: "Our terracotta tile roof was over 60 years old and still solid, but the sarking had failed completely. Sydney Roofing replaced the underlayment and re-bedded the ridge without having to replace the tiles. Saved us a fortune.",
    rating: 5,
  },

  cta: {
    heading: "Need a Roof Inspection or Replacement Quote?",
    text: "Our licensed roofing team can assess the condition of your roof, recommend maintenance or replacement options, and provide honest advice tailored to your property and budget.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof lifespan", "colorbond durability", "tile roof maintenance", "roof replacement"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
