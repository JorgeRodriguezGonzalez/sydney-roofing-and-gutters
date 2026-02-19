import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.042; // Caringbah
const AREA_LON = 151.119;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Caringbah",
  slug: "caringbah",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing & Guttering for Caringbah",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CARINGBAH",
    bullets: [
      "Expert roof repairs for coastal exposure and salt air",
      "Tile, Colorbond and metal roofing installations and restorations",
      "Gutter cleaning and replacement to handle ocean winds",
      "Fast reliable service across Caringbah and surrounding southern suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes in Caringbah",
    paragraphs: [
      "Caringbah sits in the heart of the Sutherland Shire, where coastal breezes and salt air create unique challenges for roofing systems. Whether you live in the older residential streets or the newer pockets near the waterfront, your roof needs regular care to stay watertight.",
      "We specialise in roof repairs, restorations and guttering upgrades designed for southern Sydney conditions. From cracked tiles and rusted flashing to blocked valleys and sagging gutters, we tackle every issue with the right tools and materials.",
      "Our team understands how coastal weather affects Colorbond, concrete tiles and metal roofs. We focus on preventative work, clean installations and long-term solutions that protect your home from leaks, mould and water damage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter installations in Caringbah",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Caringbah Homes",
    subheading: "Salt air, coastal winds and afternoon storms put pressure on every part of your roof system.",
    paragraphs: [
      "Rusted gutters, loose ridge capping and cracked tiles are frequent issues in coastal suburbs like Caringbah. When metal components corrode or tiles shift during high winds, leaks can develop quickly and cause interior damage.",
      "Blocked downpipes and valleys filled with leaf debris lead to overflow during heavy rain, soaking eaves and ceilings. Left unchecked, moisture seeps into insulation and timber framing, creating long-term repair costs.",
      "We provide targeted inspections, honest assessments and practical repairs. Whether you need a complete roof restoration, gutter replacement or emergency leak detection, we deliver reliable results with minimal disruption.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Miranda",
    quote:
      "Our roof was showing signs of rust and a few tiles had slipped. The team came out quickly, replaced the damaged sections and resealed everything. No leaks after the last storm — highly recommend them.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
