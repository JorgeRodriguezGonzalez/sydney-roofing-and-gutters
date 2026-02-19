import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.025; // Harrington Park
const AREA_LON = 150.731;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Harrington Park",
  slug: "harrington-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Harrington Park Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "HARRINGTON PARK",
    bullets: [
      "Modern home roofing with Colorbond and metal systems",
      "Expert repairs, maintenance and leak detection services",
      "Storm damage response and gutter cleaning solutions",
      "Fast service for new estates in the greater Macarthur region",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Harrington Park Homes",
    paragraphs: [
      "Harrington Park features modern homes built over the past decade with contemporary roofing systems that need regular care to maintain warranties and peak performance across our hot summers and storm seasons.",
      "Our team provides roof inspections, repairs and gutter maintenance designed for newer estates in Southwest Sydney, where quality workmanship and warranty compliance are essential for homeowner peace of mind.",
      "We work with Colorbond steel, metal tiles and modern composite systems, delivering clean installations, reliable repairs and honest advice from start to finish for every job we take on.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roof repairs and guttering for Harrington Park",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Harrington Park",
    subheading: "Even new roofs need attention after severe weather, especially in the growing Macarthur area.",
    paragraphs: [
      "Severe storms can damage flashing, lift roof sheets or clog gutters with debris. In newer estates like Harrington Park, small problems can escalate fast if not caught early during routine maintenance checks.",
      "Homeowners often report issues like blocked downpipes, minor leaks around penetrations, or damage from extreme heat causing fastener movement. These are normal for the local climate but require prompt professional attention.",
      "We provide thorough inspections, targeted repairs and proactive maintenance plans to keep your roof watertight and compliant with builder warranties throughout the year.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma P.",
    suburb: "Narellan",
    quote:
      "They came out quickly after storm damage, fixed the flashing and cleared our blocked gutters. Very thorough inspection and fair pricing. Will definitely use them again for future maintenance.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
