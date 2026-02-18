import { createLocationRoute } from "@/routes/locations/LocationTemplate";
import { getNearestOfficeGeo } from "@/lib/geo";
import { getBenefitsBlock, getDefaultServicesInclude } from "@/lib/locationContent";

// Area centre point (used to pick the closest Google Maps listing).
const AREA_LAT = -33.967; // Beverley Park
const AREA_LON = 151.120;

const officeGeo = getNearestOfficeGeo(AREA_LAT, AREA_LON);

const config = {
  suburb: "Beverley Park",
  slug: "beverley-park",
  latitude: officeGeo.latitude,
  longitude: officeGeo.longitude,
} as const;

const content = {
  hero: {
    eyebrow: "Coastal Roof & Gutter Specialists",
    titleTop: "ROOFING SERVICES",
    titleBottom: "BEVERLEY PARK",
    bullets: [
      "Salt-resistant repairs for coastal roofing systems",
      "Metal roof restoration and Colorbond replacement",
      "Gutter cleaning and corrosion prevention",
      "Fast quotes for Beverley Park, Carlton and Kogarah Bay homes",
    ],
  },

  introBlock: {
    heading: "Professional Roofing Services for Beverley Park Homes",
    paragraphs: [
      "Beverley Park sits close to Botany Bay, which means roofs here are constantly exposed to salt air, coastal winds and moisture — all factors that accelerate rust, corrosion and gutter breakdown.",
      "Whether you have a Colorbond roof showing early rust spots, concrete tiles lifting after storms or gutters overflowing with debris, we provide targeted repairs and long-term maintenance solutions tailored for coastal conditions.",
      "From Carlton and Ramsgate to Monterey and Kogarah Bay, our team specialises in metal roof restoration, tile repairs, gutter replacement and leak detection — delivering clean workmanship and honest advice on every job.",
    ],
    imageSrc: "/images/content-block-2.webp",
    imageAlt: "Coastal roofing and gutter work in Beverley Park",
  },

  problemsBlock: {
    heading: "Common Roofing Problems We Solve in Beverley Park",
    subheading: "Coastal exposure demands regular roof maintenance to prevent leaks, rust and structural damage.",
    paragraphs: [
      "Salt air accelerates corrosion on metal roofs and gutters — even modern Colorbond can show rust spots if protective coatings are compromised by debris, fallen branches or poor drainage.",
      "Homes near the bay often experience blocked valleys, rusted flashing and overflowing gutters during heavy rain. Left unchecked, these issues lead to ceiling stains, rotting timber and expensive internal damage.",
      "We offer thorough inspections, targeted repairs and preventative treatments including gutter cleaning, rust removal, protective coatings and full metal roof restorations — keeping your home watertight and protected.",
    ],
    backgroundImage: "/images/hero-roof.webp",
  },

  testimonial: {
    name: "Karen P.",
    suburb: "Carlton",
    quote:
      "Our metal roof was starting to rust along the ridge. They treated the surface, resealed everything and applied protective coating. The difference is huge and the price was very reasonable.",
    rating: 5,
  },

  servicesInclude: getDefaultServicesInclude(),
  benefits: getBenefitsBlock(config.suburb),
} as const;

const { Page, route } = createLocationRoute(config, content);
export { route };
export default Page;
