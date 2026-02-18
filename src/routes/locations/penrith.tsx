import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.7511; // Penrith
const AREA_LON = 150.6942;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Penrith",
  slug: "penrith",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roofing Solutions for Western Sydney",
    titleTop: "ROOFING SERVICES",
    titleBottom: "PENRITH",
    bullets: [
      "Built to withstand Western Sydney heat and storm conditions",
      "Complete roof repairs, restorations and new installations",
      "Emergency leak repairs and gutter cleaning services",
      "Experienced with Colorbond, tile and metal roofing across all property types",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services Across Penrith",
    paragraphs: [
      "Penrith experiences some of the most extreme weather conditions in Sydney, with summer temperatures regularly exceeding 40 degrees and intense storm activity throughout the warmer months. Your roof needs to handle both extremes reliably.",
      "We work across all areas of Penrith, providing everything from minor leak repairs to complete roof restorations and gutter replacements. Our team understands how local weather impacts roofing materials and gutter systems over time.",
      "Whether you have an older home with original tiles or a newer property with Colorbond roofing, we deliver clean professional work with materials built for longevity. Every job includes a thorough inspection and clear advice on the best solution for your budget.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repair and restoration work in Penrith",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Penrith",
    subheading: "Extreme heat and sudden storms create specific challenges for roofs and gutters in Western Sydney.",
    paragraphs: [
      "High summer temperatures cause roofing materials to expand and contract, which over time leads to cracked tiles, loose ridge capping and weakened seals. Storm downpours then find every weak point, resulting in leaks and water damage.",
      "Gutters face similar stress. Debris buildup combined with heavy rain leads to overflow, sagging sections and water pooling near foundations. Rusted or poorly installed gutters fail quickly under these conditions.",
      "We fix leaking valleys, replace damaged tiles, re-bed ridge capping and upgrade failing gutter systems. Our repairs are built to last through multiple seasons of heat and heavy weather, keeping your home protected year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Emu Plains",
    quote:
      "They repaired cracked tiles and replaced sections of rusted guttering after the last big storm. The team was professional, the price was fair and everything has held up perfectly through the recent heat. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
