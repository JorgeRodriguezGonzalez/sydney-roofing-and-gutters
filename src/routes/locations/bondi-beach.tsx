import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.891; // Bondi Beach
const AREA_LON = 151.274;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Bondi Beach",
  slug: "bondi-beach",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Specialists for Bondi Beach",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BONDI BEACH",
    bullets: [
      "Salt-resistant roofing solutions for beachside properties",
      "Leak repairs and restoration for coastal weather exposure",
      "Rust prevention and Colorbond upgrades for ocean environments",
      "Fast response across Bondi Beach and surrounding coastal suburbs including Bronte and Tamarama",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Beachside Homes in Bondi Beach",
    paragraphs: [
      "Bondi Beach is home to iconic beachside architecture, heritage apartments and modern coastal properties. All face constant exposure to salt air, ocean winds and intense UV, which means your roof works harder here than almost anywhere else in Sydney.",
      "From terracotta tiles on heritage buildings to Colorbond roofing on contemporary homes, we provide roof repairs, leak detection and full restoration services designed for the demands of coastal living.",
      "Our team understands how salt accelerates rust, how wind-driven rain finds every weak point, and how to deliver roofing solutions that last in one of the harshest roofing environments in Sydney.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for coastal homes in Bondi Beach",
  },

  problemsBlock: {
    heading: "Coastal Roofing Problems We Solve in Bondi Beach",
    subheading: "Salt air and ocean winds create unique roofing challenges that require specialist knowledge and materials.",
    paragraphs: [
      "Rust on metal roofs and gutters happens faster near the ocean. Flashing corrodes, valleys fail, and small leaks become major water damage if not caught early. Standard materials often fail within years when exposed to constant salt spray.",
      "Heritage properties with terracotta or slate tiles also face cracking, slippage and sarking breakdown due to wind uplift and thermal cycling. Gutters overflow from sand and debris carried by coastal winds.",
      "We specialise in coastal roofing repairs, rust remediation, gutter replacement with marine-grade materials, and full roof restorations that withstand everything the ocean throws at them. Whether you need emergency leak repairs or proactive maintenance, we deliver lasting results.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma K.",
    suburb: "Bronte",
    quote:
      "Our metal roof was rusting badly from the salt air. They replaced all the corroded sections, upgraded the gutters and resealed everything. No leaks since, even in heavy coastal storms. Highly recommend.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
