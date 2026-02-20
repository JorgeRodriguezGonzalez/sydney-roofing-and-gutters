import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.833; // Silverwater
const AREA_LON = 151.048;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Silverwater",
  slug: "silverwater",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Industrial & Residential Roofing in Silverwater",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SILVERWATER",
    bullets: [
      "Industrial and commercial roofing specialists",
      "Leak repairs for warehouses and residential properties",
      "Metal roof maintenance for flat and pitched systems",
      "Reliable service across Silverwater and surrounding inner west suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Silverwater Properties",
    paragraphs: [
      "Silverwater is home to a diverse mix of industrial complexes, commercial warehouses and residential streets. Each type of property requires roofing solutions that can handle heavy use, weather exposure and structural demands unique to the area.",
      "We service metal roofs, Colorbond installations, flat membrane systems and traditional tile roofs across the suburb. Whether you need urgent leak repairs, gutter replacement or full roof restoration, our team works efficiently to minimise disruption and deliver durable results.",
      "From large commercial buildings to family homes, we bring decades of experience in roofing repairs, maintenance and installations — all backed by clear communication, competitive pricing and a commitment to quality workmanship.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and maintenance in Silverwater",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Silverwater",
    subheading: "Industrial and residential properties face unique challenges from weather exposure and structural demands.",
    paragraphs: [
      "Metal roofs on warehouses and commercial buildings can develop rust spots, loose fixings and membrane failures — especially after years of sun exposure and thermal cycling. Left unchecked, these issues lead to water ingress and interior damage.",
      "Residential properties often deal with cracked tiles, blocked gutters and deteriorating flashings. Heavy rain combined with ageing roof systems creates leaks, ceiling stains and costly repairs if not addressed early.",
      "We provide thorough inspections, targeted repairs and preventative maintenance for all roof types. Whether you need emergency leak fixes, gutter upgrades or complete roof restoration, we deliver solutions that last.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Mark T.",
    suburb: "Auburn",
    quote:
      "Our warehouse had a persistent leak near the roller door. They identified the issue quickly, replaced damaged sheeting and sealed everything properly. No more water pooling inside — great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
