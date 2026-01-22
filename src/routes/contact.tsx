import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import MapWithForm from "@/components/MapWithForm";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";

const PHONE_DISPLAY = "1300 796 024";
const PHONE_TEL = "1300796024";
const EMAIL = "sales@sydneyroofingandgutters.com.au";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Contact Sydney Roofing & Gutters | Free Quote & Fast Response"
        description="Contact Sydney Roofing & Gutters for roof repairs, roof restoration, and guttering services across Sydney. Call 1300 796 024 or request a free quote online."
        keywords="contact sydney roofing, roofing quote sydney, guttering quote sydney, roof repairs sydney contact, sydney roofing and gutters phone"
        ogTitle="Contact Sydney Roofing & Gutters | Request a Free Quote"
        ogDescription="Get in touch with Sydney Roofing & Gutters. Call 1300 796 024 or request a free quote online. Fast response across Sydney."
        schemaType="RoofingContractor"
        location="sydney"
        customName="Sydney Roofing & Gutters"
        customDescription="Contact Sydney Roofing & Gutters for a free quote and fast response across Sydney suburbs."
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src="/images/hero-roof.webp"
            alt="Contact Sydney Roofing & Gutters"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Contact Sydney Roofing &amp; Gutters
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Need help with a leak, storm damage, roof restoration, or guttering work? Get in touch
              for a fast, free quote. We service Sydney suburbs and respond quickly.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${PHONE_TEL}`}>
                <Button size="lg" className="w-full sm:w-auto">
                  Call {PHONE_DISPLAY}
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

      {/* Contact cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="text-center mb-12">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#666666" }}>
              Call, email, or request a quote online. We’ll confirm the scope and provide a clear
              recommendation and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Call Us</h3>
                </div>
                <p style={{ color: "#666666" }}>
                  Speak with our team and tell us what’s happening. We’ll guide you and book an
                  inspection if needed.
                </p>

                <a href={`tel:${PHONE_TEL}`} className="block mt-6">
                  <Button className="w-full" size="lg">
                    {PHONE_DISPLAY}
                  </Button>
                </a>
                <p className="mt-3 text-sm" style={{ color: "#666666" }}>
                  Tap to call on mobile.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p style={{ color: "#666666" }}>
                  Prefer email? Send details and photos (if you have them). We’ll respond with next
                  steps.
                </p>

                <a href={`mailto:${EMAIL}`} className="block mt-6">
                  <Button className="w-full" size="lg" variant="secondary">
                    {EMAIL}
                  </Button>
                </a>
                <p className="mt-3 text-sm" style={{ color: "#666666" }}>
                  We usually reply quickly during the day.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Availability</h3>
                </div>

                <div className="space-y-3" style={{ color: "#666666" }}>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>Monday to Sunday — 24 hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <p>Servicing Sydney suburbs (NSW)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>Emergency assistance for urgent leaks</p>
                  </div>
                </div>

                <a href="#quote" className="block mt-6">
                  <Button className="w-full" size="lg">
                    Request a Quote
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section id="quote">
        <MapWithForm />
      </section>

      <Footer />
    </div>
  );
};

export const route: Route = {
  path: "/contact/",
  element: <ContactPage />,
  handle: {
    title: "Contact Sydney Roofing & Gutters | Free Quote & Fast Response",
    meta: [
      {
        name: "description",
        content:
          "Contact Sydney Roofing & Gutters for roof repairs, roof restoration, and guttering services across Sydney. Call 1300 796 024 or request a free quote online.",
      },
      {
        name: "keywords",
        content:
          "contact sydney roofing, roofing quote sydney, guttering quote sydney, roof repairs sydney contact, sydney roofing and gutters phone",
      },
    ],
  },
};

export default ContactPage;