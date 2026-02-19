import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.903; // Green Valley
const AREA_LON = 150.877;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Green Valley",
  slug: "green-valley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Green Valley Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GREEN VALLEY",
    bullets: [
      "Roof repairs and gutter upgrades for Western Sydney conditions",
      "Heat-resistant Colorbond and tile roof maintenance",
      "Storm damage repairs and emergency leak fixes",
      "Experienced local team serving Green Valley and surrounding suburbs daily",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services in Green Valley NSW",
    paragraphs: [
      "Green Valley experiences the full range of Western Sydney weather — intense summer heat pushing past 40 degrees, sudden storm cells and seasonal shifts that test roofs and guttering year after year. Regular maintenance keeps systems working properly.",
      "We service family homes, investment properties and older renovated residences throughout Green Valley and nearby suburbs. Our work covers Colorbond roof repairs, tile replacements, gutter cleaning, downpipe realignment and complete roof restoration where needed.",
      "Every job starts with a detailed roof inspection, clear pricing and no surprises. We focus on practical solutions that suit the local climate, quality materials that last and skilled tradespeople who respect your property.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof inspection and repairs in Green Valley NSW",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues in Green Valley",
    subheading: "Heat, storms and age combine to create predictable roofing problems across Western Sydney suburbs.",
    paragraphs: [
      "Extended heat waves cause metal roofs to expand and contract repeatedly, loosening fasteners and creating small gaps where water eventually enters. Tile roofs crack under thermal stress, especially on northern and western slopes with maximum sun exposure.",
      "Storm damage often shows up as missing tiles, damaged flashing or blocked valleys filled with debris. If gutters overflow during heavy rain or you notice ceiling stains after storms, the problem will only get worse without intervention.",
      "We provide targeted repairs for leaks, rust and structural wear, complete gutter replacements where sections have failed, and full restoration packages that return older roofs to reliable long-term performance.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Lisa H.",
    suburb: "Hinchinbrook",
    quote:
      "Our metal roof was leaking near the flashing after storms. They came quickly, identified the issue and fixed it properly the same week. Great service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
