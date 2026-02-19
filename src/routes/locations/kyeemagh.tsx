import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.948; // Kyeemagh
const AREA_LON = 151.163;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Kyeemagh",
  slug: "kyeemagh",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists Servicing Kyeemagh",
    titleTop: "ROOFING SERVICES",
    titleBottom: "KYEEMAGH",
    bullets: [
      "Expert repairs for coastal salt air damage",
      "Colorbond and tile roofing built for bay conditions",
      "Gutter protection systems to manage sea winds",
      "Fast response across Kyeemagh and surrounding beachside communities",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Bayside Homes in Kyeemagh",
    paragraphs: [
      "Kyeemagh sits on the shores of Botany Bay, where salt air and coastal humidity place constant demands on roofing materials. Homes in this bayside suburb need protection that stands up to wind, salt corrosion and unpredictable weather coming off the water.",
      "We specialise in roofing and guttering for coastal environments, working with Colorbond steel, concrete tiles and protective coatings that resist rust and weather damage. Whether you need urgent leak repairs, full restorations or new gutter installations, we deliver solutions designed for long-term durability.",
      "Our team understands the unique challenges facing homes near the bay. From first inspection to final cleanup, we focus on quality workmanship, transparent pricing and keeping your coastal property protected year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and gutter installation in coastal Kyeemagh",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Kyeemagh Homes",
    subheading: "Salt air and bay winds accelerate corrosion and wear — small issues become expensive repairs if left unchecked.",
    paragraphs: [
      "Metal roofs near the coast are prone to rust, especially around fasteners and valleys where moisture collects. Salt particles carried on sea breezes attack unprotected surfaces, causing premature deterioration even on newer installations.",
      "Blocked gutters and downpipes are another frequent problem. Coastal winds blow debris and sand into drainage systems, leading to overflow, fascia rot and water pooling near foundations during heavy rain.",
      "If you notice rust stains, damp ceiling patches, loose tiles or gutters that overflow despite appearing clear, it is time for a professional assessment. We provide thorough inspections, targeted repairs and preventative maintenance to protect your investment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Brighton-le-Sands",
    quote:
      "The rust on our metal roof was getting worse each year. They replaced the damaged sections, treated everything and applied a protective coating. The finish looks great and we have total peace of mind now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
