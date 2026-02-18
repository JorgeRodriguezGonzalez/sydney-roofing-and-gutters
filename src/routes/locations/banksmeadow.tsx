import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.938; // Banksmeadow
const AREA_LON = 151.213;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Banksmeadow",
  slug: "banksmeadow",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Commercial & Industrial Roofing Near Port Botany",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BANKSMEADOW",
    bullets: [
      "Metal and Colorbond roofing for warehouses and commercial properties",
      "Coastal corrosion prevention and salt air protection",
      "Large-scale gutter systems and industrial downpipe upgrades",
      "Fast turnaround with minimal disruption to operations across Banksmeadow and Port Botany",
    ],
  },

  introBlock: {
    heading: "Expert Commercial Roofing Services in Banksmeadow",
    paragraphs: [
      "Banksmeadow is home to major warehouses, commercial facilities and industrial operations near Port Botany — structures that need roofing systems built to withstand coastal exposure and heavy use without interrupting daily business.",
      "Our team specialises in metal roofing, Colorbond installations and large-format gutter systems designed for commercial buildings facing salt air, wind exposure and high-volume stormwater runoff in this busy industrial corridor.",
      "We work efficiently around your schedule, providing leak repairs, roof restoration, corrosion treatment and guttering upgrades that protect assets and maintain compliance with minimal downtime for your operations.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Commercial roofing and metal roof repairs in Banksmeadow",
  },

  problemsBlock: {
    heading: "Commercial Roofing Issues We Solve in Banksmeadow",
    subheading: "Industrial and warehouse roofs face unique challenges from salt air, high winds and ageing materials.",
    paragraphs: [
      "Metal roofing near the coast corrodes faster than inland — rust spots, failed fasteners, leaking skylights and deteriorated flashing are common problems in Banksmeadow properties exposed to salt-laden winds from Botany Bay.",
      "Large roof areas mean small leaks can cause significant damage to stock, equipment and interior fit-outs if water ingress goes undetected or unrepaired during heavy rain events.",
      "We provide full inspections, targeted repairs for corroded sections, re-sealing of fasteners and joints, gutter realignment and complete roof restoration solutions that extend the life of commercial roofing systems.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Anthony P.",
    suburb: "Mascot",
    quote:
      "Our warehouse roof had multiple rust spots and leaks that were affecting operations. They assessed the entire system, replaced damaged sections and treated corrosion throughout. The work was done quickly with no disruption to our schedule.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
