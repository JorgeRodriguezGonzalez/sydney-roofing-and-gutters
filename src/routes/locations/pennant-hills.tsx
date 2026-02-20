import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.738; // Pennant Hills
const AREA_LON = 151.072;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Pennant Hills",
  slug: "pennant-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Pennant Hills Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PENNANT HILLS",
    bullets: [
      "Expert roof repairs for homes near bushland",
      "Gutter cleaning and maintenance for tree-heavy areas",
      "Leak detection and roof restoration services",
      "Fast response times for storm damage and emergency repairs throughout Pennant Hills",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services for Pennant Hills Homes",
    paragraphs: [
      "Pennant Hills is surrounded by mature trees and bushland, creating a beautiful natural environment but also unique roofing challenges. Falling leaves, branches and organic debris can quickly overwhelm gutters and valleys, leading to blockages and water damage.",
      "We specialise in maintaining roofs and gutters for homes in tree-rich areas, providing thorough inspections, preventative maintenance and long-lasting repairs. Whether you have Colorbond metal, concrete tiles or terracotta, we work with all materials common in the area.",
      "Our team understands the local conditions including storm activity, heavy rainfall and the constant leaf fall that affects drainage systems. We focus on clear communication, reliable workmanship and practical solutions that keep your roof system functioning year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and gutter maintenance in Pennant Hills",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Pennant Hills",
    subheading: "Tree canopy and bushland proximity mean gutters need regular attention to prevent overflow and structural damage.",
    paragraphs: [
      "Homes surrounded by gum trees and native vegetation face constant accumulation of leaves, bark and seed pods in valleys, gutters and downpipes. When these systems become blocked, water backs up during rain and can cause staining, rust, leaks and even rotting fascia boards.",
      "We regularly repair cracked or slipped tiles from storm damage, replace rusted gutter sections, fix leaking valleys and re-seal roof penetrations that have deteriorated over time. Ignoring these problems allows small leaks to become expensive structural repairs.",
      "Our service includes full gutter cleaning, roof inspections with photo reports, targeted repairs and complete roof restoration options. We help Pennant Hills homeowners stay ahead of maintenance before problems escalate into major damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen K.",
    suburb: "Thornleigh",
    quote:
      "After years of neglect, our gutters were completely blocked with leaves and our roof was leaking. The team cleaned everything out, replaced damaged sections and resealed problem areas. Very thorough and professional.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
