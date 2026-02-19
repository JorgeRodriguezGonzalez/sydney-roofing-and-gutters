import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.848; // Kirribilli
const AREA_LON = 151.216;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kirribilli",
  slug: "kirribilli",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kirribilli Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KIRRIBILLI",
    bullets: [
      "Expert roofing for heritage and modern harbour homes",
      "Tile, slate and metal roof repairs and restorations",
      "Leak detection and guttering upgrades for coastal exposure",
      "Trusted service across Kirribilli, Milsons Point and surrounding harbour suburbs",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing & Guttering for Kirribilli Homes",
    paragraphs: [
      "Kirribilli is home to some of the finest heritage and contemporary residences in Sydney, many with direct harbour exposure and architectural roofing that demands specialist care and attention to detail.",
      "Our team provides roof repairs, restorations and guttering work across Kirribilli, working with slate, terracotta tiles, Colorbond and metal roofing to protect homes from harbour winds, salt air and driving rain.",
      "Whether you need leak detection, roof restoration or gutter replacement, we deliver clean workmanship, respectful service and long-lasting results for one of the most prestigious waterfront communities in Sydney.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering work in Kirribilli harbour homes",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Issues We Fix in Kirribilli",
    subheading: "Harbour exposure means roofs face constant wind, salt air and weather — making regular maintenance essential.",
    paragraphs: [
      "Salt air accelerates corrosion on metal roofs and gutters, while harbour winds lift tiles and drive water into valleys and flashing. Add in heritage roofing materials like slate or terracotta, and small issues can escalate fast.",
      "Common problems include rusted gutters, wind-lifted tiles, cracked slate, blocked downpipes, leaking valleys and water stains on heritage ceilings — all requiring prompt, careful attention.",
      "We provide targeted repairs, restoration services and preventative maintenance tailored to the unique demands of harbour-side living — protecting both the structure and the character of your Kirribilli home.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Elizabeth R.",
    suburb: "Milsons Point",
    quote:
      "Our heritage terrace had recurring leaks after harbour storms. They replaced the ridge capping and repointed the valleys without disturbing the original slate. Outstanding craftsmanship and care throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
