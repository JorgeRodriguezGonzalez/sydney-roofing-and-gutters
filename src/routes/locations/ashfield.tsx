import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.889; // Ashfield
const AREA_LON = 151.127;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Ashfield",
  slug: "ashfield",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Heritage Roofing Specialists in Ashfield",
    titleTop: "ROOFING SERVICES",
    titleBottom: "ASHFIELD",
    bullets: [
      "Expert repairs for Federation and Victorian-era homes",
      "Slate, terracotta and tile roof restoration services",
      "Heritage-sensitive gutter repairs and replacements",
      "Fast response for leak detection and emergency repairs across the inner west",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Ashfield and Surrounds",
    paragraphs: [
      "Ashfield is home to some of the inner west most beautiful heritage properties, featuring original slate roofs, terracotta tiles and intricate brickwork. These period homes require specialist roofing knowledge to maintain their character and structural integrity.",
      "Our team provides tailored solutions for older housing stock, from delicate slate repairs and valley replacements to modern Colorbond upgrades on renovated properties. We understand the unique challenges of working with aged materials and tight urban sites.",
      "Whether you need a minor repair on a Federation cottage or a complete roof restoration on a Victorian terrace, we deliver quality workmanship that respects the original design while ensuring long-term weather protection.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Heritage roof restoration and repairs in Ashfield",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Ashfield Homes",
    subheading: "Older roofs in established suburbs face unique wear patterns that need experienced attention.",
    paragraphs: [
      "Many homes in Ashfield still have original slate or terracotta tiles that can crack, slip or deteriorate over time. Aging flashings, rusted gutters and blocked valleys are also common in properties over fifty years old.",
      "If you notice water stains on interior ceilings, missing tiles after storms, sagging gutter sections or pooling water near foundations, these are signs your roof system needs professional assessment.",
      "We handle everything from targeted slate replacement and valley realignment to full gutter upgrades and roof restorations, ensuring your heritage home remains watertight and protected for decades to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Chris M.",
    suburb: "Burwood",
    quote:
      "They repaired the slate roof on our Federation home with incredible care and attention. The team understood the heritage requirements and completed the job without disrupting the original character. Highly recommend for period properties.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
