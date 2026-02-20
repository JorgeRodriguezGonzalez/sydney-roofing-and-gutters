import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.981; // Voyager Point
const AREA_LON = 150.977;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Voyager Point",
  slug: "voyager-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Voyager Point Roofing Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "VOYAGER POINT",
    bullets: [
      "Expert roof repairs for newer estates and commercial buildings",
      "Complete leak detection and waterproofing services",
      "Metal roof installations and Colorbond upgrades",
      "Professional guttering solutions for riverside locations near Georges River",
    ],
  },

  introBlock: {
    heading: "Quality Roofing Solutions for Voyager Point Homes and Businesses",
    paragraphs: [
      "Voyager Point combines newer residential estates with established commercial properties, creating diverse roofing needs across the suburb. Properties near the Georges River face extra moisture and humidity that can accelerate wear on roof materials and flashing systems.",
      "We service both residential homes and commercial buildings throughout Voyager Point with targeted roof repairs, complete restorations, metal roof installations and modern guttering systems designed to handle heavy Sydney storms and local weather patterns.",
      "Our experienced team works with all roof types including Colorbond metal roofing, concrete tile, and terracotta, delivering professional workmanship and transparent quotes from initial inspection through to final completion.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services in Voyager Point area",
  },

  problemsBlock: {
    heading: "Common Roof Issues We Solve for Voyager Point Properties",
    subheading: "Riverside location and mixed development means roofs face moisture, debris and building settlement challenges.",
    paragraphs: [
      "Properties close to the Georges River experience higher humidity levels that can lead to rust formation on metal roofs, mould growth under tiles, and deteriorating valley flashing. These issues create entry points for water damage if left unaddressed.",
      "Newer construction in Voyager Point can show settling-related problems such as ridge capping movement, flashing gaps, and gutter alignment issues during the first few years. Commercial properties often have flat roof sections requiring specialized membrane repairs.",
      "Whether you have noticed interior ceiling stains, blocked downpipes, loose roof tiles, or water pooling after rain, we provide thorough inspections and lasting repairs that protect your investment and prevent costly structural damage.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Michael R.",
    suburb: "Pleasure Point",
    quote:
      "Excellent service from start to finish. They repaired our metal roof and replaced the gutters efficiently. No mess left behind and the pricing was very reasonable. Highly recommend for anyone in the area.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
