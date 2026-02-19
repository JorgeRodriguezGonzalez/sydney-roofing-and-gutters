import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.905; // Dulwich Hill
const AREA_LON = 151.139;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dulwich Hill",
  slug: "dulwich-hill",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Dulwich Hill Roofing Specialists Since 2004",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DULWICH HILL",
    bullets: [
      "Specialist repairs for heritage and federation homes",
      "Terracotta tile replacement, metal roof repairs and leak detection",
      "Complete gutter cleaning and stormwater system upgrades",
      "Free quotes across Dulwich Hill and surrounding suburbs in the inner west",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Dulwich Hill Homes",
    paragraphs: [
      "Dulwich Hill features a blend of classic federation architecture and modern townhouses — many with ageing terracotta tiles and original guttering that requires specialist care. Cracked tiles, rusted valleys and blocked downpipes are common issues we see in this area.",
      "We deliver targeted roof repairs, metal roof restoration, tile replacement and complete gutter system overhauls for properties in Dulwich Hill, Marrickville and Lewisham. Whether you need urgent leak repairs or planned preventive maintenance, our team works to the highest standards.",
      "From heritage slate roofs to modern Colorbond installations, we treat every project with the same attention to detail — delivering clean work, honest quotes and long-term solutions that protect your property for years ahead.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and gutter maintenance in Dulwich Hill",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Dulwich Hill",
    subheading: "Older homes and mature street trees mean your roof system needs regular care to stay watertight.",
    paragraphs: [
      "Federation-era homes in Dulwich Hill often have original terracotta tiles that crack under thermal stress, rusted metal valleys and undersized gutters that overflow during heavy rain. These issues worsen quickly if left unchecked, leading to interior water damage and structural concerns.",
      "Large established trees drop leaves and debris year-round, blocking gutters and valleys. Combined with ageing roof materials and sudden summer storms, this creates the perfect conditions for leaks, sagging gutters and costly damage.",
      "We provide thorough inspections, targeted repairs and full roof restorations tailored to the character of Dulwich Hill homes — ensuring your roof performs reliably through every season and every storm event.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Marrickville",
    quote:
      "Our federation cottage had cracked terracotta tiles and leaking valleys. The team replaced damaged sections, repointed the ridge and cleared years of debris. The workmanship was excellent and the roof is now completely watertight.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
