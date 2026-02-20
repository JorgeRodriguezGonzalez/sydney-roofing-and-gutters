import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.933; // West Hoxton
const AREA_LON = 150.853;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "West Hoxton",
  slug: "west-hoxton",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "West Hoxton Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WEST HOXTON",
    bullets: [
      "Expert repairs for new and established estates",
      "Colorbond roof installations and tile replacements",
      "Gutter repairs and downpipe replacements for storm damage",
      "Free inspections and fast quotes for all roofing work in West Hoxton",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Growing West Hoxton Families",
    paragraphs: [
      "West Hoxton is a rapidly developing suburb with a mix of established homes and new residential estates. Both types of properties require reliable roofing and guttering solutions to handle Western Sydney conditions including summer heat, sudden storms and temperature extremes.",
      "Our team specialises in roof repairs, roof restorations, gutter replacements and leak detection for all roof types commonly found across West Hoxton. We work with Colorbond steel, terracotta tiles, concrete tiles and modern metal roofing systems.",
      "Whether you need urgent repairs after storm damage or preventative maintenance to extend the life of your roof, we deliver honest assessments, competitive pricing and quality workmanship backed by local experience.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and guttering repairs in West Hoxton suburbs",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in West Hoxton",
    subheading: "Western Sydney heat and summer storms put constant stress on roofing materials and gutter systems.",
    paragraphs: [
      "Hot summers cause Colorbond roofs to expand and contract, which can loosen fasteners and create gaps. Heavy downpours then expose weak points with leaks, overflow and water pooling around foundations.",
      "Older homes often have rusted valley irons, cracked tiles or blocked gutters filled with dust and debris. New estates sometimes suffer from poor builder installation, inadequate fall or undersized downpipes that cannot handle volume.",
      "Our team inspects the full roof system including ridges, valleys, flashing and gutter alignment. We provide targeted repairs, gutter upgrades and full restoration options designed to handle local weather conditions year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Hoxton Park",
    quote:
      "Our roof was leaking badly after recent storms. The team came out quickly, identified cracked tiles and valley damage, and fixed everything in one day. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
