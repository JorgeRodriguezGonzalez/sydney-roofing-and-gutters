import { useState } from "react";
import { CalculatorPageLayout, createCalculatorRoute } from "@/routes/calculator/CalculatorTemplate";

const MATERIALS = [
  { id: "colorbond", label: "Colorbond Steel", minPerSqm: 80, maxPerSqm: 120 },
  { id: "zincalume", label: "Zincalume", minPerSqm: 65, maxPerSqm: 95 },
  { id: "concrete-tiles", label: "Concrete Tiles", minPerSqm: 50, maxPerSqm: 80 },
  { id: "terracotta-tiles", label: "Terracotta Tiles", minPerSqm: 80, maxPerSqm: 130 },
  { id: "slate", label: "Slate", minPerSqm: 150, maxPerSqm: 250 },
  { id: "polycarbonate", label: "Polycarbonate", minPerSqm: 45, maxPerSqm: 75 },
];

const STOREYS = [
  { id: "1", label: "Single storey", multiplier: 1.0 },
  { id: "2", label: "Two storey", multiplier: 1.15 },
  { id: "3", label: "Three+ storey", multiplier: 1.3 },
];

const COMPLEXITY = [
  { id: "simple", label: "Simple (few hips/valleys)", multiplier: 1.0 },
  { id: "moderate", label: "Moderate", multiplier: 1.1 },
  { id: "complex", label: "Complex (many hips, valleys, penetrations)", multiplier: 1.25 },
];

const RELATED = [
  { title: "Roofing Insulation Calculator", href: "/calculator/roofing-insulation-calculator/", description: "Estimate how much insulation you need based on your roof area and insulation type." },
  { title: "Roofing Pitch Calculator", href: "/calculator/roofing-pitch-calculator/", description: "Calculate your roof pitch from measurements or convert between degrees and ratio." },
  { title: "Colour Visualiser", href: "/calculator/colour-visualiser/", description: "Preview Colorbond roof colours on a sample house to see what suits your home." },
];

function ReroofCalculator() {
  const [area, setArea] = useState<string>("");
  const [material, setMaterial] = useState<string>("colorbond");
  const [storeys, setStoreys] = useState<string>("1");
  const [complexity, setComplexity] = useState<string>("simple");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const calculate = () => {
    const sqm = parseFloat(area);
    if (!sqm || sqm <= 0) return;

    const mat = MATERIALS.find((m) => m.id === material)!;
    const stor = STOREYS.find((s) => s.id === storeys)!;
    const comp = COMPLEXITY.find((c) => c.id === complexity)!;

    const min = Math.round(sqm * mat.minPerSqm * stor.multiplier * comp.multiplier);
    const max = Math.round(sqm * mat.maxPerSqm * stor.multiplier * comp.multiplier);
    setResult({ min, max });
  };

  const fmt = (n: number) => n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });

  return (
    <CalculatorPageLayout
      config={{
        title: "Reroof Cost Calculator",
        slug: "reroof-cost-calculator",
        description: "Estimate the cost of reroofing your Sydney home. Enter your roof area, material and complexity for an instant price range.",
        keywords: "reroof cost calculator, reroofing cost Sydney, roof replacement cost, new roof price estimate",
      }}
      heading="Reroof Cost Calculator"
      subheading="Get an instant estimate for reroofing your Sydney home"
      relatedCalculators={RELATED}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#F6F6F6] rounded-xl p-6 md:p-8 space-y-6">
          <div>
            <label className="block font-bold mb-2 text-sm">Roof area (m&#178;)</label>
            <input
              type="number"
              min="1"
              placeholder="e.g. 180"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#179DC2]"
            />
            <p className="text-xs mt-1" style={{ color: "#999" }}>Average Sydney home is 150 - 250 m&#178;</p>
          </div>

          <div>
            <label className="block font-bold mb-2 text-sm">Roofing material</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {MATERIALS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMaterial(m.id)}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                    material === m.id
                      ? "bg-[#179DC2] text-white border-[#179DC2]"
                      : "bg-white border-gray-300 hover:border-[#179DC2]"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold mb-2 text-sm">Building height</label>
            <div className="grid grid-cols-3 gap-2">
              {STOREYS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStoreys(s.id)}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                    storeys === s.id
                      ? "bg-[#179DC2] text-white border-[#179DC2]"
                      : "bg-white border-gray-300 hover:border-[#179DC2]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold mb-2 text-sm">Roof complexity</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {COMPLEXITY.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setComplexity(c.id)}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                    complexity === c.id
                      ? "bg-[#179DC2] text-white border-[#179DC2]"
                      : "bg-white border-gray-300 hover:border-[#179DC2]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={calculate}
            className="w-full bg-[#179DC2] hover:bg-[#1489ab] text-white font-bold py-3 rounded-md transition-colors text-sm"
          >
            CALCULATE ESTIMATE
          </button>
        </div>

        {result && (
          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8 text-center">
            <p className="text-sm font-medium text-green-800 mb-2">Estimated reroofing cost</p>
            <p className="text-3xl md:text-4xl font-extrabold text-green-900">
              {fmt(result.min)} &ndash; {fmt(result.max)}
            </p>
            <p className="text-xs mt-3" style={{ color: "#666" }}>
              This is a guide only. Actual costs vary based on access, removal of existing materials, structural repairs and site conditions. Contact us for an accurate quote.
            </p>
          </div>
        )}

        <div className="mt-10 space-y-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
          <h2 className="text-xl font-bold text-black">How much does it cost to reroof a house in Sydney?</h2>
          <p>
            The cost of reroofing a home in Sydney depends on the roof area, the material you choose, the height and complexity of the roof, and the condition of the existing structure underneath. Most residential reroofing projects in Sydney fall between $10,000 and $40,000.
          </p>
          <p>
            Colorbond steel is the most popular choice for Sydney homes due to its durability, colour range and suitability for Australian conditions. Concrete tiles are a more affordable option, while terracotta and slate sit at the premium end.
          </p>
          <p>
            Additional costs may include scaffolding for multi-storey buildings, removal and disposal of old roofing materials, replacement of damaged battens or sarking, and new flashings and ridge capping. Our team provides detailed quotes that cover all of these items so there are no surprises.
          </p>
        </div>
      </div>
    </CalculatorPageLayout>
  );
}

const Page = ReroofCalculator;
export const route = createCalculatorRoute("/calculator/reroof-cost-calculator/", Page);
export default Page;
