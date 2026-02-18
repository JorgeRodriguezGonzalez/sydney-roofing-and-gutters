import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.082; // Airds
const AREA_LON = 150.832;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Airds",
  slug: "airds",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Airds Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "AIRDS",
    bullets: [
      "Comprehensive roof repairs for residential properties",
      "Metal roof restoration and Colorbond installations",
      "Gutter cleaning and downpipe replacement services",
      "Fast response for leak detection and storm damage across Airds",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Homes in Airds",
    paragraphs: [
      "Airds sits in the Campbelltown area where summer heat and seasonal storms can wear down metal roofs, crack tiles and block guttering systems. Regular inspections help avoid expensive surprises later on.",
      "We handle roof repairs, restorations and full replacements for tile, Colorbond and metal roofing. Whether you need a quick leak fix or a complete gutter upgrade, we keep your home protected from weather extremes.",
      "Our team operates across Airds and surrounding suburbs, providing clear quotes, clean workmanship and long-term solutions that suit local conditions and budget requirements for homeowners.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and guttering work in Airds",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve for Airds Homes",
    subheading: "Hot summers and heavy rain can accelerate rust, tile damage and gutter blockages across the region.",
    paragraphs: [
      "If your roof has rusted valleys, cracked tiles or sagging gutters, water can seep into ceilings and walls. Ignoring these signs often leads to mould, structural damage and higher repair bills down the track.",
      "Blocked downpipes and overflowing gutters are common after storms, especially when debris builds up in box gutters or internal valleys. A single downpour can expose weak points that have been ignored for years.",
      "We provide targeted roof repairs, full restorations and gutter replacements designed to handle the conditions in Airds. Our inspections identify hidden problems before they turn into major leaks or water damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Campbelltown",
    quote:
      "The team replaced our rusted gutters and fixed several cracked tiles. Everything was done quickly and the roof looks great now. Very happy with the service and price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
