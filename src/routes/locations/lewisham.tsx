import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.894; // Lewisham
const AREA_LON = 151.149;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Lewisham",
  slug: "lewisham",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Inner West Roofing & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "LEWISHAM",
    bullets: [
      "Experienced with Federation-era and terrace roofing",
      "Metal roof repairs, Colorbond replacements and tile restoration",
      "Gutter cleaning and leaf guard installation",
      "Local service for Lewisham and surrounding inner west suburbs with quick response times",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Lewisham Homes",
    paragraphs: [
      "Lewisham sits in the heart of the inner west, where heritage terraces meet modern apartments and established family homes. Older roofs in this area often need specialist attention to preserve character while fixing leaks and wear.",
      "We work across all roof types found in Lewisham — from original terracotta tiles and slate on Federation homes to Colorbond and metal roofing on newer builds. Our team handles repairs, restorations, leak detection and complete re-roofs with care.",
      "Whether you need urgent leak repairs after heavy rain or a full roof restoration for an older property, we deliver clean workmanship and reliable solutions tailored to the local building stock and weather conditions.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and repairs for Lewisham inner west homes",
  },

  problemsBlock: {
    heading: "Common Roofing Issues We Fix in Lewisham",
    subheading: "Older homes in the inner west face unique challenges from age, weathering and tight access.",
    paragraphs: [
      "Many Lewisham properties have original roofing materials that have lasted decades but now show signs of cracked tiles, rusted valleys, corroded flashings or blocked gutters. These issues lead to leaks, ceiling stains and structural damage if left unchecked.",
      "Narrow laneways and attached terraces mean roof access can be tricky, and repairs need precision to avoid disrupting neighbours. We specialise in working safely and efficiently in tight urban environments.",
      "From replacing broken terracotta tiles and repointing ridge caps to installing new guttering and downpipes, we provide targeted repairs and full restoration options designed to protect your investment and keep water out for years to come.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Rebecca S.",
    suburb: "Petersham",
    quote:
      "Our old terrace had multiple leaks and cracked tiles. The team assessed everything, replaced damaged sections and repointed the ridge. No more leaks and the roof looks fantastic. Highly recommend for heritage work.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
