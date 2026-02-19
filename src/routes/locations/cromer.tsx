import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.743; // Cromer
const AREA_LON = 151.274;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Cromer",
  slug: "cromer",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Cromer Roof Repairs & Coastal Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CROMER",
    bullets: [
      "Coastal roofing specialists protecting homes from salt air exposure",
      "Roof repairs, restorations and leak detection for Northern Beaches properties",
      "Metal roof and gutter replacement to combat coastal corrosion",
      "Fast response for storm damage repairs and emergency leak fixes across the area",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing & Gutter Services for Cromer Homes",
    paragraphs: [
      "Cromer sits quietly among the Northern Beaches suburbs, close enough to the coast to experience salt air and ocean winds but slightly inland from the beachfront. This location means roofs face constant exposure to moisture, wind and accelerated corrosion.",
      "We work with tile roofs, Colorbond metal and older corrugated iron roofing systems across Cromer, providing targeted repairs, protective coatings and full restoration services tailored to coastal conditions.",
      "Whether you need urgent leak repairs after heavy rain, gutter replacement due to rust damage, or a complete roof restoration to extend the life of your home, our team delivers clean workmanship and solutions that last in coastal environments.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and coastal roofing services in Cromer",
  },

  problemsBlock: {
    heading: "Common Roof & Gutter Issues We Repair in Cromer",
    subheading: "Coastal proximity means faster wear on metal roofing, gutters and flashing — even a few blocks from the beach.",
    paragraphs: [
      "Salt-laden air accelerates rust on metal roofs, gutters and fasteners. Left unchecked, small rust spots spread quickly, leading to holes, leaks and expensive structural damage.",
      "Strong winds from coastal storms can lift ridge capping, loosen tiles and damage flashing around skylights and chimneys. Blocked gutters combined with heavy downpours often result in overflow, ceiling damage and wet insulation.",
      "We provide thorough inspections, rust treatment, protective coatings, gutter replacement and full roof restoration packages designed to handle the unique challenges of roofing near the Northern Beaches coastline.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Linda G.",
    suburb: "Dee Why",
    quote:
      "Our metal roof was rusting badly and we had water coming through after every storm. They replaced the worst sections, resealed the ridge caps and treated the rest. No leaks since and the roof looks great again.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
