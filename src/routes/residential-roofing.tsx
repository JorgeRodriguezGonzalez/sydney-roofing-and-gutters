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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Home, Palette } from "lucide-react";

const ResidentialRoofingPage = () => {
  const types = [
    { name: "New Home Roofing", description: "New roofing with aesthetics and efficiency for your home.", features: ["Material of choice", "Optional insulation", "Neat finishes"], image: "/images/roof-restoration-project-after.jpg", popular: true },
    { name: "Roof Replacement", description: "Complete renovation with modern materials and warranty.", features: ["Orderly dismantling", "Expert installation", "Precise finishing"], image: "/images/complete-roof-replacement-after.jpg", popular: false },
    { name: "Home Repairs", description: "Solution for leaks, broken tiles and flashing.", features: ["Clear diagnosis", "Compatible spare parts", "Durable seals"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Extensions/Additions", description: "Aesthetic integration of extensions and annexes.", features: ["Clean junctions", "Matching colour", "Correct pitches"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: false },
    { name: "Renovation Projects", description: "Roofing for renovations with focus on aesthetics and comfort.", features: ["Modern palettes", "Reflective option", "Fascia compatibility"], image: "/images/roof painting transformation after.jpg", popular: false }
  ];

  const benefits = [
    { icon: Star, title: "Home Specialist Expertise", description: "Solutions designed for the domestic environment." },
    { icon: Palette, title: "Aesthetic Focus", description: "Colours and profiles that enhance home design." },
    { icon: Shield, title: "Noise Reduction", description: "Options for acoustic comfort during rain and wind." },
    { icon: DollarSign, title: "Insulation Options", description: "Thermal improvements for energy efficiency." },
    { icon: Home, title: "Increase Home Value", description: "Roofs that add value and presence to the neighbourhood." },
    { icon: Award, title: "Family-friendly Service", description: "Orderly, safe and clean work every day." }
  ];

  const process = [
    { step: "01", title: "Home Consultation", description: "We understand your style and usage needs." },
    { step: "02", title: "Design/Style Selection", description: "We choose profiles, colours and finishes." },
    { step: "03", title: "Material Choices", description: "We define compatible materials and warranties." },
    { step: "04", title: "Family Scheduling", description: "Plan that reduces home interruptions." },
    { step: "05", title: "Installation", description: "Neat assembly with height safety." },
    { step: "06", title: "Daily Clean Worksite", description: "Order and cleanliness at end of each day." },
    { step: "07", title: "Final Walkthrough", description: "Joint review and finalizing details." },
    { step: "08", title: "Homeowner Education", description: "Care and maintenance advice." }
  ];

  const maintenanceTips = [
    { title: "Gentle Wash", description: "Gentle washes to preserve finishes.", frequency: "Annually" },
    { title: "Gutter Care", description: "Clean gutters to avoid stains and backflow.", frequency: "Every 6 months" },
    { title: "Tree Management", description: "Fewer branches and leaves on the roof.", frequency: "As needed" },
    { title: "Quick Repairs", description: "Fix small damage as soon as possible.", frequency: "When they appear" }
  ];

  const faqItems = [
    { question: "Can you work with my architect?", answer: "Yes, we coordinate details and profiles for a result consistent with your home design." },
    { question: "How long does the work take?", answer: "Depends on scope; we plan in phases and keep the site tidy daily." },
    { question: "Noise and dust?", answer: "We use clean work practices and advise schedules to minimize disruption." },
    { question: "Insulation options?", answer: "Yes, we propose thermal and acoustic solutions to improve comfort." },
    { question: "Warranties?", answer: "Workmanship and material warranties, specified in your final document." }
  ];

  const costFactors = [
    "Roof surface area and complexity",
    "Material and finishes selected",
    "Architectural details and finishes",
    "Access and safety on site",
    "Timeline and coordination with other trades",
    "Council requirements if applicable"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Residential Roofing Newcastle - Home Roofing Specialists"
        description="Roofing solutions for homes in Newcastle: new roofing, replacements and repairs. (02) 4089 4613."
        keywords="residential roofing newcastle, home roofing, roof replacement home, house roof repairs"
        ogTitle="Residential Roofing Newcastle - Home Specialists"
        ogDescription="Residential roofing with aesthetics, comfort and warranties in Newcastle."
        ogImage="/images/roof-repair-and-restoration-1.jpg"
        schemaType="Service"
        service={"residential-roofing" as any}
        location="newcastle"
        customName="Residential Roofing Newcastle"
        customDescription="Roofing solutions for homes: new roofing, replacements and repairs"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Residential Roofing Newcastle - Home Roofing Specialists</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Roofing for homes with focus on aesthetics, comfort and a process that respects your family.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Plan Your Home Roof <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2><p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Experts in residential roofing with attention to detail.</p></div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Home Roofing Specialists
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Your home deserves roofing solutions tailored to residential needs—from aesthetic appeal to family safety and comfort. Our residential roofing service specializes in homes throughout Newcastle, understanding the unique requirements of different property styles and homeowner priorities.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Whether you're building a new home, renovating, or replacing an aging roof, we guide you through material choices, color selection, and design options. We work around family schedules, maintain clean worksites, and ensure minimal disruption to your daily life.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/complete-roof-replacement-after.jpg"
                  alt="Residential roofing Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-restoration-project-after.jpg"
                  alt="Home roofing solutions Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Quality Roofing for Newcastle Homes
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  We understand that your home is your largest investment and your family's sanctuary. That's why we approach every residential project with attention to detail, quality materials, and professional craftsmanship that provides lasting protection and value.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  From heritage character homes to modern designs, we match roofing solutions to your property's style and Newcastle's architectural character. Our installations include comprehensive warranties, council approvals, and thorough site cleanup—everything you need for peace of mind.
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Residential Roofing Options</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Choose the right service for your home.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Residential Roofing Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Process designed for your comfort and safety.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Residential Roofing Costs in Newcastle</h2><p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>Variables that influence the investment in your residential roof.</p><div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div><Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button></div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>New Home Roofing</span><span className="font-semibold">Complete project</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Roof Replacement</span><span className="font-semibold">Removal + new</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Repairs</span><span className="font-semibold">Targeted corrections</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Extensions</span><span className="font-semibold">Aesthetic integration</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Subject to design, materials and access.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Colour Consultation</h3><p className="text-sm" style={{ color: '#666666' }}>We suggest palettes to harmonize with facade, environment and Colorbond.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Home Roof Care Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Simple care for your residential roof.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Residential Roofing</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Service designed for the home and your family.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: Home, title: "Orderly Home Work", description: "Area protection and daily cleanup." },
            { icon: Palette, title: "Design & Colour", description: "Aesthetic harmony with the home." },
            { icon: Shield, title: "Safety", description: "Height protocols and domestic environment." },
            { icon: Star, title: "Details", description: "Neat finishes and details." },
            { icon: CheckCircle, title: "Warranties", description: "We document warranties and care." },
            { icon: Clock, title: "Punctuality", description: "Clear schedule and constant communication." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Residential Roofing FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Frequently asked questions from homeowners.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Explore other services for your home.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Cleaning", link: "/roof-cleaning", description: "Cleaning and treatment" },
            { name: "Roof Painting", link: "/roof-painting", description: "Colours and membranes" },
            { name: "Roof Repairs", link: "/roof-repairs", description: "Leak solutions" },
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
  path: "/residential-roofing/",
  element: <ResidentialRoofingPage />,
  handle: {
    title: "Residential Roofing Newcastle - Home Roofing Specialists",
    meta: [
      { name: "description", content: "Roofing solutions for homes in Newcastle: new roofing, replacements and repairs. (02) 4089 4613." },
      { name: "keywords", content: "residential roofing newcastle, home roofing, roof replacement home, house roof repairs" }
    ]
  }
};

export default ResidentialRoofingPage;


