import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.950; // Bexley
const AREA_LON = 151.120;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bexley",
  slug: "bexley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bexley Roof Repairs & Restoration Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEXLEY",
    bullets: [
      "Expert roof repairs for older tile and terracotta roofs",
      "Complete roof restorations and Colorbond installations across the St George area",
      "Gutter cleaning, replacement and downpipe upgrades to prevent overflow",
      "Local service covering Bexley, Bexley North and surrounding suburbs with fast quotes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Homes Throughout Bexley",
    paragraphs: [
      "Bexley has a mix of established homes and character properties with tile and terracotta roofs that benefit from regular inspections and timely maintenance. When leaks, cracked tiles or sagging gutters appear, local expertise makes all the difference.",
      "Our roofing team works across the St George area, providing roof repairs, complete restorations and gutter upgrades designed to handle coastal winds and heavy rain that can affect homes near Botany Bay.",
      "We use quality materials including Colorbond steel, concrete tiles and terracotta replacements, and focus on clean workmanship that keeps your home protected for years to come without cutting corners or leaving mess behind.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter work in Bexley NSW",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Solve in Bexley",
    subheading: "Established homes often face tile damage, rust and gutter blockages that need proper attention before small problems grow.",
    paragraphs: [
      "Older tile roofs can develop cracks, broken ridges or loose bedding that allows water to penetrate during storms. Coastal winds from Botany Bay can lift damaged tiles or expose weak points that go unnoticed until a leak appears inside.",
      "Gutters on older homes are often undersized or deteriorating, which means blockages, rust and overflow in heavy downpours. Sagging sections, broken downpipes and poor drainage can lead to water damage along eaves and fascia.",
      "We provide thorough roof inspections, tile repairs, ridge rebedding, rust treatment and full gutter replacements where required — giving you reliable protection against Sydney weather without unnecessary delays or inflated costs.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Rockdale",
    quote:
      "They repaired the tiles along our ridge and replaced rusted gutters. The team was efficient, respectful and left everything spotless. No more leaks during heavy rain. Highly recommend their work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
