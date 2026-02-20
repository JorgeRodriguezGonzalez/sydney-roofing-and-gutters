import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.789; // Minchinbury
const AREA_LON = 150.840;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Minchinbury",
  slug: "minchinbury",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Minchinbury Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MINCHINBURY",
    bullets: [
      "Roof repairs built for Western Sydney heat and storms",
      "Expert tile, metal and Colorbond roof restoration",
      "Gutter replacement and leak detection services",
      "Fast response times throughout Minchinbury and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services for Minchinbury Homes",
    paragraphs: [
      "Minchinbury is a well-established residential suburb in Western Sydney where extreme summer heat, sudden storms and aging rooflines create consistent maintenance demands for tile and metal roofing systems.",
      "Whether you need repairs after storm damage, replacement of cracked or broken tiles, or a full roof restoration to handle intense UV exposure and temperature swings, we work with local conditions in mind.",
      "Our team covers concrete and terracotta tiles, Colorbond steel and metal sheeting, with a focus on durable repairs, quality materials and clear timelines from first inspection through to final clean-up and sign-off.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs across Minchinbury",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Minchinbury Homes",
    subheading: "Western Sydney weather means roofs face heavy UV, extreme heat and sudden downpours that test every seal and valley.",
    paragraphs: [
      "High summer temperatures accelerate wear on roof tiles, sealants and flashings, while sudden storms can shift or crack tiles that have become brittle from heat exposure over the years.",
      "If you notice ceiling stains, missing or broken tiles, rusted valleys, sagging gutters or pooling water after rain, the underlying damage is usually more extensive than it first appears on the surface.",
      "We provide thorough inspections, targeted leak repairs, valley replacements, full gutter overhauls and complete roof restorations designed to handle the demanding conditions that Minchinbury properties face year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen D.",
    suburb: "Rooty Hill",
    quote:
      "After the last big storm we had water coming through the bedroom ceiling. They found cracked tiles and a blocked valley, fixed everything properly and left the place spotless. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
