import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.613; // Currawong Beach
const AREA_LON = 151.280;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Currawong Beach",
  slug: "currawong-beach",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Remote Coastal Roofing for Currawong Beach",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CURRAWONG BEACH",
    bullets: [
      "Specialist services for waterfront and remote coastal properties",
      "Salt-resistant materials and corrosion prevention treatments",
      "Emergency leak repairs and storm damage restoration",
      "Colorbond, metal roofing and gutter solutions for harsh ocean conditions",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Gutters for Currawong Beach Homes",
    paragraphs: [
      "Currawong Beach sits in one of the most exposed coastal locations in Sydney, accessible only by water or seaplane. Properties here face relentless salt spray, strong ocean winds and limited access for maintenance.",
      "We service beach houses and holiday homes across this remote enclave, providing corrosion-resistant roofing, metal re-sealing, leak detection and gutter upgrades designed specifically for extreme coastal exposure.",
      "From Colorbond replacement to rust treatment and emergency leak patches, our team understands the logistics of working in isolated waterfront settings where quality work and planning are critical.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing and guttering services for Currawong Beach properties",
  },

  problemsBlock: {
    heading: "Roofing Issues Unique to Currawong Beach and Coastal Properties",
    subheading: "Constant salt exposure and ocean winds accelerate rust, fatigue fasteners and compromise roof seals faster than inland suburbs.",
    paragraphs: [
      "Metal roofs in this area often show premature rust, lifting sheets, blown flashings and corroded screws. Even minor damage can escalate quickly when repair access is limited by water-only entry.",
      "Blocked gutters filled with debris from surrounding bushland cause overflow during storms, and corroded downpipes fail when you need them most. Properties left unchecked face interior leaks and structural timber damage.",
      "We conduct thorough inspections, source marine-grade fixings and rust-proof coatings, and schedule work around ferry availability to ensure your roof system performs in one of the harshest climates around Sydney.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura K.",
    suburb: "Palm Beach",
    quote:
      "Our beach house had rust along every ridge cap and water pooling near the eaves. They coordinated the ferry run, replaced all corroded sections and sealed everything perfectly. The roof looks great and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
