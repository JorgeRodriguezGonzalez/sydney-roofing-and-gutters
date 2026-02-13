// src/content/guides/guides.ts
// Central registry for Guide pages.
//
// NOTE: This file intentionally uses `any` for config/content shapes so it can
// plug into your existing GuideTemplate implementation without strict coupling.

export type GuideData = {
  config: any;
  content: any;
};

const DEFAULT_GEO = {
  areaName: "Sydney",
  areaSlug: "sydney",
  state: "NSW",
  country: "Australia",
  latitude: "-33.8688",
  longitude: "151.2093",
};

const GUIDES: Record<string, GuideData> = {
  "what-is-roof-sarking": {
    config: {
      guideName: "What is Roof Sarking?",
      guideSlug: "what-is-roof-sarking",
      path: "/guides/what-is-roof-sarking/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "ROOF SARKING",
        titleBottom: "What it is & why it matters",
        bullets: [
          "Improve weather protection and reduce dust ingress",
          "Boost thermal performance under your roof",
          "Help manage condensation in Sydney’s changing conditions",
        ],
      },
      intro: {
        heading: "Roof sarking explained (in plain English)",
        paragraphs: [
          "Roof sarking is a flexible membrane installed under roof coverings. In most homes it sits over the rafters/trusses and beneath tiles or metal sheets, acting as a secondary layer of protection.",
          "In Sydney, where roofs can see hot sun, driving rain, and salty coastal air, sarking can help improve comfort and resilience—especially when paired with good ventilation and proper installation.",
        ],
      },
      sections: {
        items: [
          {
            heading: "What roof sarking does",
            paragraphs: [
              "Think of sarking as a ‘backup skin’ under your roof. It can help shed wind-driven moisture that gets past the outer roof covering, and it can also reduce dust and ember ingress depending on the product type.",
              "Some sarking products are reflective, which can improve thermal performance when there’s an appropriate air gap and the roof system is designed correctly.",
            ],
            bullets: [
              "Secondary weather barrier (helps with wind-driven rain)",
              "Dust/dirty air reduction through the roof void",
              "Potential thermal benefits (product + installation dependent)",
            ],
          },
          {
            heading: "Types of sarking you’ll see",
            paragraphs: [
              "Most commonly you’ll encounter breathable (vapour permeable) membranes and reflective foil laminates. The right option depends on roof type (tile vs metal), insulation strategy, and ventilation.",
              "A professional roofer will consider condensation risk, climate exposure, and how the entire roof system works together—not just the membrane.",
            ],
            bullets: [
              "Breathable membranes (vapour permeable)",
              "Reflective foil laminates (often used for radiant heat control)",
              "Bushfire-rated options for specific requirements",
            ],
          },
          {
            heading: "Common installation mistakes to avoid",
            paragraphs: [
              "Sarking performance is heavily influenced by installation quality. Tears, poor overlaps, and incorrect taping can let water track into areas you’re trying to protect.",
              "It’s also critical to maintain drainage paths and keep weep paths/ventilation clear so moisture doesn’t get trapped.",
            ],
            bullets: [
              "Insufficient overlaps or untaped joins",
              "Tears/holes left unrepaired",
              "Blocking ventilation/weep paths",
            ],
          },
          {
            heading: "When you should consider adding sarking",
            paragraphs: [
              "If you’re re-roofing, restoring, or replacing insulation, it’s often the best time to upgrade the underlay. Older roofs may have damaged or missing underlay that no longer performs.",
              "For coastal suburbs or exposed sites, adding or upgrading sarking can be a practical resilience improvement.",
            ],
          },
        ],
      },
      faq: {
        heading: "Roof sarking FAQs",
        items: [
          {
            q: "Is roof sarking required in NSW?",
            a: "Requirements vary by roof type, bushfire zone, and project scope. A licensed roofer can confirm what applies to your property and upgrade recommendations.",
          },
          {
            q: "Does sarking stop leaks?",
            a: "It can help manage wind-driven moisture, but it doesn’t replace good flashing, correct roof fall, and watertight detailing. Leaks should be diagnosed and repaired at the source.",
          },
          {
            q: "Can you install sarking on an existing tiled roof?",
            a: "It’s usually easiest during re-roofing/restoration. Retrofitting under existing tiles can be complex and may not be cost-effective depending on access and condition.",
          },
          {
            q: "Is foil sarking the same as insulation?",
            a: "No. Foil can help reflect radiant heat when installed correctly, but it’s not a substitute for bulk insulation like batts.",
          },
          {
            q: "How do I know if my sarking is damaged?",
            a: "Signs include recurring ceiling stains, damp roof void areas, and visible tears or dislodged underlay during an inspection.",
          },
        ],
      },
      cta: {
        heading: "Not sure if your roof has the right underlay?",
        text: "Book an inspection and we’ll check your roof system, flashing, ventilation, and underlay condition—then recommend the most practical fix.",
        buttonText: "GET A QUOTE",
        buttonHref: "/contact/",
      },
    },
  },

  "what-is-a-skillion-roof": {
    config: {
      guideName: "What is a Skillion Roof?",
      guideSlug: "what-is-a-skillion-roof",
      path: "/guides/what-is-a-skillion-roof/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "SKILLION ROOF",
        titleBottom: "Single-slope roof design",
        bullets: [
          "Modern look for extensions and renovations",
          "Great for solar and rainwater runoff planning",
          "Needs correct fall, flashing and drainage",
        ],
      },
      intro: {
        heading: "What a skillion roof is",
        paragraphs: [
          "A skillion roof is a single, continuous roof plane that slopes in one direction. It’s common in modern designs and can be ideal for additions where you want a simple, clean roofline.",
          "Because all the water drains to one side, design details like gutters, downpipes, overflow, and flashing become especially important.",
        ],
      },
      sections: {
        items: [
          {
            heading: "Why people choose skillion roofs",
            paragraphs: [
              "They’re visually modern, can create higher internal ceilings, and make it easy to orient a roof for solar PV.",
              "They can also be cost-effective structurally in some builds due to their simplicity.",
            ],
            bullets: [
              "Modern aesthetic",
              "Potentially more natural light/ceiling height",
              "Solar-friendly orientation",
            ],
          },
          {
            heading: "Key design considerations",
            paragraphs: [
              "The roof pitch (fall) must be appropriate for the chosen material (metal or tile). Low-pitch roofs require extra attention to seams, laps, and waterproofing details.",
              "Because water concentrates at the low edge, drainage capacity is critical—especially in heavy rain.",
            ],
            bullets: [
              "Correct pitch for the roof covering",
              "High-capacity gutters/downpipes on the low side",
              "Robust flashings at the high side and wall junctions",
            ],
          },
          {
            heading: "Common problems (and how to prevent them)",
            paragraphs: [
              "Most issues come from poor detailing at junctions: wall flashings, parapets, and penetrations (vents, skylights).",
              "Use a roofer who understands low-slope detailing and ensures overflow and maintenance access are considered.",
            ],
          },
          {
            heading: "Best materials for a skillion roof",
            paragraphs: [
              "Metal roofing is popular for skillion roofs because it performs well on a wide range of pitches and can be detailed cleanly. Tiles can work too, but the pitch requirements are often higher.",
            ],
            bullets: ["Metal roofing (often best for modern skillions)", "Tiles (when pitch + detailing allow)"],
          },
        ],
      },
      faq: {
        heading: "Skillion roof FAQs",
        items: [
          {
            q: "Are skillion roofs good for heavy rain?",
            a: "Yes—if they’re designed with adequate fall, drainage capacity, and correct flashing. Poor detailing is what usually causes problems.",
          },
          {
            q: "Can you put tiles on a skillion roof?",
            a: "Sometimes. It depends on the tile type and required minimum pitch. Your roofer can confirm what’s suitable.",
          },
          {
            q: "Do skillion roofs need more gutters?",
            a: "Not more gutters—just the right size and downpipe capacity on the low side, plus overflow planning.",
          },
          {
            q: "Are skillion roofs more expensive?",
            a: "Not necessarily. The structure can be simple, but junction detailing and drainage design need to be done properly.",
          },
          {
            q: "What’s the ideal pitch?",
            a: "It depends on material and profile. Always follow manufacturer specs and Australian Standards for the system.",
          },
        ],
      },
      cta: {
        heading: "Planning a modern extension?",
        text: "We can assess your design, recommend the best roofing system, and quote installation with the right flashing and drainage details.",
        buttonText: "GET A QUOTE",
        buttonHref: "/contact/",
      },
    },
  },

  "what-is-a-roof-truss": {
    config: {
      guideName: "What is a Roof Truss?",
      guideSlug: "what-is-a-roof-truss",
      path: "/guides/what-is-a-roof-truss/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "ROOF TRUSSES",
        titleBottom: "How they support your roof",
        bullets: [
          "Pre-engineered frames that carry roof loads",
          "Different truss types suit different spans",
          "Avoid DIY changes—structural risks",
        ],
      },
      intro: {
        heading: "Roof trusses: the structural ‘skeleton’",
        paragraphs: [
          "A roof truss is a triangulated framework (usually timber or steel) that supports the roof covering and transfers loads to the walls. Many modern Australian homes use prefabricated trusses because they’re efficient and engineered for specific spans and loads.",
          "Because trusses are engineered components, cutting, drilling, or altering them without advice can compromise structural integrity.",
        ],
      },
      sections: {
        items: [
          {
            heading: "Common truss types",
            paragraphs: [
              "There are many truss profiles—each suited to different roof shapes, spans, and internal layouts. Your building design and load requirements drive the choice.",
            ],
            bullets: ["Fink", "Pratt", "Howe", "Hip", "Scissor"],
          },
          {
            heading: "How trusses differ from rafters",
            paragraphs: [
              "Rafters are individual sloping members that form a roof frame on site. Trusses are pre-assembled frames that can span longer distances and are installed as a set.",
              "Both can perform well—what matters is correct design, bracing, and installation.",
            ],
          },
          {
            heading: "Signs of truss issues",
            paragraphs: [
              "Most truss problems relate to moisture ingress, movement, or incorrect modifications. If you notice sagging lines, cracks, or unusual roof movement, book an inspection.",
            ],
            bullets: [
              "Visible sagging/ridge dips",
              "Cracking around ceilings/cornices",
              "Water damage or mould in the roof void",
            ],
          },
          {
            heading: "What’s safe to do (and what isn’t)",
            paragraphs: [
              "It’s usually fine to add light items that don’t load the truss (e.g. small cables) but anything that changes load paths—like removing webs or hanging heavy storage—should be assessed by a professional.",
            ],
          },
        ],
      },
      faq: {
        heading: "Roof truss FAQs",
        items: [
          {
            q: "Can I cut a truss to install a skylight?",
            a: "Not without engineering advice. Skylights can be installed, but the opening must be framed and loads redistributed correctly.",
          },
          {
            q: "Are steel trusses better than timber?",
            a: "Each has pros/cons. Steel is dimensionally stable and termite resistant; timber is common and cost-effective. Engineering and installation quality matter most.",
          },
          {
            q: "Can trusses sag over time?",
            a: "They can if overloaded, water-damaged, or incorrectly braced. Inspection helps identify the cause.",
          },
          {
            q: "Do trusses affect roof ventilation?",
            a: "They can influence airflow paths in the roof void, but ventilation design is usually addressed via vents and clear air channels.",
          },
          {
            q: "Who can assess truss damage?",
            a: "A licensed roofer can inspect for moisture/roof causes, and an engineer can assess structural remediation where needed.",
          },
        ],
      },
      cta: {
        heading: "Worried about roof movement or moisture damage?",
        text: "We’ll inspect the roof covering, flashings, and the roof void to identify what’s causing movement or deterioration.",
        buttonText: "BOOK AN INSPECTION",
        buttonHref: "/contact/",
      },
    },
  },

  "what-type-of-roof-lasts-the-longest": {
    config: {
      guideName: "What Type of Roof Lasts the Longest?",
      guideSlug: "what-type-of-roof-lasts-the-longest",
      path: "/guides/what-type-of-roof-lasts-the-longest/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "LONGEST-LASTING ROOFS",
        titleBottom: "Materials, lifespan & maintenance",
        bullets: [
          "Material lifespan varies by exposure and upkeep",
          "Maintenance often matters as much as material",
          "Get the right system for Sydney’s conditions",
        ],
      },
      intro: {
        heading: "Choosing a roof for longevity",
        paragraphs: [
          "‘Longest lasting’ isn’t a single answer—roof lifespan depends on material, installation quality, ventilation, nearby trees, coastal exposure, and how often the roof is maintained.",
          "Below is a practical comparison to help you choose a roofing system that holds up well in Sydney and NSW conditions.",
        ],
      },
      sections: {
        items: [
          {
            heading: "Typical lifespan by roofing material",
            paragraphs: [
              "As a general guide, premium metal roofing and well-maintained tiles can offer long service life. Slate and specialty systems can last even longer but may have higher upfront costs and specific structural needs.",
              "Always check product specifications, warranties, and suitability for your roof pitch and exposure.",
            ],
            bullets: [
              "Metal (Colorbond/standing seam): long lifespan with correct installation & maintenance",
              "Concrete/clay tiles: long lifespan, but individual tiles may crack and bedding/pointing ages",
              "Slate: very long lifespan (specialist install/structure)",
            ],
          },
          {
            heading: "What shortens roof life",
            paragraphs: [
              "Coastal salt air, blocked gutters, poor ventilation, and unsealed penetrations are common lifespan killers. Even a great material fails early if details are wrong.",
            ],
            bullets: [
              "Salt exposure + neglected maintenance",
              "Debris build-up and standing water",
              "Poor flashing/valley detailing",
              "Lack of ventilation causing condensation",
            ],
          },
          {
            heading: "How to make any roof last longer",
            paragraphs: [
              "Regular inspections, prompt leak repairs, and keeping drainage clear are the highest ROI actions. Maintenance is cheaper than restoration.",
            ],
            bullets: [
              "Inspect annually (and after major storms)",
              "Clean gutters and valleys",
              "Repair small issues early",
              "Maintain coatings/paint where applicable",
            ],
          },
          {
            heading: "What to choose for your home",
            paragraphs: [
              "If you want low weight and modern aesthetics, metal is often a strong choice. If you prefer classic appearance and thermal mass, tiles may suit—just plan for periodic re-pointing and cracked tile replacement.",
              "We can inspect your current roof and recommend the best long-term path: repair, restore, or re-roof.",
            ],
          },
        ],
      },
      faq: {
        heading: "Roof lifespan FAQs",
        items: [
          {
            q: "Is metal roofing always the longest lasting?",
            a: "Not always—lifespan depends on quality, exposure, and maintenance. A well-installed tile roof can also last a long time.",
          },
          {
            q: "Does roof painting extend life?",
            a: "It can, when used as part of a proper restoration process (repairs, prep, priming, correct coatings).",
          },
          {
            q: "How often should I inspect my roof?",
            a: "At least yearly, and after severe storms or if you notice signs like stains or rust.",
          },
          {
            q: "What’s better near the coast?",
            a: "Coastal sites need corrosion-aware material choices and more frequent maintenance. We can advise based on your suburb and exposure.",
          },
          {
            q: "When is re-roofing better than repair?",
            a: "If the roof has widespread deterioration, repeated leaks, or the covering is at end-of-life, re-roofing can be more cost-effective long term.",
          },
        ],
      },
      cta: {
        heading: "Want the longest-lasting option for your suburb?",
        text: "Tell us your roof type and location and we’ll recommend the most durable system for your exposure and budget.",
        buttonText: "GET A QUOTE",
        buttonHref: "/contact/",
      },
    },
  },

  "how-often-roof-inspections-should-be-conducted": {
    config: {
      guideName: "How Often Roof Inspections Should Be Conducted",
      guideSlug: "how-often-roof-inspections-should-be-conducted",
      path: "/guides/how-often-roof-inspections-should-be-conducted/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "ROOF INSPECTIONS",
        titleBottom: "How often & what to check",
        bullets: [
          "Catch small issues before they become leaks",
          "Annual checks + after major storms",
          "Photos + report so you can plan repairs",
        ],
      },
      intro: {
        heading: "How often should you inspect your roof?",
        paragraphs: [
          "For most Sydney homes, a roof inspection at least once a year is a sensible baseline—plus an additional check after severe storms, hail, or high winds.",
          "Older roofs, coastal properties, and homes with lots of surrounding trees often benefit from more frequent inspections.",
        ],
      },
      sections: {
        items: [
          {
            heading: "Recommended inspection schedule",
            paragraphs: [
              "A simple schedule helps prevent surprise leaks and reduces long-term costs.",
            ],
            bullets: [
              "Annually (general condition check)",
              "After major storms or extreme wind/rain events",
              "Before buying/selling a home",
              "Before/after installing solar or roof penetrations",
            ],
          },
          {
            heading: "What a good inspection includes",
            paragraphs: [
              "A thorough inspection looks at the roof covering, flashings, valleys, gutters, downpipes, penetrations, and signs of moisture in the roof void.",
              "You should receive clear photos and practical recommendations (repair vs maintenance vs restoration).",
            ],
          },
          {
            heading: "Warning signs that mean ‘inspect now’",
            paragraphs: [
              "Don’t wait for a major leak—these signs usually show a developing issue.",
            ],
            bullets: [
              "Ceiling stains or bubbling paint",
              "Rust lines on metal roofing",
              "Cracked or missing tiles",
              "Overflowing gutters or water marks on fascia",
              "Mouldy smell in the roof void",
            ],
          },
          {
            heading: "DIY checks you can do safely",
            paragraphs: [
              "You can do ground-level visual checks and keep gutters clear, but avoid walking on roofs—especially tiles. Professional roof access is safer and more complete.",
            ],
          },
        ],
      },
      faq: {
        heading: "Roof inspection FAQs",
        items: [
          {
            q: "Is one inspection per year enough?",
            a: "Often yes. But coastal exposure, heavy tree coverage, or an older roof may justify more frequent checks.",
          },
          {
            q: "Should I inspect after every storm?",
            a: "After significant storms, yes—especially if you noticed debris, leaks, or unusual roof noise.",
          },
          {
            q: "Can I inspect the roof myself?",
            a: "You can do a basic visual check from the ground. Avoid climbing onto the roof for safety and to prevent tile damage.",
          },
          {
            q: "What’s typically found in inspections?",
            a: "Common findings include small flashing gaps, cracked tiles, blocked valleys/gutters, and sealant deterioration around penetrations.",
          },
          {
            q: "Do you provide a report?",
            a: "A good roofer should provide photos and clear recommendations so you can prioritise repairs.",
          },
        ],
      },
      cta: {
        heading: "Book a roof inspection",
        text: "We’ll inspect your roof, identify risks, and recommend the most cost-effective fixes before issues escalate.",
        buttonText: "BOOK NOW",
        buttonHref: "/contact/",
      },
    },
  },

  "how-to-clean-and-maintain-metal-roofs": {
    config: {
      guideName: "How to Clean and Maintain Metal Roofs",
      guideSlug: "how-to-clean-and-maintain-metal-roofs",
      path: "/guides/how-to-clean-and-maintain-metal-roofs/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "METAL ROOF CARE",
        titleBottom: "Cleaning & maintenance",
        bullets: [
          "Keep debris off to avoid corrosion",
          "Rinse salt/contaminants in coastal areas",
          "Inspect flashings, screws, and sealants",
        ],
      },
      intro: {
        heading: "Why metal roof maintenance matters",
        paragraphs: [
          "Metal roofs are durable, but they still need routine cleaning and inspection—especially around gutters, valleys, and penetrations where debris and moisture collect.",
          "Simple maintenance helps preserve coatings, reduce corrosion risk, and prevent leaks.",
        ],
      },
      sections: {
        items: [
          {
            heading: "How often should you clean a metal roof?",
            paragraphs: [
              "A good baseline is a yearly clean and inspection. Coastal homes or roofs under heavy tree cover often need more frequent attention.",
            ],
            bullets: [
              "Yearly general clean",
              "Every 6–12 months in coastal/exposed zones",
              "After storms or heavy leaf drop",
            ],
          },
          {
            heading: "Safe cleaning steps (high-level)",
            paragraphs: [
              "Safety first—avoid walking on wet metal roofs. If you do any DIY cleaning, stick to safe ground-level rinsing where possible and leave roof access to professionals.",
              "Most maintenance involves removing debris from gutters/valleys and rinsing contaminants with low-pressure water.",
            ],
            bullets: [
              "Clear gutters, valleys, and leaf guards",
              "Rinse with low pressure (avoid blasting seams)",
              "Check for rust spots and coating wear",
              "Inspect sealants around penetrations",
            ],
          },
          {
            heading: "What to avoid",
            paragraphs: [
              "High-pressure washing and harsh chemicals can damage coatings and force water into laps or fastener points.",
            ],
            bullets: [
              "High-pressure washing on seams/laps",
              "Abrasive pads that scratch coatings",
              "Strong acids/alkalis without guidance",
            ],
          },
          {
            heading: "When to call a roofer",
            paragraphs: [
              "If you see rust, loose flashings, persistent leaks, or fastener issues, it’s time for a professional inspection and targeted repairs.",
            ],
          },
        ],
      },
      faq: {
        heading: "Metal roof maintenance FAQs",
        items: [
          {
            q: "Can I pressure wash a metal roof?",
            a: "It’s usually not recommended. High pressure can damage coatings and force water into laps or around fixings.",
          },
          {
            q: "How do I treat small rust spots?",
            a: "Rust needs proper prep and compatible coating systems. A roofer can advise the right repair approach for your roof profile.",
          },
          {
            q: "Does coastal salt really matter?",
            a: "Yes. Salt accelerates corrosion risk, so regular rinsing/cleaning is important in coastal suburbs.",
          },
          {
            q: "How do I know if sealants are failing?",
            a: "Look for cracking, gaps, or repeat leaks around penetrations and flashings.",
          },
          {
            q: "What maintenance extends metal roof life most?",
            a: "Keeping drainage clear, addressing rust early, and maintaining flashings/sealants.",
          },
        ],
      },
      cta: {
        heading: "Need a safe, professional roof clean?",
        text: "We can clean, inspect, and repair your metal roof to keep it looking good and performing for years.",
        buttonText: "GET A QUOTE",
        buttonHref: "/contact/",
      },
    },
  },

  "how-long-do-concrete-roof-tiles-last": {
    config: {
      guideName: "How Long Do Concrete Roof Tiles Last?",
      guideSlug: "how-long-do-concrete-roof-tiles-last",
      path: "/guides/how-long-do-concrete-roof-tiles-last/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "CONCRETE TILES",
        titleBottom: "Lifespan & upkeep",
        bullets: [
          "Tiles can last decades with maintenance",
          "Pointing, bedding and valleys age sooner",
          "Cracked tiles should be replaced early",
        ],
      },
      intro: {
        heading: "Concrete tile roof lifespan",
        paragraphs: [
          "Concrete roof tiles are known for durability, but the ‘roof system’ includes more than tiles: sarking/underlay, valleys, flashings, ridges, bedding/pointing, and gutters.",
          "Often the supporting components need attention before the tiles themselves reach end-of-life.",
        ],
      },
      sections: {
        items: [
          {
            heading: "What lasts longest (and what wears out first)",
            paragraphs: [
              "Tiles can last a long time, but ridge capping mortar (bedding/pointing) and valleys often deteriorate earlier due to movement and water flow.",
            ],
            bullets: [
              "Tiles: long lifespan",
              "Bedding/pointing: may need renewal sooner",
              "Valleys/flashings: common early failure points",
            ],
          },
          {
            heading: "Factors that reduce tile roof lifespan",
            paragraphs: [
              "Tree debris, poor drainage, and repeated foot traffic can crack tiles or cause water to back up. Coastal exposure can also accelerate metal component wear.",
            ],
            bullets: [
              "Blocked gutters/valleys",
              "Cracked/slipped tiles left unrepaired",
              "Poor ventilation or underlay issues",
              "Storm damage",
            ],
          },
          {
            heading: "Maintenance checklist",
            paragraphs: [
              "Small maintenance tasks prevent large repair bills. Prioritise drainage and roof penetrations.",
            ],
            bullets: [
              "Replace cracked/slipped tiles",
              "Re-bed/re-point ridges when failing",
              "Keep valleys/gutters clear",
              "Check flashings around skylights/vents",
            ],
          },
          {
            heading: "Repair, restore or re-roof?",
            paragraphs: [
              "If tiles are generally sound, targeted repairs and restoration can extend life. If widespread deterioration exists (multiple recurring leaks, failing valleys, widespread cracking), re-roofing may be more practical.",
            ],
          },
        ],
      },
      faq: {
        heading: "Concrete tile FAQs",
        items: [
          {
            q: "Do tiles wear out or just the pointing?",
            a: "Often the pointing/bedding and valleys fail before tiles. But tiles can still crack or become porous over time.",
          },
          {
            q: "Can you paint concrete tiles?",
            a: "Yes as part of a proper restoration process with the right coatings and prep. It’s not just ‘paint on top’.",
          },
          {
            q: "Is it safe to walk on a tile roof?",
            a: "Tile roofs can crack under foot traffic. Professional access is safer and reduces damage risk.",
          },
          {
            q: "What causes tiles to slip?",
            a: "Fixing deterioration, storm impact, and movement over time can cause displacement.",
          },
          {
            q: "How do I know if my tile roof needs restoration?",
            a: "Recurring leaks, cracked ridge pointing, widespread moss, and visible valley deterioration are common indicators.",
          },
        ],
      },
      cta: {
        heading: "Need a tile roof health check?",
        text: "We can inspect your tiles, ridges, valleys and underlay, then recommend repairs or restoration.",
        buttonText: "BOOK AN INSPECTION",
        buttonHref: "/contact/",
      },
    },
  },

  "how-many-roof-vents-should-i-have": {
    config: {
      guideName: "How Many Roof Vents Should I Have?",
      guideSlug: "how-many-roof-vents-should-i-have",
      path: "/guides/how-many-roof-vents-should-i-have/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "ROOF VENTILATION",
        titleBottom: "How many vents?",
        bullets: [
          "Ventilation reduces heat and condensation risk",
          "Balanced intake + exhaust matters",
          "The ‘right number’ depends on roof size and design",
        ],
      },
      intro: {
        heading: "Roof ventilation isn’t one-size-fits-all",
        paragraphs: [
          "The number of roof vents you need depends on roof area, ceiling insulation, roof pitch, and how air can enter and exit the roof void.",
          "Good design usually aims for balanced airflow: intake (eaves/soffit) + exhaust (ridge/whirly/tile vents), with clear air paths.",
        ],
      },
      sections: {
        items: [
          {
            heading: "Why ventilation matters",
            paragraphs: [
              "Ventilation helps reduce excessive roof-void heat in summer and can reduce condensation risk in cooler periods—protecting timber and insulation.",
            ],
            bullets: [
              "Improves comfort and HVAC efficiency",
              "Reduces moisture build-up",
              "Helps protect insulation performance",
            ],
          },
          {
            heading: "What influences the ‘right number’",
            paragraphs: [
              "Roof size, layout complexity, and insulation levels influence vent sizing. The goal is enough net free vent area and a clear flow path.",
            ],
            bullets: [
              "Roof area and ceiling volume",
              "Number of hips/valleys and sections",
              "Insulation type and placement",
              "Local climate and exposure",
            ],
          },
          {
            heading: "Common vent types",
            paragraphs: [
              "Different vents suit different roofs. A roofer will consider aesthetics, performance, and compatibility.",
            ],
            bullets: ["Ridge vents", "Whirlybirds", "Tile vents", "Soffit/eave vents"],
          },
          {
            heading: "Signs your roof needs better ventilation",
            paragraphs: [
              "Hot rooms, mould smells, and damp insulation can point to ventilation issues, but a roofer should confirm the cause.",
            ],
            bullets: [
              "Excessive roof-void heat",
              "Condensation or mould",
              "Damp insulation",
              "Premature timber deterioration",
            ],
          },
        ],
      },
      faq: {
        heading: "Roof vent FAQs",
        items: [
          {
            q: "Do more vents always help?",
            a: "Not always. You need balanced intake and exhaust, and clear airflow paths. Too many exhaust vents without intake can be ineffective.",
          },
          {
            q: "Are whirlybirds enough?",
            a: "They can help, but results depend on roof layout and intake ventilation. A balanced system usually performs best.",
          },
          {
            q: "Can ventilation stop condensation?",
            a: "It can reduce risk, but insulation, air sealing, and moisture sources also matter.",
          },
          {
            q: "Will vents create leaks?",
            a: "Not when installed correctly with proper flashing and compatible products.",
          },
          {
            q: "How do you size vents?",
            a: "By roof geometry and required vent area. We can assess your roof and recommend the right setup.",
          },
        ],
      },
      cta: {
        heading: "Want to optimise your roof ventilation?",
        text: "We can inspect your roof void and recommend a vent layout that suits your roof and insulation.",
        buttonText: "BOOK AN INSPECTION",
        buttonHref: "/contact/",
      },
    },
  },

  "how-much-does-tile-roof-repair-cost": {
    config: {
      guideName: "How Much Does Tile Roof Repair Cost?",
      guideSlug: "how-much-does-tile-roof-repair-cost",
      path: "/guides/how-much-does-tile-roof-repair-cost/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "TILE ROOF REPAIR COST",
        titleBottom: "What affects price",
        bullets: [
          "Costs depend on access, damage scope, and roof complexity",
          "Small repairs are cheaper than recurring leaks",
          "Inspection first = accurate quote",
        ],
      },
      intro: {
        heading: "Tile roof repair cost in Sydney",
        paragraphs: [
          "Tile roof repair pricing varies widely because ‘repair’ can mean anything from replacing a few cracked tiles to rebuilding ridges, renewing valleys, or addressing underlay issues.",
          "The best way to avoid surprise costs is to start with an inspection so the scope is clear.",
        ],
      },
      sections: {
        items: [
          {
            heading: "What drives tile roof repair cost",
            paragraphs: [
              "Access, roof pitch, and roof height affect labour and safety requirements. Damage type and whether materials are readily available also matter.",
            ],
            bullets: [
              "Roof access and safety setup",
              "Number of tiles to replace",
              "Ridge capping bedding/pointing condition",
              "Valley/flashing repair requirements",
              "Underlying issues (underlay, structural movement)",
            ],
          },
          {
            heading: "Typical repair categories",
            paragraphs: [
              "Grouping repairs helps estimate scope even before an inspection.",
            ],
            bullets: [
              "Minor: replace a few cracked/slipped tiles",
              "Medium: localised ridge re-pointing, small valley repairs",
              "Major: widespread re-bedding/re-pointing, valley replacement, restoration",
            ],
          },
          {
            heading: "How to reduce long-term cost",
            paragraphs: [
              "Fixing small issues early (and keeping drainage clear) prevents water from spreading into ceiling/insulation and creating larger, more expensive damage.",
            ],
            bullets: [
              "Inspect annually",
              "Replace cracked tiles early",
              "Keep gutters/valleys clean",
              "Address flashing/penetration seals",
            ],
          },
          {
            heading: "When a restoration makes more sense",
            paragraphs: [
              "If your roof needs repeated repairs across multiple areas, a restoration can be more cost-effective than ongoing patchwork.",
            ],
          },
        ],
      },
      faq: {
        heading: "Tile repair cost FAQs",
        items: [
          {
            q: "Can you quote without inspecting?",
            a: "You can give a rough range, but accurate pricing needs an inspection because tile issues often hide underlying causes.",
          },
          {
            q: "Why are valleys expensive to repair?",
            a: "Valleys handle concentrated water flow and often require careful removal/resetting of tiles and precise flashing work.",
          },
          {
            q: "Is pointing repair a quick fix?",
            a: "It can help if the issue is isolated, but failing bedding/pointing often indicates broader ridge work is needed.",
          },
          {
            q: "Does insurance cover tile roof repair?",
            a: "It depends on the cause (storm damage vs wear-and-tear). Check your policy and document damage.",
          },
          {
            q: "What’s the fastest way to stop a leak?",
            a: "A temporary tarp can reduce water entry, but proper repair requires identifying the entry point and fixing flashings/tiles.",
          },
        ],
      },
      cta: {
        heading: "Want an accurate repair quote?",
        text: "Send photos or book an inspection and we’ll identify the cause and quote the right fix.",
        buttonText: "GET A QUOTE",
        buttonHref: "/contact/",
      },
    },
  },

  "how-to-stop-a-leaking-roof-during-heavy-rains": {
    config: {
      guideName: "How to Stop a Leaking Roof During Heavy Rains",
      guideSlug: "how-to-stop-a-leaking-roof-during-heavy-rains",
      path: "/guides/how-to-stop-a-leaking-roof-during-heavy-rains/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "STOP A ROOF LEAK",
        titleBottom: "During heavy rain",
        bullets: [
          "Prioritise safety—manage water inside first",
          "Use temporary protection until repairs",
          "Get a roofer to find the source and fix it",
        ],
      },
      intro: {
        heading: "Emergency steps (safe and practical)",
        paragraphs: [
          "During heavy rain, the goal is to reduce damage safely—not to perform risky roof work. Many ‘quick fixes’ fail because water can enter far from where it shows up inside.",
          "Use the steps below to manage damage and then book a professional repair once conditions are safe.",
        ],
      },
      sections: {
        items: [
          {
            heading: "Step 1: Control water inside",
            paragraphs: [
              "Move valuables, place buckets, and protect floors. If water is near lights, power points, or ceiling fittings, switch off power to the affected area and call an electrician if needed.",
            ],
            bullets: [
              "Buckets/towels to capture drips",
              "Protect furniture/electronics",
              "Turn off power if water is near electrical",
            ],
          },
          {
            heading: "Step 2: Reduce ceiling water load",
            paragraphs: [
              "If a ceiling is bulging from trapped water, it can collapse. A controlled release (with professional advice) may be safer than waiting—but only if you can do so safely and away from electrical hazards.",
            ],
          },
          {
            heading: "Step 3: Temporary external protection",
            paragraphs: [
              "Avoid climbing onto a wet roof. If safe access exists, a professional can install a tarp to reduce water entry until permanent repairs are completed.",
            ],
            bullets: [
              "Tarping is a temporary measure",
              "Do not use sealants as a ‘blind’ fix—can trap water",
              "Book a roofer as soon as conditions allow",
            ],
          },
          {
            heading: "Step 4: Permanent repair (after the storm)",
            paragraphs: [
              "A roofer will locate the true entry point and repair tiles/metal laps, flashings, valleys, gutters, or penetrations depending on the cause.",
            ],
          },
        ],
      },
      faq: {
        heading: "Leak emergency FAQs",
        items: [
          {
            q: "Why is the leak far from where water enters?",
            a: "Water can travel along rafters, battens, insulation, and ceilings before dripping. That’s why inspections focus on the source, not the drip point.",
          },
          {
            q: "Should I use roof sealant in the rain?",
            a: "Usually no. Wet conditions reduce adhesion and a ‘guess’ seal can trap water and worsen issues.",
          },
          {
            q: "Is tarping safe?",
            a: "It can be when done by professionals with correct safety equipment. Avoid DIY roof access during wet storms.",
          },
          {
            q: "What causes leaks in heavy rain specifically?",
            a: "Wind-driven rain, blocked gutters/valleys, failing flashings, and overflow at gutters are common causes.",
          },
          {
            q: "What should I photograph for a roofer/insurance?",
            a: "Take photos of internal damage, active drips, and external roof areas from the ground if possible.",
          },
        ],
      },
      cta: {
        heading: "Need emergency roof help?",
        text: "Contact us and we’ll prioritise urgent leak inspections and repairs as soon as conditions are safe.",
        buttonText: "CONTACT US",
        buttonHref: "/contact/",
      },
    },
  },

  "6-common-gutter-problems-and-how-to-fix-them": {
    config: {
      guideName: "6 Common Gutter Problems and How to Fix Them",
      guideSlug: "6-common-gutter-problems-and-how-to-fix-them",
      path: "/guides/6-common-gutter-problems-and-how-to-fix-them/",
      ...DEFAULT_GEO,
    },
    content: {
      hero: {
        eyebrow: "Roofing Guide",
        titleTop: "GUTTER PROBLEMS",
        titleBottom: "6 common issues + fixes",
        bullets: [
          "Most gutter damage starts with blocked flow",
          "Small fixes prevent fascia/ceiling damage",
          "Correct fall + downpipe capacity is key",
        ],
      },
      intro: {
        heading: "Why gutters matter more than people think",
        paragraphs: [
          "Gutters protect your roof edges, fascia, walls, and foundations by controlling where rainwater goes. When gutters overflow or leak, damage often shows up as rotting fascia, mould, and internal leaks.",
          "Below are six common gutter problems we see around Sydney—and what usually solves them.",
        ],
      },
      sections: {
        items: [
          {
            heading: "1) Blocked gutters and downpipes",
            paragraphs: [
              "Leaves and debris cause overflows, especially in storms. Regular cleaning (and leaf guards where appropriate) is the simplest prevention.",
            ],
          },
          {
            heading: "2) Incorrect gutter fall",
            paragraphs: [
              "If gutters don’t fall toward downpipes, water pools and overflows. Re-hanging with correct fall and bracket spacing fixes the root cause.",
            ],
          },
          {
            heading: "3) Leaking joints and corners",
            paragraphs: [
              "Sealants degrade over time. Repairs may involve re-sealing, replacing sections, or upgrading joint systems depending on gutter type.",
            ],
          },
          {
            heading: "4) Rust/corrosion (metal gutters)",
            paragraphs: [
              "Rust often starts where water sits—near debris build-up or damaged coatings. Treating early can extend life; advanced corrosion usually needs replacement.",
            ],
          },
          {
            heading: "5) Sagging gutters",
            paragraphs: [
              "Sagging is typically bracket failure, excessive debris weight, or fascia issues. Fixing brackets and checking fascia condition solves it.",
            ],
          },
          {
            heading: "6) Overflow during heavy rain",
            paragraphs: [
              "If gutters overflow even when clean, they may be undersized, have insufficient downpipes, or lack overflow provisions. A roofer can calculate capacity and recommend upgrades.",
            ],
          },
        ],
      },
      faq: {
        heading: "Gutter FAQs",
        items: [
          {
            q: "How often should gutters be cleaned?",
            a: "At least twice a year, and more often if you have overhanging trees or after storms.",
          },
          {
            q: "Do leaf guards solve everything?",
            a: "They help, but they still need maintenance. The right guard depends on your roof and debris type.",
          },
          {
            q: "Why do gutters overflow when they look clean?",
            a: "Often due to insufficient downpipe capacity, incorrect fall, or undersized gutters for the roof catchment.",
          },
          {
            q: "Can leaking gutters cause internal roof leaks?",
            a: "Yes. Overflow can push water back into eaves/roof edges and create ceiling damage.",
          },
          {
            q: "When should I replace instead of repair?",
            a: "When corrosion is widespread, gutters are repeatedly leaking, or fascia structure is compromised.",
          },
        ],
      },
      cta: {
        heading: "Need gutter repairs or upgrades?",
        text: "We can clean, repair, re-hang, or replace gutters and downpipes to stop overflows and leaks.",
        buttonText: "GET A QUOTE",
        buttonHref: "/contact/",
      },
    },
  },
};

export function getGuideConfig(slug: string): GuideData | undefined {
  const data = GUIDES[slug];
  if (!data) return undefined;

  const sectionsRaw: any = data.content?.sections;

  const sections = Array.isArray(sectionsRaw)
    ? sectionsRaw
    : sectionsRaw?.items ?? [];

  return {
    ...data,
    content: {
      ...data.content,
      sections,
    },
  };
}

export const guideSlugs = Object.keys(GUIDES);