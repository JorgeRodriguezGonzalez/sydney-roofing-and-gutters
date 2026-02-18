import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.658; // Bayview
const AREA_LON = 151.293;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bayview",
  slug: "bayview",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bayview Coastal Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BAYVIEW",
    bullets: [
      "Roofing solutions designed for salt air and coastal conditions",
      "Tile, Colorbond and metal roof repairs and restorations",
      "Gutter cleaning, repairs and full replacements",
      "Expert service for waterfront homes and hillside properties across Bayview",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering Services for Bayview Homes",
    paragraphs: [
      "Bayview sits between Pittwater and bushland reserves, creating a unique coastal environment where roofing systems face salt air, strong winds and heavy rainfall throughout the year.",
      "Our team specialises in roofing repairs, restoration work and gutter solutions that stand up to these conditions. From tile replacements to Colorbond installations, we work with the materials that suit waterfront and elevated properties.",
      "We deliver honest advice, quality workmanship and clear communication at every stage. Whether you need a leak repaired, gutters cleared, or a full roof restoration, we focus on solutions that last.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter work in coastal Bayview properties",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in Bayview",
    subheading: "Salt air, strong winds and seasonal storms create ongoing challenges for roofs and gutters in waterfront areas.",
    paragraphs: [
      "Coastal exposure accelerates corrosion on metal roofing, flashing and gutter systems. Fasteners rust through, seals break down and leaks appear sooner than they would in inland suburbs.",
      "Wind-driven rain tests every vulnerable point in your roof — cracked tiles, worn valleys, lifted ridges and poorly sealed penetrations. One storm can turn a small weakness into water damage inside your home.",
      "We provide full inspections, targeted repairs and preventive maintenance to keep your roof system watertight. Whether it is replacing corroded sections, resealing flashings or upgrading to marine-grade materials, we tailor the solution to Bayview conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Jennifer K.",
    suburb: "Mona Vale",
    quote:
      "They replaced our rusted gutters and repaired damaged tiles after years of coastal wear. The work was thorough, the team was professional and everything has held up perfectly through the last wet season.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
