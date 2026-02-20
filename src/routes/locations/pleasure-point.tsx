import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.981; // Pleasure Point
const AREA_LON = 150.968;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Pleasure Point",
  slug: "pleasure-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Experts at Pleasure Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PLEASURE POINT",
    bullets: [
      "Salt air protection and corrosion-resistant materials",
      "Roof restoration for coastal weather exposure",
      "Metal roofing, Colorbond and tile repair specialists",
      "Emergency leak repairs and guttering solutions for waterfront homes",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Coastal Homes in Pleasure Point",
    paragraphs: [
      "Pleasure Point sits right on the water, which means roofs face constant salt spray, ocean winds and humidity that can accelerate wear on metal flashings, gutters and fasteners.",
      "We specialise in roofing solutions for coastal environments, using marine-grade materials and corrosion-resistant finishes that stand up to waterfront conditions while protecting against leaks and rust damage.",
      "Whether you need preventative maintenance, emergency leak repairs, metal roof replacement or gutter upgrades, our team delivers clean workmanship with materials built for long-term performance near the coast.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing and gutter repairs at Pleasure Point",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Pleasure Point",
    subheading: "Coastal exposure accelerates corrosion, rust and fastener failure — small issues become costly if left unaddressed.",
    paragraphs: [
      "Salt-laden winds attack metal surfaces, causing rust spots, corroded screws and weakened flashings that allow water into ceiling spaces and wall cavities over time.",
      "If you notice rust streaks, loose ridge capping, dripping ceilings during storms or gutters pulling away from fascias, these are signs that salt corrosion is compromising structural integrity.",
      "We provide targeted repairs using marine-grade fasteners, protective coatings and rust-resistant materials — plus full inspections to identify hidden damage before it spreads and causes interior water issues.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Melissa K.",
    suburb: "Sussex Inlet",
    quote:
      "Salt damage was eating through the roof screws and causing leaks every time it rained. They replaced all corroded fasteners and resealed everything. Completely watertight now — highly recommend for coastal properties.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
