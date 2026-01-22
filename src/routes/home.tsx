import type { Route } from "react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSlider from "@/components/BrandsSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import Testimonials from "@/components/Testimonials";
import ContentBlock from "@/components/ContentBlock";
import ColorSwitchWidget from "@/components/ColorSwitchWidget";
import ContentBlock2 from "@/components/ContentBlock2";
import ContentBlock3 from "@/components/ContentBlock3";
import MapWithForm from "@/components/MapWithForm";
import FaqSection from "@/components/FaqSection";
import Services from "@/components/Services";

// import CTASection from "@/components/CTASection";
// 
// import FeaturedProjects from "@/components/FeaturedProjects";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import TestimonialsNew from "@/components/TestimonialsNew";
// import RoofingTypesGuide from "@/components/RoofingTypesGuide";
// import ServiceAreas from "@/components/ServiceAreas";
// import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
// import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
 

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Newcastle Local Roofers - Professional Roofing Services | 24/7 Emergency"
        description="Professional roofing services in Newcastle and Hunter Region. Roof repairs, replacement, restoration, and emergency service. Licensed roofers available 24/7. Free inspections."
        keywords="roofing newcastle, roof repairs newcastle, roof replacement, emergency roof repairs, newcastle roofers, hunter region roofing, roof restoration, licensed roofers nsw"
        ogTitle="Newcastle Local Roofers - Professional Roofing Services 24/7"
        ogDescription="Expert roofing services across Newcastle and the Hunter Region. Emergency repairs, roof replacement, restoration, and inspections. Licensed & insured."
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Newcastle Local Roofers"
        customDescription="Professional roofing services in Newcastle and Hunter Region with 24/7 emergency response"
      />
      <Header />
      <Hero />
      <BrandsSlider />
      <ReviewsSlider />
      <Testimonials />
      <Services />
      <ContentBlock />
      <ColorSwitchWidget />
      <ContentBlock2 />
      <ContentBlock3 />
      <MapWithForm />
      <FaqSection />

      {/* <CTASection />
      <WhyChooseUs />
      <FeaturedProjects />
      <TestimonialsNew />
      <RoofingTypesGuide />
      <ServiceAreas />
      <ContactCTA /> */}
      <Footer />
      {/* <FloatingBanner /> */}
    </div>
  );
};

export const route = {
  path: "/",
  element: <HomePage />,
  handle: {
    title: "Newcastle Local Roofers - Professional Roofing Services | 24/7 Emergency",
    meta: [
      { name: "description", content: "Professional roofing services in Newcastle and Hunter Region. Roof repairs, replacement, restoration, and emergency service. Licensed roofers available 24/7." },
      { name: "keywords", content: "roofing newcastle, roof repairs newcastle, roof replacement, emergency roof repairs, newcastle roofers, hunter region roofing" }
    ]
  }
};

export default HomePage;
