import { useState } from "react";
import { CalculatorPageLayout, createCalculatorRoute } from "@/routes/calculator/CalculatorTemplate";

const COLOURS = [
  { id: "monument", name: "Monument", hex: "#2D3134", category: "dark" },
  { id: "woodland-grey", name: "Woodland Grey", hex: "#4C5249", category: "dark" },
  { id: "basalt", name: "Basalt", hex: "#6B6E6A", category: "dark" },
  { id: "ironstone", name: "Ironstone", hex: "#3F3229", category: "dark" },
  { id: "night-sky", name: "Night Sky", hex: "#262C37", category: "dark" },
  { id: "manor-red", name: "Manor Red", hex: "#6B2725", category: "classic" },
  { id: "cottage-green", name: "Cottage Green", hex: "#3D5244", category: "classic" },
  { id: "deep-ocean", name: "Deep Ocean", hex: "#2A4555", category: "classic" },
  { id: "headland", name: "Headland", hex: "#5B5B52", category: "classic" },
  { id: "pale-eucalypt", name: "Pale Eucalypt", hex: "#6D7C5E", category: "classic" },
  { id: "windspray", name: "Windspray", hex: "#8C9491", category: "light" },
  { id: "shale-grey", name: "Shale Grey", hex: "#B0B4AE", category: "light" },
  { id: "surfmist", name: "Surfmist", hex: "#D5D1C5", category: "light" },
  { id: "classic-cream", name: "Classic Cream", hex: "#D4C9A8", category: "light" },
  { id: "paperbark", name: "Paperbark", hex: "#C3B9A3", category: "light" },
  { id: "dune", name: "Dune", hex: "#A89E8E", category: "light" },
  { id: "jasper", name: "Jasper", hex: "#6C5D4E", category: "classic" },
  { id: "terrain", name: "Terrain", hex: "#6C6156", category: "classic" },
  { id: "cove", name: "Cove", hex: "#5C6B6E", category: "classic" },
  { id: "matt-basalt", name: "Matt Basalt", hex: "#636661", category: "matt" },
  { id: "matt-monument", name: "Matt Monument", hex: "#33373A", category: "matt" },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "dark", label: "Dark" },
  { id: "classic", label: "Classic" },
  { id: "light", label: "Light" },
  { id: "matt", label: "Matt" },
];

const WALL_OPTIONS = [
  { hex: "#F5F0E8", label: "Cream" },
  { hex: "#FFFFFF", label: "White" },
  { hex: "#E8E4DD", label: "Warm Grey" },
  { hex: "#D4C9A8", label: "Sandstone" },
  { hex: "#C4B8A0", label: "Tan" },
  { hex: "#8B8178", label: "Dark Stone" },
];

const RELATED = [
  { title: "Reroof Cost Calculator", href: "/calculator/reroof-cost-calculator/", description: "Estimate the cost of reroofing your home based on roof area, material and complexity." },
  { title: "Roofing Insulation Calculator", href: "/calculator/roofing-insulation-calculator/", description: "Estimate how much insulation you need based on your roof area and insulation type." },
  { title: "Roofing Pitch Calculator", href: "/calculator/roofing-pitch-calculator/", description: "Calculate your roof pitch from measurements or convert between degrees and ratio." },
];

