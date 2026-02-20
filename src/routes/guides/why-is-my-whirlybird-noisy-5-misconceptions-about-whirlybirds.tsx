import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "Why Is My Whirlybird Noisy? 5 Misconceptions About Whirlybirds",
  slug: "why-is-my-whirlybird-noisy-5-misconceptions-about-whirlybirds",
  path: "/guides/why-is-my-whirlybird-noisy-5-misconceptions-about-whirlybirds/",
  description: "Discover why your whirlybird is making noise and debunk 5 common myths about roof ventilation turbines. Learn maintenance tips and when to replace whirlybirds in Sydney homes.",
  keywords: "whirlybird noise, noisy roof ventilator, whirlybird maintenance sydney, roof turbine repair, whirlybird misconceptions",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "Why Is My Whirlybird Noisy? 5 Misconceptions About Whirlybirds",
    subheadline: "The truth about noisy roof ventilation turbines and common myths that cost Sydney homeowners money every year.",
    bullets: [
      "Identify the exact cause of whirlybird noise and how to fix it quickly",
      "Learn which misconceptions about whirlybirds lead to poor decisions",
      "Understand when repair makes sense versus full replacement",
      "Discover how proper ventilation impacts your roof lifespan and comfort",
    ],
  },

  intro: {
    paragraphs: [
      "That rattling, squeaking or grinding noise coming from your roof is probably a whirlybird that needs attention. Roof ventilation turbines, commonly called whirlybirds, are designed to operate silently as they extract hot air from your roof cavity. When they start making noise, something has gone wrong and it will only get worse.",
      "Many Sydney homeowners put up with noisy whirlybirds for months or even years, often because they believe common myths about how these devices work. Others spend money on unnecessary replacements when a simple repair would have done the job. Understanding the real reasons behind whirlybird noise helps you fix the problem properly.",
      "We have repaired and replaced hundreds of whirlybirds across Sydney over the past decade. Most noise issues stem from a handful of common causes, and most can be resolved without replacing the entire unit if you catch them early enough.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what causes whirlybird noise",
    bullets: [
      "Worn bearings are the most common cause of squeaking, grinding or rattling sounds from whirlybirds",
      "A quality whirlybird turbine should last 10 to 15 years in Sydney conditions before needing replacement",
      "Repairing a noisy whirlybird costs between $150 and $300, while full replacement runs $350 to $600 installed",
      "Wind turbine ventilators require zero power to operate and can extract up to 2,000 cubic metres of air per hour in good conditions",
    ],
  },

  sections: [
    {
      id: "why-whirlybirds-make-noise",
      heading: "Why Your Whirlybird Is Making Noise",
      paragraphs: [
        "Whirlybirds spin on a central bearing assembly that allows the turbine head to rotate freely even in light wind. Over time, exposure to heat, moisture and dust degrades the bearing grease and allows metal-on-metal contact. This is when you start hearing squeaking or grinding noises. In coastal areas like the eastern suburbs and northern beaches, salt air accelerates this process significantly.",
        "Other noise sources include loose or damaged turbine blades that rattle in the wind, a bent shaft causing the turbine to wobble, or incorrect installation that leaves the base flashing loose. Sometimes debris like leaves or bird nests get caught in the turbine mechanism. Each of these issues produces a distinct sound that helps diagnose the problem.",
      ],
      bullets: [
        "Worn bearings produce a high-pitched squeak or grinding sound when the turbine spins",
        "Loose blades cause a rattling or clanking noise, especially in strong wind",
        "A bent shaft creates a rhythmic wobbling sound as the turbine rotates",
        "Debris caught in the mechanism causes irregular scraping or tapping noises",
      ],
    },
    {
      id: "misconception-one-they-need-wind",
      heading: "Misconception 1: Whirlybirds Only Work in Strong Wind",
      paragraphs: [
        "Many homeowners believe whirlybirds sit idle on calm days and only function when wind speeds are high. This is wrong. A properly designed roof turbine ventilator starts spinning in wind speeds as low as 5 to 10 kilometres per hour. On a typical Sydney day with light afternoon breezes, whirlybirds are working consistently to extract hot air from your roof cavity through natural convection.",
        "Even on completely still days, the temperature difference between your hot roof space and the outside air creates an updraft that causes some air movement through the turbine. While wind certainly increases extraction rates, whirlybirds provide ventilation benefits year-round regardless of wind conditions.",
      ],
      bullets: [
        "Turbines begin spinning in wind speeds as low as 5-10 km/h",
        "Natural convection moves hot air upward through the turbine even without wind",
        "A 300mm whirlybird extracts between 1,000 and 2,000 cubic metres per hour in moderate conditions",
        "Larger 600mm industrial models can extract up to 4,000 cubic metres per hour",
      ],
    },
    {
      id: "misconception-two-they-let-rain-in",
      heading: "Misconception 2: Whirlybirds Let Rain and Pests Into Your Roof",
      paragraphs: [
        "This is the most common reason homeowners hesitate to install whirlybirds or choose to remove them. The concern is understandable but unfounded when quality turbines are installed correctly. Whirlybird vanes are angled in a way that deflects rainwater outward while allowing air to escape upward. The design has been refined over decades to prevent water ingress even during heavy Sydney downpours.",
        "As for pests, properly installed whirlybirds have screens or baffles that prevent birds, possums and large insects from entering your roof cavity. The turbine itself spins continuously in even light wind, which deters birds from attempting to land or nest. We have inspected thousands of Sydney roofs with whirlybirds and pest entry through the turbine is extremely rare when installation follows manufacturer specifications.",
      ],
      bullets: [
        "Angled vanes deflect rain outward while allowing air to flow upward",
        "Spinning motion deters birds and possums from landing on the turbine",
        "Quality units include mesh screens that block insects and debris",
        "Correct base flashing installation is critical to prevent water entry around the turbine base",
      ],
    },
    {
      id: "misconception-three-they-cool-your-home",
      heading: "Misconception 3: Whirlybirds Cool Your Home Directly",
      paragraphs: [
        "Homeowners often install whirlybirds expecting their living spaces to feel noticeably cooler. This rarely happens and leads to disappointment. Whirlybirds extract hot air from your roof cavity, not from inside your home. Unless you have poor ceiling insulation or gaps in your ceiling, the air in your roof space is largely separated from the air in your living areas.",
        "What whirlybirds do achieve is reducing the temperature of your roof structure and ceiling material itself. On a Sydney summer day, an unventilated metal roof can reach 70 to 80 degrees Celsius. This radiant heat transfers through ceiling insulation and makes your air conditioner work harder. By extracting hot air and reducing roof cavity temperatures by 10 to 20 degrees, whirlybirds reduce the thermal load on your home and lower cooling costs indirectly.",
      ],
      bullets: [
        "Whirlybirds extract air from the roof cavity, not from living spaces below",
        "Reduced roof cavity temperature lowers radiant heat transfer through ceilings",
        "Energy savings from reduced air conditioning load can reach 10-20% in summer",
        "Maximum benefit requires adequate ceiling insulation (minimum R3.5 in Sydney)",
      ],
    },
    {
      id: "misconception-four-all-whirlybirds-same",
      heading: "Misconception 4: All Whirlybirds Are the Same Quality",
      paragraphs: [
        "Walk into a hardware store and you will find whirlybirds ranging from $80 to over $400. The cheaper models use inferior bearings, thinner aluminium and less durable finishes. These units may work fine initially but often start making noise within 2 to 3 years. Quality brands like Ampelite, Edmonds and Cyclone use stainless steel shafts, sealed bearings and corrosion-resistant materials designed for Australian coastal conditions.",
        "For Sydney homes, especially within 5 kilometres of the coast, investing in a premium whirlybird makes sense. The price difference is usually $150 to $200 per unit, but the lifespan can be double or triple that of budget options. When you factor in the cost of repairs or early replacement, the premium units represent better long-term value.",
      ],
      bullets: [
        "Budget whirlybirds cost $80-$150 but may only last 5-7 years",
        "Premium brands cost $250-$450 and typically last 15-20 years",
        "Stainless steel components resist corrosion far better than painted aluminium or galvanised steel",
        "Sealed bearings eliminate the need for regular lubrication and reduce noise issues",
      ],
    },
    {
      id: "misconception-five-diy-installation-easy",
      heading: "Misconception 5: Installing a Whirlybird Is an Easy DIY Job",
      paragraphs: [
        "Installing a whirlybird requires cutting a hole through your roof material, creating weatherproof flashing and ensuring correct positioning for optimal airflow. Many DIY installations result in leaks because the base flashing is not sealed correctly or the turbine is positioned in a valley or near a ridge where water flow is concentrated.",
        "Beyond waterproofing concerns, working on a roof is inherently dangerous. Falls from roofs are one of the leading causes of serious injury and death in Australian construction. Licensed roofing contractors have the training, safety equipment and insurance to do the job properly. The cost difference between DIY and professional installation is usually only $150 to $250, a small price for peace of mind and guaranteed waterproof installation.",
      ],
      bullets: [
        "Incorrect flashing installation is the leading cause of leaks around whirlybirds",
        "Professional installation costs between $350 and $600 including the turbine unit",
        "Licensed contractors provide workmanship warranties of 5 to 10 years",
        "Positioning matters: turbines should be placed high on the roof slope away from valleys and ridges",
      ],
    },
    {
      id: "repair-or-replace",
      heading: "Should You Repair or Replace a Noisy Whirlybird?",
      paragraphs: [
        "If your whirlybird is under 10 years old and only the bearings are worn, repair usually makes sense. A roofing contractor can remove the turbine head, replace the bearing assembly, clean and lubricate the shaft, and reinstall the unit in under an hour. This costs between $150 and $300 depending on access and the specific model.",
        "For whirlybirds over 15 years old, or where multiple components are damaged, replacement is often more cost-effective. Modern turbines are more efficient and quieter than models from the early 2000s. If you are replacing, consider upgrading to a larger turbine or adding additional units to improve overall roof ventilation. Most Sydney homes benefit from one whirlybird per 50 to 70 square metres of roof space.",
      ],
      bullets: [
        "Bearing replacement costs $150-$300 and extends life by 5-10 years",
        "Full replacement including removal and new unit runs $350-$600",
        "Modern turbines extract 20-30% more air than models from 10-15 years ago",
        "Adding a second or third whirlybird significantly improves ventilation in larger homes",
      ],
    },
  ],

  testimonial: {
    name: "Michelle P.",
    location: "Epping, Sydney",
    quote: "Our whirlybird had been squeaking for over a year and we thought we needed a full replacement. The team just replaced the bearings and it spins silently now. Wish we had called sooner instead of putting up with the noise.",
    rating: 5,
  },

  cta: {
    heading: "Need Help With a Noisy Whirlybird?",
    text: "Our team can diagnose whirlybird noise issues and provide honest advice on whether repair or replacement makes sense for your situation. Free quotes across Sydney.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["whirlybirds", "roof ventilation", "maintenance", "roof repair"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
