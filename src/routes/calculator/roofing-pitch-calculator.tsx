import { useState } from "react";
import { CalculatorPageLayout, createCalculatorRoute } from "@/routes/calculator/CalculatorTemplate";

const COMMON_PITCHES = [
  { degrees: 5, use: "Minimum for Colorbond" },
  { degrees: 10, use: "Low slope metal roofing" },
  { degrees: 15, use: "Standard metal roofing" },
  { degrees: 20, use: "Minimum for concrete tiles" },
  { degrees: 22.5, use: "Common for tile roofs" },
  { degrees: 25, use: "Standard tile roof pitch" },
  { degrees: 30, use: "Steep tile or slate roof" },
  { degrees: 35, use: "Steep pitch / Federation style" },
  { degrees: 45, use: "Very steep / cathedral style" },
];

const RELATED = [
  { title: "Reroof Cost Calculator", href: "/calculator/reroof-cost-calculator/", description: "Estimate the cost of reroofing your home based on roof area, material and complexity." },
  { title: "Roofing Insulation Calculator", href: "/calculator/roofing-insulation-calculator/", description: "Estimate how much insulation you need based on your roof area and insulation type." },
  { title: "Colour Visualiser", href: "/calculator/colour-visualiser/", description: "Preview Colorbond roof colours on a sample house to see what suits your home." },
];

function PitchCalculator() {
  const [mode, setMode] = useState<"measure" | "convert">("measure");
  const [rise, setRise] = useState<string>("");
  const [run, setRun] = useState<string>("");
  const [degrees, setDegrees] = useState<string>("");
  const [result, setResult] = useState<{ degrees: number; ratio: string; percentage: number; rakeLength: number | null } | null>(null);

  const calculateFromMeasure = () => {
    const r = parseFloat(rise);
    const ru = parseFloat(run);
    if (!r || !ru || r <= 0 || ru <= 0) return;
    const deg = Math.atan(r / ru) * (180 / Math.PI);
    const pct = (r / ru) * 100;
    const rake = Math.sqrt(r * r + ru * ru);
    setResult({ degrees: Math.round(deg * 10) / 10, ratio: `${(r / ru).toFixed(3)}:1`, percentage: Math.round(pct * 10) / 10, rakeLength: Math.round(rake * 100) / 100 });
  };

  const calculateFromDegrees = () => {
    const deg = parseFloat(degrees);
    if (!deg || deg <= 0 || deg >= 90) return;
    const rad = deg * (Math.PI / 180);
    const ratio = Math.tan(rad);
    const pct = ratio * 100;
    setResult({ degrees: Math.round(deg * 10) / 10, ratio: `${ratio.toFixed(3)}:1`, percentage: Math.round(pct * 10) / 10, rakeLength: null });
  };

  return (
    <CalculatorPageLayout
      config={{
        title: "Roofing Pitch Calculator",
        slug: "roofing-pitch-calculator",
        description: "Calculate your roof pitch from rise and run measurements or convert between degrees, ratio and percentage. Free tool for Sydney homeowners.",
        keywords: "roof pitch calculator, roof angle calculator, roof slope calculator, rise and run calculator",
      }}
      heading="Roofing Pitch Calculator"
      subheading="Calculate roof pitch from measurements or convert between formats"
      relatedCalculators={RELATED}
    >
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-2 mb-6">
          <button type="button" onClick={() => { setMode("measure"); setResult(null); }} className={`flex-1 rounded-md border px-4 py-3 text-sm font-bold transition-colors ${mode === "measure" ? "bg-[#179DC2] text-white border-[#179DC2]" : "bg-white border-gray-300 hover:border-[#179DC2]"}`}>Calculate from measurements</button>
          <button type="button" onClick={() => { setMode("convert"); setResult(null); }} className={`flex-1 rounded-md border px-4 py-3 text-sm font-bold transition-colors ${mode === "convert" ? "bg-[#179DC2] text-white border-[#179DC2]" : "bg-white border-gray-300 hover:border-[#179DC2]"}`}>Convert from degrees</button>
        </div>

        <div className="bg-[#F6F6F6] rounded-xl p-6 md:p-8 space-y-6">
          {mode === "measure" ? (
            <>
              <div>
                <label className="block font-bold mb-2 text-sm">Rise (vertical height in mm or m)</label>
                <input type="number" min="1" placeholder="e.g. 1500" value={rise} onChange={(e) => setRise(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#179DC2]" />
              </div>
              <div>
                <label className="block font-bold mb-2 text-sm">Run (horizontal distance, same unit as rise)</label>
                <input type="number" min="1" placeholder="e.g. 4000" value={run} onChange={(e) => setRun(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#179DC2]" />
              </div>
              <button type="button" onClick={calculateFromMeasure} className="w-full bg-[#179DC2] hover:bg-[#1489ab] text-white font-bold py-3 rounded-md transition-colors text-sm">CALCULATE PITCH</button>
            </>
          ) : (
            <>
              <div>
                <label className="block font-bold mb-2 text-sm">Roof pitch in degrees</label>
                <input type="number" min="1" max="89" step="0.1" placeholder="e.g. 22.5" value={degrees} onChange={(e) => setDegrees(e.target.value)} className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#179DC2]" />
              </div>
              <button type="button" onClick={calculateFromDegrees} className="w-full bg-[#179DC2] hover:bg-[#1489ab] text-white font-bold py-3 rounded-md transition-colors text-sm">CONVERT</button>
            </>
          )}
        </div>

        {result && (
          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6 md:p-8">
            <p className="text-sm font-medium text-green-800 mb-4 text-center">Roof pitch results</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-extrabold text-green-900">{result.degrees}&#176;</p>
                <p className="text-xs" style={{ color: "#666" }}>Degrees</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-green-900">{result.ratio}</p>
                <p className="text-xs" style={{ color: "#666" }}>Ratio (rise:run)</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-green-900">{result.percentage}%</p>
                <p className="text-xs" style={{ color: "#666" }}>Percentage</p>
              </div>
            </div>
            {result.rakeLength && (
              <p className="text-sm text-center mt-4" style={{ color: "#666" }}>Rafter/rake length: <strong>{result.rakeLength}</strong> (same unit as your inputs)</p>
            )}
          </div>
        )}

        <div className="mt-10">
          <h2 className="text-xl font-bold text-black mb-4">Common roof pitches in Australia</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 pr-4 font-bold">Pitch</th>
                  <th className="text-left py-2 font-bold">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_PITCHES.map((p) => (
                  <tr key={p.degrees} className="border-b border-gray-100">
                    <td className="py-2 pr-4">{p.degrees}&#176;</td>
                    <td className="py-2" style={{ color: "#666" }}>{p.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 space-y-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
          <h2 className="text-xl font-bold text-black">How to measure roof pitch</h2>
          <p>Roof pitch is the angle of your roof measured from horizontal. You can calculate it by measuring the vertical rise and horizontal run of your roof. The rise is how high the roof goes up, and the run is how far it goes horizontally from the wall to the ridge.</p>
          <p>Knowing your roof pitch is important when choosing roofing materials. Metal roofing like Colorbond can be installed at pitches as low as 5 degrees, while concrete and terracotta tiles typically need a minimum of 20 degrees to prevent water ingress.</p>
        </div>
      </div>
    </CalculatorPageLayout>
  );
}

const Page = PitchCalculator;
export const route = createCalculatorRoute("/calculator/roofing-pitch-calculator/", Page);
export default Page;
