import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.986; // Denham Court
const AREA_LON = 150.838;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Denham Court",
  slug: "denham-court",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Denham Court Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DENHAM COURT",
    bullets: [
      "Expert service for modern homes and growing estates",
      "Roof repairs, installations and comprehensive restorations",
      "Complete guttering solutions for western Sydney conditions",
      "Trusted by homeowners across Denham Court, Ingleburn and Edmondson Park for quality workmanship",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Denham Court Homes",
    paragraphs: [
      "Denham Court is a rapidly growing suburb where modern homes meet western Sydney weather — hot summers, sudden storms and intense afternoon sun that can take a toll on roofing systems over time.",
      "We service the entire Denham Court area with roof repairs, Colorbond installations, tile replacements and guttering upgrades designed to handle local conditions including heavy downpours and extreme heat exposure.",
      "Whether your home is new or settling, our team delivers clean installations, fast leak repairs and preventative maintenance that protects your investment and keeps your roof performing through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Denham Court residential properties",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges We Solve in Denham Court",
    subheading: "Western Sydney conditions mean roofs face intense heat, storms and rapid weathering that requires proper attention.",
    paragraphs: [
      "New estates can experience settling issues, builder defects or improper flashing that only become visible after the first few storm seasons. Older roofs in the area often show heat damage, cracked tiles or deteriorating sealant from prolonged sun exposure.",
      "Blocked gutters, poor drainage fall and undersized downpipes are common problems that lead to overflow during summer storms — causing water pooling, fascia rot and potential internal damage if left unaddressed.",
      "We provide thorough inspections, targeted repairs and full roof restorations using quality materials suited to western Sydney climates — ensuring your roof stays watertight, efficient and built to last through extreme conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Ingleburn",
    quote:
      "Had ongoing leaks around the flashing after heavy rain. The team found the problem quickly, resealed everything properly and checked the whole roof. No issues since — highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
