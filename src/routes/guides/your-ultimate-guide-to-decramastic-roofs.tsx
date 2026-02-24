import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Your Ultimate Guide to Decramastic Roofs",
  slug: "your-ultimate-guide-to-decramastic-roofs",
  path: "/guides/your-ultimate-guide-to-decramastic-roofs/",
  description: "Complete guide to Decramastic roofing for Sydney homes. Learn about this steel tile system, its benefits, installation, maintenance and whether it is the right choice for your property.",
  keywords: "decramastic roof, steel tile roofing, decramastic sydney, steel roof tiles, lightweight roofing",
  publishedISO: "2024-10-02",
  modifiedISO: "2025-12-01",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Your Ultimate Guide to Decramastic Roofs",
    subheadline: "Everything you need to know about Decramastic steel tile roofing systems for Sydney properties, from benefits and costs to installation and maintenance.",
    bullets: [
      "Understand what Decramastic roofing is and how it differs from traditional tiles",
      "Discover the advantages of lightweight steel tiles for Sydney homes",
      "Learn about installation requirements and expected costs in NSW",
      "Find out how to maintain and repair Decramastic roofs for long-term performance",
    ],
  },

  intro: {
    paragraphs: [
      "Decramastic roofing has been a popular choice in Australia for over three decades. This unique steel tile system combines the appearance of traditional clay or concrete tiles with the strength and light weight of steel sheeting. For Sydney homeowners seeking a durable roof that does not place excessive load on the structure, Decramastic offers an attractive middle ground.",
      "The system uses steel sheets that are roll-formed into tile profiles and coated with stone chips embedded in an acrylic polymer. This creates a textured finish that resembles ceramic tiles while weighing just a fraction as much. The reduced weight makes Decramastic ideal for renovations, extensions and properties with lightweight framing.",
      "This guide covers everything Sydney property owners need to know about Decramastic roofing, including performance characteristics, installation considerations, typical costs in the Sydney market and how it compares to other roofing options available in New South Wales.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: Decramastic roofing essentials",
    bullets: [
      "Decramastic tiles weigh approximately 7kg per square metre compared to 50kg for concrete tiles",
      "Typical installation costs range from $70 to $140 per square metre in Sydney",
      "The system carries a 50-year product warranty when installed by approved contractors",
      "Regular maintenance every 3-5 years helps preserve appearance and prevent corrosion",
    ],
  },

  sections: [
    {
      id: "what-is-decramastic-roofing",
      heading: "What is Decramastic Roofing?",
      paragraphs: [
        "Decramastic is a proprietary roofing system manufactured from steel sheets that are pressed into traditional tile profiles. The steel base is galvanised and then coated with an acrylic polymer layer embedded with natural stone granules. This creates a textured, tile-like appearance in a range of colours including terracotta, charcoal, brown and green.",
        "Unlike sheet metal roofing which has a flat or corrugated profile, Decramastic tiles are interlocking and laid in overlapping rows similar to concrete or clay tiles. The difference is in weight and installation speed. A typical Sydney home can be re-roofed with Decramastic in 3 to 7 days compared to 10 to 14 days for traditional tiles.",
      ],
      bullets: [
        "Steel base provides strength and resistance to cracking",
        "Stone chip finish reduces noise from rain compared to bare metal",
        "Lightweight design reduces structural load by up to 85 percent",
        "Available in profiles that mimic Mediterranean, slate and shingle tiles",
      ],
    },
    {
      id: "advantages-for-sydney-homes",
      heading: "Advantages for Sydney Homes",
      paragraphs: [
        "The light weight of Decramastic makes it suitable for properties where structural capacity is limited. This includes older homes with timber framing, extensions over habitable spaces and second-storey additions where reducing dead load is critical. Engineers often recommend Decramastic when concrete tiles would require costly structural reinforcement.",
        "Another benefit is fire resistance. Decramastic tiles achieve a BAL 29 bushfire attack level rating when installed correctly, making them suitable for properties in bushfire-prone areas across Sydney and the Blue Mountains. The steel construction is non-combustible and the stone coating helps resist ember attack.",
      ],
      bullets: [
        "Suitable for lightweight timber framing without structural upgrades",
        "Faster installation reduces labour costs and weather exposure",
        "Non-combustible steel base provides bushfire protection",
        "Performs well in coastal areas with appropriate coating maintenance",
      ],
    },
    {
      id: "installation-requirements",
      heading: "Installation Requirements and Process",
      paragraphs: [
        "Decramastic roofing must be installed by contractors approved and trained by the manufacturer. Installation follows specific guidelines outlined in the Decramastic installation manual, which complies with Australian Standard AS 1562.1 for sheet and tile roof cladding. The system requires battens spaced at 340mm centres for most profiles, with purlin spacing dependent on roof pitch and span.",
        "Before installation begins, the existing roof structure is assessed and repaired if needed. Sarking membrane is installed over the rafters, followed by timber battens. Decramastic tiles are laid from the eave upwards, with each tile interlocking with the one below. Hip and ridge cappings, valley irons and flashings are installed to complete the weatherproof envelope.",
      ],
      bullets: [
        "Only approved installers can offer the manufacturer warranty",
        "Minimum roof pitch of 15 degrees required for most profiles",
        "Sarking membrane is mandatory for condensation control",
        "All penetrations require custom flashings to prevent leaks",
      ],
    },
    {
      id: "costs-and-value",
      heading: "Costs and Long-Term Value",
      paragraphs: [
        "The installed cost of Decramastic roofing in Sydney typically sits between sheet metal and premium concrete tiles. Expect to pay $70 to $140 per square metre depending on roof complexity, access and the specific profile chosen. A standard single-storey home with a simple gable or hip roof will generally fall in the $90 to $110 per square metre range.",
        "Long-term value depends on maintenance. The stone coating can degrade over time, particularly in coastal environments where salt spray accelerates wear. Re-coating the tiles every 10 to 15 years extends roof life and maintains appearance. Factor this maintenance cost into total ownership calculations when comparing Decramastic to alternatives like Colorbond or terracotta tiles.",
      ],
      bullets: [
        "Initial cost is competitive with mid-range concrete tiles",
        "Labour savings from faster installation reduce overall project cost",
        "Re-coating every 10-15 years costs $30 to $50 per square metre",
        "50-year product warranty provides long-term assurance when maintained",
      ],
    },
    {
      id: "maintenance-and-repairs",
      heading: "Maintenance and Common Repairs",
      paragraphs: [
        "Regular maintenance keeps Decramastic roofs performing well for decades. Annual inspections should check for loose or lifted tiles, damaged flashings and accumulation of debris in valleys and behind chimneys. Coastal properties require more frequent checks as salt exposure can degrade the acrylic coating and expose the steel substrate to corrosion.",
        "The most common issue is coating deterioration. When stone granules shed, the acrylic base becomes exposed and begins to break down under UV exposure. This eventually exposes the steel, leading to rust. Re-coating involves cleaning the tiles, applying primer and then a fresh acrylic coating embedded with new stone chips. This work is best done by specialists with experience in Decramastic systems.",
      ],
      bullets: [
        "Clean gutters and valleys twice yearly to prevent blockages",
        "Trim overhanging branches to reduce leaf litter and moss growth",
        "Inspect and replace damaged tiles promptly to prevent water ingress",
        "Schedule professional re-coating when stone granules begin shedding noticeably",
      ],
    },
    {
      id: "comparing-alternatives",
      heading: "How Decramastic Compares to Other Options",
      paragraphs: [
        "When choosing a roofing system for a Sydney property, it helps to understand where Decramastic fits relative to alternatives. Compared to Colorbond metal sheeting, Decramastic offers a more traditional tile appearance and better sound insulation but requires more maintenance. Compared to concrete tiles, Decramastic is lighter and faster to install but does not have the same thermal mass for temperature moderation.",
        "Terracotta tiles offer superior longevity and require less maintenance than Decramastic, but cost significantly more and require structural support for the additional weight. Ultimately, the right choice depends on your priorities around aesthetics, budget, structural capacity and willingness to invest in ongoing maintenance.",
      ],
      bullets: [
        "Lighter than concrete or terracotta tiles, heavier than sheet metal",
        "Requires more maintenance than Colorbond but less than timber shingles",
        "Offers traditional tile aesthetics at a lower cost than terracotta",
        "Suitable for bushfire-prone areas with appropriate BAL rating",
      ],
    },
  ],

  testimonial: {
    name: "Karen P.",
    location: "Hornsby, Sydney",
    quote: "We chose Decramastic for our cottage extension because it matched the original tile look without needing structural upgrades. Five years on, the roof still looks great and has handled every storm without issues.",
    rating: 5,
  },

  cta: {
    heading: "Considering Decramastic for Your Roof?",
    text: "Get expert advice and a free quote from our team. We are approved Decramastic installers serving all of Sydney with full manufacturer warranties on every installation.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["decramastic", "steel tiles", "lightweight roofing", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
