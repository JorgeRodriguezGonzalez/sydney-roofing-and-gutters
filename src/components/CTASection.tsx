'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Fondo sólido charcoal */}
      <div className="absolute inset-0 bg-primary"></div>
      
      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 text-center md:text-left md:max-w-2xl md:pr-8">
            <h2 className="text-[30px] font-medium text-white mb-2 mt-[50px]" style={{ fontFamily: 'Inter' }}>
              Ready for Expert Roofing Service?
            </h2>
            <p className="text-base font-normal text-white mb-[50px]" style={{ fontFamily: 'Inter' }}>
              24/7 emergency service available. Free inspections for all Newcastle residents.
            </p>
          </div>
          <div className="w-full py-1 md:w-auto md:flex-1 md:pl-8">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="attention" size="lg" className="px-8 py-4" asChild>
                  <a href="#contact-form">
                    Get Free Roof Inspection
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </a>
                </Button>
                <Button variant="professional" size="lg" className="px-8 py-4" asChild>
                  <a href="tel:1300796024">
                    Call Us Now: (02) 4089 4613
                    <Phone className="h-5 w-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}