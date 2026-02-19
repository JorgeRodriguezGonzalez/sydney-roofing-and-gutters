import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.778; // Harbord
const AREA_LON = 151.284;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Harbord",
  slug: "harbord",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roofing Experts Serving Harbord",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HARBORD",
    bullets: [
      "Protection against salt air and coastal corrosion",
      "Colorbond, tile and metal roof repairs built for ocean exposure",
      "Fast response to wind damage and leak detection",
      "Guttering systems designed for coastal weather and heavy rain events",
    ],
  },

  introBlock: {
    heading: "Roofing & Guttering Built for Coastal Conditions in Harbord",
    paragraphs: [
      "Harbord sits right on the coast near Freshwater Beach, where constant ocean breezes and salt-laden air put roofs and gutters under steady pressure. Without proactive maintenance, corrosion and leaks can develop quickly in this exposed environment.",
      "We specialise in roof repairs, restorations and guttering upgrades designed specifically for coastal properties — using materials that resist salt damage and hold up against strong winds and storms that roll in from the ocean.",
      "From minor leak repairs and gutter cleaning to full roof restorations in Colorbond or tile, our team delivers solutions that keep homes dry, protected and ready for whatever the weather brings next.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roof repairs and restoration work in Harbord",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Fix in Harbord Homes",
    subheading: "Salt air, ocean winds and coastal humidity create unique challenges for roofs and gutters in beachside areas.",
    paragraphs: [
      "Metal roofs and guttering near the coast are especially vulnerable to rust and corrosion — even Colorbond can show early wear if protective coatings are compromised by wind-driven sand or debris from storms.",
      "Leaks often appear around flashing, valleys and ridge capping after strong coastal winds, and blocked gutters can overflow quickly when heavy rain arrives during summer storms or winter fronts.",
      "We inspect, repair and restore roofs with corrosion-resistant materials, seal problem areas properly and ensure guttering systems are clear and ready to handle heavy downpours without damage or overflow.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma K.",
    suburb: "Freshwater",
    quote:
      "Our metal roof was showing rust along the edges from the salt air. They replaced the damaged sections with Colorbond and resealed everything. Very thorough work and no more corrosion worries.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
