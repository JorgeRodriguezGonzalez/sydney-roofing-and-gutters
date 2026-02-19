import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.782; // Glenmore Park
const AREA_LON = 150.669;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glenmore Park",
  slug: "glenmore-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services in Glenmore Park",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLENMORE PARK",
    bullets: [
      "Colorbond and tile roof repairs and installations",
      "Roof restorations for Western Sydney heat exposure",
      "Complete guttering solutions for summer storms",
      "Fast response times across Glenmore Park and surrounding estates",
    ],
  },

  introBlock: {
    heading: "Trusted Roofing Solutions for Glenmore Park Homes",
    paragraphs: [
      "Glenmore Park has grown into a sought-after residential area with a mix of established homes and newer estates. Roofs in this part of Western Sydney face unique challenges including extreme summer heat, intense UV exposure and sudden storm activity that can reveal weak points in your roof system.",
      "Our team provides comprehensive roofing services including leak repairs, tile and Colorbond installations, roof restorations and complete gutter replacements. We understand how the climate in this region can age roofs faster and create issues with expansion, cracking and water penetration.",
      "From initial inspection to final clean-up, we deliver reliable workmanship backed by proper insurance, quality materials and clear communication throughout every stage of your roofing project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repair in Glenmore Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Glenmore Park",
    subheading: "Western Sydney heat and storm damage require proactive roof maintenance to prevent costly water damage.",
    paragraphs: [
      "Many homes in Glenmore Park experience roof deterioration accelerated by prolonged UV exposure and temperatures exceeding forty degrees in summer. This can cause tiles to crack, Colorbond to fade or warp, and sealants to fail, creating entry points for water when storms eventually arrive.",
      "Blocked gutters are another frequent problem, especially after summer storms bring leaves and debris. Without proper drainage, water can overflow into eaves and fascias, leading to rot, staining and structural damage that spreads quickly if left unchecked.",
      "We offer targeted inspections, preventative maintenance programs and complete restoration services that address both visible damage and underlying issues before they escalate into major repairs or insurance claims.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Mulgoa",
    quote:
      "Had several cracked tiles and a leak in the bedroom ceiling. The team came out the same week, replaced the tiles and resealed the ridge capping. Professional service and the roof looks perfect now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
