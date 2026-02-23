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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Sparkles, Droplets } from "lucide-react";

const RoofCleaningPage = () => {
  const types = [
    { name: "Pressure Washing", description: "High-pressure cleaning to remove dirt and crust without damaging the substrate.", features: ["Appropriate nozzles", "Pressure control", "Environment protection"], image: "/images/roof-restoration-project-after.jpg", popular: true },
    { name: "Moss Removal", description: "Removal of moss and lichens with techniques that protect tiles.", features: ["Scraper and brushes", "Specific treatments", "Prevents regrowth"], image: "/images/roof painting transformation after.jpg", popular: false },
    { name: "Soft Washing", description: "Gentle washing with controlled chemicals for sensitive surfaces.", features: ["Low pressure", "Biodegradable agents", "Ideal for certain finishes"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Gutter Cleaning", description: "Cleaning of gutters and downpipes for correct flow.", features: ["Leaf removal", "Joint checking", "Flow testing"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: false },
    { name: "Chemical Treatment", description: "Anti-algae treatment for longer-lasting results.", features: ["Targeted application", "Runoff control", "Sustained results"], image: "/images/complete-roof-replacement-after.jpg", popular: false }
  ];

  const benefits = [
    { icon: Sparkles, title: "Improved Appearance", description: "The roof looks renewed and enhances facade appeal." },
    { icon: Shield, title: "Extended Roof Life", description: "Removing organics prevents moisture retention and damage." },
    { icon: Star, title: "Prevent Damage", description: "Avoids leaks from accumulation and blockages." },
    { icon: DollarSign, title: "Increase Property Value", description: "A clean roof improves quality perception." },
    { icon: Droplets, title: "Remove Organic Growth", description: "Treatments that stop moss, algae and lichens." },
    { icon: Award, title: "Prepare for Painting", description: "Ideal base for repainting or subsequent sealing." }
  ];

  const process = [
    { step: "01", title: "Initial Assessment", description: "Substrate evaluation and selection of appropriate method." },
    { step: "02", title: "Debris Removal", description: "Removal of accumulated leaves and branches." },
    { step: "03", title: "Pressure Cleaning", description: "Controlled washing adjusted to the surface." },
    { step: "04", title: "Moss/Algae Treatment", description: "Application of agents to stop regrowth." },
    { step: "05", title: "Gutter Cleaning", description: "Gutter cleaning and downpipe verification." },
    { step: "06", title: "Rinse & Inspect", description: "Rinse, review and touch-ups if needed." },
    { step: "07", title: "Disposal", description: "Proper disposal of waste and sludge." },
    { step: "08", title: "Maintenance Advice", description: "Recommendations to maintain the results." }
  ];

  const maintenanceTips = [
    { title: "Regular Rinse", description: "Periodic gentle rinses in areas with dust/salt spray.", frequency: "Quarterly" },
    { title: "Gutter Hygiene", description: "Clean gutters to avoid stains and overflows.", frequency: "Every 6 months" },
    { title: "Tree Trimming", description: "Reduce shade and leaf fall on the roof.", frequency: "As needed" },
    { title: "Spot Treatments", description: "Apply anti-algae to initial areas.", frequency: "When they appear" }
  ];

  const faqItems = [
    { question: "Does pressure washing damage the roof?", answer: "We use pressure and nozzles appropriate to each material to protect the surface. On sensitive substrates we use soft washing." },
    { question: "How long does the result last?", answer: "Depends on the environment (trees, coastline). With chemical treatment, the cleaning is significantly prolonged." },
    { question: "Is it safe for the garden?", answer: "We protect green areas and use biodegradable and controlled products." },
    { question: "Can you clean gutters too?", answer: "Yes, we integrate gutter cleaning and test downpipe flow." },
    { question: "Do you prepare for painting?", answer: "Yes, a thorough clean is the first step for successful repainting." }
  ];

  const costFactors = [
    "Roof size and access",
    "Type of dirt and level of organic growth",
    "Method (pressure vs soft wash) and chemicals",
    "Height and safety (harnesses/scaffolding)",
    "Gutter and downpipe condition",
    "Distance and logistics"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Cleaning Newcastle - Professional Pressure Cleaning"
        description="Professional roof cleaning in Newcastle: controlled pressure, moss removal and anti-algae treatment. (02) 4089 4613."
        keywords="roof cleaning newcastle, pressure washing roofs, moss removal roof, soft washing roof"
        ogTitle="Roof Cleaning Newcastle - Professional Pressure Cleaning"
        ogDescription="Roof cleaning, organic removal and painting preparation in Newcastle."
        ogImage="/images/roof-restoration-project-after.jpg"
        schemaType="Service"
        service={"roof-cleaning" as any}
        location="newcastle"
        customName="Roof Cleaning Newcastle"
        customDescription="Pressure cleaning, soft wash and anti-algae treatment for roofs in Newcastle"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Roof Cleaning Newcastle - Professional Pressure Cleaning</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">We remove dirt and organics with safe methods so your roof recovers its appearance and performance.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Book a Roof Clean <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
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
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Safe cleaning with standards to protect your roof and environment.</p>
          </div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Professional Roof Cleaning Services
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  A clean roof isn't just about appearances—removing moss, lichen, and organic growth prevents long-term damage and extends your roof's lifespan. Our professional cleaning service uses high-pressure washing techniques combined with specialized treatments to restore your roof's original appearance.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Newcastle's coastal climate creates ideal conditions for moss and algae growth, which can lift tiles and trap moisture against your roof. Regular cleaning prevents this damage while dramatically improving your property's curb appeal and potentially increasing its market value.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/roof-restoration-project-after.jpg"
                  alt="Professional roof cleaning Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof painting transformation after.jpg"
                  alt="Roof moss removal Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Safe & Effective Cleaning Methods
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  We use proven soft-washing and pressure cleaning techniques that remove growth without damaging your roof surface. Our biodegradable treatments kill spores at the root, providing longer-lasting results than simple pressure washing alone.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  The cleaning process includes gutter clearing and downpipe flushing to ensure complete water flow. We can also apply protective treatments that inhibit future growth, keeping your roof cleaner for longer between maintenance visits.
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Cleaning Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Methods adapted to each material and dirt level.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Roof Cleaning Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Planned steps for clean and consistent results.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Cleaning Costs in Newcastle</h2>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>What determines the price of professional roof cleaning.</p>
              <div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div>
              <Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button>
            </div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Basic Wash</span><span className="font-semibold">Basic</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Deep Clean</span><span className="font-semibold">With treatment</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Gutter + Roof</span><span className="font-semibold">Combined package</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Soft Wash</span><span className="font-semibold">Sensitive substrates</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Subject to height, access and dirt level.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Best Practices</h3><p className="text-sm" style={{ color: '#666666' }}>We protect green areas, control runoff and use chemicals compatible with the environment.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Cleaning & Care Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Keep your roof clean longer with these tips.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Roof Cleaning</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Local experience and safe processes for your home.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: Sparkles, title: "Uniform Finish", description: "Homogeneous coverage without marks." },
            { icon: Shield, title: "Substrate Care", description: "Method compatible with your material." },
            { icon: CheckCircle, title: "Safety", description: "Height and electricity controlled." },
            { icon: Star, title: "Detail", description: "Finishes and difficult areas well resolved." },
            { icon: Droplets, title: "Safe Chemicals", description: "Biodegradable and precise dosing." },
            { icon: Clock, title: "Planning", description: "Times that minimize disruption." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Cleaning FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Frequently asked questions about cleaning and treatments.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Complementary services for your roof.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Painting", link: "/roof-painting", description: "Painting and membranes" },
            { name: "Roof Repairs", link: "/roof-repairs", description: "Leaks and damage" },
            { name: "Gutter Repairs", link: "/gutter-repairs", description: "Gutters and downpipes" },
            { name: "Roof Inspections", link: "/roof-inspections", description: "Reports and diagnosis" }
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
  path: "/roof-cleaning/",
  element: <RoofCleaningPage />,
  handle: {
    title: "Roof Cleaning Newcastle - Professional Pressure Cleaning",
    meta: [
      { name: "description", content: "Professional roof cleaning in Newcastle: controlled pressure, moss removal and anti-algae treatment. (02) 4089 4613." },
      { name: "keywords", content: "roof cleaning newcastle, pressure washing roofs, moss removal roof, soft washing roof" }
    ]
  }
};

export default RoofCleaningPage;


