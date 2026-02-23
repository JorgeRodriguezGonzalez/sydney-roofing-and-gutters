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

const NewRoofInstallationPage = () => {
  const types = [
    {
      name: "Residential Installation",
      description: "New roofs for homes and townhouses",
      features: ["Custom design", "Premium materials", "Energy efficient"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: true
    },
    {
      name: "Commercial Installation",
      description: "Large-scale roofing for commercial properties",
      features: ["Industrial materials", "Minimal disruption", "Code compliant"],
      image: "/images/complete-roof-replacement-after.jpg",
      popular: false
    },
    {
      name: "Extension Roofing",
      description: "New roofs for home extensions and additions",
      features: ["Seamless integration", "Matching existing", "Weather-tight"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    },
    {
      name: "Garage & Carport",
      description: "Roofing for garages, carports, and outbuildings",
      features: ["Quick installation", "Cost-effective", "Durable materials"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Custom Design",
      description: "Architectural roofing solutions",
      features: ["Unique designs", "Premium finishes", "Specialist work"],
      image: "/images/roof painting transformation after.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Award, title: "Expert Installation", description: "Certified installers with proven track record" },
    { icon: Star, title: "Premium Materials", description: "Top-quality roofing materials from trusted brands" },
    { icon: Shield, title: "Code Compliant", description: "All work meets Australian building standards" },
    { icon: Clock, title: "Project Management", description: "From permits to completion, we handle everything" },
    { icon: CheckCircle, title: "Warranty Protected", description: "Comprehensive warranties on materials and labor" },
    { icon: DollarSign, title: "On-Time Delivery", description: "Efficient installation within agreed timeframes" }
  ];

  const process = [
    { step: "01", title: "Design Consultation", description: "Discuss your vision and requirements" },
    { step: "02", title: "Material Selection", description: "Choose roofing type, color, and finish" },
    { step: "03", title: "Engineering Plans", description: "Structural engineering and design plans" },
    { step: "04", title: "Council Approval", description: "Submit and obtain building permits" },
    { step: "05", title: "Site Preparation", description: "Prepare work area and safety measures" },
    { step: "06", title: "Frame Inspection", description: "Verify structure is ready for roofing" },
    { step: "07", title: "Professional Installation", description: "Expert installation by licensed team" },
    { step: "08", title: "Final Approval", description: "Council inspection and completion certificate" }
  ];

  const maintenanceTips = [
    { title: "Initial Inspection", description: "Check installation after first year", frequency: "After 1 year" },
    { title: "Regular Maintenance", description: "Annual inspections to maintain warranty", frequency: "Annually" },
    { title: "Gutter Care", description: "Keep new gutters clear and functional", frequency: "Every 6 months" },
    { title: "Document Everything", description: "Keep all warranties and certificates safe", frequency: "Ongoing" }
  ];

  const faqItems = [
    { question: "How long does new roof installation take?", answer: "Residential installations typically take 5-10 days depending on size and complexity. Commercial projects vary based on scope. We provide detailed timelines in our quotes." },
    { question: "What materials do you recommend for Newcastle?", answer: "For Newcastle's coastal climate, we recommend Colorbond steel for durability, or quality concrete tiles for traditional homes. Both offer excellent weather resistance and longevity." },
    { question: "Do you handle council approvals?", answer: "Yes, we manage all council submissions, engineering plans, and building permits. Our team ensures your new roof meets all compliance requirements." },
    { question: "What warranties are provided?", answer: "New installations include manufacturer warranties (typically 25+ years on materials) and our workmanship warranty (10+ years). All terms are clearly documented." },
    { question: "Can you work around our schedule?", answer: "Absolutely. We coordinate with builders, homeowners, and other trades to ensure smooth project delivery. We're flexible and work to minimize disruption." }
  ];

  const costFactors = [
    "Roof size and complexity",
    "Material type and brand",
    "Design specifications",
    "Engineering requirements",
    "Council fees and permits",
    "Site accessibility"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="New Roof Installation Newcastle - Expert Installation Services"
        description="New roof installation services in Newcastle. Residential & commercial. Metal, tile, and Colorbond roofing. Quality guaranteed. Call (02) 4089 4613."
        keywords="new roof installation newcastle, roof installation, metal roof installation, tile roof installation, colorbond roofing, new home roofing"
        ogTitle="New Roof Installation Newcastle - Expert Service"
        ogDescription="Professional new roof installation for residential and commercial properties. Quality materials and expert workmanship."
        ogImage="/images/roof-restoration-project-after.jpg"
        schemaType="Service"
        service="new-roof-installation"
        location="newcastle"
        customName="New Roof Installation Newcastle"
        customDescription="Expert new roof installation services in Newcastle, NSW"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              New Roof Installation Newcastle - Expert Installation Services
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional new roof installation for residential and commercial properties in Newcastle. Expert installation of metal, tile, and Colorbond roofing with quality guarantees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">
                  Get Installation Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/projects">
                  View Our Projects
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
              Why Choose Us for New Roof Installation?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              A specialist team delivering quality new roofing for homes and businesses in Newcastle.
            </p>
          </div>
          
        {/* Content Blocks with Images */}
        <div className="space-y-20 mb-20">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Expert New Roof Installation for Every Project
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Whether you're building a new home, adding an extension, or constructing a commercial property, our new roof installation service delivers quality results on time and on budget. We handle everything from initial design consultation to final council inspection and certification.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Our team works closely with builders, architects, and homeowners to ensure your new roof meets all specifications and complements your property's design. We're experienced with both residential and commercial projects of all sizes across Newcastle and the Hunter Region.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src="/images/complete-roof-replacement-after.jpg"
                alt="New roof installation Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
              <img 
                src="/images/roof-repair-and-restoration-1.jpg"
                alt="Licensed roof installation Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Council Approved & Code Compliant
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                All our new roof installations comply with Australian building codes and local council requirements. We handle the entire approval process, including engineering plans, permits, and inspections, ensuring a smooth and hassle-free experience.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                From material selection to final handover, our project management approach keeps you informed at every stage. We coordinate with all trades, maintain a clean and safe worksite, and complete installations within agreed timeframes.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">New Roof Installation Options</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Flexible installation options across residential and commercial projects.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our New Roof Installation Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A robust process that ensures code compliance and great outcomes.
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">New Roof Installation Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                Your final price depends on materials, design, and engineering requirements. We provide transparent quotes.
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
                <h3 className="text-xl font-bold text-primary mb-4">Budget Planning Guide</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Materials</span><span className="font-semibold">Brand & spec</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Design</span><span className="font-semibold">Complexity & pitch</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Engineering</span><span className="font-semibold">Plans & approvals</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*Final costs depend on scope, access, and council requirements.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Quality Guarantee</h3>
                <p className="text-sm" style={{ color: '#666666' }}>We deliver compliant installations with strong warranties on materials and labor.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep your new roof in top condition with simple ongoing care.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">New Roof Installation FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about new roof installations in Newcastle.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Other services you may need with a new roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Replacement", link: "/roof-replacement", description: "Replace existing roof" },
              { name: "Roof Repairs", link: "/roof-repairs", description: "Repair services" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Pre-build assessments" },
              { name: "Emergency Roof Repairs", link: "/emergency-roof-repairs", description: "24/7 urgent service" }
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
  path: "/new-roof-installation/",
  element: <NewRoofInstallationPage />,
  handle: {
    title: "New Roof Installation Newcastle - Expert Installation Services",
    meta: [
      { name: "description", content: "New roof installation services in Newcastle. Residential & commercial. Metal, tile, and Colorbond roofing. Quality guaranteed. Call (02) 4089 4613." },
      { name: "keywords", content: "new roof installation newcastle, roof installation, metal roof installation, tile roof installation, colorbond roofing, new home roofing" }
    ]
  }
};

export default NewRoofInstallationPage;


