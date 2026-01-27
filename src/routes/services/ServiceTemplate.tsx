// src/routes/services/ServiceTemplate.tsx
import type { Route } from "react-router";
import { useMemo } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";

import MapWithForm from "@/components/MapWithForm";
import FaqSection from "@/components/FaqSection";
import ContentBlock3 from "@/components/ContentBlock3";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Send } from "lucide-react";

export type ServiceSEOConfig = {
  serviceName: string; // e.g. "Roof Restoration"
  serviceSlug: string; // e.g. "roof-restoration"

  // Área geográfica (Australia)
  areaName: string; // e.g. "Sydney CBD" | "Baulkham Hills"
  areaSlug: string; // e.g. "sydney-cbd" | "baulkham-hills"
  latitude: string; // "-33.8688"
  longitude: string; // "151.2093"

  state?: string; // default: "NSW"
  country?: string; // default: "Australia"

  // Ruta final (si quieres controlar el path exacto)
  // Ejemplos:
  // - "/roof-restoration/" (servicio genérico)
  // - "/roof-restoration-sydney-cbd/" (servicio + área)
  path?: string;

  // Hero background (opcional)
  heroBg?: string; // e.g. "/images/hero-roof.webp"
};

export type ServiceContent = {
  hero: {
    eyebrow?: string;
    titleTop: string; // e.g. "ROOF RESTORATION"
    titleBottom: string; // e.g. "SYDNEY CBD"
    bullets: string[];
  };

  intro: {
    heading: string;
    paragraphs: string[];
  };

  why: {
    heading: string;
    points: Array<{ title: string; text: string }>;
  };

  process: {
    heading: string;
    steps: Array<{ title: string; text: string }>;
  };

  testimonial: {
    name: string;
    areaName: string;
    quote: string;
    rating?: number; // default 5
  };

  cta: {
    heading: string;
    text: string;
    buttonText?: string; // default: "GET QUOTE"
    buttonHref?: string; // default: "/contact/"
  };
};

const DEFAULTS = {
  baseUrl: "https://sydneyroofingandgutters.com.au",
  businessName: "Sydney Roofing & Gutters",
  phone: "1300796024",
  defaultHeroBg: "/images/hero-roof.webp",
};

function buildPath(cfg: ServiceSEOConfig) {
  return cfg.path ?? `/${cfg.serviceSlug}-${cfg.areaSlug}/`;
}

function buildSeo(cfg: ServiceSEOConfig) {
  const state = cfg.state ?? "NSW";
  const country = cfg.country ?? "Australia";
  const path = buildPath(cfg);
  const canonical = `${DEFAULTS.baseUrl}${path}`;

  const title = `${cfg.serviceName} ${cfg.areaName} | ${DEFAULTS.businessName}`;
  const description = `Professional ${cfg.serviceName.toLowerCase()} in ${cfg.areaName}, ${state}, ${country}. Licensed team, quality workmanship, and transparent quotes. Request a free quote today.`;
  const keywords = [
    `${cfg.serviceName} ${cfg.areaName}`,
    `${cfg.serviceName} ${state}`,
    `${cfg.serviceName} near me ${cfg.areaName}`,
    `roofing ${cfg.areaName}`,
    `guttering ${cfg.areaName}`,
    `${cfg.areaName} roofers`,
    `${cfg.areaName} roofing company`,
  ]
    .map((k) => k.toLowerCase())
    .join(", ");

  return { path, canonical, title, description, keywords, ogTitle: title, ogDescription: description };
}

function buildJsonLd(cfg: ServiceSEOConfig) {
  const seo = buildSeo(cfg);
  const state = cfg.state ?? "NSW";
  const country = cfg.country ?? "Australia";

  // Schema recomendado: Service + Provider (Local business)
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${seo.canonical}#business`,
        name: DEFAULTS.businessName,
        url: DEFAULTS.baseUrl,
        telephone: DEFAULTS.phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: country,
          addressRegion: state,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: `${cfg.areaName}, ${state}, ${country}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${seo.canonical}#service`,
        name: `${cfg.serviceName} in ${cfg.areaName}`,
        serviceType: cfg.serviceName,
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${cfg.areaName}, ${state}, ${country}`,
        },
        provider: {
          "@id": `${seo.canonical}#business`,
        },
        url: seo.canonical,
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: DEFAULTS.phone,
        },
      },
      {
        "@type": "Place",
        "@id": `${seo.canonical}#place`,
        name: cfg.areaName,
        geo: {
          "@type": "GeoCoordinates",
          latitude: cfg.latitude,
          longitude: cfg.longitude,
        },
      },
    ],
  };
}

