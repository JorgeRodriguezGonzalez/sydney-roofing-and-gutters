import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.871; // Berala
const AREA_LON = 151.033;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berala",
  slug: "berala",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Berala Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BERALA",
    bullets: [
      "Roof repairs for established Western Sydney homes",
      "Tile restoration, metal roof work and leak repairs",
      "Gutter replacement for aging terracotta and concrete roofs",
      "Fast response for storm damage and emergency repairs across Berala",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Berala Homes",
    paragraphs: [
      "Berala is home to many established properties with older tile and metal roofing systems that need regular attention. As homes age, gutters sag, tiles crack and flashings deteriorate — especially after summers that push 40 degrees and storms that dump rain in minutes.",
      "We work across the suburb providing roof repairs, restorations and gutter replacements for brick homes, weatherboard cottages and units. Whether you have terracotta tiles, concrete roof tiles or Colorbond sheeting, we deliver clean workmanship that lasts.",
      "Our service covers everything from fixing minor leaks to complete roof overhauls. We inspect thoroughly, explain what needs doing and provide clear quotes before starting any work.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration work on a Berala home",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Berala",
    subheading: "Older homes often show wear in gutters, tiles and valleys — problems that worsen quickly without attention.",
    paragraphs: [
      "Many properties in Berala were built decades ago, and original roofing materials are reaching the end of their life. Cracked tiles, rusted valleys, loose ridge capping and sagging gutters are common — and all lead to leaks if left unchecked.",
      "Western Sydney heat causes metal to expand and contract, while sudden storms test gutter capacity and flashings. If you see water stains on ceilings, overflow during rain or missing tiles after wind, your roof needs inspection.",
      "We handle everything from replacing damaged sections to full roof restoration. Our team works with terracotta, concrete and metal systems, and we match existing materials where possible to keep your home looking consistent.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael R.",
    suburb: "Auburn",
    quote:
      "They re-bedded our ridge capping and replaced two valleys that were leaking every storm. Quick service, fair price and no more water damage. Highly recommend for older homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
