import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.892; // Birrong
const AREA_LON = 151.022;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Birrong",
  slug: "birrong",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roofing Experts Serving Birrong",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BIRRONG",
    bullets: [
      "Complete roof repairs and tile replacement specialists",
      "Metal roofing installations and Colorbond upgrades",
      "Gutter cleaning and downpipe repairs for storm protection",
      "Experienced tradespeople delivering quality workmanship across Birrong homes",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Guttering Services in Birrong",
    paragraphs: [
      "Birrong homes experience everything from extreme summer heat to heavy storms, and your roof system needs to handle both without leaking or deteriorating prematurely.",
      "We service tile roofs, metal roofing and Colorbond installations across the local area — providing repairs, restorations and full replacements when needed. From minor leak fixes to complete gutter overhauls, we focus on durable solutions that protect your property.",
      "Our team works with homeowners throughout Birrong to deliver honest inspections, clear quotes and clean workmanship that stands up to Western Sydney weather conditions year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and gutter maintenance in Birrong",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Birrong Homes",
    subheading: "Hot summers and storm seasons put real pressure on older roofing systems and blocked gutters.",
    paragraphs: [
      "Cracked or broken roof tiles are common after storms or during extreme heat cycles. When tiles shift or break, water finds a way in — leading to ceiling stains, insulation damage and structural problems over time.",
      "Rusted or sagging gutters stop doing their job properly. Pooling water near the roofline, overflow during heavy rain and damp patches in your ceilings are all warning signs that your gutter system needs attention before bigger damage occurs.",
      "We provide targeted repairs for tile roofs, metal roof restorations, full gutter replacements and emergency leak detection — keeping Birrong homes watertight through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle T.",
    suburb: "Yagoona",
    quote:
      "They replaced damaged tiles and cleared years of debris from the gutters. The difference after the first rain was huge — no more leaks. Great service and very fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
