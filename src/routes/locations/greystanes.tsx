import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.822; // Greystanes
const AREA_LON = 150.948;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Greystanes",
  slug: "greystanes",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Greystanes Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "GREYSTANES",
    bullets: [
      "Tile and Colorbond repairs for Western Sydney conditions",
      "Roof restoration services for older homes",
      "Heat-resistant coatings for extreme summer temperatures",
      "Gutter replacements and leak detection across Greystanes and surrounds",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Greystanes Homes",
    paragraphs: [
      "Greystanes sits in the heart of Western Sydney, where roofs face intense summer heat, heavy storms and the wear that comes with established suburbs. Many homes feature terracotta or concrete tiles that benefit from regular inspection and targeted repairs.",
      "We service Greystanes and nearby areas including Merrylands, Pemulwuy and Pendle Hill, offering roof restorations, re-bedding and pointing, gutter upgrades and leak detection. Our work is designed to withstand the local climate without shortcuts.",
      "Whether your roof needs a refresh after years of exposure or urgent repairs following storm damage, our team provides honest assessments, transparent pricing and quality workmanship from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof restoration work in Greystanes Western Sydney",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in Greystanes",
    subheading: "Western Sydney heat and storms take their toll on roof tiles, flashings and gutter systems over time.",
    paragraphs: [
      "Cracked or dislodged tiles are common in older Greystanes homes, especially after severe weather. Left unaddressed, these gaps allow water entry and accelerate internal damage to sarking and ceiling structures.",
      "Gutters on established homes can sag, rust through or overflow when downpipes are undersized for current storm intensities. This leads to water pooling near foundations, fascia rot and avoidable interior leaks.",
      "We offer targeted repairs for tile roofs, complete re-bedding where ridge caps have degraded, new Colorbond guttering installations and protective coatings that reflect heat and extend roof life in extreme temperatures.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Deborah S.",
    suburb: "Merrylands",
    quote:
      "They replaced cracked tiles and re-bedded the ridge after years of neglect. The roof looks great and we have had zero leaks through two heavy storms since the work was done.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
