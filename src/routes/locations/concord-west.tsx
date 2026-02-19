import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.850; // Concord West
const AREA_LON = 151.095;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Concord West",
  slug: "concord-west",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Concord West Roofing & Guttering Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CONCORD WEST",
    bullets: [
      "Expert roof repairs for heritage and contemporary homes",
      "Colorbond, tile and metal roofing installations and restorations",
      "Gutter replacements and valley overflow solutions",
      "Rapid leak detection and weather-damage repairs across the inner west",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Concord West Homes",
    paragraphs: [
      "Concord West features a diverse mix of older Federation homes, brick bungalows and modern townhouses — each with different roofing needs and challenges that require local knowledge and careful attention to detail.",
      "Whether you need urgent leak repairs, full tile restoration, Colorbond re-roofing or new guttering to handle Sydney storm runoff, we deliver honest assessments and quality workmanship tailored to your property type and budget.",
      "Our team covers all roofing materials common to the inner west — terracotta and concrete tiles, metal deck, slate repairs — with a focus on durability, clean finishes and clear communication throughout every project.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and guttering work in Concord West",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Concord West",
    subheading: "Older roofs and ageing gutters often show wear after years of storms, heat and debris build-up.",
    paragraphs: [
      "Many homes in the area still have original terracotta tiles, metal ridges or valley irons that have corroded or cracked over time — leading to water ingress, ceiling stains and structural concerns if left unchecked.",
      "Blocked valleys, rusted downpipes and sagging gutters are common after heavy rain or wind, especially where tree canopy and leaf litter are present. These problems escalate quickly without proper maintenance and timely intervention.",
      "We diagnose and repair leaks, replace failing sections, upgrade inadequate drainage systems and restore roof surfaces — so your home stays dry, protected and compliant with modern standards for the long term.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rachel P.",
    suburb: "North Strathfield",
    quote:
      "Our roof was leaking in two rooms after every storm. They found cracked tiles and a blocked valley, fixed everything in one day and left the site spotless. Great communication and no surprises on price.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
