import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.832; // Neutral Bay
const AREA_LON = 151.218;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Neutral Bay",
  slug: "neutral-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Neutral Bay Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NEUTRAL BAY",
    bullets: [
      "Harbour climate roof maintenance and repairs",
      "Tile, slate and metal roof restorations",
      "Gutter replacements for older homes and apartments",
      "Fast local service for Neutral Bay and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Neutral Bay",
    paragraphs: [
      "Neutral Bay combines heritage homes, walk-up apartments and modern townhouses — each with different roofing needs but all exposed to harbour winds, salt air and seasonal storms.",
      "We specialise in roofing repairs, roof restorations and guttering upgrades for properties across Neutral Bay, working with terracotta tiles, slate, Colorbond and metal roof systems built to handle local weather conditions.",
      "From leak detection and flashing repairs to full gutter replacements and valley maintenance, our team delivers high-quality workmanship with upfront pricing and reliable scheduling.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and restoration work in Neutral Bay",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Neutral Bay",
    subheading: "Harbour exposure and older housing stock mean roofs and gutters need regular care to stay watertight.",
    paragraphs: [
      "Salt air and wind-driven rain can accelerate rust and corrosion, especially in older metal gutters and exposed roof valleys. Left unchecked, this leads to leaks, interior water damage and costly remediation.",
      "Cracked terracotta tiles, worn ridge capping, blocked downpipes and sagging gutters are common issues we see in Neutral Bay properties. Each one needs proper assessment and repair to prevent further deterioration.",
      "We offer targeted repairs, preventative maintenance and complete roof restoration services — designed to extend the life of your roof and protect your property from the elements.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen D.",
    suburb: "Cremorne",
    quote:
      "Our old terracotta roof was leaking in two spots. They came out quickly, replaced the cracked tiles and fixed the valley flashing. Very thorough work and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
