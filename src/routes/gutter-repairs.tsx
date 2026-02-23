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

const GutterRepairsPage = () => {
  const types = [
    {
      name: "Gutter Repairs",
      description: "Fix leaks, holes, and damaged sections",
      features: ["Leak sealing", "Bracket replacement", "Joint repairs"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: true
    },
    {
      name: "Gutter Replacement",
      description: "Complete gutter system installation",
      features: ["New Colorbond gutters", "Custom sizing", "Professional installation"],
      image: "/images/complete-roof-replacement-after.jpg",
      popular: false
    },
    {
      name: "Downpipe Services",
      description: "Downpipe repairs and replacement",
      features: ["Unblock pipes", "Replace damaged sections", "Add drainage points"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Gutter Cleaning",
      description: "Professional cleaning and maintenance",
      features: ["Remove debris", "Check for damage", "Prevent blockages"],
      image: "/images/emergency-roof-repairs-before.jpg",
      popular: false
    },
    {
      name: "Gutter Guards",
      description: "Leaf guard installation systems",
      features: ["Prevent blockages", "Reduce maintenance", "Multiple styles"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Shield, title: "Prevent Water Damage", description: "Protect foundations, walls, and landscaping" },
    { icon: Star, title: "Quality Materials", description: "Premium Colorbond and aluminum gutters" },
    { icon: Award, title: "Expert Installation", description: "Precise fall and proper fastening techniques" },
    { icon: CheckCircle, title: "Leaf Guard Options", description: "Gutter guard installation to prevent blockages" },
    { icon: Clock, title: "Color Matching", description: "Match existing or roof colors perfectly" },
    { icon: Users, title: "Full Service", description: "Repairs, replacement, cleaning, and maintenance" }
  ];

  const process = [
    { step: "01", title: "Initial Assessment", description: "Inspect gutters and identify issues" },
    { step: "02", title: "Measure & Quote", description: "Accurate measurements and transparent pricing" },
    { step: "03", title: "Material Selection", description: "Choose gutter type, size, and color" },
    { step: "04", title: "Schedule Work", description: "Book convenient installation time" },
    { step: "05", title: "Old Gutter Removal", description: "Safe removal of damaged guttering (if replacing)" },
    { step: "06", title: "Expert Installation", description: "Professional fitting with proper fall" },
    { step: "07", title: "Downpipe Connection", description: "Ensure proper drainage and flow" },
    { step: "08", title: "Final Testing", description: "Water test to verify proper function" }
  ];

  const maintenanceTips = [
    { title: "Regular Cleaning", description: "Clean gutters twice yearly", frequency: "Every 6 months" },
    { title: "Check After Storms", description: "Inspect for damage after severe weather", frequency: "After storms" },
    { title: "Trim Overhanging Trees", description: "Reduce leaf litter and debris", frequency: "Seasonally" },
    { title: "Inspect Brackets", description: "Ensure gutters are securely fastened", frequency: "Annually" }
  ];

  const faqItems = [
    { question: "Do you repair all gutter types?", answer: "Yes, we repair and replace all gutter profiles including Colorbond, aluminum, and custom sizes." },
    { question: "How do I know if my gutters need replacing?", answer: "If there are frequent leaks, sagging sections, rust-through, or poor drainage, replacement may be more cost-effective than patch repairs." },
    { question: "Can you match my roof and fascia colors?", answer: "We color-match to your existing roof or fascia, with a wide range of Colorbond colors available." },
    { question: "Do you install gutter guards?", answer: "Yes, we supply and install several gutter guard systems to reduce maintenance and prevent blockages." },
    { question: "How often should gutters be cleaned?", answer: "We recommend twice a year, and more frequently if you have overhanging trees or after major storms." }
  ];

  const costFactors = [
    "Linear meters of guttering",
    "Gutter material and profile",
    "Number of downpipes needed",
    "Height and accessibility",
    "Removal of old gutters",
    "Gutter guard additions"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Gutter Repairs & Replacement Newcastle - Expert Service"
        description="Gutter repair and replacement services in Newcastle. Fix leaks, blockages, and damaged gutters. Quality workmanship. Call (02) 4089 4613."
        keywords="gutter repairs newcastle, gutter replacement, gutter installation, gutter cleaning, downpipe repair, gutter maintenance newcastle"
        ogTitle="Gutter Repairs & Replacement Newcastle"
        ogDescription="Professional gutter repair and replacement services. Protect your home from water damage with quality gutters."
        ogImage="/images/re-roof-gutter-replacing-wall-cladding-1.jpg"
        schemaType="Service"
        service="gutter-repairs"
        location="newcastle"
        customName="Gutter Repairs Newcastle"
        customDescription="Professional gutter repair and replacement services in Newcastle, NSW"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Gutter Repairs & Replacement Newcastle - Expert Service
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional gutter repair and replacement services in Newcastle. Fix leaks, install new gutters, clean blockages, and protect your property from water damage.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">
                  Get Gutter Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspections">
                  Book Inspection
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
              Why Choose Our Gutter Services?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              Keep water away from your home with reliable gutters and expert installation.
            </p>
          </div>
          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Professional Gutter Repair Solutions
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Damaged or leaking gutters can cause serious problems for your Newcastle property, from foundation issues to internal water damage. Our gutter repair service addresses all common problems including leaks, sagging sections, broken brackets, and blocked downpipes with fast, effective solutions.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  We work with all gutter types and materials, from traditional steel to modern Colorbond systems. Our repairs are designed to last, using quality materials that match your existing gutters and withstand Newcastle's coastal weather conditions.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/re-roof-gutter-replacing-wall-cladding-1.jpg"
                  alt="Professional gutter repair service Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Gutter repair and maintenance Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Prevent Water Damage with Quality Repairs
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Faulty gutters don't just create an eyesore—they threaten your property's structural integrity. Water overflow can damage walls, erode landscaping, and compromise your home's foundation. Our repair service restores proper water flow and protects your investment.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  From simple bracket replacements to complete gutter realignment, we provide solutions that work. All repairs come with workmanship guarantees, and we can advise on whether repair or replacement is the most cost-effective option for your situation.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Gutter Services</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              From repairs to full replacement, we handle all your gutter needs.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Gutter Service Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A clear process to restore or replace your gutters efficiently.
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Gutter Service Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                Pricing varies by length, material, and access. We provide transparent quotes and practical recommendations.
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
                <h3 className="text-xl font-bold text-primary mb-4">Common Solutions</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Repairs</span><span className="font-semibold">Leaks & brackets</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Replacement</span><span className="font-semibold">New system install</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Guards</span><span className="font-semibold">Leaf protection</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*Final costs depend on length, profile, and access conditions.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Long-Term Protection</h3>
                <p className="text-sm" style={{ color: '#666666' }}>Quality gutters protect your home from costly moisture damage.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Gutter Maintenance Tips</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Simple steps to keep your gutters flowing and your home protected.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Gutter Repairs FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about gutter repairs and replacement.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Complementary services to protect your home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Fix roof issues" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Book assessment" },
              { name: "Roof Replacement", link: "/roof-replacement", description: "Full replacement" },
              { name: "Leak Detection", link: "/leak-detection", description: "Find hidden leaks" }
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
  path: "/gutter-repairs/",
  element: <GutterRepairsPage />,
  handle: {
    title: "Gutter Repairs & Replacement Newcastle - Expert Service",
    meta: [
      { name: "description", content: "Gutter repair and replacement services in Newcastle. Fix leaks, blockages, and damaged gutters. Quality workmanship. Call (02) 4089 4613." },
      { name: "keywords", content: "gutter repairs newcastle, gutter replacement, gutter installation, gutter cleaning, downpipe repair, gutter maintenance newcastle" }
    ]
  }
};

export default GutterRepairsPage;


