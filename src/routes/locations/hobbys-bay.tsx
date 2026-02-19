import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.980; // Hobbys Bay
const AREA_LON = 151.141;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Hobbys Bay",
  slug: "hobbys-bay",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Industrial & Commercial Roofing Specialists Near Botany Bay",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HOBBYS BAY",
    bullets: [
      "Heavy-duty metal roofing for warehouses and commercial buildings",
      "Corrosion-resistant repairs for coastal exposure and salt air",
      "Large-scale gutter systems designed for wide roof spans",
      "Quick turnaround for industrial sites across Hobbys Bay and Botany",
    ],
  },

  introBlock: {
    heading: "Commercial & Industrial Roofing Solutions in Hobbys Bay",
    paragraphs: [
      "Hobbys Bay sits close to Botany Bay and the airport, where industrial and commercial buildings face constant exposure to salt air, wind and heavy rainfall on large roof footprints.",
      "Our team specializes in metal roofing systems for warehouses, factories and commercial properties — handling repairs, installations and full roof replacements using Colorbond and structural steel designed for industrial loads.",
      "Whether you operate a logistics facility, manufacturing site or commercial building in the area, we deliver durable roofing solutions with minimal disruption to your operations and clear timelines from quote to completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Industrial metal roofing repairs near Botany Bay waterfront",
  },

  problemsBlock: {
    heading: "Common Roofing Issues for Industrial Buildings in Hobbys Bay",
    subheading: "Coastal winds and salt exposure can accelerate corrosion on metal roofs and fasteners across industrial sites.",
    paragraphs: [
      "Large warehouse roofs often develop rust spots, loose fasteners and worn flashings — especially near the bay where moisture and salt speed up deterioration on unprotected steel and older Colorbond coatings.",
      "If you notice water stains on ceilings, pooling after storms, rusted gutters or visible gaps in roof sheeting, those issues will only worsen under coastal conditions and compromise your building envelope.",
      "We provide targeted repairs, rust treatment, structural reinforcement and full re-roofing options using marine-grade materials — keeping your facility watertight and compliant with building standards for industrial use.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael K.",
    suburb: "Botany",
    quote:
      "Our warehouse roof was leaking badly after every storm. They replaced corroded sections, re-sealed all penetrations and upgraded the guttering system. No more water ingress and the job was finished on schedule.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
