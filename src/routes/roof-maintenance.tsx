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
import { CheckCircle, ArrowRight, Shield, Clock, Award, Star, DollarSign, Phone, ClipboardCheck, Wrench } from "lucide-react";

const RoofMaintenancePage = () => {
  const types = [
    { name: "Annual Maintenance Plans", description: "Annual programs to preserve your roof in optimal condition.", features: ["Complete checklist", "Photos and report", "Scheduled reminders"], image: "/images/roof-restoration-project-after.jpg", popular: true },
    { name: "Seasonal Inspections", description: "Seasonal reviews before/after periods of rain and winds.", features: ["Minor adjustments", "Damage prevention", "Recommendations"], image: "/images/emergency-roof-repairs-1.jpg", popular: false },
    { name: "Gutter Maintenance", description: "Maintenance of gutters, downpipes and valleys for correct flow.", features: ["Cleaning and testing", "Seals and joints", "Support adjustment"], image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg", popular: false },
    { name: "Tile/Metal Care", description: "Care of tiles/metal: fixings, seals and moving parts.", features: ["Hardware replacement", "Compatible silicone", "Selective lubrication"], image: "/images/roof-repair-and-restoration-1.jpg", popular: false },
    { name: "Preventive Repairs", description: "Timely minor repairs to avoid major failures.", features: ["Tile replacement", "Crack sealing", "Flashing correction"], image: "/images/complete-roof-replacement-after.jpg", popular: false }
  ];

  const benefits = [
    { icon: Star, title: "Extend Roof Life", description: "Extend service life with periodic care." },
    { icon: Shield, title: "Prevent Major Repairs", description: "Act early on small signs." },
    { icon: Award, title: "Maintain Warranties", description: "Meet manufacturer warranty requirements." },
    { icon: Clock, title: "Scheduled Service", description: "Planned visits and automatic reminders." },
    { icon: DollarSign, title: "Cost Savings", description: "Avoid heavy expenses from accumulated failures." },
    { icon: ClipboardCheck, title: "Peace of Mind", description: "Clear report of condition and actions taken." }
  ];

  const process = [
    { step: "01", title: "Initial Inspection", description: "Current condition assessment and critical points." },
    { step: "02", title: "Cleaning", description: "Basic cleaning and clearing of gutters and valleys." },
    { step: "03", title: "Minor Repairs", description: "Timely corrections in seals/tiles/fixings." },
    { step: "04", title: "Gutter Check", description: "Flow testing and support adjustment." },
    { step: "05", title: "Sealant Check", description: "Review/renewal of seals at key points." },
    { step: "06", title: "Documentation", description: "Photographic report and upcoming recommendations." },
    { step: "07", title: "Schedule Next Service", description: "Scheduling of next maintenance." },
    { step: "08", title: "Maintenance Report", description: "Delivery of complete report to client." }
  ];

  const maintenanceTips = [
    { title: "Keep Gutters Clear", description: "Avoid overflows and water backflow.", frequency: "Every 6 months" },
    { title: "Trim Overhanging Trees", description: "Less leaves and branches on the roof.", frequency: "Annually" },
    { title: "Check After Storms", description: "Detect damage after strong winds.", frequency: "When it occurs" },
    { title: "Address Minor Issues", description: "Repair soon to avoid higher costs.", frequency: "As needed" }
  ];

  const faqItems = [
    { question: "What does an annual plan include?", answer: "Inspection, basic cleaning, minor adjustments, photographic report and priority recommendations." },
    { question: "Can you maintain metal and tile roofs?", answer: "Yes, we adapt the plan to the material and manufacturer specifications." },
    { question: "Is maintaining gutters enough?", answer: "It's crucial, but we also review seals, fixings and water entry points." },
    { question: "How long does each visit take?", answer: "Between 1 and 3 hours depending on roof size and condition." },
    { question: "Do you offer reminders?", answer: "Yes, we calendar your next service and send reminders." }
  ];

  const costFactors = [
    "Roof surface area and complexity",
    "Number of critical points and corrections",
    "Access, height and safety requirements",
    "Gutter condition and amount of debris",
    "Plan frequency (annual/seasonal)",
    "Location and logistics"
  ];

  const netlifyAttrs = { netlify: true, 'netlify-honeypot': 'bot-field' } as any;
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Roof Maintenance Newcastle - Keep Your Roof in Peak Condition"
        description="Preventive maintenance programs to extend roof life in Newcastle. (02) 4089 4613."
        keywords="roof maintenance newcastle, roof maintenance plans, gutter maintenance, preventive roof repairs"
        ogTitle="Roof Maintenance Newcastle - Peak Condition"
        ogDescription="Maintenance plans, seasonal inspections and preventive repairs in Newcastle."
        ogImage="/images/roof-restoration-project-after.jpg"
        schemaType="Service"
        service={"roof-maintenance" as any}
        location="newcastle"
        customName="Roof Maintenance Newcastle"
        customDescription="Roof maintenance plans with inspections and preventive adjustments"
      />
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">Roof Maintenance Newcastle - Keep Your Roof in Peak Condition</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">Preventive care, scheduled inspections and timely adjustments to avoid failures and preserve warranties.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group bg-[#2C3E50] text-white hover:bg-white hover:text-[#2C3E50] border-2 border-[#2C3E50] transition-all duration-300" asChild>
                <a href="tel:1300796024">Start a Maintenance Plan <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></a>
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Sydney Roofing & Gutters?</h2><p className="text-base max-w-2xl mx-auto mb-[30px]" style={{ color: '#666666' }}>Maintenance plans tailored to your roof and usage.</p></div>

          {/* Content Blocks with Images */}
          <div className="space-y-20 mb-20">
            {/* Block 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Preventive Roof Maintenance Programs
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  Regular roof maintenance is far more cost-effective than major repairs or premature replacement. Our maintenance programs provide scheduled inspections, cleaning, minor repairs, and professional care that keeps your roof performing optimally year after year.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Newcastle's weather conditions—from harsh summer sun to winter storms—take their toll on roofing materials. Proactive maintenance catches small issues before they escalate, protecting your investment and maintaining your warranty compliance.
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <img 
                  src="/images/roof-repair-and-restoration-1.jpg"
                  alt="Roof maintenance service Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Block 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video relative overflow-hidden rounded-lg lg:order-first">
                <img 
                  src="/images/complete-roof-replacement-after.jpg"
                  alt="Preventive roof care Newcastle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Extend Your Roof's Lifespan
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>
                  A well-maintained roof can last decades longer than a neglected one. Our maintenance service includes gutter cleaning, tile checks, flashing inspections, and minor repairs that prevent water infiltration and structural damage.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  We provide detailed documentation of all work performed, helping you track your roof's condition over time and maintain warranty requirements. Choose from annual, bi-annual, or custom maintenance schedules that suit your property's needs and budget.
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
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Maintenance Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Preventive coverage for all roof types.</p></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">{types.map((type, index) => (<Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40 relative">{type.popular && (<Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>)}<div className="aspect-video relative overflow-hidden"><img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div></div><CardContent className="p-6"><div className="mb-3"><h3 className="text-xl font-semibold text-primary architectural-heading">{type.name}</h3></div><p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>{type.description}</p><ul className="space-y-2">{type.features.map((f, i) => (<li key={i} className="flex items-center text-sm" style={{ color: '#666666' }}><div className="w-1 h-1 bg-accent rounded-full mr-3"></div>{f}</li>))}</ul></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Our Maintenance Process</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Clear routine that leaves your roof ready for the season.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (<Card key={index} className="text-center relative bg-card/50 p-6 rounded-lg border border-border/50 hover:shadow-lg transition-shadow"><div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">{step.step}</div><h3 className="font-semibold text-primary mb-3 leading-tight">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed" style={{ color: '#666666' }}>{step.description}</p></Card>))}</div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div><div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">Roof Maintenance Costs in Newcastle</h2><p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ color: '#666666' }}>What comprises the cost of a maintenance plan.</p><div className="space-y-4 mb-8"><h3 className="text-xl font-semibold text-primary">Cost factors:</h3>{costFactors.map((factor, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{factor}</span></div>))}</div><Button size="lg" variant="architectural" asChild><a href="/contact-us">Get Your Free Quote<ArrowRight className="h-4 w-4 ml-2" /></a></Button></div>
            <div className="space-y-6"><Card className="p-6"><h3 className="text-xl font-bold text-primary mb-4">Average Cost Ranges</h3><div className="space-y-4"><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Annual Plan</span><span className="font-semibold">1 visit/year</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Biannual Plan</span><span className="font-semibold">2 visits/year</span></div><div className="flex justify-between items-center pb-2 border-b border-border"><span className="text-sm" style={{ color: '#666666' }}>Gutter Package</span><span className="font-semibold">Includes gutters</span></div><div className="flex justify-between items-center"><span className="text-sm" style={{ color: '#666666' }}>Custom Plan</span><span className="font-semibold">Adapted to site</span></div></div><p className="text-sm mt-4" style={{ color: '#666666' }}>*Subject to surface area, height and required corrections.</p></Card><Card className="p-6 bg-accent/10 border-accent/20"><h3 className="text-lg font-bold text-primary mb-2">Documentation</h3><p className="text-sm" style={{ color: '#666666' }}>We provide photographic report and suggested plan for the next cycle.</p></Card></div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Maintenance Tips</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Best practices for day-to-day care.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{maintenanceTips.map((tip, index) => (<Card key={index} className="group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="flex justify-between items-start mb-4"><h3 className="text-xl font-bold group-hover:text-primary transition-colors">{tip.title}</h3><Badge variant="outline" className="text-xs">{tip.frequency}</Badge></div><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{tip.description}</p></CardContent></Card>))}</div>
        </div>
      </section>

      {/* Why Choose - Additional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Why Choose Us for Roof Maintenance</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Trust your roof to a team that cares about the details.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{[
            { icon: Wrench, title: "Precise Adjustments", description: "Small corrections that prevent failures." },
            { icon: Shield, title: "Safety", description: "Height protocols and certified equipment." },
            { icon: ClipboardCheck, title: "Clear Report", description: "Photos and priorities by risk." },
            { icon: Star, title: "Compatibility", description: "Materials and seals compatible with substrate." },
            { icon: CheckCircle, title: "Warranties", description: "We preserve manufacturer conditions." },
            { icon: Clock, title: "Punctuality", description: "Planned and on-time visits." }
          ].map((feature, i) => { const IconComponent = feature.icon as any; return (<Card key={i} className="text-center group hover:shadow-lg transition-shadow"><CardContent className="p-6"><div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors"><IconComponent className="h-8 w-8 text-accent-foreground" /></div><h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3><p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{feature.description}</p></CardContent></Card>); })}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Roof Maintenance FAQ</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>Common questions about maintenance plans.</p></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary">{item.question}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed pt-2" style={{ color: '#666666' }}>{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
        </div>
      </section>

      <ServiceAreas />

      {/* Related Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12"><div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div><h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">Related Services</h2><p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>More solutions for your roof.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
            { name: "Roof Cleaning", link: "/roof-cleaning", description: "Cleaning and treatment" },
            { name: "Roof Painting", link: "/roof-painting", description: "Painting and membranes" },
            { name: "Roof Repairs", link: "/roof-repairs", description: "Corrections and sealing" },
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
  path: "/roof-maintenance/",
  element: <RoofMaintenancePage />,
  handle: {
    title: "Roof Maintenance Newcastle - Keep Your Roof in Peak Condition",
    meta: [
      { name: "description", content: "Preventive maintenance programs to extend roof life in Newcastle. (02) 4089 4613." },
      { name: "keywords", content: "roof maintenance newcastle, roof maintenance plans, gutter maintenance, preventive roof repairs" }
    ]
  }
};

export default RoofMaintenancePage;


