import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.895; // Enfield
const AREA_LON = 151.101;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Enfield",
  slug: "enfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Enfield Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ENFIELD",
    bullets: [
      "Roof repairs and restoration for heritage and modern homes",
      "Colorbond roofing and metal roof replacement",
      "Gutter cleaning, repairs and downpipe upgrades",
      "Local Inner West service with fast quotes and quality workmanship",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services in Enfield",
    paragraphs: [
      "Enfield is a well-established Inner West suburb with a mix of traditional brick homes, weatherboard cottages and newer townhouse developments. Many of these roofs have seen decades of weather and need expert care to stay watertight and structurally sound.",
      "We provide targeted roof repairs, full roof restorations, metal and tile roof replacement and complete guttering services across Enfield and surrounding suburbs. Our team works with Colorbond, terracotta tiles, concrete tiles and metal roofing to suit the local housing styles.",
      "From leak detection and flashing repairs to full gutter replacements and downpipe upgrades, we focus on practical solutions that last. Clear quotes, clean workmanship and reliable service are what you can expect every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering services in Enfield",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Solve in Enfield",
    subheading: "Older roofs and aging gutter systems often develop leaks, rust and drainage problems over time.",
    paragraphs: [
      "Many homes in Enfield have older tile roofs with worn ridge capping, cracked tiles and degraded valley flashing. These issues let water into the roof cavity and cause ceiling damage, mould and timber rot if left untreated.",
      "Gutters can also suffer from rust, sagging sections and blocked downpipes — especially after storms or when leaf litter accumulates. Poor drainage leads to overflow, water pooling near foundations and external wall damage.",
      "We conduct thorough roof and gutter inspections, identify the root cause of leaks and water damage, and deliver targeted repairs or complete system upgrades. Whether you need minor fixes or a full roof restoration, we ensure your home is protected for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michelle K.",
    suburb: "Croydon",
    quote:
      "Our tile roof had multiple leaks and the gutters were rusted through. They replaced the ridge capping, repaired the valley and installed new gutters. No leaks since and the work was spotless.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
