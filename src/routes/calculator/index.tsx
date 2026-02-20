import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import { Calculator, DollarSign, Thermometer, TriangleRight, Palette } from "lucide-react";

const DEFAULTS = {
  baseUrl: "https://sydneyroofingandgutters.com.au",
  businessName: "Sydney Roofing & Gutters",
};

const CALCULATORS = [
  {
    title: "Reroof Cost Calculator",
    href: "/calculator/reroof-cost-calculator/",
    description: "Estimate the cost of reroofing your home based on roof area, material and complexity.",
    icon: DollarSign,
  },
  {
    title: "Roofing Insulation Calculator",
    href: "/calculator/roofing-insulation-calculator/",
    description: "Work out how much insulation you need based on your roof area and preferred R-value.",
    icon: Thermometer,
  },
  {
    title: "Roofing Pitch Calculator",
    href: "/calculator/roofing-pitch-calculator/",
    description: "Calculate your roof pitch from rise and run measurements, or convert between degrees and ratio.",
    icon: TriangleRight,
  },
  {
    title: "Colour Visualiser",
    href: "/calculator/colour-visualiser/",
    description: "Preview Colorbond roof colours on a sample house to help choose the right look for your home.",
    icon: Palette,
  },
];

function CalculatorIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Roofing & Guttering Calculators | ${DEFAULTS.businessName}`}
        description="Free roofing calculators to estimate reroofing costs, insulation needs, roof pitch and colour options for your Sydney home."
        keywords="roofing calculator, reroof cost, roof pitch calculator, insulation calculator, colorbond colour visualiser"
        ogTitle={`Roofing & Guttering Calculators | ${DEFAULTS.businessName}`}
        ogDescription="Free roofing calculators to estimate reroofing costs, insulation needs, roof pitch and colour options."
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription="Free roofing calculators for Sydney homeowners."
      />
      <Header />

      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-extrabold">Roofing & Guttering Calculators</h1>
          </div>
          <p className="text-lg opacity-90">
            Free tools to help you estimate costs and plan your roofing project
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CALCULATORS.map((calc) => {
              const Icon = calc.icon;
              return (
                
                  key={calc.href}
                  href={calc.href}
                  className="bg-white rounded-xl border-2 border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-[#179DC2] transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#179DC2]/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-[#179DC2]" />
                    </div>
                    <h2 className="font-bold text-lg group-hover:text-[#179DC2] transition-colors">{calc.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                    {calc.description}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
            <h2 className="text-xl font-bold text-black">About our roofing calculators</h2>
            <p>
              These free calculators are designed to give Sydney homeowners a starting point when planning roofing projects. They provide estimates based on typical Sydney pricing and standard building practices.
            </p>
            <p>
              For an accurate quote based on a physical inspection of your property, contact our team on 1300 796 024 or request a free quote through our contact page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
}

const Page = CalculatorIndex;
export const route = {
  path: "/calculator/",
  element: <Page />,
  handle: { scrollToTop: true },
};
export default Page;
