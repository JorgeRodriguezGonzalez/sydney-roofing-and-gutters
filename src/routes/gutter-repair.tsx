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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Wrench, Droplets, Palette } from "lucide-react";

const GutterRepairPage = () => {
  const types = [
    { name: "Leak Repairs", description: "Sealing of joints and leak correction.", features: ["Compatible seals", "Prior cleaning", "Water testing"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: true },
    { name: "Bracket Replacement", description: "Replacement of damaged supports and fixture reinforcement.", features: ["Aligned and level", "Secure mounting", "Colour compatibility"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Downpipe Repairs", description: "Correction of downpipes and faulty joints.", features: ["New sections", "Sealed joints", "Flow tests"], image: "/images/complete-roof-replacement-after.jpg", popular: false },
    { name: "Gutter Realignment", description: "Re-leveling to ensure correct pitch and discharge.", features: ["Fall calculation", "Fixation points", "Neat finish"], image: "/images/roof-restoration-project-after.jpg", popular: false },
    { name: "Complete Gutter Replacement", description: "Complete replacement with new gutters and matching colour.", features: ["Removal and disposal", "Precise installation", "Manufacturer warranty"], image: "/images/emergency-roof-repairs-1.jpg", popular: false }
  ];

  const benefits = [
    { icon: Shield, title: "Prevent Water Damage", description: "Avoid leaks that affect walls and eaves." },
    { icon: Star, title: "Protect Foundations", description: "Good drainage keeps water away from foundations." },
    { icon: Droplets, title: "Stop Overflows", description: "Level gutters prevent overflows." },
    { icon: CheckCircle, title: "Proper Drainage", description: "Correct downpipes and pitch ensure flow." },
    { icon: Palette, title: "Color-matched Repairs", description: "Repairs in colour compatible with facade." } as any,
    { icon: Award, title: "Warranty on Work", description: "Warranty on workmanship and materials." }
  ];

  const process = [
    { step: "01", title: "Gutter Assessment", description: "Evaluation of condition, pitch and fixtures." },
    { step: "02", title: "Leak Detection", description: "Identification of problematic joints and cracks." },
    { step: "03", title: "Debris Removal", description: "Cleaning of debris and accumulated leaves." },
    { step: "04", title: "Repairs/Replacement", description: "Correction of joints, supports and section changes." },
    { step: "05", title: "Realignment", description: "Pitch adjustment for efficient discharge." },
    { step: "06", title: "Downpipe Check", description: "Review of downpipes and joints with gutters." },
    { step: "07", title: "Water Flow Test", description: "Water test to validate flow." },
    { step: "08", title: "Maintenance Advice", description: "Recommendations to maintain the system." }
  ];

  const maintenanceTips = [
    { title: "Regular Clean", description: "Remove leaves to avoid blockages.", frequency: "Every 6 months" },
    { title: "Check After Storms", description: "Check supports and joints after strong winds.", frequency: "When it occurs" },
    { title: "Trim Trees", description: "Less leaves, less blockages.", frequency: "Annually" },
    { title: "Seal Check", description: "Check seals on exposed joints.", frequency: "Annually" }
  ];

  const faqItems = [
    { question: "Can you match the colour?", answer: "Yes, we work with compatible palettes to integrate the repair into your facade." },
    { question: "Is it better to repair or replace everything?", answer: "If there's general fatigue or poor pitch, complete replacement is often recommended. We evaluate and suggest options." },
    { question: "Do you also repair downpipes?", answer: "Yes, we repair or replace faulty sections and joints." },
    { question: "What warranty do you offer?", answer: "Warranty on workmanship and specification of materials used." },
    { question: "How long does it take?", answer: "Typical repairs are resolved in hours; complete replacements, in 1–2 days." }
  ];

  const costFactors = [
    "Linear metres to address",
    "Condition of gutters and supports",
    "Access, height and safety",
    "Number of joints and downpipes",
    "Colour and material compatibility",
    "Waste disposal"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Gutter Repair Newcastle - Fix Leaking Gutters"
        description="Professional gutter repair in Newcastle: leaks, supports, downpipes and realignment. (02) 4089 4613."
        keywords="gutter repair newcastle, leaking gutters, downpipe repair, gutter realignment"
        ogTitle="Gutter Repair Newcastle - Fix Leaking Gutters"
        ogDescription="Gutter repair and replacement with flow tests and warranties."
        ogImage="/images/re-roof-gutter-replacing-wall-cladding-1.jpg"
        schemaType="Service"
        service={"gutter-repair" as any}
        location="newcastle"
        customName="Gutter Repair Newcastle"
        customDescription="Gutter repair and replacement with matching colour and flow tests"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Gutter Repair Newcastle - Fix Leaking Gutters</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Gutters and downpipes that work: no overflows, no stains, no leaks.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Fix My Gutters <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspection">Request Inspection</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2><p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Reparaciones de canaletas enfocadas en drenaje y estética.</p></div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Fast & Effective Gutter Repairs
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Damaged gutters compromise your property's protection, allowing water to damage walls, foundations, and landscaping. Our gutter repair service quickly addresses leaks, sagging sections, broken brackets, and blocked downpipes with long-lasting solutions.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  From minor fixes to major realignment work, we repair all gutter types and materials. Our service includes assessment of your entire gutter system to identify potential problems before they cause damage, saving you money in the long run.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/re-roof-gutter-replacing-wall-cladding-1.jpg"
                  alt="Gutter repair Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Gutter leak repair Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Protect Your Home from Water Damage
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Properly functioning gutters are essential for Newcastle properties, directing water safely away from your home's structure. Our repairs restore correct water flow and prevent the costly damage that results from overflowing or leaking gutters.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  All repairs use quality materials matched to your existing gutters and designed for Newcastle's rainfall patterns. We provide honest advice about whether repair or replacement offers the best value, ensuring you make informed decisions about your property.
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Gutter Repair Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Soluciones para fugas, soportes, bajadas y pendiente.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Gutter Repair Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Proceso enfocado en drenaje y terminaciones limpias.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Gutter Repair Costs in Newcastle</h2><p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>What affects the cost of repairing or replacing gutters.</p><div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div><Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button></div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Leak Repairs</span><span className="font-semibold">Sealing and testing</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Bracket Replace</span><span className="font-semibold">New supports</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Downpipe Repair</span><span className="font-semibold">Sections and joints</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Realignment</span><span className="font-semibold">Correct pitch</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Metres, access and finishes affect the total.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Flow Testing</h3><p className="text-sm" style={{ color: '#666666' }}>We test with water to validate pitch and joints before handover.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Gutter Care Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Consejos para que sus canaletas funcionen siempre bien.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Gutter Repairs</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Correct drainage with neat finishes and compatible colour.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: Wrench, title: "Precise Adjustments", description: "Supports and pitch to specification." },
            { icon: Droplets, title: "Water Testing", description: "We validate flow before handover." },
            { icon: Shield, title: "Correct Materials", description: "Compatible seals and joints." },
            { icon: Star, title: "Finish", description: "Neat splices and joints." },
            { icon: CheckCircle, title: "Warranties", description: "Coverage for workmanship and materials." },
            { icon: Clock, title: "Speed", description: "Efficient and organized interventions." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Gutter Repair FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Common questions about gutter repairs.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Other roofing services to complete your project.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Cleaning", link: "/roof-cleaning", description: "Cleaning and treatment" },
            { name: "Roof Painting", link: "/roof-painting", description: "Protection and colour" },
            { name: "Roof Repairs", link: "/roof-repairs", description: "Seals and corrections" },
            { name: "Roof Inspections", link: "/roof-inspections", description: "Report and diagnosis" }
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
  path: "/gutter-repair/",
  element: <GutterRepairPage />,
  handle: {
    title: "Gutter Repair Newcastle - Fix Leaking Gutters",
    meta: [
      { name: "description", content: "Professional gutter repair in Newcastle: leaks, supports, downpipes and realignment. (02) 4089 4613." },
      { name: "keywords", content: "gutter repair newcastle, leaking gutters, downpipe repair, gutter realignment" }
    ]
  }
};

export default GutterRepairPage;


