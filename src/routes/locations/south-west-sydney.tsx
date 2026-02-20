import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.950; // South West Sydney
const AREA_LON = 150.830;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "South West Sydney",
  slug: "south-west-sydney",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "South West Sydney Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SOUTH WEST SYDNEY",
    bullets: [
      "Roof repairs and restorations for diverse housing",
      "Heat-resistant solutions for extreme summer conditions",
      "Storm damage response and gutter maintenance",
      "Serving Liverpool, Campbelltown, Camden and surrounding growth corridors",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services Across South West Sydney",
    paragraphs: [
      "South West Sydney covers one of the fastest-growing regions in Australia — from established suburbs to brand-new estates — which means roofs face a wide range of environmental stresses, building standards and maintenance requirements.",
      "Across Liverpool, Campbelltown, Camden and beyond, we deliver roof repairs, complete restorations and guttering installations that stand up to Western Sydney heat, seasonal storms and the unique demands of both older homes and modern developments.",
      "We work with all major roofing materials including Colorbond steel, concrete tiles and terracotta — providing thorough inspections, transparent quotes and quality workmanship that keeps your property protected year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing work in South West Sydney suburbs",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in South West Sydney",
    subheading: "Extreme heat, rapid expansion and intense summer storms can accelerate roof wear across the region.",
    paragraphs: [
      "Temperatures regularly exceed 40 degrees in summer, causing metal roofs to expand and contract, which over time can loosen fixings, crack sealants and create weak points where leaks develop during the next heavy downpour.",
      "If you notice rust spots, sagging gutters, cracked or slipped tiles, ceiling stains or water pooling around downpipes, these are warning signs that should not be ignored — early intervention prevents expensive structural repairs.",
      "We provide comprehensive inspections, targeted leak repairs, full gutter replacement and complete roof restoration services — ensuring your home or commercial property stays watertight and weather-ready no matter the season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel P.",
    suburb: "Liverpool",
    quote:
      "Our gutters were rusted and overflowing every storm. The team replaced everything, fixed downpipe alignment and left the site spotless. Professional service and great value.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
