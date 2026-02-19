import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.749; // Emu Plains
const AREA_LON = 150.659;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Emu Plains",
  slug: "emu-plains",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Emu Plains Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EMU PLAINS",
    bullets: [
      "Built for extreme Western Sydney heat and storms",
      "Roof repairs, restorations and full metal re-roofing",
      "Gutter cleaning and replacement for heavy rainfall",
      "Fast quotes and same-week service across Emu Plains and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Guttering in Emu Plains",
    paragraphs: [
      "Emu Plains sits at the base of the Blue Mountains and experiences the full force of Western Sydney weather — baking summers over 40 degrees, sudden storms and heavy rain that tests every roof and gutter system.",
      "From older fibro and tile roofs in established streets to newer Colorbond installations, we provide roof repairs, metal re-roofing, leak detection and guttering work designed to handle local climate extremes and keep homes protected year-round.",
      "Our team works across tile, metal and Colorbond roofing with a focus on durable materials, proper ventilation and clean installation — so your roof stays watertight and energy-efficient through every season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs in Emu Plains",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Emu Plains Homes",
    subheading: "Extreme heat and sudden storms create real pressure on ageing roofs and under-sized gutters.",
    paragraphs: [
      "Older tile roofs can crack and shift during 40-degree days, while metal roofing expands and contracts — causing screw-pop, lifted ridges and water entry points that only show up during heavy rain.",
      "Gutters often overflow during summer storms when debris blocks downpipes or when original systems are simply too narrow for modern rainfall intensity. The result is water spilling into eaves, fascia rot and internal ceiling damage.",
      "We provide targeted repairs for cracked tiles, re-bedding and re-pointing, full Colorbond re-roofing, gutter replacement and downpipe upgrades — so your home is ready for the next heatwave or downpour without stress.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew K.",
    suburb: "Penrith",
    quote:
      "Our tile roof was leaking after every storm. They found the cracks, re-bedded the ridge and sealed everything properly. Two summers later and still bone dry — great work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
