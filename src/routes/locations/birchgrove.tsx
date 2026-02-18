import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.851; // Birchgrove
const AREA_LON = 151.177;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Birchgrove",
  slug: "birchgrove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Birchgrove Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BIRCHGROVE",
    bullets: [
      "Heritage roof repairs and tile restoration",
      "Harbour wind and salt air protection",
      "Leak detection for older tile and slate roofs",
      "Guttering upgrades to manage heavy rain and mature tree debris",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Birchgrove Heritage Homes",
    paragraphs: [
      "Birchgrove is home to Federation and Victorian architecture, mature street trees and harbour breezes that bring salt air straight to your roof. These older homes need care that understands both heritage materials and modern weather challenges.",
      "From terracotta tile repairs and slate restoration to copper guttering and custom flashing, we work with the materials and methods that suit Inner West heritage character — without compromising on waterproofing or durability.",
      "Our team has experience with heritage-listed properties, council requirements and insurance assessments across Birchgrove, Balmain and the surrounding peninsula — so you get accurate quotes, clean workmanship and long-term peace of mind.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration and tile repairs in Birchgrove",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Birchgrove",
    subheading: "Harbour winds, mature trees and older roofing materials can combine to create leaks, blockages and corrosion.",
    paragraphs: [
      "Salt air accelerates rust on metal flashings and older gutters, while mature trees drop leaves and debris that block downpipes and valleys. If your roof is original or decades old, small cracks in tiles or missing mortar can let water in before you notice it.",
      "We also see sagging gutters, corroded valley irons, cracked ridge capping and damp ceilings — all common with heritage tiles, weathered slate and ageing Colorbond installations near the harbour.",
      "Whether you need a single tile replaced, a full gutter restoration or a comprehensive roof inspection before sale, we provide clear assessments, transparent quotes and respectful workmanship that suits the character of your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Fiona K.",
    suburb: "Balmain",
    quote:
      "They came out for a heritage tile repair and ended up replacing a section of copper guttering. Everything matched perfectly and the work was done without fuss. Very happy with the care taken.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