export function ServiceSEO({ config }: { config: ServiceSEOConfig }) {
  const seo = buildSeo(config);
  const jsonLd = useMemo(() => buildJsonLd(config), [config]);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        schemaType="RoofingContractor"
        location={config.areaSlug}
        customName={DEFAULTS.businessName}
        customDescription={seo.description}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

function HeroWithForm({ cfg, content }: { cfg: ServiceSEOConfig; content: ServiceContent }) {
  const bg = cfg.heroBg ?? DEFAULTS.defaultHeroBg;

  return (
    <section className="relative">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('${bg}')` }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative pt-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-[#179DC2]/90 px-3 py-1 rounded-md text-xs font-bold mb-4">
                <span>A1</span>
                <span className="opacity-70">/</span>
                <span>{content.hero.eyebrow ?? `${content.hero.titleTop} in ${cfg.areaName}`}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {content.hero.titleTop}
                <br />
                {content.hero.titleBottom}
              </h1>

              <div className="mt-6 space-y-3 text-white/90 text-sm md:text-base">
                {content.hero.bullets.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span className="font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-end">
                <a
                  href={`tel:${DEFAULTS.phone}`}
                  className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-md font-bold shadow"
                >
                  <Phone className="h-4 w-4 text-red-600" />
                  {DEFAULTS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote card overlap */}
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative -mt-16 pb-10">
        <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="px-6 pt-6 pb-4 text-center">
            <div className="text-xl md:text-2xl font-extrabold">
              Request a <span className="text-[#179DC2]">FREE</span> Quote{" "}
              <span className="text-[#179DC2]">TODAY</span>
            </div>
          </div>

          <form className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="h-11 rounded-md border px-4" placeholder="First Name" />
              <input className="h-11 rounded-md border px-4" placeholder="Last Name" />
              <input className="h-11 rounded-md border px-4" placeholder="Phone Number" />
              <input className="h-11 rounded-md border px-4" placeholder="Email Address" />
              <input className="h-11 rounded-md border px-4 md:col-span-2" placeholder="Suburb" />
              <textarea
                className="min-h-[110px] rounded-md border px-4 py-3 md:col-span-2"
                placeholder="What seems to be the issue?"
              />
            </div>

            <Button type="button" className="w-full mt-5 h-11 rounded-md">
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                GET QUOTE
              </span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">{children}</div>
    </section>
  );
}

function TestimonialCard({ t }: { t: ServiceContent["testimonial"] }) {
  const stars = Math.max(1, Math.min(5, t.rating ?? 5));
  return (
    <div className="rounded-lg border shadow-sm p-6 bg-white">
      <div className="text-sm font-bold mb-2">{t.name}</div>
      <div className="text-xs text-[#666666] mb-3">
        {"★".repeat(stars)}{"☆".repeat(5 - stars)} <span className="ml-2">({t.areaName})</span>
      </div>
      <p className="text-sm leading-relaxed text-[#666666]">{t.quote}</p>
    </div>
  );
}

export function ServicePageTemplate({
  config,
  content,
}: {
  config: ServiceSEOConfig;
  content: ServiceContent;
}) {
  const ctaHref = content.cta.buttonHref ?? "/contact/";
  const ctaText = content.cta.buttonText ?? "GET QUOTE";

  return (
    <div className="min-h-screen flex flex-col">
      <ServiceSEO config={config} />
      <Header />

      <HeroWithForm cfg={config} content={content} />

      {/* Intro */}
      <Section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.intro.heading}</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
          {content.intro.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-6">
          <Button asChild className="rounded-md">
            <a href={ctaHref}>{ctaText}</a>
          </Button>
          <Button asChild variant="outline" className="rounded-md">
            <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              CALL US {DEFAULTS.phone}
            </a>
          </Button>
        </div>
      </Section>

      {/* Why */}
      <Section className="py-14 bg-[#F6F6F6]">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{content.why.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.why.points.map((p) => (
            <div key={p.title} className="bg-white rounded-lg border shadow-sm p-6">
              <div className="font-bold mb-2">{p.title}</div>
              <div className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                {p.text}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="py-14 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{content.process.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.process.steps.map((s, idx) => (
            <div key={s.title} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#179DC2] text-white font-bold flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <div className="font-bold mb-1">{s.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {s.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="py-12 bg-[#F6F6F6]">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Customer Review</h2>
        <div className="max-w-2xl mx-auto">
          <TestimonialCard t={content.testimonial} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-14 bg-white">
        <div className="rounded-2xl border-2 border-black/70 bg-white shadow-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{content.cta.heading}</h2>
          <p className="text-sm md:text-base mb-6" style={{ color: "#666666" }}>
            {content.cta.text}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild className="rounded-md">
              <a href={ctaHref}>{ctaText}</a>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                CALL US {DEFAULTS.phone}
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Reusa bloques globales */}
      <ContentBlock3 />
      <MapWithForm />
      <FaqSection />

      <Footer />
      <FloatingBanner />
    </div>
  );
}

/**
 * Factory para crear páginas mínimas:
 * const { Page, route } = createServiceRoute(config, content);
 * export const route = route;
 * export default Page;
 */
export function createServiceRoute(config: ServiceSEOConfig, content: ServiceContent) {
  const seo = buildSeo(config);

  const Page = () => <ServicePageTemplate config={config} content={content} />;

  const route = {
    path: seo.path,
    element: <Page />,
    handle: {
      title: seo.title,
      meta: [
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
      ],
    },
  } satisfies Route;

  return { Page, route };
}