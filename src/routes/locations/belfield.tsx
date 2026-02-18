import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.904; // Belfield
const AREA_LON = 151.083;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Belfield",
  slug: "belfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Belfield Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BELFIELD",
    bullets: [
      "Expert roof repairs for all tile and metal roof types",
      "Gutter cleaning and replacement for older homes",
      "Leak detection and weather damage restoration services",
      "Fast, reliable service across Belfield and surrounding Inner West suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services Across Belfield and Surrounds",
    paragraphs: [
      "Belfield features a range of established homes with tile and metal roofing that require regular maintenance to handle Sydney weather. Older roofs can develop small leaks that worsen over time if not addressed early.",
      "We provide comprehensive roofing and guttering work for homes throughout Belfield, from quick repairs and gutter cleaning to full roof restoration and Colorbond upgrades. Our team understands the needs of Inner West properties.",
      "Whether you need leak repairs, tile replacement or new guttering, we deliver quality results with clear communication and fair pricing. Every job is completed with attention to detail and long-term durability in mind.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering work in Belfield",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Belfield Homes",
    subheading: "Older roofs and blocked gutters can lead to leaks, rust and water damage during heavy rain.",
    paragraphs: [
      "Many homes in Belfield have tile roofs that develop cracks or slipped tiles over time, creating entry points for water during storms. Metal roofing can corrode where fasteners or flashing have degraded.",
      "Gutters on older properties often fill with debris, causing water to overflow into fascia boards and eaves. Left unchecked, this leads to rot, mould and interior ceiling damage.",
      "We inspect the full roof system including tiles, valleys, flashings and downpipes to find problems before they escalate. Our repairs are targeted, cost-effective and designed to extend the life of your roof.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Canterbury",
    quote:
      "Had persistent leaks after storms and they tracked down the issue quickly. Replaced damaged tiles and resealed the valley. Great work and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
