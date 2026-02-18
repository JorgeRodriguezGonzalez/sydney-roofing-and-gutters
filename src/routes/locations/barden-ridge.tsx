import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.039; // Barden Ridge
const AREA_LON = 151.022;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Barden Ridge",
  slug: "barden-ridge",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Barden Ridge Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BARDEN RIDGE",
    bullets: [
      "Expert maintenance for homes in bushland surrounds",
      "Complete roof repairs, restorations and leak fixes",
      "Professional gutter cleaning and replacement services",
      "Rapid response across Barden Ridge and Sutherland Shire suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Barden Ridge Homes",
    paragraphs: [
      "Barden Ridge sits in a quiet bushland setting where established homes and native surroundings create a peaceful residential environment. With trees and vegetation nearby, roofs and gutters face extra demands from falling leaves, twigs and seasonal debris.",
      "We deliver roofing repairs, leak detection and guttering solutions tailored to the conditions of the Sutherland Shire. Our work includes Colorbond roofing, concrete and terracotta tile repairs, and valley and flashing upgrades to manage heavy rain and debris loads.",
      "From minor leak repairs to complete roof restorations, we focus on quality materials, precise workmanship and clear communication so every project meets the high standards that Barden Ridge residents expect.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter repairs in Barden Ridge",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Barden Ridge",
    subheading: "Bushland surroundings bring natural beauty but also increase the risk of blocked gutters and drainage problems.",
    paragraphs: [
      "Leaves, bark and seed pods accumulate quickly in roof valleys and gutters, especially after strong winds or storms. When drainage becomes restricted, water backs up and can cause internal leaks, ceiling stains and structural deterioration.",
      "Older roofs in Barden Ridge often show signs of cracked or dislodged tiles, rusted valley irons, corroded gutter sections and failing flashing seals. These issues worsen over time if not addressed with professional repairs.",
      "We provide thorough roof inspections, targeted leak repairs, gutter cleaning and replacement, and full restoration services to keep your roof watertight and resilient through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael K.",
    suburb: "Sutherland",
    quote:
      "After years of minor leaks we called them in for a full inspection. They replaced the valley irons and repointed the ridge caps. The roof has been completely dry ever since and the work was finished on schedule.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
