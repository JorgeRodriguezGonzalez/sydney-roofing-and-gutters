import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.864; // Flemington
const AREA_LON = 151.078;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Flemington",
  slug: "flemington",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roofing Specialists for Flemington",
    titleTop: "ROOFING SERVICES",
    titleBottom: "FLEMINGTON",
    bullets: [
      "Expert repairs for heritage and modern homes",
      "Roof restorations, leak detection and metal roofing work",
      "Complete guttering solutions for urban properties",
      "Fast response times for inner west suburbs including Homebush and Strathfield",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Flemington and the Inner West",
    paragraphs: [
      "Flemington sits in the heart of the inner west, where a mix of heritage terraces, post-war homes and newer townhouses means every roofing job requires careful attention to both design and durability.",
      "From tile repairs and metal roof replacements to full gutter installations and leak investigations, we work across all roof types common to the area — including terracotta, Colorbond and corrugated metal.",
      "Our team delivers clean installations, reliable repairs and thorough inspections that help you avoid costly water damage down the track. We keep our quotes transparent and our timelines realistic from start to finish.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing repairs and installations in Flemington",
  },

  problemsBlock: {
    heading: "Common Roofing and Gutter Issues We Fix in Flemington",
    subheading: "Urban environments and older roof structures can bring their own challenges — from blocked box gutters to rusted flashings.",
    paragraphs: [
      "Many properties in the inner west have compact roof layouts, older guttering systems and limited access for maintenance. That can mean small issues like blocked downpipes or cracked valleys go unnoticed until leaks appear inside.",
      "If you have water stains on ceilings, rust patches along gutters, loose ridge capping or overflowing during storms, a proper roof inspection will identify the source and help you avoid more expensive repairs later.",
      "We handle everything from minor leak fixes and gutter realignments to complete roof restorations and metal re-roofing. Our work is backed by quality materials and local knowledge of inner west weather patterns.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Homebush",
    quote:
      "They replaced our old box gutters and fixed the flashing around the chimney. The job was neat, the team was polite and there have been no leaks since. Really happy with the result.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
