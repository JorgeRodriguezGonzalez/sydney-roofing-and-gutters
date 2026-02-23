// src/routes/guides/GuideTemplate.tsx
import type { Route } from "react-router";
import { useMemo } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RelatedContentForGuide } from "@/components/RelatedContent";
import guideFaqs from "@/data/guide-faqs.json";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";

import ContentBlock3 from "@/components/ContentBlock3";
import MapWithForm from "@/components/MapWithForm";
import FaqSection from "@/components/FaqSection";

import { Button } from "@/components/ui/button";
import { Phone, CalendarDays, Clock, Tag, CheckCircle2 } from "lucide-react";

export type GuideSEOConfig = {
  title: string;        // e.g. "How Much Does It Cost To Fix A Roof Leak?"
  slug: string;         // e.g. "how-much-does-it-cost-to-fix-a-roof-leak"
  description: string;  // meta description (unique)
  keywords?: string;    // optional
  publishedISO?: string; // e.g. "2026-01-27"
  modifiedISO?: string;  // e.g. "2026-01-27"
  category?: string;     // default: "Guides"
  heroBg?: string;       // optional background
  path?: string;         // default: `/guides/${slug}/`
};

export type GuideContent = {
  hero: {
    eyebrow?: string;       // e.g. "GUIDE"
    headline: string;       // same as title, usually
    subheadline: string;    // 1–2 lines
    bullets?: string[];     // optional
  };

  intro: {
    paragraphs: string[];
  };

  sections: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;

  quickSummary?: {
    heading: string;
    bullets: string[];
  };

  testimonial: {
    name: string;
    location?: string; // e.g. "Sydney"
    quote: string;
    rating?: number; // default 5
  };

  cta: {
    heading: string;
    text: string;
    primaryText?: string; // default "GET QUOTE"
    primaryHref?: string; // default "/contact/"
  };

  tags?: string[];
  readingTime?: string; // "6 min read"
};

const DEFAULTS = {
  baseUrl: "https://sydneyroofingandgutters.com.au",
  businessName: "Sydney Roofing & Gutters",
  phone: "1300796024",
  heroBg: "/images/hero-roof.webp",
  category: "Guides",
};

function buildPath(cfg: GuideSEOConfig) {
  return cfg.path ?? `/guides/${cfg.slug}/`;
}

function buildCanonical(cfg: GuideSEOConfig) {
  return `${DEFAULTS.baseUrl}${buildPath(cfg)}`;
}

function buildJsonLd(cfg: GuideSEOConfig) {
  const canonical = buildCanonical(cfg);

  // JSON-LD tipo BlogPosting (válido para guías)
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: cfg.title,
    description: cfg.description,
    mainEntityOfPage: canonical,
    url: canonical,
    datePublished: cfg.publishedISO ?? undefined,
    dateModified: cfg.modifiedISO ?? cfg.publishedISO ?? undefined,
    author: {
      "@type": "Organization",
      name: DEFAULTS.businessName,
      url: DEFAULTS.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: DEFAULTS.businessName,
      url: DEFAULTS.baseUrl,
    },
  };
}

