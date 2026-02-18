import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.861; // Barangaroo
const AREA_LON = 151.202;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Barangaroo",
  slug: "barangaroo",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Harbour-Side Roofing Specialists Barangaroo",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BARANGAROO",
    bullets: [
      "High-rise and commercial roofing maintenance",
      "Salt-resistant Colorbond installations and repairs",
      "Strata roofing solutions for waterfront buildings",
      "Fast turnaround for residential and commercial properties across the harbour precinct",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Solutions for Modern Barangaroo Properties",
    paragraphs: [
      "Barangaroo is home to modern high-density residential towers and commercial developments, all exposed to harbour winds and salt air that accelerate roof weathering and corrosion if not properly maintained.",
      "From Colorbond metal roofing to flat membrane systems on apartment buildings, we deliver targeted repairs, leak detection and full roofing installations designed for the unique challenges of waterfront environments.",
      "Our team understands strata requirements, building codes and the need for minimal disruption in busy urban settings — delivering quality workmanship with clear timelines and professional communication from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roofing repairs and installations in Barangaroo waterfront buildings",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in Barangaroo Waterfront Properties",
    subheading: "Harbour winds and salt exposure mean roofs need regular inspections to prevent corrosion and leaks.",
    paragraphs: [
      "Salt air accelerates rust and corrosion on metal roofs, gutters and flashings — especially on older installations that lack proper protective coatings or have been poorly maintained over time.",
      "If you notice water stains on ceilings, rusted guttering, loose flashings or recurring leaks after heavy rain, these issues will only worsen without professional attention and targeted repairs.",
      "We provide full roofing inspections, strata-approved repairs, Colorbond replacements and gutter upgrades — ensuring your property stays watertight and compliant with building standards year-round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael L.",
    suburb: "Millers Point",
    quote:
      "Our building committee needed urgent repairs after wind damage to the roof membrane. The team responded quickly, assessed the entire roof and completed everything within two weeks. Very impressed with the professionalism.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
