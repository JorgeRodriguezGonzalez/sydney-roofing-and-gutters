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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, HardHat, Building } from "lucide-react";

const CommercialRoofingPage = () => {
  const types = [
    { name: "Office Buildings", description: "Roofing for offices with minimal business disruption.", features: ["Phased plan", "After-hours work", "Safety compliance"], image: "/images/roof-restoration-project-after.jpg", popular: true },
    { name: "Warehouses", description: "Industrial premises with large surface area and effective drainage.", features: ["Height logistics", "Lifelines", "Work zoning"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: false },
    { name: "Retail Centers", description: "Roofing for retail with cared-for image and coordinated access.", features: ["Coordinated closures", "Customer protection", "Visible finishes"], image: "/images/complete-roof-replacement-after.jpg", popular: false },
    { name: "Industrial Facilities", description: "Robust solutions for demanding industrial processes.", features: ["Chemical resistance", "Ventilations and penetrations", "Planned maintenance"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Multi-Story Buildings", description: "Multi-story buildings with high safety requirements.", features: ["Elevation and access", "Evacuation plan", "Partial inspections"], image: "/images/emergency-roof-repairs-1.jpg", popular: false }
  ];

  const benefits = [
    { icon: Clock, title: "Minimal Disruption", description: "Planning to keep your operation running." },
    { icon: Shield, title: "Safety Compliance", description: "We comply with regulations and site procedures." },
    { icon: Award, title: "Project Management", description: "Schedules, milestones and constant communication." },
    { icon: DollarSign, title: "Budget Certainty", description: "Clear scope, identified and controlled risks." },
    { icon: Star, title: "Commercial Warranties", description: "Warranties and documentation for audits." },
    { icon: Clock, title: "After-hours Available", description: "Night/weekend work when necessary." }
  ];

  const process = [
    { step: "01", title: "Site Assessment", description: "Survey of access, risks and scope." },
    { step: "02", title: "Engineering/Structural", description: "Structural and load verification if applicable." },
    { step: "03", title: "Council/Compliance", description: "Required permits and documentation." },
    { step: "04", title: "Scheduling", description: "Schedule that minimizes interruptions." },
    { step: "05", title: "Safety Setup", description: "Lifelines, railings and signage." },
    { step: "06", title: "Installation", description: "Execution by zones with quality control." },
    { step: "07", title: "Quality Checks", description: "Intermediate and final inspections." },
    { step: "08", title: "Documentation/Handover", description: "Delivery of reports, warranties and as-built drawings." }
  ];

  const maintenanceTips = [
    { title: "Scheduled Inspections", description: "Inspection programs for large-scale sites.", frequency: "Quarterly/Semi-annual" },
    { title: "Gutter & Drainage", description: "Keep drainage clean to avoid flooding.", frequency: "Quarterly" },
    { title: "Fixings & Flashings", description: "Checks of fixings and metal details.", frequency: "Semi-annually" },
    { title: "Access & Safety", description: "Verification of anchor points and access.", frequency: "Annually" }
  ];

  const faqItems = [
    { question: "Can you work outside business hours?", answer: "Yes, we plan night or weekend shifts to reduce impact on your operation." },
    { question: "How do you manage safety?", answer: "Safety plan, inductions, lifelines, railings and signage according to site." },
    { question: "Do you provide documentation?", answer: "Yes, maintenance manual, warranties, technical sheets and as-built." },
    { question: "Do you coordinate with other contractors?", answer: "Yes, we coordinate interfaces with HVAC, electrical and other trades." },
    { question: "What materials do you use?", answer: "Colorbond/steel, membranes and systems compatible with commercial requirements." }
  ];

  const costFactors = [
    "Roof surface area and complexity",
    "Safety and access (elevation, lifelines)",
    "Permits and compliance (council, inductions)",
    "Materials and commercial specifications",
    "After-hours planning",
    "Logistics, waste and cleanup"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Commercial Roofing Newcastle - Business Roofing Solutions"
        description="Commercial and industrial roofing in Newcastle with minimal disruption, safety and project management. (02) 4089 4613."
        keywords="commercial roofing newcastle, industrial roofing, warehouse roofing, office roofing"
        ogTitle="Commercial Roofing Newcastle - Business Solutions"
        ogDescription="Commercial roofing with safety, management and warranties in Newcastle and Hunter."
        ogImage="/images/re-roof-gutter-replacing-wall-cladding-1.jpg"
        schemaType="Service"
        service={"commercial-roofing" as any}
        location="newcastle"
        customName="Commercial Roofing Newcastle"
        customDescription="Commercial and industrial roofing with management and safety in Newcastle"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Commercial Roofing Newcastle - Business Roofing Solutions</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Roofing projects for offices, retail and industry with minimal disruption and safety compliance.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Plan a Commercial Roof <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspection">Request Assessment</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2><p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Commercial execution with safety, planning and documentation.</p></div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Commercial Roofing Solutions
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Commercial properties require roofing solutions that minimize business disruption while meeting strict safety and compliance standards. Our commercial roofing service handles projects from small retail buildings to large industrial facilities across Newcastle and the Hunter Region.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  We understand the importance of staying on schedule and on budget for commercial projects. Our project management approach coordinates with other trades, maintains strict safety protocols, and completes work efficiently to keep your business operating smoothly.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/complete-roof-replacement-after.jpg"
                  alt="Commercial roofing Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Business roofing services Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Minimize Disruption, Maximize Protection
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  From warehouses and factories to office buildings and retail centers, we tailor our approach to your business needs. After-hours and weekend work options ensure minimal impact on operations, while our experienced crews complete installations safely and professionally.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  All commercial work includes comprehensive documentation, compliance certificates, and warranties suitable for commercial property requirements. We work with property managers, building owners, and maintenance teams to deliver roofing solutions that protect your asset and your bottom line.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => { const IconComponent = benefit.icon; return (<Card key={index} className="group hover:shadow-lg transition-all duration-300"><CardContent className="p-6 text-center"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{benefit.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Commercial Roofing Options</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Services for office buildings, retail, warehouses and industry.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Commercial Roofing Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Methodology focused on operational continuity and safety.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Commercial Roofing Costs in Newcastle</h2><p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>What impacts the budget in commercial projects.</p><div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div><Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button></div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Small Sites</span><span className="font-semibold">Offices/shops</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Warehouses</span><span className="font-semibold">Large surfaces</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Industrial</span><span className="font-semibold">High demand</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>After-hours</span><span className="font-semibold">Available</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Subject to safety, access and documentation.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Handover</h3><p className="text-sm" style={{ color: '#666666' }}>Includes warranties, as-built drawings and recommended maintenance plan.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Commercial Care Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Recommended maintenance for business sites.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Commercial Roofing</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Management, safety and quality your business needs.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: HardHat, title: "Rigorous Safety", description: "Safety plan and permanent supervision." },
            { icon: Building, title: "Commercial Experience", description: "Projects in offices, retail and industry." },
            { icon: Shield, title: "Compliance", description: "Documentation and permits in order." },
            { icon: Star, title: "Consistent Quality", description: "Stage controls and clean handovers." },
            { icon: CheckCircle, title: "Delivery", description: "Milestones achieved and complete handover." },
            { icon: Clock, title: "Planning", description: "Zone work and after-hours if needed." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Commercial Roofing FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common business questions.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Services that complete your commercial project.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Metal Roofing", link: "/metal-roofing", description: "Colorbond and steel" },
            { name: "Roof Repairs", link: "/roof-repairs", description: "Repairs and sealing" },
            { name: "Roof Inspections", link: "/roof-inspections", description: "Reports and compliance" },
            { name: "Gutter Repairs", link: "/gutter-repairs", description: "Industrial gutters" }
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
  path: "/commercial-roofing/",
  element: <CommercialRoofingPage />,
  handle: {
    title: "Commercial Roofing Newcastle - Business Roofing Solutions",
    meta: [
      { name: "description", content: "Commercial and industrial roofing in Newcastle with minimal disruption, safety and project management. (02) 4089 4613." },
      { name: "keywords", content: "commercial roofing newcastle, industrial roofing, warehouse roofing, office roofing" }
    ]
  }
};

export default CommercialRoofingPage;


