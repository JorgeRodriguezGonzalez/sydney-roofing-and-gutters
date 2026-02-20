import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.013; // Taren Point
const AREA_LON = 151.122;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Taren Point",
  slug: "taren-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists Near Botany Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "TAREN POINT",
    bullets: [
      "Coastal roof protection against salt air and wind",
      "Metal roofing repairs and Colorbond installations",
      "Gutter replacement to handle heavy coastal downpours",
      "Fast response for leak repairs and storm damage across southern suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roof Repairs and Guttering for Taren Point Homes",
    paragraphs: [
      "Taren Point sits near the waterfront of Botany Bay, which means roofs face constant exposure to salt spray, coastal winds and moisture that accelerates corrosion on metal roofs and gutters.",
      "Whether you have an older tiled roof showing signs of wear or a Colorbond roof with rust forming along the edges, our team provides targeted repairs, protective coatings and full restorations tailored to coastal conditions.",
      "We work across the local area with clear pricing, thorough inspections and quality materials chosen to withstand the marine environment without compromising on appearance or performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in coastal Taren Point",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Taren Point Properties",
    subheading: "Salt air and wind exposure create unique challenges for roofs located near the bay and waterfront areas.",
    paragraphs: [
      "Metal roofs and gutters near the coast often develop rust patches, corroded fasteners and paint deterioration faster than inland properties. Left unchecked, small spots turn into structural problems.",
      "Tiles can crack from wind uplift, valleys collect debris after storms, and poorly sealed flashings let moisture seep into roof cavities where mould and timber rot take hold.",
      "We provide complete roof assessments, rust treatment, valley repairs, gutter realignment and leak sealing — keeping your home protected from both weather events and gradual coastal deterioration.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel D.",
    suburb: "Caringbah",
    quote:
      "Our metal roof had rust along the ridgeline and the gutters were sagging badly. The team repaired everything, applied a protective coating and even adjusted the downpipes. Looks great and no more leaks.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
