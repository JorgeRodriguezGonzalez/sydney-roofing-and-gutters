import { type Route } from "react-router";
import Header from "@/components/Header";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import ServiceAreas from "@/components/ServiceAreas";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Users } from "lucide-react";

const RoofReplacementPage = () => {
  const types = [
    {
      name: "Metal Roof Replacement",
      description: "Durable Colorbond and steel roofing solutions",
      features: ["Long-lasting durability", "Weather resistant", "Modern aesthetic"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: true
    },
    {
      name: "Tile Roof Replacement",
      description: "Premium concrete and terracotta tile roofing",
      features: ["Classic appearance", "Energy efficient", "Fire resistant"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Colorbond Replacement",
      description: "Australia's most trusted roofing brand",
      features: ["25+ year warranty", "Fade resistant", "Wide color range"],
      image: "/images/complete-roof-replacement-after.jpg",
      popular: false
    },
    {
      name: "Complete Re-Roof",
      description: "Full tear-off and replacement service",
      features: ["Remove old roof", "New installation", "Waste disposal"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    },
    {
      name: "Roof Upgrade",
      description: "Upgrade to premium materials and modern design",
      features: ["Increase home value", "Better insulation", "Improved aesthetics"],
      image: "/images/roof painting transformation after.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Star, title: "Quality Materials", description: "Premium roofing materials from trusted Australian suppliers" },
    { icon: Award, title: "Expert Installation", description: "Licensed roofers with decades of combined experience" },
    { icon: Shield, title: "Comprehensive Warranty", description: "Long-term warranties on materials and workmanship" },
    { icon: DollarSign, title: "Competitive Pricing", description: "Transparent quotes with no hidden fees or surprises" },
    { icon: Clock, title: "Minimal Disruption", description: "Efficient installation process with respect for your property" },
    { icon: CheckCircle, title: "All Roof Types", description: "Metal, tile, Colorbond, and all roofing materials" }
  ];

  const process = [
    { step: "01", title: "Free Consultation", description: "Discuss your needs and explore material options" },
    { step: "02", title: "Roof Assessment", description: "Detailed inspection of existing roof condition" },
    { step: "03", title: "Material Selection", description: "Choose from premium roofing materials and colors" },
    { step: "04", title: "Detailed Quote", description: "Transparent pricing with no hidden costs" },
    { step: "05", title: "Council Approval", description: "Handle all permits and compliance requirements" },
    { step: "06", title: "Old Roof Removal", description: "Safe removal and disposal of existing roof" },
    { step: "07", title: "Expert Installation", description: "Professional installation by licensed roofers" },
    { step: "08", title: "Final Inspection", description: "Quality check and comprehensive warranty provided" }
  ];

  const maintenanceTips = [
    { title: "Annual Inspections", description: "Professional checks to maintain warranty", frequency: "Annually" },
    { title: "Gutter Maintenance", description: "Keep gutters clear for proper drainage", frequency: "Every 6 months" },
    { title: "Trim Trees", description: "Prevent branch damage and debris buildup", frequency: "As needed" },
    { title: "Address Issues Early", description: "Fix small problems before they escalate", frequency: "As needed" }
  ];

  const faqItems = [
    { question: "How long does roof replacement take?", answer: "Most residential roof replacements are completed within 3-7 days, depending on size and complexity. We work efficiently to minimize disruption to your home." },
    { question: "What roof materials do you recommend?", answer: "We recommend Colorbond steel for durability and modern homes, concrete tiles for traditional styles, and terracotta for heritage properties. Our team will help you choose the best option for your needs and budget." },
    { question: "Do you handle council approvals?", answer: "Yes, we manage all council permits and compliance requirements. Our team ensures your roof replacement meets all local building codes and regulations." },
    { question: "What warranty do you provide?", answer: "We offer comprehensive warranties covering both materials (typically 25+ years) and our workmanship (10+ years). All warranty terms are clearly detailed in your quote." },
    { question: "Can you match my existing roof?", answer: "Absolutely. We can source materials to match your current roof or help you choose a complementary upgrade. Our team ensures seamless integration with your property's aesthetic." }
  ];

  const costFactors = [
    "Roof size and complexity",
    "Material type and quality",
    "Old roof removal and disposal",
    "Height and accessibility",
    "Structural repairs needed",
    "Council permits and fees"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Replacement Newcastle - Complete Roof Replacement Services"
        description="Complete roof replacement services in Newcastle. Quality materials, expert installation, competitive pricing. Free quotes. Call (02) 4089 4613."
        keywords="roof replacement newcastle, new roof installation, complete roof replacement, roof upgrade, metal roofing, tile roofing newcastle"
        ogTitle="Roof Replacement Newcastle - Quality Installation"
        ogDescription="Transform your property with our professional roof replacement services. Quality materials and expert installation."
        ogImage="/images/complete-roof-replacement-after.jpg"
        schemaType="Service"
        service="roof-replacement"
        location="newcastle"
        customName="Roof Replacement Newcastle"
        customDescription="Complete roof replacement services in Newcastle, NSW"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Roof Replacement Newcastle - Complete Replacement Services
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional roof replacement services in Newcastle. Transform your property with quality materials, expert installation, and competitive pricing across Newcastle and the Hunter Region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">
                  Get Replacement Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspections">
                  Free Roof Assessment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Why Choose Us for Roof Replacement?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              Trusted experts delivering quality roof replacements across Newcastle and the Hunter Region.
            </p>
          </div>
          
        {/* Content Blocks with Images */}
        <div className="space-y-20 mb-20">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Complete Roof Replacement Solutions
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                When your roof reaches the end of its lifespan or has sustained significant damage, a complete replacement is often the most cost-effective long-term solution. Our expert team handles every aspect of roof replacement, from removing your old roof to installing premium quality materials that will protect your home for decades to come.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                We work with all major roofing materials including Colorbond steel, concrete and terracotta tiles, ensuring you get the perfect match for your home's style and Newcastle's climate. Our comprehensive service includes council approvals, professional installation, and thorough site cleanup.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src="/images/complete-roof-replacement-after.jpg"
                alt="Complete roof replacement service Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
              <img 
                src="/images/roof-restoration-project-after.jpg"
                alt="Professional roof installation Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Quality Materials & Expert Installation
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Your new roof is a major investment, which is why we only use premium materials from trusted Australian manufacturers. Each roof replacement comes with comprehensive warranties covering both materials and workmanship, giving you complete peace of mind.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Our licensed roofing contractors follow strict quality standards and safety protocols throughout the installation process. We minimize disruption to your daily life while delivering a roof that enhances your property's value and protection.
              </p>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon as any;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Replacement Options</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Choose from premium materials and replacement options to suit your property.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">
                {type.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>
                )}
                <div className="aspect-video relative overflow-hidden">
                  <img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary architectural-heading mb-2">{type.name}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-center text-sm" style={{ color: '#666666' }}>
                        <div className="w-1 h-1 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Roof Replacement Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A proven end-to-end process for safe, efficient, and high-quality replacement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, index) => (
              <Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{p.step}</div>
                <h3 className="font-semibold text-primary mb-3 leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{p.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Replacement Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                Understanding the factors that influence your roof replacement investment helps you plan with confidence.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-primary">Factors Affecting Cost:</h3>
                {costFactors.map((factor, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{factor}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="architectural" asChild>
                <a href="/contact-us">
                  Get Your Free Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Average Cost Guide</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Small Homes</span><span className="font-semibold">Lower range</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Standard Homes</span><span className="font-semibold">Mid range</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Large/Complex</span><span className="font-semibold">Higher range</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*Final costs depend on materials, access, and scope.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Transparent Quotes</h3>
                <p className="text-sm" style={{ color: '#666666' }}>Detailed quotes with no hidden fees. We'll explain every line item clearly.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Maintenance Tips</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep your new roof performing at its best with proactive care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceTips.map((tip, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3>
                    <Badge variant="outline" className="text-xs">{tip.frequency}</Badge>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Replacement FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about roof replacement in Newcastle.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Explore related roofing solutions for your property.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Expert repair services" },
              { name: "Roof Restoration", link: "/roof-restoration", description: "Restore and rejuvenate" },
              { name: "New Roof Installation", link: "/new-roof-installation", description: "New builds and extensions" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Professional assessments" }
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#666666' }}>{service.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={service.link}>
                      Learn More
                      <ArrowRight className="h-3 w-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route: Route = {
  path: "/roof-replacement/",
  element: <RoofReplacementPage />,
  handle: {
    title: "Roof Replacement Newcastle - Complete Roof Replacement Services",
    meta: [
      { name: "description", content: "Complete roof replacement services in Newcastle. Quality materials, expert installation, competitive pricing. Free quotes. Call (02) 4089 4613." },
      { name: "keywords", content: "roof replacement newcastle, new roof installation, complete roof replacement, roof upgrade, metal roofing, tile roofing newcastle" }
    ]
  }
};

export default RoofReplacementPage;


