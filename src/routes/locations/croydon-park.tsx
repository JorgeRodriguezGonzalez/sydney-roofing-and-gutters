import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.897; // Croydon Park
const AREA_LON = 151.107;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Croydon Park",
  slug: "croydon-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Croydon Park Roof Experts Since 2009",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CROYDON PARK",
    bullets: [
      "Complete roof repairs for older tile and metal roofs",
      "Leak detection and restoration for heritage-style homes",
      "Gutter cleaning and downpipe upgrades after heavy rain",
      "Local service across Croydon Park, Enfield, Burwood and surrounding inner west areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Restoration Services in Croydon Park",
    paragraphs: [
      "Croydon Park features many older homes with terracotta tile, slate and Colorbond roofs that need regular maintenance to handle Sydney weather and general wear over time.",
      "Whether you have broken tiles from storm damage, rusted valleys, blocked gutters or leak problems around flashings, we offer targeted repairs and full restoration options that suit the character of your property.",
      "Our team works across all roof types common to the inner west — from period tile roofs to modern metal installations — delivering clean workmanship, honest quotes and reliable service throughout Croydon Park and neighbouring suburbs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering work in Croydon Park",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Fix in Croydon Park",
    subheading: "Older homes often have ageing valleys, blocked gutters and worn tiles that need attention before minor issues escalate.",
    paragraphs: [
      "In established suburbs like Croydon Park, many roofs have been in place for decades — which means valleys can rust through, mortar can crack, and tiles may shift or break during storms or high winds.",
      "Blocked gutters from autumn leaves and debris are another frequent problem, leading to overflow, water pooling and potential damage to fascias, ceilings or internal walls.",
      "We provide thorough roof inspections, targeted repairs for leaks and damaged sections, valley replacements, gutter cleaning and full restoration services to extend the life of your roof system without unnecessary replacement costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Sarah J.",
    suburb: "Burwood",
    quote:
      "Had multiple leaks in our old tile roof after winter storms. They found all the issues, replaced broken tiles and sealed the valleys properly. Work was fast and the price was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
