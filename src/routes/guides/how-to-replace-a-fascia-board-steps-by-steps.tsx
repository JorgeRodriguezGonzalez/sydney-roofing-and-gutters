import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Replace a Fascia Board: Step by Step",
  slug: "how-to-replace-a-fascia-board-steps-by-steps",
  path: "/guides/how-to-replace-a-fascia-board-steps-by-steps/",
  description: "Learn how to replace a fascia board on your Sydney home. Step-by-step instructions, material costs, tools needed and when to call a professional roofing contractor.",
  keywords: "fascia board replacement, replace fascia board, fascia repair sydney, roofline repair, timber fascia replacement",
  publishedISO: "2025-06-16",
  modifiedISO: "2025-08-27",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Replace a Fascia Board: Step by Step",
    subheadline: "A practical guide for Sydney homeowners on replacing damaged fascia boards, including materials, tools, safety tips and when to hire a licensed contractor.",
    bullets: [
      "Understand what fascia boards do and why they fail in Sydney conditions",
      "Learn the complete replacement process from removal to installation",
      "Know which materials and tools you need for a quality repair",
      "Identify when a DIY approach is safe versus when to call the professionals",
    ],
  },

  intro: {
    paragraphs: [
      "Fascia boards run along the lower edge of your roofline, supporting gutters and providing a finished look to your eaves. In Sydney homes, timber fascia is common but vulnerable to rot, termite damage and weathering from coastal moisture and UV exposure. When fascia fails, gutters sag and water can penetrate the roof structure.",
      "Replacing a damaged fascia board is one of the more accessible roofing repairs for confident DIYers, provided the roof is low-pitched and safely accessible. The job requires basic carpentry skills, the right materials and attention to detail. This guide walks through each step of the process so you know what to expect.",
      "At Sydney Roofing and Gutters, we repair and replace fascia boards across the greater Sydney region. The advice below is based on Australian building standards and decades of hands-on experience with Sydney homes.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Timber fascia boards cost between $8 and $25 per lineal metre depending on species and finish",
      "Replacing fascia on a single-storey home typically takes 4 to 8 hours for an experienced person",
      "Work from a stable scaffold or platform — ladders alone are unsafe for extended fascia work",
      "Any fascia repair over $1,000 in NSW should be performed by a licensed contractor with insurance",
    ],
  },

  sections: [
    {
      id: "understanding-fascia-boards",
      heading: "Understanding Fascia Boards and Why They Fail",
      paragraphs: [
        "The fascia board is the vertical board fixed to the ends of your roof rafters or trusses. Its primary job is to carry the weight of your gutters and provide a mounting surface for the gutter brackets. On many Sydney homes, the fascia also forms part of the visual edge of the roofline and may be painted or left as natural timber.",
        "Fascia boards fail for several reasons. Timber species like pine and Oregon rot when exposed to prolonged moisture, especially in coastal suburbs where salt air accelerates decay. Termites and other wood-boring insects are a major issue in Sydney. Poorly maintained gutters can overflow, soaking the fascia and speeding up rot. UV exposure also degrades timber over time.",
      ],
      bullets: [
        "Fascia supports gutter weight and protects rafter ends from weather",
        "Common causes of failure include rot, termites, gutter overflow and UV damage",
        "Untreated pine fascia typically lasts 10-20 years in Sydney conditions",
        "Hardwood and treated timber fascia can last 30+ years with proper maintenance",
      ],
    },
    {
      id: "signs-you-need-replacement",
      heading: "Signs Your Fascia Board Needs Replacement",
      paragraphs: [
        "Catching fascia damage early can prevent bigger problems. Visual signs include peeling paint, visible rot or soft spots when you press the timber, cracks running along the grain, and sagging gutters that pull away from the roofline. If you notice water staining on the fascia or eaves, investigate immediately — moisture is getting in.",
        "From ground level, use binoculars to inspect your fascia every six months. Look for discolouration, insect holes, or sections that appear warped or uneven. If you can safely access the fascia from a ladder, gently push on it with a screwdriver. Healthy timber is firm. Soft, spongy wood or timber that flakes away indicates rot and requires replacement.",
      ],
      bullets: [
        "Visible rot, soft timber or flaking paint are clear replacement indicators",
        "Sagging or detached gutters often point to failed fascia behind them",
        "Insect holes or termite trails along the fascia require urgent attention",
        "Water stains on eaves or ceiling edges suggest fascia or gutter failure",
      ],
    },
    {
      id: "materials-and-tools",
      heading: "Materials and Tools You Will Need",
      paragraphs: [
        "For a typical fascia replacement, choose treated pine or a durable hardwood like spotted gum or merbau. Treated pine is affordable and widely available at hardware stores. Hardwood costs more but lasts longer and resists decay better in Sydney coastal zones. Match the thickness and width of your existing fascia — common dimensions are 25mm x 200mm or 25mm x 250mm.",
        "You will also need galvanised or stainless steel fascia brackets to support the gutter, exterior-grade screws or nails, a quality primer and exterior paint, and timber filler if needed. Essential tools include a circular saw or handsaw, drill with bits, pry bar, hammer, measuring tape, spirit level and safety gear including gloves, safety glasses and a harness if working at height.",
      ],
      bullets: [
        "Treated pine fascia boards: $8-$15 per lineal metre",
        "Hardwood fascia (spotted gum, merbau): $18-$25 per lineal metre",
        "Galvanised fascia brackets: $3-$8 each depending on size",
        "Allow extra budget for primer, paint, screws and sandpaper",
      ],
    },
    {
      id: "step-by-step-replacement",
      heading: "Step-by-Step Fascia Board Replacement Process",
      paragraphs: [
        "Start by setting up safe access. Scaffolding or a stable work platform is essential for fascia work — do not rely on a ladder alone. Once secure, remove the gutter from the damaged section. Unbolt or unscrew the gutter brackets and carefully lower the gutter to the ground or have a helper support it.",
        "Next, remove the old fascia board. Use a pry bar to gently lever it away from the rafter ends. Remove all old nails or screws. Inspect the rafter ends for rot or damage — if they are compromised, they will need repair before you fit the new fascia. Cut the new fascia board to length, ensuring it fits snugly along the roofline. Prime all surfaces before installation.",
        "Fix the new fascia to the rafter ends using galvanised screws or nails at 600mm centres. Check alignment with a spirit level as you go. Once fixed, install or reposition fascia brackets for the gutter, ensuring they are spaced correctly for the gutter profile. Reattach the gutter and test water flow. Finally, fill any gaps with exterior-grade filler, sand smooth and apply two coats of exterior paint.",
      ],
      bullets: [
        "Remove gutter and old fascia board carefully to avoid damaging rafters",
        "Prime all surfaces of the new fascia board before installation",
        "Fix fascia to rafters using galvanised screws at 600mm spacing",
        "Ensure gutter brackets are level and correctly spaced before refitting gutters",
      ],
    },
    {
      id: "when-to-hire-a-professional",
      heading: "When to Hire a Professional Contractor",
      paragraphs: [
        "Fascia replacement becomes risky when the roof is steep, high or difficult to access. Multi-storey homes, roofs over 4 metres high and properties with complex rooflines or limited access all require professional equipment and experience. Licensed roofing contractors have scaffolding, harnesses and the skills to work safely at height.",
        "If you discover extensive rot, termite damage in the roof structure or issues with rafters and eaves, call a professional. Structural timber repairs require expertise and often need to comply with building codes and engineering specifications. Attempting these repairs without the right knowledge can compromise the roof and create safety hazards.",
      ],
      bullets: [
        "Roofs over 4 metres high require scaffolding and licensed contractors",
        "Extensive rot or termite damage needs professional assessment and repair",
        "Complex rooflines with difficult access are safer in professional hands",
        "Licensed contractors carry insurance and provide workmanship warranties",
      ],
    },
    {
      id: "choosing-the-right-contractor",
      heading: "Choosing the Right Roofing Contractor in Sydney",
      paragraphs: [
        "If you decide to hire a professional, look for a licensed roofing contractor with experience in fascia and roofline repairs. In NSW, any roofing work over $5,000 requires a contractor licence. Check the licence on the NSW Fair Trading website and confirm the contractor has current public liability and workers compensation insurance.",
        "Ask for quotes from at least three contractors and ensure each quote itemises materials, labour, scaffolding and any additional work required. A reputable contractor will inspect the fascia in person before quoting and explain what needs to be done and why. Avoid contractors who quote over the phone without seeing the job.",
      ],
      bullets: [
        "Verify NSW contractor licence and insurance before signing any agreement",
        "Get itemised quotes from three contractors for comparison",
        "Ask for references and photos from recent fascia repair projects",
        "Ensure the quote includes removal of old materials, painting and cleanup",
      ],
    },
  ],

  testimonial: {
    name: "Lisa M.",
    location: "Hornsby, Sydney",
    quote: "We had rotten fascia on the north side of the house and the gutters were pulling away. The team replaced the boards, repainted everything and rehung the gutters in one day. Very professional and the job looks excellent.",
    rating: 5,
  },

  cta: {
    heading: "Need Fascia Board Replacement?",
    text: "Get a free, no-obligation quote from our licensed roofing team. We repair and replace fascia boards across all Sydney suburbs and offer workmanship warranties on every job.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["fascia board", "roofline repair", "gutter support", "timber repair"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
