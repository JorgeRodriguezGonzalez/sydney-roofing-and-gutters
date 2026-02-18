import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.800; // Balgowlah Heights
const AREA_LON = 151.268;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Balgowlah Heights",
  slug: "balgowlah-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Balgowlah Heights",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BALGOWLAH HEIGHTS",
    bullets: [
      "Expert coastal roof repairs and restorations",
      "Salt-resistant coatings and Colorbond installations",
      "Leak detection and guttering upgrades for ocean exposure",
      "Fast quotes across Balgowlah Heights and surrounding Northern Beaches suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Balgowlah Heights Homes",
    paragraphs: [
      "Balgowlah Heights sits in an elevated coastal position between Manly and the harbour, where roofs face constant exposure to salt air, strong winds and afternoon storms rolling in from the ocean.",
      "We work across the Northern Beaches providing roof repairs, restorations and protective coatings designed for coastal conditions — whether you have terracotta tiles, Colorbond or metal sheeting.",
      "From fixing leaks caused by wind-driven rain to replacing corroded gutters and applying membrane systems, our team delivers long-lasting solutions tailored to local weather patterns and building styles.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration services in Balgowlah Heights",
  },

  problemsBlock: {
    heading: "Common Roofing Problems in Balgowlah Heights We Solve",
    subheading: "Coastal homes need proactive roof care to prevent salt corrosion and wind damage from escalating.",
    paragraphs: [
      "Salt air accelerates rust in metal roofs and gutters, while strong easterly winds can lift tiles, crack ridge capping and drive water under flashings — especially on older homes.",
      "If you are seeing rust streaks, damp ceiling patches, loose or broken tiles, or gutters pulling away from fascia boards, these are early warning signs that should not be ignored.",
      "We provide thorough inspections, targeted repairs and preventative maintenance plans that protect your roof from coastal wear and keep your home dry through every storm season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Fairlight",
    quote:
      "They replaced our rusted valley flashing and resealed the ridge capping after years of ocean wind damage. The team was punctual, respectful and left everything spotless. Highly recommended for Northern Beaches homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
