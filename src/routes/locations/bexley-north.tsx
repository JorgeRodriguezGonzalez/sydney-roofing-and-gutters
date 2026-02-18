import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google maps listing).
const AREA_LAT = -33.940; // Bexley North
const AREA_LON = 151.114;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bexley North",
  slug: "bexley-north",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bexley North Roofing Specialists Since 1999",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEXLEY NORTH",
    bullets: [
      "Expert repairs for established brick homes and renovated properties",
      "Tile, Colorbond and slate roofing solutions for all conditions",
      "Gutter cleaning and replacement to handle St George downpours",
      "Fast response times and honest quotes across the local area",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Bexley North Homes",
    paragraphs: [
      "Bexley North features a mix of established homes and renovated properties, many with terracotta tiles or metal roofing that have stood for decades. Over time, even the best roofs need attention to stay watertight and structurally sound.",
      "From leak repairs and tile replacements to full restorations and modern Colorbond installations, we deliver roofing work that suits the character of your home while meeting current Australian standards.",
      "Our team understands local weather patterns in the St George region and the importance of proper drainage systems. We combine skilled workmanship with clear communication to deliver results that protect your home for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and restoration in Bexley North",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Bexley North",
    subheading: "Older roofs and ageing gutters can develop problems that lead to water damage if left unchecked.",
    paragraphs: [
      "Many Bexley North homes feature terracotta or concrete tiles that may have been installed decades ago. Cracked tiles, rusted valley irons and worn flashing can allow water to penetrate during heavy rain, causing ceiling stains and structural damage.",
      "Blocked gutters are another common issue, especially in streets with established trees. When downpipes clog or gutters sag, water pools and overflows into eaves, fascias and foundations.",
      "We provide thorough inspections to identify the root cause of leaks, blockages and deterioration. Whether you need targeted repairs or a complete roof restoration, we deliver quality work that keeps your home dry and secure.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Bexley",
    quote:
      "Our terracotta tiles were cracked and we had leaks in two bedrooms. The team replaced broken tiles and resealed the valleys. No more drips and the roof looks great again.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
