import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.951; // Rockdale
const AREA_LON = 151.137;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Rockdale",
  slug: "rockdale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rockdale Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ROCKDALE",
    bullets: [
      "Complete roof repairs for homes near Botany Bay",
      "Tile, Colorbond and metal roof restoration",
      "Guttering upgrades and downpipe replacements",
      "Free quotes across Rockdale and surrounding suburbs every day of the week",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Homes Throughout Rockdale",
    paragraphs: [
      "Rockdale offers a mix of established homes, modern apartments and diverse housing styles. Proximity to Botany Bay means roofs here face coastal winds, salt air and regular rainfall that can wear down roofing materials over time.",
      "Our team specialises in roof repairs, leak detection and full restorations for tile, Colorbond and metal roofs. Whether you have an older terrace, a freestanding house or a newer property, we match our service to your roof type and budget.",
      "From minor flashing repairs to complete roof overhauls and gutter replacements, we deliver clean work, honest pricing and reliable service. Every job includes a thorough inspection so you know exactly what your roof needs before we start.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering work in Rockdale",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve Throughout Rockdale",
    subheading: "Coastal proximity and varied weather mean your roof faces constant exposure to wind, salt and moisture.",
    paragraphs: [
      "Homes close to the bay often experience rust spots on metal roofs, cracked or slipped tiles, and blocked gutters from debris and windblown material. Left unchecked, these small problems lead to leaks, ceiling stains and expensive internal damage.",
      "If you notice water pooling after rain, rust marks spreading across Colorbond, sagging gutter sections or damp patches inside your home, your roof system needs attention. Waiting only increases repair costs and risks structural issues.",
      "We inspect every roof carefully, identify the real cause of leaks or damage, and provide targeted solutions that last. Whether you need emergency repairs, preventative maintenance or a full roof restoration, we have the tools and experience to get it done right.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Banksia",
    quote:
      "Our roof had rust spreading across the ridge capping and a leak in the back room. They replaced the damaged sections, resealed everything and gave us a five-year warranty. Great service from start to finish.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
