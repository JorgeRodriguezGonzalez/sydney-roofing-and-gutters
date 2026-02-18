import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.815; // Parramatta
const AREA_LON = 151.001;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Parramatta",
  slug: "parramatta",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Parramatta Roofing Specialists Since 2010",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PARRAMATTA",
    bullets: [
      "Emergency roof repairs for commercial and residential buildings",
      "Metal roof restoration and Colorbond installations",
      "Storm damage assessment and leak detection services",
      "Expert guttering solutions for Western Sydney extreme heat and downpours",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Parramatta Homes and Businesses",
    paragraphs: [
      "Parramatta is the heart of Western Sydney, with a mix of heritage buildings, modern apartments and growing residential estates. This diverse landscape demands roofing solutions that handle extreme heat, heavy storms and the wear that comes with urban density.",
      "We service properties across the Parramatta CBD and surrounding areas, providing roof repairs, metal roof restorations, tile replacements and complete guttering upgrades. Our work is suited to both traditional homes and contemporary developments across the region.",
      "Whether you need emergency leak repairs after a storm or a full roof restoration for a heritage property, our team delivers reliable workmanship with minimal disruption to your home or business operations.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Parramatta CBD area",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Parramatta Properties",
    subheading: "Western Sydney weather puts serious stress on roofs — from scorching 40°C days to sudden downpours.",
    paragraphs: [
      "Metal roofs expand and contract in the heat, loosening fixings and creating gaps where water can enter. Tile roofs crack under thermal stress, and older guttering systems often fail to handle the volume during intense rain events.",
      "If you are seeing rust spots, sagging gutters, ceiling stains, loose or broken tiles, or water pooling near downpipes, these are warning signs that should not be ignored. Delayed repairs often lead to internal damage and higher costs.",
      "We conduct thorough inspections and provide targeted repairs, gutter replacements and full roof restorations. Our solutions are built to withstand the heat, storms and urban conditions typical of the Parramatta area.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "North Parramatta",
    quote:
      "After a big storm we had water coming through the ceiling. They came out the same day, found the issue and fixed it properly. No leaks since, and the quote was very reasonable. Highly recommend for anyone in Parramatta.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
