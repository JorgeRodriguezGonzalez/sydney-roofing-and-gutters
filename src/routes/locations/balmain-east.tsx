import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.854; // Balmain East
const AREA_LON = 151.189;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Balmain East",
  slug: "balmain-east",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Specialists in Balmain East",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BALMAIN EAST",
    bullets: [
      "Expert repairs for heritage and period roofing",
      "Slate, terracotta and Colorbond restoration work",
      "Salt air protection and coastal maintenance plans",
      "Gutter cleaning and downpipe upgrades for sandstone cottages and waterfront homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing for Historic Homes in Balmain East",
    paragraphs: [
      "Balmain East is one of the most characterful inner west suburbs, known for its beautifully preserved Victorian and Federation homes, many featuring original slate and terracotta roofs that demand specialist attention.",
      "The peninsula position means constant harbour wind, salt air and weather exposure that can accelerate wear on older roofing materials. Without regular maintenance, even well-built heritage roofs can develop leaks, cracked tiles or rusted guttering.",
      "We work across Balmain East providing sympathetic repairs, slate replacements, gutter restoration and full re-roofing where needed. Our approach balances heritage character with modern weatherproofing, so your home stays protected and true to its design.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage slate roof restoration in Balmain East",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Historic Homes in Balmain East",
    subheading: "Older roofs need regular care to handle coastal conditions and decades of settling.",
    paragraphs: [
      "Many homes in Balmain East were built more than a century ago with hand-laid slate or terracotta tiles. Over time, roof timbers shift, mortar breaks down and individual tiles crack or slip out of place.",
      "Salt air from the harbour speeds up corrosion in metal gutters and flashings, while windstorms can lift loose tiles or fill valleys with debris. The result is often slow leaks that go unnoticed until ceiling damage appears.",
      "We provide thorough inspections, matching replacement tiles where possible, re-bedding and re-pointing services, and modern flashing upgrades that protect your heritage character without compromising the original look.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emily R.",
    suburb: "Birchgrove",
    quote:
      "They sourced matching slate tiles for our Victorian terrace and re-pointed the ridge capping. The work was neat, respectful of the heritage fabric and solved our leak problem completely.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
