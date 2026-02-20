// src/routes/calculator/CalculatorTemplate.tsx
import type { ReactNode } from "react";
import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const DEFAULTS = {
  baseUrl: "https://sydneyroofingandgutters.com.au",
  businessName: "Sydney Roofing & Gutters",
  phone: "1300796024",
};

export type CalculatorSEOConfig = {
  title: string;
  slug: string;
  description: string;
  keywords?: string;
  path?: string;
};

export type CalculatorPageProps = {
  config: CalculatorSEOConfig;
  heading: string;
  subheading?: string;
  children: ReactNode;
  relatedCalculators?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
};

function buildSeo(cfg: CalculatorSEOConfig) {
  const path = cfg.path ?? `/calculator/${cfg.slug}/`;
  const canonical = `${DEFAULTS.baseUrl}${path}`;
  const title = `${cfg.title} | ${DEFAULTS.businessName}`;
  return { path, canonical, title, description: cfg.description, keywords: cfg.keywords ?? "" };
}

function buildJsonLd(cfg: CalculatorSEOConfig) {
  const seo = buildSeo(cfg);
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: cfg.title,
    url: seo.canonical,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: DEFAULTS.businessName,
      url: DEFAULTS.baseUrl,
      telephone: DEFAULTS.phone,
    },
  };
}

export function CalculatorPageLayout({ config, heading, subheading, children, relatedCalculators }: CalculatorPageProps) {
  const seo = buildSeo(config);
  const jsonLd = useMemo(() => buildJsonLd(config), [config]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.title}
        ogDescription={seo.description}
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription={seo.description}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <Header />

      {/* Hero */}
      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{heading}</h1>
          {subheading && (
            <p className="text-lg opacity-90">{subheading}</p>
          )}
        </div>
      </section>

      {/* Calculator content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          {children}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F6F6F6]">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="rounded-2xl border-2 border-black/70 bg-white shadow-md p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Want an accurate quote?</h2>
            <p className="text-sm md:text-base mb-6" style={{ color: "#666666" }}>
              Online calculators provide estimates only. For an accurate quote based on a physical inspection of your property, get in touch with our team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="rounded-md">
                <a href="/contact/">GET QUOTE</a>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  CALL US {DEFAULTS.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      {relatedCalculators && relatedCalculators.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-7 lg:px-14 xl:px-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Other Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCalculators.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="bg-white rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="font-bold mb-2 group-hover:text-[#179DC2] transition-colors">{c.title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                    {c.description}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingBanner />
    </div>
  );
}

export function createCalculatorRoute(path: string, Page: () => JSX.Element) {
  return {
    path,
    element: <Page />,
    handle: { scrollToTop: true },
  };
}
