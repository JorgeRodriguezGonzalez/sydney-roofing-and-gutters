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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Hammer, Ruler } from "lucide-react";

const MetalRoofingPage = () => {
  const types = [
    {
      name: "Colorbond Roofing",
      description: "Installation and replacement with genuine Colorbond in contemporary profiles and colours.",
      features: ["Wide colour palette", "Durable finish", "Excellent UV resistance"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: true
    },
    {
      name: "Steel Roofing",
      description: "Galvanized/aluminum-zinc steel cladding with protective coatings for extended lifespan.",
      features: ["Certified sheets", "Corrosion protection", "Acoustic options"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    },
    {
      name: "Standing Seam",
      description: "Architectural standing seam solutions with minimalist aesthetic and clean lines.",
      features: ["Premium finish", "Detailed folds", "Excellent weather tightness"],
      image: "/images/complete-roof-replacement-after.jpg",
      popular: false
    },
    {
      name: "Corrugated Metal",
      description: "Traditional corrugated profile, economical and quick installation for homes and sheds.",
      features: ["Efficient installation", "Good ventilation", "Simple maintenance"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Custom Metal Designs",
      description: "Custom designs: mansards, dormers, domes and solutions for complex details.",
      features: ["Custom fabrication", "Facade compatibility", "Special finishes"],
      image: "/images/roof painting transformation after.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Award, title: "Long Lifespan (50+ years)", description: "Metal systems with coatings that exceed decades with minimal maintenance." },
    { icon: Shield, title: "Weather Resistant", description: "Seals, fixings and flashing designed for coastal winds and heavy rain." },
    { icon: Shield, title: "Fire Resistant", description: "Superior performance against sparks and embers in risk zones." },
    { icon: Star, title: "Low Maintenance", description: "Periodic cleanings and fixing checks maintain performance." },
    { icon: DollarSign, title: "Energy Efficient", description: "Option for thermo-reflective colours and acoustic/thermal insulation." },
    { icon: Star, title: "Wide Colours", description: "Colorbond range and metallic finishes to harmonise with the surroundings." }
  ];

  const process = [
    { step: "01", title: "Design Consultation", description: "Define objectives, aesthetics, profiles and project timelines." },
    { step: "02", title: "Measurements", description: "Take measurements and verify slopes and squareness." },
    { step: "03", title: "Material Selection", description: "Choose Colorbond/steel and compatible accessories." },
    { step: "04", title: "Old Roof Removal", description: "Remove existing roof if applicable and responsible disposal." },
    { step: "05", title: "Installation", description: "Install sheets, fixings and ridges per specification." },
    { step: "06", title: "Flashing", description: "Form and install flashings and aprons for weather tightness." },
    { step: "07", title: "Gutters", description: "Integrate with gutters, downpipes and rainwater drainage." },
    { step: "08", title: "Final Inspection", description: "Review finishes, fixings and site cleanup." }
  ];

  const maintenanceTips = [
    { title: "Wash Down", description: "Gentle wash to remove salt spray and coastal dust.", frequency: "Every 6-12 months" },
    { title: "Fixings Check", description: "Check screws, washers and seals.", frequency: "Annually" },
    { title: "Gutter Hygiene", description: "Clean gutters prevent corrosion and overflows.", frequency: "Every 6 months" },
    { title: "Touch-up Coating", description: "Touch up scratches to protect substrate.", frequency: "As needed" }
  ];

  const faqItems = [
    { question: "Is Colorbond suitable for coastal areas?", answer: "Yes, current coatings offer good salt spray resistance. We recommend regular cleaning and appropriate profiles to maximize lifespan." },
    { question: "What is the typical lifespan?", answer: "With basic maintenance, a metal roof can exceed 40–50 years. Durability depends on exposure, cleaning and installation quality." },
    { question: "Do you repair metal sheets?", answer: "Yes, we repair leaks, flashing and fixings. We also replace damaged panels and seal penetrations." },
    { question: "Do you provide warranty?", answer: "We include workmanship warranty and specify manufacturer warranties for sheets and paints." },
    { question: "Can you work outside business hours?", answer: "For businesses, we coordinate out-of-hours work windows to minimize disruptions." }
  ];

  const costFactors = [
    "Surface area and complexity (pitches, valleys, penetrations)",
    "Sheet type and coating (Colorbond, galvanized, aluminum-zinc)",
    "Removal of existing roof and disposal",
    "Access, height and scaffolding/harnesses",
    "Flashing details and roof plumbing work",
    "Timelines, deliveries and weather conditions"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Metal Roofing Newcastle - Colorbond & Steel Roofing"
        description="Metal and Colorbond roofing in Newcastle. Installation, replacement and repairs with warranty. Call (02) 4089 4613."
        keywords="metal roofing newcastle, colorbond roofing, steel roofing, standing seam, corrugated metal"
        ogTitle="Metal Roofing Newcastle - Colorbond & Steel"
        ogDescription="Metal roofing installation and repairs. Colorbond profiles, steel and custom designs in Newcastle."
        ogImage="/images/roof-restoration-project-after.jpg"
        schemaType="Service"
        service={"metal-roofing" as any}
        location="newcastle"
        customName="Metal Roofing Newcastle"
        customDescription="Colorbond and steel with expert installation and warranties in Newcastle and Hunter"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Metal Roofing Newcastle - Colorbond & Steel Roofing</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Metal solutions resistant to coastal climate, with modern profiles and certified execution for homes and businesses.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Discuss Your Metal Roof <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
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
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Metal installation focused on durability, weather tightness and aesthetics for Newcastle's coastline.</p>
          </div>
          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Colorbond & Steel Roofing Specialists
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Metal roofing, particularly Colorbond steel, is the premium choice for Newcastle homes due to its exceptional durability, weather resistance, and low maintenance requirements. Our metal roofing service covers everything from new installations to repairs and replacements using Australia's most trusted roofing materials.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  With a lifespan exceeding 50 years, metal roofing represents excellent value despite higher upfront costs. We work with all metal roofing profiles including corrugated, standing seam, and custom architectural designs, ensuring your roof perfectly suits your property's style.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/complete-roof-replacement-after.jpg"
                  alt="Metal roofing installation Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Colorbond roofing Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Built for Newcastle's Coastal Climate
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Newcastle's coastal location demands roofing that can handle salt spray, strong winds, and intense UV exposure. Colorbond steel is specifically designed for these conditions, with multiple protective layers including zinc, corrosion-resistant coating, and color finish.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Our installation techniques follow strict Australian standards, ensuring every sheet is properly fastened and sealed against the elements. From material selection to final inspection, we deliver metal roofing installations that protect your home for decades while enhancing its market value.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Metal Roofing Options</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Colorbond, steel and design profiles for residential and commercial projects.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">
                {type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}
                <div className="aspect-video relative overflow-hidden">
                  <img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Metal Roofing Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Clear process from design to final inspection, with focus on roof plumbing details.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div>
                <h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Metal Roofing Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>Key factors for accurate budgets in highly durable metal roofing.</p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-primary">Cost factors:</h3>
                {costFactors.map((factor, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>
                ))}
              </div>
              <Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Corrugated Systems</span><span className="font-semibold">Efficient option</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Colorbond Premium</span><span className="font-semibold">Wide palette</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Standing Seam</span><span className="font-semibold">Architectural</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Custom Metal</span><span className="font-semibold">Custom design</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*Cost depends on profiles, gauges, logistics and safety.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Technical Specification</h3>
                <p className="text-sm" style={{ color: '#666666' }}>We include technical documentation of profiles, fixings, seals and plumbing details for your records.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Metal Roof Care Tips</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Simple maintenance to preserve metal aesthetics and performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceTips.map((tip, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div>
                  <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Metal Roofing</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Local experience, height safety and finishes that resist the coastline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Hammer, title: "Certified Installers", description: "Precise placement with sheet-specific tools and techniques." },
              { icon: Ruler, title: "Measurement & Detail", description: "Exact measurements, alignment and clean cuts for impeccable look." },
              { icon: Shield, title: "Weather Tightness", description: "Custom formed flashings and compatible seals for zero leaks." },
              { icon: Star, title: "Aesthetic Finish", description: "Aligned ridges and caps for clean, modern lines." },
              { icon: CheckCircle, title: "Safety", description: "We comply with regulations and height work plan with anchors." },
              { icon: Clock, title: "Planning", description: "Coordinated phases to minimize disruptions at your home or business." }
            ].map((feature, i) => {
              const IconComponent = feature.icon as any;
              return (
                <Card key={i} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Metal Roofing FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Common questions about metal roofing and Colorbond in Newcastle.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Services that complement metal installation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Repairs and maintenance" },
              { name: "Roof Replacement", link: "/roof-replacement", description: "Complete replacement" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Reports and diagnosis" },
              { name: "Gutter Repairs", link: "/gutter-repairs", description: "Gutters and downpipes" }
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#666666' }}>{service.description}</p>
                  <Button variant="outline" size="sm" asChild><a href={service.link}>Learn More<ArrowRight className="h-3 w-3 ml-2" /></a></Button>
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

export const route = {
  path: "/metal-roofing/",
  element: <MetalRoofingPage />,
  handle: {
    title: "Metal Roofing Newcastle - Colorbond & Steel Roofing",
    meta: [
      { name: "description", content: "Metal and Colorbond roofing in Newcastle. Installation, replacement and repairs with warranty. Call (02) 4089 4613." },
      { name: "keywords", content: "metal roofing newcastle, colorbond roofing, steel roofing, standing seam, corrugated metal" }
    ]
  }
};

export default MetalRoofingPage;


