import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.879; // Bellevue Hill
const AREA_LON = 151.257;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bellevue Hill",
  slug: "bellevue-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Premium Roofing Services for Bellevue Hill",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BELLEVUE HILL",
    bullets: [
      "Expert repairs for heritage tiles and slate",
      "Roof restoration protecting harbour-view properties",
      "Coastal-rated guttering and downpipe systems",
      "Trusted by Bellevue Hill property owners for lasting quality and discretion",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Bellevue Hill Properties",
    paragraphs: [
      "Bellevue Hill presents unique roofing challenges — heritage tiles, mature tree canopies, ocean exposure and large roof systems all demand specialised attention and careful workmanship.",
      "We work with prestigious homes across the area, delivering roof repairs, restorations and guttering upgrades that respect architectural character while protecting long-term value.",
      "From Terracotta tiles and slate to Colorbond metal, we match materials to the property and climate — providing detailed inspections, clean execution and clear communication throughout every stage.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Premium roofing services for heritage homes in Bellevue Hill",
  },

  problemsBlock: {
    heading: "Roofing Challenges in Bellevue Hill We Address Every Day",
    subheading: "Salt air, mature trees and heritage materials combine to create unique roofing demands.",
    paragraphs: [
      "Ocean winds accelerate corrosion on metal flashings, gutters and valley irons. Tree debris clogs drainage pathways, causing overflow and water ingress during heavy rain.",
      "Heritage roofs require careful material matching, precise cutting and repairs that blend invisibly with existing tiles or slate — work that demands experience and respect for the original build.",
      "We assess every roof system comprehensively, repairing damage, restoring integrity and upgrading weak points — ensuring your home remains watertight, protected and architecturally consistent for decades ahead.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Victoria S.",
    suburb: "Double Bay",
    quote:
      "Our heritage home needed careful tile repairs after years of coastal exposure. The team matched the materials perfectly and worked respectfully throughout. Exceptional workmanship and attention to detail.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
