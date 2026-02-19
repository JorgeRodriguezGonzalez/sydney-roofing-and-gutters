import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.640; // Church Point
const AREA_LON = 151.278;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Church Point",
  slug: "church-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Church Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHURCH POINT",
    bullets: [
      "Salt-resistant roofing solutions for waterfront properties",
      "Coastal corrosion repairs and rust prevention treatments",
      "Guttering and flashing upgrades for high-exposure sites",
      "Fast quotes for Church Point and surrounding Pittwater communities",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Church Point Waterfront Homes",
    paragraphs: [
      "Church Point sits on the edge of Pittwater with many homes exposed to constant salt air, ocean winds and intense coastal weather. These conditions accelerate rust, corrode fittings and wear out roofing materials faster than inland areas.",
      "We specialise in coastal roofing systems built to handle marine environments — including Colorbond steel, salt-grade fittings, reinforced flashing and protective coatings that extend roof life and reduce maintenance cycles.",
      "Whether you need leak repairs, valley re-lining, gutter replacement or full roof restoration, we work with materials and techniques designed for waterfront properties across the Northern Beaches and Pittwater region.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Waterfront roof repairs and coastal guttering in Church Point",
  },

  problemsBlock: {
    heading: "Coastal Roofing Problems We Fix in Church Point",
    subheading: "Salt spray and high winds create unique roofing challenges that require marine-grade solutions.",
    paragraphs: [
      "Rust patches, flaking paint, corroded gutters and loose fixings are common in Church Point due to constant exposure to salt-laden air. Even small rust spots can spread quickly in this environment if left untreated.",
      "Wind-driven rain often finds its way into valleys, ridges and poorly sealed flashing. Combined with salt corrosion, this can lead to leaks, water stains and structural damage over time.",
      "We provide targeted coastal repairs, rust treatment, protective sealing and full gutter replacement using marine-grade materials that resist corrosion and hold up under the toughest waterfront conditions.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Helen W.",
    suburb: "McCarrs Creek",
    quote:
      "Our roof was badly rusted after years of salt exposure. They replaced all the corroded sections, treated the rust and re-sealed everything. No more leaks and it looks fantastic. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
