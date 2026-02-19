import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How Much Does Skylight Installation Cost?",
  slug: "how-much-does-skylight-installation-cost",
  path: "/guides/how-much-does-skylight-installation-cost/",
  description: "A complete breakdown of skylight installation costs in Sydney, including materials, labour, different skylight types and factors that impact your final quote.",
  keywords: "skylight installation cost, skylight price sydney, roof window cost, skylight installation nsw, tubular skylight cost",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How Much Does Skylight Installation Cost?",
    subheadline: "Everything you need to know about skylight installation costs in Sydney, from budget tube skylights to premium opening roof windows.",
    bullets: [
      "Understand the cost of different skylight types and sizes",
      "Learn what factors increase or reduce your installation quote",
      "Compare fixed, vented and tubular skylight pricing in Sydney",
      "Know what is included in a professional skylight installation",
    ],
  },

  intro: {
    paragraphs: [
      "Skylights can transform a dark room into a bright, naturally lit space while improving ventilation and adding value to your Sydney home. But costs vary widely depending on the type of skylight, roof material, access and installation complexity.",
      "Most Sydney homeowners spend between $900 and $4,500 per skylight fully installed. Tubular skylights are at the lower end of that range, while large opening skylights with electric controls sit at the higher end. Understanding these cost drivers helps you budget accurately and avoid surprise expenses.",
      "At Sydney Roofing and Gutters, we have installed skylights on tile roofs, metal roofs, flat decks and everything in between. The information in this guide is based on real pricing for Sydney installations completed in 2025 and 2026.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: skylight installation costs",
    bullets: [
      "Tubular skylights cost between $900 and $1,800 installed for standard roof access",
      "Fixed flat skylights range from $1,200 to $2,500 depending on size and glazing",
      "Opening skylights with manual or electric controls cost $2,000 to $4,500 installed",
      "Installation on tile roofs is typically $200 to $400 more than metal roofs due to cutting and flashing complexity",
    ],
  },

  sections: [
    {
      id: "skylight-types-and-pricing",
      heading: "Skylight Types and Price Ranges",
      paragraphs: [
        "The type of skylight you choose is the biggest factor in total cost. Tubular skylights, also called sun tunnels, are the most affordable option. These consist of a small clear dome on the roof connected to a reflective tube that directs light into the room below. They work well for bathrooms, hallways and walk-in robes where you need light but not a view.",
        "Fixed flat skylights are larger units with a rectangular or square frame and double-glazed acrylic or glass. They provide more light and a view of the sky but do not open. Vented or opening skylights add mechanical components for ventilation and come in manual or electric versions. Electric opening skylights with rain sensors are the premium option.",
      ],
      bullets: [
        "Tubular skylights: $900-$1,800 installed for 300-530mm diameter models",
        "Fixed flat skylights: $1,200-$2,500 for sizes from 600x600mm to 1200x1200mm",
        "Manual opening skylights: $2,000-$3,200 including flashing and hardware",
        "Electric opening skylights: $3,500-$4,500 with remote control and rain sensor",
      ],
    },
    {
      id: "installation-factors",
      heading: "Factors That Affect Installation Cost",
      paragraphs: [
        "Roof type makes a significant difference. Metal roofs are the easiest to work with because cutting an opening is straightforward and flashing is simpler. Tile roofs require careful removal and replacement of tiles around the skylight, plus custom lead or Colorbond flashings to prevent leaks. Slate roofs add even more labour and cost due to the fragility of the material.",
        "Roof pitch and access also impact pricing. Steep roofs require additional safety equipment and take longer to navigate. If your roof is two storeys up with limited access, expect an additional charge for scaffolding or elevated work platforms. Single-storey homes with standard pitch roofs are the quickest and cheapest to install on.",
      ],
      bullets: [
        "Metal roofs are the easiest and cheapest to install skylights on",
        "Tile roofs add $200-$400 per skylight due to cutting and flashing complexity",
        "Steep pitch roofs over 30 degrees require additional safety setup and time",
        "Multi-storey or difficult access sites may require scaffolding at $600-$1,200 extra",
      ],
    },
    {
      id: "what-is-included",
      heading: "What Is Included in a Professional Installation?",
      paragraphs: [
        "A proper skylight installation is more than just cutting a hole in the roof. Your quote should include the skylight unit itself, custom flashings to suit your roof type, any structural timber framing needed to support the opening, and internal finishing such as a light shaft or diffuser.",
        "For tiled roofs, this means removing and refitting tiles around the frame. For metal roofs, it includes cutting the sheet and installing apron, barge and top flashings. The best installers also apply waterproof membrane under the flashing to add an extra layer of protection against Sydney storms.",
      ],
      bullets: [
        "Skylight unit with manufacturer warranty (typically 10 years)",
        "Custom flashings to match your roof material and colour",
        "Structural timber framing if required by roof design",
        "Light shaft construction and internal finishing such as plaster or diffuser panel",
      ],
    },
    {
      id: "additional-costs-to-consider",
      heading: "Additional Costs to Consider",
      paragraphs: [
        "Beyond the skylight and basic installation, there are often extra costs that do not appear in initial quotes. If your ceiling has no existing access to the roof cavity, the installer may need to create one. Electrical work for opening skylights with motors requires a licensed electrician, which typically adds $300 to $600 to the total.",
        "Some homes need ceiling fans or light fixtures relocated to make space for the skylight. Painting the internal light shaft is usually not included unless specifically quoted. If you are installing multiple skylights, most contractors offer a small discount per unit after the first one.",
      ],
      bullets: [
        "Electrical wiring for motorised skylights: $300-$600 by licensed electrician",
        "Ceiling cavity access creation if not already present: $200-$400",
        "Relocating ceiling fixtures such as fans or downlights: $150-$350 each",
        "Painting the internal light shaft: $200-$400 depending on height and finish",
      ],
    },
    {
      id: "choosing-quality-over-price",
      heading: "Why Choosing Quality Matters",
      paragraphs: [
        "Cheap skylight installations are one of the most common sources of roof leaks in Sydney. Poorly fitted flashings, incorrect sealing around the frame and inadequate structural support can all lead to water damage that costs thousands to repair. Choosing an experienced roofing contractor who specialises in skylights is essential.",
        "Look for installers who use branded skylights like Velux, Solatube or Fakro rather than generic imports. These come with proper warranties and replacement parts if needed. A quality installation should include a written workmanship warranty of at least five years covering leaks caused by installation defects.",
      ],
      bullets: [
        "Use installers with proven skylight experience and NSW contractor licences",
        "Choose branded skylights with manufacturer warranties rather than generic units",
        "Ensure the quote includes a workmanship warranty covering leaks and defects",
        "Ask to see photos of previous skylight installations on roofs similar to yours",
      ],
    },
    {
      id: "getting-accurate-quotes",
      heading: "How to Get Accurate Skylight Quotes",
      paragraphs: [
        "The best way to get an accurate skylight quote is to have a roofing contractor inspect your property in person. Photos and phone descriptions often miss critical details like roof access, internal ceiling structure and existing wiring that all affect final cost.",
        "When comparing quotes, make sure each one specifies the exact skylight model, size and brand. A quote that just says fixed skylight could mean anything from a basic acrylic unit to a premium double-glazed model. Also confirm whether the price includes internal finishing, removal of debris and any required building permits.",
      ],
      bullets: [
        "Request on-site inspections rather than phone quotes for accurate pricing",
        "Ensure quotes specify skylight brand, model number and exact dimensions",
        "Confirm whether internal light shaft construction and finishing is included",
        "Check if building approval fees or permits are included in the quoted price",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Kellyville, Sydney",
    quote: "We had three Velux skylights installed in our hallway and main bathroom. The difference in natural light is incredible and the installer did an amazing job with the flashings on our tile roof. No leaks after two winters.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Install a Skylight?",
    text: "Get a free, detailed quote for your skylight installation. We service all of Sydney and specialise in leak-free skylight installations on tile, metal and Colorbond roofs.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["skylights", "installation cost", "roof windows", "natural light"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
