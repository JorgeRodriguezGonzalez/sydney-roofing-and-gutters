import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.746; // Kings Park
const AREA_LON = 150.908;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kings Park",
  slug: "kings-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kings Park Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KINGS PARK",
    bullets: [
      "Complete roof repairs and maintenance for Western Sydney homes",
      "Colorbond and tile roofing built for extreme heat",
      "Gutter cleaning and repairs to handle heavy storms",
      "Local service with quick response times across the Blacktown area",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Kings Park Homes",
    paragraphs: [
      "Kings Park sits in Western Sydney where summer temperatures regularly exceed 40 degrees and afternoon storms can hit hard. These conditions put real pressure on roofing systems — cracked tiles, faded Colorbond and blocked gutters are common across the area.",
      "We service residential properties throughout Kings Park and surrounding suburbs including Blacktown, Seven Hills and Marayong. Our team handles roof repairs, full restorations, gutter replacements and leak detection with a focus on materials that suit the local climate.",
      "Whether you have an older tile roof that needs restoration or modern Colorbond requiring repairs, we provide honest assessments, detailed quotes and quality workmanship that lasts through harsh Western Sydney conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in Kings Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues in Western Sydney Suburbs",
    subheading: "Extreme heat and sudden storms create specific roofing challenges across Kings Park and the wider Blacktown area.",
    paragraphs: [
      "Extended heat exposure causes Colorbond paint to fade and tiles to crack or lift. When temperatures hit 40 degrees or more for days on end, roofing materials expand and contract — this movement creates gaps, weakens seals and accelerates wear.",
      "Summer storms bring heavy downpours that test gutter capacity. If downpipes are undersized or gutters are blocked with debris, water backs up into roof cavities or overflows near foundations — both lead to internal damage that could have been prevented.",
      "Regular inspections catch these issues early. We check for cracked tiles, rusted valleys, loose flashing, blocked box gutters and inadequate drainage — then recommend practical repairs that protect your home without unnecessary costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael T.",
    suburb: "Seven Hills",
    quote:
      "Our Colorbond roof was leaking after heavy rain. They found the issue quickly, replaced damaged sections and fixed the flashing. No leaks since — great communication and fair pricing throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
