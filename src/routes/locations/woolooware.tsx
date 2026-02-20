import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.046; // Woolooware
const AREA_LON = 151.140;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Woolooware",
  slug: "woolooware",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Woolooware Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WOOLOOWARE",
    bullets: [
      "Coastal roofing built to resist salt air and corrosion",
      "Roof repairs, restorations and leak detection services",
      "Guttering upgrades designed for ocean wind conditions",
      "Fast local service throughout Woolooware and the southern Sutherland Shire area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Solutions for Woolooware Homes",
    paragraphs: [
      "Woolooware sits in the southern Sutherland Shire, where coastal exposure and salt air create unique challenges for residential roofing systems. Homes in this area require materials and maintenance that stand up to corrosion, wind and regular weather changes.",
      "We provide roof repairs, full restorations and guttering work specifically tailored to coastal conditions. Whether you have Colorbond, metal or tile roofing, our team understands how ocean proximity affects long-term durability and what maintenance will extend the life of your system.",
      "From leak detection to gutter cleaning and rust treatment, we deliver reliable solutions backed by thorough inspections and clear communication. Our work protects your home from water damage while keeping your roof ready for the next storm season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof repairs and gutter services in Woolooware",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Woolooware",
    subheading: "Coastal exposure accelerates wear on roofing materials — regular maintenance prevents expensive damage down the track.",
    paragraphs: [
      "Salt air is the biggest threat to roofs near the coast. Corrosion appears on metal flashings, rusted gutters develop leaks and unprotected fasteners begin to fail. These issues compound over time if left unattended, eventually compromising the integrity of the entire roof system.",
      "We also see blocked gutters from debris carried by coastal winds, cracked or lifted tiles after storms, and ceiling stains from hidden leaks that go unnoticed until water damage spreads. Early detection and prompt repairs make all the difference.",
      "Our team provides targeted solutions for rust removal, gutter replacement, tile repairs and full roof restorations when required. We work with materials designed for coastal environments so your repairs last longer and perform better under local conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Laura D.",
    suburb: "Cronulla",
    quote:
      "Our metal roof had serious rust spots from years of salt exposure. They replaced the affected sections, treated the rest and advised us on ongoing maintenance. The job was done quickly and the roof looks great.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
