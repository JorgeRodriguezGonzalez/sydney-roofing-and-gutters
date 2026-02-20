import { useState } from "react";
import { CalculatorPageLayout, createCalculatorRoute } from "@/routes/calculator/CalculatorTemplate";

const INSULATION_TYPES = [
  { id: "glasswool-batts", label: "Glasswool Batts", costPerSqm: 12, rValues: [2.5, 3.5, 4.0, 5.0, 6.0] },
  { id: "polyester-batts", label: "Polyester Batts", costPerSqm: 18, rValues: [2.5, 3.5, 4.0, 5.0] },
  { id: "reflective-foil", label: "Reflective Foil", costPerSqm: 8, rValues: [1.5, 2.0] },
  { id: "spray-foam", label: "Spray Foam", costPerSqm: 35, rValues: [2.5, 3.5, 4.0, 5.0, 6.0] },
  { id: "rockwool-batts", label: "Rockwool Batts", costPerSqm: 15, rValues: [2.5, 3.5, 4.0, 5.0, 6.0] },
];

const RELATED = [
  { title: "Reroof Cost Calculator", href: "/calculator/reroof-cost-calculator/", description: "Estimate the cost of reroofing your home based on roof area, material and complexity." },
  { title: "Roofing Pitch Calculator", href: "/calculator/roofing-pitch-calculator/", description: "Calculate your roof pitch from measurements or convert between degrees and ratio." },
  { title: "Colour Visualiser", href: "/calculator/colour-visualiser/", description: "Preview Colorbond roof colours on a sample house to see what suits your home." },
];

function InsulationCalculator() {
  const [area, setArea] = useState<string>("");
  const [type, setType] = useState<string>("glasswool-batts");
  const [rValue, setRValue] = useState<string>("");
  const [result, setResult] = useState<{ rolls: number; cost: number; rVal: string } | null>(null);

  const selectedType = INSULATION_TYPES.find((t) => t.id === type)!;

  const calculate = () => {
    const sqm = parseFloat(area);
    if (!sqm || sqm <= 0 || !rValue) return;
    const wasteMultiplier = 1.1;
    const totalSqm = Math.ceil(sqm * wasteMultiplier);
    const rollCoverage = 12;
    const rolls = Math.ceil(totalSqm / rollCoverage);
    const rMultiplier = parseFloat(rValue) / 3.5;
    const cost = Math.round(totalSqm * selectedType.costPerSqm * rMultiplier);
    setResult({ rolls, cost, rVal: rValue });
  };

  const fmt = (n: number) => n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });

  return (
    <CalculatorPageLayout
      config={{
        title: "Roofing Insulation Calculator",
        slug: "roofing-insulation-calculator",
        description: "Calculate how much roof insulation you need for your Sydney home. Estimate rolls, coverage and cost by insulation type and R-value.",
        keywords: "roof insulation calculator, insulation cost Sydney, R-value calculator, ceiling insulation estimate",
      }}
      heading="Roofing Insulation Calculator"
      subheading="Estimate insulation quantity and cost for your roof"
      relatedCalculators={RELATED}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#F6F6F6] rounded-xl p-6 md:p-8 space-y-6">
          <div>
            <label className="block font-bold mb-2 text-sm">Ceiling area to insulate (m&#178;)</label>
            <input type="number" min="1" placeholder="e.g. 150" value={area} onChange={(e) => setArea(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#179DC2]" />
            <p className="text-xs mt-1" style={{ color: "#999" }}>This is your ceiling area, not roof area. 10% waste is added automatically.</p>
          </div>
          <div>
            <label className="block font-bold mb-2 text-sm">Insulation type</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {INSULATION_TYPES.map((t) => (
                <button key={t.id} type="button" onClick={() => { setType(t.id); setRValue(""); }} className={`rounded-md border px-3 py-2 text-sm transition-colors ${type === t.id ? "bg-[#179DC2] text-white border-[#179DC2]" : "bg-white border-gray-300 hover:border-[#179DC2]"}`}>{t.label}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-bold mb-2 text-sm">R-value</label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {selectedType.rValues.map((r) => (
                <button key={r} type="button" onClick={() => setRValue(String(r))} className={`rounded-md border px-3 py-2 text-sm transition-colors ${rValue === String(r) ? "bg-[#179DC2] text-white border-[#179DC2]" : "bg-white border-gray-300 hover:border-[#179DC2]"}`}>R{r}</button>
              ))}
            </div>
            <p className="text-xs mt-1" style={{ color: "#999" }}>NCC recommends minimum R5.0 for ceilings in Sydney (Climate Zone 6).</p>
          </div>
          <button type="button" onClick={calculate} className="w-full bg-[#179DC2] hover:bg-[#1489ab] text-white font-bold py-3 rounded-md transition-colors text-sm">CALCULATE ESTIMATE</button>
        </div>

        {result && (
          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8 text-center">
            <p className="text-sm font-medium text-green-800 mb-2">Estimated insulation requirements (R{result.rVal})</p>
            <p className="text-3xl md:text-4xl font-extrabold text-green-900">{result.rolls} rolls</p>
            <p className="text-lg font-bold text-green-800 mt-1">Approx. material cost: {fmt(result.cost)}</p>
            <p className="text-xs mt-3" style={{ color: "#666" }}>Based on standard 12m&#178; rolls with 10% waste allowance. Installation labour is additional.</p>
          </div>
        )}

        <div className="mt-10 space-y-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
          <h2 className="text-xl font-bold text-black">How much roof insulation do I need?</h2>
          <p>The amount of insulation you need depends on your ceiling area and the R-value you choose. Higher R-values provide better thermal performance but cost more and require thicker batts.</p>
          <p>Under the National Construction Code, new homes and renovations in Sydney (Climate Zone 6) require a minimum ceiling insulation of R5.0 for downward heat flow. Upgrading to R6.0 provides better comfort and energy savings over the life of the insulation.</p>
          <p>Glasswool batts are the most common and affordable option. Polyester batts are non-irritant and suitable for DIY installation. Spray foam provides superior coverage but costs more and requires professional installation.</p>
        </div>
      </div>
    </CalculatorPageLayout>
  );
}

const Page = InsulationCalculator;
export const route = createCalculatorRoute("/calculator/roofing-insulation-calculator/", Page);
export default Page;
