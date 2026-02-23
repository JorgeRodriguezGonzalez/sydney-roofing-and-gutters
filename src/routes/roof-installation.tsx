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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, FileCheck, Building2 } from "lucide-react";

const RoofInstallationPage = () => {
  const types = [
    { name: "Residential Installation", description: "New roof installation for homes and duplexes.", features: ["Premium materials", "Integration with insulation", "Clean finish"], image: "/images/roof-restoration-project-after.jpg", popular: true },
    { name: "Commercial Installation", description: "Roofing for warehouses, shops and offices with planned logistics.", features: ["Safety and permits", "Coordination with trades", "Defined timelines"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: false },
    { name: "Extension Roofing", description: "Roofing for extensions, aesthetically joining to existing.", features: ["Weathertight junctions", "Ridge and apron details", "Matching colour and profile"], image: "/images/complete-roof-replacement-after.jpg", popular: false },
    { name: "Garage/Carport", description: "Solutions for garages and carports with effective drainage.", features: ["Light structure", "Gutters and downpipes", "Quick installation"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Custom Architectural", description: "Design roofing with unique details and special geometries.", features: ["Custom profiling", "Outstanding aesthetics", "Facade compatibility"], image: "/images/roof painting transformation after.jpg", popular: false }
  ];

  const benefits = [
    { icon: Award, title: "Expert Installation", description: "Specialized team with proven processes for consistent quality." },
    { icon: Shield, title: "Code Compliant", description: "Compliance with Australian standards and local requirements." },
    { icon: Clock, title: "Project Management", description: "Work plan, milestones and clear communication with client." },
    { icon: Star, title: "Material Warranties", description: "Manufacturer warranties registered and documented." },
    { icon: Clock, title: "On-time Delivery", description: "Realistic timeline and progress control for on-time delivery." },
    { icon: DollarSign, title: "Quality Guaranteed", description: "Internal inspections and quality closure checklist." }
  ];

  const process = [
    { step: "01", title: "Design Consultation", description: "Define materials, profiles and aesthetics." },
    { step: "02", title: "Material Selection", description: "Select systems compatible with local climate." },
    { step: "03", title: "Engineering Plans", description: "Plans and structural specifications as needed." },
    { step: "04", title: "Council Approval", description: "Permit management and regulatory compliance." },
    { step: "05", title: "Site Prep", description: "Site preparation, safety and logistics." },
    { step: "06", title: "Frame Inspection", description: "Review structure before roofing." },
    { step: "07", title: "Installation", description: "Install roofing system and roof plumbing." },
    { step: "08", title: "Final Approval", description: "Final inspection and closure documentation." }
  ];

  const maintenanceTips = [
    { title: "Scheduled Checks", description: "Regular inspections of roofing and plumbing.", frequency: "Annually" },
    { title: "Gutter Maintenance", description: "Clean gutters to prevent overflows.", frequency: "Every 6 months" },
    { title: "Sealant Review", description: "Verify seals and critical junctions.", frequency: "Annually" },
    { title: "Minor Repairs", description: "Address minor damage to preserve warranties.", frequency: "As needed" }
  ];

  const faqItems = [
    { question: "What materials do you recommend for new installation?", answer: "Depends on aesthetics, budget and exposure. Colorbond/metal for durability and modern lines; concrete tiles for classic style. We evaluate your project and recommend options." },
    { question: "Can you coordinate with my builder?", answer: "Yes, we work with builders and other trades. We define interfaces, timeline and responsibilities for smooth installation." },
    { question: "How long does a typical project take?", answer: "Between 1 and 3 weeks depending on size and complexity, not counting council approvals. We plan in phases to minimize disruptions." },
    { question: "What documentation do you provide?", answer: "Plans/Specifications (if applicable), material warranties, quality checklist and maintenance recommendations." },
    { question: "Do you offer acoustic/thermal options?", answer: "Yes, insulation and reflective colours to improve comfort and efficiency." }
  ];

  const costFactors = [
    "Surface area and design complexity",
    "Material type and accessories (gutters, aprons, ridges)",
    "Structural requirements and engineering",
    "Council permits and approval times",
    "Access, height and worksite safety",
    "Timelines, logistics and coordination with other trades"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Installation Newcastle - Expert Installation Services"
        description="Roof installation for homes and businesses in Newcastle. Project management, regulatory compliance and warranties. (02) 4089 4613."
        keywords="roof installation newcastle, new roof install, extension roofing, commercial roofing install"
        ogTitle="Roof Installation Newcastle - Expert Service"
        ogDescription="Roof installation with engineering, permits and on-time delivery in Newcastle."
        ogImage="/images/roof-restoration-project-after.jpg"
        schemaType="Service"
        service={"roof-installation" as any}
        location="newcastle"
        customName="Roof Installation Newcastle"
        customDescription="New roof installation with comprehensive project management in Newcastle"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Roof Installation Newcastle - Expert Installation Services</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Roof installation for new builds and extensions, with planning and compliance to Australian codes.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Start Your New Roof <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspection">Book an Inspection</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Expert installation for homes and businesses with clear management and warranties.</p>
          </div>
          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Professional Roof Installation Services
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Installing a new roof is a significant investment that requires expert knowledge and precise execution. Our roof installation service combines years of experience with the latest techniques and quality materials to deliver roofing that protects your property and enhances its value.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Whether you're building a new home, adding an extension, or replacing an old roof, we handle every aspect of the installation process. From material selection and council approvals to professional installation and final inspection, we ensure your project runs smoothly from start to finish.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/complete-roof-replacement-after.jpg"
                  alt="Professional roof installation Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-restoration-project-after.jpg"
                  alt="Expert roof installation Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Quality Materials & Expert Craftsmanship
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  We only work with premium roofing materials from trusted Australian manufacturers, ensuring your new roof comes with comprehensive warranties and proven performance. Our team stays current with the latest installation techniques and building codes to deliver superior results.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  From residential homes to commercial buildings, we approach every installation with the same commitment to quality and attention to detail. Our systematic process minimizes disruption while ensuring every aspect of the job meets our high standards and your expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">New Roof Options</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Solutions for homes, extensions and commercial projects.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">
                {type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}
                <div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div>
                <CardContent className="p-6">
                  <div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p>
                  <ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Roof Installation Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Transparencia en cada etapa para un resultado predecible y de calidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Installation Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>Variables that impact budgets for new residential and commercial roofing.</p>
              <div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div>
              <Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button>
            </div>
            <div className="space-y-6">
              <Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Residential</span><span className="font-semibold">Typical homes</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Commercial</span><span className="font-semibold">Shops/Warehouses</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Extension</span><span className="font-semibold">Junctions and details</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Custom</span><span className="font-semibold">Architectural</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Costs subject to engineering, permits and logistics.</p></Card>
              <Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Documentation</h3><p className="text-sm" style={{ color: '#666666' }}>Quality checklist, warranties and maintenance guide to preserve your investment.</p></Card>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">New Roof Care Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep your roof like new with scheduled inspections.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Roof Installation</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Planning, safety and clear communication from start to finish.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: FileCheck, title: "Permits & Compliance", description: "Advice and management of approvals when applicable." },
            { icon: Building2, title: "Work Coordination", description: "Clear interfaces with trades and builder." },
            { icon: Shield, title: "Safety", description: "Certified protocols and equipment at height." },
            { icon: Star, title: "Finish", description: "Meticulous details and clean finishes." },
            { icon: CheckCircle, title: "Quality Control", description: "Checklists and weather tightness testing." },
            { icon: Clock, title: "Planning", description: "Timeline and proactive communication." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (
            <Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>
          ); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Installation FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>We answer common questions about new installations in Newcastle.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Services that complement your new installation.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Repairs", link: "/roof-repairs", description: "Repairs and maintenance" },
            { name: "Roof Replacement", link: "/roof-replacement", description: "Complete replacement" },
            { name: "Roof Inspections", link: "/roof-inspections", description: "Reports and diagnosis" },
            { name: "Gutter Repairs", link: "/gutter-repairs", description: "Gutters and downpipes" }
          ].map((service, index) => (<Card key={index} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3><p className="text-sm mb-4" style={{ color: '#666666' }}>{service.description}</p><Button variant="outline" size="sm" asChild><a href={service.link}>Learn More<ArrowRight className="h-3 w-3 ml-2" /></a></Button></CardContent></Card>))}</div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route = {
  path: "/roof-installation/",
  element: <RoofInstallationPage />,
  handle: {
    title: "Roof Installation Newcastle - Expert Installation Services",
    meta: [
      { name: "description", content: "Roof installation for homes and businesses in Newcastle. Project management, regulatory compliance and warranties. (02) 4089 4613." },
      { name: "keywords", content: "roof installation newcastle, new roof install, extension roofing, commercial roofing install" }
    ]
  }
};

export default RoofInstallationPage;


