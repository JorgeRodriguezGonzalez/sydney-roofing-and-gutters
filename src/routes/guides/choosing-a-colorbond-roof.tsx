import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Choosing a Colorbond Roof",
  slug: "choosing-a-colorbond-roof",
  path: "/guides/choosing-a-colorbond-roof/",
  description: "Expert advice on choosing the right Colorbond roof for your Sydney home. Compare colours, profiles, finishes and costs to make an informed decision.",
  keywords: "colorbond roof sydney, colorbond colours, colorbond profiles, choosing roof material, metal roof options",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Choosing a Colorbond Roof",
    subheadline: "Make the right choice for your Sydney home with expert guidance on Colorbond colours, profiles, finishes and performance factors.",
    bullets: [
      "Understand how different Colorbond profiles suit different roof types",
      "Compare over 20 colours and how they affect energy performance",
      "Learn about warranties, guarantees and what they really cover",
      "Discover which Colorbond options suit coastal and bushfire zones",
    ],
  },

  intro: {
    paragraphs: [
      "Colorbond steel has dominated the Australian residential roofing market for over four decades. Manufactured by BlueScope in NSW, it combines a galvanised steel core with multiple protective layers and a baked-on paint finish. The result is a roofing material that withstands harsh coastal conditions, extreme heat and bushfire exposure better than most alternatives.",
      "With so many profiles, colours and finish options available, choosing the right Colorbond specification for your Sydney property can feel overwhelming. The wrong choice might not cause immediate problems, but it can lead to higher energy bills, reduced kerb appeal or performance issues years down the track.",
      "This guide breaks down the key decision points so you can confidently select the best Colorbond roof for your budget, location and aesthetic preferences. Whether you are building new or replacing an ageing roof, the information below will help you make an informed choice.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: key facts about Colorbond",
    bullets: [
      "Colorbond steel comes in five different base metal thicknesses ranging from 0.42mm to 0.60mm BMT",
      "BlueScope offers 22 standard colours in the Colorbond range, plus custom colours for large projects",
      "All Colorbond roofing carries a 20-year perforation warranty in non-coastal zones, 15 years in coastal areas",
      "Light colours can reduce roof surface temperatures by up to 20 degrees compared to dark tones",
    ],
  },

  sections: [
    {
      id: "understanding-colorbond-profiles",
      heading: "Understanding Colorbond Profiles and Sheet Types",
      paragraphs: [
        "Colorbond steel is available in multiple profile shapes, each designed for specific applications and roof pitches. The most common residential profiles in Sydney are Trimdek, Klip-Lok, Spandek and Custom Orb. Trimdek features a low-profile rib and broad pan, making it ideal for most suburban homes with standard roof pitches above 5 degrees.",
        "Klip-Lok uses a concealed clip system rather than exposed screws, providing a cleaner look and better weather resistance on lower pitch roofs. Spandek offers a mid-height rib for extra strength, while Custom Orb delivers the traditional corrugated iron aesthetic that suits heritage homes and rural properties. Each profile has different spanning capabilities, which determines how far apart your roof battens need to be.",
      ],
      bullets: [
        "Trimdek: versatile, modern appearance, minimum pitch 5 degrees, most popular for residential",
        "Klip-Lok: concealed fasteners, suits pitches down to 1 degree, commercial and contemporary homes",
        "Spandek: higher ribs for extra strength, ideal for large spans and commercial buildings",
        "Custom Orb: classic corrugated look, lightweight, suits traditional and rural architecture",
      ],
    },
    {
      id: "colour-selection-and-thermal-performance",
      heading: "Colour Selection and Thermal Performance",
      paragraphs: [
        "Colour is one of the most important decisions because it affects both appearance and energy efficiency. BlueScope divides its Colorbond colour range into light, mid and dark tones. Light colours like Surfmist, Classic Cream and Shale Grey reflect up to 70 percent of solar heat, keeping roof spaces cooler and reducing air conditioning loads during summer.",
        "Dark colours like Monument, Night Sky and Ironstone absorb more heat, which can raise roof cavity temperatures significantly. While dark roofs look striking on modern builds, they may not suit poorly insulated homes in hot western Sydney suburbs. Mid-tones like Windspray and Dune offer a balance between aesthetics and thermal performance.",
      ],
      bullets: [
        "Light colours reduce summer heat gain and lower cooling costs",
        "Dark colours suit well-insulated homes in cooler climates or shaded sites",
        "Mid tones balance thermal performance with broader colour palettes for facades",
        "Total Solar Reflectance (TSR) ratings help compare heat reflection between colours",
      ],
    },
    {
      id: "base-metal-thickness-and-durability",
      heading: "Base Metal Thickness and Long-Term Durability",
      paragraphs: [
        "Colorbond sheets are available in several base metal thicknesses, measured in BMT (base metal thickness). Standard residential roofing uses 0.42mm or 0.48mm BMT, with thicker 0.60mm options available for extreme wind zones or commercial applications. Thicker steel provides greater resistance to hail damage, denting and wind uplift.",
        "In coastal Sydney suburbs within 1 kilometre of salt water, upgrading to 0.48mm BMT or specifying Colorbond Ultra with additional corrosion protection is a smart investment. The extra cost is modest compared to premature rust or paint failure caused by salt spray. For inland areas, standard 0.42mm BMT performs well under normal conditions.",
      ],
      bullets: [
        "Standard 0.42mm BMT suits most residential applications in non-coastal zones",
        "Upgrade to 0.48mm BMT for better hail and dent resistance",
        "Coastal properties benefit from thicker steel or Colorbond Ultra coating",
        "Thicker gauges increase material cost by 10-15 percent but improve lifespan",
      ],
    },
    {
      id: "warranties-and-guarantees",
      heading: "Warranties and What They Actually Cover",
      paragraphs: [
        "BlueScope provides warranties on Colorbond steel covering perforation due to corrosion. For standard Colorbond steel in non-coastal environments more than 1 kilometre from breaking surf, the perforation warranty is 20 years. Coastal zones within 1 kilometre have a reduced 15-year warranty due to harsher salt exposure.",
        "It is crucial to understand that the warranty does not cover paint fade, scratches during installation or damage from debris impact. Workmanship defects like incorrect fastening or poor flashing work are covered separately by your roofing contractor, not BlueScope. Always request a written workmanship warranty of at least 10 years from your installer.",
      ],
      bullets: [
        "BlueScope warranties cover perforation from corrosion, not cosmetic issues",
        "Coastal warranty period is shorter due to salt exposure",
        "Warranty claims require proof of proper installation and maintenance",
        "Separate workmanship warranty from your contractor covers installation defects",
      ],
    },
    {
      id: "special-environments",
      heading: "Choosing Colorbond for Coastal and Bushfire Zones",
      paragraphs: [
        "Properties located near the coast face accelerated corrosion from salt-laden air. For homes within 1 kilometre of the ocean, Colorbond Ultra offers enhanced protection through additional metallic coating layers. Regular hosing down of the roof surface every 6 to 12 months also helps remove salt deposits and extends roof life significantly.",
        "In bushfire-prone areas, Colorbond steel provides excellent protection when correctly installed. All Colorbond profiles achieve a BAL (Bushfire Attack Level) rating suitable for most residential zones. The steel itself is non-combustible, and when combined with proper sarking, ember guards and compliant flashings, Colorbond roofs meet Australian Standard AS 3959 requirements for bushfire construction.",
      ],
      bullets: [
        "Colorbond Ultra adds extra corrosion protection for coastal homes",
        "Regular washing removes salt buildup and prevents premature corrosion",
        "All Colorbond profiles are non-combustible and suit bushfire zones",
        "Correct installation details matter more than material choice in bushfire areas",
      ],
    },
    {
      id: "cost-comparison",
      heading: "Comparing Costs and Return on Investment",
      paragraphs: [
        "Colorbond roofing typically costs between $60 and $120 per square metre installed in Sydney, depending on profile, colour, thickness and roof complexity. This makes it more expensive than basic Zincalume but cheaper than terracotta tiles or slate. The long lifespan, low maintenance and energy savings often justify the upfront investment.",
        "When comparing quotes, pay attention to what is included. Some contractors quote material only, while others bundle sarking, flashing, gutter work and cleanup. A higher quote that includes quality sarking and proper ventilation may deliver better long-term value than a bare-bones budget price.",
      ],
      bullets: [
        "Expect $60-$120 per square metre installed depending on specifications",
        "Thicker steel, premium colours and complex roofs increase cost",
        "Factor in sarking, ventilation and flashing upgrades for total project cost",
        "Colorbond typically outlasts tiles with minimal maintenance over 30-40 years",
      ],
    },
  ],

  testimonial: {
    name: "Michelle P.",
    location: "Manly, Sydney",
    quote: "We chose Colorbond Ultra in Shale Grey for our coastal home. Three years on, the roof still looks brand new despite the salt air. The lighter colour keeps the house cooler in summer too.",
    rating: 5,
  },

  cta: {
    heading: "Ready to Choose Your Colorbond Roof?",
    text: "Our team can help you select the right profile, colour and thickness for your Sydney property. Get expert advice and a detailed quote with no obligation.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["colorbond", "roof materials", "colour selection", "sydney roofing"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
