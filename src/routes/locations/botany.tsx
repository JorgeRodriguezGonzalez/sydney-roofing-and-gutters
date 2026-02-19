import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.944; // Botany
const AREA_LON = 151.197;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Botany",
  slug: "botany",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Botany Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BOTANY",
    bullets: [
      "Coastal roofing built to withstand salt air exposure",
      "Expert repairs for tile, metal and Colorbond roofs",
      "Gutter replacement and rust prevention solutions",
      "Local team serving Botany, Mascot and the inner south from Eastlakes to Pagewood",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Solutions for Botany Homes",
    paragraphs: [
      "Botany sits close to the bay, which means roofs are constantly exposed to salt air, coastal winds and moisture that accelerates rust, tile deterioration and gutter corrosion over time.",
      "From established Federation homes near the historic centre to modern units and townhouses closer to the airport precinct, we provide roof repairs, leak detection, restorations and full gutter upgrades tailored to coastal conditions.",
      "Our team works with Colorbond, terracotta tiles, metal and slate systems — delivering clean installations, reliable fixes and transparent pricing from inspection through to completion across the Botany area.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration and repairs in Botany",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Botany Homes",
    subheading: "Coastal exposure and industrial proximity create unique challenges for roofs and gutters in this area.",
    paragraphs: [
      "Salt-laden air from Botany Bay corrodes unpainted metal, rusts gutter seams and degrades tile glazing faster than in inland suburbs. Over time, this leads to leaks, staining and structural concerns.",
      "If you notice rust spots forming on ridge caps, sagging gutter sections, damp patches on ceilings or moss buildup on tiles after wet weather, early intervention prevents expensive damage.",
      "We offer targeted repairs for corroded sections, protective coatings for coastal environments, gutter replacements and full restoration packages — ensuring your roof remains watertight and durable year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Angela T.",
    suburb: "Mascot",
    quote:
      "Our roof was badly rusted near the gutters. The team replaced the worst sections, applied protective coating and cleared the downpipes. Great result and very reasonable pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
