import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.937; // Arncliffe
const AREA_LON = 151.147;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Arncliffe",
  slug: "arncliffe",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Arncliffe Roof and Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ARNCLIFFE",
    bullets: [
      "Roof repairs for Federation and post-war homes",
      "Guttering solutions for high-traffic flight paths and salty air",
      "Tile, Colorbond and metal roof restoration services",
      "Fast response for leaks, rust damage and drainage upgrades across Arncliffe properties",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Services in Arncliffe",
    paragraphs: [
      "Arncliffe sits between the airport and Botany Bay, where salt-laden air and coastal moisture combine to accelerate rust, corrosion and roof material breakdown on both residential and light industrial buildings throughout the suburb.",
      "Our team provides roof repairs, full restorations and gutter replacements for terracotta tile, Colorbond and metal roofs across older Federation homes, brick cottages and newer builds in streets like Forest Road and Firth Street.",
      "We focus on drainage flow, ventilation and long-term protection using materials suited to the local environment, and we deliver clean workmanship backed by clear documentation and fair pricing every time.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and gutter work in Arncliffe NSW",
  },

  problemsBlock: {
    heading: "Roofing and Gutter Issues We Solve in Arncliffe",
    subheading: "Salt air, aircraft vibration and storm runoff cause accelerated roof wear in this part of the St George district.",
    paragraphs: [
      "Terracotta and concrete tiles crack or lift when drainage is blocked. Gutters rust through faster near the bay. Downpipes fill with silt and leaves, backing water into eaves and ceiling cavities during heavy rain.",
      "If you notice rust streaks on gutters, water marks inside walls, pooling on flat sections, missing ridge caps or flashing that has lifted near chimneys or valleys, it is time for a proper inspection and targeted repair.",
      "We fix leaks, replace damaged flashing, upgrade gutter capacity and restore roof surfaces to protect your home from further damage, ensuring the work lasts and complies with modern building standards.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Rockdale",
    quote:
      "They came out quickly after heavy rain revealed a leak near the chimney. Replaced flashing and checked the gutters for blockages. No more drips and the price was fair.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
