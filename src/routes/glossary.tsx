import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import { BookA, Search } from "lucide-react";

const DEFAULTS = {
  businessName: "Sydney Roofing & Gutters",
};

type GlossaryTerm = {
  term: string;
  definition: string;
};

const glossaryTerms: GlossaryTerm[] = [
  { term: "Abutment", definition: "The junction where a roof surface meets a vertical wall or structure. Proper flashing at abutments is critical to prevent water ingress." },
  { term: "Anticon Blanket", definition: "A lightweight glass wool insulation adhered to a reflective foil backing. Installed above battens and directly under roof sheeting, it reduces heat transfer and dampens rain noise on metal roofs." },
  { term: "Apex", definition: "The highest point of a roof where two or more slopes meet at the ridgeline. Also refers to the fitting used to cover this junction point." },
  { term: "Barge Board", definition: "A board that covers the exposed roof timbers on the gable or skillion end of a roof. It is fixed parallel to the roof slope and provides a neat, weather-resistant finish." },
  { term: "Barge Capping", definition: "A metal or other material flashing used to cover and protect the end of roof sheeting or cladding at the gable end. It prevents wind-driven rain from entering the roof cavity." },
  { term: "Base Metal Thickness (BMT)", definition: "The measured thickness of steel roofing material before any protective coatings such as ZINCALUME or Colorbond paint are applied. A higher BMT generally indicates a longer-lasting roof." },
  { term: "Batten", definition: "A horizontal piece of timber or metal channel installed on top of roof rafters. Battens provide the fixing points for roof sheeting, tiles, or other cladding materials." },
  { term: "Bird Spikes", definition: "Devices installed on roof surfaces, ridges, or gutters to deter birds from landing or nesting. They help prevent damage and debris build-up caused by bird activity." },
  { term: "Box End", definition: "The finished end of a roof where the gutter terminates, typically sealed with a metal cap to prevent water overflow." },
  { term: "Box Gutter", definition: "A concealed gutter installed between two sloping roof surfaces, or between a roof slope and a parapet wall. Box gutters discharge water internally through a sump and require regular maintenance." },
  { term: "Canopy", definition: "An overhanging or projecting roof structure, typically installed above entrances, doors, or windows to provide shelter from weather." },
  { term: "Capping", definition: "A covering fixed over the top of a parapet wall, ridge, or roof edge to form a waterproof seal and provide a neat appearance." },
  { term: "Ceiling Batts", definition: "Insulation materials installed within the ceiling space to improve the thermal performance and energy efficiency of a building. Common materials include glasswool, polyester, and rockwool." },
  { term: "Cladding", definition: "The application of one material over another to provide thermal insulation, weather resistance, and improved appearance. In roofing, cladding typically refers to metal sheeting or panels." },
  { term: "Colorbond", definition: "An Australian-made steel roofing and cladding product by BlueScope. Built on a ZINCALUME base for corrosion resistance, it features a baked-on paint finish available in a wide range of colours designed for the Australian climate." },
  { term: "Dormer Window", definition: "A vertical window set into a structure projecting through a sloping roof, usually with its own small roof. Dormers add light and usable space to attic rooms." },
  { term: "Downpipe", definition: "A vertical pipe that carries rainwater from roof gutters down to the ground level, stormwater drain, or rainwater tank." },
  { term: "Drip Edge", definition: "A metal flashing or overhanging component installed along the eaves with an outward-projecting lower edge. It directs dripping water away from the fascia and into the gutter." },
  { term: "Eaves", definition: "The lower edges of a roof that overhang beyond the external walls of a building. Eaves help protect walls from rain and provide shade." },
  { term: "Eaves Flashing", definition: "An additional layer of metal or membrane applied at the eaves to prevent water backup and protect the roof structure from moisture damage." },
  { term: "Expansion Joint", definition: "A structural separation between two building elements designed to allow movement caused by thermal expansion or contraction without damaging the roofing or waterproofing system." },
  { term: "Fall", definition: "The slope or angle of a roof surface or gutter. Correct fall is essential for gutters to ensure water flows towards downpipes and does not pool." },
  { term: "Fascia", definition: "A horizontal board fixed to the lower ends of roof rafters, running along the eave line. The fascia supports the gutter system and gives the roofline a finished appearance." },
  { term: "Fascia Cover", definition: "A protective metal cladding installed over a timber fascia board to prevent weathering, rot, and the need for ongoing painting." },
  { term: "Fasteners", definition: "Mechanical fixings such as screws, nails, bolts, rivets, and clips used to secure roofing materials to battens, purlins, or other structural elements." },
  { term: "Finial", definition: "A decorative pointed ornament installed at the apex of a gable, hip junction, or Dutch gable to give the roofline a distinctive appearance." },
  { term: "Fire Rating", definition: "A classification system that measures a roofing material\u2019s resistance to external fire sources such as bushfire embers. Higher-rated materials offer better protection in fire-prone areas." },
  { term: "Flashing", definition: "Thin sheet metal pieces used to weatherproof joints, edges, and penetrations in a roof system. Flashing is installed around chimneys, vents, skylights, walls, and valleys to prevent leaks." },
  { term: "Gable", definition: "The triangular section of wall at the end of a pitched roof, extending from the eaves line up to the ridge or apex." },
  { term: "Gutter", definition: "A shallow channel, usually made from sheet metal, installed along the lower edge of a roof to collect and convey rainwater to downpipes." },
  { term: "Gutter Guard", definition: "A mesh or perforated barrier installed over gutters to prevent leaves, twigs, and debris from entering and blocking the gutter system. Also known as leaf screen or leaf guard." },
  { term: "Gutter Refall", definition: "The process of adjusting or correcting the slope of an existing gutter to restore proper water drainage. Over time, gutters can sag or shift, causing ponding and overflow." },
  { term: "Hip", definition: "The external angle formed where two sloping roof surfaces meet. A hip runs diagonally from the ridge down to the eaves." },
  { term: "Hipped Roof", definition: "A roof design where all four sides slope downward from the ridge to the eaves. Hipped roofs offer excellent wind resistance and structural strength." },
  { term: "Insulation", definition: "Material installed in the roof space or under roofing to reduce heat transfer between the interior and exterior of a building. Measured by R-value, where a higher number indicates better thermal resistance." },
  { term: "Klip-Lok", definition: "A concealed-fix metal roofing system where panels interlock and clip onto standing seams rather than being screw-fixed through the face. Suitable for low-pitch roofs from 1 degree." },
  { term: "Lead Flashing", definition: "Flashing made from soft, malleable lead sheet. Its flexibility makes it ideal for forming watertight seals around complex roof penetrations and against uneven wall surfaces." },
  { term: "Leaf Screen", definition: "A mesh barrier installed over gutters to prevent debris build-up. Similar to gutter guard, leaf screens reduce maintenance frequency and help maintain proper water flow." },
  { term: "Metal Rescrew", definition: "The process of removing old or loose screws from metal roofing and replacing them with new fasteners. This addresses leaks caused by deteriorated rubber washers and loose panels." },
  { term: "Parapet Wall", definition: "A low wall or railing extending above the roof edge around the perimeter of a building. Parapet walls often conceal box gutters and provide fall protection." },
  { term: "Ponding", definition: "Water that remains sitting on a roof surface or in gutters due to insufficient fall, deflection, or blocked drainage. Prolonged ponding accelerates corrosion and can cause structural damage." },
  { term: "Purlin", definition: "A horizontal structural member that spans between rafters or trusses to support roof sheeting. Purlins can be timber or steel and are spaced according to the roofing material\u2019s span capacity." },
  { term: "Quad Gutter", definition: "A popular Australian gutter profile with a flat front face and curved back. Quad gutters offer high water capacity and a clean, modern appearance on residential and commercial buildings." },
  { term: "Rafter", definition: "A structural beam that runs from the ridge to the eaves, forming part of the roof truss. Rafters carry the weight of the roof covering, battens, and any applied loads such as wind or foot traffic." },
  { term: "Rainwater Head", definition: "A box-shaped metal fitting positioned between a gutter outlet and a downpipe. It collects water from the gutter, provides an overflow point, and directs flow into the downpipe." },
  { term: "Ridge", definition: "The horizontal line at the top of a roof where two opposing slopes meet. The ridge is the highest point of a pitched roof." },
  { term: "Ridge Capping", definition: "Metal or tile covers installed along the ridge line to seal the gap between the two sides of the roof and prevent water, wind, and debris from entering the roof cavity." },
  { term: "Roof Pitch", definition: "The angle or steepness of a roof surface, expressed as degrees or as a ratio of vertical rise to horizontal run. Roof pitch affects material choice, drainage, and wind resistance." },
  { term: "Roof Sarking", definition: "A flexible, water-resistant membrane installed beneath roof tiles or sheeting. Sarking acts as a secondary barrier against wind-driven rain, condensation, and dust entering the roof space." },
  { term: "Roof Truss", definition: "A pre-fabricated triangular framework of timber or steel that supports the roof structure. Trusses distribute the roof load to the external walls and are designed to span large distances without internal support." },
  { term: "Skillion Roof", definition: "A single-slope roof surface that is not attached to another roof surface. Skillion roofs are commonly used for extensions, carports, and modern architectural designs." },
  { term: "Soffit", definition: "The underside of the eaves between the fascia and the external wall. Soffits can be ventilated to allow airflow into the roof cavity and are typically lined with metal, timber, or fibre cement." },
  { term: "Valley", definition: "The internal angle formed where two sloping roof surfaces meet. Valleys channel large volumes of water and require robust flashing to prevent leaks." },
  { term: "Vent", definition: "An opening in the roof that allows air to circulate through the roof cavity, reducing heat build-up and moisture accumulation. Common types include whirlybirds, ridge vents, and eave vents." },
  { term: "Whirlybird", definition: "A wind-driven rotary roof ventilator that extracts hot air and moisture from the roof cavity. Whirlybirds are a cost-effective, energy-free ventilation solution common on Australian homes." },
  { term: "ZINCALUME", definition: "A steel product coated with an alloy of zinc, aluminium, and silicon for superior corrosion resistance. ZINCALUME forms the base layer of Colorbond roofing and is also used as unpainted roofing and walling." },
];

