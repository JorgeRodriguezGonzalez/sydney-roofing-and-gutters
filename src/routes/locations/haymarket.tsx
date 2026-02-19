import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.881; // Haymarket
const AREA_LON = 151.206;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Haymarket",
  slug: "haymarket",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Haymarket Commercial & Residential Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HAYMARKET",
    bullets: [
      "Expert roofing solutions for inner-city buildings",
      "Heritage roof repairs and modern apartment restorations",
      "Guttering services for high-density commercial properties",
      "Fast, reliable quotes for Chinatown and surrounding CBD areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Haymarket",
    paragraphs: [
      "Haymarket sits at the heart of Sydney, combining heritage buildings, modern apartments and commercial properties within a compact urban landscape. This dense environment demands roofing services that understand limited access, parking constraints and noise management.",
      "From the streets around Chinatown and Paddys Markets to apartment buildings on the fringe of the CBD, we deliver roof repairs, leak detection and guttering work tailored to inner-city conditions. Wind channelling between buildings, pollution exposure and older roofing materials all require specialist attention.",
      "Our crew works with tile, metal and Colorbond roofing systems, providing clean workmanship and long-lasting repairs. We manage site logistics, coordinate with strata managers and complete projects efficiently to minimise disruption to residents and businesses.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Commercial and residential roofing services in Haymarket Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Haymarket",
    subheading: "Inner-city buildings face unique challenges from wind exposure, pollution and aging materials.",
    paragraphs: [
      "High-density areas create wind tunnels that put extra stress on flashings, gutters and roof edges. Combine that with pollution residue and older materials, and you have a recipe for accelerated wear, leaks and drainage problems.",
      "Many properties in Haymarket feature original terrace roofing, heritage tiles or mixed-material systems that require specialist knowledge. Cracked tiles, rusted valleys, blocked downpipes and water ingress are common problems we see weekly.",
      "We provide thorough inspections, targeted leak repairs, gutter cleaning and full restoration options. Whether you manage a commercial building or own a terrace near the markets, we deliver practical solutions that work within strata rules and council requirements.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa K.",
    suburb: "Ultimo",
    quote:
      "Our heritage terrace had persistent leaks every time it rained. They located the problem in the valley and replaced the rusted sections properly. No more stains on the ceiling and the work was done quickly.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
