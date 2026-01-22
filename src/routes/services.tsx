import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import ContentBlock3 from "@/components/ContentBlock3";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ReviewsSlider from "@/components/ReviewsSlider";
import MapWithForm from "@/components/MapWithForm";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Wrench, Droplets } from "lucide-react";

type ServiceLink = {
  label: string;
  href: string;
  type: "roofing" | "guttering";
};

const roofingServices: ServiceLink[] = [
  { label: "ROOFING SERVICES", href: "/roofing-service/", type: "roofing" },
  { label: "RESIDENTIAL ROOFING", href: "/residential-roofing/", type: "roofing" },
  { label: "COMMERCIAL ROOFING SERVICES", href: "/commercial-roofing-service/", type: "roofing" },
  { label: "METAL ROOFING", href: "/metal-roofing/", type: "roofing" },
  { label: "METAL RESIDENTIAL ROOFING", href: "/residential-metal-roofing/", type: "roofing" },
  { label: "COMMERCIAL METAL ROOFING", href: "/commercial-roofing-service/", type: "roofing" },
  { label: "DOWNPIPE INSTALLATION", href: "/downpipe-installation/", type: "roofing" },
  { label: "COLORBOND INSTALLATION", href: "/colorbond-installation/", type: "roofing" },
  { label: "ROOF RESTORATION", href: "/roof-restoration/", type: "roofing" },
  { label: "ROOF CLEANING SERVICES", href: "/roof-cleaning-services/", type: "roofing" },
  { label: "RE-ROOFING SYDNEY", href: "/re-roofing-sydney/", type: "roofing" },
  { label: "ROOF PAINTING SYDNEY", href: "/roof-painting-sydney/", type: "roofing" },
  {
    label: "ROOF LEAK DETECTION & REPAIRS",
    href: "/roof-leak-detection-and-repair-sydney/",
    type: "roofing",
  },
];

const gutteringServices: ServiceLink[] = [
  { label: "GUTTERING SERVICES", href: "/guttering-services/", type: "guttering" },
  { label: "GUTTER INSTALLATION", href: "/gutter-installation/", type: "guttering" },
  { label: "GUTTER REPLACEMENT", href: "/gutter-replacement/", type: "guttering" },
  { label: "GUTTER REPAIR", href: "/gutter-repairs/", type: "guttering" },
  { label: "GUTTER CLEANING", href: "/gutter-cleaning/", type: "guttering" },
  { label: "CORRUGATED ROOFING SYDNEY", href: "/corrugated-roofing-sydney/", type: "guttering" },
  { label: "GUTTER PROTECTION", href: "/gutter-protection/", type: "guttering" },
  { label: "ALUMINIUM GUTTER INSTALLATION", href: "/aluminium-gutter-installation/", type: "guttering" },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Roofing & Guttering Services Sydney | Sydney Roofing & Gutters"
        description="Explore Sydney Roofing & Gutters services: roof repairs, restorations, metal roofing, re-roofing, gutter repairs, gutter cleaning, downpipes and more. Get a fast, free quote."
        keywords="roofing services sydney, guttering services sydney, roof repairs sydney, roof restoration sydney, metal roofing sydney, gutter repair sydney, gutter cleaning sydney, downpipe installation"
        ogTitle="Roofing & Guttering Services Sydney | Sydney Roofing & Gutters"
        ogDescription="From roof leak repairs to gutter cleaning—see our full range of Sydney roofing and guttering services and request a free quote."
        schemaType="RoofingContractor"
        location="sydney"
        customName="Sydney Roofing & Gutters"
        customDescription="Sydney roofing & guttering services for homes, strata, and commercial properties."
      />

      <Header />

      {/* Hero (background image) */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-roof.webp"
            alt="Sydney roofing and guttering services"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Roofing &amp; Guttering Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Practical solutions for Sydney properties — from roof leak repairs and restorations to
              gutter installs, cleaning, and downpipes. Clear quotes, quality workmanship, and fast
              scheduling.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#services">
                <Button size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </a>
              <a href="#quote">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Request a Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything you need for a safer, leak-free roof
              </h2>
              <div className="space-y-4 leading-relaxed" style={{ color: "#666666" }}>
                <p>
                  Whether you’re dealing with a persistent leak, storm damage, ageing gutters, or you’re
                  planning a full roof upgrade, we make the process straightforward. We start with an
                  inspection, explain your options, and quote clearly — then complete the work with a
                  clean finish and minimal disruption.
                </p>
                <p>
                  Our team works across Sydney on residential, strata, and commercial properties. If you
                  need urgent help, request a quote and we’ll respond quickly.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#quote">
                  <Button size="lg">Get a Free Quote</Button>
                </a>
                <a href="/contact/">
                  <Button size="lg" variant="secondary">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Clear Scope & Pricing</h3>
                    <p style={{ color: "#666666" }}>
                      We outline what’s required, what’s optional, and what will give you the best long-term result.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Workmanship</h3>
                    <p style={{ color: "#666666" }}>
                      From repairs to restorations, we focus on durable work that prevents repeat issues.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Roof + Gutter Specialists</h3>
                    <p style={{ color: "#666666" }}>
                      We handle roofing and guttering together so your system works properly as a whole.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services lists */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#666666" }}>
              Browse our core roofing and guttering services below. Each service page has more detail and
              helps you understand what’s involved.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Roofing */}
            <div className="bg-background rounded-lg shadow-sm border border-border">
              <div className="p-6 border-b border-border flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Roofing Services</h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {roofingServices.map((s) => (
                    <li key={s.href} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <a
                        href={s.href}
                        className="font-semibold hover:underline"
                        style={{ color: "#666666" }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#quote">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      Request a Quote
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Guttering */}
            <div className="bg-background rounded-lg shadow-sm border border-border">
              <div className="p-6 border-b border-border flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Droplets className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Guttering Services</h3>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {gutteringServices.map((s) => (
                    <li key={s.href} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <a
                        href={s.href}
                        className="font-semibold hover:underline"
                        style={{ color: "#666666" }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#quote">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      Request a Quote
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Extra reassurance */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Repairs & Maintenance",
                text: "Ideal for leaks, rust, broken tiles, damaged flashing, or gutter blockages.",
              },
              {
                title: "Restorations & Upgrades",
                text: "Refresh ageing roofs and improve performance without full replacement when suitable.",
              },
              {
                title: "Installations & Replacements",
                text: "New roofs, re-roofing, gutter replacements, and downpipes with clean finishing.",
              },
            ].map((b) => (
              <Card key={b.title} className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                  <p style={{ color: "#666666" }}>{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse existing components to keep site consistency */}
      <Services />
      <ContentBlock3 />
      <Testimonials />
      <ReviewsSlider />

      {/* Quote */}
      <section id="quote">
        <MapWithForm />
      </section>

      <Footer />
    </div>
  );
};

export const route: Route = {
  path: "/services/",
  element: <ServicesPage />,
  handle: {
    title: "Roofing & Guttering Services Sydney | Sydney Roofing & Gutters",
    meta: [
      {
        name: "description",
        content:
          "Explore Sydney Roofing & Gutters services: roof repairs, restorations, metal roofing, re-roofing, gutter repairs, gutter cleaning, downpipes and more. Get a fast, free quote.",
      },
      {
        name: "keywords",
        content:
          "roofing services sydney, guttering services sydney, roof repairs sydney, roof restoration sydney, metal roofing sydney, gutter repair sydney, gutter cleaning sydney, downpipe installation",
      },
    ],
  },
};

export default ServicesPage;