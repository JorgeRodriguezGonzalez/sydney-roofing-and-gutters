import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.963; // Kogarah
const AREA_LON = 151.132;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kogarah",
  slug: "kogarah",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kogarah Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KOGARAH",
    bullets: [
      "Repairs for tile and Colorbond roofs",
      "Leak detection and targeted roof restoration",
      "Guttering maintenance for heavy downpours",
      "Honest quotes for homes across Kogarah and surrounds",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Services Across Kogarah",
    paragraphs: [
      "Kogarah sits in the heart of the St George region, with a mix of period homes and newer developments. Many roofs here have seen decades of coastal weather, meaning rust, cracked tiles and tired valleys are common problems.",
      "We specialise in roof repairs, full restorations and guttering upgrades across Kogarah and nearby suburbs. From tile replacements to Colorbond re-roofing, we work with a range of roof types and understand the impacts of salt air and seasonal storms.",
      "Our team delivers clean workmanship, clear communication and long-term fixes — whether you need a leak repaired, ridge capping replaced or a complete roof assessment for peace of mind.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs in Kogarah by Sydney Roofing",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Problems We Solve in Kogarah",
    subheading: "Coastal winds, salt exposure and ageing materials can create recurring issues if left unchecked.",
    paragraphs: [
      "Many homes in Kogarah have roofs that are 30+ years old, which means rusted gutters, damaged flashing, cracked tiles and sagging roof lines. Combine that with salt air from Botany Bay and you get accelerated corrosion and water ingress.",
      "Leaking ceilings, blocked valleys, overflowing gutters and stained internal walls are all signs that your roof system needs attention. The longer these issues go unaddressed, the more expensive the eventual repair becomes.",
      "We provide comprehensive roof inspections, targeted repairs and full restoration solutions. Our goal is to stop leaks at the source, improve drainage and extend the lifespan of your roof with high-quality materials and experienced tradespeople.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Rockdale",
    quote:
      "Our tiles were cracked and the gutters were rusted right through. They replaced everything and sealed all the problem areas. The whole process was smooth and the quality is excellent.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
