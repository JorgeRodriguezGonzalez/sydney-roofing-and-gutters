import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.977; // Nelson
const AREA_LON = 150.818;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Nelson",
  slug: "nelson",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Specialists for Nelson Properties",
    titleTop: "ROOFING SERVICES",
    titleBottom: "NELSON",
    bullets: [
      "Expert repairs for tile and metal roofs",
      "Complete roof restorations and weatherproofing solutions",
      "Gutter cleaning and replacement for rural properties",
      "Fast response times for storm damage and emergency leak repairs throughout the Camden region",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services in Nelson and Surrounds",
    paragraphs: [
      "Nelson is a quiet semi-rural suburb where properties often feature larger roof areas and older roofing materials that need regular attention to stay weatherproof. Local conditions including summer heat and seasonal storms can accelerate wear on tiles, metal sheeting and guttering systems.",
      "We provide comprehensive roofing services across Nelson including leak detection, roof repairs, complete restorations and gutter maintenance. Whether your home has terracotta tiles, Colorbond or corrugated metal, we deliver reliable workmanship tailored to the specific challenges of southwest Sydney properties.",
      "Our team understands the importance of protecting your investment with durable solutions and transparent pricing. From minor repairs to full roof replacements, we focus on long-lasting results and clear communication throughout every project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair work on Nelson residential property",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Resolve in the Nelson Area",
    subheading: "Older homes and rural settings bring unique challenges including weather exposure and material deterioration over time.",
    paragraphs: [
      "Many properties in Nelson have roofing systems installed decades ago that now show signs of wear including cracked or broken tiles, rusted metal sheeting and failing valley flashings. These issues allow water penetration during storms and can lead to interior damage if left unaddressed.",
      "Gutters on larger properties often become clogged with debris from surrounding vegetation, causing overflow and pooling that damages fascias and foundations. Sagging or poorly aligned gutters reduce water flow and create ongoing maintenance problems during wet weather.",
      "We conduct thorough roof inspections to identify problem areas including hidden leaks, deteriorated sarking and inadequate drainage. Our repair and restoration services restore structural integrity and extend the lifespan of your roofing system with quality materials and proven techniques.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew K.",
    suburb: "Camden",
    quote:
      "They repaired several broken tiles and resealed the ridge capping after a storm. The work was completed quickly and the roof has been watertight through multiple downpours since. Highly recommend their service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
