import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.737; // Dharruk
const AREA_LON = 150.826;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dharruk",
  slug: "dharruk",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Dharruk Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DHARRUK",
    bullets: [
      "Metal and tile roof repairs for Western Sydney conditions",
      "Leak detection and complete roof restoration services",
      "Full guttering replacement and downpipe installation",
      "Fast response times across Dharruk, Emerton and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering in Dharruk",
    paragraphs: [
      "Dharruk homes experience everything Western Sydney weather can deliver: intense summer heat, strong afternoon storms and rapid temperature swings that can crack tiles or loosen flashing over time.",
      "We provide roof repairs, roof restoration and gutter replacement across Dharruk and the surrounding Mount Druitt region — working with Colorbond, metal and tile roofing materials built to handle the local climate.",
      "Whether you need urgent leak repairs, complete gutter upgrades or preventative roof inspection, our team delivers reliable service with upfront pricing and no surprises.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work in Dharruk",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Dharruk",
    subheading: "Western Sydney heat and storm exposure create tough conditions for roofs and gutters to handle year-round.",
    paragraphs: [
      "Extreme heat can cause metal roofing to expand and contract, loosening screws and creating gaps. Tile roofs can crack under thermal stress, and old gutters often sag or rust through, leading to leaks and overflow.",
      "If you see water stains on ceilings, rusted sections, cracked tiles, blocked downpipes or pooling after rain, these are signs your roof system needs professional attention before bigger damage occurs.",
      "We handle everything from targeted leak fixes and flashing repairs to full roof restoration and complete gutter replacement — making sure your home stays dry, protected and ready for the next downpour.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Sharon L.",
    suburb: "Emerton",
    quote:
      "Had major leaks during storms and water coming into the bedroom. They found the problem fast, replaced damaged sections and reinstalled gutters properly. No leaks since — really happy with the work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