export function GuideSEO({ config }: { config: GuideSEOConfig }) {
  const canonical = buildCanonical(config);
  const jsonLd = useMemo(() => buildJsonLd(config), [config]);

  return (
    <>
      <SEOHead
        title={`${config.title} | ${DEFAULTS.businessName}`}
        description={config.description}
        keywords={config.keywords}
        ogTitle={config.title}
        ogDescription={config.description}
        schemaType="BlogPosting"
        location="sydney"
        customName={DEFAULTS.businessName}
        customDescription={config.description}
      />
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  const r = Math.max(1, Math.min(5, rating));
  return (
    <div className="text-xs text-[#666666]">
      {"★".repeat(r)}{"☆".repeat(5 - r)}
    </div>
  );
}

function MetaRow({
  category,
  readingTime,
  publishedISO,
  tags,
}: {
  category?: string;
  readingTime?: string;
  publishedISO?: string;
  tags?: string[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/90 mt-4">
      <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md">
        <Tag className="h-4 w-4" />
        {category ?? DEFAULTS.category}
      </span>
      {readingTime && (
        <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md">
          <Clock className="h-4 w-4" />
          {readingTime}
        </span>
      )}
      {publishedISO && (
        <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md">
          <CalendarDays className="h-4 w-4" />
          {publishedISO}
        </span>
      )}
      {tags?.length ? (
        <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md">
          <span className="font-semibold">Tags:</span> {tags.join(", ")}
        </span>
      ) : null}
    </div>
  );
}

export function GuidePageTemplate({
  config,
  content,
}: {
  config: GuideSEOConfig;
  content: GuideContent;
}) {
  const heroBg = config.heroBg ?? DEFAULTS.heroBg;

  return (
    <div className="min-h-screen flex flex-col">
      <GuideSEO config={config} />
      <FaqSchema slug={config.slug} />
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('${heroBg}')` }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative pt-14 pb-14">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#179DC2]/90 px-3 py-1 rounded-md text-xs font-bold text-white">
                {content.hero.eyebrow ?? "GUIDE"}
              </div>

              <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight mt-4">
                {content.hero.headline}
              </h1>

              <p className="text-white/90 text-sm md:text-lg mt-4 max-w-3xl">
                {content.hero.subheadline}
              </p>

              <MetaRow
                category={config.category}
                readingTime={content.readingTime}
                publishedISO={config.publishedISO}
                tags={content.tags}
              />

              {content.hero.bullets?.length ? (
                <div className="mt-6 space-y-3">
                  {content.hero.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                      <span className="font-semibold">{b}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <main className="py-14 bg-white">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <article className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
              {content.intro.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Quick summary */}
            {content.quickSummary?.bullets?.length ? (
              <div className="mt-8 rounded-xl border bg-[#F6F6F6] p-6">
                <h2 className="text-lg md:text-xl font-bold mb-4">{content.quickSummary.heading}</h2>
                <ul className="space-y-2">
                  {content.quickSummary.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start text-sm md:text-base" style={{ color: "#666666" }}>
                      <span className="mt-[3px]">✅</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Sections */}
            <div className="mt-10 space-y-10">
              {content.sections.map((s) => (
                <section key={s.id} id={s.id}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">{s.heading}</h2>
                  <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
                    {s.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {s.bullets?.length ? (
                      <ul className="mt-4 space-y-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 items-start">
                            <span className="mt-[3px]">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 rounded-xl border shadow-sm p-6 bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold">{content.testimonial.name}</div>
                  <div className="text-xs text-[#666666] mt-1">
                    {content.testimonial.location ? content.testimonial.location : "Australia"}
                  </div>
                </div>
                <Stars rating={content.testimonial.rating ?? 5} />
              </div>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
                “{content.testimonial.quote}”
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl border-2 border-black/70 bg-white shadow-md p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{content.cta.heading}</h2>
              <p className="text-sm md:text-base mb-6" style={{ color: "#666666" }}>
                {content.cta.text}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild className="rounded-md">
                  <a href={content.cta.primaryHref ?? "/contact/"}>{content.cta.primaryText ?? "GET QUOTE"}</a>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    CALL US {DEFAULTS.phone}
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Reusa bloques globales */}
      <ContentBlock3 />
      <MapWithForm />
      <FaqSection />

      <FaqSection slug={config.slug} />
      <RelatedContentForGuide guideSlug={config.slug} />

      <Footer />
      <FloatingBanner />
    </div>
  );
}

/**
 * Factory para crear páginas mínimas:
 * const { Page, route } = createGuideRoute(config, content);
 * export const route = route;
 * export default Page;
 */

type FaqItem = { q: string; a: string };
const faqData = guideFaqs as Record<string, FaqItem[]>;

function FaqSchema({ slug }: { slug: string }) {
  const faqs = faqData[slug];
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: FaqItem) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSection({ slug }: { slug: string }) {
  const faqs = faqData[slug];
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq: FaqItem, i: number) => (
            <details key={i} className="bg-[#F6F6F6] rounded-lg border">
              <summary className="px-5 py-4 font-semibold text-sm cursor-pointer hover:text-[#179DC2] transition-colors">
                {faq.q}
              </summary>
              <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function createGuideRoute(config: GuideSEOConfig, content: GuideContent) {
  const path = buildPath(config);

  const Page = () => <GuidePageTemplate config={config} content={content} />;

  const route = {
    path,
    element: <Page />,
    handle: {
      title: `${config.title} | ${DEFAULTS.businessName}`,
      meta: [
        { name: "description", content: config.description },
        ...(config.keywords ? [{ name: "keywords", content: config.keywords }] : []),
      ],
    },
  } satisfies Route;

  return { Page, route };
}