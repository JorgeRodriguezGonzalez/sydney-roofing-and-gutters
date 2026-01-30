import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, CheckCircle, Star } from "lucide-react";
import teamImage from "@/assets/team-experts.jpg";
import SEOHead from "@/components/SEOHead";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="About Sydney Roofing & Gutters - Expert Roofing Team | 12+ Years Experience"
        description="Learn about Sydney Roofing & Gutters' expert team and 12+ years of roofing excellence. Licensed contractors delivering quality roofing services across Sydney Region since 2012."
        keywords="about sydney roofers, roofing team sydney, licensed roofers, sydney roofing company, professional roofers sydney region"
        ogTitle="About Sydney Roofing & Gutters - Expert Roofing Team"
        ogDescription="Meet Sydney's premier roofing specialists. 12+ years of quality craftsmanship and 1000+ satisfied customers."
        ogImage="/public/images/Sydney-Roofing-and-Gutters.webp"
        schemaType="RoofingContractor"
        location="sydney"
        customName="Sydney Roofing & Gutters"
        customDescription="Sydney's trusted roofing specialists providing professional services since 2012"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              About Sydney Roofing & Gutters
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Sydney's trusted roofing specialists, delivering expert roof repairs, 
              replacements, and installations with 24/7 emergency service since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 leading-relaxed" style={{color: '#666666'}}>
                <p>
                  Founded in 2012 by a team of licensed roofing contractors, Sydney Roofing & Gutters 
                  was established to provide Sydney homeowners with reliable, high-quality roofing 
                  services backed by 24/7 emergency response. We understand that roof problems don't 
                  wait for business hours.
                </p>
                <p>
                  We specialise in protecting homes from Sydney's challenging weather conditions, 
                  using premium materials like Colorbond steel and quality terracotta tiles to ensure 
                  lasting protection and structural integrity.
                </p>
                <p>
                  Over 12 years, we've completed over 1000 roofing projects across Sydney Region, from emergency repairs to complete roof replacements, always 
                  maintaining our commitment to quality craftsmanship and customer satisfaction.
                </p>
              </div>
              <Button className="mt-8" size="lg" asChild>
                <a href="/projects">
                  View Our Projects
                </a>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Sydney Roofing & Gutters professional team of licensed roofing contractors"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
              The principles that guide every project we undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p style={{color: '#666666'}}>
                  We never compromise on quality, using premium Colorbond steel, quality tiles, and proven roofing techniques for lasting protection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p style={{color: '#666666'}}>
                  We work closely with homeowners to understand their needs and provide expert recommendations for the best roofing solution.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reliability</h3>
                <p style={{color: '#666666'}}>
                  24/7 emergency response and transparent communication throughout every project. When you need us, we're there.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p style={{color: '#666666'}}>
                  Honest pricing, clear quotes, and ethical business practices. No hidden fees, no surprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="max-w-2xl mx-auto" style={{color: '#666666'}}>
              The professional advantage in roofing services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Licensed & Insured Roofers</h3>
                  <p style={{color: '#666666'}}>
                    Every project is completed by fully licensed roofing contractors who understand Sydney's building codes and weather requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Comprehensive Service Range</h3>
                  <p style={{color: '#666666'}}>
                    From emergency repairs to complete roof replacements, we handle all aspects of residential and commercial roofing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Premium Materials</h3>
                  <p style={{color: '#666666'}}>
                    We use only premium materials from trusted suppliers - Colorbond steel, quality concrete and terracotta tiles, ensuring durability and longevity.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                  <p style={{color: '#666666'}}>
                    Our roofing team includes specialists with decades of experience in metal roofing, tile installation, and emergency repairs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency Response</h3>
                  <p style={{color: '#666666'}}>
                    Storm damage? Roof leak? We provide immediate emergency response 24 hours a day, 7 days a week across Sydney and Hunter Region.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Warranty & Support</h3>
                  <p style={{color: '#666666'}}>
                    Comprehensive warranties on all installations and repairs, plus ongoing maintenance advice to keep your roof in peak condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-white/90">Roofs Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">12+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/90">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-white/90">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export default AboutUs;