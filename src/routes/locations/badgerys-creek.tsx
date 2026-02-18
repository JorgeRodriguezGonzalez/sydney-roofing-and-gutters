import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.877; // Badgerys Creek
const AREA_LON = 150.735;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Badgerys Creek",
  slug: "badgerys-creek",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Badgerys Creek Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BADGERYS CREEK",
    bullets: [
      "Roofing solutions built for Western Sydney heat and storms",
      "Metal, tile and Colorbond roof repairs and installations",
      "Gutter replacement and downpipe upgrades for rural properties",
      "Fast response across Badgerys Creek, Luddenham and surrounding Western Sydney areas",
    ],
  },

  introBlock: {
    heading: "Reliable Roof Repairs and Gutter Services in Badgerys Creek",
    paragraphs: [
      "Badgerys Creek sits in the heart of Western Sydney, where summer temperatures regularly push past 40 degrees and sudden storms put real pressure on older roofing systems and undersized gutters.",
      "Whether you have an established rural property, a farmhouse with a large metal roof or a newer home in a developing pocket, we provide roof repairs, gutter replacements and leak detection designed for the local climate.",
      "We work with Colorbond, corrugated metal and concrete tile roofs — delivering practical repairs, preventative maintenance and full restoration options when your roof needs more than a quick patch.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for homes across Badgerys Creek",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Badgerys Creek",
    subheading: "Extreme heat, afternoon storms and aging materials create plenty of roofing headaches in Western Sydney.",
    paragraphs: [
      "Metal roofs expand and contract through 40-degree days, loosening screws and popping fasteners. Older tiles crack under UV stress, and undersized gutters overflow when summer storms roll in fast and heavy.",
      "If you are noticing rust spots, sagging rooflines, water marks on ceilings, loose ridge capping or gutters pulling away from fascia boards, those are clear signs your roof system needs attention before the next big weather event.",
      "We handle everything from small leak repairs and gutter cleaning through to full roof restorations, downpipe relocation and valley re-lining — so your property stays protected year-round, no matter what the Western Sydney weather throws at it.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Andrew P.",
    suburb: "Luddenham",
    quote:
      "Our old farmhouse roof had been leaking for months. They found every problem area, replaced damaged sheets and upgraded the gutters to handle the big storms. Great work and very fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
