import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.778; // Arndell Park
const AREA_LON = 150.880;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Arndell Park",
  slug: "arndell-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Commercial & Industrial Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ARNDELL PARK",
    bullets: [
      "Metal roof repairs for warehouses and commercial buildings",
      "Industrial guttering solutions for large roof areas",
      "Colorbond roofing installations and restorations",
      "Fast response for commercial properties across Western Sydney and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Arndell Park Commercial Properties",
    paragraphs: [
      "Arndell Park is home to commercial and industrial buildings that require robust roofing systems capable of handling Western Sydney heat and intense summer storms. Large roof areas mean maintenance issues can escalate quickly without proper attention.",
      "Our team specialises in commercial and residential roofing across the area, providing metal roof repairs, Colorbond installations and industrial guttering solutions designed to withstand local weather extremes and heavy rainfall events.",
      "We deliver efficient service for warehouses, commercial properties and surrounding residential areas, with clear communication and minimal disruption to your operations or daily routine.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Commercial roofing repairs and installations in Arndell Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Arndell Park",
    subheading: "Large commercial roof areas and Western Sydney heat create unique maintenance challenges.",
    paragraphs: [
      "Metal roofs on commercial buildings face constant expansion and contraction during temperature swings, leading to loose fasteners, cracked sealants and potential leak points around valleys and penetrations.",
      "Industrial guttering systems often struggle with sudden downpours, especially when debris accumulates in valleys or downpipes become blocked. The result is overflow, water pooling and potential structural damage.",
      "We provide comprehensive inspections, targeted repairs and preventative maintenance for both commercial and residential properties, ensuring your roof system remains watertight through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Eastern Creek",
    quote:
      "Our warehouse had persistent leaks during heavy rain. The team identified the problem areas quickly, repaired the metal roof sections and upgraded our downpipes. No more water issues and the work was completed with minimal disruption.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
