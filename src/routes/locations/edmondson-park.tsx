import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.960; // Edmondson Park
const AREA_LON = 150.859;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Edmondson Park",
  slug: "edmondson-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Edmondson Park Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "EDMONDSON PARK",
    bullets: [
      "New home roof inspections and warranty work",
      "Storm damage repairs and leak detection",
      "Colorbond installations and gutter upgrades",
      "Fast response for growing estates across Edmondson Park and surrounding areas",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Edmondson Park Homes",
    paragraphs: [
      "Edmondson Park is one of the fastest-growing suburbs in south-west Sydney, with new estates, modern homes and roofs that are built to current standards but still need proper maintenance and inspections as they settle.",
      "Whether you need builder warranty follow-up, storm damage assessment, or proactive gutter maintenance, we provide clear quotes and reliable workmanship for Colorbond, tiled and metal roofs across the area.",
      "Our team understands the unique challenges of new developments — from construction debris in valleys to heat stress on western-facing roofs — and we deliver lasting solutions backed by proper materials and local experience.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and installations in Edmondson Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Edmondson Park",
    subheading: "New homes are not immune to roofing problems — settling, debris and extreme heat all take a toll.",
    paragraphs: [
      "Even recently built roofs can develop issues: poor flashing around penetrations, debris left in gutters during construction, or inadequate fall causing water pooling. These small faults become bigger leaks if left unattended.",
      "Western Sydney heat means Colorbond roofs expand and contract daily, and summer storms bring sudden downpours that test gutter capacity. If your system was undersized or poorly installed, overflow and rust follow quickly.",
      "We conduct thorough inspections, clear blockages, repair faulty flashing and upgrade guttering where needed — ensuring your roof performs as it should, year-round, regardless of how new the build is.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Daniel P.",
    suburb: "Leppington",
    quote:
      "Had a leak around the skylight only two years after handover. They found poor flashing and fixed it properly with no runaround. Great service and fair pricing.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
