import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.902; // Bronte
const AREA_LON = 151.264;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bronte",
  slug: "bronte",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists Serving Bronte",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BRONTE",
    bullets: [
      "Expert repairs for salt air exposure and coastal conditions",
      "Colorbond and tile roof restoration near the beach",
      "Gutter cleaning and rust prevention for ocean-facing homes",
      "Fast quotes for roof repairs, leak detection and weatherproofing across Bronte",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Guttering Work for Beachside Homes in Bronte",
    paragraphs: [
      "Living close to the ocean brings lifestyle benefits, but it also means your roof and gutters face constant exposure to salt spray, wind and moisture that can accelerate wear and corrosion.",
      "Across Bronte, we work with older character homes and newer coastal properties, providing roof repairs, leak detection, rust treatment and full restorations using materials suited to seaside conditions.",
      "Whether you need valley repairs, Colorbond replacements or gutter upgrades, we deliver clean workmanship, honest pricing and long-term solutions that protect your home from the elements year-round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter services for coastal homes in Bronte",
  },

  problemsBlock: {
    heading: "Common Roof and Gutter Issues We Address in Bronte",
    subheading: "Coastal homes require regular maintenance to prevent corrosion, leaks and damage from wind-driven rain.",
    paragraphs: [
      "Salt air accelerates rust on metal roofs and gutters, while strong winds can lift tiles, crack flashings and drive water into gaps that would normally stay dry.",
      "If you are seeing rust spots on gutters, damp patches on ceilings, lifted or cracked roof tiles, or water stains near chimneys and valleys, early attention prevents bigger repairs.",
      "We inspect coastal roofs thoroughly, repair damaged sections, treat rust and recommend protective coatings or materials that extend the life of your roof in demanding seaside environments.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma S.",
    suburb: "Clovelly",
    quote:
      "Our metal roof had serious rust issues from years of sea spray. They stripped the old sections, installed new Colorbond and treated the gutters. Looks brand new and should last decades now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
