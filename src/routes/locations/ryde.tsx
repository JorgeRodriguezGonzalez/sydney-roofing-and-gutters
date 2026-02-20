import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.815; // Ryde
const AREA_LON = 151.107;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ryde",
  slug: "ryde",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing & Guttering Specialists in Ryde",
    titleTop: "ROOFING SERVICES",
    titleBottom: "RYDE",
    bullets: [
      "Storm damage repairs and emergency leak response",
      "Tile, metal and Colorbond roof restoration services",
      "Full gutter replacements and downpipe realignment work",
      "Detailed inspections for older homes and modern townhouses across the area",
    ],
  },

  introBlock: {
    heading: "Professional Roof Repairs & Maintenance for Ryde Homes",
    paragraphs: [
      "Ryde has a diverse housing mix that includes heritage cottages, 1960s brick homes and newer townhouse developments — each with different roofing materials and maintenance needs that require local experience to handle properly.",
      "We service homes across Ryde, West Ryde and surrounding streets with roof leak repairs, tile replacements, gutter cleaning and full roof restoration work suited to local weather patterns including heavy rain and occasional hail events.",
      "Whether you have terracotta tiles that need rebedding, rusted Colorbond panels or blocked valley gutters causing overflow, we deliver clean repairs, honest assessments and long-term solutions backed by quality workmanship.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in Ryde Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Ryde",
    subheading: "Ageing roofs and inadequate drainage often cause preventable water damage during Sydney storm seasons.",
    paragraphs: [
      "Many older homes in Ryde still have original tiles or metal roofing that has deteriorated over decades, leading to cracked bedding, rusted valleys and hidden leaks that only appear during prolonged rain or sudden downpours.",
      "Blocked gutters from leaf litter, poor fall angles and undersized downpipes contribute to overflow that stains walls, damages eaves and saturates garden beds — all issues that worsen without early intervention and proper maintenance.",
      "Our team provides targeted repairs for tile breakages, valley leaks and gutter sagging, plus full restoration options including ridge capping, flexi-pointing and complete gutter replacement when sections are beyond economical repair.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca T.",
    suburb: "Gladesville",
    quote:
      "They diagnosed a valley leak that two other roofers missed completely. Fixed it properly with new flashing and flexible pointing — no more water stains on the ceiling. Great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
