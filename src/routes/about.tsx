import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import BrandsSlider from "@/components/BrandsSlider";
import ContentBlock from "@/components/ContentBlock";
import Services from "@/components/Services";
import ContentBlock3 from "@/components/ContentBlock3";
import Testimonials from "@/components/Testimonials";
import ReviewsSlider from "@/components/ReviewsSlider";
import MapWithForm from "@/components/MapWithForm";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="About Sydney Roofing & Gutters - Trusted Roofing & Guttering Experts in Sydney"
        description="Learn about Sydney Roofing & Gutters — a trusted team delivering roof repairs, roof restorations, gutter repairs, and gutter cleaning across Sydney. Fast response, clear quotes, quality workmanship."
        keywords="about sydney roofing and gutters, roofing company sydney, guttering services sydney, roof repairs sydney, roof restoration sydney, gutter repair sydney"
        ogTitle="About Sydney Roofing & Gutters - Sydney Roofing & Guttering Specialists"
        ogDescription="Meet Sydney Roofing & Gutters — reliable roof & gutter specialists serving Sydney suburbs with quality workmanship and transparent quotes."
        schemaType="RoofingContractor"
        location="sydney"
        customName="Sydney Roofing & Gutters"
        customDescription="Sydney’s trusted roofing & guttering specialists for repairs, restorations, and ongoing maintenance."
      />

      <Header />

      {/* Hero (background image) */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-roof.webp"
            alt="Sydney Roofing & Gutters hero background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              About Sydney Roofing & Gutters
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Sydney’s reliable roofing & guttering team for repairs, restorations, and maintenance —
              with clear quotes, quality workmanship, and fast response.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#quote">
                <Button size="lg" className="w-full sm:w-auto">
                  Request a Free Quote
                </Button>
              </a>
              <a href="/contact/">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands slider (trust logos) */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <BrandsSlider />
        </div>
      </section>

      {/* Reuse your existing ContentBlock (video + copy) */}
      <ContentBlock />

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

              <div className="space-y-4 leading-relaxed" style={{ color: "#666666" }}>
                <p>
                  Sydney Roofing & Gutters was built around one goal: make it easy for Sydney homeowners,
                  strata, and commercial clients to get reliable roofing and guttering work without the
                  runaround.
                </p>
                <p>
                  From roof leak repairs and restorations to gutter repairs, cleaning, and downpipes, we
                  focus on practical solutions that hold up in real weather — not quick fixes that lead
                  to repeat call-outs.
                </p>
                <p>
                  We take time to inspect properly, explain options clearly, and deliver quality
                  workmanship with a clean finish. If you need a quote, we keep it simple: clear scope,
                  fair pricing, and straightforward communication.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/roofing-service/">
                  <Button size="lg">Explore Roofing Services</Button>
                </a>
                <a href="/guttering-services/">
                  <Button size="lg" variant="secondary">
                    Explore Guttering Services
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/100-satisfaction-guarantee.webp"
                alt="Sydney Roofing & Gutters workmanship and quality guarantee"
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Satisfaction Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#666666" }}>
              The principles that guide every roof and gutter job we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p style={{ color: "#666666" }}>
                  We focus on long-lasting results using proven methods and materials suitable for Sydney conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Communication</h3>
                <p style={{ color: "#666666" }}>
                  Clear recommendations, transparent quotes, and updates throughout the job — no confusion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Responsiveness</h3>
                <p style={{ color: "#666666" }}>
                  We’re quick to inspect, quote, and schedule — especially when leaks or storms hit.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-[#666666]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p style={{ color: "#666666" }}>
                  Honest pricing and practical solutions — we recommend what you need, not what costs more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#666666" }}>
              A practical, professional approach to roofing & guttering across Sydney
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Clear scope & quotes",
                  text: "We explain the problem, what’s required, and the options — then quote clearly with no hidden surprises.",
                },
                {
                  title: "End-to-end roofing & guttering",
                  text: "Repairs, restoration, gutters, downpipes, and ongoing maintenance — handled in one place.",
                },
                {
                  title: "Workmanship that lasts",
                  text: "We prioritise durable fixes and clean finishing so you’re not calling again for the same issue.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p style={{ color: "#666666" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Sydney suburb coverage",
                  text: "We work across Sydney suburbs and help homeowners, strata, and commercial properties get the job done.",
                },
                {
                  title: "Fast turnaround",
                  text: "When leaks or gutter issues appear, speed matters — we aim to respond quickly and schedule efficiently.",
                },
                {
                  title: "Advice you can use",
                  text: "We’ll tell you how to avoid future issues and what to watch for — especially after storms and heavy rain.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p style={{ color: "#666666" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reuse your existing sections/components */}
      <Services />
      <ContentBlock3 />
      <Testimonials />
      <ReviewsSlider />

      <section id="quote">
        <MapWithForm />
      </section>

      <Footer />
    </div>
  );
};

export const route: Route = {
  path: "/about/",
  element: <AboutPage />,
  handle: {
    title: "About Sydney Roofing & Gutters - Trusted Roofing & Guttering Experts in Sydney",
    meta: [
      {
        name: "description",
        content:
          "Learn about Sydney Roofing & Gutters — a trusted team delivering roof repairs, roof restorations, gutter repairs, and gutter cleaning across Sydney. Fast response, clear quotes, quality workmanship.",
      },
      {
        name: "keywords",
        content:
          "about sydney roofing and gutters, roofing company sydney, guttering services sydney, roof repairs sydney, roof restoration sydney, gutter repair sydney",
      },
    ],
  },
};

export default AboutPage;