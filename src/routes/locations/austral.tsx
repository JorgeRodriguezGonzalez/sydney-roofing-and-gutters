import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.930; // Austral
const AREA_LON = 150.808;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Austral",
  slug: "austral",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Modern Estate Roofing in Austral",
    titleTop: "ROOFING SERVICES",
    titleBottom: "AUSTRAL",
    bullets: [
      "New home roofing installations and warranty work",
      "Fast repairs for Colorbond and tile roofs",
      "Gutter cleaning and downpipe maintenance",
      "Servicing Austral and surrounds with reliable quotes and professional finishes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Austral Homes",
    paragraphs: [
      "Austral is one of the fastest-growing residential areas in south-west Sydney, with modern homes, larger blocks and high-quality construction. Even in newer estates, roofs need proper inspection and maintenance to stay in top condition through storm season and extreme heat.",
      "We provide roofing repairs, gutter cleaning, leak detection and full installations across Austral and nearby suburbs. Our team works with Colorbond metal roofing, concrete tile and modern composite systems — matching builder standards and warranty requirements where needed.",
      "Whether you need a minor repair, a full gutter replacement or proactive maintenance before the next storm, we deliver clear quotes, clean workmanship and long-lasting results tailored to the local climate.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof installations and repairs in Austral Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Austral",
    subheading: "Even in newer estates, roofs need attention from weather, debris and settling periods.",
    paragraphs: [
      "New homes in Austral can experience minor settling issues, builder debris in gutters or minor flashing leaks during the warranty period. If you notice water stains, blocked downpipes or lifted roof sheets after storms, early attention prevents bigger repair costs down the track.",
      "Western Sydney heat can reach over 40 degrees in summer, putting extra stress on metal roofing and sealants. Combined with sudden storms and heavy rain, small weaknesses can turn into leaks very quickly if they are not addressed.",
      "We offer fast inspections, targeted repairs and full restoration services to keep your roof system watertight and performing as designed. From gutter realignment to full tile replacement, we focus on long-term reliability and professional finish.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma S.",
    suburb: "Leppington",
    quote:
      "We had a leak above the garage after the last storm. They came out fast, found the problem with the flashing and fixed it properly. Great communication and clean finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
