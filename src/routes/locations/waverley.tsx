import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.898; // Waverley
const AREA_LON = 151.254;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Waverley",
  slug: "waverley",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Eastern Suburbs Roofing Specialists for Waverley",
    titleTop: "ROOFING SERVICES",
    titleBottom: "WAVERLEY",
    bullets: [
      "Coastal roofing repairs designed for salt air exposure",
      "Metal roof restoration and Colorbond installations",
      "Gutter cleaning and replacement for heavy rainfall",
      "Fast response for terrace roofs, apartments and heritage properties",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Solutions for Waverley and Surrounds",
    paragraphs: [
      "Waverley sits close to the coast with a mix of heritage terraces, Art Deco apartments and modern townhouses — each with unique roofing needs shaped by ocean winds and salt-laden air.",
      "We provide roof repairs, metal roof restorations, tile replacements and full gutter upgrades for both strata buildings and standalone homes. Every job is tailored to local weather exposure and building type.",
      "From leak detection and flashing repairs to full re-roofing, our team delivers reliable workmanship and clear communication at every stage, ensuring your roof is watertight and built to last.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter work in Waverley homes",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues in Waverley Properties",
    subheading: "Coastal exposure, salt corrosion and age can combine to create persistent roof problems.",
    paragraphs: [
      "Salt air accelerates rust on metal roofs and guttering, especially on older Colorbond or zincalume. Left unchecked, this leads to pinholes, water stains and structural weakness over time.",
      "Terrace roofs and shared valleys in strata properties are particularly vulnerable to blocked gutters, cracked flashing and poor drainage after heavy rain. One small leak can affect multiple units.",
      "We identify the root cause of leaks, corrosion and drainage failures, then deliver targeted repairs or full restoration options — keeping your property dry, protected and compliant with strata requirements where needed.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma L.",
    suburb: "Bondi Junction",
    quote:
      "Our terrace had a chronic leak between the party wall and gutter. They pinpointed the issue, replaced the flashing and upgraded the valley. No more water stains — finally sorted.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
