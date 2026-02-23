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

const EmergencyRoofRepairsPage = () => {
  const types = [
    {
      name: "Storm Damage",
      description: "Urgent repairs after severe weather",
      features: ["24/7 response", "Emergency tarping", "Insurance assistance"],
      image: "/images/emergency-roof-repairs-1.jpg",
      popular: true
    },
    {
      name: "Active Leak Repairs",
      description: "Stop leaks immediately to prevent water damage",
      features: ["Fast response", "Water damage prevention", "Temporary & permanent fixes"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Tree Damage",
      description: "Emergency repairs from fallen branches and trees",
      features: ["Debris removal", "Structural assessment", "Complete restoration"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: false
    },
    {
      name: "Wind Damage",
      description: "Repairs for lifted tiles and blown-off roofing",
      features: ["Secure loose materials", "Replace damaged sections", "Weather protection"],
      image: "/images/emergency-roof-repairs-before.jpg",
      popular: false
    },
    {
      name: "Structural Damage",
      description: "Critical repairs for major roof damage",
      features: ["Safety assessment", "Emergency support", "Permanent solutions"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock service, 365 days a year" },
    { icon: ArrowRight, title: "Rapid Response", description: "Typically on-site within 1-2 hours" },
    { icon: Shield, title: "Storm Specialists", description: "Experienced with severe weather damage" },
    { icon: CheckCircle, title: "Emergency Tarping", description: "Immediate protection to prevent further damage" },
    { icon: Award, title: "Insurance Claims", description: "Assistance with insurance documentation" },
    { icon: Star, title: "Permanent Repairs", description: "Not just temporary fixes, proper repairs" }
  ];

  const process = [
    { step: "01", title: "Emergency Call", description: "Contact us 24/7 for immediate assistance" },
    { step: "02", title: "Rapid Dispatch", description: "Team dispatched within minutes of your call" },
    { step: "03", title: "On-Site Assessment", description: "Quick evaluation of damage and safety" },
    { step: "04", title: "Emergency Protection", description: "Tarping or temporary repairs to prevent further damage" },
    { step: "05", title: "Photo Documentation", description: "Complete documentation for insurance claims" },
    { step: "06", title: "Detailed Quote", description: "Transparent pricing for permanent repairs" },
    { step: "07", title: "Permanent Repairs", description: "Quality repairs to restore full protection" },
    { step: "08", title: "Follow-Up", description: "Ensure repairs are holding and you're satisfied" }
  ];

  const maintenanceTips = [
    { title: "Pre-Storm Check", description: "Inspect roof before severe weather forecasts", frequency: "Before storms" },
    { title: "Trim Trees", description: "Remove overhanging branches before storms", frequency: "Seasonally" },
    { title: "Emergency Contact", description: "Save our number for urgent situations", frequency: "Keep handy" },
    { title: "Insurance Ready", description: "Know your policy coverage for roof damage", frequency: "Review annually" }
  ];

  const faqItems = [
    { question: "How fast can you respond to emergencies?", answer: "We typically respond within 1-2 hours for genuine emergencies across Newcastle. Our team is on standby 24/7 ready to help when you need us most." },
    { question: "What areas do you cover for emergency repairs?", answer: "We provide 24/7 emergency service throughout Newcastle, Lake Macquarie, Port Stephens, and the broader Hunter Region. Distance is never a barrier in emergencies." },
    { question: "Do you help with insurance claims?", answer: "Yes, we document all damage with photos, provide detailed reports, and work directly with insurance assessors to ensure you get fair coverage for repairs." },
    { question: "What happens if repairs can't be done immediately?", answer: "We provide emergency tarping or temporary weatherproofing to protect your property until permanent repairs can be completed safely and properly." },
    { question: "Do you charge extra for after-hours service?", answer: "While there may be a small after-hours callout fee, we keep emergency pricing fair and transparent. Your safety and property protection are our priority." }
  ];

  const costFactors = [
    "Time of day (after-hours may apply)",
    "Extent of damage",
    "Emergency tarping requirements",
    "Materials needed for repair",
    "Accessibility and safety requirements",
    "Disposal of damaged materials"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Emergency Roof Repairs Newcastle - 24/7 Immediate Response"
        description="24/7 emergency roof repair service in Newcastle. Immediate response for storm damage, leaks, and urgent repairs. Call (02) 4089 4613 now."
        keywords="emergency roof repairs newcastle, 24/7 roof repair, urgent roof repair, storm damage repair, emergency roofer, immediate roof repair"
        ogTitle="Emergency Roof Repairs Newcastle - 24/7 Service"
        ogDescription="Immediate emergency roof repair service. Available 24/7 for urgent repairs in Newcastle. Fast response guaranteed."
        ogImage="/images/emergency-roof-repairs-1.jpg"
        schemaType="Service"
        service="emergency-roof-repairs"
        location="newcastle"
        customName="Emergency Roof Repairs Newcastle"
        customDescription="24/7 emergency roof repair services in Newcastle with immediate response"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Emergency Roof Repairs Newcastle - 24/7 Immediate Response
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              24/7 emergency roof repair service across Newcastle and Hunter Region. Immediate response for storm damage, urgent leaks, and critical roof repairs. Fast, reliable, professional service.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">
                  Call Emergency Line 24/7
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/contact-us">
                  Request Urgent Callback
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
              Why Choose Our Emergency Roofing Team?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              Fast, reliable, and experienced emergency roofers serving Newcastle 24/7.
            </p>
          </div>
          
        {/* Content Blocks with Images */}
        <div className="space-y-20 mb-20">
          {/* Block 1: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Immediate Response When You Need It Most
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Roof emergencies strike without warning—severe storms, fallen trees, or sudden leaks can cause serious damage in hours. Our 24/7 emergency service ensures you get immediate professional assistance, typically arriving on-site within 1-2 hours across Newcastle and surrounding areas.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Our emergency team comes fully equipped with tarps, materials, and tools to provide immediate protection and prevent further water damage. We assess the situation quickly, secure your property, and develop a plan for permanent repairs while working with your insurance company.
              </p>
            </div>
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img 
                src="/images/emergency-roof-repairs-1.jpg"
                alt="24/7 emergency roof repairs Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
              <img 
                src="/images/emergency-roof-repairs-before.jpg"
                alt="Storm damage roof repair Newcastle"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Storm Damage Specialists
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                Newcastle's coastal location means we're no strangers to severe weather. Our team has extensive experience with storm damage repairs, from minor issues to major structural work. We provide comprehensive documentation and photos for insurance claims to help you get the coverage you deserve.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Don't wait for small problems to become disasters. Whether it's a midnight emergency or early morning crisis, one call gets you immediate professional help. Our emergency service has protected countless Newcastle homes from water damage and structural issues.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Emergency Repair Scenarios</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Immediate assistance for all urgent roof emergencies.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Emergency Response Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A rapid, safety-first process to protect your property and restore your roof.
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Emergency Roof Repair Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                We provide fair, transparent pricing even after-hours. We'll secure your property first, then quote permanent repairs.
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
                <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Callout</span><span className="font-semibold">After-hours may apply</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Emergency Tarp</span><span className="font-semibold">Temporary protection</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Permanent Fix</span><span className="font-semibold">Quoted clearly</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*We always prioritize safety and minimizing further damage.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Ready Anytime</h3>
                <p className="text-sm" style={{ color: '#666666' }}>Our team is on standby 24/7 to help you during emergencies.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Emergency Preparedness Tips</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Reduce risk and damage by preparing before severe weather.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Emergency Roof Repairs FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about our 24/7 emergency service.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Follow-up services after emergency stabilization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Standard repair services" },
              { name: "Storm Damage", link: "/roof-repairs#storm-damage", description: "Storm restoration" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Preventive inspections" },
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
  path: "/emergency-roof-repairs/",
  element: <EmergencyRoofRepairsPage />,
  handle: {
    title: "Emergency Roof Repairs Newcastle - 24/7 Immediate Response",
    meta: [
      { name: "description", content: "24/7 emergency roof repair service in Newcastle. Immediate response for storm damage, leaks, and urgent repairs. Call (02) 4089 4613 now." },
      { name: "keywords", content: "emergency roof repairs newcastle, 24/7 roof repair, urgent roof repair, storm damage repair, emergency roofer, immediate roof repair" }
    ]
  }
};

export default EmergencyRoofRepairsPage;


