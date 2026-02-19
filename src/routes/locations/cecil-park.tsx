import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.874; // Cecil Park
const AREA_LON = 150.825;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cecil Park",
  slug: "cecil-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cecil Park Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CECIL PARK",
    bullets: [
      "Roofing solutions for growing industrial and residential areas",
      "Metal roof repairs and Colorbond installations",
      "Gutter upgrades to handle Western Sydney storms",
      "Fast response for leak detection, tile replacement and roof restorations",
    ],
  },

  introBlock: {
    heading: "Local Roofing Services for Homes in Cecil Park",
    paragraphs: [
      "Cecil Park sits in the heart of Western Sydney, where extreme summer heat, sudden storms and industrial growth place real demands on roofs. Homes in this area need roofing systems that handle high UV exposure, heavy downpours and rapid temperature swings.",
      "We service both older homes and newer estates throughout Cecil Park, Horningsea Park and Prestons, offering roof repairs, Colorbond installations, tile replacements and full guttering upgrades designed for Western Sydney conditions.",
      "Whether you need leak repairs, roof restoration or a complete metal roof installation, our team delivers clean workmanship, honest quotes and long-lasting results backed by local knowledge and experience.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering work in Cecil Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Cecil Park",
    subheading: "Western Sydney weather can cause serious roof damage if small problems are left unchecked.",
    paragraphs: [
      "Summer heat over 40 degrees expands metal roofing, loosens fasteners and cracks sealants, while sudden storms send water into every weak point. The result is leaks, rust, sagging gutters and damaged ceilings.",
      "If you are seeing water stains on ceilings, cracked or loose tiles, rusted guttering, or overflow during heavy rain, these are signs that your roof system needs attention before minor issues become expensive repairs.",
      "We provide full inspections, targeted repairs, Colorbond replacements and preventative maintenance designed to keep your roof watertight through extreme heat, storms and everything in between.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle D.",
    suburb: "Prestons",
    quote:
      "Our metal roof was leaking after every storm. They found the problem fast, replaced damaged sheets and sealed everything properly. Great work and the price was fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
