import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.75944; // Baulkham Hills
const AREA_LON = 150.99028;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hills District",
  slug: "hills-district",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hills District Roof & Gutter Experts",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HILLS DISTRICT",
    bullets: [
      "Preventive maintenance for leafy neighbourhoods",
      "Roof repairs, restorations & leak detection",
      "Guttering upgrades for heavy downpours",
      "Fast quotes across Baulkham Hills, Castle Hill & Kellyville",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing & Guttering Services in the Hills District",
    paragraphs: [
      "The Hills District is known for family suburbs, newer estates and larger roof footprints — which means small issues can quickly turn into bigger maintenance costs if they’re ignored.",
      "From Baulkham Hills and Castle Hill to Kellyville and Rouse Hill, we provide roof repairs, roof restoration and guttering work designed for local conditions (storms, leaf build-up and rapid temperature changes).",
      "Our team works with Colorbond, concrete tiles and slate where required — focusing on clean workmanship, long-lasting fixes and clear communication from inspection to completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering in the Hills District",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Problems We Fix in the Hills District",
    subheading: "Leafy streets and large roof areas often mean more gutters to maintain — especially after storms.",
    paragraphs: [
      "Big trees are great for shade, but they also drop leaves and seed pods that block gutters, downpipes and valleys. The result is overflow, water damage and avoidable leaks.",
      "If you’re noticing rusted gutters, sagging sections, damp ceilings, cracked tiles or recurring overflow in heavy rain, it’s time for a proper inspection.",
      "We provide preventative maintenance, targeted repairs and full restoration options — so your roof system stays watertight and ready for the next big downpour.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Baulkham Hills",
    quote:
      "We had constant overflow into the eaves after storms. They cleaned everything, replaced a few sections and improved the downpipe layout. No more pooling or leaks — very professional.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;