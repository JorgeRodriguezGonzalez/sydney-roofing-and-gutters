import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.772; // Allambie Heights
const AREA_LON = 151.252;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Allambie Heights",
  slug: "allambie-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Northern Beaches Roofing Specialists for Allambie Heights",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ALLAMBIE HEIGHTS",
    bullets: [
      "Elevated suburb roofing adapted to coastal conditions",
      "Colorbond, tile and metal roof repairs and restorations",
      "Guttering solutions for heavy Northern Beaches rainfall",
      "Expert leak detection and storm damage repairs across the area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes in Allambie Heights",
    paragraphs: [
      "Allambie Heights sits elevated above the Northern Beaches coast, where homes experience a unique mix of salt air exposure, strong winds and heavy seasonal storms that test roof systems year after year.",
      "Our team provides roof repairs, restorations and gutter upgrades tailored to the conditions here — working with tile, Colorbond and metal roofs to keep them watertight and weather-resistant.",
      "From leak detection to full roof restoration, we focus on quality materials, reliable workmanship and clear communication so your roof stays protected through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Allambie Heights",
  },

  problemsBlock: {
    heading: "Common Roofing Problems in Allambie Heights We Repair",
    subheading: "Coastal winds, salt air and heavy rain combine to accelerate wear on roofs and gutters.",
    paragraphs: [
      "Homes in elevated coastal suburbs face constant exposure to moisture and wind-driven salt that corrodes flashing, gutters and roof fasteners over time. Small rust spots can quickly become bigger structural problems.",
      "If you see rust stains on ceilings, cracked or lifted tiles, blocked or sagging gutters, or water pooling after storms, your roof system may need attention before the next weather event.",
      "We assess the full roof structure, identify problem areas and provide targeted repairs or restoration options that extend roof life and prevent costly water damage inside your home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Brookvale",
    quote:
      "After years of coastal weather our roof was showing rust and leaks. The team completed a full restoration with new Colorbond and ridge capping. Looks great and no more water issues.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
