import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.873; // Greenfield Park
const AREA_LON = 150.897;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Greenfield Park",
  slug: "greenfield-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Greenfield Park Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GREENFIELD PARK",
    bullets: [
      "Professional roof repairs and full restorations",
      "Tile replacements and metal roof installations",
      "Guttering repairs, cleaning and new installs",
      "Expert leak detection and permanent waterproofing solutions for local homes",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Homes in Greenfield Park",
    paragraphs: [
      "Greenfield Park features a mix of established homes and newer builds across a quiet residential setting in Western Sydney. Roofs here face intense summer heat, heavy storms and the wear that comes with age and exposure.",
      "We provide complete roofing and guttering services across Greenfield Park and surrounding areas — from emergency leak repairs and tile replacements to full roof restorations and new Colorbond installations tailored to local climate demands.",
      "Our team delivers clean work, clear quotes and reliable follow-up. Whether your roof is showing signs of wear or you need urgent repairs after a storm, we provide the right solution and finish on time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and guttering services in Greenfield Park",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Greenfield Park Homes",
    subheading: "Western Sydney weather means roofs take a beating from heat, storms and seasonal debris accumulation.",
    paragraphs: [
      "Intense summer temperatures can crack older tiles, warp metal flashing and accelerate rust in ageing gutters. Add storm season into the mix and you have the perfect conditions for leaks, overflow and structural damage.",
      "Blocked gutters, broken tiles, rusted valleys and damaged flashing are the usual culprits behind water entry, ceiling stains and expensive internal damage that could have been prevented with timely maintenance.",
      "We inspect every roof thoroughly, identify all problem areas and provide targeted repairs or full restoration options. Our goal is to keep your home protected and your roof performing reliably through every season.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Fairfield West",
    quote:
      "After years of patching our old roof, we finally called for a proper fix. The team replaced all damaged tiles, resealed the valleys and cleaned the gutters. No more leaks and the price was very fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
