import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.068; // Blair Athol
const AREA_LON = 150.804;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Blair Athol",
  slug: "blair-athol",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Services for Blair Athol Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BLAIR ATHOL",
    bullets: [
      "Expert repairs for coastal and semi-rural properties",
      "Roof restorations designed for southern highland conditions",
      "Metal roof and tile work for larger home footprints",
      "Leak detection and guttering solutions built to last through wet weather",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing and Guttering for Blair Athol Properties",
    paragraphs: [
      "Blair Athol sits in a unique zone where coastal weather patterns meet elevated terrain, bringing strong winds, heavy rain and rapid weather changes that test every roof system over time.",
      "We work across metal roofs, concrete tiles and Colorbond — providing targeted repairs, leak detection and full restorations that hold up against the elements without cutting corners on materials or workmanship.",
      "Whether you need a small patch repair, gutter realignment or complete roof restoration, our team delivers clear quotes, consistent communication and finishes that protect your home for years ahead.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration in Blair Athol",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Blair Athol",
    subheading: "Exposed sites and frequent weather changes mean roof systems work harder here than in sheltered suburbs.",
    paragraphs: [
      "Strong winds lift loose flashing and crack mortar beds around ridge capping. Heavy downpours find every weakness in valleys and gutters. Salt-laden air accelerates rust on older metal roofs and fasteners.",
      "If you are seeing water stains on ceilings, rust patches spreading across Colorbond, blocked gutters causing overflow, or tiles shifting after storms, waiting only increases repair costs and water damage risk.",
      "We inspect every part of your roof system, identify weak points before they fail, and deliver repairs or restorations using proven methods and quality materials suited to local conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew F.",
    suburb: "Shellharbour",
    quote:
      "Our metal roof was starting to rust badly after years of coastal exposure. They stripped it back, treated everything properly and recoated with quality product. Looks brand new and should last another decade at least.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
