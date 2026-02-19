import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.833; // Granville
const AREA_LON = 151.012;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Granville",
  slug: "granville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Granville Roofing & Gutter Professionals",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GRANVILLE",
    bullets: [
      "Expert repairs for older tile and metal roofs",
      "Colorbond upgrades and full roof restorations",
      "Storm damage response and leak detection services",
      "Reliable guttering solutions for Western Sydney weather conditions and heritage homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Granville and Surrounding Areas",
    paragraphs: [
      "Granville features a diverse mix of heritage homes and modern developments, each with unique roofing needs. From established Federation cottages to contemporary townhouses, proper roof maintenance is essential in the Western Sydney climate.",
      "With temperatures regularly exceeding 40 degrees in summer and sudden storm cells throughout the year, roofs in Granville face significant thermal stress, tile expansion and water ingress risks that require expert attention and quality materials.",
      "We deliver comprehensive roofing solutions including tile repairs, metal roof replacements, Colorbond installations, leak detection and full restoration services. Our team understands local building stock and provides honest assessments with long-lasting workmanship.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repair work in Granville",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve Throughout Granville",
    subheading: "Western Sydney heat and storms create specific challenges for both heritage tile roofs and modern metal systems.",
    paragraphs: [
      "Older terracotta and concrete tiles crack under thermal cycling, while metal roofing expands in extreme heat causing fastener movement and eventual leaks. Many properties also suffer from outdated gutter systems unable to handle intense downpours.",
      "Signs like ceiling stains, rusted valleys, cracked ridge capping, overflowing gutters or visible tile movement all indicate your roof needs professional assessment before minor problems escalate into costly structural damage.",
      "Our inspection process identifies the root cause, whether thermal damage, storm impact, poor installation or natural wear. We then provide targeted repair options or full restoration plans with clear pricing and realistic timelines.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Tony R.",
    suburb: "Merrylands",
    quote:
      "They replaced the entire valley system and repointed the ridge on our old tile roof. The work was clean, the team was respectful and there have been no leaks since. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
