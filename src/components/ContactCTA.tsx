import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ArrowRight, Calculator, Calendar, User, MapPin, Mail } from "lucide-react";
import { useState } from "react";

const ContactCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        // Hide success message after 8 seconds
        setTimeout(() => setShowSuccess(false), 8000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error submitting your form. Please call us directly at (02) 4089 4613.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 architectural-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center text-white mb-12">
          <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold architectural-heading mb-4">
            Ready for Professional Roofing Service?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get your free roof inspection today. Our licensed experts will assess your roof 
            and provide a detailed proposal within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Quote Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Free Quote</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Get a detailed, transparent quote with no hidden costs. 
                Includes roof inspection and condition assessment.
              </p>
              <Button variant="hero" size="lg" className="w-full group" asChild>
                <a href="#contact-form">
                  Request Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Consultation Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Book Consultation</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Schedule an on-site roof inspection with our licensed roofers. 
                Discuss your needs and explore roofing solutions.
              </p>
              <Button variant="architectural" size="lg" className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="#contact-form">
                  Schedule Visit
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Today</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Speak directly with our team. 24/7 emergency service 
                available for urgent roofing needs.
              </p>
              <div className="space-y-3">
                <a 
                  href="tel:1300796024" 
                  className="flex items-center justify-center gap-2 text-white hover:text-white/80 transition-colors font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  (02) 4089 4613
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 lg:p-12 shadow-2xl">
            {showSuccess ? (
              // Success Message
              <div className="text-center py-12">
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 mb-6">
                  <div className="flex justify-center mb-4">
                    <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    Thank You! Message Received
                  </h3>
                  <p className="text-lg text-green-700 mb-4">
                    We've received your request and will contact you soon to schedule your free roof inspection and quote.
                  </p>
                  <p className="text-sm text-green-600">
                    One of our roofing experts will be in touch within 24 hours.
                  </p>
                </div>
                <Button 
                  variant="architectural" 
                  size="lg"
                  onClick={() => setShowSuccess(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    Get Your Free Roof Inspection
                  </h3>
                  <p className="text-base text-gray-600">
                    Fill out the form below and we'll contact you within 24 hours to schedule your free roof inspection
                  </p>
                </div>

                <form 
                  name="contact-cta-form" 
                  method="POST" 
                  netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact-cta-form" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-2 text-sm">
                        <User className="inline h-4 w-4 mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-2 text-sm">
                        <Phone className="inline h-4 w-4 mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Field */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-2 text-sm">
                        <Mail className="inline h-4 w-4 mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Address Field */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-2 text-sm">
                        <MapPin className="inline h-4 w-4 mr-2" />
                        Property Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm"
                        placeholder="Enter your property address"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-medium text-gray-700 mb-2 text-sm">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-sm"
                      placeholder="Tell us about your roofing needs (e.g., roof type, specific issues, preferred timeline)..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="xl"
                      variant="hero"
                      className="w-full md:w-auto px-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Request Free Inspection'}
                      {!isSubmitting && <ArrowRight className="h-5 w-5 ml-2" />}
                    </Button>
                  </div>

                  {/* Privacy Notice */}
                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy. 
                    We'll only use your information to contact you about your roofing needs.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Newcastle's Trusted Roofing Experts
            </h3>
            <p className="text-white/90 mb-6">
              Serving Newcastle and the Hunter Region including Merewether, Charlestown, Maitland, 
              and all surrounding areas. Licensed, insured, and available 24/7 for emergency repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:1300796024">
                  Emergency Service 24/7
                </a>
              </Button>
              <Button variant="architectural" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspections">
                  Free Roof Inspection
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;