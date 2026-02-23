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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Camera, Thermometer } from "lucide-react";

const RoofInspectionPage = () => {
  const types = [
    { name: "Pre-Purchase Inspection", description: "Pre-purchase report to know the real roof condition.", features: ["Detailed photos", "Findings and risks", "Work estimates"], image: "/images/roof-inspection-before.jpg", popular: true },
    { name: "Annual Maintenance Check", description: "Annual check-up to prevent failures and plan maintenance.", features: ["Checklist", "Minor adjustments", "Recommendations"], image: "/images/roof-restoration-project-after.jpg", popular: false },
    { name: "Storm Damage Assessment", description: "Post-storm evaluation with insurance support.", features: ["Damage record", "Temporary measures", "Insurance claim report"], image: "/images/emergency-roof-repairs-before.jpg", popular: false },
    { name: "Pre-Sale Inspection", description: "Sale report that provides transparency and value.", features: ["Objective observations", "Comparative photos", "Improvement suggestions"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Leak Investigation", description: "Leak investigation with targeted testing.", features: ["Moisture tracing", "Flashing review", "Water testing"], image: "/images/emergency-roof-repairs-1.jpg", popular: false }
  ];

  const benefits = [
    { icon: Star, title: "Early Problem Detection", description: "Detect incipient failures and avoid major repairs." },
    { icon: Shield, title: "Insurance Reports", description: "Clear reports useful for insurance claims." },
    { icon: Award, title: "Detailed Documentation", description: "Visual record, observations and priority recommendations." },
    { icon: Thermometer, title: "Thermal Imaging", description: "Optional to locate hidden moisture and heat loss." },
    { icon: Clock, title: "Prevent Costly Repairs", description: "Intervene on time and save on later corrective work." },
    { icon: DollarSign, title: "Peace of Mind", description: "Make informed decisions before buying or selling." }
  ];

  const process = [
    { step: "01", title: "Schedule Inspection", description: "Coordinate date and scope of report." },
    { step: "02", title: "External Assessment", description: "Review of roofing, flashings and drainage." },
    { step: "03", title: "Internal Ceiling Check", description: "Inspect stains, cracks and ventilation." },
    { step: "04", title: "Thermal Imaging", description: "Optional as needed for hidden moisture." },
    { step: "05", title: "Photo Documentation", description: "Visual record of findings and locations." },
    { step: "06", title: "Structural Review", description: "Observe accessible structure and fixings." },
    { step: "07", title: "Written Report", description: "Document with findings, risks and priorities." },
    { step: "08", title: "Recommendations", description: "Action plan and indicative quotes." }
  ];

  const maintenanceTips = [
    { title: "Annual Check", description: "Schedule an inspection per year, ideal after rainy season.", frequency: "Annually" },
    { title: "After Storms", description: "Visual review after severe weather events.", frequency: "When it occurs" },
    { title: "Gutter Clean", description: "Keep gutters clear to avoid water backflow.", frequency: "Every 6 months" },
    { title: "Sealant Watch", description: "Check seals and junctions at penetrations and valleys.", frequency: "Annually" }
  ];

  const faqItems = [
    { question: "How long do inspection and report take?", answer: "Between 1 and 2 hours of inspection depending on size, and 24–48 hours for written report with photos." },
    { question: "Is it useful for insurance?", answer: "Yes, we include documentation and photos useful for claims. If needed, we implement temporary protective measures." },
    { question: "Do you include thermal imaging?", answer: "Optional. We suggest thermography when there are moisture signs without clear origin." },
    { question: "Do you go on the roof?", answer: "If it's safe to do so, yes. We also use reach cameras and binoculars when appropriate." },
    { question: "Do you detect all leaks?", answer: "We locate probable causes with targeted testing. Some situations require rain to confirm." }
  ];

  const costFactors = [
    "Roof size and complexity",
    "Report scope (pre-purchase, insurance, maintenance)",
    "Use of thermography or other testing",
    "Access and height (safety)",
    "Location and logistics",
    "Urgency/report delivery times"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Inspection Newcastle - Professional Assessment"
        description="Roof inspections with detailed reports in Newcastle. Pre-purchase, insurance and maintenance. (02) 4089 4613."
        keywords="roof inspection newcastle, roof condition report, pre purchase roof inspection, thermal imaging"
        ogTitle="Roof Inspection Newcastle - Professional Assessment"
        ogDescription="Professional roof assessment and clear reports with photos and recommendations."
        ogImage="/images/roof-repair-and-restoration-1.jpg"
        schemaType="Service"
        service={"roof-inspection" as any}
        location="newcastle"
        customName="Roof Inspection Newcastle"
        customDescription="Roof inspections with documentation and recommendations in Newcastle and Hunter"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Roof Inspection Newcastle - Professional Assessment</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Complete inspections with photos, prioritized observations and recommendations for safe decisions.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Book an Inspection <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-repairs">Need Repairs?</a>
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
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Clear and actionable reports for pre-purchase, insurance and preventive maintenance.</p>
          </div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Detailed Roof Inspection Reports
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  A professional roof inspection provides crucial information about your property's condition, whether you're buying, selling, or simply maintaining your investment. Our licensed inspectors examine every aspect of your roof, from structural integrity to minor wear that could become major problems.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Using advanced technology including thermal imaging for hidden leak detection, we identify issues before they cause costly damage. Each inspection includes comprehensive photo documentation and a detailed written report suitable for insurance claims, property transactions, or maintenance planning.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Professional roof inspection Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-restoration-project-after.jpg"
                  alt="Roof condition assessment Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Protect Your Property Investment
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Regular inspections are the best defense against expensive surprise repairs. Our systematic approach checks all critical areas including tiles, flashing, gutters, valleys, and structural supports. We provide clear recommendations with cost estimates so you can plan maintenance effectively.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Whether you need a pre-purchase inspection, annual maintenance check, or storm damage assessment, our reports are accepted by insurance companies and real estate professionals throughout Newcastle. With no-obligation inspections, you get expert peace of mind without pressure.
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Inspection Types</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Select the inspection type that best suits your objective.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Roof Inspection Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Methodical process with visual record and testing when required.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Inspection Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>Factors that determine the cost of your inspection and report.</p>
              <div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div>
              <Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button>
            </div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Pre-Purchase</span><span className="font-semibold">Complete report</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Maintenance Check</span><span className="font-semibold">Basic check-up</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Storm Damage</span><span className="font-semibold">Post-event assessment</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Thermal Imaging</span><span className="font-semibold">Optional add-on</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Costs vary by scope, height and delivery times.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Documentation</h3><p className="text-sm" style={{ color: '#666666' }}>You'll receive a written report with photos, prioritized findings and recommendations.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Inspection & Maintenance Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep roof condition under control and avoid surprises.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Roof Inspections</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Local experience and rigorous methodology.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: Camera, title: "Visual Evidence", description: "Clear photos of findings and locations." },
            { icon: Thermometer, title: "Thermography", description: "Available for hidden moisture and thermal bridges." },
            { icon: Shield, title: "Impartiality", description: "Objective reports oriented to decisions." },
            { icon: Star, title: "Clear Format", description: "Priorities, risks and suggested steps." },
            { icon: CheckCircle, title: "Recommendations", description: "Preventive and corrective actions" },
            { icon: Clock, title: "Fast Delivery", description: "Delivery times adapted to your urgency." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Inspection FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to frequently asked questions about inspections.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Review other services that may interest you.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Repairs", link: "/roof-repairs", description: "Repairs and leak solutions" },
            { name: "Roof Replacement", link: "/roof-replacement", description: "Complete replacement" },
            { name: "Gutter Repairs", link: "/gutter-repairs", description: "Gutters and downpipes" },
            { name: "Leak Detection", link: "/leak-detection", description: "Advanced leak detection" }
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
  path: "/roof-inspection/",
  element: <RoofInspectionPage />,
  handle: {
    title: "Roof Inspection Newcastle - Professional Assessment",
    meta: [
      { name: "description", content: "Roof inspections with detailed reports in Newcastle. Pre-purchase, insurance and maintenance. (02) 4089 4613." },
      { name: "keywords", content: "roof inspection newcastle, roof condition report, pre purchase roof inspection, thermal imaging" }
    ]
  }
};

export default RoofInspectionPage;


