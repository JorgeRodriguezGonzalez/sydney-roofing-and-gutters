import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.877; // Darlinghurst
const AREA_LON = 151.220;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Darlinghurst",
  slug: "darlinghurst",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner-City Roofing for Heritage Terraces",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DARLINGHURST",
    bullets: [
      "Heritage terrace roof repairs and tile matching",
      "Slate restoration and leak detection services",
      "Narrow-access solutions for inner-city properties",
      "Fast response for apartments, terraces and mixed-use buildings near the CBD",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Darlinghurst Homes and Buildings",
    paragraphs: [
      "Darlinghurst is home to Victorian terraces, heritage-listed buildings and modern apartment blocks — all requiring specialist roofing knowledge. Older roofs need care to preserve character while meeting modern waterproofing standards.",
      "From slate tile matching and valley restoration to leak repairs in shared-wall properties, we deliver targeted solutions that respect heritage fabric while ensuring long-term durability.",
      "Our team works efficiently in tight laneways and narrow access points, using scaffolding designed for inner-city sites. We cover roof repairs, restorations, gutter cleaning and urgent leak response across Darlinghurst and surrounding suburbs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof repairs on terrace houses in Darlinghurst",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Darlinghurst Heritage and Apartment Properties",
    subheading: "Older roofs, narrow sites and shared structures mean small leaks can spread quickly across adjoining properties.",
    paragraphs: [
      "Heritage terraces often have slate or terracotta tiles that crack over time, original lead flashing that degrades and valleys that pool water after heavy rain. Apartment buildings may have shared parapet walls or flat sections prone to membrane failure.",
      "Narrow lanes, lack of parking and multi-storey access mean many roofing issues go unnoticed until water enters the ceiling or internal walls. By then, timber damage or mould may already be present.",
      "We provide detailed inspections, heritage-sensitive repairs and modern waterproofing solutions that protect the structure without compromising the building facade. Every job is completed with council compliance and strata documentation when required.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel K.",
    suburb: "Surry Hills",
    quote:
      "Our terrace had a persistent leak between the party wall and roof line. The team diagnosed it quickly, replaced the flashing and matched the slate perfectly. Thorough work in a very tight space.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
