import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Calendar, Calculator, AlertCircle } from "lucide-react";

const ContactUsPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Disable submit button during submission
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton?.textContent || 'Submit';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        alert('Form successfully submitted!');
        form.reset();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      // Re-enable submit button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Contact Sydney Roofing & Gutters - 24/7 Emergency Service | Free Quotes"
        description="Contact Sydney Roofing & Gutters for emergency roof repairs and free quotes. Available 24/7 across Newcastle and Hunter Region. Call (02) 4089 4613 now."
        keywords="contact newcastle roofers, emergency roof repairs, free roofing quote, 24/7 roofer newcastle, roof inspection newcastle, hunter region roofing"
        ogTitle="Contact Sydney Roofing & Gutters - 24/7 Emergency Service"
        ogDescription="Need urgent roof repairs? We're available 24/7. Call (02) 4089 4613 for immediate assistance across Newcastle and Hunter Region."
        ogImage="https://sydneyroofingandgutters.com.au/images/emergency-roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Sydney Roofing & Gutters"
        customDescription="Professional roofing services with 24/7 emergency response in Newcastle and Hunter Region"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Contact Sydney Roofing & Gutters
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Need roof repairs or a free inspection? Contact Newcastle's trusted roofing 
              specialists available 24/7 for emergencies across Newcastle and Hunter Region.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us - 24/7 Available</h3>
                <p className="mb-4" style={{color: '#666666'}}>
                  Emergency roof repairs? Call now for immediate assistance any time, day or night
                </p>
                <a 
                  href="tel:1300796024" 
                  className="text-[#666666] hover:text-[#666666]/80 font-semibold text-lg"
                >
                  (02) 4089 4613
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4" style={{color: '#666666'}}>
                  24/7 emergency response for urgent roof repairs, storm damage, and leaks
                </p>
                <Button variant="outline" asChild>
                  <a href="tel:1300796024">
                    Call Emergency Line
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Free Roof Inspection</h3>
                <p className="mb-4" style={{color: '#666666'}}>
                  Schedule a comprehensive roof inspection with no obligation
                </p>
                <Button variant="outline">
                  Request Inspection
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Get Your Free Roof Inspection</h2>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" name="firstName" />
                    <Input placeholder="Last Name" name="lastName" />
                  </div>
                  <Input placeholder="Email Address" type="email" name="email" />
                  <Input placeholder="Phone Number" type="tel" name="phone" />
                  <Input placeholder="Suburb" name="suburb" />
                  <Textarea 
                    placeholder="Tell us about your roofing needs (repairs, replacement, inspection, emergency, etc.)..." 
                    rows={4}
                    name="message"
                  />
                  <Button type="submit" className="w-full" size="lg">
                    <Calculator className="h-5 w-5 mr-2" />
                    Request Free Inspection
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p style={{color: '#666666'}}>(02) 4089 4613</p>
                        <p className="text-sm" style={{color: '#666666'}}>Available 24/7 for emergencies</p>
                      </div>
                    </div>
                    
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Service Areas</h4>
                        <p style={{color: '#666666'}}>Newcastle & Hunter Region</p>
                        <p className="text-sm" style={{color: '#666666'}}>Newcastle City, Lake Macquarie, Hunter Valley, Port Stephens & more</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Sydney Roofing & Gutters?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>24/7 emergency service available</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>1000+ roofs completed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Fully licensed & insured roofers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Free roof inspections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route = {
  path: "/contact-us/",
  element: <ContactUsPage />,
  handle: {
    title: "Contact Sydney Roofing & Gutters - 24/7 Emergency Service | Free Quotes",
    meta: [
      { name: "description", content: "Contact Sydney Roofing & Gutters for emergency roof repairs and free quotes. Available 24/7 across Newcastle and Hunter Region. Call (02) 4089 4613 now." },
      { name: "keywords", content: "contact newcastle roofers, emergency roof repairs, free roofing quote, 24/7 roofer newcastle, roof inspection newcastle, hunter region roofing" }
    ]
  }
};

export default ContactUsPage;
