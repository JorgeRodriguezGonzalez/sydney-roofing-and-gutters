import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.063; // Blairmount
const AREA_LON = 150.797;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Blairmount",
  slug: "blairmount",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rural Roofing Specialists for Blairmount",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BLAIRMOUNT",
    bullets: [
      "Expert metal roofing for acreage and rural properties",
      "Repairs and restorations for established homesteads and rural buildings",
      "Colorbond upgrades designed for exposed country conditions",
      "Trusted service for Blairmount and surrounding rural areas with fast response times",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Rural Properties in Blairmount",
    paragraphs: [
      "Blairmount and the surrounding countryside feature a mix of established homesteads, rural acreage and properties spread across rolling terrain — all requiring roofing that can handle exposed conditions and variable weather patterns.",
      "From metal roofing repairs on sheds and outbuildings to full Colorbond roof restorations for family homes, we deliver durable roofing solutions built to last in open country environments where storms, wind and temperature extremes are common.",
      "Our team works across tile, metal and Colorbond installations, providing thorough inspections, honest advice and workmanship that stands up to the demands of rural life — from initial consultation through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Rural roofing and metal roof repairs in Blairmount",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve Across Rural Blairmount Properties",
    subheading: "Exposed roofs on acreage properties face unique challenges from wind, debris and aging materials.",
    paragraphs: [
      "Rural homes and farm buildings often have larger roof areas with older metal sheeting or tile systems that have weathered decades of storms, high winds and falling branches from surrounding bushland.",
      "Rusted panels, loose fixings, cracked ridge capping, blocked valleys and gutters damaged by wildlife are all common problems we repair regularly for properties in Blairmount and surrounding districts.",
      "Whether you need urgent leak repairs after a storm, full roof replacement on an aging homestead, or maintenance for sheds and outbuildings, we provide practical solutions tailored to rural roofing challenges.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Robert F.",
    suburb: "Tahmoor",
    quote:
      "Our old Colorbond roof was leaking in multiple spots after years of wear. They replaced the damaged panels, resealed everything and the job was completed ahead of schedule. Very professional crew and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
