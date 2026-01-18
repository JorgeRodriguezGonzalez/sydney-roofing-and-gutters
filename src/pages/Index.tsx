import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsSlider from "@/components/BrandsSlider";
import ReviewsSlider from "@/components/ReviewsSlider";
import CTASection from "@/components/CTASection";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsNew from "@/components/TestimonialsNew";
import RoofingTypesGuide from "@/components/RoofingTypesGuide";
import ServiceAreas from "@/components/ServiceAreas";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Driveways Sydney - Professional Driveway Construction Services"
        description="Professional driveway construction services in Sydney. Concrete, brick, paver, and natural stone driveways. Free quotes and expert installation."
        keywords="driveway construction sydney, concrete driveways, brick driveways, paver driveways, natural stone driveways, driveway installation"
        ogTitle="Driveways Sydney - Professional Driveway Construction"
        ogDescription="Transform your property with our professional driveway construction services. Quality materials, expert installation, competitive pricing."
        ogImage="https://drivewayssydney.com.au/images/concrete-driveways.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Driveways Sydney"
        customDescription="Professional driveway construction services in Sydney"
      />
      <Header />
      <Hero />
      <BrandsSlider />
      <ReviewsSlider />
      <Services />
      <CTASection />
      <WhyChooseUs />
      <FeaturedProjects />
      <TestimonialsNew />
      <RoofingTypesGuide />
      <ServiceAreas />
      <ContactCTA />
      <Footer />
      <FloatingBanner />
    </div>
  );
};

export default Index;