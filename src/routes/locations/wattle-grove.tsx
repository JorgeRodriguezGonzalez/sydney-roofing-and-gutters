import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.960; // Wattle Grove
const AREA_LON = 150.939;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Wattle Grove",
  slug: "wattle-grove",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Wattle Grove Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WATTLE GROVE",
    bullets: [
      "Roof repairs and restorations for modern and established homes",
      "Colorbond, tile and metal roofing installations",
      "Complete guttering systems and downpipe upgrades",
      "Reliable service throughout southwestern Sydney suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Wattle Grove Homes",
    paragraphs: [
      "Wattle Grove combines newer residential developments with established housing, creating varied roofing needs across tile, Colorbond and metal systems. Our team delivers quality solutions tailored to the local climate and building styles.",
      "We provide comprehensive roofing services including leak repairs, complete restorations, new installations and guttering upgrades. Each project receives careful attention to ensure lasting protection against Sydney weather conditions.",
      "Whether you need emergency repairs after storms or scheduled maintenance for your investment property, we deliver reliable workmanship with clear communication from initial quote through final inspection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing installations and repairs in Wattle Grove",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Wattle Grove",
    subheading: "Local weather patterns bring strong winds, heavy rainfall and intense summer heat that test every roof system.",
    paragraphs: [
      "Storm damage, deteriorating flashing and blocked gutters are frequent issues we address throughout Wattle Grove. Water pooling in valleys and overflowing gutters during heavy rain can lead to internal damage if left unattended.",
      "Older concrete tiles develop cracks under thermal stress while Colorbond roofs may experience fastener corrosion over time. We identify these problems during thorough inspections before recommending targeted solutions.",
      "Our repair approach focuses on fixing underlying causes rather than temporary patches. From ridge capping replacement to complete gutter overhauls, we ensure your roof system functions properly year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Holsworthy",
    quote:
      "They fixed persistent leaks around our chimney and replaced damaged sections of guttering. The team was punctual, thorough and left everything clean. Finally have peace of mind during rain.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
