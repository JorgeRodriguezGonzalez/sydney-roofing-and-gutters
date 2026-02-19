import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.866; // Five Dock
const AREA_LON = 151.130;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Five Dock",
  slug: "five-dock",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Five Dock Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FIVE DOCK",
    bullets: [
      "Roof repairs for heritage homes and established properties",
      "Tile, Colorbond and metal roof restoration services",
      "Gutter cleaning and replacement for Inner West conditions",
      "Same-day quotes across Five Dock and nearby Inner West suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Gutter Services for Five Dock Homes",
    paragraphs: [
      "Five Dock is a well-established Inner West suburb with a mix of heritage Federation and Californian Bungalow homes, mid-century builds and modern townhouses. Proximity to Parramatta River means humidity and seasonal storms can accelerate wear on older roof systems.",
      "We service Five Dock and surrounding areas with roof repairs, leak detection, tile replacements and full roof restoration. Our team works with terracotta and concrete tiles, Colorbond steel and metal roofing to suit the character and structure of older homes.",
      "From gutter blockages caused by nearby trees to cracked ridge capping and rusted valleys, we focus on targeted repairs, clear communication and long-lasting results that protect your home from water damage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter work in Five Dock",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Five Dock Homes",
    subheading: "Older roofs and humid conditions mean regular maintenance is critical to avoid costly leaks.",
    paragraphs: [
      "Many homes in Five Dock have original or near-original roofs that were built decades ago. Over time, mortar beds crack, ridge tiles slip, valleys rust and flashing separates — especially when humidity accelerates corrosion around gutters and downpipes.",
      "Blocked gutters are another common problem. Leaf litter, bird nests and debris build up quickly, causing overflow during heavy rain. If water pools against fascia boards or backs up under tiles, interior damage follows fast.",
      "We provide full roof inspections, gutter cleaning, valley and flashing repairs, tile replacements and complete roof restoration. Whether you need a targeted fix or a full overhaul, we deliver clean workmanship and reliable results.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela R.",
    suburb: "Drummoyne",
    quote:
      "Our Federation home had leaking valleys and sagging gutters. The team replaced all the rusted sections and repointed the ridge. No more leaks and the roof looks fantastic. Very happy with the work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