function GlossaryPage() {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? glossaryTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(search.toLowerCase()) ||
          t.definition.toLowerCase().includes(search.toLowerCase())
      )
    : glossaryTerms;

  const letters = Array.from(new Set(filtered.map((t) => t.term[0].toUpperCase()))).sort();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Roofing & Guttering Glossary | ${DEFAULTS.businessName}`}
        description="Glossary of roofing and guttering terms explained in plain English. Understand barge capping, box gutters, Colorbond, flashing, roof pitch and more."
        keywords="roofing glossary, roofing terms, guttering definitions, roof terminology australia, roofing vocabulary"
        ogTitle={`Roofing & Guttering Glossary | ${DEFAULTS.businessName}`}
        ogDescription="Glossary of roofing and guttering terms explained in plain English."
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription="Roofing and guttering glossary for Sydney homeowners."
      />
      <Header />

      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="flex items-center gap-3 mb-2">
            <BookA className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-extrabold">Roofing & Guttering Glossary</h1>
          </div>
          <p className="text-lg opacity-90">
            {glossaryTerms.length} terms explained in plain English
          </p>
        </div>
      </section>

      <section className="py-14 bg-white flex-1">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 max-w-4xl">
          <div className="relative mb-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search terms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-11 pr-4 rounded-lg border border-gray-300 text-base outline-none focus:border-[#179DC2] transition-colors"
            />
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-10" style={{ color: "#999999" }}>
              No terms match your search.
            </p>
          )}

          {letters.map((letter) => {
            const termsForLetter = filtered.filter((t) => t.term[0].toUpperCase() === letter);
            return (
              <div key={letter} className="mb-8">
                <div className="text-2xl font-extrabold text-[#179DC2] mb-4 border-b-2 border-[#179DC2]/20 pb-1">
                  {letter}
                </div>
                <div className="space-y-4">
                  {termsForLetter.map((t) => (
                    <div key={t.term}>
                      <dt className="font-bold text-base">{t.term}</dt>
                      <dd className="text-sm leading-relaxed mt-1" style={{ color: "#666666" }}>
                        {t.definition}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
}

const Page = GlossaryPage;
export const route = {
  path: "/roofing-guttering-definitions-glossary/",
  element: <Page />,
  handle: { scrollToTop: true },
};
export default Page;
