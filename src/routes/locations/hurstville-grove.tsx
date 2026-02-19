import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.980; // Hurstville Grove
const AREA_LON = 151.099;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hurstville Grove",
  slug: "hurstville-grove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hurstville Grove Roofing and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HURSTVILLE GROVE",
    bullets: [
      "Roof repairs and restorations for established homes",
      "Tile repairs, metal roof work and leak detection",
      "Full gutter cleaning and replacement services",
      "Local service covering Hurstville Grove, Penshurst and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Solutions for Homes in Hurstville Grove",
    paragraphs: [
      "Hurstville Grove is a well-established residential area with a mix of older homes and renovated properties. Many roofs in the suburb were built decades ago and now require repairs, restoration or full replacement to stay watertight.",
      "We work with all common roof types in the area including terracotta and concrete tiles, Colorbond metal roofing and older corrugated iron. Our team handles everything from minor leak repairs to complete roof restorations with ridge capping and valley replacements.",
      "Whether your roof is showing signs of age, has visible cracked tiles, or you simply need gutters cleared and checked, we provide thorough inspections and practical solutions that keep your home protected year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and restoration in Hurstville Grove",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Hurstville Grove",
    subheading: "Older roofs often develop leaks, rust and blockages that get worse without regular maintenance.",
    paragraphs: [
      "Many homes in Hurstville Grove have roofs that are 20, 30 or even 40 years old. Over time tiles crack, ridge capping loosens, valleys rust through and metal sheets corrode. These problems start small but can lead to ceiling leaks and internal water damage if not addressed.",
      "Gutters and downpipes often suffer from blocked leaves, rusted sections and poor drainage. When heavy rain arrives, clogged gutters overflow and water seeps into fascias, eaves and wall cavities. This is especially common in streets with mature tree cover.",
      "We inspect the full roof system including tiles, flashings, valleys, ridge caps and guttering. Our team provides honest assessments and cost-effective repairs that extend the life of your roof without unnecessary expense.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Penshurst",
    quote:
      "Our roof was over 30 years old and leaking in two rooms. They replaced damaged tiles, repointed the ridge and fixed the valley. No more leaks and very reasonable price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
