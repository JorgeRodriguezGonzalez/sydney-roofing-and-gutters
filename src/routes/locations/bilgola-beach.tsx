import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.645; // Bilgola Beach
const AREA_LON = 151.325;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bilgola Beach",
  slug: "bilgola-beach",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Bilgola Beach",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BILGOLA BEACH",
    bullets: [
      "Roof repairs built to withstand salt air and coastal winds",
      "Colorbond and tile roof restorations for beachside homes",
      "Gutter cleaning and replacement for ocean-exposed properties",
      "Fast response for leak repairs and storm damage across Bilgola Beach and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering for Bilgola Beach Homes",
    paragraphs: [
      "Bilgola Beach is a peaceful coastal enclave tucked between Newport and Avalon, where ocean breezes and salt spray place unique demands on roofing materials. Homes here need roofs that can stand up to constant exposure.",
      "We specialise in roofing repairs, restorations and gutter upgrades for beachside properties. From corroded flashing and rusted valleys to Colorbond re-roofs and tile replacements, we understand how the coastal climate affects every layer of your roof system.",
      "Whether you have an elevated home with sweeping ocean views or a cottage surrounded by coastal vegetation, our team delivers clean work, honest quotes and long-term protection designed for life by the water.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs for coastal homes in Bilgola Beach",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Bilgola Beach",
    subheading: "Salt air, wind-driven rain and ocean exposure accelerate wear on roofs and gutters throughout the Northern Beaches.",
    paragraphs: [
      "Many beachside homes experience corroded ridge caps, rust spots on Colorbond, degraded tile bedding and flashing that no longer seals properly. Wind-driven rain finds its way through the smallest gaps, especially on homes facing the ocean.",
      "Gutters exposed to salt mist corrode faster, and coastal vegetation clogs downpipes during storms. When water cannot drain properly, it backs up under tiles or into wall cavities, causing hidden damage that worsens over time.",
      "We provide targeted repairs, preventative maintenance and full roof restorations using marine-grade materials and proper sealing techniques — so your roof stays watertight through coastal storms and summer heat.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Sarah T.",
    suburb: "Newport",
    quote:
      "Our roof was taking a beating from the salt air and wind. They replaced corroded sections, re-bedded the ridge and sealed everything properly. The difference has been incredible — no more leaks, even in heavy storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
