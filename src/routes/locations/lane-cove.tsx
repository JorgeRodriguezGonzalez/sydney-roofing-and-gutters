import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.816; // Lane Cove
const AREA_LON = 151.167;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Lane Cove",
  slug: "lane-cove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Lane Cove Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LANE COVE",
    bullets: [
      "Leak repairs for heritage and modern homes alike",
      "Tile and Colorbond roof restoration and replacement",
      "Gutter cleaning and downpipe upgrades for heavy rainfall",
      "Rapid response and transparent quotes across Lane Cove and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roof Repairs and Guttering Services in Lane Cove",
    paragraphs: [
      "Lane Cove combines established homes with newer developments, each requiring a different approach to roofing and gutter maintenance. Older tile roofs, modern metal roofing and low-slope designs all face unique challenges from weather and age.",
      "We service homes across Lane Cove, providing roof leak repairs, full restorations, gutter replacements and preventative maintenance tailored to local conditions including heavy rain, leaf litter from riverside vegetation and storm exposure.",
      "Our team has experience with Colorbond steel, terracotta and concrete tiles, and slate roofing. We deliver reliable workmanship, honest advice and long-term solutions from the first inspection through to final clean-up and sign-off.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services in Lane Cove suburb",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Lane Cove",
    subheading: "Proximity to the river and mature tree canopy means gutters and valleys often face blockages and overflow issues.",
    paragraphs: [
      "Leaf litter, seed pods and debris accumulate quickly in gutters and downpipes, especially after storms. This leads to overflow, rust, sagging sections and water pooling near foundations or entering roof spaces.",
      "We also repair cracked tiles, rusted ridge caps, flashing failures and compromised valleys that let water through during heavy downpours. These problems only get worse when left unaddressed.",
      "Our inspections identify the root cause and provide clear repair or replacement options, whether that means a targeted fix, gutter upgrades or a full roof restoration to extend the life of your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Greenwich",
    quote:
      "They replaced our old gutters and fixed several cracked tiles we did not even notice. The whole process was smooth and the crew was respectful and efficient. Very happy with the outcome.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
