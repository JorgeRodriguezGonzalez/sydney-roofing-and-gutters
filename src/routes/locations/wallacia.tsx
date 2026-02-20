import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.867; // Wallacia
const AREA_LON = 150.640;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wallacia",
  slug: "wallacia",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rural Roofing & Gutter Specialists in Wallacia",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WALLACIA",
    bullets: [
      "Expert repairs for rural and acreage properties",
      "Metal roofing installations and Colorbond upgrades for large homes",
      "Storm damage repairs and emergency leak response",
      "Gutter replacements designed for heavy Western Sydney downpours and bushfire conditions",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services Across Wallacia and Rural Western Sydney",
    paragraphs: [
      "Wallacia sits on the western edge of Sydney, where semi-rural properties meet the Blue Mountains foothills. Larger roof footprints, exposure to extreme weather and variable terrain mean roofs here face different challenges to standard suburban homes.",
      "From Colorbond installations and tile restorations to gutter replacements and leak detection, we deliver roofing solutions built for the climate. Whether you have a modern acreage home or an older rural dwelling, we tailor our approach to suit the structure and site conditions.",
      "Our team works across Wallacia, Greendale and nearby areas with consistent quality. We handle everything from minor repairs through to complete re-roofing projects, with transparent pricing and durable workmanship that lasts through hot summers and heavy storms.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for acreage properties in Wallacia",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Wallacia and Acreage Properties",
    subheading: "Rural roofs face unique pressures — extreme heat, wind exposure, dust and unpredictable storm damage.",
    paragraphs: [
      "Properties with large roof areas and exposed locations often see faster deterioration. Cracked tiles, rusted valleys, loose ridge capping and blocked gutters become serious problems when the next storm hits or temperatures exceed forty degrees for days at a time.",
      "Many older rural homes also have poor drainage design or undersized gutters that overflow in heavy rain, leading to water pooling around foundations or damage to fascias and eaves. Regular inspection is essential to catch problems before they escalate.",
      "We provide comprehensive assessments and tailored solutions — from repairing isolated damage to full roof replacements using modern materials. Our approach ensures your roof can handle Western Sydney conditions year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Greendale",
    quote:
      "They re-roofed our entire acreage property with Colorbond and the finish is excellent. Handled the steep pitch and tricky access without issue. Great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
