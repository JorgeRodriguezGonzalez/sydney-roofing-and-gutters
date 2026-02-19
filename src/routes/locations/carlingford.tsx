import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.783; // Carlingford
const AREA_LON = 151.049;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Carlingford",
  slug: "carlingford",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofers Servicing Carlingford Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CARLINGFORD",
    bullets: [
      "Tile and metal roof repairs for hillside homes",
      "Gutter cleaning and replacement to manage steep runoff",
      "Leak detection and waterproofing for heritage properties",
      "Complete roof restorations with long-lasting Colorbond and terracotta solutions",
    ],
  },

  introBlock: {
    heading: "Local Roofing & Guttering Professionals Serving Carlingford",
    paragraphs: [
      "Carlingford features a mix of heritage homes on sloping blocks and newer estates, which means roofs face unique pressures from storm runoff, tree debris and varying age-related wear.",
      "We work across all roof types including terracotta tiles, Colorbond metal and concrete, delivering repairs, leak fixes, gutter upgrades and full restorations designed to handle the local terrain and weather patterns.",
      "From initial inspection through to completion, our team focuses on quality workmanship, transparent quoting and practical solutions that keep your roof performing for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and gutter work in Carlingford",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Carlingford",
    subheading: "Hillside properties and established trees create unique challenges for roof drainage and long-term maintenance.",
    paragraphs: [
      "Steep blocks mean water moves fast during heavy rain — if gutters are blocked or undersized, overflow and pooling can occur, leading to leaks into eaves, walls and ceilings.",
      "Older homes often have ageing terracotta or cement tiles that crack over time, while metal roofs may develop rust spots or loose fasteners that compromise waterproofing and structural integrity.",
      "We provide targeted inspections, gutter realignment, tile replacement, rust treatment and full restoration packages — designed to match the local environment and protect your investment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura K.",
    suburb: "Epping",
    quote:
      "After years of ignoring minor leaks, we finally called them in. They replaced damaged tiles, upgraded our gutters and sealed problem areas. The roof looks great and no more water damage.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
