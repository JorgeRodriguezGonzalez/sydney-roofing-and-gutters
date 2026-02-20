import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Top Signs of Storm Damage on Your Roof",
  slug: "top-signs-of-storm-damage-on-your-roof",
  path: "/guides/top-signs-of-storm-damage-on-your-roof/",
  description: "Learn how to identify storm damage on your Sydney roof after severe weather. Recognise the warning signs, understand what to look for and when to call a professional roofing contractor.",
  keywords: "storm damage roof sydney, hail damage roof, roof damage signs, roof inspection sydney, storm damage assessment",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Top Signs of Storm Damage on Your Roof",
    subheadline: "Essential advice for Sydney homeowners on identifying roof damage after storms, hail and high winds. Act early to prevent costly water damage inside your home.",
    bullets: [
      "Spot visible damage to tiles, metal sheeting and flashings before leaks start",
      "Understand the difference between hail damage, wind damage and general wear",
      "Learn when you can safely inspect yourself and when to call a licensed roofer",
      "Know what to document for insurance claims after severe weather events",
    ],
  },

  intro: {
    paragraphs: [
      "Sydney experiences some of the most intense storm activity in Australia, with hailstorms, severe wind gusts and heavy rainfall hitting the city multiple times each year. The Bureau of Meteorology records dozens of severe weather warnings annually across the greater Sydney region, and roofs take the brunt of this punishment.",
      "Many homeowners do not realise their roof has been damaged until water starts appearing inside the ceiling. By that time, structural timber may already be compromised and repair costs have multiplied. Identifying storm damage early is critical to protecting your property and avoiding expensive secondary damage.",
      "This guide will help you recognise the most common signs of storm damage on Sydney roofs, covering both external and internal indicators. We also explain when to call a professional inspector and how to navigate the insurance claims process.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Inspect your roof within 48 hours of any severe storm or hail event in Sydney",
      "Damaged flashings and gutters are just as critical as broken tiles or dented metal sheets",
      "Water stains on ceilings may appear days or weeks after the initial storm damage",
      "Most home insurance policies in NSW cover sudden storm damage but require prompt reporting",
    ],
  },

  sections: [
    {
      id: "exterior-damage-signs",
      heading: "Visible Exterior Damage: What to Look For",
      paragraphs: [
        "The most obvious storm damage is visible from the ground or a ladder. After any severe weather, walk around your property and look for broken or displaced roof tiles, dented or torn metal sheeting, and damaged ridge capping. Terracotta and concrete tiles can crack or shatter when hit by large hail or falling branches.",
        "Metal roofs suffer different types of damage. Colorbond and Zincalume sheeting can dent from hail, particularly on low-pitch sections where the impact angle is more direct. High winds can lift sheets at the eaves or ridge if fasteners have loosened over time. Check for any visible gaps or lifted edges along ridges and valleys.",
      ],
      bullets: [
        "Cracked, broken or missing tiles across the main roof area",
        "Dents or dimples in metal roofing sheets, especially after hail",
        "Lifted or displaced ridge capping and barge flashings",
        "Dislodged or damaged roof vents, skylights and penetrations",
      ],
    },
    {
      id: "gutters-and-flashings",
      heading: "Gutters, Downpipes and Flashing Damage",
      paragraphs: [
        "Storm damage is not limited to the main roof surface. Gutters and downpipes are highly vulnerable to wind and falling debris. Blocked or damaged gutters can overflow during heavy rain, sending water under the roofline and into the ceiling cavity. Check for dents, holes, separation at joints and sagging sections that indicate structural failure.",
        "Flashings are thin metal strips that seal the junctions between roof planes, walls and penetrations. Even minor damage to valley flashings, apron flashings or step flashings can allow water to bypass the main roof surface and enter the building envelope. Flashings are often the first component to fail during high winds.",
      ],
      bullets: [
        "Dented, split or detached gutter sections along the roofline",
        "Downpipes that have pulled away from brackets or wall mounts",
        "Bent or missing flashing around chimneys, skylights and wall junctions",
        "Debris buildup in gutters that prevents proper drainage during storms",
      ],
    },
    {
      id: "interior-warning-signs",
      heading: "Interior Warning Signs: Water Stains and Ceiling Damage",
      paragraphs: [
        "Some of the most serious storm damage is only visible from inside your home. Water stains on ceilings or walls are a clear sign that moisture has penetrated the roof and is tracking through the insulation or along structural timbers. These stains may appear days after the storm as water slowly migrates through the roof cavity.",
        "Check your ceiling for discolouration, sagging plasterboard or peeling paint. In severe cases you may notice actual dripping or pooling water during or immediately after rain. Do not ignore minor stains — they indicate an active leak that will worsen over time and can lead to mould growth and structural rot.",
      ],
      bullets: [
        "Brown or yellow staining on ceiling plasterboard or cornices",
        "Peeling or bubbling paint on ceilings near external walls",
        "Sagging or drooping ceiling sections that indicate water pooling above",
        "Damp or wet insulation visible in the roof space after storms",
      ],
    },
    {
      id: "hail-vs-wind-damage",
      heading: "Hail Damage vs Wind Damage: Key Differences",
      paragraphs: [
        "Hailstorms and wind events cause distinct types of roof damage. Hail produces circular dents or dimples on metal roofs and can crack or shatter tiles on contact. The severity depends on hailstone size — anything above 2cm diameter is considered large enough to cause significant damage to most roofing materials in Sydney.",
        "Wind damage is characterised by lifting, tearing or displacement of roofing materials. Strong winds can peel back metal sheets starting from edges, lift entire rows of tiles, or rip off ridge capping. Wind damage is often concentrated on the windward side of the roof and around corners where wind speed increases due to building geometry.",
      ],
      bullets: [
        "Hail: circular dents in metal, cracked or broken tiles, damaged skylights",
        "Wind: lifted sheets, missing tiles, torn sarking visible from inside",
        "Combination events: hail followed by wind can cause multiple failure points",
        "Age matters: older roofs with brittle tiles or corroded fasteners fail faster",
      ],
    },
    {
      id: "when-to-call-a-professional",
      heading: "When to Call a Professional Roof Inspector",
      paragraphs: [
        "While you can spot obvious damage from the ground, a thorough post-storm inspection requires getting on the roof. This is dangerous without proper equipment and training. In NSW, any work at height above 2 metres requires fall protection under workplace health and safety regulations. For homeowners, this means calling a licensed roofing contractor for a detailed assessment.",
        "Professional inspectors can identify hidden damage such as cracked battens, torn sarking, and minor leaks that will worsen over time. They can also provide a written report for insurance purposes. Most reputable roofing companies in Sydney offer free storm damage inspections and can liaise directly with your insurer if repairs are needed.",
      ],
      bullets: [
        "Call a roofer within 48 hours of any severe storm or hail event",
        "Never climb on a wet or damaged roof without fall protection equipment",
        "Request a written inspection report with photos for your insurance claim",
        "Choose a licensed contractor who is experienced with insurance assessments",
      ],
    },
    {
      id: "insurance-and-repairs",
      heading: "Insurance Claims and Repair Process",
      paragraphs: [
        "Most home and contents insurance policies in New South Wales cover sudden storm damage including hail, wind and rain ingress. However, you must report the damage promptly — many insurers have strict timeframes for lodging claims after a weather event. Take photos of all visible damage both inside and outside before making any temporary repairs.",
        "Your insurer will typically send an assessor to inspect the damage and provide a scope of works. This is where having your own independent roofing report is valuable. Some assessors underestimate the extent of damage, particularly hidden issues like torn sarking or damaged battens. A good roofing contractor can negotiate on your behalf to ensure all necessary repairs are covered.",
      ],
      bullets: [
        "Lodge your insurance claim within 48-72 hours of discovering damage",
        "Document everything with photos, videos and dated notes",
        "Obtain quotes from licensed roofing contractors for comparison",
        "Understand your policy excess and coverage limits before proceeding with repairs",
      ],
    },
  ],

  testimonial: {
    name: "Rebecca M.",
    location: "Castle Hill, Sydney",
    quote: "After a massive hailstorm we had no idea how bad the roof damage was until Sydney Roofing came out for a free inspection. They found cracked tiles and damaged flashings we would have missed. The insurance claim went smoothly thanks to their detailed report.",
    rating: 5,
  },

  cta: {
    heading: "Concerned About Storm Damage?",
    text: "Get a free roof inspection from our qualified team. We service all Sydney suburbs and provide detailed reports for insurance claims. Do not wait until small damage becomes a major leak.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["storm damage", "roof inspection", "hail damage", "sydney storms"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
