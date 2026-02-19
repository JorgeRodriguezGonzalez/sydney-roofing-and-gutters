import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.016; // Kareela
const AREA_LON = 151.078;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kareela",
  slug: "kareela",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Kareela Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KAREELA",
    bullets: [
      "Expert roof repairs for homes in the Sutherland Shire",
      "Leak detection and tile replacement services",
      "Gutter cleaning and downpipe maintenance",
      "Local team servicing Kareela and surrounding suburbs with reliable workmanship",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Solutions Across Kareela",
    paragraphs: [
      "Kareela homes benefit from quality roofing that handles the combination of southerly weather patterns, seasonal storms and the natural wear from coastal proximity. Regular maintenance ensures your roof continues to protect your investment.",
      "We deliver comprehensive roof repair, tile replacement, Colorbond installations and full restoration work designed for the conditions found across the Sutherland Shire, including Kareela and nearby suburbs like Sylvania and Miranda.",
      "Our qualified team focuses on thorough inspections, honest assessments and quality repairs that last. Whether you need a leak fixed, tiles replaced or gutters cleared, we provide clear pricing and reliable service from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repair work in Kareela",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Kareela",
    subheading: "Storm damage, blocked gutters and ageing materials are the main culprits behind leaks and water damage.",
    paragraphs: [
      "Heavy rain and strong winds can dislodge tiles, crack flashings and overwhelm guttering systems. Left unchecked, these issues allow water into your roof cavity, causing ceiling stains, mould growth and structural damage over time.",
      "Blocked valleys, rusted gutters and poorly aligned downpipes create overflow that can damage fascias, walls and even foundations. Regular cleaning and timely repairs prevent these problems from escalating into costly replacements.",
      "We specialise in identifying hidden leaks, replacing damaged sections and upgrading older roofing systems to meet modern standards. Our team provides targeted repairs and full restoration options to suit your budget and timeline.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma R.",
    suburb: "Sylvania",
    quote:
      "Our roof was leaking after storms and they found the problem tiles quickly. Fixed everything in one day, cleaned up well and the price was fair. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
