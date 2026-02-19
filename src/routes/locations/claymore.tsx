import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -34.041; // Claymore
const AREA_LON = 150.812;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Claymore",
  slug: "claymore",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Expert Roof Repairs in Claymore",
    titleTop: "ROOFING SERVICES",
    titleBottom: "CLAYMORE",
    bullets: [
      "Tailored solutions for established homes and newer builds",
      "Full roof repairs, restorations and Colorbond installations",
      "Gutter cleaning and replacement for Western Sydney weather",
      "Clear quotes, quality materials and work that lasts through every season",
    ],
  },

  introBlock: {
    heading: "Professional Roofing and Guttering Work for Claymore Properties",
    paragraphs: [
      "Claymore homes face the full range of Western Sydney conditions, from intense summer heat that can warp flashing and crack seals, to sudden storms that test every gutter joint and downpipe connection.",
      "We work across all roof types in the area, including older tile roofs that need careful restoration, Colorbond installations on newer homes, and everything in between — always matching our approach to what each property actually needs.",
      "Whether you have a small leak that needs fixing now or you are planning a full roof replacement, our team delivers clean, reliable workmanship backed by clear communication from the first inspection through to final sign-off.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Roof restoration and gutter repairs completed in Claymore",
  },

  problemsBlock: {
    heading: "Common Roofing and Guttering Issues We Fix in Claymore",
    subheading: "Hot summers, sudden storms and ageing materials can all create problems that get worse if left unaddressed.",
    paragraphs: [
      "Older tile roofs often develop cracked or slipped tiles, allowing water to seep through bedding or sarking during heavy rain. Metal roofs can suffer from rusted fixings, loose sheeting or worn valley flashing that leads to hidden leaks inside your ceiling space.",
      "Gutters in this area deal with leaves, dirt and debris that block downpipes and cause overflow during storms, plus metal corrosion from extended sun exposure that weakens joints and brackets over time.",
      "We handle everything from minor gutter repairs and targeted tile replacement through to complete roof restorations with new flashing, repointing and protective coating — so your home stays watertight no matter what the weather brings.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen L.",
    suburb: "Campbelltown",
    quote:
      "They replaced our entire tile roof and did an amazing job. The quote was clear, the team was respectful and the finish looks fantastic. No mess left behind either.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
