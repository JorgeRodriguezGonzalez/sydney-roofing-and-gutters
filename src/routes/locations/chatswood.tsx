import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.796; // Chatswood
const AREA_LON = 151.183;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Chatswood",
  slug: "chatswood",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Chatswood Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CHATSWOOD",
    bullets: [
      "Efficient solutions for urban environments",
      "Comprehensive roof repair and maintenance",
      "Gutters designed for urban rainfall events",
      "Fast service across Chatswood, North Sydney & St Leonards",
    ],
  },

  introBlock: {
    heading: "Expert Roofing & Guttering Services in Chatswood",
    paragraphs: [
      "Chatswood features a mix of urban living and leafy surroundings which can present challenges in roof maintenance. Regular care is essential to prevent costly damage and extend the lifespan of your roof and gutters.",
      "From the bustling streets of Chatswood to the serene areas of North Sydney, we offer tailored repairs and maintenance solutions designed to withstand local weather patterns.",
      "Our skilled team uses durable materials like Colorbond and terracotta tiles to ensure your roof remains in top condition, safeguarding your property from rainfall and other elements.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof repairs and guttering in Chatswood",
  },

  problemsBlock: {
    heading: "Roofing & Gutter Problems We Fix in Chatswood",
    subheading: "Urban density and frequent rainfall can stress roofs and gutters significantly.",
    paragraphs: [
      "The urban environment in Chatswood leads to unique roofing challenges, like debris build-up and limited drainage, requiring regular attention to prevent severe issues.",
      "Common problems include clogged gutters and poor drainage, leading to water overflow and potential structural damage if left unattended.",
      "Our team offers comprehensive inspections, emergency repairs, and regular maintenance to keep your roofing systems in excellent shape all year round.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "North Sydney",
    quote:
      "Impressed with the prompt and professional service. Our gutters are now performing perfectly after years of persistent overflow issues — highly recommended.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
