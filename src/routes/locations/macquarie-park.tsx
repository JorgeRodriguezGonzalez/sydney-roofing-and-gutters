import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.776; // Macquarie Park
const AREA_LON = 151.122;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Macquarie Park",
  slug: "macquarie-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Commercial & Residential Roofing in Macquarie Park",
    titleTop: "ROOFING SERVICES",
    titleBottom: "MACQUARIE PARK",
    bullets: [
      "Metal and Colorbond roofing for commercial and residential properties",
      "Fast leak detection and waterproofing solutions",
      "Gutter cleaning for apartment complexes and townhouses",
      "Trusted roofing repairs across Macquarie Park and North Ryde",
    ],
  },

  introBlock: {
    heading: "Reliable Roofing Services for Macquarie Park Properties",
    paragraphs: [
      "Macquarie Park is home to commercial hubs, apartment complexes, and residential zones where reliable roofing is essential to protect both business assets and family homes from weather damage.",
      "We work across the area servicing metal roofs, tile installations, and flat commercial roofing systems — delivering fast response times for leak repairs, storm damage restoration, and preventive maintenance.",
      "From strata properties near Macquarie University to family townhouses closer to Lane Cove Road, we provide honest quotes, clean installations, and workmanship designed to handle Sydney weather all year round.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Professional roofing services for Macquarie Park homes and businesses",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Solve in Macquarie Park",
    subheading: "From blocked gutters on multi-level apartments to metal roof corrosion, we cover the full range of local roofing challenges.",
    paragraphs: [
      "Apartment buildings and commercial properties in Macquarie Park often face blocked downpipes, ponding water on flat roofs, and rust on ageing metal cladding — all issues that worsen quickly if left unaddressed.",
      "Residential properties deal with cracked tiles from storms, flashing failures around skylights, and gutters that overflow during heavy rain due to inadequate sizing or poor fall.",
      "We provide targeted repairs for leaks, professional gutter replacements, roof restorations, and maintenance plans designed for high-density and mixed-use developments across the suburb.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "North Ryde",
    quote:
      "Our townhouse had water coming through the ceiling after every storm. They found the problem in the valley, sealed it properly, and replaced damaged sections. No more leaks and very reasonably priced.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
