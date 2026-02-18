import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.826; // Crows Nest
const AREA_LON = 151.202;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Crows Nest",
  slug: "crows-nest",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Crows Nest Commercial & Residential Roofing",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CROWS NEST",
    bullets: [
      "Multi-level building roof access and safety systems",
      "Strata roofing repairs and scheduled inspections",
      "Metal roof restoration for Colorbond and corrugated sheeting",
      "Emergency leak detection for apartments and townhouses in high-density areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Crows Nest Buildings",
    paragraphs: [
      "Crows Nest combines heritage terraces, modern apartment blocks and mixed-use commercial buildings, all requiring specialized roofing approaches that account for limited access, shared structures and strict strata regulations.",
      "We service everything from slate repairs on Victorian-era homes to Colorbond replacements on multi-storey residential complexes, ensuring compliance with building codes and strata maintenance requirements throughout the entire process.",
      "Our team handles roof inspections, leak repairs, gutter cleaning and full restorations with minimal disruption to residents and businesses, using scaffolding or elevated work platforms where building access demands it.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing services for apartments and commercial buildings in Crows Nest",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in High-Density Crows Nest Properties",
    subheading: "Shared buildings and older structures bring unique challenges like water penetration between units and ageing roof membranes.",
    paragraphs: [
      "Apartment blocks and townhouse complexes often experience leaks that start in one unit but affect multiple levels, caused by damaged flashing, blocked box gutters or deteriorating waterproof membranes on flat roof sections.",
      "Heritage homes in the area may have original slate or terracotta tiles that crack over time, while commercial buildings face metal roof corrosion from pollution and limited maintenance access points.",
      "We perform detailed inspections to identify hidden damage, provide strata-compliant documentation and deliver lasting repairs using materials suited to urban conditions and heavy foot traffic on shared rooftops.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "North Sydney",
    quote:
      "Our strata manager arranged an inspection after ceiling leaks in three units. The team identified membrane failure on the flat section, replaced it completely and coordinated all access with residents. Zero complaints and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
