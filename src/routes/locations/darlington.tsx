import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.890; // Darlington
const AREA_LON = 151.198;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Darlington",
  slug: "darlington",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner City Roofing Specialists in Darlington",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DARLINGTON",
    bullets: [
      "Heritage roofing repairs for terraced homes",
      "Metal roof restoration, tile work and leak detection",
      "Gutter maintenance for high-density urban environments",
      "Fast quotes for properties near Sydney University and surrounding streets",
    ],
  },

  introBlock: {
    heading: "Roofing and Guttering Services for Darlington Properties",
    paragraphs: [
      "Darlington features a mix of heritage terraces, older apartment blocks and urban residential streets where roof maintenance is often overlooked until leaks appear. Access can be tight, and shared walls mean one failing roof can affect neighbouring properties.",
      "Our team works on metal roofs, concrete tiles, slate and heritage roof systems across Darlington and surrounding inner city suburbs. We handle leak repairs, roof restoration, gutter replacement and full re-roofing projects where needed.",
      "Whether your property is near City Road or tucked away in a quieter residential street, we provide clear quotes, clean site work and long-lasting solutions designed for inner Sydney conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage and metal roofing repairs in Darlington Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Darlington",
    subheading: "Older roof systems, tight access and shared structures can complicate repairs if not handled correctly.",
    paragraphs: [
      "Many homes in Darlington were built decades ago with metal or tile roofs that are now showing rust, cracked flashings or loose fixings. Without proper maintenance, minor issues turn into ceiling leaks and structural damage.",
      "Gutters in high-density areas often collect debris from street trees and adjacent buildings. Blockages lead to overflow, water pooling near foundations and potential damage to internal walls.",
      "We provide thorough roof inspections, targeted repairs and full replacement options when restoration is no longer cost-effective. Every job is planned with access constraints and local heritage requirements in mind.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura P.",
    suburb: "Redfern",
    quote:
      "Our terrace had a persistent leak above the back extension. They diagnosed the problem quickly, replaced the flashing and sealed everything properly. No more water damage and the work was completed in one day.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
