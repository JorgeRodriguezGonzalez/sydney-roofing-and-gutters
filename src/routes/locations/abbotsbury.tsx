import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.873; // Abbotsbury
const AREA_LON = 150.863;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Abbotsbury",
  slug: "abbotsbury",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Abbotsbury Roof Repairs & Gutter Solutions",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ABBOTSBURY",
    bullets: [
      "Comprehensive roof repairs and maintenance programs",
      "Tile, metal and Colorbond roofing installations",
      "Complete gutter cleaning and replacement services",
      "Fast response across Abbotsbury and surrounding western suburbs with upfront pricing",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services for Abbotsbury Homes",
    paragraphs: [
      "Abbotsbury is home to a mix of established family residences and newer builds, where roof maintenance becomes essential under western Sydney conditions — intense summer heat, afternoon storms and the wear that comes with both.",
      "Our roofing team provides everything from emergency leak repairs and gutter cleaning to full roof restorations using Colorbond steel, concrete tiles and terracotta — all selected to handle the local climate year-round.",
      "We focus on quality work that lasts, clear communication from quote to completion, and building long-term relationships with homeowners who want reliable service without unnecessary upselling or delays.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services and gutter maintenance in Abbotsbury",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Solve in Abbotsbury",
    subheading: "Western Sydney conditions put pressure on roofs — heat expansion, storm damage and ageing materials all play a role.",
    paragraphs: [
      "Tiles crack from thermal stress, metal roofs expand and contract in the heat, and gutters clog with dust and debris that bakes on during summer. If left unattended, these minor issues escalate into leaks, rust damage and structural problems.",
      "Overflowing gutters, water stains on ceilings, missing or cracked tiles, rusted valleys and pooling water after rain are all warning signs that your roof system needs professional attention before the next storm hits.",
      "We provide thorough inspections, targeted repairs and preventative maintenance schedules designed to extend the life of your roof and gutters — saving you money by catching problems early and fixing them properly the first time.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Wetherill Park",
    quote:
      "Our roof was leaking during heavy rain and causing ceiling damage. The team found the cracked tiles quickly, replaced them and cleaned the gutters properly. No leaks since and very fair pricing for the work done.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
