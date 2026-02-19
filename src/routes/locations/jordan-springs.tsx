import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.730; // Jordan Springs
const AREA_LON = 150.715;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Jordan Springs",
  slug: "jordan-springs",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Jordan Springs Master-Planned Estate Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "JORDAN SPRINGS",
    bullets: [
      "Expert roof repairs and installations for modern estates",
      "Colorbond roofing solutions built for western Sydney heat",
      "Fast gutter repairs and storm damage assessments",
      "Warranty-safe maintenance for newer homes across Jordan Springs and Caddens",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Jordan Springs Modern Homes",
    paragraphs: [
      "Jordan Springs is a master-planned community with newer homes, larger roof areas and modern Colorbond installations. Even new roofs need preventive care — especially with western Sydney experiencing extreme heat, sudden storms and rapid temperature shifts.",
      "We specialise in roofing work for estates like Jordan Springs, providing roof repairs, leak detection, gutter cleaning and Colorbond maintenance that protects your investment without affecting builder warranties or HOA requirements.",
      "From flashing adjustments to full gutter upgrades, our team delivers clean workmanship, fast turnarounds and clear communication — so your roof stays protected through every summer heatwave and storm season.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter services in Jordan Springs estate",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Jordan Springs Homes",
    subheading: "Even modern roofs face problems when exposed to 40-degree heat, storms and construction settling.",
    paragraphs: [
      "New estates often deal with construction debris in gutters, flashing gaps from settling, and Colorbond panels expanding in extreme heat. These small issues can turn into leaks, water damage and ceiling stains if left unchecked.",
      "Storm damage is another concern — high winds can lift ridge capping, dislodge tiles on feature sections, and overwhelm gutters that were undersized during the initial build phase.",
      "We provide targeted roof repairs, gutter capacity upgrades, valley resealing and preventive inspections — giving Jordan Springs homeowners peace of mind before the next heatwave or downpour hits.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma K.",
    suburb: "Caddens",
    quote:
      "After a big storm we had water coming through the ceiling. They came out the same day, found the flashing issue and fixed it properly. Really responsive and professional team.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
