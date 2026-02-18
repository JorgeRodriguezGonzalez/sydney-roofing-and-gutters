import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.849; // Abbotsford
const AREA_LON = 151.129;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Abbotsford",
  slug: "abbotsford",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ABBOTSFORD",
    bullets: [
      "Heritage tile roofs and period home restoration",
      "Colorbond and metal roof repairs for terraces",
      "Leak detection and gutter cleaning near the Parramatta River",
      "Fast quotes for Federation homes and modern townhouses across Abbotsford",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Abbotsford Homes and Businesses",
    paragraphs: [
      "Abbotsford sits along the Parramatta River with a mix of Federation-era cottages, terraces and modern townhouses — each presenting unique roofing challenges from clay tiles to Colorbond metal.",
      "The compact urban layout means leaks, blocked gutters and storm damage can affect neighbouring properties quickly, making timely repairs essential for both heritage homes and contemporary builds.",
      "We specialise in tile repairs, metal roof replacement, gutter cleaning and leak detection designed to handle inner west weather conditions including wind-driven rain, heat and river-side moisture.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs for heritage and modern homes in Abbotsford",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Abbotsford Properties",
    subheading: "Federation cottages and terraces face unique challenges from heritage tile roofs, narrow valleys and ageing guttering.",
    paragraphs: [
      "Older homes in Abbotsford often have terra cotta or slate roofs that crack with age, while shared walls and tight access create complications for repairs and gutter maintenance.",
      "Blocked downpipes, rusted valley irons, and failing ridge capping are common issues that lead to ceiling stains, damp walls and structural concerns if left untreated.",
      "We provide heritage-sensitive repairs, full roof restorations, gutter replacements and preventative maintenance tailored to the character and constraints of inner west properties.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Drummoyne",
    quote:
      "Our Federation cottage had several cracked tiles and a leaking valley. The team matched the originals perfectly and sealed everything properly. No more stains and very respectful of the heritage details.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
