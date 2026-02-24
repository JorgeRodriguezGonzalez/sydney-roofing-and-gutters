import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "What Are the Signs of a Leaking Roof?",
  slug: "what-are-the-signs-of-a-leaking-roof",
  path: "/guides/what-are-the-signs-of-a-leaking-roof/",
  description: "Learn to identify the early warning signs of a leaking roof before serious damage occurs. A Sydney homeowner guide to roof leak detection, inspection tips and when to call a professional.",
  keywords: "roof leak signs, leaking roof symptoms, roof damage detection, water damage ceiling, sydney roof inspection",
  publishedISO: "2024-05-12",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "What Are the Signs of a Leaking Roof?",
    subheadline: "Early detection of roof leaks can save Sydney homeowners thousands of dollars in repairs. Learn the common warning signs and what to do when you spot them.",
    bullets: [
      "Recognise ceiling stains, mould growth and other interior warning signs",
      "Identify exterior damage including cracked tiles and worn flashing",
      "Understand how seasonal weather in Sydney impacts roof deterioration",
      "Know when to inspect your roof and when to call a licensed contractor",
    ],
  },

  intro: {
    paragraphs: [
      "Roof leaks rarely announce themselves with a dramatic gush of water. Most start as minor issues that gradually worsen over weeks or months, quietly damaging your ceiling, insulation and structural timber. By the time you notice a visible drip, the problem has often been present for much longer than you realise.",
      "Sydney homes face unique challenges due to coastal humidity, summer storms and the thermal expansion that comes with hot metal roofs. Terracotta and concrete tiles can crack from temperature stress, while flashing around chimneys and valleys can degrade over time. Understanding the warning signs helps you catch problems early.",
      "This guide outlines the most common signs of a leaking roof, where to look for damage and what each symptom typically indicates. Whether you have tiles, metal or a flat membrane roof, these red flags apply across all roofing types used in the Sydney region.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: key warning signs",
    bullets: [
      "Water stains on ceilings usually appear as brown or yellow discolouration and often indicate leaks from directly above",
      "Damaged or missing roof tiles, particularly after storms, create entry points for water during the next rainfall",
      "Mould or mildew in the ceiling cavity or upper walls signals persistent moisture from slow leaks",
      "Sagging ceiling plaster or bulging paint means water has pooled above and structural damage may have occurred",
    ],
  },

  sections: [
    {
      id: "interior-warning-signs",
      heading: "Interior Warning Signs of Roof Leaks",
      paragraphs: [
        "The ceiling is the most obvious place to check for leak symptoms. Water stains typically appear as discoloured patches — yellow, brown or rust-coloured rings that spread outward from the leak source. Fresh stains may feel damp to the touch, while older stains dry hard but leave visible marks. If you see expanding rings over time, the leak is active and ongoing.",
        "Mould and mildew growth in corners of rooms, along the ceiling line or inside wardrobes near exterior walls often indicates hidden moisture. The musty smell of mould can appear before visible growth does. In Sydney homes, mould in upstairs rooms or near roof spaces almost always points to a roofing issue rather than rising damp.",
      ],
      bullets: [
        "Ceiling stains that grow larger after rain or spread over weeks",
        "Peeling paint or bubbling plaster on ceilings and upper walls",
        "Mould patches in ceiling corners, particularly near bathrooms or chimneys",
        "Dripping sounds or visible water pooling during or after heavy rain",
      ],
    },
    {
      id: "exterior-roof-damage",
      heading: "Exterior Roof Damage You Can Spot from the Ground",
      paragraphs: [
        "You do not need to climb onto the roof to spot many common problems. Use binoculars to inspect from ground level or a neighbouring property. Look for cracked, slipped or missing tiles, especially along ridge lines and in valleys where water flow concentrates. A single missing tile can allow litres of water into the roof cavity during a storm.",
        "Metal roofs can develop rust spots, lifted screws or damaged ridging. Colorbond and Zincalume are highly corrosion-resistant, but older galvanised steel or poorly maintained roofs will show rust patches that spread and eventually perforate the sheeting. Pay close attention to areas around chimneys, skylights and roof penetrations where flashing seals the join between roof and structure.",
      ],
      bullets: [
        "Cracked or broken tiles, particularly after high winds or hail",
        "Sagging or uneven sections of roof that may indicate rotting battens underneath",
        "Rust stains, lifted fasteners or gaps in metal roofing sheets",
        "Worn or damaged flashing around chimneys, vents and skylight edges",
      ],
    },
    {
      id: "gutter-and-downpipe-clues",
      heading: "Gutter and Downpipe Clues",
      paragraphs: [
        "Gutters and downpipes are part of the roofing system and their condition often hints at problems above. Overflowing gutters during moderate rain suggest blockages or incorrect fall, but they also force water to back up under the roof edge where it can seep into the fascia and eaves. Over time this leads to rot in timber fascia boards and water penetration into the ceiling cavity.",
        "Granules from asphalt shingles or fine sediment in gutters can indicate roof surface deterioration, though this is less common in Sydney where tiles and metal dominate. Staining on exterior walls directly below gutter joints points to leaks in the gutter itself, but persistent dampness on the wall may also suggest water is running down from a roof leak above.",
      ],
      bullets: [
        "Gutters overflowing during rain despite no visible blockage",
        "Rot or water damage on fascia boards where gutters attach",
        "Stains on external walls below gutter line or near downpipe joins",
        "Pooling water in gutter sections due to incorrect slope or sagging brackets",
      ],
    },
    {
      id: "seasonal-inspection-tips",
      heading: "When and How to Inspect Your Roof in Sydney",
      paragraphs: [
        "The best times to inspect your roof are after major storms and at the change of seasons. Sydney experiences intense summer storms with hail and high winds, followed by dry periods where damage may not be immediately obvious. Inspecting in autumn before the winter rains helps you catch storm damage early. Similarly, a spring check after the wet season reveals any leaks that developed over winter.",
        "If you can safely access your roof space or attic, inspect it with a torch on a sunny day. Look for light coming through gaps in the roof structure, water stains on the underside of roofing material and damp or compressed insulation. These signs confirm that water has entered, even if it has not yet reached the ceiling below.",
      ],
      bullets: [
        "Inspect after significant storms, particularly hail or winds above 70 km/h",
        "Check gutters and roof edges twice a year before and after winter",
        "Look inside the roof cavity for daylight, water stains and damp insulation",
        "Hire a licensed roofer for a professional inspection every 3 to 5 years",
      ],
    },
    {
      id: "what-to-do-when-you-find-a-leak",
      heading: "What to Do When You Find a Leak",
      paragraphs: [
        "If you spot any of the warning signs above, act quickly to minimise damage. Place a bucket or towel under active drips to protect flooring and furniture. Move valuables and electronics away from affected areas. Do not attempt to repair the roof yourself, especially in wet or windy conditions — roof work is dangerous and improper repairs often make leaks worse.",
        "Contact a licensed roofing contractor who services the Sydney area. In NSW, any roofing work over five thousand dollars requires a licensed contractor, and even minor repairs benefit from professional diagnosis. A qualified roofer will identify the source of the leak, assess the extent of damage and provide a written quote for repairs. Most leaks can be fixed within a few days if caught early.",
      ],
      bullets: [
        "Document the damage with photos for insurance and contractor records",
        "Contain water with buckets and tarps but do not climb onto the roof",
        "Call a licensed roofer immediately to prevent further water ingress",
        "Consider a full roof inspection if the leak reveals broader wear or age-related damage",
      ],
    },
  ],

  testimonial: {
    name: "Karen M.",
    location: "Hornsby, Sydney",
    quote: "We noticed a small stain on the bedroom ceiling and called Sydney Roofing within a day. Turned out three tiles had cracked during the last storm. They fixed it quickly and checked the whole roof at the same time.",
    rating: 5,
  },

  cta: {
    heading: "Concerned About a Roof Leak?",
    text: "Get a free roof inspection from our licensed team. We will identify the issue, explain your options and provide a detailed quote with no pressure to proceed.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["roof leaks", "roof inspection", "water damage", "roof maintenance"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
