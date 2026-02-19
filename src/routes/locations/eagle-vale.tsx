import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.037; // Eagle Vale
const AREA_LON = 150.821;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Eagle Vale",
  slug: "eagle-vale",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Reliable Roofing Services for Eagle Vale Homes",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EAGLE VALE",
    bullets: [
      "Expert tile and metal roof repairs across Eagle Vale",
      "Guttering solutions for western Sydney weather conditions",
      "Leak detection and urgent repair work when you need it",
      "Honest assessments and competitive quotes for homeowners in Campbelltown area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Eagle Vale",
    paragraphs: [
      "Eagle Vale homes often feature tile or metal roofs that face the full force of western Sydney heat, storms and rapid weather changes. Over time, cracked tiles, rusted valleys and blocked gutters become real problems if left unattended.",
      "We service Eagle Vale and surrounding suburbs with roof repairs, restorations, gutter replacements and leak fixes designed for local conditions. Our team understands how extreme heat can damage flashing and how summer storms test every downpipe and valley.",
      "Whether you need a minor repair or a full restoration, we focus on quality materials, reliable workmanship and clear communication throughout the entire project — no surprises, no hidden costs.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and guttering work in Eagle Vale",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Eagle Vale Homes",
    subheading: "Western Sydney heat and summer storms place serious demands on roofing systems across the area.",
    paragraphs: [
      "Older tile roofs in Eagle Vale can suffer from cracked or slipped tiles after strong winds, while metal roofs may develop rust or loose screws from constant thermal expansion. Both issues create pathways for water to enter the home during heavy rain.",
      "Gutters often fail when downpipes become blocked or when old brackets give way under the weight of debris and standing water. If you notice overflow, sagging gutters or damp ceiling stains, the damage is already underway.",
      "We provide thorough inspections, targeted repairs and preventative maintenance plans that keep your roof system watertight and performing well — even when western Sydney weather turns extreme.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela P.",
    suburb: "Campbelltown",
    quote:
      "They fixed a persistent leak we had been dealing with for months. The inspection was thorough, the price was fair, and the work was done quickly. We finally have peace of mind during storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
