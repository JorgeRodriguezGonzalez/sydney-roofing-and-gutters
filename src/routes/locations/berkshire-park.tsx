import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.670; // Berkshire Park
const AREA_LON = 150.781;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Berkshire Park",
  slug: "berkshire-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Berkshire Park Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BERKSHIRE PARK",
    bullets: [
      "Expert roofing services for modern Western Sydney homes",
      "Colorbond roof repairs and new installations",
      "Guttering solutions designed for heavy summer storms",
      "Fast response across new estates and established streets in Berkshire Park",
    ],
  },

  introBlock: {
    heading: "Professional Roofing & Guttering for Berkshire Park Homes",
    paragraphs: [
      "Berkshire Park has grown rapidly in recent years, with many new homes built across modern estates. While newer roofs are generally solid, construction debris, settling and extreme Western Sydney heat can still cause issues that need attention.",
      "We work with Colorbond metal roofs, tile installations and guttering systems across Berkshire Park and surrounding suburbs. Whether your home is brand new or a few years old, we handle repairs, leak detection, gutter cleaning and full roof restoration when required.",
      "Our team focuses on long-lasting solutions, clean workmanship and clear communication from first inspection to final cleanup — so you can stay protected through every summer storm and heatwave.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Colorbond roof installation and gutter work in Berkshire Park",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Problems in Berkshire Park",
    subheading: "New homes are not immune to roof and gutter issues, especially in extreme Western Sydney conditions.",
    paragraphs: [
      "Even recently built homes can develop problems. Construction debris left in valleys and gutters, poor flashing installation or downpipes that were never connected properly all lead to water pooling, overflow and leaks during heavy rain.",
      "Western Sydney heat is relentless in summer. Colorbond roofs expand and contract daily, and over time fasteners can loosen, seals can crack and small gaps can appear — all of which allow water to seep through during storms.",
      "If you notice rust spots forming early, sagging gutters, damp patches on ceilings or overflow near downpipes, a proper inspection will identify the cause and provide the right repair before damage spreads.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma P.",
    suburb: "Marsden Park",
    quote:
      "Our gutters were overflowing every storm. The team found debris left by builders and reconnected a downpipe that was never finished. Fixed in one visit. Very happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
