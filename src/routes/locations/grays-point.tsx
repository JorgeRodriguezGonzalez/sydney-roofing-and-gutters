import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.058; // Grays Point
const AREA_LON = 151.085;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Grays Point",
  slug: "grays-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waterside Roofing Specialists for Grays Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GRAYS POINT",
    bullets: [
      "Coastal roof protection against salt air exposure",
      "Metal roof repairs, Colorbond replacements and tile restorations",
      "Gutter maintenance designed for bushland runoff and storm debris",
      "Fast response across Grays Point and surrounding Sutherland Shire suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Grays Point Coastal Homes",
    paragraphs: [
      "Grays Point is a beautiful waterside suburb with older homes, bushland surrounds and direct exposure to coastal weather. Roofs here need to handle salt-laden winds, moisture from the water and organic debris from surrounding trees.",
      "We provide roof repairs, leak detection, Colorbond installations and gutter cleaning tailored to the unique demands of homes near the Port Hacking estuary. Our focus is on preventative maintenance and durable solutions that extend the life of your roof.",
      "Whether you need emergency leak repairs after a storm, a full roof restoration for an older property, or routine gutter maintenance to keep bushfire ember protection intact, we deliver expert workmanship with transparent pricing and reliable service.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for waterside homes in Grays Point",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Grays Point Homes",
    subheading: "Coastal exposure and bushland debris create unique roofing challenges that need specialist attention and regular maintenance.",
    paragraphs: [
      "Salt air accelerates rust on metal roofs and fascias, while moisture from the water can cause early deterioration of timber roof frames and sarking. Leaves from native trees block gutters and valleys, creating pooling water and increasing fire risk during dry months.",
      "Homes near the waterfront often experience wind-driven rain that finds weak points around flashing, ridge caps and penetrations. Older tile roofs may have cracked or slipped tiles that let water into ceiling cavities during heavy downpours.",
      "Our team conducts thorough roof inspections to identify corrosion, structural weakness, blocked drainage and hidden leaks. We provide targeted repairs, protective coatings for coastal conditions and complete gutter upgrades to handle storm intensity and debris loads.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen T.",
    suburb: "Sylvania Waters",
    quote:
      "Our metal roof was showing serious rust near the ridge after years of salt exposure. The team replaced all corroded sections with marine-grade Colorbond and resealed the flashing. Roof looks brand new and should last decades now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
