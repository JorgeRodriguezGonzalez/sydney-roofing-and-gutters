import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.872; // Lilyfield
const AREA_LON = 151.163;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Lilyfield",
  slug: "lilyfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Lilyfield Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LILYFIELD",
    bullets: [
      "Heritage roofing repairs for Victorian terrace homes",
      "Slate, tile and metal roof restoration services",
      "Gutter replacement for narrow terrace properties",
      "Fast response across Lilyfield and the Inner West suburbs",
    ],
  },

  introBlock: {
    heading: "Specialist Roofing Services for Lilyfield and Inner West",
    paragraphs: [
      "Lilyfield is home to charming Victorian terrace houses, Federation cottages and character properties that demand careful roofing work. Ageing rooflines, shared party walls and heritage features require experienced tradespeople who understand older construction methods.",
      "Our team handles everything from slate repairs and Colorbond replacements to valley leaks and heritage tile matching. We work with residential properties across the Inner West, delivering reliable solutions that respect architectural detail while improving weather protection.",
      "Whether you need a leak repaired, guttering upgraded or a full roof restoration for a period home, we provide clear quotes, quality materials and workmanship that lasts. Every project is completed with care for your property and the local neighbourhood.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering in Lilyfield",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Lilyfield Properties",
    subheading: "Older homes and terrace construction often bring unique roof and gutter challenges that need specialist attention.",
    paragraphs: [
      "Victorian terrace roofs were built with slate, tiles or corrugated iron, and many have reached the end of their original lifespan. Cracked tiles, rusted valleys and deteriorating flashing allow water to penetrate, causing ceiling stains, damp walls and structural concerns.",
      "Narrow terrace properties often have shared guttering systems or limited roof access, making regular maintenance difficult. Blocked valleys, overflowing downpipes and corroded metal sections can escalate quickly during heavy rain events.",
      "We specialise in heritage roof repairs, slate replacements, valley re-lining, gutter upgrades and complete restoration work. Our approach combines traditional methods with modern materials to protect your home while maintaining its original character and street appeal.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma R.",
    suburb: "Rozelle",
    quote:
      "Our terrace had a persistent leak in the rear valley. They replaced the lead flashing, repaired cracked tiles and cleaned the gutters. Work was tidy and the leak is completely gone. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
