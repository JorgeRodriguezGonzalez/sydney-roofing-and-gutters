import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.968; // Glenfield
const AREA_LON = 150.890;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Glenfield",
  slug: "glenfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Glenfield Roof Repairs & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GLENFIELD",
    bullets: [
      "Complete roof repairs and tile replacements",
      "Colorbond and metal roof installations",
      "Gutter cleaning and downpipe upgrades",
      "Fast quotes and reliable service across Glenfield and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Homes Throughout Glenfield",
    paragraphs: [
      "Glenfield homes face the full force of Western Sydney weather — intense summer heat, sudden storms and temperature swings that take their toll on roofing materials over time.",
      "Whether you need urgent leak repairs, complete roof restoration or new guttering to handle storm runoff, our team delivers dependable work across tile, Colorbond and metal roof systems.",
      "We understand the importance of getting it right the first time. Every job is backed by thorough inspections, quality materials and clear communication from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing work completed in Glenfield",
  },

  problemsBlock: {
    heading: "Common Roof Issues We Solve in Glenfield Properties",
    subheading: "Western Sydney conditions can accelerate wear on older roofs and expose weak points in newer builds.",
    paragraphs: [
      "Hot days above 40 degrees cause tiles to crack and metal sheets to expand. When storms hit, those weak spots turn into leaks that damage ceilings, insulation and electrical wiring.",
      "Blocked gutters from debris, rust spots on old Colorbond, sagging valleys and cracked ridge capping are all warning signs that should not be ignored.",
      "Our team identifies the root cause, provides honest recommendations and completes repairs or full restorations with materials built to withstand the local climate year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Casula",
    quote:
      "After years of patching leaks ourselves, we finally called the professionals. They replaced damaged sections, repointed the ridge and cleared all the gutters. The difference has been incredible — no more water stains.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
