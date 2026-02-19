import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.005; // Como
const AREA_LON = 151.069;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Como",
  slug: "como",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Como Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "COMO",
    bullets: [
      "Salt air protection for riverside properties",
      "Roof repairs, restorations and leak detection",
      "Guttering upgrades for heavy coastal rain",
      "Fast service across Como, Jannali and the Georges River area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Como Homes",
    paragraphs: [
      "Como sits on the Georges River, where waterside properties face constant exposure to salt air, moisture and coastal weather patterns. These conditions accelerate rust, wear and leaks if your roof and gutters are not properly maintained.",
      "We provide roof repairs, roof restoration and guttering upgrades tailored for the local environment. From tile replacements and Colorbond installations to rust treatment and full gutter system overhauls, we handle all aspects of roofing in Como.",
      "Our team works across the Sutherland Shire, delivering clean workmanship, reliable fixes and transparent pricing. Whether you need a small repair or a complete restoration, we ensure your roof is ready for the next storm.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering services for riverside homes in Como",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Como",
    subheading: "Coastal moisture and salt air create persistent challenges for roofs and gutters near the Georges River.",
    paragraphs: [
      "Salt-laden wind and high humidity cause metal roofs and guttering to rust faster than inland areas. Colorbond and uncoated steel can deteriorate within a few seasons if not inspected regularly.",
      "Blocked gutters and valleys trap moisture, leading to pooling, overflow and water damage to fascias, eaves and interior ceilings. Heavy rain combined with debris from nearby trees makes this a frequent issue in Como.",
      "We provide preventative maintenance, targeted rust repairs, gutter cleaning and full restorations. Our approach is designed to extend the life of your roof and protect your home from costly water damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda K.",
    suburb: "Jannali",
    quote:
      "They replaced rusted sections of our guttering and resealed the valleys. No more leaks during storms. The team was professional, punctual and left everything clean.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
