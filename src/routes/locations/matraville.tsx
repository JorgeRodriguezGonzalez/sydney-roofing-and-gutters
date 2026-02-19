import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.948; // Matraville
const AREA_LON = 151.233;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Matraville",
  slug: "matraville",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Matraville Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MATRAVILLE",
    bullets: [
      "Coastal roofing built to withstand salt air",
      "Complete roof repairs and leak detection services",
      "Expert gutter replacement and drainage solutions",
      "Trusted by homeowners near Port Botany and the eastern suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services for Matraville Homes",
    paragraphs: [
      "Matraville sits in the eastern suburbs, where salt air and coastal winds place constant demands on roofing materials. Homes here range from heritage Federation cottages to modern townhouses, each requiring tailored roofing solutions that can handle local climate conditions.",
      "Our team services Colorbond, metal and tile roofs across the area, providing thorough repairs, restorations and leak detection. We understand how coastal exposure accelerates rust and how drainage must be configured to handle sudden downpours from summer storms.",
      "From first inspection to final sign-off, we focus on clean work, durable materials and honest communication. Whether you need a gutter upgrade or a full roof restoration, we deliver results that protect your home for years to come.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work in Matraville",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Matraville",
    subheading: "Coastal conditions and aging infrastructure mean roofs and gutters need regular attention in this suburb.",
    paragraphs: [
      "Salt air corrodes metal fittings, rusts out old gutters and weakens roof fasteners over time. If your home is more than ten years old, chances are your gutters and flashings are showing signs of wear — especially if they face the prevailing winds.",
      "Common problems include rusted valley irons, blocked downpipes, cracked roof tiles and sagging gutter sections that overflow during heavy rain. Left unaddressed, these issues lead to water damage inside ceilings, walls and even structural timbers.",
      "We provide targeted repairs, gutter replacements and full roof restorations using materials suited to coastal environments. Our work is designed to last, with attention to drainage layout, proper fastening and corrosion-resistant components throughout.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Maroubra",
    quote:
      "They replaced our rusted gutters and fixed several cracked tiles. The crew was professional, the site was left clean, and we have had no leaks since. Highly recommend for anyone in the eastern suburbs.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
