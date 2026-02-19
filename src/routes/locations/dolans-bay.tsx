import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.058; // Dolans Bay
const AREA_LON = 151.100;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Dolans Bay",
  slug: "dolans-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Waterfront Roofing Specialists for Dolans Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DOLANS BAY",
    bullets: [
      "Roof protection engineered for coastal salt air",
      "Leak repairs, restorations and Colorbond installations",
      "Gutter systems designed for waterfront exposure",
      "Trusted service across Bundeena, Maianbar and Port Hacking waterfront homes",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering in Dolans Bay",
    paragraphs: [
      "Dolans Bay sits on the edge of Port Hacking, where coastal winds, salt air and direct exposure to weather patterns mean your roof needs more than basic repairs — it needs protection built for the waterfront.",
      "Whether you own a heritage home or a modern waterfront property, we specialise in roofing and guttering solutions that stand up to the unique demands of this beautiful but challenging environment.",
      "From Colorbond roofing and rust prevention to gutter cleaning and leak detection, our team delivers reliable workmanship with full attention to detail and local coastal conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Waterfront roofing repairs and guttering in Dolans Bay",
  },

  problemsBlock: {
    heading: "Coastal Roofing Challenges We Solve in Dolans Bay",
    subheading: "Salt air, wind-driven rain and direct exposure require roofing systems that go the distance.",
    paragraphs: [
      "Coastal homes face accelerated rust, flashing corrosion, tile lifting from strong winds and gutter blockages from native debris — especially near water where storms hit harder and faster.",
      "If you notice brown streaks on walls, staining on ceilings, rusted gutters or persistent leaks after rain, your roof system may be struggling with the effects of waterfront exposure.",
      "We provide targeted inspections, rust treatment, full roof restorations and gutter upgrades that protect your home from the ongoing wear coastal properties experience year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen W.",
    suburb: "Bundeena",
    quote:
      "Living near the water means everything rusts faster. They replaced corroded flashing and resealed the entire roof — no leaks since. Great work and clear communication throughout.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
