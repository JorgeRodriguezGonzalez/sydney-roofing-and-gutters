import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.924; // Chipping Norton
const AREA_LON = 150.958;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Chipping Norton",
  slug: "chipping-norton",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Chipping Norton Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHIPPING NORTON",
    bullets: [
      "Expert roof repairs and restorations for local homes",
      "Colorbond and tile roof installations and maintenance",
      "Comprehensive guttering repairs and cleaning services",
      "Fast response times and quality workmanship across the southwest Sydney region",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Chipping Norton Homes",
    paragraphs: [
      "Chipping Norton homes face the full force of western Sydney weather, from summer heat that pushes past forty degrees to sudden storms that test every gutter and downpipe. Roofs in this area need regular maintenance to handle thermal expansion and heavy rain without developing leaks.",
      "We provide roof repairs, restoration and guttering services tailored to the suburb, working with tile roofs, metal roofing and Colorbond installations. Whether you need a targeted leak repair or a complete roof restoration, we deliver clean workmanship and honest advice.",
      "Our team understands local conditions and building styles, from older established homes to more recent construction. We focus on long-lasting solutions that protect your property and provide clear communication from initial inspection through to project completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repair work in Chipping Norton",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Chipping Norton",
    subheading: "Western Sydney weather puts constant pressure on roofs and gutters throughout the year.",
    paragraphs: [
      "Extreme summer heat causes roof materials to expand and contract, which can crack tiles, loosen fasteners and stress flashing points. Combined with afternoon storms, these conditions create perfect opportunities for water entry and subsequent damage to your ceiling and timber framing.",
      "Many properties in the area also deal with blocked gutters from leaf litter, sagging gutter sections caused by heavy rain, and rust damage on older metal roofing. Left unaddressed, these problems lead to water overflow, fascia rot and internal leaks.",
      "We handle everything from minor tile replacements and valley repairs to full gutter replacements and comprehensive roof restorations. Our approach is thorough inspection first, followed by targeted repairs that address root causes rather than just symptoms.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael P.",
    suburb: "Liverpool",
    quote:
      "They fixed our leaking roof valley and replaced damaged gutters along the back. Work was done quickly, site was left clean, and no more water coming through the ceiling. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
