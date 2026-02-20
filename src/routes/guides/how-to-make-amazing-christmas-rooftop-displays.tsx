import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Make Amazing Christmas Rooftop Displays",
  slug: "how-to-make-amazing-christmas-rooftop-displays",
  path: "/guides/how-to-make-amazing-christmas-rooftop-displays/",
  description: "Create stunning Christmas rooftop displays safely. Learn about lighting options, roof safety, power requirements, and regulations for festive decorations in Sydney.",
  keywords: "christmas rooftop displays, christmas lights sydney, roof decorations safety, festive lighting installation, holiday roof lights",
  publishedISO: "2026-02-18",
  modifiedISO: "2026-02-18",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Make Amazing Christmas Rooftop Displays",
    subheadline: "Transform your Sydney home into a festive landmark with safe, stunning rooftop Christmas displays. Learn the planning, safety and installation secrets the professionals use.",
    bullets: [
      "Plan displays that enhance your home without damaging your roof",
      "Understand electrical safety and power requirements for outdoor lighting",
      "Learn safe roof access techniques and fall prevention measures",
      "Navigate local council regulations and neighbourhood etiquette in Sydney",
    ],
  },

  intro: {
    paragraphs: [
      "Christmas rooftop displays have become a beloved tradition across Sydney suburbs, with some streets transforming into unofficial festive tourism destinations each December. A well-executed rooftop display creates joy for your neighbourhood and adds memorable value to the holiday season.",
      "However, installing decorations on your roof requires careful planning around safety, electrical capacity, weather exposure and roof integrity. Rushing the process or skipping safety steps can lead to injuries, electrical faults or permanent damage to your roofing materials.",
      "This guide covers everything Sydney homeowners need to know to create impressive Christmas rooftop displays while protecting both people and property. Whether you are planning a subtle roofline accent or a full-scale light spectacular, these principles apply.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Professional Christmas lighting installation in Sydney costs between $800 and $5,000 depending on display complexity",
      "Most suburban homes need a dedicated 15-amp outdoor circuit to run extensive rooftop light displays safely",
      "Fall from height is the leading cause of Christmas decoration injuries requiring hospitalisation in Australia",
      "Some Sydney councils require permits for large-scale displays that generate significant visitor traffic",
    ],
  },

  sections: [
    {
      id: "planning-your-display",
      heading: "Planning Your Rooftop Display",
      paragraphs: [
        "Effective rooftop displays start with a clear design plan before any equipment is purchased. Walk around your property at dusk and identify which rooflines, peaks and features are visible from street level. These high-visibility areas should be your focus points rather than sections hidden by trees or neighbouring buildings.",
        "Consider the architectural style of your home. Modern flat-roof designs suit minimalist LED strip lighting along edges, while traditional pitched roofs with defined gables look spectacular with icicle lights or illuminated star features at peak points. Match your display style to your home rather than fighting against the structure.",
      ],
      bullets: [
        "Sketch your home elevation and mark high-visibility rooflines",
        "Measure all sections where lights will be installed to calculate quantities needed",
        "Choose a colour scheme (traditional warm white, multicolour, or modern RGB LED)",
        "Factor in viewing angles from the street and neighbouring properties",
      ],
    },
    {
      id: "choosing-lights-and-materials",
      heading: "Choosing Lights and Materials for Sydney Weather",
      paragraphs: [
        "Sydney experiences intense summer sun, occasional heavy rain and strong coastal winds during the December holiday period. Your lighting and mounting hardware must withstand these conditions for 4 to 6 weeks of continuous outdoor exposure. LED lights are now the standard choice due to low power consumption, cool operation and long lifespan.",
        "Look for lighting products with an IP65 or higher ingress protection rating, which confirms resistance to dust and water jets. Australian-certified products marked with the RCM (Regulatory Compliance Mark) meet local electrical safety standards. Avoid cheap imported lights without certification as they pose fire and shock risks.",
      ],
      bullets: [
        "LED lights use 80 percent less power than old incandescent bulbs",
        "IP65-rated products withstand rain and direct hose spray for cleaning",
        "Check for RCM certification on all electrical lighting products",
        "UV-stabilised cable ties and clips prevent degradation under summer sun",
      ],
    },
    {
      id: "roof-safety-and-access",
      heading: "Roof Safety and Safe Access Methods",
      paragraphs: [
        "Falls from roofs during Christmas decoration installation send dozens of Australians to hospital every year. If your display requires walking on the roof surface rather than working from ladders or the ground, you must use proper fall protection equipment. This includes a roof anchor point rated to AS 1891, a full-body harness and a shock-absorbing lanyard.",
        "For most single-storey homes, an extension ladder with roof hooks and standoff brackets allows you to install edge lighting without setting foot on the roof. Position ladders on firm, level ground at a 75-degree angle and have a second person foot the ladder while you work. Never lean out beyond the ladder rails to reach distant sections.",
      ],
      bullets: [
        "Roof anchors must be installed by licensed professionals and rated to AS 1891",
        "Work with a partner who can steady ladders and call for help if needed",
        "Avoid walking on tile roofs which crack easily under foot traffic",
        "Schedule installation work during mild, dry weather with minimal wind",
      ],
    },
    {
      id: "electrical-requirements",
      heading: "Electrical Requirements and Power Management",
      paragraphs: [
        "A medium-sized rooftop display with 500 LED lights typically draws around 200 to 400 watts of power, well within the capacity of a standard 10-amp outdoor power point. However, larger displays with multiple strings, animated features and inflatable decorations can easily exceed 1,500 watts, requiring a dedicated circuit to prevent overloading.",
        "All outdoor power connections must be protected by a residual current device with a 30-millisecond trip time. Extension cords used outdoors need heavy-duty rating with weatherproof connections. Run cables along roof valleys or gutters where they are protected from foot traffic and UV exposure, securing them with insulated clips rather than metal staples that can pierce insulation.",
      ],
      bullets: [
        "Calculate total wattage before plugging in to avoid circuit overload",
        "Use outdoor-rated extension cords with weatherproof connector covers",
        "Install timers or smart switches to automate display operation hours",
        "Have a licensed electrician install additional circuits for large displays",
      ],
    },
    {
      id: "installation-techniques",
      heading: "Installation Techniques That Protect Your Roof",
      paragraphs: [
        "The mounting method you choose can make the difference between a display that comes down cleanly in January and one that leaves permanent damage. Never screw, nail or staple directly into roofing materials. Metal roofs are easily punctured, tiles crack under fasteners, and any penetration creates a potential leak point.",
        "Use purpose-designed Christmas light clips that hook over gutters, shingles or roof ridges without penetration. For securing cables along flat sections, adhesive-backed cable clips designed for outdoor use provide strong hold without damage. On Colorbond roofs, magnetic mounting systems offer excellent holding power with zero roof contact.",
      ],
      bullets: [
        "Gutter clips hook securely without tools or roof penetration",
        "Shingle tabs slide under roof tiles to hold lights along edges",
        "Adhesive clips remove cleanly if you heat them gently before pulling",
        "Magnetic mounts work brilliantly on metal roofs with instant repositioning",
      ],
    },
    {
      id: "regulations-and-neighbourhood-considerations",
      heading: "Regulations and Neighbourhood Considerations",
      paragraphs: [
        "Most Sydney councils do not regulate ordinary residential Christmas displays, but large-scale installations that draw crowds or create traffic hazards may require approval. Displays visible from main roads must not create driver distraction through flashing or animated lighting. Check with your local council if your display will include sound systems, crowd barriers or signage.",
        "Good neighbour relationships matter more than regulations. Intense lighting pointed toward neighbouring windows causes annoyance and potential complaints. Aim display lighting toward your own property and the street, not into adjacent yards. Use timers to switch off displays by 10pm on weeknights and midnight on weekends as a courtesy to nearby residents.",
      ],
      bullets: [
        "Contact your council if your display typically attracts more than 20 visitors per evening",
        "Angle lights away from neighbouring bedroom windows",
        "Set automatic shutoff times to respect nearby residents",
        "Provide safe pedestrian access if visitors will stop to view from your street",
      ],
    },
  ],

  testimonial: {
    name: "Michelle K.",
    location: "Castle Hill, Sydney",
    quote: "We hired a professional crew to install our rooftop lights after trying to do it ourselves. Best decision ever. They had it done in three hours with proper safety gear and zero stress. The display looked amazing and came down just as easily in January.",
    rating: 5,
  },

  cta: {
    heading: "Need Help With Your Rooftop Display?",
    text: "Our experienced team offers safe installation of Christmas lights and decorations across Sydney. We handle everything from planning to removal, so you can enjoy the season without the stress.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["christmas lights", "roof safety", "holiday decorations", "sydney"],
  readingTime: "7 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
