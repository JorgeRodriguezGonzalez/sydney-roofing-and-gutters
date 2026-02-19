import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.892; // Bondi Junction
const AREA_LON = 151.247;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bondi Junction",
  slug: "bondi-junction",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Eastern Suburbs Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BONDI JUNCTION",
    bullets: [
      "Coastal roofing solutions for salt-air exposure",
      "Apartment block and townhouse roof repairs",
      "Metal roof replacements and Colorbond installations",
      "Fast response for leak detection and emergency repairs across the eastern suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Bondi Junction Properties",
    paragraphs: [
      "Bondi Junction combines high-density apartment living with a range of townhouses and older homes — all exposed to coastal weather, salt air and strong easterly winds that accelerate roof wear.",
      "Whether you have a small apartment roof, a terrace with Colorbond or an older tile roof, our team delivers reliable repairs, leak detection and full roof restorations tailored to eastern suburbs conditions.",
      "We work across metal roofing, concrete and terracotta tiles, and specialty guttering — prioritising durability, corrosion resistance and clean finishes that suit the local building landscape.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs for eastern suburbs Bondi Junction homes",
  },

  problemsBlock: {
    heading: "Common Roofing Problems in Bondi Junction and Surrounds",
    subheading: "Coastal exposure and urban density create unique challenges for roofs and guttering systems in this area.",
    paragraphs: [
      "Salt-laden air from the coast causes faster corrosion on metal roofs and flashings, especially if protective coatings are worn or damaged. Rusted gutters and downpipes are common without regular maintenance.",
      "High-density buildings often mean limited roof access, shared structures and strata requirements — which can delay urgent repairs if coordination is not handled properly.",
      "We specialise in working within strata guidelines, providing clear quotes, fast turnarounds and corrosion-resistant materials that handle coastal conditions year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Woollahra",
    quote:
      "They replaced our old rusted guttering on our townhouse and fixed several cracked tiles. The work was completed quickly and the team coordinated everything with our strata manager. Very impressed.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
