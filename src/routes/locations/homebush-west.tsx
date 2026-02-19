import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.862; // Homebush West
const AREA_LON = 151.076;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Homebush West",
  slug: "homebush-west",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HOMEBUSH WEST",
    bullets: [
      "Heritage roof repairs for Federation and period homes",
      "Tile, Colorbond and metal roof maintenance and replacement",
      "Gutter cleaning and downpipe upgrades for heavy rain",
      "Fast response across Homebush West and surrounding suburbs for leaks and storm damage",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Gutter Services in Homebush West",
    paragraphs: [
      "Homebush West is home to a mix of heritage Federation homes, inter-war brick cottages and modern developments — each with different roofing needs and maintenance challenges that require local experience.",
      "From older terracotta tiles and slate to contemporary Colorbond roofs, we handle repairs, restorations and gutter upgrades for homes across the suburb. Our work is tailored to local weather patterns and building styles.",
      "Whether you need urgent leak detection, valley flashing repairs or a full roof restoration for an older home, our team delivers clean workmanship and lasting results with clear communication throughout.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering services for Homebush West homes",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Homebush West",
    subheading: "Older homes and diverse roof types in Homebush West often mean unique maintenance requirements and repair needs.",
    paragraphs: [
      "Heritage roofs on Federation homes frequently develop cracked tiles, worn mortar bedding and failing lead valleys — problems that worsen with every storm if not addressed properly and promptly.",
      "Heavy rain events overwhelm undersized gutters and blocked downpipes, leading to water pooling, eave damage and interior leaks. Box gutters on older homes are particularly prone to rust and leaks.",
      "We diagnose the underlying cause, not just the symptom — offering targeted repairs, heritage-appropriate restorations and modern upgrades that preserve character while improving performance and longevity.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa G.",
    suburb: "Strathfield",
    quote:
      "They restored our Federation roof with care and expertise. The bedding was cracked and valleys leaking badly. Now it looks original and performs perfectly after storms. Great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
