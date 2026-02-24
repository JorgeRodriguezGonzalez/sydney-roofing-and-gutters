import { createGuideRoute } from "@/routes/guides/GuideTemplate";

const config = {
  title: "How to Build a Pergola Frame DIY",
  slug: "how-to-build-a-pergola-frame-diy",
  path: "/guides/how-to-build-a-pergola-frame-diy/",
  description: "A step-by-step guide to building a pergola frame yourself in Sydney. Learn about timber selection, post installation, beam framing and local council requirements.",
  keywords: "pergola frame DIY, build pergola sydney, pergola construction guide, DIY outdoor structure, timber pergola frame",
  publishedISO: "2022-12-30",
  modifiedISO: "2025-11-01",
  category: "Guides",
  heroBg: "/images/hero-roof.webp",
} as const;

const content = {
  hero: {
    eyebrow: "GUIDE",
    headline: "How to Build a Pergola Frame DIY",
    subheadline: "A practical guide for Sydney homeowners on building a strong, lasting pergola frame from planning and materials through to final assembly.",
    bullets: [
      "Select the right timber species and dimensions for Sydney weather",
      "Master post setting techniques for stability and longevity",
      "Learn proper beam and rafter spacing for structural integrity",
      "Understand local council regulations before you start building",
    ],
  },

  intro: {
    paragraphs: [
      "Building a pergola frame is one of the most rewarding DIY projects for Sydney homeowners. A well-constructed pergola adds outdoor living space, increases property value and provides shade during hot summers. With the right materials, basic carpentry skills and a solid plan, most competent DIYers can complete a freestanding pergola frame in a weekend.",
      "The key to a successful build is understanding the fundamentals of structural framing. Posts must be set deep enough and plumb, beams need to be sized correctly for the span, and all connections should be secured with appropriate fasteners. Cutting corners on any of these elements leads to a wobbly structure that will not last.",
      "This guide walks through the entire process from selecting timber and designing your frame through to setting posts, installing beams and attaching rafters. All advice is tailored to Sydney conditions including timber species that handle humidity well and footing depths that comply with NSW building standards.",
    ],
  },

  quickSummary: {
    heading: "Quick summary: what you need to know",
    bullets: [
      "Treated pine or hardwood posts 100mm x 100mm or larger provide adequate support for most residential pergolas",
      "Post footings must be at least 600mm deep in Sydney to meet AS 1684 requirements for typical soil conditions",
      "Freestanding pergolas under 10 square metres may be exempt from council approval but always verify with your local council",
      "Allow 2-3 full days for a 3m x 4m pergola including concrete curing time before attaching beams",
    ],
  },

  sections: [
    {
      id: "planning-and-materials",
      heading: "Planning Your Design and Selecting Materials",
      paragraphs: [
        "Start by sketching your pergola design including overall dimensions, post spacing and beam layout. For a typical freestanding structure, posts are spaced 2.4 to 3 metres apart. Wider spans require larger beam sections. A 3 metre span works well with 190mm x 45mm treated pine beams, while 4 metre spans need 240mm x 45mm or doubled 190mm members.",
        "Timber choice matters significantly in Sydney where humidity and termites are constant threats. Treated pine rated H4 or higher is the most cost-effective option for in-ground posts. Hardwoods like spotted gum or ironbark are more expensive but offer superior durability and a premium look. Avoid using untreated timber for any structural components.",
      ],
      bullets: [
        "Choose H4 treated pine for posts and structural beams exposed to weather",
        "Plan post spacing between 2.4m and 3m for standard residential loads",
        "Size beams appropriately for span: 190mm x 45mm suits 3m, 240mm x 45mm for 4m",
        "Calculate rafter spacing at 450mm to 600mm centres for adequate shade",
      ],
    },
    {
      id: "setting-posts",
      heading: "Setting Posts for a Solid Foundation",
      paragraphs: [
        "Post installation is the most critical stage. Dig holes 300mm diameter and at least 600mm deep using a post hole shovel or auger. In areas with poor soil or high wind exposure, go deeper to 750mm. Place 100mm of drainage gravel at the bottom of each hole before positioning the post.",
        "Use a spirit level to check plumb on two adjacent sides while a helper holds the post. Brace the post with temporary timber supports nailed to stakes, then fill the hole with rapid-set concrete. Recheck plumb as you pour because posts can shift. Allow concrete to cure for at least 24 hours before applying any load to the posts.",
      ],
      bullets: [
        "Dig holes 300mm wide and 600-750mm deep depending on soil conditions",
        "Add 100mm of gravel at the base for drainage around the post",
        "Check plumb on two sides and secure with temporary bracing before pouring concrete",
        "Wait a full 24 hours for concrete to cure before attaching any beams",
      ],
    },
    {
      id: "installing-beams",
      heading: "Installing Beams and Creating the Frame Structure",
      paragraphs: [
        "Once posts are set and cured, mark the height for your beams. Standard pergola height is around 2.4 metres from ground level to the underside of the beam, though you can adjust this to suit your space. Use a laser level or water level to mark all posts at exactly the same height.",
        "Beams can be bolted to the side of posts using galvanised coach bolts, or they can sit on top of posts secured with post caps and brackets. Side-mounting is more common for DIY builds because it requires less precision cutting. Drill pilot holes before inserting bolts to prevent splitting the timber, and use washers on both ends of each bolt.",
      ],
      bullets: [
        "Mark beam height at 2.4m or your preferred measurement using a level",
        "Use galvanised M12 coach bolts at least 150mm long for side-mounted beams",
        "Position beams flush with the outside edge of posts for a clean look",
        "Check that beams are level before fully tightening all bolts",
      ],
    },
    {
      id: "attaching-rafters",
      heading: "Attaching Rafters and Completing the Roof Frame",
      paragraphs: [
        "Rafters run perpendicular to the beams and provide the main shade element. Cut rafters to length allowing for any desired overhang beyond the beams — 300mm to 500mm is common. Space rafters evenly across the span at 450mm to 600mm centres depending on how much shade you want.",
        "Secure rafters to beams using joist hangers for a neat finish, or simply toenail them using two 90mm galvanised nails on each side. For a decorative touch, cut the ends of rafters at an angle or curve. Sand all exposed edges and corners to remove splinters before anyone uses the pergola.",
      ],
      bullets: [
        "Cut rafters to span plus 300-500mm overhang on each end",
        "Space rafters at 450-600mm centres for balanced shade coverage",
        "Use galvanised joist hangers or toenail with 90mm nails at each beam intersection",
        "Shape rafter ends with decorative cuts for a polished appearance",
      ],
    },
    {
      id: "finishing-and-compliance",
      heading: "Finishing Touches and Council Compliance",
      paragraphs: [
        "Before calling the project complete, sand down any rough edges and apply a coat of decking oil or exterior timber stain if you want to enhance the colour and protect the wood. Treated pine weathers to a silver-grey if left untreated, which many people prefer for the low-maintenance look.",
        "Check with your local council about approval requirements. In many Sydney councils, freestanding pergolas under 10 square metres and not attached to the house are considered exempt development, meaning you can build without formal approval. However, rules vary by council and there are still setback and height limits to follow. When in doubt, lodge a complying development application.",
      ],
      bullets: [
        "Sand all surfaces and apply decking oil or leave to weather naturally",
        "Verify council requirements for your specific area before starting",
        "Keep the structure within setback limits from boundaries and easements",
        "Document your build with photos in case council requests evidence of compliance",
      ],
    },
    {
      id: "tools-and-safety",
      heading: "Essential Tools and Safety Considerations",
      paragraphs: [
        "You will need a circular saw or mitre saw for cutting timber, a drill with wood bits and driver bits, a post hole digger or auger, spirit levels, measuring tape and clamps. A laser level makes beam installation much easier but is not essential. Rent tools you do not own rather than buying equipment you will use once.",
        "Safety matters when working with heavy timber and power tools. Wear safety glasses whenever cutting or drilling, and use gloves when handling rough-sawn timber. Get a helper for lifting beams and positioning posts — trying to do this solo often results in injury or poorly aligned framing. Work on level ground and never stand on unstable surfaces.",
      ],
      bullets: [
        "Core tools: circular saw, drill, post hole digger, spirit level, tape measure",
        "Rent a laser level and concrete mixer to make the job faster and easier",
        "Always wear safety glasses when cutting and drilling timber",
        "Get help for heavy lifting and ensure stable footing when working at height",
      ],
    },
  ],

  testimonial: {
    name: "Michelle K.",
    location: "Epping, Sydney",
    quote: "Built our first pergola frame last spring following a guide like this. Took us two weekends but the result is solid and we use it almost every day now. Treated pine posts are still looking great after a full summer.",
    rating: 5,
  },

  cta: {
    heading: "Need Professional Help with Your Pergola?",
    text: "If you prefer to leave the build to experienced professionals, we can design and construct a custom pergola tailored to your Sydney property. Get a free quote today.",
    primaryText: "GET A FREE QUOTE",
    primaryHref: "/contact/",
  },

  tags: ["DIY pergola", "timber framing", "outdoor structures", "home improvement"],
  readingTime: "9 min read",
} as const;

const { Page, route } = createGuideRoute(config, content);
export { route };
export default Page;
