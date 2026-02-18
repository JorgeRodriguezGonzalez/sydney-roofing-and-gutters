import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.632; // Berowra Heights
const AREA_LON = 151.143;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berowra Heights",
  slug: "berowra-heights",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Berowra Heights Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEROWRA HEIGHTS",
    bullets: [
      "Roofing built to withstand bushland conditions and heavy storms",
      "Leak repairs, tile replacements and full roof restorations",
      "Gutter cleaning and upgrades for high rainfall areas",
      "Local team servicing all Berowra Heights and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Berowra Heights Homes",
    paragraphs: [
      "Berowra Heights sits within natural bushland, where established homes face constant exposure to heavy rain, falling branches and organic debris. Roofs in this area need proper drainage, robust flashing and regular inspections to handle the local climate.",
      "We specialise in tile repairs, Colorbond re-roofing, valley replacements and gutter system overhauls designed for properties surrounded by trees. Whether you have an older home with terracotta tiles or a modern metal roof, we tailor our approach to suit your structure and conditions.",
      "Our team provides transparent quotes, efficient project timelines and lasting solutions — from small leaks and cracked tiles through to complete roof restorations and gutter upgrades that protect your home for years ahead.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration on a Berowra Heights home",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Berowra Heights",
    subheading: "Bushland surroundings mean roofs face more debris, moisture and organic build-up than urban properties.",
    paragraphs: [
      "Leaves, bark and twigs accumulate in gutters and valleys, blocking water flow and causing overflow during storms. When downpipes clog or gutters sag, water pools along the roofline and eventually finds its way inside through gaps in tiles or worn flashing.",
      "We regularly repair cracked terracotta tiles, rusted valleys, broken ridge caps and sagging gutters for homes in Berowra Heights. Early intervention prevents ceiling damage, timber rot and more expensive structural repairs down the track.",
      "Whether you need a full gutter clean, targeted leak detection or a complete roof restoration with new pointing and resealing, we deliver quality workmanship backed by local knowledge and reliable service throughout the northern suburbs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Hornsby",
    quote:
      "The team replaced all our broken tiles and repointed the ridge after years of neglect. Communication was excellent, pricing was fair and the roof looks brand new. Highly recommend them for any roofing work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
