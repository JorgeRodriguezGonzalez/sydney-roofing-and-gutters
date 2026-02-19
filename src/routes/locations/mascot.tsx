import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.929; // Mascot
const AREA_LON = 151.193;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Mascot",
  slug: "mascot",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Mascot Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MASCOT",
    bullets: [
      "Expert repairs for coastal wind and salt exposure",
      "Roof restoration, metal work and tile replacement",
      "Commercial and residential roofing solutions",
      "Fast response across Mascot, Botany Bay and inner southern suburbs",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering Services for Mascot Properties",
    paragraphs: [
      "Mascot sits close to Botany Bay and the airport, which means roofs face constant exposure to salt-laden winds, jet fuel residues and high humidity — all of which accelerate rust and wear on metal roofing and guttering systems.",
      "From older industrial buildings to modern apartments and townhouses, we provide roof repairs, metal roof restoration, Colorbond installations and guttering upgrades suited to the challenging coastal climate of inner southern Sydney.",
      "Our crew works across residential and commercial properties in Mascot, delivering clean installations, long-lasting repairs and thorough inspections backed by clear communication and upfront pricing every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing and gutter repairs near Mascot and Botany Bay",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues We Fix in Mascot",
    subheading: "Proximity to the bay and airport means roofs take a beating from salt air, wind and airborne pollution.",
    paragraphs: [
      "Metal roofs and gutters near Botany Bay are especially vulnerable to rust, corrosion and fastener failure. Even Colorbond can suffer from salt creep if not properly maintained or if protective coatings are compromised during earlier work.",
      "Commercial properties often have low-slope or flat roofs that develop pooling, membrane splits or flashing failures. Residential homes may show rusted valleys, cracked tiles or blocked gutters that overflow during storms and damage internal ceilings.",
      "We provide targeted leak repairs, full roof restoration, gutter replacement and preventative maintenance programs — so your property stays watertight and protected against the tough coastal conditions found throughout Mascot and the surrounding bay areas.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "Botany",
    quote:
      "Our metal roof was corroding badly from the salt air. They replaced all the rusted sheets, upgraded the gutters and did a full clean. The job was fast, tidy and the quote was honest — highly recommend them.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
