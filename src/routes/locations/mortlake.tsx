import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.840; // Mortlake
const AREA_LON = 151.111;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Mortlake",
  slug: "mortlake",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Services in Mortlake",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MORTLAKE",
    bullets: [
      "Roof repairs and restorations for heritage and period homes",
      "Terracotta and Colorbond roof installations across Mortlake",
      "Gutter cleaning and replacement for older roofing systems",
      "Complete leak detection and waterproofing solutions for Inner West properties",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Mortlake Homes",
    paragraphs: [
      "Mortlake is home to established Federation cottages, californian bungalows and brick homes where original roofing systems often require careful maintenance and specialist repairs. Age and weather exposure can lead to tile cracks, rusted valleys and compromised flashing.",
      "Our team works with terracotta tiles, slate and modern Colorbond to deliver repairs, full restorations and preventative maintenance tailored to the character of Inner West properties. We understand local conditions including river proximity, humidity and storm patterns.",
      "From leak repairs and ridge capping to gutter upgrades and downpipe relocation, we provide transparent quotes, clean workmanship and long-lasting solutions backed by proper materials and attention to structural detail.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof repairs and restoration in Mortlake",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Mortlake",
    subheading: "Older homes near the Parramatta River often face moisture, aging materials and ventilation challenges.",
    paragraphs: [
      "Heritage roofing systems frequently suffer from cracked terracotta tiles, failing mortar bedding, corroded metal valleys and blocked box gutters. These issues worsen over time, leading to ceiling stains, mould growth and structural timber damage.",
      "Proximity to the river can accelerate rust in older metal roofs and cause moisture buildup in roof cavities without proper ventilation. Storm debris, overhanging branches and leaf accumulation compound the problem.",
      "We conduct thorough inspections to identify hidden damage, then deliver targeted repairs or full restoration options. Our focus is on preserving the character of your home while ensuring modern waterproofing and durability standards.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda P.",
    suburb: "Canada Bay",
    quote:
      "Our Federation cottage had persistent leaks for years. They replaced the ridge capping and repointed the whole roof. The craftsmanship was excellent and the leaks are completely gone. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
