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

const RoofRepairsPage = () => {
  const repairTypes = [
    {
      name: "Emergency Leak Repairs",
      description: "Immediate response to stop active leaks and prevent water damage",
      features: ["24/7 availability", "Fast response time", "Temporary & permanent fixes"],
      image: "/images/emergency-roof-repairs-1.jpg",
      popular: true
    },
    {
      name: "Broken Tile Replacement",
      description: "Replace cracked, broken, or missing roof tiles to restore protection",
      features: ["Matching tiles sourced", "Professional installation", "Warranty included"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Storm Damage Repairs",
      description: "Comprehensive repairs after severe weather and storm events",
      features: ["Insurance claims assistance", "Full damage assessment", "Emergency tarping"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: false
    },
    {
      name: "Flashing & Gutter Repairs",
      description: "Fix leaking flashing, valleys, and gutter connections",
      features: ["Leak detection", "Metal work repairs", "Waterproofing"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    },
    {
      name: "Re-pointing & Re-bedding",
      description: "Restore ridge caps and tile mortar for long-lasting protection",
      features: ["Cement mortar work", "Ridge cap repairs", "Extended roof life"],
      image: "/images/roof painting transformation after.jpg",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Available around the clock for urgent roof repairs. Fast response times for emergency situations across Newcastle."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed roofing contractors with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Award,
      title: "Quality Workmanship",
      description: "Expert roof repairs using premium materials and proven techniques. All work backed by comprehensive warranties."
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Quick assessment and repair scheduling. Same-day service available for emergency roof repairs."
    },
    {
      icon: Star,
      title: "All Roof Types",
      description: "Experienced with metal, tile, Colorbond, and all roofing materials. We repair what others can't."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Transparent, competitive pricing with detailed quotes. No hidden fees or surprise charges."
    }
  ];

  const repairProcess = [
    { step: "01", title: "Emergency Call", description: "Contact us 24/7 for immediate roof repairs assistance" },
    { step: "02", title: "Rapid Assessment", description: "On-site inspection to diagnose the problem and assess damage" },
    { step: "03", title: "Detailed Quote", description: "Transparent pricing with no hidden costs or surprises" },
    { step: "04", title: "Temporary Protection", description: "Emergency tarping if needed to prevent further damage" },
    { step: "05", title: "Material Sourcing", description: "Quality materials ordered to match your existing roof" },
    { step: "06", title: "Professional Repair", description: "Expert repair work by licensed roofing contractors" },
    { step: "07", title: "Quality Inspection", description: "Thorough check to ensure repair meets our standards" },
    { step: "08", title: "Warranty Provided", description: "Comprehensive warranty on all repair workmanship" }
  ];

  const maintenanceTips = [
    { title: "Regular Inspections", description: "Annual roof inspections to catch problems early", frequency: "Annually" },
    { title: "Gutter Cleaning", description: "Keep gutters clear to prevent water backup and leaks", frequency: "Every 6 months" },
    { title: "Trim Overhanging Branches", description: "Prevent damage from falling branches and debris accumulation", frequency: "As needed" },
    { title: "Prompt Repairs", description: "Address small issues immediately before they become major problems", frequency: "As needed" }
  ];

  const faqItems = [
    {
      question: "How quickly can you respond to emergency repairs?",
      answer: "We offer 24/7 emergency service across Newcastle with typical response times of 1-2 hours for urgent situations. Our team is always ready to provide immediate assistance for roof leaks and storm damage."
    },
    {
      question: "What types of roof repairs do you do?",
      answer: "We handle all roof repairs including leak detection, broken tile replacement, flashing repairs, storm damage, gutter repairs, re-pointing, re-bedding, and emergency tarping. We work with all roof types including metal, tile, and Colorbond."
    },
    {
      question: "How much do roof repairs cost in Newcastle?",
      answer: "Costs vary based on damage extent and materials needed. Minor repairs typically start from a few hundred dollars, while major repairs may cost more. We provide transparent, detailed quotes before starting any work with no hidden fees."
    },
    {
      question: "Do you provide warranties on repairs?",
      answer: "Yes, all our roof repairs come with comprehensive warranties covering both workmanship and materials. Warranty periods vary based on the type of repair, and we'll provide full details in your quote."
    },
    {
      question: "Can you repair all roof types?",
      answer: "Absolutely. Our licensed roofers are experienced with all roofing materials including Colorbond, metal roofing, concrete tiles, terracotta tiles, and composite materials. No job is too complex for our team."
    }
  ];

  const costFactors = [
    "Extent and type of damage",
    "Roof material and accessibility",
    "Emergency vs scheduled repairs",
    "Materials required for repair",
    "Height and safety requirements",
    "Disposal of damaged materials"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Repairs Newcastle - Professional & Fast Service | 24/7"
        description="Expert roof repair services in Newcastle. Fast response, quality workmanship, 24/7 emergency repairs. Call (02) 4089 4613 for immediate assistance."
        keywords="roof repairs newcastle, emergency roof repair, roof leak repair, broken roof tiles, storm damage repair, roof maintenance newcastle"
        ogTitle="Roof Repairs Newcastle - Professional & Fast"
        ogDescription="Expert roof repairs in Newcastle. 24/7 emergency service, fast response, quality guaranteed. Call now."
        ogImage="/images/emergency-roof-repairs-1.jpg"
        schemaType="Service"
        service="roof-repairs"
        location="newcastle"
        customName="Roof Repairs Newcastle"
        customDescription="Professional roof repair services in Newcastle with 24/7 emergency response"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Roof Repairs Newcastle - Professional & Fast Service
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Expert roof repairs services in Newcastle. Fast response, quality workmanship, 24/7 emergency repairs available across Newcastle and the Hunter Region.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" 
                asChild
              >
                <a href="tel:1300796024">
                  Get Emergency Repairs Now
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspections">
                  Request Free Inspection
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Roof Repairs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Why Choose Sydney Roofing & Gutters?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[60px]" style={{ color: '#666666' }}>
              Professional, fast, and reliable roof repairs across Newcastle and the Hunter Region, 24/7.
            </p>
          </div>
          
        {/* Content Blocks with Images */}
        <div className="space-y-20 mb-20">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Expert Roof Repairs Across Newcastle
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Our licensed roofing contractors bring years of experience to every repair job across Newcastle and the Hunter Region. From minor tile replacements to major storm damage repairs, we handle all types of roofing work with precision and care.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                We understand that roof damage can be stressful, which is why we prioritize fast response times and clear communication throughout the repair process. Our team uses only premium materials and proven techniques to ensure your roof repairs stand the test of time.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src="/images/roof-repair-and-restoration-1.jpg"
                alt="Professional roof repairs in Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
              <img 
                src="/images/emergency-roof-repairs-1.jpg"
                alt="24/7 emergency roof repair service Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                24/7 Emergency Service You Can Trust
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Roof emergencies don't wait for business hours, and neither do we. Our 24/7 emergency service ensures you get immediate assistance when you need it most. Whether it's a leak during a storm or sudden damage from fallen branches, we're ready to respond.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                With typical response times of 1-2 hours for urgent situations, our emergency team arrives equipped to provide temporary protection and permanent solutions. We work with insurance companies and provide detailed documentation to make your claims process as smooth as possible.
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

      {/* Types of Roof Repairs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Types of Roof Repairs We Perform
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Comprehensive roof repairs services for all roof types across Newcastle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {repairTypes.map((type, index) => (
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

      {/* Repair Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Our Roof Repairs Process
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A clear, efficient process to restore your roof quickly and safely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((process, index) => (
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

      {/* Roof Repair Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">
                Roof Repairs Costs in Newcastle
              </h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                Understanding the factors that influence your roof repairs investment helps you make informed decisions about your property.
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
                <h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm" style={{ color: '#666666' }}>Minor Repairs</span>
                    <span className="font-semibold">Small leaks, broken tiles</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm" style={{ color: '#666666' }}>Medium Repairs</span>
                    <span className="font-semibold">Multiple tiles, flashing work</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border">
                    <span className="text-sm" style={{ color: '#666666' }}>Major Repairs</span>
                    <span className="font-semibold">Storm damage, structural work</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: '#666666' }}>Emergency Service</span>
                    <span className="font-semibold">24/7 urgent response available</span>
                  </div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>
                  *Final costs depend on specific damage, materials, and access conditions.
                </p>
              </Card>
              
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Free Quote Guarantee</h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  Get a detailed, no-obligation quote. Our transparent pricing includes all costs with no hidden fees.
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
              Roof Maintenance Tips
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Keep your roof in top condition and prevent costly damage with proactive maintenance.
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

      {/* Why Choose Sydney Roofing & Gutters - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
              Why Choose Sydney Roofing & Gutters for Roof Repairs
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Experience the difference that professional expertise and reliable service make for your roof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Professional Repairs", description: "Licensed roofers ensuring high-standard repair outcomes every time." },
              { icon: Shield, title: "Quality Materials", description: "Premium materials selected for Newcastle's conditions and durability." },
              { icon: Users, title: "Comprehensive Warranty", description: "Workmanship warranties provided for added peace of mind." },
              { icon: Star, title: "Local Experience", description: "Deep knowledge of Newcastle & Hunter Region roof types and weather." },
              { icon: CheckCircle, title: "Safety Compliance", description: "Strict adherence to safety standards and height regulations." },
              { icon: Clock, title: "Fast Response", description: "Efficient scheduling and rapid emergency response 24/7." }
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
              Roof Repairs FAQ
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Answers to common questions about our roof repairs services in Newcastle.
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
              Explore our complete range of roofing solutions and related services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Replacement", link: "/roof-replacement", description: "Complete roof replacement services" },
              { name: "Roof Restoration", link: "/roof-restoration", description: "Restore your roof to like new" },
              { name: "Emergency Repairs", link: "/emergency-roof-repairs", description: "24/7 urgent service" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Professional assessments" }
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
  path: "/roof-repairs/",
  element: <RoofRepairsPage />,
  handle: {
    title: "Roof Repairs Newcastle - Professional & Fast Service | 24/7",
    meta: [
      { name: "description", content: "Expert roof repair services in Newcastle. Fast response, quality workmanship, 24/7 emergency repairs. Call (02) 4089 4613 for immediate assistance." },
      { name: "keywords", content: "roof repairs newcastle, emergency roof repair, roof leak repair, broken roof tiles, storm damage repair, roof maintenance newcastle" }
    ]
  }
};

export default RoofRepairsPage;