function ColourVisualiser() {
  const [selected, setSelected] = useState<string>("monument");
  const [category, setCategory] = useState<string>("all");
  const [wallColour, setWallColour] = useState<string>("#F5F0E8");

  const filteredColours = category === "all" ? COLOURS : COLOURS.filter((c) => c.category === category);
  const activeColour = COLOURS.find((c) => c.id === selected)!;

  return (
    <CalculatorPageLayout
      config={{
        title: "Colorbond Colour Visualiser",
        slug: "colour-visualiser",
        description: "Preview Colorbond roof colours on a sample house. Compare dark, classic and light tones to find the right colour for your Sydney home.",
        keywords: "colorbond colour visualiser, roof colour picker, colorbond colours, roof colour preview",
      }}
      heading="Colorbond Colour Visualiser"
      subheading="Preview how different Colorbond colours look on a house"
      relatedCalculators={RELATED}
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden border-2 border-gray-200 mb-8">
          <svg viewBox="0 0 800 500" className="w-full" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="800" height="500" fill="#E8F4FD" />
            <rect x="0" y="400" width="800" height="100" fill="#8DB87C" />
            <rect x="150" y="220" width="500" height="180" fill={wallColour} stroke="#999" strokeWidth="1" />
            <polygon points="100,220 400,80 700,220" fill={activeColour.hex} stroke="#555" strokeWidth="1" />
            <rect x="100" y="218" width="600" height="6" fill={activeColour.hex} stroke="#555" strokeWidth="0.5" rx="1" />
            <rect x="360" y="290" width="80" height="110" fill="#6B4226" rx="2" />
            <circle cx="425" cy="350" r="4" fill="#C4A035" />
            <rect x="200" y="270" width="100" height="80" fill="#A8D4F0" stroke="#888" strokeWidth="1" rx="2" />
            <line x1="250" y1="270" x2="250" y2="350" stroke="#888" strokeWidth="1" />
            <line x1="200" y1="310" x2="300" y2="310" stroke="#888" strokeWidth="1" />
            <rect x="500" y="270" width="100" height="80" fill="#A8D4F0" stroke="#888" strokeWidth="1" rx="2" />
            <line x1="550" y1="270" x2="550" y2="350" stroke="#888" strokeWidth="1" />
            <line x1="500" y1="310" x2="600" y2="310" stroke="#888" strokeWidth="1" />
            <rect x="520" y="100" width="40" height="80" fill={wallColour} stroke="#999" strokeWidth="1" />
            <rect x="310" y="400" width="180" height="100" fill="#C8C0B4" />
            <circle cx="80" cy="320" r="50" fill="#5C8A4D" />
            <rect x="75" y="350" width="10" height="50" fill="#6B4226" />
            <circle cx="740" cy="300" r="60" fill="#4A7A3C" />
            <rect x="735" y="340" width="10" height="60" fill="#6B4226" />
          </svg>
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300" style={{ backgroundColor: activeColour.hex }} />
              <div>
                <p className="font-bold text-sm">{activeColour.name}</p>
                <p className="text-xs" style={{ color: "#999" }}>{activeColour.hex}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-bold mb-2 text-sm">Wall colour</label>
          <div className="flex gap-2">
            {WALL_OPTIONS.map((w) => (
              <button key={w.hex} type="button" onClick={() => setWallColour(w.hex)} className={`w-10 h-10 rounded-full border-2 transition-all ${wallColour === w.hex ? "border-[#179DC2] scale-110" : "border-gray-300"}`} style={{ backgroundColor: w.hex }} title={w.label} />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-sm">Filter colours</label>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button key={cat.id} type="button" onClick={() => setCategory(cat.id)} className={`rounded-md border px-4 py-2 text-sm transition-colors ${category === cat.id ? "bg-[#179DC2] text-white border-[#179DC2]" : "bg-white border-gray-300 hover:border-[#179DC2]"}`}>{cat.label}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {filteredColours.map((c) => (
            <button key={c.id} type="button" onClick={() => setSelected(c.id)} className={`rounded-lg p-2 text-center transition-all ${selected === c.id ? "ring-2 ring-[#179DC2] ring-offset-2" : "hover:ring-1 hover:ring-gray-300"}`}>
              <div className="w-full aspect-square rounded-md border border-gray-200 mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-xs font-medium leading-tight">{c.name}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
          <h2 className="text-xl font-bold text-black">Choosing the right Colorbond roof colour</h2>
          <p>The colour of your roof affects the overall look of your home and can influence energy efficiency. Lighter colours like Surfmist and Shale Grey reflect more heat, keeping your home cooler in summer. Darker colours like Monument and Woodland Grey create a dramatic, modern look but absorb more heat.</p>
          <p>When choosing a colour, consider your wall colour, the style of your home, your neighbourhood, and whether your property is subject to any heritage or council colour restrictions. Our team can bring physical colour samples to your property to help you decide.</p>
        </div>
      </div>
    </CalculatorPageLayout>
  );
}

const Page = ColourVisualiser;
export const route = createCalculatorRoute("/calculator/colour-visualiser/", Page);
export default Page;
