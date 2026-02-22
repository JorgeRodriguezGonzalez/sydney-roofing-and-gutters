import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import Testimonials from "@/components/Testimonials";

const DEFAULTS = {
  businessName: "Sydney Roofing & Gutters",
};

function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Customer Testimonials | ${DEFAULTS.businessName}`}
        description="Read what our customers say about Sydney Roofing & Gutters. Real reviews from Sydney homeowners about our roofing and guttering services."
        keywords="sydney roofing reviews, roofing testimonials, guttering reviews sydney, customer feedback roofer"
        ogTitle={`Customer Testimonials | ${DEFAULTS.businessName}`}
        ogDescription="Real reviews from Sydney homeowners about our roofing and guttering services."
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription="Customer testimonials for Sydney Roofing & Gutters."
      />
      <Header />

      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <h1 className="text-3xl md:text-4xl font-extrabold">Customer Testimonials</h1>
          <p className="text-lg opacity-90 mt-2">
            What Sydney homeowners say about our work
          </p>
        </div>
      </section>

      <Testimonials />

      <Footer />
      <FloatingBanner />
    </div>
  );
}

const Page = TestimonialsPage;
export const route = {
  path: "/testimonials/",
  element: <Page />,
  handle: { scrollToTop: true },
};
export default Page;
