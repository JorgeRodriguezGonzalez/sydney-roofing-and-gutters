import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.960; // Brighton-Le-Sands
const AREA_LON = 151.155;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Brighton-Le-Sands",
  slug: "brighton-le-sands",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Brighton-Le-Sands",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BRIGHTON-LE-SANDS",
    bullets: [
      "Salt-air resistant roof repairs and Colorbond installations",
      "Coastal gutter systems for bay winds and storms",
      "Roof restoration designed for beachside weathering",
      "Leak detection and preventative maintenance for seaside homes across the area",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Brighton-Le-Sands Beachside Homes",
    paragraphs: [
      "Living along Botany Bay means enjoying coastal views and sea breezes — but it also means your roof faces constant exposure to salt air, moisture and sand-laden winds that accelerate corrosion and tile wear.",
      "We specialise in roofing solutions tailored for coastal environments, including Colorbond installations, rust prevention, tile repairs and gutter upgrades that handle everything from summer storms to winter downpours.",
      "Whether you need a roof restoration for weathered tiles or fast leak repairs after heavy rain, our team delivers reliable workmanship backed by local knowledge and a focus on long-term protection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs for beachside homes in Brighton-Le-Sands",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Brighton-Le-Sands",
    subheading: "Coastal conditions create unique challenges for roofs — salt corrosion, wind lift and moisture build-up need proactive solutions.",
    paragraphs: [
      "Salt air eats away at metal gutters, ridge capping and roof fasteners faster than inland areas. Rusted valleys, lifted tiles and corroded flashings are common problems we see throughout the suburb.",
      "Wind-driven rain often pushes moisture under tiles or through gaps in ridge lines, while blocked gutters from nearby foliage cause overflow that stains facades and soaks eaves.",
      "Our team inspects for early signs of damage, replaces corroded components, seals leak points and installs upgraded materials built to withstand bayside weather year after year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca K.",
    suburb: "Rockdale",
    quote:
      "They replaced our rusted gutters and resealed the ridge capping. The work was clean, the team was punctual and we have not had a single leak since. Highly recommend for coastal homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
