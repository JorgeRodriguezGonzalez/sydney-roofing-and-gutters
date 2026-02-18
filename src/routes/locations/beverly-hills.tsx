import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.946; // Beverly Hills
const AREA_LON = 151.082;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Beverly Hills",
  slug: "beverly-hills",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Local Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEVERLY HILLS",
    bullets: [
      "Expert repairs for tile and metal roofing",
      "Complete roof restorations and repainting services",
      "Guttering solutions to handle Sydney storms",
      "Fast response times and clear quotes for homes across Beverly Hills",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering for Beverly Hills Homes",
    paragraphs: [
      "Beverly Hills features a mix of established homes with various roofing styles, from terracotta tiles to Colorbond metal. Each type needs proper maintenance to handle the weather and protect your investment.",
      "We provide comprehensive roofing services throughout Beverly Hills and surrounding suburbs. Our work covers everything from minor leak repairs and gutter cleaning to full roof restorations and replacements.",
      "Whether you have an older tile roof needing restoration or metal gutters showing signs of rust and wear, our experienced team delivers quality workmanship with minimal disruption to your household.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Quality roof restoration work on Beverly Hills residence",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Beverly Hills",
    subheading: "Established homes often face gradual wear that becomes expensive when left unaddressed.",
    paragraphs: [
      "Many homes in Beverly Hills have roofs that are decades old. Broken or slipped tiles, rusted valleys, deteriorating pointing and blocked gutters are frequent problems that worsen over time without professional attention.",
      "Water damage from leaks can quickly spread to ceilings, walls and timber framing. What starts as a small stain can lead to costly structural repairs if moisture continues to penetrate through compromised roof sections.",
      "Our inspections identify problems early so you can choose between targeted repairs or full restoration. We work with all common roofing materials and provide honest recommendations based on the condition and age of your roof.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle K.",
    suburb: "Narwee",
    quote:
      "They replaced our old gutters and fixed the broken tiles along the ridge. Very thorough inspection and the quote was detailed and fair. Highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
