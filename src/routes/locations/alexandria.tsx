import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.904; // Alexandria
const AREA_LON = 151.198;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Alexandria",
  slug: "alexandria",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner Sydney Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ALEXANDRIA",
    bullets: [
      "Repairs and maintenance for mixed residential and commercial buildings",
      "Metal and Colorbond roofing for modern developments",
      "Fast leak detection and waterproofing services",
      "Expert guttering upgrades for high-density areas near Green Square",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Alexandria Properties",
    paragraphs: [
      "Alexandria combines heritage industrial buildings with new residential developments, and each property type brings different roofing challenges — from metal roofs on warehouses to Colorbond on modern townhouses and apartments.",
      "We service the entire Alexandria area with roof repairs, restorations, leak detection and complete guttering solutions designed for the local climate and building styles.",
      "Our team has experience with metal, tile and Colorbond roofing systems across residential, commercial and multi-unit buildings. We deliver quality workmanship, fast turnaround and transparent quotes every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and guttering work in Alexandria",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix Across Alexandria",
    subheading: "High-density living and older industrial conversions mean roofing problems can escalate quickly without proper maintenance.",
    paragraphs: [
      "Many properties in Alexandria are undergoing renovation or redevelopment, which often exposes hidden roof damage, rusted flashings or inadequate drainage that was never addressed during conversion work.",
      "Metal roofs on older buildings can corrode near coastal air, while newer developments may suffer from poor installation or inadequate falls in box gutters, causing pooling and internal leaks.",
      "We handle everything from emergency leak repairs and re-roofing to gutter replacement, downpipe upgrades and complete roof restoration — ensuring your property stays watertight year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Redfern",
    quote:
      "Our warehouse conversion had a persistent leak near the skylight. They tracked it down fast, replaced the flashing and sealed everything properly. No issues since — highly recommend them.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
