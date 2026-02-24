import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Safely Inspect Your Roof After a Storm",
  slug: "how-to-safely-inspect-your-roof-after-a-storm",
  path: "/guides/how-to-safely-inspect-your-roof-after-a-storm/",
  description: "Learn how to safely inspect your roof for storm damage in Sydney. Includes what to look for, safety tips, when to call professionals and how to document damage for insurance claims.",
  keywords: "roof inspection after storm, storm damage roof, roof safety check, sydney storm damage, roof insurance claim",
  publishedISO: "2023-05-18",
  modifiedISO: "2026-01-29",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Safely Inspect Your Roof After a Storm",
    subheadline: "A practical guide for Sydney homeowners on checking your roof for storm damage, staying safe during inspections and knowing when to call in the professionals.",
    bullets: [
      "Learn safe inspection techniques without climbing onto the roof",
      "Identify common storm damage signs on tiles, metal and gutters",
      "Understand when DIY inspection is enough and when you need experts",
      "Document damage properly for insurance claims and repair quotes",
    ],
  },

  intro: {
    paragraphs: [
      "Sydney experiences its share of severe weather events, from summer hailstorms and intense downpours to wild spring winds. After a major storm, your roof may have sustained damage that is not immediately obvious from inside the house. Catching problems early prevents minor issues from turning into major leaks or structural damage.",
      "Many homeowners rush onto the roof with a ladder as soon as the weather clears, but this approach is both dangerous and often unnecessary. Most storm damage can be identified from ground level or with simple tools like binoculars. Knowing what to look for and when to call a professional protects both your safety and your home.",
      "This guide walks you through a systematic post-storm roof inspection that anyone can do, plus advice on documenting damage for insurance and choosing qualified roofers when repairs are needed. All recommendations align with Work Health and Safety regulations in New South Wales.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Most storm damage can be spotted from the ground using binoculars and a visual inspection of your property",
      "Never climb onto a wet or damaged roof — wait at least 24 hours after rain for surfaces to dry",
      "Photograph all damage from multiple angles and note the date and time for insurance purposes",
      "Contact a licensed roofer immediately if you see missing tiles, exposed sarking or water stains inside the ceiling",
    ],
  },

  sections: [
    {
      id: "ground-level-safety-first-inspection",
      heading: "Ground-Level Safety First Inspection",
      paragraphs: [
        "Start your inspection from the ground. Walk around the entire perimeter of your house and look up at the roof line from each side. Use binoculars to get a closer view without the risks associated with ladders or climbing. Check the ridges, valleys and eaves carefully as these areas are most vulnerable to wind uplift and water ingress.",
        "Look for obvious signs like missing or displaced tiles, bent metal sheeting, damaged ridge capping or debris caught in gutters. Check your yard and driveway for roof material — if you find tiles, screws or flashing pieces on the ground, that indicates something has come loose. Take note of overhanging branches that may have scraped or fallen on the roof during the storm.",
      ],
      bullets: [
        "Walk the perimeter and inspect all four sides of the roof with binoculars",
        "Note any missing, cracked or shifted tiles and metal sheets",
        "Check for debris in gutters and downpipes that could cause overflow",
        "Look for tree branches resting on or near the roof that need removal",
      ],
    },
    {
      id: "signs-of-damage-by-roof-type",
      heading: "Signs of Damage by Roof Type",
      paragraphs: [
        "Different roofing materials show storm damage in different ways. Terracotta and concrete tiles can crack from hail impact or shift out of position due to wind. Look for tiles that appear darker or misaligned compared to their neighbours. Metal roofs like Colorbond can dent from hail, develop scratches from fallen branches or lose fasteners if wind gets under the sheeting.",
        "For tile roofs, pay attention to the mortar bedding under ridge caps — it can crack and allow tiles to lift. On metal roofs, check the flashings around chimneys, vents and skylights as these are common weak points. Flat or low-pitch roofs may develop ponding or membrane tears that are harder to spot from ground level.",
      ],
      bullets: [
        "Tile roofs: check for cracks, chips, displaced tiles and broken ridge caps",
        "Metal roofs: look for dents, loose screws, bent flashings and panel movement",
        "All roofs: inspect valleys and penetrations where water concentrates",
        "Gutters: look for dents, sagging sections and disconnected downpipes",
      ],
    },
    {
      id: "interior-inspection-for-leaks",
      heading: "Interior Inspection for Leaks and Water Damage",
      paragraphs: [
        "Once you have checked the exterior, move inside and inspect your ceiling and roof space. Look for water stains, discolouration, bubbling paint or damp patches on ceilings and walls near the roofline. Even small brown rings indicate water has entered at some point, and the source may be higher up than where the stain appears.",
        "If you can safely access your roof cavity or attic, use a torch to inspect the underside of the roof. Look for light coming through gaps, wet insulation or damp timber. Check around chimneys, vents and skylights where flashings may have failed. Do this inspection in daylight so you can spot daylight penetrating through damage points.",
      ],
      bullets: [
        "Check all ceilings for water stains, discolouration or sagging plaster",
        "Inspect walls near the roofline for damp patches or peeling paint",
        "Enter the roof cavity with a torch and look for light penetration or wet insulation",
        "Note the location of any water damage to help roofers locate the source quickly",
      ],
    },
    {
      id: "when-to-call-a-professional",
      heading: "When to Call a Professional Roofer",
      paragraphs: [
        "Some damage is obvious and requires immediate professional attention. If you see missing tiles or sheets, exposed sarking, hanging gutters or active leaks inside the house, contact a licensed roofer straight away. Do not attempt temporary repairs yourself if it means getting on the roof — tarps and makeshift fixes often cause more harm than good if not installed correctly.",
        "Even if damage seems minor, it is worth getting a professional inspection after a significant storm event. Roofers can access the roof safely, identify hidden damage and provide a detailed report that supports insurance claims. In NSW, all roofing work above $5,000 must be performed by a licensed contractor, and insurance companies typically require qualified assessments.",
      ],
      bullets: [
        "Call immediately if tiles or sheets are missing or the roof structure is exposed",
        "Contact a roofer if you see active leaks, water stains or ceiling sagging",
        "Get a professional inspection if the storm was severe even without obvious damage",
        "Never attempt DIY repairs that involve climbing on a damaged or wet roof",
      ],
    },
    {
      id: "documenting-damage-for-insurance",
      heading: "Documenting Damage for Insurance Claims",
      paragraphs: [
        "Proper documentation is essential for successful insurance claims. Take clear photographs of all damage from multiple angles, including wide shots that show the entire roof and close-ups of specific problem areas. Capture images of any debris, fallen branches or material on the ground. Record the date and time of your inspection and note the date of the storm.",
        "Keep a written log describing each area of damage and any temporary measures you take to prevent further harm. If you contact a roofing contractor for an inspection, ask for a written report and quote that itemises the damage and repair costs. Most insurers require this level of detail to process claims efficiently.",
      ],
      bullets: [
        "Photograph all damage from ground level and from multiple angles",
        "Include date stamps on photos and note the storm date in your records",
        "Document any debris or roof material found on the ground",
        "Obtain a written inspection report from a licensed roofer for your insurer",
      ],
    },
    {
      id: "choosing-qualified-storm-damage-specialists",
      heading: "Choosing Qualified Storm Damage Specialists",
      paragraphs: [
        "After major weather events, unlicensed operators often appear offering quick cheap repairs. Always verify that your contractor holds a current NSW contractor licence and appropriate insurance. Check their licence number on the NSW Fair Trading website and ask for proof of public liability and workers compensation cover.",
        "Look for roofing companies with experience in storm damage assessment and insurance work. They should provide a detailed written quote, explain the scope of repairs and offer a workmanship warranty. Avoid contractors who demand large upfront payments or pressure you to sign immediately. Reputable businesses understand you need time to review quotes and speak with your insurer.",
      ],
      bullets: [
        "Verify the contractor holds a valid NSW contractor licence and insurance",
        "Choose companies with storm damage experience and good local references",
        "Get at least three written quotes that detail materials, labour and timeframes",
        "Avoid contractors who pressure you or ask for large deposits before starting work",
      ],
    },
  ],

  testimonial: {
    name: "Lisa M.",
    location: "Pymble, Sydney",
    quote: "After the big hailstorm last November we thought our roof was fine, but the ground inspection showed several cracked tiles. The team came out, provided a full report for insurance and repaired everything within the week.",
    rating: 5,
  },

  cta: {
    heading: "Need a Post-Storm Roof Inspection?",
    text: "Our licensed team provides thorough storm damage assessments across Sydney. We work directly with insurers and provide detailed reports to support your claim. Contact us for a free inspection and quote.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["storm damage", "roof inspection", "roof safety", "insurance claims"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
