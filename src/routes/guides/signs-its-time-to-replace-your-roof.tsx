import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Signs It Is Time to Replace Your Roof",
  slug: "signs-its-time-to-replace-your-roof",
  path: "/guides/signs-its-time-to-replace-your-roof/",
  description: "Learn the warning signs that indicate your roof needs replacement. From age and storm damage to leaks and energy loss, this guide helps Sydney homeowners decide when to re-roof.",
  keywords: "roof replacement signs, when to replace roof, roof age sydney, roof damage indicators, re-roofing advice",
  publishedISO: "2024-01-25",
  modifiedISO: "2025-12-11",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Signs It Is Time to Replace Your Roof",
    subheadline: "How to spot the warning signs that your roof is failing and when repair is no longer enough for Sydney homes.",
    bullets: [
      "Recognise the visual indicators of roof failure before major leaks occur",
      "Understand typical roof lifespans for tiles, metal and other materials in Sydney",
      "Learn when to repair versus when to invest in a full replacement",
      "Discover how failing roofs impact energy bills and home safety",
    ],
  },

  intro: {
    paragraphs: [
      "Most Sydney homeowners do not think about their roof until something goes wrong. By the time water is dripping into the living room, serious damage has often already occurred to the roof structure, insulation and ceiling. Catching problems early saves thousands in repair costs and protects your home from mould, electrical hazards and structural decay.",
      "Roofs do not last forever. Even high-quality materials eventually succumb to decades of sun, wind, rain and hail. Terracotta tiles can become brittle after 40 years, metal roofs develop rust in coastal areas and asphalt shingles degrade under UV exposure. Knowing the warning signs helps you plan a re-roof on your terms instead of scrambling during an emergency.",
      "At Sydney Roofing and Gutters, we inspect hundreds of roofs every year. This guide outlines the key signs that indicate replacement is needed, based on real-world experience with Sydney homes and Australian building standards.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: key warning signs",
    bullets: [
      "Terracotta tile roofs typically last 40 to 60 years, concrete tiles 30 to 50 years and Colorbond metal 50+ years in Sydney conditions",
      "Recurring leaks in multiple locations signal systemic failure that cannot be solved with spot repairs",
      "Visible sagging or bowing in the roof line indicates structural damage requiring immediate attention",
      "Rising energy bills combined with temperature swings inside the home often point to failed roof insulation and ventilation",
    ],
  },

  sections: [
    {
      id: "age-of-the-roof",
      heading: "Age of the Roof and Material Lifespan",
      paragraphs: [
        "The simplest indicator is the age of your roof. If your terracotta tiles are over 50 years old or your concrete tiles have passed 40 years, replacement should be on your radar even if no visible damage exists yet. Materials degrade gradually and older roofs are more vulnerable to storm damage and sudden failure.",
        "Metal roofs in Sydney generally outlast tiles, especially modern Colorbond and Zincalume products. However, older steel or iron roofs from the 1970s and 1980s often suffer from rust, particularly around fasteners and in valleys. If rust has eaten through the sheet in multiple places, patching becomes a losing battle.",
      ],
      bullets: [
        "Terracotta tiles: 40-60 year lifespan, longer in inland areas than coastal zones",
        "Concrete tiles: 30-50 years, prone to cracking and colour fade over time",
        "Colorbond/Zincalume: 50+ years with proper maintenance and correct installation",
        "Asphalt shingles: 15-25 years, rare in Sydney but found on some older homes",
      ],
    },
    {
      id: "visible-damage-and-deterioration",
      heading: "Visible Damage and Deterioration",
      paragraphs: [
        "Walk around your property and inspect from ground level. Cracked, chipped or missing tiles are obvious red flags. One or two broken tiles can be replaced, but if you see damage across large areas or on multiple roof planes, the substrate or battens may also be compromised.",
        "For metal roofs, look for rust stains, bubbling paint, dents from hail and gaps where sheets have lifted. Coastal homes near the ocean face accelerated corrosion from salt air. If you notice daylight visible through gaps in the roof when standing in the roof space, immediate action is needed.",
      ],
      bullets: [
        "Cracked or slipped tiles in multiple locations indicate batten failure underneath",
        "Rust stains streaking down walls point to corroded roof fasteners or flashing",
        "Curling or buckling metal sheets suggest thermal stress or incorrect installation",
        "Moss and lichen growth signal moisture retention and possible sarking failure",
      ],
    },
    {
      id: "leaks-and-water-damage",
      heading: "Leaks and Water Damage",
      paragraphs: [
        "A single leak after a severe storm does not always mean the whole roof must be replaced. However, recurring leaks in different rooms, water stains on ceilings that keep reappearing after repairs, or widespread damp spots in the roof cavity are clear signs the roof has reached the end of useful life.",
        "Water damage extends beyond what you see. Wet insulation loses thermal performance, damp timber attracts termites and mould spores spread through the home creating health risks. Trying to patch a fundamentally failed roof is like bailing water from a sinking boat — replacement is the only permanent solution.",
      ],
      bullets: [
        "Water stains on multiple ceilings indicate systemic flashing or sheet failure",
        "Dripping during heavy rain that stops when rain eases suggests blocked or damaged valleys",
        "Damp insulation in the roof space reduces energy efficiency by up to 50 percent",
        "Persistent musty smell inside the home often traces back to roof leaks and mould growth",
      ],
    },
    {
      id: "sagging-and-structural-issues",
      heading: "Sagging and Structural Issues",
      paragraphs: [
        "Stand back from your home and look at the roof line from several angles. A healthy roof should have clean, straight lines along ridges, hips and eaves. Any visible sagging, dipping or bowing indicates serious structural problems such as rotted rafters, failed ridge beams or overloaded battens.",
        "Structural failure does not happen overnight. Years of water ingress, termite activity or undersized framing gradually weaken the roof frame. Once sagging becomes visible from ground level, the damage is extensive and poses a safety risk. This is a situation where immediate replacement is non-negotiable.",
      ],
      bullets: [
        "Sagging ridges or valleys suggest rafter failure and require urgent inspection",
        "Bowing or uneven roof planes indicate batten collapse or termite damage",
        "Cracked or split beams visible in the roof space mean structural capacity is compromised",
        "A roof that sags more than 20mm per metre fails Australian building standards and must be replaced",
      ],
    },
    {
      id: "energy-bills-and-interior-comfort",
      heading: "Energy Bills and Interior Comfort",
      paragraphs: [
        "Have your electricity or gas bills climbed noticeably over the past few years, even though your usage habits have not changed? A failing roof often shows up first in your energy costs. When insulation becomes damp or compressed, or when gaps develop around flashings, heat floods in during summer and escapes during winter.",
        "You may also notice rooms that used to be comfortable now feel stuffy or cold. Temperature swings between rooms can indicate uneven insulation coverage caused by roof leaks. While insulation can be topped up, if the roof itself is failing, new insulation will quickly become damaged and the cycle repeats.",
      ],
      bullets: [
        "Cooling costs rising 20-30 percent over a few summers often trace to roof degradation",
        "Rooms directly under the roof feeling much hotter or colder than the rest of the house",
        "Condensation forming on windows or walls due to poor roof ventilation",
        "HVAC systems running longer to maintain temperature because of heat transfer through the roof",
      ],
    },
    {
      id: "repair-versus-replacement",
      heading: "When to Repair Versus Replace",
      paragraphs: [
        "Minor damage such as a handful of cracked tiles, a single rusted sheet or isolated flashing issues can usually be repaired cost-effectively. A good rule of thumb is if repairs cost less than 30 percent of the price of a new roof and the underlying structure is sound, repair makes sense.",
        "Once repair costs climb above that threshold or problems keep recurring, replacement becomes the better investment. A new roof also offers benefits beyond just fixing leaks — improved energy efficiency, modern materials with longer warranties, updated insulation and a significant boost to property value and street appeal.",
      ],
      bullets: [
        "Isolated damage covering less than 10 percent of the roof area is usually repairable",
        "Recurring issues in the same area despite multiple repairs signal underlying failure",
        "When repair quotes exceed 30-40 percent of replacement cost, opt for a new roof",
        "Homes over 30 years old with original roofs should consider replacement during major renovations",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Pymble, Sydney",
    quote: "We kept patching leaks for two years before we finally bit the bullet and replaced the whole roof. Wish we had done it sooner — no more buckets in the hallway and our power bills dropped straight away.",
    rating: 5,
  },

  cta: {
    heading: "Not Sure if Your Roof Needs Replacing?",
    text: "Book a free roof inspection with our licensed team. We will give you an honest assessment and a clear recommendation on whether repair or replacement is the right choice for your home.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof replacement", "roof damage", "roof inspection", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
