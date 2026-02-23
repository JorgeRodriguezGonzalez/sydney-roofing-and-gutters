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
import FloatingBanner from "@/components/FloatingBanner";
// SEOHead ahora se aplica automáticamente desde route.handle.seo vía RouteMeta en Layout

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <FloatingBanner />
    </div>
  );
};

export const route = {
  path: "/",
  element: <HomePage />,
  handle: {
    // Formato legacy (compatible con RouteMeta)
    title: "Sydney Roofing & Gutters - Professional Roofing Services | 24/7 Emergency",
    meta: [
      { name: "description", content: "Professional roofing services in Newcastle and Hunter Region. Roof repairs, replacement, restoration, and emergency service. Licensed roofers available 24/7." },
      { name: "keywords", content: "roofing newcastle, roof repairs newcastle, roof replacement, emergency roof repairs, newcastle roofers, hunter region roofing" }
    ],
    // Nuevo formato (recomendado) - RouteMeta lo leerá automáticamente
    seo: {
      title: "Sydney Roofing & Gutters - Professional Roofing Services | 24/7 Emergency",
      description: "Professional roofing services in Newcastle and Hunter Region. Roof repairs, replacement, restoration, and emergency service. Licensed roofers available 24/7. Free inspections.",
      keywords: "roofing newcastle, roof repairs newcastle, roof replacement, emergency roof repairs, newcastle roofers, hunter region roofing, roof restoration, licensed roofers nsw",
      ogTitle: "Sydney Roofing & Gutters - Professional Roofing Services 24/7",
      ogDescription: "Expert roofing services across Newcastle and the Hunter Region. Emergency repairs, roof replacement, restoration, and inspections. Licensed & insured.",
      ogImage: "https://sydneyroofingandgutters.com.au/images/roofing-services-newcastle.jpg",
      canonicalUrl: "/",
      schemaType: "RoofingContractor" as const,
      location: "newcastle" as const,
      customName: "Sydney Roofing & Gutters",
      customDescription: "Professional roofing services in Newcastle and Hunter Region with 24/7 emergency response"
    }
  }
};

export default HomePage;
