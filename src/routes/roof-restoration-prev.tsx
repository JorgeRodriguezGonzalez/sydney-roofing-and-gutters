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

const RoofRestorationPage = () => {
  const types = [
    {
      name: "Complete Restoration",
      description: "Full roof rejuvenation service",
      features: ["Pressure cleaning", "Repairs & repointing", "Painting & sealing"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: true
    },
    {
      name: "Roof Cleaning",
      description: "High-pressure cleaning removes dirt and moss",
      features: ["Pressure washing", "Moss removal", "Gutter cleaning"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Roof Painting",
      description: "Premium roof coatings for protection and beauty",
      features: ["UV protection", "Weather resistant", "Color refresh"],
      image: "/images/roof painting transformation after.jpg",
      popular: false
    },
    {
      name: "Roof Sealing",
      description: "Waterproof membrane application",
      features: ["Leak prevention", "Extended protection", "Energy efficient"],
      image: "/images/emergency-roof-repairs-before.jpg",
      popular: false
    },
    {
      name: "Re-pointing & Re-bedding",
      description: "Restore ridge caps and tile bedding",
      features: ["Cement mortar work", "Ridge cap repairs", "Tile stabilization"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Clock, title: "Extend Roof Life", description: "Add 10-15 years to your roof's lifespan" },
    { icon: DollarSign, title: "Cost-Effective", description: "Save thousands compared to full replacement" },
    { icon: Star, title: "Restore Appearance", description: "Make your old roof look brand new again" },
    { icon: Award, title: "Increase Home Value", description: "Boost property value and curb appeal" },
    { icon: Shield, title: "Weather Protection", description: "Enhanced waterproofing and weather resistance" },
    { icon: CheckCircle, title: "Energy Efficiency", description: "Reflective coatings reduce cooling costs" }
  ];

  const process = [
    { step: "01", title: "Initial Assessment", description: "Comprehensive inspection of roof condition" },
    { step: "02", title: "Pressure Cleaning", description: "High-pressure wash to remove dirt and moss" },
    { step: "03", title: "Repairs", description: "Fix broken tiles, flashing, and minor damage" },
    { step: "04", title: "Surface Preparation", description: "Prime and prepare surface for coating" },
    { step: "05", title: "Re-pointing", description: "Restore ridge caps with fresh cement mortar" },
    { step: "06", title: "Roof Painting", description: "Apply premium protective roof coating" },
    { step: "07", title: "Membrane Sealing", description: "Waterproof membrane for leak protection" },
    { step: "08", title: "Final Inspection", description: "Quality check and warranty documentation" }
  ];

  const maintenanceTips = [
    { title: "Regular Cleaning", description: "Annual cleaning maintains appearance", frequency: "Annually" },
    { title: "Inspect After Storms", description: "Check for damage after severe weather", frequency: "After storms" },
    { title: "Gutter Maintenance", description: "Clear gutters to prevent water backup", frequency: "Every 6 months" },
    { title: "Re-seal Every 10 Years", description: "Maintain protective coating", frequency: "Every 10 years" }
  ];

  const faqItems = [
    { question: "How long does roof restoration last?", answer: "A professionally restored roof typically lasts 10-15 years before needing attention again. Regular maintenance can extend this even further." },
    { question: "Is restoration better than replacement?", answer: "If your roof structure is sound, restoration is significantly more cost-effective than replacement, saving you thousands while extending your roof's life." },
    { question: "What roof types can be restored?", answer: "We restore all roof types including concrete tiles, terracotta tiles, metal roofing, and Colorbond. Our team will assess if your roof is suitable for restoration." },
    { question: "How long does restoration take?", answer: "Most residential roof restorations are completed within 5-7 days, depending on size and weather conditions. We work efficiently to minimize disruption." },
    { question: "Do you provide warranties?", answer: "Yes, we provide comprehensive warranties on our restoration work, typically 7-10 years for workmanship and up to 15 years for premium coatings." }
  ];

  const costFactors = [
    "Roof size and pitch",
    "Current roof condition",
    "Type of restoration required",
    "Materials and coatings used",
    "Number of repairs needed",
    "Accessibility and height"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Restoration Newcastle - Restore Your Roof to Like New"
        description="Professional roof restoration services in Newcastle. Cleaning, repairs, repainting, and sealing. Extend your roof's life. Call (02) 4089 4613."
        keywords="roof restoration newcastle, roof cleaning, roof painting, roof sealing, roof rejuvenation, restore old roof newcastle"
        ogTitle="Roof Restoration Newcastle - Professional Service"
        ogDescription="Restore your roof to like-new condition. Professional cleaning, repairs, and sealing services in Newcastle."
        ogImage="/images/roof painting transformation after.jpg"
        schemaType="Service"
        service="roof-restoration"
        location="newcastle"
        customName="Roof Restoration Newcastle"
        customDescription="Professional roof restoration services in Newcastle, NSW"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Roof Restoration Newcastle - Restore Your Roof to Like New
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional roof restoration services in Newcastle. Extend your roof's life with expert cleaning, repairs, painting, and sealing across Newcastle and the Hunter Region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:0240894613">
                  Get Restoration Quote
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
              Why Choose Roof Restoration?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              An affordable way to extend your roof's life and dramatically improve its appearance.
            </p>
          </div>
          
        {/* Content Blocks with Images */}
        <div className="space-y-20 mb-20">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Restore Your Roof to Like New Condition
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Roof restoration is a cost-effective alternative to complete replacement that can add 10-15 years to your roof's lifespan. Our comprehensive restoration service includes high-pressure cleaning, repairs to damaged areas, repointing of ridge caps, and application of premium protective coatings.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                The process transforms worn, weathered roofs into fresh, protected surfaces that look as good as new. Restoration not only improves your home's appearance but also enhances energy efficiency and weather protection across Newcastle's varying climate conditions.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src="/images/roof-restoration-project-after.jpg"
                alt="Roof restoration services Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
              <img 
                src="/images/roof painting transformation after.jpg"
                alt="Roof coating and restoration Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Premium Coatings & Long-Lasting Protection
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                We use only the highest quality roof coatings designed specifically for Australian conditions. These advanced membranes provide superior UV protection, waterproofing, and thermal efficiency while being environmentally friendly and safe for rainwater collection.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Our restoration work comes with comprehensive warranties and detailed maintenance recommendations to help you maximize your investment. The result is a roof that not only looks great but performs better and lasts longer.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Restoration Services</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Comprehensive restoration options tailored to your roof type and condition.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Roof Restoration Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A thorough, step-by-step approach to rejuvenate and protect your roof.
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Restoration Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                Several factors affect restoration pricing. We provide clear, upfront quotes without hidden fees.
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
                <h3 className="text-xl font-bold text-primary mb-4">Typical Scope Items</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Cleaning & Prep</span><span className="font-semibold">Pressure clean + prime</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Repairs</span><span className="font-semibold">Tile/flashings fixed</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Coatings</span><span className="font-semibold">Paint + membrane</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*Final costs depend on condition, access, and chosen coatings.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Quality Guarantee</h3>
                <p className="text-sm" style={{ color: '#666666' }}>We use premium coatings and materials, backed by strong warranties.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep your restored roof looking great and performing reliably.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Restoration FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about roof restoration in Newcastle.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Explore more roofing services that complement restoration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Fix damaged areas" },
              { name: "Roof Replacement", link: "/roof-replacement", description: "Complete replacement" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Professional assessment" },
              { name: "Gutter Repairs", link: "/gutter-repairs", description: "Gutter maintenance" }
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
  path: "/roof-restoration/",
  element: <RoofRestorationPage />,
  handle: {
    title: "Roof Restoration Newcastle - Restore Your Roof to Like New",
    meta: [
      { name: "description", content: "Professional roof restoration services in Newcastle. Cleaning, repairs, repainting, and sealing. Extend your roof's life. Call (02) 4089 4613." },
      { name: "keywords", content: "roof restoration newcastle, roof cleaning, roof painting, roof sealing, roof rejuvenation, restore old roof newcastle" }
    ]
  }
};

export default RoofRestorationPage;


