import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.862; // Rozelle
const AREA_LON = 151.171;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Rozelle",
  slug: "rozelle",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Rozelle Heritage Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ROZELLE",
    bullets: [
      "Period home roofing repairs for heritage properties",
      "Terra-cotta tile and slate roof restoration",
      "Cast-iron gutter repairs and heritage replacements",
      "Local experts serving Rozelle, Balmain and the Inner West since 1999",
    ],
  },

  introBlock: {
    heading: "Expert Roofing Services for Heritage Homes in Rozelle",
    paragraphs: [
      "Rozelle is home to some of the finest Victorian and Edwardian residences, and many of these properties still feature original terra-cotta tiles, slate roofing and decorative cast-iron guttering that require specialist care and attention.",
      "Our team has extensive experience working with period architecture across the Inner West. We handle everything from minor tile repairs and ridge capping to full heritage restorations, ensuring that original materials and character features are preserved wherever possible.",
      "We use premium materials that match the age and aesthetic of your property, including reclaimed terra-cotta tiles, genuine slate and reproduction cast-iron sections — always aiming for a seamless finish that respects the history and value of your home.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration on a period home in Rozelle",
  },

  problemsBlock: {
    heading: "Common Roofing & Gutter Issues for Rozelle Period Homes",
    subheading: "Older homes face unique challenges including cracked tiles, sagging gutters and water damage from ageing materials.",
    paragraphs: [
      "Terra-cotta and slate roofs are incredibly durable, but after 100+ years many tiles develop hairline cracks, mortar bedding fails or ridge cappings start lifting. Left unaddressed, these small issues can lead to water ingress, ceiling stains and timber rot.",
      "Original cast-iron guttering and downpipes are equally vulnerable — rust-through, misaligned brackets and leaf build-up from mature street trees can all contribute to overflow and foundation issues.",
      "We offer targeted repairs, preventative maintenance and full restoration packages designed to extend the life of your heritage roof system while maintaining council-approved heritage standards and period authenticity.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Emma F.",
    suburb: "Balmain",
    quote:
      "They re-pointed the ridge capping and replaced six cracked terra-cotta tiles on our Victorian terrace. The colour match was perfect and they respected the original workmanship throughout. Highly recommend for heritage homes.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
