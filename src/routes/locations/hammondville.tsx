import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.949; // Hammondville
const AREA_LON = 150.951;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hammondville",
  slug: "hammondville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Hammondville Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HAMMONDVILLE",
    bullets: [
      "Repairs and restorations for older suburban homes",
      "Colorbond and tile roofing installations and maintenance",
      "Guttering upgrades to handle summer downpours",
      "Reliable service across Hammondville and surrounding suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Hammondville",
    paragraphs: [
      "Hammondville homes face the challenges of western Sydney heat, with summer temperatures often climbing above 40 degrees and afternoon storms that test every roof and gutter system.",
      "Many properties in the area are older suburban builds where roofing materials naturally degrade over time, leading to rust, leaks and worn flashing that need attention before they become major problems.",
      "We provide roof repairs, full restorations and gutter maintenance across Hammondville, working with tile, Colorbond and metal roofing to deliver long-lasting results and honest advice from the first inspection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repair and guttering work in Hammondville",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Hammondville",
    subheading: "Older roofs and extreme heat mean rust, leaks and worn materials are regular concerns for local homeowners.",
    paragraphs: [
      "Intense summer heat accelerates rust on metal roofing and gutters, while sudden storms expose weak spots where water finds its way through cracked tiles, lifted ridge caps or blocked valleys.",
      "If you have noticed ceiling stains, rusted gutter sections, sagging or overflowing downpipes, or visible wear on your roof surface, the issue will only get worse without proper repairs.",
      "We handle everything from small leak fixes to complete roof restorations and gutter replacements, making sure your home is protected year-round with workmanship you can rely on.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen P.",
    suburb: "Moorebank",
    quote:
      "They repaired rust damage on our metal roof and replaced sections of guttering that were sagging badly. The job was completed quickly and the roof looks fantastic now. Highly recommend their service.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
