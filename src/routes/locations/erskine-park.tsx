import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.815; // Erskine Park
const AREA_LON = 150.797;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Erskine Park",
  slug: "erskine-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Western Sydney Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ERSKINE PARK",
    bullets: [
      "Heat-resistant roofing built for Western Sydney summers",
      "Metal roof repairs, Colorbond installations and re-roofing",
      "Guttering solutions for extreme heat and storm runoff",
      "Fast quotes and reliable service across Erskine Park and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Erskine Park Homes and Businesses",
    paragraphs: [
      "Erskine Park experiences some of the hottest and driest conditions in Sydney, with summer temperatures regularly climbing above 40 degrees. Roofs here take a beating from UV exposure, thermal expansion and occasional severe storms.",
      "We specialise in heat-resistant metal roofing, Colorbond installations and targeted repairs that stand up to extreme Western Sydney conditions. Whether your roof is residential or commercial, we provide durable solutions that last.",
      "From leak repairs and rust treatment to full re-roofing and gutter replacement, our team delivers clean, reliable workmanship with transparent quotes and no surprises. We understand what local roofs need to perform year after year.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Metal roofing and guttering services in Erskine Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Erskine Park",
    subheading: "Extreme heat, UV damage and thermal cycling put Western Sydney roofs under constant stress.",
    paragraphs: [
      "Metal roofing can expand and contract dramatically in hot conditions, loosening fasteners and creating gaps. Older Colorbond panels may show rust, fading or cracked sealant, while tile roofs can crack from heat stress.",
      "Gutters in this climate are prone to warping, sagging and corrosion, especially when debris blocks downpipes during heavy summer storms. Overflow and rust can cause serious damage to fascias and eaves.",
      "We assess every roof system thoroughly, repair what can be saved and recommend replacements when needed. Our goal is to give you a roof that handles heat, storms and everything in between.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "David R.",
    suburb: "St Clair",
    quote:
      "Our metal roof was leaking after years of heat and storms. The team re-fastened the panels, sealed every ridge and replaced two rusted sections. Great work, fair price and no leaks since.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
