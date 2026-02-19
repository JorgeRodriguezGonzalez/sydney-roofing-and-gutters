import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.842; // Huntleys Point
const AREA_LON = 151.145;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Huntleys Point",
  slug: "huntleys-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waterfront Roofing Specialists for Huntleys Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HUNTLEYS POINT",
    bullets: [
      "Expert metal and tile roof repairs for waterfront homes",
      "Complete gutter replacement and overflow prevention systems",
      "Salt air corrosion treatment and metal roof restoration",
      "Leak detection and ceiling repair specialists servicing the Parramatta River peninsula",
    ],
  },

  introBlock: {
    heading: "Local Roof Repair and Gutter Services in Huntleys Point",
    paragraphs: [
      "Huntleys Point sits on a peninsula surrounded by the Parramatta River, which means homes here face unique roofing challenges from water exposure, salt air and humidity levels that accelerate metal corrosion and tile deterioration.",
      "The compact suburb features a mix of mid-century brick homes and renovated dwellings with both tile and metal roofing systems that require regular inspection to prevent costly water damage from guttering faults and flashing failures.",
      "Our roofing team provides targeted repairs, complete restorations and preventative maintenance designed for waterfront conditions — from rust treatment and re-bedding to gutter upgrades that manage heavy rainfall and prevent overflow into fascias and soffits.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and guttering work in Huntleys Point",
  },

  problemsBlock: {
    heading: "Common Roofing and Guttering Issues Around Huntleys Point Homes",
    subheading: "Proximity to water means metal components corrode faster and debris builds up in gutters more frequently.",
    paragraphs: [
      "Homes near the Parramatta River deal with accelerated rust on metal roofs, Colorbond panels and valley irons due to constant salt air exposure combined with high humidity that keeps metal surfaces damp longer after rain.",
      "Blocked downpipes and leaf-filled gutters cause overflow during storms, sending water behind fascia boards and into roof cavities where it damages ceiling insulation and creates damp stains on internal walls.",
      "We provide comprehensive roof inspections, rust repairs with protective coatings, ridge cap re-bedding, gutter cleaning and replacement of corroded sections to keep your roof watertight and structurally sound all year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Patricia W.",
    suburb: "Drummoyne",
    quote:
      "Our Colorbond roof had rust spots appearing near the ridgeline. They treated the corrosion, sealed everything properly and explained the maintenance schedule. Very thorough work and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
