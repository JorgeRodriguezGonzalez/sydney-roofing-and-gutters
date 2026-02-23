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

const RoofInspectionsPage = () => {
  const types = [
    {
      name: "Pre-Purchase Inspection",
      description: "Essential for property buyers",
      features: ["Detailed condition report", "Cost estimates", "Investment protection"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: true
    },
    {
      name: "Annual Maintenance",
      description: "Regular check-ups to maintain roof health",
      features: ["Preventive care", "Maintenance scheduling", "Warranty compliance"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Storm Damage Assessment",
      description: "Post-storm inspection for insurance claims",
      features: ["Photo documentation", "Insurance reports", "Damage evaluation"],
      image: "/images/emergency-roof-repairs-before.jpg",
      popular: false
    },
    {
      name: "Pre-Sale Inspection",
      description: "Identify issues before listing property",
      features: ["Increase property value", "Buyer confidence", "Repair priorities"],
      image: "/images/complete-roof-replacement-after.jpg",
      popular: false
    },
    {
      name: "Leak Investigation",
      description: "Find the source of mysterious leaks",
      features: ["Thermal imaging", "Water testing", "Detailed diagnosis"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Shield, title: "Licensed Inspectors", description: "Qualified roofing professionals conduct all inspections" },
    { icon: Award, title: "Detailed Reports", description: "Comprehensive reports with photos and recommendations" },
    { icon: Star, title: "Early Detection", description: "Identify small issues before they become expensive" },
    { icon: CheckCircle, title: "No Obligation", description: "Free inspections with no pressure to proceed" },
    { icon: Users, title: "All Roof Types", description: "Experience with every roofing material and style" },
    { icon: Award, title: "Insurance Approved", description: "Reports accepted by insurance companies" }
  ];

  const process = [
    { step: "01", title: "Schedule Inspection", description: "Book your convenient inspection time" },
    { step: "02", title: "External Assessment", description: "Comprehensive external roof examination" },
    { step: "03", title: "Internal Check", description: "Inspect ceiling space for hidden issues" },
    { step: "04", title: "Thermal Imaging", description: "Advanced leak detection technology (if needed)" },
    { step: "05", title: "Photo Documentation", description: "Detailed photographic evidence" },
    { step: "06", title: "Structural Review", description: "Assess structural integrity and supports" },
    { step: "07", title: "Written Report", description: "Comprehensive report with findings" },
    { step: "08", title: "Recommendations", description: "Expert advice on repairs or maintenance" }
  ];

  const maintenanceTips = [
    { title: "Annual Inspections", description: "Professional check-up every year", frequency: "Annually" },
    { title: "Post-Storm Checks", description: "Inspect after severe weather events", frequency: "After storms" },
    { title: "Seasonal Reviews", description: "Check before and after winter", frequency: "Twice yearly" },
    { title: "Document History", description: "Keep all inspection reports on file", frequency: "Ongoing" }
  ];

  const faqItems = [
    { question: "How long does a roof inspection take?", answer: "Most residential roof inspections take 45-90 minutes depending on size and complexity. We're thorough but efficient to minimize disruption." },
    { question: "What's included in the inspection report?", answer: "Our reports include photos, detailed findings, current condition assessment, repair recommendations, cost estimates, and expected remaining roof life." },
    { question: "Do you inspect tile and metal roofs?", answer: "Yes, our licensed inspectors are experienced with all roofing types including tiles, metal, Colorbond, and composite materials." },
    { question: "Can I use your report for insurance claims?", answer: "Absolutely. Our inspection reports are professional, detailed, and accepted by insurance companies throughout Australia." },
    { question: "Is the inspection really free?", answer: "Yes, we provide free inspections with no obligation. If repairs are needed and you choose us, we'll provide competitive quotes." }
  ];

  const costFactors = [
    "Inspection type and complexity",
    "Roof size and accessibility",
    "Additional services (thermal imaging)",
    "Report detail level required",
    "Urgency of inspection",
    "Travel distance"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Inspections Newcastle - Professional Roof Assessment"
        description="Professional roof inspection services in Newcastle. Detailed assessment, leak detection, and maintenance recommendations. Call (02) 4089 4613."
        keywords="roof inspections newcastle, roof assessment, roof check, pre-purchase roof inspection, roof condition report, roof maintenance inspection"
        ogTitle="Roof Inspections Newcastle - Professional Assessment"
        ogDescription="Thorough roof inspections and assessments. Identify problems early and save on costly repairs."
        ogImage="/images/roof-repair-and-restoration-1.jpg"
        schemaType="Service"
        service="roof-inspections"
        location="newcastle"
        customName="Roof Inspections Newcastle"
        customDescription="Professional roof inspection services in Newcastle, NSW"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Roof Inspections Newcastle - Professional Roof Assessment
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional roof inspection services across Newcastle and Hunter Region. Comprehensive assessments, detailed reports, and expert recommendations for maintenance or repairs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">
                  Book Free Inspection
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="#inspection-types">
                  Learn More
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
              Why Choose Our Roof Inspection Service?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              Thorough, no-obligation inspections by licensed professionals with clear reporting.
            </p>
          </div>
          
        {/* Content Blocks with Images */}
        <div className="space-y-20 mb-20">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Comprehensive Roof Assessments
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Regular roof inspections are essential for maintaining your property and avoiding costly surprises. Our licensed inspectors provide detailed assessments covering every aspect of your roof's condition, from structural integrity to minor wear and tear that could become major problems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Using the latest inspection technology including thermal imaging for leak detection, we identify issues invisible to the naked eye. Each inspection includes comprehensive photo documentation and a detailed written report suitable for insurance claims, property sales, or pre-purchase evaluations.
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
                alt="Roof inspection report Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Protect Your Investment
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Whether you're buying a property, selling your home, or simply maintaining your investment, our inspection reports give you the information you need to make informed decisions. We identify current issues, potential problems, and provide clear recommendations with cost estimates.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Our inspections are accepted by insurance companies, real estate agents, and banks throughout Newcastle. With transparent pricing and no-obligation reports, you get professional peace of mind about your roof's condition without pressure to proceed with repairs.
              </p>
            </div>
          </div>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = (benefit.icon as any) || CheckCircle;
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
      <section id="inspection-types" className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Inspection Types</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Choose the inspection that fits your situation; reports suitable for insurance and conveyancing.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Roof Inspection Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A systematic approach to identify issues early and keep your roof in top shape.
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Inspection Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                We offer free inspections with no obligation. If specialized services are required, we'll advise before proceeding.
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
                  Get Your Free Inspection
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Optional Add-ons</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Thermal Imaging</span><span className="font-semibold">Advanced leak finding</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Detailed Insurance Report</span><span className="font-semibold">If required</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Priority Scheduling</span><span className="font-semibold">Urgent cases</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*All add-ons are optional and quoted upfront.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Clear Reporting</h3>
                <p className="text-sm" style={{ color: '#666666' }}>Our reports include photos, condition, and practical recommendations.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Inspection Tips</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>How to get the most from your inspection and ongoing roof care.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Inspections FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about roof inspections in Newcastle.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Next steps after an inspection.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Professional repairs" },
              { name: "Roof Replacement", link: "/roof-replacement", description: "Complete replacement" },
              { name: "Roof Restoration", link: "/roof-restoration", description: "Restoration services" },
              { name: "Leak Detection", link: "/leak-detection", description: "Advanced leak finding" }
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
  path: "/roof-inspections/",
  element: <RoofInspectionsPage />,
  handle: {
    title: "Roof Inspections Newcastle - Professional Roof Assessment",
    meta: [
      { name: "description", content: "Professional roof inspection services in Newcastle. Detailed assessment, leak detection, and maintenance recommendations. Call (02) 4089 4613." },
      { name: "keywords", content: "roof inspections newcastle, roof assessment, roof check, pre-purchase roof inspection, roof condition report, roof maintenance inspection" }
    ]
  }
};

export default RoofInspectionsPage;


