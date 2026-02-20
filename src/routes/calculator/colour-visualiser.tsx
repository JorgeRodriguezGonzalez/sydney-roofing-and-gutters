import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import ColorSwitchWidget from "@/components/ColorSwitchWidget";

const DEFAULTS = {
  baseUrl: "https://sydneyroofingandgutters.com.au",
  businessName: "Sydney Roofing & Gutters",
};

function ColourVisualiser() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Colorbond Colour Visualiser | ${DEFAULTS.businessName}`}
        description="Preview Colorbond roof and gutter colours on a sample house. Choose the perfect colour combination for your Sydney home."
        keywords="colorbond colour visualiser, roof colour picker, colorbond roof colours, gutter colour preview, sydney roofing colours"
        ogTitle={`Colorbond Colour Visualiser | ${DEFAULTS.businessName}`}
        ogDescription="Preview Colorbond roof and gutter colours on a sample house."
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription="Preview Colorbond colours for your Sydney home."
      />
      <Header />

      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <h1 className="text-3xl md:text-4xl font-extrabold">Colorbond Colour Visualiser</h1>
          <p className="text-lg opacity-90 mt-2">
            Preview roof and gutter colour combinations on a sample house
          </p>
        </div>
      </section>

      <ColorSwitchWidget />

      <section className="py-10 bg-white">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 max-w-3xl">
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
            <h2 className="text-xl font-bold text-black">How to use the colour visualiser</h2>
            <p>
              Click any swatch in the Roof Color row to change the roof colour, then pick a Gutter Color to see how different combinations look together. All colours shown are from the official Colorbond range available in Australia.
            </p>
            <p>
              Keep in mind that on-screen colours are approximate. We recommend ordering a free Colorbond colour sample from BlueScope before making your final decision. Our team can also bring physical samples to your on-site inspection.
            </p>
            <p>
              For a free quote on Colorbond roofing or guttering in Sydney, call us on 1300 796 024 or <a href="/contact/" className="text-[#179DC2] underline">request a quote online</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
}

const Page = ColourVisualiser;
export const route = {
  path: "/calculator/colour-visualiser/",
  element: <Page />,
  handle: { scrollToTop: true },
};
export default Page;
