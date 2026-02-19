import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.751; // Dee Why
const AREA_LON = 151.288;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dee Why",
  slug: "dee-why",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Dee Why Coastal Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DEE WHY",
    bullets: [
      "Salt-resistant roofing solutions for beachside homes",
      "Expert repairs for coastal wind and corrosion damage",
      "Professional guttering upgrades for heavy coastal rain",
      "Fast response across Dee Why, Curl Curl and surrounding Northern Beaches",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Dee Why Coastal Properties",
    paragraphs: [
      "Dee Why sits right on the coast, which means every roof faces constant exposure to salt spray, strong ocean winds and rapid weather changes that accelerate wear on tiles, metal roofing and gutter systems.",
      "We work with Colorbond, tile and metal roofs across Dee Why, providing repairs, restorations and preventative maintenance designed specifically for the harsh conditions of beachside living in the Northern Beaches area.",
      "Whether you have leaking valleys, rusted flashings, blocked gutters or storm damage, our team delivers clear quotes, quality workmanship and long-lasting solutions built to withstand the coastal environment.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs for coastal homes in Dee Why",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Dee Why Properties",
    subheading: "Coastal conditions mean your roof works harder than most — salt corrosion and wind-driven rain take their toll.",
    paragraphs: [
      "Salt air accelerates rust on metal roofs, flashings and gutter systems. Combined with strong coastal winds and heavy rain, even small issues like cracked tiles or minor leaks can quickly escalate into more serious structural damage.",
      "Blocked downpipes and rusted valley irons are common problems we see in Dee Why homes, especially after big storms. Water overflow, damp ceilings and stained walls are signs that need immediate attention before they worsen.",
      "We provide targeted roof repairs, full restorations and preventative maintenance tailored to coastal properties — keeping your home protected from the next storm and extending the life of your roof system.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma J.",
    suburb: "Curl Curl",
    quote:
      "Our roof was showing rust spots and the gutters overflowed constantly. They replaced the corroded sections, cleaned everything out and the difference is huge. Great work from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
