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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, Users, Search, File } from "lucide-react";

const LeakDetectionPage = () => {
  const types = [
    {
      name: "Thermal Imaging",
      description: "Non-invasive leak detection with thermal cameras",
      features: ["Detect hidden moisture", "No damage", "Fast results"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: true
    },
    {
      name: "Dye & Water Testing",
      description: "Trace leak paths using controlled testing",
      features: ["Source confirmation", "Targeted repairs", "Proven method"],
      image: "/images/emergency-roof-repairs-before.jpg",
      popular: false
    },
    {
      name: "Flashing & Valley Checks",
      description: "Assess common leak points around flashings and valleys",
      features: ["Detail inspection", "Seal integrity", "Metal work review"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      popular: false
    },
    {
      name: "Tile & Ridge Assessment",
      description: "Identify cracked tiles and failed pointing/bedding",
      features: ["Tile integrity", "Ridge pointing", "Bedding condition"],
      image: "/images/roof-repair-and-restoration-1.jpg",
      popular: false
    },
    {
      name: "Gutter & Downpipe Review",
      description: "Find overflow, blockage, and connection leaks",
      features: ["Flow testing", "Joint leaks", "Blockage identification"],
      image: "/images/roof-restoration-project-after.jpg",
      popular: false
    }
  ];

  const benefits = [
    { icon: Search, title: "Pinpoint Accuracy", description: "Find the exact source to avoid guesswork" },
    { icon: DollarSign, title: "Cost Savings", description: "Targeted repairs reduce unnecessary costs" },
    { icon: Shield, title: "Non-Invasive", description: "Minimal disruption—no unnecessary demolition" },
    { icon: Clock, title: "Fast Diagnosis", description: "Rapid assessment to stop damage sooner" },
    { icon: Award, title: "Experienced Team", description: "Specialists in complex and recurring leaks" },
    { icon: File, title: "Clear Reporting", description: "Photo-backed findings and repair plan" }
  ];

  const process = [
    { step: "01", title: "Initial Call", description: "Discuss symptoms and history of the leak" },
    { step: "02", title: "On-Site Assessment", description: "External and internal inspection" },
    { step: "03", title: "Testing", description: "Thermal/dye/water tests as required" },
    { step: "04", title: "Root Cause Found", description: "Identify exact source and pathway" },
    { step: "05", title: "Report & Photos", description: "Documented findings for clarity or insurance" },
    { step: "06", title: "Repair Quote", description: "Clear scope and pricing for fixes" },
    { step: "07", title: "Targeted Repairs", description: "Fix only what’s needed to stop the leak" },
    { step: "08", title: "Verification", description: "Confirm fix with final check" }
  ];

  const maintenanceTips = [
    { title: "Inspect After Rain", description: "Check ceilings and roof space for damp patches", frequency: "After storms" },
    { title: "Clean Gutters", description: "Keep water flowing to avoid overflow leaks", frequency: "Every 6 months" },
    { title: "Seal Checks", description: "Check flashings and penetrations for cracks", frequency: "Annually" },
    { title: "Repair Early", description: "Small leaks escalate quickly—act fast", frequency: "As needed" }
  ];

  const faqItems = [
    { question: "Can you find hidden leaks without removing materials?", answer: "Yes. We use thermal imaging, moisture meters, and controlled testing to locate leaks non-invasively in most cases." },
    { question: "What if the leak only appears sometimes?", answer: "Intermittent leaks are common. We replicate conditions with targeted water testing and review wind-driven entry points." },
    { question: "Do you repair the leak after finding it?", answer: "Yes. We provide a quote for targeted repairs and can proceed promptly to stop further damage." },
    { question: "Is leak detection covered by insurance?", answer: "Policies vary. Our reports and photos support claims, and we can liaise with assessors if needed." },
    { question: "How fast can you attend?", answer: "We offer rapid scheduling and emergency attendance for active leaks." }
  ];

  const costFactors = [
    "Roof complexity and access",
    "Testing methods required",
    "Time on site",
    "Number of suspected areas",
    "Reporting level needed",
    "Urgency (after-hours)"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Leak Detection Newcastle - Find and Fix Roof Leaks"
        description="Professional leak detection in Newcastle. Thermal imaging, water testing, and expert diagnosis to find and fix leaks fast. Call (02) 4089 4613."
        keywords="leak detection newcastle, roof leak detection, thermal imaging roof, water testing roof, find roof leak newcastle"
        ogTitle="Leak Detection Newcastle - Expert Diagnosis"
        ogDescription="Pinpoint roof leak detection with advanced methods. Fast diagnosis and targeted repairs in Newcastle."
        ogImage="/images/emergency-roof-repairs-1.jpg"
        schemaType="Service"
        service="leak-detection"
        location="newcastle"
        customName="Leak Detection Newcastle"
        customDescription="Professional roof leak detection services in Newcastle, NSW"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Leak Detection Newcastle - Find and Fix Roof Leaks
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advanced roof leak detection across Newcastle and the Hunter Region. We pinpoint the source fast and provide targeted, lasting repairs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">
                  Book Leak Detection
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-repairs">
                  Arrange Repairs
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
              Why Choose Our Leak Detection Service?
            </h2>
            <p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>
              Stop guesswork and recurring leaks with precise diagnosis and clear reporting.
            </p>
          </div>
          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Advanced Leak Detection Technology
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Finding the source of a roof leak can be surprisingly difficult—water often travels far from its entry point before becoming visible. Our leak detection service uses thermal imaging cameras and specialized testing methods to pinpoint leaks accurately, saving time and preventing unnecessary repairs.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Whether you're dealing with an obvious leak or mysterious water stains, our systematic approach identifies the problem quickly. We examine all potential entry points including flashing, valleys, penetrations, and tile damage to ensure we find and fix the real cause.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/emergency-roof-repairs-1.jpg"
                  alt="Professional leak detection Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/roof-restoration-project-after.jpg"
                  alt="Roof leak repair Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Permanent Leak Solutions
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Once we've identified your leak's source, we provide comprehensive repair solutions that address not just the symptoms but the underlying cause. Our repairs use premium waterproofing materials and proven techniques to ensure the problem doesn't return.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  We understand how stressful roof leaks can be, which is why we prioritize quick response times and clear communication. Every leak detection service includes a detailed report with photos and repair recommendations, suitable for insurance claims if needed.
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Leak Detection Methods</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Modern techniques to accurately locate leaks with minimal disruption.
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Leak Detection Process</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
              A methodical approach to find the source and fix it right the first time.
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
              <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Leak Detection Costs in Newcastle</h2>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>
                We keep diagnostics efficient and focused. You'll get a clear plan and options for repair.
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
                <h3 className="text-xl font-bold text-primary mb-4">What You Receive</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Diagnosis</span><span className="font-semibold">Root cause</span></div>
                  <div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Report</span><span className="font-semibold">Photos & notes</span></div>
                  <div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Repair Plan</span><span className="font-semibold">Clear scope</span></div>
                </div>
                <p className="text-sm mt-4" style={{ color: '#666666' }}>*If urgent, we can perform temporary mitigation immediately.</p>
              </Card>
              <Card className="p-6 bg-accent/10 border-accent/20">
                <h3 className="text-lg font-bold text-primary mb-2">Stop the Damage</h3>
                <p className="text-sm" style={{ color: '#666666' }}>Early diagnosis prevents mould, ceiling stains, and structural issues.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Leak Prevention Tips</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Proactive maintenance to keep water out and peace of mind in.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Leak Detection FAQ</h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Answers to common questions about diagnosing and fixing roof leaks.</p>
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
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Everything needed to permanently resolve leaks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Roof Repairs", link: "/roof-repairs", description: "Professional repairs" },
              { name: "Gutter Repairs", link: "/gutter-repairs", description: "Drainage fixes" },
              { name: "Roof Inspections", link: "/roof-inspections", description: "Full assessment" },
              { name: "Roof Restoration", link: "/roof-restoration", description: "Rejuvenation" }
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

export const route = {
  path: "/leak-detection/",
  element: <LeakDetectionPage />,
  handle: {
    title: "Leak Detection Newcastle - Find and Fix Roof Leaks",
    meta: [
      { name: "description", content: "Professional leak detection in Newcastle. Thermal imaging, water testing, and expert diagnosis to find and fix leaks fast. Call (02) 4089 4613." },
      { name: "keywords", content: "leak detection newcastle, roof leak detection, thermal imaging roof, water testing roof, find roof leak newcastle" }
    ]
  }
};

export default LeakDetectionPage;


