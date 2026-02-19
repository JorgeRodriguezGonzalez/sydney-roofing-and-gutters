import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.943; // Horningsea Park
const AREA_LON = 150.843;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Horningsea Park",
  slug: "horningsea-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Roofing Specialists Serving Horningsea Park",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HORNINGSEA PARK",
    bullets: [
      "Expert roof repairs and new installation work",
      "Colorbond and tile roofing solutions for modern homes",
      "Guttering upgrades to handle western Sydney downpours",
      "Quality workmanship with clear quotes and fast turnaround times",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Horningsea Park Homes",
    paragraphs: [
      "Horningsea Park is one of the newer suburbs in the Liverpool area, with modern homes that benefit from proactive roofing maintenance. Even new builds can develop issues with flashing, gutter alignment or debris from construction that needs proper attention.",
      "Our team provides reliable roof repairs, Colorbond installations, roof restorations and full guttering services designed to withstand western Sydney conditions including intense summer heat, heavy storms and rapid weather shifts.",
      "We work across all roof types common in the area including Colorbond steel, concrete tile and terracotta. Every job is completed with attention to detail, transparent pricing and a focus on long-term performance.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing and gutter work in Horningsea Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Repair in Horningsea Park",
    subheading: "Newer homes are not immune to roofing problems — early detection saves money and prevents water damage.",
    paragraphs: [
      "Even in recently built estates, we regularly see poor flashing installation, gutter misalignment, construction debris blocking downpipes and roof penetrations that were never properly sealed. These small issues cause leaks, overflow and ceiling stains if left unchecked.",
      "Western Sydney conditions can be harsh on roofing materials. Colorbond expands in extreme heat, tiles can crack during hailstorms, and gutters overflow when downpipes cannot handle sudden heavy rain.",
      "We provide thorough inspections, targeted repairs and complete roof restoration services. Whether you need a quick leak fix or a full gutter replacement, we deliver clean workmanship and reliable results.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma K.",
    suburb: "Edmondson Park",
    quote:
      "Our gutters were installed incorrectly during the build and we had constant overflow issues. The team diagnosed the problem quickly, realigned everything and now the system works perfectly even in heavy storms.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
