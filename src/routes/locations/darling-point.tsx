import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.871; // Darling Point
const AREA_LON = 151.240;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Darling Point",
  slug: "darling-point",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Premium Roofing Services for Darling Point",
    titleTop: "ROOFING SERVICES",
    titleBottom: "DARLING POINT",
    bullets: [
      "Specialist heritage roof restoration and conservation",
      "Tile, slate and metal roof repairs",
      "Coastal corrosion protection and gutter upgrades",
      "Harbour-side roofing expertise with fast response times throughout the Eastern Suburbs",
    ],
  },

  introBlock: {
    heading: "Expert Roofing and Guttering for Darling Point Homes",
    paragraphs: [
      "Darling Point is home to some of the finest heritage properties in Sydney, many with complex roof lines, ornate detailing and materials that demand specialist attention — from terracotta and slate to original metal work.",
      "Harbour exposure means constant salt air, which accelerates corrosion on gutters, flashings and roof fasteners. Regular inspection and preventative maintenance are essential to protect both structure and value.",
      "We provide roof repairs, full restoration, gutter replacement and protective coatings designed for waterfront conditions — with a focus on preserving the character and quality of your property.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration in Darling Point with harbour views",
  },

  problemsBlock: {
    heading: "Common Roofing Challenges in Darling Point and the Eastern Suburbs",
    subheading: "Salt air and coastal weather place extra stress on roofing materials — especially on heritage homes.",
    paragraphs: [
      "Corrosion is the silent issue in coastal suburbs. Gutters, downpipes, flashings and roof fixings can rust through faster than expected, leading to leaks, pooling and water damage in ceiling spaces.",
      "Older roofs with slate or terracotta tiles may suffer from broken tiles, dislodged ridges or failed underlays. These issues require careful assessment and repair to maintain weatherproofing without compromising heritage value.",
      "We carry out detailed inspections, provide corrosion-resistant solutions and offer restoration work that respects original design while meeting modern performance standards — keeping your roof secure and your property protected.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Margaret R.",
    suburb: "Rushcutters Bay",
    quote:
      "Our Federation home needed careful roof restoration after years of coastal exposure. The team was professional, respectful of the heritage features, and completed everything on schedule. Highly recommended for period properties.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
