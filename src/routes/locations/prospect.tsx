import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.802; // Prospect
const AREA_LON = 150.913;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Prospect",
  slug: "prospect",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Trusted Roofing Services in Prospect",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PROSPECT",
    bullets: [
      "Expert repairs for all roof types and ages",
      "Metal roofing, Colorbond and tile roof specialists",
      "Gutter cleaning, repairs and complete replacements",
      "Fast response for leaks, storm damage and emergency repairs across Prospect",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Solutions for Prospect Homes",
    paragraphs: [
      "Prospect homes face the full force of western Sydney weather — intense summer heat that can reach over 40 degrees, sudden storms, and the kind of conditions that test every roof system over time.",
      "Whether you need a leak fixed quickly, damaged tiles replaced, or a complete roof restoration to extend the life of your home, we deliver practical solutions that suit local conditions and building styles.",
      "We work with Colorbond metal roofing, concrete and terracotta tiles, and provide guttering services designed to handle heavy downpours without overflow or water damage to your walls and foundations.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration work in Prospect",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Prospect Residents",
    subheading: "Western Sydney conditions put extra pressure on roofs — heat, storms and age all contribute to wear and tear.",
    paragraphs: [
      "Cracked or broken tiles, rusted metal sections, blocked gutters and sagging roof lines are all signs that your roof needs attention before small problems turn into expensive repairs or interior water damage.",
      "Heavy summer storms can overwhelm aging gutter systems, causing water to pool near the roofline or overflow into eaves and walls. That kind of damage spreads fast if it goes unnoticed.",
      "We provide thorough roof inspections, targeted repairs, gutter upgrades and full restorations — giving you a roof system that performs reliably through every season and keeps your home protected for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen P.",
    suburb: "Blacktown",
    quote:
      "Our roof was leaking in two spots after the last storm. They came out the same week, found the problem tiles and fixed everything properly. No more leaks and the price was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
