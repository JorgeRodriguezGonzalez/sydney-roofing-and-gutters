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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Droplets, Ruler } from "lucide-react";

const SkylightRepairPage = () => {
  const types = [
    { name: "Leak Repairs", description: "Repair of leaks around the skylight.", features: ["Compatible seals", "Pitch correction", "Water testing"], image: "/images/emergency-roof-repairs-1.jpg", popular: true },
    { name: "Skylight Replacement", description: "Replacement with new and efficient units.", features: ["Modern models", "Better insulation", "Warranties"], image: "/images/complete-roof-replacement-after.jpg", popular: false },
    { name: "Resealing", description: "Renewal of deteriorated seals and joints.", features: ["Appropriate silicones", "Cleaning and preparation", "Neat finish"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Flashing Repairs", description: "Repair or replacement of flashings and junctions.", features: ["Custom-formed", "Compatible with roof", "Watertightness"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: false },
    { name: "New Skylight Installation", description: "Installation of new skylights with proper seals and drainage.", features: ["Size calculation", "Optimal position", "Interior finishes"], image: "/images/roof painting transformation after.jpg", popular: false }
  ];

  const benefits = [
    { icon: Shield, title: "Stop Leaks Permanently", description: "Corrections that address the root cause of the leak." },
    { icon: Star, title: "Improve Natural Light", description: "More light with modern and clean solutions." },
    { icon: DollarSign, title: "Energy Efficient", description: "Units with better insulation reduce heat losses." },
    { icon: Award, title: "Modern Designs", description: "Contemporary aesthetics that add value to the environment." },
    { icon: CheckCircle, title: "Proper Waterproofing", description: "Flashing and seals compatible with your roof." },
    { icon: Shield, title: "Warranty Included", description: "Workmanship and manufacturer warranties." }
  ];

  const process = [
    { step: "01", title: "Leak Inspection", description: "Assessment of stains, puddles and water paths." },
    { step: "02", title: "Diagnosis", description: "Determination of cause: seal, flashing, condensation or other." },
    { step: "03", title: "Skylight Assessment", description: "Condition of unit, dome/glass and frames." },
    { step: "04", title: "Material Sourcing", description: "Selection of spare parts or new unit." },
    { step: "05", title: "Removal (if replacing)", description: "Removal of existing unit with care of finishes." },
    { step: "06", title: "Installation/Repair", description: "Installation or repair with correct seals and fixings." },
    { step: "07", title: "Waterproofing", description: "Detail of flashings and secondary drains." },
    { step: "08", title: "Water Testing", description: "Controlled test to verify watertightness." }
  ];

  const maintenanceTips = [
    { title: "Keep Surroundings Clean", description: "Avoid accumulation of leaves around the skylight.", frequency: "Every 6 months" },
    { title: "Sealant Checks", description: "Review visible seals and joints.", frequency: "Annually" },
    { title: "Condensation Watch", description: "Monitor interior humidity and ventilation.", frequency: "According to climate" },
    { title: "Prompt Repairs", description: "Address cracks or water entry immediately.", frequency: "When it occurs" }
  ];

  const faqItems = [
    { question: "Is my leak from condensation or rain?", answer: "We assess signs: dripping without rain suggests condensation; stains after storm indicates leak. We adjust solution to diagnosis." },
    { question: "Should I repair or replace?", answer: "If the unit is fatigued or out of standard, replacement may provide better performance and warranty." },
    { question: "Do you perform water testing?", answer: "Yes, we perform controlled tests to validate the solution applied." },
    { question: "Can insulation be improved?", answer: "We offer units with better thermal values and updated seals." },
    { question: "How long does the intervention take?", answer: "Simple repairs can be resolved in hours; replacements in 1 typical day." }
  ];

  const costFactors = [
    "Skylight type and size",
    "Cause of failure (seals, flashings, condensation)",
    "Access and height",
    "Availability of spare parts/units",
    "Environment condition (interior finishes)",
    "Testing and documentation"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Skylight Repair Newcastle - Fix Leaking Skylights"
        description="Skylight repair in Newcastle: sealing, flashings and replacements with watertightness testing. (02) 4089 4613."
        keywords="skylight repair newcastle, leaking skylight, skylight replacement, skylight resealing"
        ogTitle="Skylight Repair Newcastle - Fix Leaking Skylights"
        ogDescription="Skylights without leaks with seals, flashings and modern replacements in Newcastle."
        ogImage="/images/emergency-roof-repairs-1.jpg"
        schemaType="Service"
        service={"skylight-repair" as any}
        location="newcastle"
        customName="Skylight Repair Newcastle"
        customDescription="Skylight repair and replacement with testing and warranties"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Skylight Repair Newcastle - Fix Leaking Skylights</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">We repair leaks and renew skylights with proven solutions for Newcastle and Hunter.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Fix My Skylight <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2><p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Skylights without leaks and with better natural lighting.</p></div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Expert Skylight Repair Services
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Leaking skylights are one of the most common roofing problems, often caused by failed seals, damaged flashing, or improper installation. Our skylight repair service addresses all issues from minor resealing to complete skylight replacement, restoring both function and protection.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  We work with all skylight brands and types, including dome skylights, flat glass panels, and tubular skylights. Whether your skylight is old or new, our repair techniques stop leaks permanently while preserving the natural light you value.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Skylight repair service Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/emergency-roof-repairs-1.jpg"
                  alt="Fix leaking skylight Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Stop Skylight Leaks Permanently
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Many skylight leaks stem from flashing issues rather than the skylight itself. Our systematic diagnosis identifies the true cause, whether it's perished seals, inadequate flashing, or condensation problems. We then provide solutions that address the root issue.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Modern skylight technology offers significant improvements over older models. If replacement is needed, we can recommend energy-efficient options that enhance natural light while improving insulation and reducing heat gain in Newcastle's climate.
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Skylight Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Solutions for repairs, sealing and replacements.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Skylight Repair Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Steps that ensure a waterproof and durable result.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Skylight Repair Costs in Newcastle</h2><p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>Factors that influence the cost of repairing or replacing a skylight.</p><div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div><Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button></div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Resealing</span><span className="font-semibold">Seals and joints</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Flashing Repairs</span><span className="font-semibold">Custom flashing</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Replacement</span><span className="font-semibold">New unit</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Water Testing</span><span className="font-semibold">Additional service</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Subject to size, access and unit availability.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Warranties</h3><p className="text-sm" style={{ color: '#666666' }}>We include workmanship warranty and manufacturer specifications when applicable.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Skylight Care Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep your skylight working as it should.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Skylight Repairs</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Clean, aesthetic and durable solutions.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: Droplets, title: "Watertightness", description: "Tests and details that stop leaks." },
            { icon: Ruler, title: "Precise Measurement", description: "Perfect fit to existing opening." },
            { icon: Shield, title: "Compatible Materials", description: "Seals and flashings according to substrate." },
            { icon: Star, title: "Aesthetics", description: "Neat and modern interior finishes." },
            { icon: CheckCircle, title: "Warranties", description: "Documentation and post-work coverage." },
            { icon: Clock, title: "Speed", description: "Fast and clean interventions." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Skylight Repair FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Frequently asked questions about skylights.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Services that typically complement skylight work.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Repairs", link: "/roof-repairs", description: "Seals and corrections" },
            { name: "Roof Inspections", link: "/roof-inspections", description: "Reports and diagnosis" },
            { name: "Roof Painting", link: "/roof-painting", description: "Protection and color" },
            { name: "Gutter Repairs", link: "/gutter-repairs", description: "Correct flow" }
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
  path: "/skylight-repair/",
  element: <SkylightRepairPage />,
  handle: {
    title: "Skylight Repair Newcastle - Fix Leaking Skylights",
    meta: [
      { name: "description", content: "Skylight repair in Newcastle: sealing, flashings and replacements with watertightness testing. (02) 4089 4613." },
      { name: "keywords", content: "skylight repair newcastle, leaking skylight, skylight replacement, skylight resealing" }
    ]
  }
};

export default SkylightRepairPage;


