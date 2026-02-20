import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.004; // Sandringham
const AREA_LON = 151.137;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Sandringham",
  slug: "sandringham",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Services for Sandringham",
    titleTop: "ROOFING SERVICES",
    titleBottom: "SANDRINGHAM",
    bullets: [
      "Roofing specialists for coastal salt air and ocean winds",
      "Tile, metal and Colorbond roof repairs and restorations",
      "Gutter cleaning and rust prevention for beachside homes",
      "Free inspections and fast turnaround across southern suburbs and Botany Bay area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering for Sandringham Homes",
    paragraphs: [
      "Sandringham sits close to Botany Bay with direct exposure to salt air, coastal winds and weather that can accelerate corrosion on roof materials, flashings and guttering systems. Regular maintenance is essential to avoid rust and leaks.",
      "We provide roof repairs, roof restorations and guttering services designed for coastal conditions. Whether you have concrete tiles, Colorbond steel or older metal roofing, we know how to extend the life of your roof while protecting against the elements.",
      "Our work includes rust treatment, tile replacements, flashing upgrades and full gutter system overhauls. We deliver clean workmanship, reliable fixes and honest advice for every property in Sandringham and surrounding areas.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work in Sandringham beachside area",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Sandringham",
    subheading: "Salt air and coastal weather accelerate rust, corrosion and gutter blockages around Botany Bay.",
    paragraphs: [
      "Coastal properties face unique challenges including rust on metal roofs, corroded gutters, salt deposits and wind-driven rain that can enter through cracked tiles or worn flashings. Even small gaps can lead to ceiling damage and mould.",
      "If you notice orange staining on gutters, sagging rooflines, water pooling after storms or damp patches inside, your roof system needs professional attention before damage spreads further.",
      "We offer targeted repairs, rust removal, protective coatings and complete roof restorations. Every job is tailored to withstand the coastal environment and keep your home dry through all seasons.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura P.",
    suburb: "Sans Souci",
    quote:
      "They replaced corroded sections and treated rust on the gutters. The difference is huge and we finally have confidence the roof will last. Great work and very transparent with pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
