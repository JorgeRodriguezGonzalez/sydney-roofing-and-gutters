import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.778; // Freshwater
const AREA_LON = 151.289;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Freshwater",
  slug: "freshwater",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Freshwater",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FRESHWATER",
    bullets: [
      "Corrosion-resistant roofing built for salt air exposure",
      "Expert repairs for coastal weather and wind damage",
      "Colorbond and metal roofing installations",
      "Fast inspections and competitive quotes for beachside homes",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Freshwater Beachside Properties",
    paragraphs: [
      "Freshwater is one of the Northern Beaches most loved coastal suburbs, and that proximity to the ocean means roofs face constant exposure to salt spray, strong winds and unpredictable weather that accelerates wear and corrosion.",
      "We work across Freshwater providing roof repairs, restoration, leak detection and guttering solutions designed specifically for coastal conditions — using materials and finishes that withstand the marine environment year after year.",
      "Whether you need urgent leak repairs after a storm, rust treatment on older metal roofs, or a full Colorbond installation for long-term protection, our team delivers clean workmanship, transparent pricing and results that last well beyond the warranty period.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof restoration and repairs in Freshwater",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Freshwater Residents",
    subheading: "Salt air and coastal winds can quietly damage roofs before you notice leaks or interior water stains.",
    paragraphs: [
      "Even homes set back from the beachfront experience accelerated corrosion on gutters, flashing and older metal roofing. Rust spots, peeling paint and discoloration are early warning signs that protective coatings have failed and moisture is taking hold.",
      "Wind-driven rain during easterly storms often finds weak points around chimneys, skylights and ridge capping. If you notice damp patches on ceilings after heavy rain or water pooling in gutters that refuse to drain, the problem is usually more extensive than it appears.",
      "We conduct thorough inspections to identify hidden corrosion, compromised seals and structural wear before they escalate into expensive interior damage. Our repairs use marine-grade materials and proper sealing techniques to ensure the fix actually holds up in the coastal environment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca H.",
    suburb: "Curl Curl",
    quote:
      "After years of watching rust spread across our gutters, we finally called for a full assessment. They replaced everything with Colorbond, resealed the flashing and cleared all the downpipes. No leaks since, even in heavy storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
