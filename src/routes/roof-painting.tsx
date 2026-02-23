// route type annotation omitted to avoid TS complaints in certain builds
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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Droplets, SunMedium, PaintBucket } from "lucide-react";

const RoofPaintingPage = () => {
  const paintTypes = [
    {
      name: "Complete Painting",
      description: "Full roof repaint including clean, prime, base and top coats for a uniform, long‑lasting finish.",
      features: ["Full prep & masking", "Premium UV‑stable coatings", "Colour consultancy included"],
      image: "/images/roof painting transformation after.jpg",
      popular: true
    },
    {
      name: "Roof Sealing",
      description: "Clear or tinted sealer to lock down porous surfaces and improve weather resistance.",
      features: ["Deep surface penetration", "Boosts waterproofing", "Ideal pre-paint treatment"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: false
    },
    {
      name: "Colour Change",
      description: "Transform your home with a modern colour matched to fascia, gutters or Colorbond palette.",
      features: ["Wide colour range", "Heat-reflective options", "Neighbourhood/council friendly"],
      image: "/images/complete-roof-replacement-after.jpg",
      popular: false
    },
    {
      name: "Protective Coating",
      description: "High-build elastomeric coatings that bridge hairline cracks and resist harsh Newcastle weather.",
      features: ["Elastomeric membrane", "Salt-mist resilience", "Enhanced durability"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    },
    {
      name: "Membrane Application",
      description: "Roof membrane system for superior film build, colour retention and longevity on aged tiles.",
      features: ["Primer + base + membrane", "High film thickness", "Long service life"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: SunMedium,
      title: "UV Protection",
      description: "Coatings formulated for Australian UV conditions to minimise chalking and fading over time."
    },
    {
      icon: Shield,
      title: "Weatherproofing",
      description: "Seals porous substrates and improves resistance to wind-driven rain across the Hunter Region."
    },
    {
      icon: PaintBucket,
      title: "Colour Refresh",
      description: "Modernise your home’s street appeal with contemporary colours and crisp, even coverage."
    },
    {
      icon: Award,
      title: "Increased Lifespan",
      description: "Quality prep and membranes extend the service life of tiles by protecting the surface matrix."
    },
    {
      icon: Star,
      title: "Energy Efficiency",
      description: "Heat-reflective pigments help reduce roof surface temperatures during summer."
    },
    {
      icon: DollarSign,
      title: "Property Value",
      description: "A professionally finished roof improves perceived quality and valuation at sale."
    }
  ];

  const paintingProcess = [
    { step: "01", title: "Surface Cleaning", description: "Pressure clean to remove dirt, moss and chalked coatings for strong adhesion." },
    { step: "02", title: "Repairs", description: "Replace damaged tiles, re-bed/re-point ridges and correct defects before coating." },
    { step: "03", title: "Priming", description: "Seal and stabilise the surface using substrate-appropriate primers." },
    { step: "04", title: "Base Coat", description: "Uniform first colour coat to build opacity and coverage." },
    { step: "05", title: "Top Coat", description: "Final colour coat for depth, gloss/sheen and UV stability." },
    { step: "06", title: "Sealing", description: "Optional clear sealer or membrane layer depending on system design." },
    { step: "07", title: "Curing", description: "Allow correct cure time based on product data and weather conditions." },
    { step: "08", title: "Inspection", description: "Detailed finish check, touch-ups and clean site handover." }
  ];

  const maintenanceTips = [
    { title: "Gentle Cleaning", description: "Avoid harsh scrubbing; use low-pressure rinse to preserve coating.", frequency: "Annually" },
    { title: "Gutter Care", description: "Keep gutters clear to prevent dirty runoff staining fresh coatings.", frequency: "Every 6 months" },
    { title: "Branch Trimming", description: "Trim overhangs to reduce abrasion and leaf litter.", frequency: "As needed" },
    { title: "Spot Touch-ups", description: "Address chips promptly to protect the substrate and maintain appearance.", frequency: "As needed" }
  ];

  const faqItems = [
    {
      question: "Paint or membrane? Which lasts longer in Newcastle?",
      answer: "High-build membranes offer superior color retention and elasticity for bridging micro-cracks, ideal for aged tiles near the coast. Premium acrylic paint works excellently on substrates in good condition. We recommend based on roof inspection and sun/salt exposure." 
    },
    {
      question: "How long does the roof painting process take?",
      answer: "A typical home is completed in 2–4 days depending on condition, size, weather and curing time between coats. We prioritize safe weather windows to ensure adhesion and finish quality." 
    },
    {
      question: "Do reflective colours really reduce heat?",
      answer: "Yes. Reflective pigments can lower roof surface temperature and assist your home's thermal efficiency, especially during Hunter summers." 
    },
    {
      question: "Do I need council approval to change colour?",
      answer: "Typically not for standard colour changes, but heritage areas or planned unit developments may have local guidelines. We can advise on neighbourhood-compatible options." 
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide workmanship warranty and specify manufacturer timelines per the applied system (paint or membrane). All details are documented in your quote and upon job completion." 
    }
  ];

  const costFactors = [
    "Total roof area and pitch",
    "Substrate condition and amount of prior repairs",
    "System type (acrylic paint vs elastomeric membrane)",
    "Number of coats required and selected colour",
    "Access, height and safety requirements",
    "Weather conditions and curing times"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Painting Newcastle - Professional Roof Coating"
        description="Professional roof painting in Newcastle. Sealing, membranes and colour change with complete preparation. Call (02) 4089 4613."
        keywords="roof painting newcastle, roof coatings, roof membrane, roof sealing, colour change"
        ogTitle="Roof Painting Newcastle - Professional Roof Coating"
        ogDescription="Premium roof painting and coatings in Newcastle. Expert preparation, modern colours and UV protection."
        ogImage="/images/roof painting transformation after.jpg"
        schemaType="Service"
        service={"roof-painting" as any}
        location="newcastle"
        customName="Roof Painting Newcastle"
        customDescription="Roof painting, sealing and membranes with durable finishes in Newcastle and Hunter"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Roof Painting Newcastle - Professional Roof Coating
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Paint and membrane systems for roofs that resist Newcastle's sun, salt and rain. Rigorous preparation, contemporary colours and high-performance finishes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" 
                asChild
              >
                <a href="tel:1300796024">
                  Get a Roof Painting Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspection">
                  Book an Inspection
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Roof Painting */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Why Choose Sydney Roofing & Gutters?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              Roof painting with preparation and application standards tailored for the Hunter climate.
            </p>
          </div>
          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Transform Your Roof with Professional Painting
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  A professionally painted roof doesn't just look better—it provides essential protection against Newcastle's harsh sun, coastal salt, and weather extremes. Our roof painting service uses premium, UV-resistant coatings that seal and protect while dramatically improving your property's appearance.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  We offer a complete range of colors to suit any home style, from classic heritage tones to modern contemporary shades. Our preparation process includes thorough cleaning, repairs, and surface treatment to ensure the coating adheres properly and lasts for years.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/roof painting transformation after.jpg"
                  alt="Professional roof painting Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-restoration-project-after.jpg"
                  alt="Roof coating service Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Premium Coatings for Long-Lasting Results
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  The quality of roof coating matters enormously for durability and performance. We use only premium-grade acrylic and membrane coatings specifically designed for Australian conditions, providing superior adhesion, flexibility, and weather resistance.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Our roof painting service includes comprehensive warranties on both materials and workmanship. The investment not only protects your roof but can significantly increase your property's value and curb appeal across Newcastle neighborhoods.
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
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Roof Painting */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Roof Painting & Coating Options
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Systems suitable for concrete, terracotta and painted metal tiles, with contemporary colours and high performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {paintTypes.map((type, index) => (
              <Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">
                {type.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-primary architectural-heading">
                      {type.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>
                    {type.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {type.features.map((feature, fIndex) => (
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

      {/* Painting Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Our Roof Painting Process
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A clear method for a consistent and durable finish, executed by specialized roof painters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paintingProcess.map((process, index) => (
              <Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h3 className="font-semibold text-primary mb-3 leading-tight">{process.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Painting Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">
                Roof Painting Costs in Newcastle
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                Understanding the investment factors helps you choose the right system and plan your project without surprises.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-primary">Factors affecting cost:</h3>
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
                <h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm" style={{ color: '#666666' }}>Small Roofs</span>
                    <span className="font-semibold">Compact homes, minimal repairs</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm" style={{ color: '#666666' }}>Standard Roofs</span>
                    <span className="font-semibold">Medium size, acrylic system</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm" style={{ color: '#666666' }}>Membrane Systems</span>
                    <span className="font-semibold">Higher build and durability</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: '#666666' }}>Colour Change</span>
                    <span className="font-semibold">Includes colour consultation</span>
                  </div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>
                  *Final cost depends on substrate condition, access and chosen system.
                </p>
              </Card>
              
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Warranty & Documentation</h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  We provide specifications of the applied system, technical data sheets and maintenance guidelines to preserve the warranty.
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Roof Coating Care Tips
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Simple tips to maintain the colour and integrity of your new coating for longer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {maintenanceTips.map((tip, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {tip.title}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {tip.frequency}
                    </Badge>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                    {tip.description}
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Why Choose Sydney Roofing & Gutters for Roof Painting
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Meticulous preparation, correct system specification and consistent application ensure lasting results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Professional Application", description: "Specialized roof team with uniform technique and wet film control." },
              { icon: Shield, title: "Quality Systems", description: "Coatings and membranes designed for Australian UV and salt spray." },
              { icon: Droplets, title: "Moisture Control", description: "Scheduling within safe weather windows for optimal curing." },
              { icon: Star, title: "Colour Consultation", description: "Contemporary palettes compatible with Colorbond and existing facades." },
              { icon: CheckCircle, title: "Height Safety", description: "Strict compliance with regulations and temporary anchors when applicable." },
              { icon: Clock, title: "Reliable Timelines", description: "Planning that minimizes disruptions and ensures on-time delivery." }
            ].map((feature, index) => {
              const IconComponent = feature.icon as any;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                      {feature.description}
                    </p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Roof Painting FAQ
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Answers to common questions about roof painting and membranes in Newcastle.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>
                    {item.answer}
                  </AccordionContent>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Related Services
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Explore our complementary roofing services to complete your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Repairs and leak sealing" },
              { name: "Roof Restoration", link: "/roof-restoration", description: "Complete roof restoration" },
              { name: "Roof Inspections", link: "/roof-inspection", description: "Professional reports and assessment" },
              { name: "Gutter Repairs", link: "/gutter-repair", description: "Solutions for gutters and downpipes" }
            ].map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#666666' }}>
                    {service.description}
                  </p>
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

export const route = {
  path: "/roof-painting/",
  element: <RoofPaintingPage />,
  handle: {
    title: "Roof Painting Newcastle - Professional Roof Coating",
    meta: [
      { name: "description", content: "Professional roof painting in Newcastle. Sealing, membranes and colour change with complete preparation. Call (02) 4089 4613." },
      { name: "keywords", content: "roof painting newcastle, roof coating, roof membrane, colour change, roof sealing" }
    ]
  }
};

export default RoofPaintingPage;


