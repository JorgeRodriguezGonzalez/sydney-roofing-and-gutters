import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.758; // Forestville
const AREA_LON = 151.211;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Forestville",
  slug: "forestville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Northern Beaches Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FORESTVILLE",
    bullets: [
      "Storm damage repairs and emergency leak fixes",
      "Tile roof restoration and Colorbond installations",
      "Gutter replacement and valley iron upgrades",
      "Servicing Forestville and surrounding Northern Beaches suburbs with reliable workmanship",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Forestville Homes",
    paragraphs: [
      "Forestville homes face the full force of coastal weather — heavy rain, strong winds and high humidity that accelerate wear on older roofing materials. Left unchecked, minor damage turns into leaks, rust and structural problems.",
      "We specialise in restoring tile roofs, replacing rusted Colorbond sections and upgrading guttering systems to handle intense downpours. Our team works across all roof types common to the area, from post-war tile to modern metal systems.",
      "Whether you need urgent leak detection, a full roof restoration or new valley irons and flashings, we deliver clean workmanship backed by clear communication from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Forestville",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Forestville",
    subheading: "Coastal humidity and heavy weather create unique challenges for roofs in this part of Sydney.",
    paragraphs: [
      "Older tile roofs often suffer from cracked bedding, slipped tiles and deteriorated pointing. When combined with blocked gutters and corroded valley irons, water finds its way into the ceiling cavity during storms.",
      "Colorbond roofs can rust at seams and fasteners, especially in areas exposed to moisture and poor drainage. Sagging gutters and undersized downpipes add to overflow problems during heavy rain events.",
      "We assess the full roof system — tiles, flashings, valleys, gutters and downpipes — then recommend repairs or upgrades that address the root cause, not just the visible symptoms.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Frenchs Forest",
    quote:
      "They re-pointed the ridge and replaced two valley irons that were completely rusted. The quote was clear, the work was tidy and we have had zero leaks since. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
