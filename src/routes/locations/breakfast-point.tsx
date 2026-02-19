import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.846; // Breakfast Point
const AREA_LON = 151.119;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Breakfast Point",
  slug: "breakfast-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Breakfast Point Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BREAKFAST POINT",
    bullets: [
      "Waterfront roofing for modern homes and apartments",
      "Expert leak repairs and roof restoration services",
      "Colorbond and metal roofing suited to riverside conditions",
      "Fast response across Canada Bay and inner west waterfront suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Breakfast Point Waterfront Homes",
    paragraphs: [
      "Breakfast Point combines modern residential development with stunning waterfront views along the Parramatta River. This unique location means roofs face specific challenges from moisture, humidity and exposure to water-driven weather patterns that can accelerate wear and corrosion.",
      "We provide comprehensive roofing and guttering services for homes and apartments throughout Breakfast Point, from leak detection and repairs to full roof restorations using Colorbond and metal systems designed for coastal-adjacent environments.",
      "Our team understands the architecture and building standards of modern waterfront suburbs. We deliver clean workmanship, transparent quotes and long-lasting solutions that protect your investment and maintain the integrity of your property year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Breakfast Point waterfront properties",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Breakfast Point Homes",
    subheading: "Riverside humidity and modern building materials require regular maintenance to prevent long-term damage and costly repairs.",
    paragraphs: [
      "Proximity to the Parramatta River means higher humidity levels, which can lead to rust, corrosion and mould growth in roofing systems. Metal flashings, gutters and valleys are particularly vulnerable if not properly maintained or protected.",
      "Common issues we address include rusted gutters, leaking roof penetrations, cracked sealants, pooling water on flat sections and deteriorating flashing around chimneys and skylights. Early detection prevents expensive structural damage and water ingress.",
      "We offer thorough inspections, targeted repairs and full restoration packages tailored to waterfront conditions. Whether you need emergency leak fixes or scheduled maintenance, we provide reliable service with minimal disruption to your daily routine.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma T.",
    suburb: "Rhodes",
    quote:
      "Our metal roof was showing rust near the gutters. The team responded quickly, replaced the affected sections and applied protective coating. Very thorough work and reasonably priced for the waterfront area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
