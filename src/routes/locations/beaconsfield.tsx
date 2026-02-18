import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.912; // Beaconsfield
const AREA_LON = 151.199;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Beaconsfield",
  slug: "beaconsfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Beaconsfield Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEACONSFIELD",
    bullets: [
      "Expert repairs for terrace and warehouse roofing",
      "Metal roof restoration and Colorbond installations",
      "Leak detection and targeted waterproofing solutions",
      "Fast response times across Beaconsfield and surrounding inner Sydney areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Beaconsfield Properties",
    paragraphs: [
      "Beaconsfield features a mix of older terraces, modern townhouses and converted industrial buildings. Each style comes with distinct roofing needs — from traditional tile repairs to metal roof upgrades and flat roof waterproofing.",
      "Our team understands the challenges of working in compact inner-city environments where access can be tight and weather exposure varies between sheltered laneways and open rooftops.",
      "We specialise in metal roofing, tile repairs, gutter replacement and leak detection using proven techniques that suit the diverse building stock found throughout this evolving area of inner Sydney.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration work on terrace housing in Beaconsfield",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Beaconsfield",
    subheading: "Older roofs and tight urban layouts create unique maintenance challenges that require experienced solutions.",
    paragraphs: [
      "Many properties in Beaconsfield have aging roof systems where flashing has deteriorated, gutters have rusted through or tiles have cracked from decades of Sydney weather and thermal cycling.",
      "Narrow lanes and shared walls mean water runoff must be managed carefully to avoid drainage disputes with neighbours. Poor gutter slope or blocked downpipes can lead to overflows and facade staining.",
      "We offer thorough inspections, targeted repairs for leaks and rust spots, full gutter replacements and metal roof restorations designed to extend the life of your roof system without unnecessary disruption.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca D.",
    suburb: "Alexandria",
    quote:
      "Our terrace had recurring leaks around the parapet wall. The team identified failing flashing and replaced it properly. Two winters later, still completely dry. Great workmanship and clear pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
