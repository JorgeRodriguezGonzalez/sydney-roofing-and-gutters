import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.893; // Bondi
const AREA_LON = 151.267;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bondi",
  slug: "bondi",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Bondi Coastal Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BONDI",
    bullets: [
      "Coastal roofing repairs resistant to salt air corrosion",
      "Metal roof restoration and protective coating applications",
      "Gutter replacement designed for ocean exposure and wind",
      "Emergency leak repairs for beachside homes and apartments across Bondi",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering for Bondi Coastal Properties",
    paragraphs: [
      "Bondi is one of the most iconic suburbs in Sydney coastal suburbs, where ocean views and beach proximity come with unique roofing challenges — salt air accelerates metal corrosion, strong sea breezes test fixings and constant exposure demands robust weatherproofing.",
      "We specialise in roofing solutions built for the beachside environment — Colorbond metal roofing with protective coatings, corrosion-resistant guttering and sealant systems that stand up to wind-driven rain and saltwater mist.",
      "Whether you own a heritage cottage near the beach, a renovated terrace or a modern apartment block, we deliver repairs, restorations and installations with materials chosen specifically for long-term coastal durability.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering for Bondi beachside homes",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues in Bondi Coastal Homes",
    subheading: "Salt air and ocean winds create wear that inland properties rarely see — early action saves thousands.",
    paragraphs: [
      "Coastal conditions mean metal roofs and gutters corrode faster, especially around joints, screws and valleys. Rust spots, flaking paint and pinhole leaks are early warning signs that protective coatings have broken down and need attention.",
      "Strong easterly winds lift tiles, loosen ridge capping and push water into gaps that would normally shed rain. Combined with salt spray settling on surfaces, this accelerates weathering and creates leaks that worsen rapidly without proper sealing.",
      "We assess the full extent of coastal damage — checking fixings, flashings and drainage pathways — then recommend targeted repairs, resealing or full restoration depending on condition, with materials and finishes proven to handle the Bondi ocean environment.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma J.",
    suburb: "Bronte",
    quote:
      "Our Colorbond roof was showing rust along the ridges after years of salt exposure. They cleaned, treated and recoated everything — looks brand new and properly protected now.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
