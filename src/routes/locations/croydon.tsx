import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.883; // Croydon
const AREA_LON = 151.114;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Croydon",
  slug: "croydon",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Croydon Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CROYDON",
    bullets: [
      "Expert repairs for terrace homes and established properties",
      "Tile, metal and Colorbond roofing solutions",
      "Leak detection and restoration for Inner West homes",
      "Fast response times for Croydon, Ashfield and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Croydon Homes",
    paragraphs: [
      "Croydon is an established Inner West suburb with a mix of heritage terraces, period homes and modern renovations — each requiring different roofing approaches to keep water out and value protected.",
      "Whether you need leak repairs after heavy rain, restoration work on older terracotta tiles, or upgrades to Colorbond and metal roofing systems, we deliver practical solutions built to last.",
      "Our team covers Croydon and nearby suburbs like Ashfield, Burwood and Enfield — offering clear quotes, quality workmanship and reliable service from initial inspection through to final cleanup.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and guttering work on Croydon homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Croydon",
    subheading: "Older homes and compact sites in the Inner West often face unique drainage and weathering challenges.",
    paragraphs: [
      "Croydon properties frequently deal with blocked valley gutters, aging terracotta tiles, rust spots on metal sheeting and water pooling caused by limited fall or incorrect downpipe placement.",
      "Left unchecked, these problems lead to ceiling stains, timber rot, fascia damage and even structural concerns — especially during Sydney storm season when gutters overflow and leaks spread fast.",
      "We diagnose the real cause, repair what needs fixing and recommend upgrades where necessary — so your roof performs reliably year after year without surprise bills down the track.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma P.",
    suburb: "Burwood",
    quote:
      "Our terrace roof was leaking in two spots and the gutters were completely clogged. They fixed everything in one day, left the site spotless and the price was very fair. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
