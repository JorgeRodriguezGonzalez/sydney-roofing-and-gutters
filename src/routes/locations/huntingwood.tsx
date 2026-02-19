import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.795; // Huntingwood
const AREA_LON = 150.891;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Huntingwood",
  slug: "huntingwood",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Industrial & Commercial Roofing Experts in Huntingwood",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HUNTINGWOOD",
    bullets: [
      "Metal and Colorbond roof specialists for warehouses",
      "Industrial roof repairs, leak detection and restoration",
      "Commercial guttering systems and drainage upgrades",
      "Fast response for businesses in the Western Sydney industrial corridor",
    ],
  },

  introBlock: {
    heading: "Commercial & Industrial Roofing Services in Huntingwood",
    paragraphs: [
      "Huntingwood is home to extensive industrial and warehouse facilities, where large roof areas and flat metal roofing are exposed to intense heat, storm damage and heavy use. A small leak or failing gutter can disrupt operations and damage valuable stock.",
      "We provide commercial roof repairs, metal roof restoration, industrial guttering upgrades and emergency leak detection for warehouses, factories and commercial properties across the Western Sydney industrial zone.",
      "Our team works with Colorbond steel, metal sheeting and commercial drainage systems — delivering fast turnaround, minimal disruption and long-term protection for your facility.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Commercial roof repairs and industrial guttering in Huntingwood",
  },

  problemsBlock: {
    heading: "Commercial Roofing & Gutter Problems We Fix in Huntingwood",
    subheading: "Large industrial roofs face extreme heat, storm exposure and drainage challenges that can halt operations.",
    paragraphs: [
      "Metal roofs in Huntingwood endure 40-degree-plus heat in summer, which accelerates rust, expands fasteners and weakens seals. When storms roll through, loose sheeting, blocked box gutters and failing flashing can cause sudden leaks over valuable equipment or stock.",
      "If your warehouse roof is showing rust streaks, ponding water, loose screws or recurring leaks near skylights and valleys, a targeted inspection can prevent costly downtime.",
      "We deliver commercial roof repairs, box gutter replacement, metal restoration and drainage upgrades — so your facility stays dry, compliant and operational year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Paul G.",
    suburb: "Blacktown",
    quote:
      "Our warehouse had a persistent leak near the loading bay. They tracked it down, replaced the rusted section and upgraded the gutter outlet. Quick work and no more water damage — highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
